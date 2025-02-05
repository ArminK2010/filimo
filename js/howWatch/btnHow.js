async function btn() {
    let btns = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    btns = res.btnHow.map((elem) => {
      return `
     <a>${elem.title}</a>
          `;
    });
  document.querySelector("#btnHow").insertAdjacentHTML("afterbegin" , btns.join(""))
    
    
  } 
  export default btn;