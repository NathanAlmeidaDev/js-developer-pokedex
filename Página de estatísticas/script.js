const pokemonSelect = document.getElementById('pokemonSelect');
const pokemonImage = document.getElementById('pokemonImage');
const baseExperience = document.getElementById('baseExperience');
const height = document.getElementById('height');
const weight = document.getElementById('weight');

pokemonSelect.addEventListener('change', () => {
  const selectedPokemonId = pokemonSelect.value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonId}`)
    .then(response => response.json())
    .then(data => {
        // Atualizar o nome do Pokémon
      const pokemonName = document.getElementById('pokemonName');
      pokemonName.textContent = data.name; // Define o nome do Pokémon
      pokemonImage.src = data.sprites.front_default;
      baseExperience.textContent = data.base_experience;
      height.textContent = data.height;
      weight.textContent = data.weight;

      const types = data.types.map(type => type.type.name);
      const typeColors = {
        grass: '#78c850',
        fire: '#f08030',
        water: '#6890f0',
        electric: '#f8d030',
        /* Adicione mais tipos e cores conforme necessário */
      };
      const pokemonInfo = document.getElementById('pokemonInfo');
      pokemonInfo.style.backgroundColor = typeColors[types[0]] || '#f2f2f2'; // Cor padrão
    });
});
