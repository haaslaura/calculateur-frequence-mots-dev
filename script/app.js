// Il faut ensuite gérer l'affichage de la réponse
/*
- Ou afficher la réponse ?
- On peut afficher la réponse dans une pop-up
- Titre : Résultats
- Texte : voici les mots qui reviennent le plus souvent dans votre contenu :
- Liste les mots avec leur fréquence
*/

/*
Il faut réaliser la fonction qui calcule le nombre de mot
*/

export const calculateWordCount = () => {

}


// const phrase = "Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres.";
const phrase = textArea.value;

// Retirer les caractères spéciaux + passer la phrase en minuscule + séparer les mots
const regex = /[.,?!;()\[\]-]/g;
const frequencies = {};
const ignored = ['.', '?', '!', ':', ';', '"', '«', '»']
let cleanedPhrase = phrase.toLowerCase();
for(let character of ignored) {
    cleanedPhrase = cleanedPhrase.replaceAll(character, '');
}

const words = cleanedPhrase.split(' ');

// Parcourir le tableau de mot
for(let word of words){
    
    // Si mot trop petit on ne le prend pas en compte
    if(word.length >= 4) {
        
        // Si il existe déjà on ajoute
        if(frequencies[word]){
            frequencies[word]++;
        } else {
            // Sinon on le créé
            frequencies[word] = 1;
        }
    }
}

console.log(frequencies)

const frequenciesArray = [];

for (let k in frequencies) {
    frequenciesArray.push({
        word: k,
        count: frequencies[k]})
    }

frequenciesArray.sort((a, b) => b.count - a.count)
    
console.log(`Les mots les plus fréquents sont "${frequenciesArray[0].word}" (${frequenciesArray[0].count}), "${frequenciesArray[1].word}" (${frequenciesArray[1].count}) et "${frequenciesArray[2].word}" (${frequenciesArray[2].count}).`);


calcBtn.addEventListener("click", e => {
    e.preventDefault();
    console.log(("pouet"));
});