$(document).ready(function () {


$('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      $('.basic').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.product').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
   
    
  


});


let menues=document.querySelectorAll("#tab-carousel .tab-menu .item")
 let contents=document.querySelectorAll("#tab-carousel .contents .item")    

menues.forEach(menu => {
  menu.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".active-menu").classList.remove("active-menu");
    this.classList.add("active-menu");

    contents.forEach(content => {
      if(this.getAttribute("data-id")==content.getAttribute("data-id")){
        
        content.classList.remove("d-none")
      }
      else{
        content.classList.add("d-none")
      }

      
    });
  
  })
});


let items=document.querySelectorAll("#trending-products .list-products .item");

let cards=document.querySelectorAll("#trending-products .cards .product");


items.forEach(item => {
  
  item.addEventListener("click",function(e){
    e.preventDefault()
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    cards.forEach(card => {
      if(this.getAttribute("data-id")==card.getAttribute("data-id")){
        card.classList.remove("d-none")
      }

      else{
        card.classList.add("d-none");
      }
    });
  })
});


