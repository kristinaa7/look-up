//picture upload will upload a photo when the submit button is clicked
if (document.getElementById('pictureUpload')) {
  document
  .getElementById('pictureUpload')
  .addEventListener('submit', submitForm);
};

function submitForm(event) {
  event.preventDefault();

  const file = document.getElementById("file");
  console.log(file.files);
  const formData = new FormData();
  formData.append("file", file.files[0]);

  fetch("/api/posts", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log(response);
      window.location.reload();
     
    })
    .catch((err) => ("Something went wrong", err));
}

  
