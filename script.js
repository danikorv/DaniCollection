
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
            <div>${item.era}</div>
            <div>${item.number}</div>
            <div>${item.color}</div>
            <div>${item.rating}</div>
         </div>

      `;
   }
 
   placeholder.innerHTML = out;
});

// TO DO:
// sort by item.number