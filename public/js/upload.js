// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const files = document.querySelector("[type=file]").files;
    const formData = new FormData();
  
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "docs_upload_example_us_preset");
  
      fetch(url, {
        method: "POST",
        body: formData
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          document.getElementById("data").innerHTML += data;
        });
    }
  });
  
