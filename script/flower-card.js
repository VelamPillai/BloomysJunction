

function generateRandomPrice(min,max){
    return Math.floor(Math.random()*max+min);
}

export function makeImage(){
 
 const ACCESS_KEY = 'yGDyJTdWEuBjtBBuhg1Jz_z-1XHj64xHD6lsWHd592A';
const url = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=`;
const flowerImage = '';
const output= document.querySelector('#cardRow');
const cardListHeader = document.createElement('h3');
cardListHeader.textContent='Best Seller Bouquets';
output.parentElement.prepend(cardListHeader);
//cardListHeader.classList.add('')



 const getImage =async  ()=>{
    const response = await fetch(url + 'Bouquet of flowers');
    const data = await response.json();
    const results = data.results;
    //flowerImage = data.results;
    console.log(results);
    results.forEach(image=> {
        const flowerCard=document.createElement('div');
        flowerCard.innerHTML=`<div class="col-md-4">
        <div class="card m-5" style="width: 20rem">
          <img src=${image.urls.full} class="card-img-top"  alt="..." />
          <div class="card-body">
            <h5 class="card-title">${image.user.name}</h5>
          </div>
         
              <p id='pricePara' class=" text-black ">$ ${generateRandomPrice(10,60)}</p>
            
            
          </ul>
        </div>
        </div>`;
        
        output.append(flowerCard);
        

    })
    
    output.classList.add('d-flex','flex-wrap');
   

}
getImage();


}
/* 
*/