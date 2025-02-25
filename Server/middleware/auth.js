import jwt from 'jsonwebtoken';

export const auth = async(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({message:"unauthorized"})
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRETE);
        req.user = {userId:payload.userId,role:payload.role,firstName:payload.firstName,email:payload.email,lastName:payload.lastName}
        next()
    } catch (error) {
        return res.status(401).json({message:"Auth Failed"})
        
    }
}