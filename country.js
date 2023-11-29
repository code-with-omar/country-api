//Here fetch all country API and call a function. it's name os countriesAll
function loadCountry() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => countriesAll(countries))
}
// here display all countries name and it's capital. Last call a fumction with the name of showCountryDetails and pass parameter's is country code
function countriesAll(countries) {
    const divAllCountry = document.getElementById('all-countries');
    // for(let i=0;i<country.length;i++){
    //     console.log(country[i])
    // }
    // console.log(country)
    // for(let eachCountry of country){
    //     console.log(eachCountry)
    // }
    countries.forEach(country => {
        // console.log(country.capital ? country.capital[0] :'No Capital');
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>Name : ${country.name.common}</h3>
            <h4>Capital : ${country.capital ? country.capital[0] : 'No Capital'}</h4>
            <button onclick="showCountryDetails('${country.cca2}')">Show Details</button>
        `
        divAllCountry.appendChild(div)
    });
}
//here fetch new url for one fixed country and display it's details
const showCountryDetails = (code) => {


    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(response => response.json())
        .then(data => displayCountryDetails(data[0]))

}
const displayCountryDetails = country => {
    console.log(country.maps.googleMaps)
    const countryContiner = document.getElementById('country-details');
    countryContiner.innerHTML = `
        <h3>Name : ${country.name.common}</h3>
      
        <h3>Capital : ${country.capital[0]}</h3>
        <h3>Area : ${country.area} km<sup>2</sup></h3>
        <img src="${country.flags.png}" alt="">
  
        `
}
loadCountry()

