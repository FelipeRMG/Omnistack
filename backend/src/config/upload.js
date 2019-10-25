const multer = require('multer');
const path = require('path');

//Para especificar como será salvo as imagens
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname);

            cb(null, `${name}-${Date.now()}${ext}`)
        },
    })
};