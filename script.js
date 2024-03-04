

let countryList = [];
let countryNameNew = [];

fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        const countryName = (element.name.common).toLowerCase();
        countryList.push(countryName);
    });
})

fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        const countryName = (element.name.common);
        countryNameNew.push(countryName);
    });
})

const CName = document.getElementById("CName");
const CCity = document.getElementById("CCity");
const Currency = document.getElementById("Currency");
const Region = document.getElementById("Region");
const Languages = document.getElementById("Languages");



function countryCheck(){
    const InputCountry = document.getElementById("countryName").value.toLowerCase();
    if(countryList.includes(InputCountry)){
        for (let i = 0; i < countryList.length; i++) {
            if (countryList[i] === InputCountry) {
                index = i;
                break; // Once found, break the loop
            }
        }
        const countryName = countryNameNew[index]; // Replace "Your Country Name" with the name of the country you want to retrieve details for
    
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
            const country = data.find((element) => element.name.common === countryName);
    
            if (country) {
                CName.textContent = country.name.common;
                CCity.textContent = country.capital;
                Currency.textContent = country.currencies[Object.keys(country.currencies)[0]].name;
                Region.textContent = country.region;
                Languages.textContent = Object.values(country.languages).join(", ");
            }
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    }else{
        alert("Country Not Found");
    }


    
   
}

;