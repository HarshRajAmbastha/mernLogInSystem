// const jwt=require("jsonwebtoken")
// const User=require("../model/userSchema")

// const Authenticate=async (req,res,next)=>{
// try {
//     console.log(req.cookie)
//     const token=req.cookies.jwtoken;
//     console.log("below")
//     const verifyToken =jwt.verify(token,process.env.SECRET_KEY)
//     console.log(verifyToken)
//     const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token})
//     if(!rootUser){
//         throw new Error("User Not Found")
//     }
//     req.token=token;
//     req.rootUser=rootUser;
//     req.userID=rootUser._id;
//     next();
// } catch (error) {
//     res.status(401).send('Unauthorized : No token provided')
//     console.log(error)
// }
// }
// module.exports=Authenticate;
const jwt=require("jsonwebtoken")
const User=require("../model/userSchema")



function verify(req, res, next) {
  const authHeader = req.headers.token;
  console.log(authHeader)
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token)
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid");
      req.user = user;
      console.log(user)
      next();
    });
  } else {
    return res.status(402).json("You are not authorized");
  }
}

module.exports = verify;