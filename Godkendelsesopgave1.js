console.log("Opgave 1")
//Opgave 1

let hemmeligBesked = ['hej','klaus','vil','du','med','til','fodbold','i','klubben','i','aften','?','kurt'];

//1.1 Fjerner det sidste element i Array ved hjælp af pop()
let hemmeligBeskedPop = hemmeligBesked.pop();

//1.2 Tilføjer 4 elementer ved hjælp af push()
let hemmeligBeskedPush = hemmeligBesked.push('adressen','er','Priratvej','100');

//1.3 Finder positionen ved hjælp af indexOf() og erstarter ved hjælp af splice()
let hemmeligBeskedIndex = hemmeligBesked.indexOf('klaus');
let hemmeligBeskedSplice = hemmeligBesked.splice(1,hemmeligBeskedIndex,'bro!');

//1.4 Fjerner første element ved hjælp af shift()
let hemmeligBeskedShift = hemmeligBesked.shift();

//1.5 Bruger unshift til at tilføje element i starten
let hemmeligBeskedUnShift = hemmeligBesked.unshift('yo');

//1.6 Finder positionen for fodbold ved hjælp af indexOf() og erstarter ved hjælp af splice()
let hemmeligBeskedIndexFodbold = hemmeligBesked.indexOf('fodbold');
let hemmeligBeskedSplicePiratfest = hemmeligBesked.splice(hemmeligBeskedIndexFodbold,3,'piratfest');

//1.7 Bruger join(' ') til at sammenkæde strings fra array og indsætte mellemrum mellem dem
let faktiskBesked = hemmeligBesked.join(' ');
console.log(faktiskBesked)

console.log("Opgave 2")

/*Opgave 2: Har først lavet en function med name som parameter. 
Derefter udskiftet "bro!" med name ved hjælp af .replace, hvor jeg indsætter min parameter i stedet.
Indsætter også "på reffen"*/
function gørBeskedPersonlig(name){
    let faktiskBeskedReplace = faktiskBesked.replace("bro!",name);
    let faktiskBeskedReplace1 = faktiskBeskedReplace.replace("piratfest","piratfest på reffen");
console.log(faktiskBeskedReplace1);
};
gørBeskedPersonlig("Sigurd")

console.log("Opgave 3")

/*Opgave 3 Jeg har lavet nested objects som indeholder det påkrævede.
Derefter har jeg lavet et loop til beskeden og playlisten*/
let inviteret = {
    Sigurd: {
        sang: "Hit me baby one more time"},
    Tessa: {
        sang: "Ben"},
    Mia: {
        sang: "Love will tear us apart"}
};

for (let person in inviteret) {
    console.log(`Yo ${person} vil du med til piratfest på reffen i aften? Adressen er Piratvej 100`)
}
for (let playliste in inviteret) {
    console.log(`${inviteret[playliste].sang}`)
}
