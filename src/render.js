const renderPage = () => {
 const header = document.createElement('h1');
 header.innerHTML = "Sosa Grill";
 
 const img = document.createElement('img');
 img.src = "../images/burger.jpg";
 img.width = "300";

 const para = document.createElement('p');
 para.innerHTML = "Maximilien de Robespierre est l'aîné d'une fratrie de cinq enfants et il perd sa mère à l'âge de six ans. Son père abandonne le foyer et dès lors, Maximilien est pris en charge par son grand-père maternel. Après d'excellentes études au collège d'Arras et au";

 const content = document.getElementById('content');
 content.appendChild(header);
 content.appendChild(img);
 content.appendChild(para);
}

export { renderPage as default}
