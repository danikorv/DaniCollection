
fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <div class="boot">
            <div class=""boot-image> <img src='${item.boots}'> </div>
            <div class="era">${item.era}</div> 
            <div class="number">${item.number}</div> 
            <div class="color">${item.color}</div> 
            <div class="rating">${item.rating}</div> 

         
         </div>

      `;



   }
 
   placeholder.innerHTML = out;
});
 

