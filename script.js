

let countryList = [];

fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        countryList.push(element.name.common);
    });
})

function countryCheck(){
    const InputCountry = document.getElementById("countryName").value;
    if(countryList.includes(InputCountry)){
        alert("Country Found");
    }else{
        alert("Country Not Found");
    }
    
}

;