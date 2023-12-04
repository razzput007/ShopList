
async function geolocation(){
    try{
        let data=await fetch('https://fakestoreapi.com/products');
        let response=await data.json();
        console.log(response[0]);
        let tabledata="";
        response.map((item)=>{
            tabledata+=`  <tr class="row">
            <td>${item.title}</td>
            <td>${item.description} </td>
            <td>${item.price} </td>
            <td><img src="${item.image}" width="100px"/> </td>
         </tr>`
        })
        document.getElementById("table").innerHTML = tabledata;
        
    }
    catch(error){
       console.log(error);
    }

}

geolocation();
