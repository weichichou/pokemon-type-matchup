const { db, Pokemon } = require("./db");

db.sync({ force: true }).then(() => {
  Pokemon.create({ pokedexId: 1, name: "Bulbasaur" });
  Pokemon.create({ pokedexId: 2, name: "Ivysaur" });
  Pokemon.create({ pokedexId: 3, name: "Venusaur" });
  Pokemon.create({ pokedexId: 4, name: "Charmander" });
  Pokemon.create({ pokedexId: 5, name: "Charmeleon" });
  Pokemon.create({ pokedexId: 6, name: "Charizard" });
  Pokemon.create({ pokedexId: 7, name: "Squirtle" });
  Pokemon.create({ pokedexId: 8, name: "Wartortle" });
  Pokemon.create({ pokedexId: 9, name: "Blastoise" });
  Pokemon.create({ pokedexId: 10, name: "Caterpie" });
  Pokemon.create({ pokedexId: 11, name: "Metapod" });
  Pokemon.create({ pokedexId: 12, name: "Butterfree" });
  Pokemon.create({ pokedexId: 13, name: "Weedle" });
  Pokemon.create({ pokedexId: 14, name: "Kakuna" });
  Pokemon.create({ pokedexId: 15, name: "Beedrill" });
  Pokemon.create({ pokedexId: 16, name: "Pidgey" });
  Pokemon.create({ pokedexId: 17, name: "Pidgeotto" });
  Pokemon.create({ pokedexId: 18, name: "Pidgeot" });
  Pokemon.create({ pokedexId: 19, name: "Rattata" });
  Pokemon.create({ pokedexId: 20, name: "Raticate" });
  Pokemon.create({ pokedexId: 21, name: "Spearow" });
  Pokemon.create({ pokedexId: 22, name: "Fearow" });
  Pokemon.create({ pokedexId: 23, name: "Ekans" });
  Pokemon.create({ pokedexId: 24, name: "Arbok" });
  Pokemon.create({ pokedexId: 25, name: "Pikachu" });
  Pokemon.create({ pokedexId: 26, name: "Raichu" });
  Pokemon.create({ pokedexId: 27, name: "Sandshrew" });
  Pokemon.create({ pokedexId: 28, name: "Sandslash" });
  Pokemon.create({ pokedexId: 29, name: "Nidoran♀" });
  Pokemon.create({ pokedexId: 30, name: "Nidorina" });
  Pokemon.create({ pokedexId: 31, name: "Nidoqueen" });
  Pokemon.create({ pokedexId: 32, name: "Nidoran♂" });
  Pokemon.create({ pokedexId: 33, name: "Nidorino" });
  Pokemon.create({ pokedexId: 34, name: "Nidoking" });
  Pokemon.create({ pokedexId: 35, name: "Clefairy" });
  Pokemon.create({ pokedexId: 36, name: "Clefable" });
  Pokemon.create({ pokedexId: 37, name: "Vulpix" });
  Pokemon.create({ pokedexId: 38, name: "Ninetales" });
  Pokemon.create({ pokedexId: 39, name: "Jigglypuff" });
  Pokemon.create({ pokedexId: 40, name: "Wigglytuff" });
  Pokemon.create({ pokedexId: 41, name: "Zubat" });
  Pokemon.create({ pokedexId: 42, name: "Golbat" });
  Pokemon.create({ pokedexId: 43, name: "Oddish" });
  Pokemon.create({ pokedexId: 44, name: "Gloom" });
  Pokemon.create({ pokedexId: 45, name: "Vileplume" });
  Pokemon.create({ pokedexId: 46, name: "Paras" });
  Pokemon.create({ pokedexId: 47, name: "Parasect" });
  Pokemon.create({ pokedexId: 48, name: "Venonat" });
  Pokemon.create({ pokedexId: 49, name: "Venomoth" });
  Pokemon.create({ pokedexId: 50, name: "Diglett" });
  Pokemon.create({ pokedexId: 51, name: "Dugtrio" });
  Pokemon.create({ pokedexId: 52, name: "Meowth" });
  Pokemon.create({ pokedexId: 53, name: "Persian" });
  Pokemon.create({ pokedexId: 54, name: "Psyduck" });
  Pokemon.create({ pokedexId: 55, name: "Golduck" });
  Pokemon.create({ pokedexId: 56, name: "Mankey" });
  Pokemon.create({ pokedexId: 57, name: "Primeape" });
  Pokemon.create({ pokedexId: 58, name: "Growlithe" });
  Pokemon.create({ pokedexId: 59, name: "Arcanine" });
  Pokemon.create({ pokedexId: 60, name: "Poliwag" });
  Pokemon.create({ pokedexId: 61, name: "Poliwhirl" });
  Pokemon.create({ pokedexId: 62, name: "Poliwrath" });
  Pokemon.create({ pokedexId: 63, name: "Abra" });
  Pokemon.create({ pokedexId: 64, name: "Kadabra" });
  Pokemon.create({ pokedexId: 65, name: "Alakazam" });
  Pokemon.create({ pokedexId: 66, name: "Machop" });
  Pokemon.create({ pokedexId: 67, name: "Machoke" });
  Pokemon.create({ pokedexId: 68, name: "Machamp" });
  Pokemon.create({ pokedexId: 69, name: "Bellsprout" });
  Pokemon.create({ pokedexId: 70, name: "Weepinbell" });
  Pokemon.create({ pokedexId: 71, name: "Victreebel" });
  Pokemon.create({ pokedexId: 72, name: "Tentacool" });
  Pokemon.create({ pokedexId: 73, name: "Tentacruel" });
  Pokemon.create({ pokedexId: 74, name: "Geodude" });
  Pokemon.create({ pokedexId: 75, name: "Graveler" });
  Pokemon.create({ pokedexId: 76, name: "Golem" });
  Pokemon.create({ pokedexId: 77, name: "Ponyta" });
  Pokemon.create({ pokedexId: 78, name: "Rapidash" });
  Pokemon.create({ pokedexId: 79, name: "Slowpoke" });
  Pokemon.create({ pokedexId: 80, name: "Slowbro" });
  Pokemon.create({ pokedexId: 81, name: "Magnemite" });
  Pokemon.create({ pokedexId: 82, name: "Magneton" });
  Pokemon.create({ pokedexId: 83, name: "Farfetch’d" });
  Pokemon.create({ pokedexId: 84, name: "Doduo" });
  Pokemon.create({ pokedexId: 85, name: "Dodrio" });
  Pokemon.create({ pokedexId: 86, name: "Seel" });
  Pokemon.create({ pokedexId: 87, name: "Dewgong" });
  Pokemon.create({ pokedexId: 88, name: "Grimer" });
  Pokemon.create({ pokedexId: 89, name: "Muk" });
  Pokemon.create({ pokedexId: 90, name: "Shellder" });
  Pokemon.create({ pokedexId: 91, name: "Cloyster" });
  Pokemon.create({ pokedexId: 92, name: "Gastly" });
  Pokemon.create({ pokedexId: 93, name: "Haunter" });
  Pokemon.create({ pokedexId: 94, name: "Gengar" });
  Pokemon.create({ pokedexId: 95, name: "Onix" });
  Pokemon.create({ pokedexId: 96, name: "Drowzee" });
  Pokemon.create({ pokedexId: 97, name: "Hypno" });
  Pokemon.create({ pokedexId: 98, name: "Krabby" });
  Pokemon.create({ pokedexId: 99, name: "Kingler" });
  Pokemon.create({ pokedexId: 100, name: "Voltorb" });
  Pokemon.create({ pokedexId: 101, name: "Electrode" });
  Pokemon.create({ pokedexId: 102, name: "Exeggcute" });
  Pokemon.create({ pokedexId: 103, name: "Exeggutor" });
  Pokemon.create({ pokedexId: 104, name: "Cubone" });
  Pokemon.create({ pokedexId: 105, name: "Marowak" });
  Pokemon.create({ pokedexId: 106, name: "Hitmonlee" });
  Pokemon.create({ pokedexId: 107, name: "Hitmonchan" });
  Pokemon.create({ pokedexId: 108, name: "Lickitung" });
  Pokemon.create({ pokedexId: 109, name: "Koffing" });
  Pokemon.create({ pokedexId: 110, name: "Weezing" });
  Pokemon.create({ pokedexId: 111, name: "Rhyhorn" });
  Pokemon.create({ pokedexId: 112, name: "Rhydon" });
  Pokemon.create({ pokedexId: 113, name: "Chansey" });
  Pokemon.create({ pokedexId: 114, name: "Tangela" });
  Pokemon.create({ pokedexId: 115, name: "Kangaskhan" });
  Pokemon.create({ pokedexId: 116, name: "Horsea" });
  Pokemon.create({ pokedexId: 117, name: "Seadra" });
  Pokemon.create({ pokedexId: 118, name: "Goldeen" });
  Pokemon.create({ pokedexId: 119, name: "Seaking" });
  Pokemon.create({ pokedexId: 120, name: "Staryu" });
  Pokemon.create({ pokedexId: 121, name: "Starmie" });
  Pokemon.create({ pokedexId: 122, name: "Mr. Mime" });
  Pokemon.create({ pokedexId: 123, name: "Scyther" });
  Pokemon.create({ pokedexId: 124, name: "Jynx" });
  Pokemon.create({ pokedexId: 125, name: "Electabuzz" });
  Pokemon.create({ pokedexId: 126, name: "Magmar" });
  Pokemon.create({ pokedexId: 127, name: "Pinsir" });
  Pokemon.create({ pokedexId: 128, name: "Tauros" });
  Pokemon.create({ pokedexId: 129, name: "Magikarp" });
  Pokemon.create({ pokedexId: 130, name: "Gyarados" });
  Pokemon.create({ pokedexId: 131, name: "Lapras" });
  Pokemon.create({ pokedexId: 132, name: "Ditto" });
  Pokemon.create({ pokedexId: 133, name: "Eevee" });
  Pokemon.create({ pokedexId: 134, name: "Vaporeon" });
  Pokemon.create({ pokedexId: 135, name: "Jolteon" });
  Pokemon.create({ pokedexId: 136, name: "Flareon" });
  Pokemon.create({ pokedexId: 137, name: "Porygon" });
  Pokemon.create({ pokedexId: 138, name: "Omanyte" });
  Pokemon.create({ pokedexId: 139, name: "Omastar" });
  Pokemon.create({ pokedexId: 140, name: "Kabuto" });
  Pokemon.create({ pokedexId: 141, name: "Kabutops" });
  Pokemon.create({ pokedexId: 142, name: "Aerodactyl" });
  Pokemon.create({ pokedexId: 143, name: "Snorlax" });
  Pokemon.create({ pokedexId: 144, name: "Articuno" });
  Pokemon.create({ pokedexId: 145, name: "Zapdos" });
  Pokemon.create({ pokedexId: 146, name: "Moltres" });
  Pokemon.create({ pokedexId: 147, name: "Dratini" });
  Pokemon.create({ pokedexId: 148, name: "Dragonair" });
  Pokemon.create({ pokedexId: 149, name: "Dragonite" });
  Pokemon.create({ pokedexId: 150, name: "Mewtwo" });
  Pokemon.create({ pokedexId: 151, name: "Mew" });
});
