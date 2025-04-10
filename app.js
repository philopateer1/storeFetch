let dataVar = async function dataFetch(){
    let url = "https://fakestoreapi.com/products/";
    let response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    let data = await response.json();
    return data;
};

async function useData(clothing){
    try {
        let data = await clothing;
        data.forEach(element => {
            let {description: desc, price:price, title:title, category:cat, image:image} = element;
            let div =document.createElement("div");
            div.innerHTML = 
            `<div class="col">
            <div class="card h-100 border-dark mb-3">
            <img src="${image}" class="card-img-top img-fluid p-2" style="height: 300px; object-fit: contain;">
            <div class="card-body">
            <h2 class="card-title h5">${title}</h2>
            <p class="card-text">${desc}</p>
            <h5 class="text-primary">${price}$</h5>
            <h6 class="text-muted">Category: ${cat}</h6>
            <button class="btn btn-success btn-lg">Buy</button>
        </div>
            </div>
            </div>`;
            let shop = document.getElementById("shop");
            shop.appendChild(div);
        });
    }catch{
        console.log("Error");
    }
};

useData(dataVar());