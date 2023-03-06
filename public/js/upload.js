const pictureUpload = document.getElementById('pictureUpload')
console.log('pictureupload', pictureUpload);
pictureUpload.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const files = document.querySelector("[type=file]").files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "docs_upload_example_us_preset");
  
      console.log('form data', formData)

      fetch('/api/posts', {
        
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
  
