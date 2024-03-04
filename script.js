

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
        countryList.push(countryNameNew);
    });
})


function countryCheck(){
    const InputCountry = document.getElementById("countryName").value.toLowerCase();
    if(countryList.includes(InputCountry)){
        alert("Country Found");
    }else{
        alert("Country Not Found");
    }
    
}

;