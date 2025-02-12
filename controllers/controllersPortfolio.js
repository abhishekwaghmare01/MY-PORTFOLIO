const sendEmailColtroller = (req, res) =>{
        try {
                return res.status(200).send({
                    success:true,
                    message:"Your Message Send Successfully"
                })
            
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