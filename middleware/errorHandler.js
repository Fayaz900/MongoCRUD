const {CustomApiError} =  require('../middleware/custom-error')

const errMiddleware = (err,req,res,next)=>{

    if(err instanceof CustomApiError){
        console.log(err.statusCode);
         return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:'Something went wrong'})
   
}

module.exports = errMiddleware