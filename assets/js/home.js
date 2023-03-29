"use strict"

$(function(){
  
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
          slidesToScroll: 1,
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
     
        $('.product-selling').slick({
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
      
  
  menues.forEach(menu => {
    menu.addEventListener("click",function(e){
      e.preventDefault();
      document.querySelector(".active-menu").classList.remove("active-menu");
      this.classList.add("active-menu");
      

      let id=$(menu).data("id")

      $(`.responsive`).addClass("d-none")

      $(`.responsive[data-id=`+id+`]`).removeClass("d-none")
      $(`.responsive[data-id=`+id+`]`).slick("setPosition")


      // contents.forEach(content => {
      //   if(this.getAttribute("data-id")==content.getAttribute("data-id")){
          
      //     content.classList.remove("d-none")
      //   }
      //   else{
      //     content.classList.add("d-none")
      //   }
  
        
      // });
    
    })
  });
  
  
  let items=document.querySelectorAll("#trending-products .list-products .item");
  
  items.forEach(item => {
    
    item.addEventListener("click",function(e){
      e.preventDefault()
      document.querySelector(".active-tab").classList.remove("active-tab");
      this.classList.add("active-tab");
  
      let id = $(item).data('id');
  
      $('.product').addClass('d-none');
      $('.product[data-id='+id+']').removeClass('d-none');

      $('.product[data-id='+id+']').slick('setPosition');
  
      // cards.forEach(card => {
      //   if(this.getAttribute("data-id")==card.getAttribute("data-id")){
      //     card.classList.remove("d-none")
      //   }
      //   else{
      //     card.classList.add("d-none");
      //   }
      // });
    })
    
  });
  

  let sellingProducts=document.querySelectorAll("#top-selling .list-products .item");
  

  sellingProducts.forEach(product => {
    

    product.addEventListener("click",function(){

      document.querySelector(".active-product").classList.remove("active-product")
      this.classList.add("active-product");
  
  
      
      let id = $(product).data('id');
    
      $('.product-selling').addClass('d-none');
      $('.product-selling[data-id='+id+']').removeClass('d-none');
  
      $('.product-selling[data-id='+id+']').slick('setPosition');




    })
   

  });



})

let basketsClick=document.querySelectorAll("#tab-carousel .icon .fa-cart-shopping");

let basket=[];

if(JSON.parse(localStorage.getItem("basket"))!=null){
  basket=JSON.parse(localStorage.getItem("basket"));
}

basketsClick.forEach(btn => {
  
  btn.addEventListener("click",function(e){
    e.preventDefault();

    let cardImage=this.closest(".img").firstElementChild.getAttribute("src");
    let cardName=this.closest(".img").nextElementSibling.firstElementChild.children[1].innerText;
    let cardDesc=this.closest(".img").nextElementSibling.children[1].firstElementChild.firstElementChild.innerText;
    console.log(cardDesc);


  })
});