function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//tasks src = https://docs.google.com/document/d/1q1E8LNDrBtMSOsUQxFRW6swYC5dgKn1sq29XnapnJ9c/edit

//task1 Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
const wallet =[];
const walletLenght = rand(10, 30);
for (let i = 0; i < walletLenght; i++){
    wallet.push(rand(0, 10));
}
console.log(wallet);

//task2 Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
let moneySum = 0;
wallet.forEach(money => moneySum += money);
    console.log('Piniginėje yra: ', moneySum);

//task3 Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
let sumPaper = 0;
wallet.forEach(paper => {
    if(paper > 2){
        sumPaper += paper;
    }
});
console.log('papierinių pinigų suma yra: ', sumPaper);

//task4 Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
wallet.forEach((metal, i) => {
    if(metal <= 2){
        wallet[i] = 0;
        // metal = 0; why this don`t work?
    }
});
// for(let i=0; i < wallet.length; i++){
//     if(wallet[i] <= 2){
//         wallet[i] = 0;
//     }
// }
console.log(wallet);

//task5 Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
let max = 0;
let counter=0;
wallet.forEach(e => {
    if(e > max){
        max = e;
    }
});
wallet.forEach(e => {
    if(e === max){
        counter++;
    }
})
console.log('Didžiausia reikšmė yra: ', max, ', ji pasikarotja ', counter);

//task6 Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
//jei pirmas elementas yra 0 jis liks nuliu
wallet.forEach((e, i) => {
    if(e === 0){
        wallet[i] = i;
    }
});
console.log(wallet);

//task7 Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
const needAdd = 30 - wallet.length;
for(let i = 0; i < needAdd; i++){
    wallet.push(rand(0, 10));
}
console.log(wallet);

//task8 Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. 
// Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
// 0 guanasi skaitosi kaip monetos
const coins = [];
const paperMoney = [];
wallet.forEach(money => {
    (money > 2) ? paperMoney.push(money) : coins.push(money);
})
console.log('Popieriniai pinygai pinigineje ', paperMoney);
console.log('Monetos pinigineje ', coins);

//task9 Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, 
//o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
const wallet2 = [coins, paperMoney];

//task10 Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
const cards = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
wallet2.push(cards);
console.log(wallet2);

//task11 Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
wallet2[2].sort();
console.log(wallet2);

//task12 Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą)
// iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
const neeAddCards = 20 - cards.length;
console.log(neeAddCards)
for(let i = 0; i < neeAddCards; i++){
    wallet2[2].push(rand(0, 1) ? 'MasterCard' : 'Visa');
}
console.log(wallet2[2]);

//task13 Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
let counterOfMasterCard = 0;
let counterOFVisa = 0;
wallet2[2].forEach(card => {
    if(card === 'Visa'){
        counterOFVisa++;
    }else if(card === 'MasterCard'){
        counterOfMasterCard++;
    }
});
console.log('Visa kortelių piniginėje: ', counterOFVisa, ' MasterCard kortelių piniginėje: ', counterOfMasterCard);

//task14 Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, 
//kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
const lotteryTicket = [];
wallet2.push(lotteryTicket);
for(let i = 0; i < 10; i++){
    lotteryTicket.push(rand(1000000000, 9999999999));
}
console.log(wallet2[3]);

//task15 Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
wallet2[3].sort(function(a, b) {
    return a - b;
});
console.log(wallet2[3]);

//task16 Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom 
//( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500); 
// jei visi atsitiktiniai tai gali buti nuo 500 iki 509 
let sumCheck1 = 0;
wallet2[1].forEach(money => sumCheck1 += money);
let addCash = 500;
while (addCash >= 0){
    const paperCash = rand(3, 10);
    wallet2[1].push(paperCash);
    addCash = addCash - paperCash;
}
let sumCheck2 = 0;
wallet2[1].forEach(money => sumCheck2 += money);
let sumCheck = sumCheck2 - sumCheck1;
console.log('Popierinių pinigų: ', wallet2[1], 'Patrikra: ', sumCheck);

//task17 Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
let winnings = 0;
//one wining ticked for test :D
wallet2[3].push(777777777777);
wallet2[3].forEach(ticket => {
    if(ticket % 777 === 0){
        winnings++;
        console.log('Bilietas nr: ', ticket, 'yra laimingas');
    }
});
console.log('Bilietai: ', wallet2[3]);
console.log('išviso laimėimų ', winnings);
//task18 Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
wallet2.push(['šuo', 'katė', 'automobilis', 'namas', 'kiemas']);
console.log(wallet2[4]);
wallet2[4].sort(function(a, b) {
    return a.length - b.length;
});
console.log(wallet2[4]);