const Service = require("../model/service_model");

const services = async (req, res) => {
    try {
        const service_Data = await Service.find();
        if (!service_Data) {
            res.status(200).json({ message: "Server Down sorry for inconvenience" })
        }
        res.status(200).json({ message: service_Data })

    } catch (error) {
        console.log(error)

    }

}

module.exports = services;