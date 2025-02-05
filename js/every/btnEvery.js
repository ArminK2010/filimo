async function btnsEvery() {
    let btn = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    btn = res.btnEvery.map((elem) => {
      return `
           <a>${elem.title}</a>
          `;
    });
  document.querySelector("#btnEvery").insertAdjacentHTML("afterbegin" , btn.join(""))
    
    
  } 
export default btnsEvery;