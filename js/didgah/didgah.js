async function didgahTitle() {
    let One = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    One = res.didgahTitle.map((elem) => {
      return `
      <h2>${elem.title}</h2>
      
          `;
    });
  document.querySelector("#titleDidgah").insertAdjacentHTML("afterbegin" , One.join(""))
    
    
  } 
  export default didgahTitle;