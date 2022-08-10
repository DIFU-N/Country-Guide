// const apiUrl = 'https://restcountries.com/v3.1/name/'+name+'?fullText=true';

async function getCountry(called) {
    const response = await fetch('https://restcountries.com/v3.1/name/'+called+'?fullText=true');
    const data = await response.json();
    console.log(data);
    const {currencies, capital, name, languages, independent, population, flags, unMember, continents} = data[0];
    const {AWG} = currencies;
    // const {symbol} = AWG;
    // const {} = languages;
    const {official} = name;
    const {svg} = flags;

    document.getElementById('country').textContent = official;
    // document.getElementById('curr').textContent = symbol;
    document.getElementById('cap').textContent = capital[0];
    document.getElementById('pop').textContent = population;
    document.getElementById('um').textContent = unMember;
    document.getElementById('cont').textContent = continents;
    document.getElementById('ind').textContent = independent;
    // document.getElementById('lang').textContent = languages;

    catchFlag().catch(error => {
        console.log('error');
        console.error(error);
    });

    async function catchFlag() {
        const respondez = await fetch(svg),
        blob = await respondez.blob();
        document.getElementById('flg').src = URL.createObjectURL(blob);
    }
};
function search(){
    this.getCountry(document.querySelector(".type").value)
}
document.querySelector(".btn").addEventListener("click", function() {
    search();
})
//to use enter key to search
let ent = document.getElementById('type');
ent.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('btn').click();
    }
})

getCountry("called");