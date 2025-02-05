async function didgahTitle() {
    let One = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    One = res.didgahThree.map((elem) => {
      return `
      <img src="${elem.icon}" alt="">
     <p>${elem.karbar}</p>
     <h3>${elem.title}</h3>
          `;
    });
  document.querySelector("#didgahThree").insertAdjacentHTML("afterbegin" , One.join(""))
  } 
  export default didgahTitle;