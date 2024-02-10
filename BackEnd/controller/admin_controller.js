const User = require("../model/user_model");
const Contact = require("../model/contact_model")

const getAllUser = async(req, res)=>{
    try {
        const AllUsers = await User.find({},{password: 0});
        res.status(200).json(AllUsers)
        
    } catch (error) {
        res.status(400).json({message: "User Not Found"})
        
    }

}

// get contact information

const getAllContact=async(req, res)=>{
    try {
        const AllContact = await Contact.find();
        res.status(200).json(AllContact)       
    } catch (error) {
        res.status(400).json({message: "Contact detail Not Found"})
        
    }
}

// Delete contact detail
const DeleteContact = async(req, res)=>{
    try {
        const id = req.params.id;
        const deleteCont = await Contact.deleteOne({_id:id})
        return res.status(200).json({message: "contact message is Deleted"})
        
    } catch (error) {
        return res.status(400).json({message: error})
        
    }
}

// Delete user

const DeleteUser = async (req, res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id})
        return res.status(200).json({message: "User Deleted"})
        
    } catch (error) {
        return res.status(400).json({message: error})
        
    }
}

// Update user

const updateUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const updatedUser = await User.findOne({_id: id}, {password: 0})
        return res.status(200).json({updatedUser})

        
    } catch (error) {
        return res.status(400).json({message: error})
        
        
    }
}

// Updation put in the data

const updationCompleted = async(req, res)=>{
    try {
        const id = req.params.id;
        const Data = req.body;
       const updatedData= await User.updateOne({_id:id}, {$set: Data});
       return res.status(200).json({updatedData})
        
    } catch (error) {
        return res.status(400).json({error})
        
    }

}

module.exports = {getAllUser, getAllContact, DeleteUser, updateUser, updationCompleted, DeleteContact};