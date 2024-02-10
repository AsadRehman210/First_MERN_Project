const Contact = require ("../model/contact_model")
const contact = async(req, res)=>{
    try {
        const {username, email, message} = req.body;
        await Contact.create({username, email, message})
        return res.status(201).json({message: "Message send Successfully"})

        
    } catch (error) {
        return res.status(500).json({Error: "Message not send"})
        
    }

}

module.exports = contact;
