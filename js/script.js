console.log("Let's go !");

let Frame1 = document.querySelector("#Frame1");

let LogoGryffondor = document.querySelector("#GryffondorLogo");
let LogoPoufsouffle = document.querySelector("#PoufsouffleLogo");
let LogoSerredaigle = document.querySelector("#SerredaigleLogo");
let LogoSerpentard = document.querySelector("#SerpentardLogo");

console.log(LogoGryffondor);

LogoGryffondor.addEventListener("click", () => {
  console.log("cliqué sur Gryffondor");
  loadData("Gryffindor");
});
LogoPoufsouffle.addEventListener("click", () => {
  console.log("cliqué sur Poufsouffle");
  loadData("Hufflepuff");
});
LogoSerredaigle.addEventListener("click", () => {
  console.log("cliqué sur Serredaigle");
  loadData("Ravenclaw");
});
LogoSerpentard.addEventListener("click", () => {
  console.log("cliqué sur Serpentard");
  loadData("Slytherin");
});

loadData();

async function loadData(maison = "all") {
Frame1.innerHTML="";

  // On peut utiliser le await sans être dans une fonction async si notre fichier JS est un module
  const reponse = await fetch("https://hp-api.onrender.com/api/characters");
  const listHP = await reponse.json();

  console.log(listHP);

  let newListHP = maison !== "all" ? listHP.filter((HP) => HP.house === maison) : listHP

  for (let index = 0; index < 8; index++) {
    const HP = newListHP[index];
    let main = document.querySelector("#Frame1");
    let article = document.createElement("article");

    article.innerHTML = `
      <div class="characterElement">
      <img
        class="charactersPicture"
        src="${HP.image}"
        alt="${HP.name}Picture"
      />
      <p>${HP.name}</p>
    </div>`;
    let img = article.querySelector("img");
    img.addEventListener("mouseover", () => {
      console.log("survole");
      let color;
      switch (HP.house) {
        case "Gryffindor":
          color = "#B71713";
          break;

        case "Slytherin":
          color = "#124B10";
          break;

        case "Hufflepuff":
          color = "#E1B50C";
          break;

        case "Ravenclaw":
          color = "#078CB1";
          break;
      }
      let img = article.querySelector("img");
      img.style.borderColor = color;
    });

    img.addEventListener("mouseout", () => {
      console.log("survole plus");
      let color = "#B99049";
      let img = article.querySelector("img");
      img.style.borderColor = color;
    });

    main.appendChild(article);
  }
}
