const fetchCaracter = async function () {
    try {
      const caracterNumber = Math.floor(Math.random() * 88) + 1;
      const response = await fetch(`https://swapi.py4e.com/api/people/${caracterNumber}`);
      const caracter = await response.json();
  
      // Update the people object with the fetched data
      document.getElementById('name').textContent = caracter.name;
      document.getElementById('gender').textContent = caracter.gender;
      document.getElementById('height').textContent = caracter.height;
      document.getElementById('birth_year').textContent = caracter.birth_year;
    //iterate in the film table :
            const filmsContainer = document.getElementById('films');
            filmsContainer.innerHTML = ''; // Clear any previous content

            caracter.films.forEach((film) => {
                const filmElement = document.createElement('div');
                filmElement.classList.add('sharedStyles');
                filmElement.innerHTML = `${film}<br>`;
                filmsContainer.appendChild(filmElement);
            }); 
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };
  
  
