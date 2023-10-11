console.log("Let's go !");

// On peut utiliser le await sans être dans une fonction async si notre fichier JS est un module
const reponse = await fetch("https://hp-api.onrender.com/api/characters");
const listHP = await reponse.json();

console.log(listHP);

for (let index = 0; index < 8; index++) {
  const HP = listHP[index];
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
        color = "#078CB1";
        break;

      case "Ravenclaw":
        color = "#E1B50C";
        break;
    }
    let img = article.querySelector("img");
    img.style.borderColor = color;
  });

  img.addEventListener("mouseout", () => {
    console.log("survole plus")
  let color = "#B99049";
  let img = article.querySelector("img");
  img.style.borderColor = color;
});

  main.appendChild(article);
}


