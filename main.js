
//copied from https://www.educative.io/answers/how-to-create-an-automatic-slideshow-with-html-css-and-js 
  let index = 0;
  displayImages();
  function displayImages() {
    let i;
    const images = document.getElementsByClassName("image");
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    index++;
    if (index > images.length) {
      index = 1;
    }
    images[index-1].style.display = "block";
    setTimeout(displayImages, 4000); 
  }
