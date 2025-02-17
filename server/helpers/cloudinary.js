const cloudinary = require(
    'cloudinary').v2;
    const multer = require('multer');


    cloudinary.config({
        cloud_name:'dczajnrxd',
        api_key:'485284249565893',
        api_secret:'Bw6meJOfFQq5GUg-1EuK_Nd0Ouk',
    });

    const storage = new multer.memoryStorage();


    async function ImageUplaodUtils(file){
        const result = await cloudinary.uploader.upload(file,{
            resource_type :'auto',
        })
        return result;
    }

    const upload = multer({storage});

    module.exports = {upload,ImageUplaodUtils}