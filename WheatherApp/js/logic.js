const apiKey="768a10a7dbb130045204a017861dbbd4";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
        const searchinput=document.querySelector(".search input");  
        const searchbtn=document.querySelector(".search button");
        const cloudIcon=document.querySelector(".cloud-icon");
        const error=document.querySelector(".error");
        
        async function wheatherCheck(city)
        {
          const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
          
          if(response.status==404)
          {
            document.querySelector(".error").style.display="block";
            document.querySelector(".search input").style.border="2px solid red"
          }
          else
          {
            
            var data= await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            if(data.wind.speed==0)
              document.querySelector(".wind").innerHTML= "0.0"+"&nbspkm/h";
            else
              document.querySelector(".wind").innerHTML= data.wind.speed +"&nbspkm/h";
          

           if(data.weather[0].main=="Clouds")
           {
            cloudIcon.src = "images/clouds.png";
            }

           else if(data.weather[0].main=="Clear")
           {
           cloudIcon.src = "images/clear.png";
           }

           else if(data.weather[0].main=="Haze")
           {
           cloudIcon.src = "images/mist.png";
           }

           else if(data.weather[0].main=="Drizzle")
           {
           cloudIcon.src = "images/drizzle.png";
           }

            else if(data.weather[0].main=="Rain")
            {
            cloudIcon.src = "images/rain.png";
            }

            else if(data.weather[0].main=="Snow")
            {
            cloudIcon.src = "images/snow.png";
            }

            document.querySelector(".error").style.display="none";
            document.querySelector(".search input").style.border=""
          }

        }
        
        searchbtn.addEventListener("click", ()=>{
          wheatherCheck(searchinput.value);
        });
        searchinput.addEventListener("keypress", function(event){
          if(event.key==="Enter"){
            wheatherCheck(searchinput.value);
          }
        });
        
    