let div = document.createElement('div'); // Créer un élément div
div.id = 'all_data'; // Définir l'identifiant de l'élément div
document.body.appendChild(div); // Ajouter l'élément div au corps de la page

all_data = document.getElementById("all_data");

// Charger les données depuis le fichier JSON
fetch('https://maximeue4.github.io/the-blanche-box/data.json')
  .then(response => response.json())
  .then(data => {
    // Parcourir chaque élément de la liste
    i = 1;
    data.forEach(element => {
        // Créer l'élément canvas
        let canvas = document.createElement('canvas');
        canvas.style.backgroundColor = 'white';
        canvas.width = 400;
        canvas.height = 200;
        canvas.id = i;

        // Créer l'élément script
        let script = document.createElement('script');
        script.textContent = `startGraph("${i}","${element.name}",[${element.data}],${element.value_x},"${element.unity}");`;

        // Ajouter les éléments à l'élément all_data
        all_data.appendChild(canvas);
        all_data.appendChild(script);

        i += 1;
    });
  })
