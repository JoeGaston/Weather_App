document.querySelector('button').addEventListener('click', getFetch)//This initiates the button

function getFetch(){
  const city = document.querySelector('input').value //city input
  let APIkey = 'a2c83c291eaa6cb257a054bfc566456b'
  const geoLocate = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`


  fetch(geoLocate) 
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let lat = data[0].lat //my attempt to store the location of input
        let lon = data[0].lon
        console.log(data.lat) //why is this undefined
      .catch(err => {
          console.log(`error ${err}`)
      });
})

// const showWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`

//   fetch(showWeather)
//     .then(res => res.json()) // parse response as JSON
//         .then(data => {
//           console.log(data)
//         .catch(err => {
//             console.log(`error ${err}`)
//         });

// })
}


// 1. Need to use the geocode API to turn City input into Lat/Long 
// 2. Need to take the lat/long coordinates and plug them into the API call that will receive the weather.
      // Where do I store lat/long?
      // Do i need a seperate API call?
      // It seems as though I may need to do async/await to pull off what I am doing.
// 3. 
// 4.
// 5. 