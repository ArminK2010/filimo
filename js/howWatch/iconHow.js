async function icon() {
    let icons = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    icons = res.iconHow.map((elem) => {
      return `
      <img src="${elem.icon}" alt="${elem.alt}">
      <h2>${elem.title}</h2>
      <p>${elem.lorem}</p>
          `;
    });
  document.querySelector("#iconHow").insertAdjacentHTML("afterbegin" , icons.join(""))
    
    
  } 
  export default icon;