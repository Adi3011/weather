const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById("cityname");
const city_output = document.getElementById("city_output");

const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");

const datahide =document.querySelector(".middle_layer");

const getInfo = async(event) =>{
    event.preventDefault();
   let cityVal = cityname.value;
    if(cityVal === ""){
        city_output.innerText = `Please write the name before you search`
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=54e8e1fc0e02c0a187cbfabcfc929d5b`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            const arrData = [data];

            city_output.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood =arrData[0].weather[0].main;

            if(tempMood == 'Clear'){
                temp_status.innerHTML =
                "<i class = 'fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood == 'Clouds'){
                temp_status.innerHTML =
                "<i class = 'fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if(tempMood =='Rain'){
                temp_status.innerHTML =
                "<i class = 'fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML =
                "<i class = 'fas fa-sun' style='color: #eccc68;'></i>";
            }

            
            datahide.classList.remove('data_hide');
    
        }catch(err){
            city_output.innerText = `Please enter city name properly`
            datahide.classList.add('data_hide');
        }
      
    }


}
submitBtn.addEventListener('click',getInfo);