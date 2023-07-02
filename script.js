// function on click burger btn
  document.querySelector("#btn-1").addEventListener("click", function () {
    let menu = document.querySelector("#menu");  
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else if(menu.style.display = "none"){
      menu.style.display = "flex";
    }
  });
 // function to changed class when clicked on li a 
  document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector("#menu");

    menu.addEventListener("click", function(event) {
      if (event.target.tagName === "A") {
        let allLinks = menu.querySelectorAll("a");
        for (let link of allLinks) {
          if (link === event.target) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      }
    });
  });
//function on scroll
  window.addEventListener('scroll', function() {
    let sP = window.scrollY;
    
    if (sP >= 555 && sP<=1316) {
      document.querySelector('.p-html').style.width = '90%';
      document.querySelector('.p-css').style.width = '85%';
      document.querySelector('.p-js').style.width = '70%';
      document.querySelector('.p-bs').style.width = '80%';
      document.querySelector('.p-jq').style.width = '60%';
      document.querySelector('.p-sass').style.width = '85%';
    } else if (sP >= 1416) {
      document.querySelector('.p-html').style.width = '0%';
      document.querySelector('.p-css').style.width = '0%';
      document.querySelector('.p-js').style.width = '0%';
      document.querySelector('.p-bs').style.width = '0%';
      document.querySelector('.p-jq').style.width = '0%';
      document.querySelector('.p-sass').style.width = '0%';
    }
  }); 
// function for small devices
  document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector("#menu");
    let list = menu.children; // Assuming the UL is the first child of #menu
    
    // Loop through the list items and add click event listeners
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", function() {
        if (i === 0 && window.innerWidth<=712) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          document.querySelector("#menu").style.display="none"
          
        } else if (i === 1 && window.innerWidth<=712) {
          window.scrollTo({ top: 506, behavior: 'smooth' });
          document.querySelector("#menu").style.display="none"
          
        } else if (i === 2 && window.innerWidth<=712) {
          window.scrollTo({ top: 2290, behavior: 'smooth' });
          document.querySelector("#menu").style.display="none"

        } else if (i === 3 && window.innerWidth<=712) {
          window.scrollTo({ top: 3565, behavior: 'smooth' });
          document.querySelector("#menu").style.display="none"
        }
      });
    }
    
  
  });
  
  
  