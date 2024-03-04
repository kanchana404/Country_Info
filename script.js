

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

let countrySelect = document.getElementById("country");

fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        let options = data.map((element) => element.name.common);

        // Sort the options alphabetically
        options.sort();

        // Add the sorted options to the dropdown
        options.forEach((optionText) => {
            let option = document.createElement("option");
            option.value = optionText;
            option.text = optionText;
            countrySelect.appendChild(option);
        });
    });


    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        let options = data.map((element) => element.name.common);

        // Sort the options alphabetically
        options.sort();

        // Add the sorted options to the dropdown
        options.forEach((optionText) => {
            let option = document.createElement("option");
            option.value = optionText;
            option.text = optionText;
            countrySelect.appendChild(option);
        });
    });


const CName = document.getElementById("CName");
const CCity = document.getElementById("CCity");
const Currency = document.getElementById("Currency");
const Region = document.getElementById("Region");
const Languages = document.getElementById("Languages");
const UserCountry = document.getElementById("countryName");
const countrySelect1 = document.getElementById("country");
const flag = document.getElementById("flag");
const Location = document.getElementById("Location");
const time = document.getElementById("time");




function countryCheck22(){
    

   if(UserCountry.value.length >= 0 &&  countrySelect1.value == "Select A country" ){
    if(countryList.includes(UserCountry.value.toLowerCase())){
        for (let i = 0; i < countryList.length; i++) {
            if (countryList[i] === UserCountry.value.toLowerCase()) {
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
                console.log(country);
                CName.textContent = country.name.common;
                CCity.textContent = country.capital;
                Currency.textContent = country.currencies[Object.keys(country.currencies)[0]].name;
                Region.textContent = country.region;
                Languages.textContent = Object.values(country.languages).join(", ");
                flag.src = country.flags.png;
                Location.href = country.maps.googleMaps;
              




                
            }
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    }else{
        alert("Country Not Found");
    }


    
   }else if(UserCountry.value.length <= 0 &&  countrySelect1.value != "Select A country"){
    if(countryList.includes(countrySelect1.value.toLowerCase())){
        for (let i = 0; i < countryList.length; i++) {
            if (countryList[i] === countrySelect1.value.toLowerCase()) {
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
                console.log(country);
                CName.textContent = country.name.common;
                CCity.textContent = country.capital;
                Currency.textContent = country.currencies[Object.keys(country.currencies)[0]].name;
                Region.textContent = country.region;
                Languages.textContent = Object.values(country.languages).join(", ");
                flag.src = country.flags.png;
                Location.href = country.maps.googleMaps;




                
            }
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    }else{
        alert("Country Not Found");
    }


   }else{
      alert("Please Use one method")
   }

}



function countryCheck(){
    
   
    
   
}

;