const renderTabOne = () => {
	const content = "ONE Omari Ishmael Grandberry, né le 12 novembre 1984 à Inglewood en (Californie) et plus connu sous le nom d’Omarion (Prononcez oma-ri-onne), est un chanteur afro-américain de RnB, danseur, acteur, parolier, producteur de disques, fondateur du groupe 2 Much et ancien chanteur leader du boys band B2K.";
	const mainContainer = document.querySelector('.container');
	mainContainer.innerHTML = content;
}

export { renderTabOne }