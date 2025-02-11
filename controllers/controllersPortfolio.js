const sendEmailColtroller = (req, res) =>{
        try {
                
            
        } catch (err) {
            console.log(err);
            return res.status(500).send({
                success:false,
                message:"Send Email API error",
                error   
            });
        }
}
module.exports = {
    sendEmailColtroller
}