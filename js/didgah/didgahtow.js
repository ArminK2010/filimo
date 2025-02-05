async function didgahTow() {
  let Tow = "";
  let data = await fetch("https://armink2010.github.io/dbjson/db.json");
  let res = await data.json();
  Tow = res.didgahTow.map((elem) => {
    return `
      <img src="${elem.icon}" alt="">
     <p>${elem.karbar}</p>
     <h3>${elem.title}</h3>
          `;
  });
  document
    .querySelector("#didgahTow")
    .insertAdjacentHTML("afterbegin", Tow.join(""));
}
export default didgahTow;
