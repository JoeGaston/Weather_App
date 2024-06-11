//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  // console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=vAaWgcWIvcrrOPVdptRfWmbPaAhda1fZhty51fK4&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

      .catch(err => {
          console.log(`error ${err}`)
      });
}

