const User = require("../model/user_model");
const Contact = require("../model/contact_model");
const Service = require("../model/service_model");

const getAllUser = async (req, res) => {
    try {
        const AllUsers = await User.find({}, { password: 0 });
        res.status(200).json(AllUsers)

    } catch (error) {
        res.status(400).json({ message: "User Not Found" })

    }

}

// get contact information

const getAllContact = async (req, res) => {
    try {
        const AllContact = await Contact.find();
        res.status(200).json(AllContact)
    } catch (error) {
        res.status(400).json({ message: "Contact detail Not Found" })

    }
}

// Delete contact detail
const DeleteContact = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteCont = await Contact.deleteOne({ _id: id })
        return res.status(200).json({ message: "contact message is Deleted" })

    } catch (error) {
        return res.status(400).json({ message: error })

    }
}

// Delete user

const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.find({ _id: id })
        if (user && !user[0].isAdmin) {
            await User.deleteOne({ _id: id })
            return res.status(200).json({ message: "User Deleted" })
        }
        return res.status(200).json({ message: "You are Admin" })


    } catch (error) {
        return res.status(400).json({ message: error })

    }
}

// Update user

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await User.findOne({ _id: id }, { password: 0 })
        return res.status(200).json({ updatedUser })


    } catch (error) {
        return res.status(400).json({ message: error })


    }
}

// Updation put in the data

const updationCompleted = async (req, res) => {
    try {
        const id = req.params.id;
        const Data = req.body;
        const updatedData = await User.updateOne({ _id: id }, { $set: Data });
        return res.status(200).json({ updatedData })

    } catch (error) {
        return res.status(400).json({ error })

    }

}

// ===============================================================================
// AdminService Controller
// ===============================================================================

const getAllServices = async (req, res) => {
    try {
        const serviceData = await Service.find();
        res.status(200).json({ serviceData })

    } catch (error) {
        res.status(400).json({ message: error })

    }
}

// deleteService

const deleteService = async (req, res) => {
    try {
        const id = req.params.id;
        await Service.deleteOne({ _id: id })
        res.status(200).json({ message: "Deleted Successfully" })
        console.log("Deleted Successfully")

    } catch (error) {
        res.status(400).json({ message: "Didn't Deleted Successfully" })
        console.log("Didn't Deleted Successfully")

    }

}

// get For ServiceUpdation
const getForServiceUpdation = async (req, res)=>{
    try {
        const id = req.params.id;
        const serviceData = await Service.findOne({_id:id});
        res.status(200).json({serviceData})
        
    } catch (error) {
        res.status(400).json({message: error})
        
    }
    
}

// updation completed and updat in database
const updationcompleted = async (req, res)=>{
    try {
        const id = req.params.id;
        const Data = req.body;
        const DataUpdated= await Service.updateOne({_id:id}, {$set: Data});
        return res.status(200).json({DataUpdated})
        
    } catch (error) {
        return res.status(400).json({message: error})
        
    }

}

// service Creation
const ServiceCreation = async (req, res)=>{
    try {
        const {service, description, price, provider} = req.body;
        const serviceData = await Service.create({service, description, price, provider});
        return res.status(201).json({serviceData})
        
    } catch (error) {
        res.status(400).json({error})
        
    }
}

module.exports = { getAllUser, getAllContact, DeleteUser, updateUser, updationCompleted, DeleteContact, getAllServices, deleteService, getForServiceUpdation, updationcompleted, ServiceCreation };