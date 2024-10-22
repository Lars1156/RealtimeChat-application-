const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = 'Kishan@1156';

const registerUser = async (userName, email, password) =>{
    const user = await User.findOne({email});
    if (user) throw new Error('User already exists');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = new User({
        userName,
        email,
        password: hashedPassword
      });
      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    
      return token;    
}

const  loginUser = async(email , password) =>{
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');
  
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  
    return token;
}

const getUserById = async(userId) =>{
    const user = await User.findById(userId).select('-password');
    if (!user) throw new Error('User not found');
    return user;
}

module.exports  = {
    registerUser , 
    loginUser, 
    getUserById
}