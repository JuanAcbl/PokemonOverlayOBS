
async function getData() {

  for (let i = 1; i <= 6; i++) {
      let pokemonNuevo = document.getElementById(i).value;
      const url = "https://pokeapi.co/api/v2/pokemon/"+pokemonNuevo;
      document.getElementById("pokemon"+i).classList.remove('newGen')
      document.getElementById("pokemon"+i).classList.add('oldGen')
       if(pokemonNuevo<650){
          if(!pokemonNuevo==""){      
         document.getElementById("pokemon"+i).style.backgroundImage = "url("+ "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+
         pokemonNuevo+".gif"+")"
          }else{
              document.getElementById("pokemon"+i).style.backgroundImage = "url("+''+")"
          } 
        }else{
            const url = "https://pokeapi.co/api/v2/pokemon/"+pokemonNuevo;
          try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
          
              if(!pokemonNuevo==""){
              const json = await response.json();
              document.getElementById("pokemon"+i).classList.remove('oldGen')
              document.getElementById("pokemon"+i).classList.add('newGen')
              document.getElementById("pokemon"+i).style.backgroundImage = "url("+json.sprites.front_default+")"
              }else{
                  document.getElementById("pokemon"+i).style.backgroundImage = "url("+''+")"
                  
              }
            } catch (error) {
              console.error(error.message);
            }
        }       
    };
}
 