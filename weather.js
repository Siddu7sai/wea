let inputele=document.getElementById("location-input")
let tempele =document.getElementById("temp-value")
let locele  =document.getElementById('location')
let weatherdescele=document.getElementById("weather-desc")
let dire=document.getElementById("lat")
let btnele = document.getElementById("btn")
const apikey='c409f4552ec39756ec81991505b115dd';


btnele.onclick=function(){
    if(inputele.value =="")
    alert("please enter the some location")
    else{
        loc = inputele.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        fetch(url).then(res=>res.json())
        .then(data=>{
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            const{lat}=data.coord
            tempele.innerText=Math.floor(feels_like-273);
            locele.innerText=name;
            weatherdescele.innerText=description;
            dire.textContent=lat
        })
        .catch(()=>{
            alert("enter the valid location");
        })
        inputele.value=""    
    }

}
