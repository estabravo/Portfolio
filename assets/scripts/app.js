
        $(document).click(function (event) {

            /// If *navbar-collapse* is not among targets of event
            if (!$(event.target).is('.navbar-collapse *')) {
    
            /// Collapse every *navbar-collapse*
            $('.navbar-collapse').collapse('hide');
                }
            });

     
        //   function reveal() {
        //     var reveals = document.querySelectorAll(".reveal");
          
        //     for (var i = 0; i < reveals.length; i++) {
        //       var windowHeight = window.innerHeight;
        //       var elementTop = reveals[i].getBoundingClientRect().top;
        //       var elementVisible = 150;
          
        //       if (elementTop < windowHeight - elementVisible) {
        //         reveals[i].classList.add("active");
        //       } else {
        //         reveals[i].classList.remove("active");
        //       }
        //     }
        //   }
          
        //   window.addEventListener("scroll", reveal);

          const reveal = () => {
            const reveals = document.querySelectorAll(".reveal");
          
            for (let i = 0; i < reveals.length; i++) {
              const windowHeight = window.innerHeight;
              const elementTop = reveals[i].getBoundingClientRect().top;
              const elementVisible = 110;
          
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
            
          }

          window.addEventListener("scroll", reveal);


          const btn = document.querySelector("#button-18");
          const para = document.querySelectorAll('.iconToggle');
          
          btn.addEventListener('click',()=>{
            para.forEach(el => {
              el.classList.toggle('d-none');
            })
          })


          //toggle var
// var fade_state = true;
// //on btn click
// function fade() {
//   //get the button and div
//   let div = document.getElementById("div");
//   let btn = document.getElementById("fade");
//   //if faded in or out
//   if (fade_state == true) {
//     //trigers animation
//     div.style.animation = "fade-out 2s forwards";
//     //sets the text
//     btn.innerHTML = "fade-in";
//     //sets fade_state
//     fade_state = false;
//   } else if (fade_state == false) {
//     //trigers animation
//     div.style.animation = "fade-in 2s forwards";
//     //sets the text
//     btn.innerHTML = "fade-out";
//     //sets fade_state
//     fade_state = true;
//   }
// }

window.onload = function(){
  clearItForm.reset();
}