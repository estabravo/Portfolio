
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
              const elementVisible = 150;
          
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
            
          }

          window.addEventListener("scroll", reveal);

         