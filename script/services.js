export function getServices() {
  const ACCESS_KEY = "yGDyJTdWEuBjtBBuhg1Jz_z-1XHj64xHD6lsWHd592A";
  const url = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=`;
  const flowerImage = "";
  const output2 = document.querySelector("#serviceImage2");
  const output1 = document.querySelector("#serviceImage1");

  const getImage = async () => {
    const response = await fetch(url + "Flower arrangement");
    const data = await response.json();
    const results = data.results;
    
    [0, 4, 9].forEach((element) => {
      const img = document.createElement("img");
      img.src = results[element].urls.full;
      img.classList.add('m-2');
      img.style.width='310px';
      img.style.height='310px';
      output1.append(img);
    });
    [1,6].forEach((element) => {
        const img = document.createElement("img");
        img.src = results[element].urls.full;
        img.style.width='310px';
      img.style.height='310px';
        img.classList.add('m-2');
        output2.append(img);
      });
      
  };

  
  getImage();

  const list = document.querySelector('#servicesList');
  const service = ['Births','Birthdays','Bridal Showers','Weddings','Corporate Events','Special Events','Funerals']
  service.forEach(element=>{
    const listItem = document.createElement('li');
    listItem.textContent=element;
     listItem.classList.add('m-2','fw-bolder'); 
    list.append(listItem);
    
  })
}
