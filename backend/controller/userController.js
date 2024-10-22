const userServices = require('../services/userServices');
// User registration Controller 
const register = async(req,res)=>{
    try {
        const { username, email, password } = req.body;
        const token = await userServices.registerUser(username, email, password);
        res.json({ token });
    } catch (error) {
        return res.status(400).json('Internal Server Error');
    }
};
// Login User Controller
const login = async(req,res) =>{
    try {
          const {email , password} = req.body;
          const toekn = await userServices.loginUser(email , password);
          res.json({toekn});
    } catch (error) {
        
    }
}
// / Get user info
const getUser = async (req, res) => {
  try {
    const user = await userServices.getUserById(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


module.exports = {
    register,
    login,
    getUser
}