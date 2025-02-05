async function loremEnd() {
    let One = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    One = res.loremEnd.map((elem) => {
      return `
      <img src="${elem.src}" alt="">
      <P>${elem.title}</P>
          `;
    });
  document.querySelector("#loremEnd").insertAdjacentHTML("afterbegin" , One.join(""))
    
    
  } 
  export default loremEnd;