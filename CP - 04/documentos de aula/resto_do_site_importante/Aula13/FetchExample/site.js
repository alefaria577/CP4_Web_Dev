const ul = 
  document.getElementById("cars");

fetch("cars.json")
  .then(res => res.json())
  .then(cars => {
    ul.innerHTML = cars 
      .map(c => `<li>${c}</li>`)
      .join("");
  });



  