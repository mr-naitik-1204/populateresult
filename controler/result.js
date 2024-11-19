let Usermodal = require('../modal/Mark')

exports.createdata = async (req, res) => {
    const data = req.body
    try {
        const createdata = await Usermodal.create(data)
        res.status(200).json({
            status: "success",
            Message: 'data enter succes',
            Data: createdata
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: "not enter"
        })

    }
}

exports.showdata = async (req, res) => {
    const showdata = await Usermodal.find()

    try {
        res.status(200).json({
            status: "success",
            Message: 'all data show',
            Data: showdata
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: error.Message,
            data: []
        })
    }
}
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