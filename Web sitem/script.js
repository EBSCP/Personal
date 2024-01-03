function changeImage() {
    var images = document.querySelectorAll('.image-container img');


    images.forEach(function(image) {
      image.src = '/indir.png';
    });
  }
  
  function resetImage() {
    var images = document.querySelectorAll('.image-container img');
  
    images.forEach(function(image) {
      image.src = '/indir (2).png';  
     
    });
  }