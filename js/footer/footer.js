async function footer() {
    let One = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    One = res.footer.map((elem) => {
      return `
      <p>${elem.title}</p>
          `;
    });
  document.querySelector("#footers").insertAdjacentHTML("afterbegin" , One.join(""))
    
    
  } 
  export default footer;