console.log("Let's go !")

    // On peut utiliser le await sans être dans une fonction async si notre fichier JS est un module
    const reponse = await fetch("https://hp-api.onrender.com/api/characters")
    const listHP = await reponse.json()

    console.log(listHP);

  for (let index = 0; index < 8; index++) {
    const HP = listHP[index];
      let main = document.querySelector("#Frame1")
      let article = document.createElement("article")
  
      article.innerHTML = `
      <div>
      <img
        class="charactersPicture"
        src="${HP.image}"
        alt="${HP.name}Picture"
      />
      <p>${HP.name}</p>
    </div>`
  
      let color
      switch (HP.house) {
        case "Gryffindor":
          color = "Red"
          break
  
        case "Slytherin":
          color = "green"
          break
  
        case "Hufflepuff":
          color = "Blue"
          break
  
        case "Ravenclaw":
          color = "yellow"
          break
      }
  
      article.style.borderColor = color
  
      main.appendChild(article)
    }