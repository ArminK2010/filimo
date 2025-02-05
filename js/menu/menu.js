async function menu() {
  let mainManu = "";
  let data = await fetch("https://armink2010.github.io/dbjson/db.json");
  let res = await data.json();
  
  mainManu = res.mainMenu.map((item) => {
    return `
             <li>
     ${item.icon ? `<img src="${item.icon} alt="icon"` : ""}
               <a href=${item.href}>${item.title}</a>
             </li>`;
  });
  document
    .querySelector("#mainManu > ul")
    .insertAdjacentHTML("afterbegin", mainManu.join(""));
}


async function mainBtns() {
  let mainBtns = "";
  let data = await fetch("https://armink2010.github.io/dbjson/db.json");
  let res = await data.json();
  mainBtns = res.menuBtns.map((item) => {
    return `
             <button class=${item.id ===1? "subscribe" : "login"}>
       <img src="${item.icon}" alt="">
                        
                        <a href="${item.href}">${item.title}</a>
                    </button>
                   `;
  });
  document
    .querySelector("#groupBtns")
    .insertAdjacentHTML("afterbegin", mainBtns.join(""));
}

export default {menu,mainBtns};
