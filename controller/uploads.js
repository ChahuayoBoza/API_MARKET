const { response } = require("express");
const { uploadFile } = require("../helpers/upload-file");

const uploadArchive= async(req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
            res.status(400).json({
                msg: 'No se encontro archivos para subirlos'
            });
            return;
    }

    const name = await uploadFile(req.files);
    
    res.json({
        name
    });
};

module.exports = {
    uploadArchive,
};
