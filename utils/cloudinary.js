const cloudinary = require ('cloudinary').v2;


//host login data for cloudinary profile
cloudinary.config ({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_KEY_SECRET
});

module.exports = cloudinary;