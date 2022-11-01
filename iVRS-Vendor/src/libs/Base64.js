// create function convert pdf file to base64
export async function convertPdfToBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}

// create function convert base64 to pdf file
export async function convertBase64ToPdf(base64) {
  var linkSource = "data:application/pdf;base64," + base64;
  var downloadLink = document.createElement("a");
  var fileName = "file.pdf";

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}

// create function convert image file to base64
export async function convertImageToBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}

// create function convert base64 to image file
export async function convertBase64ToImage(base64) {
  var linkSource = "data:image/jpeg;base64," + base64;
  var downloadLink = document.createElement("a");
  var fileName = "file.jpeg";

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}

// create function convert video file to base64
export async function convertVideoToBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}

// create function convert base64 to video file
export async function convertBase64ToVideo(base64) {
  var linkSource = "data:video/mp4;base64," + base64;
  var downloadLink = document.createElement("a");
  var fileName = "file.mp4";

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}
