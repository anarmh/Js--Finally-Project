"use strict";

let products = JSON.parse(localStorage.getItem("basket"));

let tableBody = document.querySelector("#cart .cart-info");

let cartTotal = document.querySelector("#cart .cart-total");

if (products != null) {
  products.forEach((product) => {
    tableBody.innerHTML += `
        <!-- <tr data-id="${product.id}">
        <td><img src="${product.image}" alt=""></td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>
            <div class="input">
                <div class=" icon prev "><i class="fa-solid fa-minus"></i></div>
                <input type="number" ${product.count} value="1">
                <div class="icon next"><i class="fa-solid fa-plus"></i></div>
            </div>
        </td>
        <td>${product.price}</td>
        <td><i class="fa-solid fa-xmark"></i></td>
      </tr> -->`;


  });
}
else{

    tableBody.parentNode.classList.add("d-none");
    
}
