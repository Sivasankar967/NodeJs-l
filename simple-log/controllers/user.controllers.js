import User from "../model/schema.js";

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
        if(!user) return res.send({status:404,message:"user not found"})
        if(user){
            if(user.password === password){
                res.send({status:200, message:"login successfully"})
            }
            else{
                res.send({status:402,message:"wrong credentials"})
            }
        }
    // res.send({ message: "got the resp" });
    console.log(user);
  } catch (err) {   
    console.log(err);
  }
};

// export const signup = async (req, res)=>{
//     try{
//         // const salt = bcrypt.genSaltSync(10);
//         // const hash = bcrypt.hashSync(req.body.password, salt);
//         const newUser = new User({...req.body});

//         await newUser.save()
//         res.status(200).send("user has been created!")
//     }catch(err){
//         console.log(err)
    }
}
