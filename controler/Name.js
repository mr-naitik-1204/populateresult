let Usermodal = require('../modal/Name')
exports.createdata = async (req, res) => {
    const { name, resultid } = req.body; // Assuming resultid is sent in the request body

    try {
        // Create a new Name document with the resultid referring to an existing Mark
        const createdata = await Usermodal.create({ name, resultid });

        res.status(200).json({
            status: "success",
            message: 'Data entered successfully',
            data: createdata
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: "Data not entered",
        });
    }
};
exports.showdata = async (req, res) => {
    try {
        // Find all Name documents and populate the 'resultid' field with the associated Mark data
        const showdata = await Usermodal.find().populate('resultid'); // Populate the 'resultid' reference

        res.status(200).json({
            status: "success",
            message: 'All data fetched successfully',
            data: showdata // This will include 'resultid' populated with Mark data
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message,
            data: []
        });
    }
};
exports.deletedata = async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedata = await Usermodal.findByIdAndDelete(userId);

        res.status(200).json({
            status: "success",
            message: 'Data deleted successfully',
            data: deletedata
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message,
            data: []
        });
    }
};


exports.updatedata = async (req, res) => {
    const userId = req.params.id;

    try {
        const updatedata = await Usermodal.findByIdAndUpdate(userId,req.body);

        res.status(200).json({
            status: "success",
            message: 'Data updeted successfully',
            data: updatedata
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message,
            data: []
        });
    }
};