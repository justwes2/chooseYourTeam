const pokemon = [
  "Venusaur",
  "Charizard",
  "Blastoise",
  "Butterfree",
  "Beedrill",
  "Pidgeot",
  "Raticate",
  "Alolan Raticate",
  "Fearow",
  "Arbok",
  "Raichu",
  "Alolan Raichu",
  "Sandslash",
  "Alolan Sandslash",
  "Nidoqueen",
  "Nidoking",
  "Clefable",
  "Ninetales",
  "Alolan Ninetales",
  "Wigglytuff",
  "Vileplume",
  "Parasect",
  "Venomoth",
  "Dugtrio",
  "Alolan Dugtrio",
  "Persian",
  "Alolan Persian",
  "Golduck",
  "Primeape",
  "Arcanine",
  "Poliwrath",
  "Alakazam",
  "Machamp",
  "Victreebel",
  "Tentacruel",
  "Golem",
  "Alolan Golem",
  "Rapidash",
  "Farfetch'd",
  "Dodrio",
  "Dewgong",
  "Muk",
  "Alolan Muk",
  "Cloyster",
  "Gengar",
  "Hypno",
  "Kingler",
  "Electrode",
  "Exeggutor",
  "Alolan Exeggutor",
  "Marowak",
  "Alolan Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Weezing",
  "Kangaskhan",
  "Seaking",
  "Starmie",
  "Mr_Mime",
  "Jynx",
  "Pinsir",
  "Tauros",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Omastar",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dragonite",
  "Mewtwo",
  "Mew",
  "Meganium",
  "Typhlosion",
  "Feraligatr",
  "Furret",
  "Noctowl",
  "Ledian",
  "Ariados",
  "Crobat",
  "Lanturn",
  "Xatu",
  "Ampharos",
  "Bellossom",
  "Azumarill",
  "Sudowoodo",
  "Politoed",
  "Jumpluff",
  "Sunflora",
  "Quagsire",
  "Espeon",
  "Umbreon",
  "Slowking",
  "Unown",
  "Wobbuffet",
  "Girafarig",
  "Forretress",
  "Dunsparce",
  "Gilgar",
  "Steelix",
  "Granbull",
  "Qwilfish",
  "Scizor",
  "Shuckle",
  "Heracross",
  "Ursaring",
  "Magcargo",
  "Corsola",
  "Octillery",
  "Delibird",
  "Mantine",
  "Skarmory",
  "Houndoom",
  "Kingdra",
  "Donphan",
  "Stantler",
  "Smeargle",
  "Hitmontop",
  "Miltank",
  "Blissey",
  "Raikou",
  "Entei",
  "Suicune",
  "Tyranitar",
  "Lugia",
  "Ho-Oh",
  "Celebi",
  "Sceptile",
  "Blaziken",
  "Swampert",
  "Mightyena",
  "Linoone",
  "Beautifly",
  "Dustox",
  "Ludicolo",
  "Shiftry",
  "Swellow",
  "Pelipper",
  "Gardevoir",
  "Masquerain",
  "Breloom",
  "Slaking",
  "Ninjask",
  "Shedinja",
  "Exploud",
  "Hariyama",
  "Delcatty",
  "Sableye",
  "Mawile",
  "Aggron",
  "Medicham",
  "Manectric",
  "Plusle",
  "Minun",
  "Volbeat",
  "Illumise",
  "Swalot",
  "Sharpedo",
  "Wailord",
  "Camerupt",
  "Torkoal",
  "Grumpig",
  "Spinda",
  "Flygon",
  "Cacturne",
  "Altaria",
  "Zangoose",
  "Seviper",
  "Lunatone",
  "Solrock",
  "Whiscash",
  "Crawdaunt",
  "Claydol",
  "Cradily",
  "Armaldo",
  "Milotic",
  "Castform",
  "Kecleon",
  "Banette",
  "Tropius",
  "Chimecho",
  "Absol",
  "Glalie",
  "Walrein",
  "Huntail",
  "Gorebyss",
  "Relicanth",
  "Luvdisc",
  "Salamence",
  "Metagross",
  "Regirock",
  "Regice",
  "Registeel",
  "Latias",
  "Latios",
  "Kyogre",
  "Groudon",
  "Rayquaza",
  "Jirachi",
  "Deoxys",
  "Torterra",
  "Infernape",
  "Empoleon",
  "Staraptor",
  "Bibarel",
  "Kricketune",
  "Luxray",
  "Roserade",
  "Rampardos",
  "Bastiodon",
  "Wormadam-Grass",
  "Wormadam-Ground",
  "Wormadam-Steel",
  "Mothim",
  "Vespiquen",
  "Pachirisu",
  "Floatzel",
  "Cherrim",
  "Gastrodon",
  "Ambipom",
  "Drifblim",
  "Lopunny",
  "Mismagius",
  "Honchkrow",
  "Purugly",
  "Skuntank",
  "Bronzong",
  "Chatot",
  "Spiritomb",
  "Garchomp",
  "Lucario",
  "Hippowdon",
  "Drapion",
  "Toxicroak",
  "Carnivine",
  "Lumineon",
  "Abomasnow",
  "Weavile",
  "Magnezone",
  "Lickilicky",
  "Rhyperior",
  "Tangrowth",
  "Electivire",
  "Magmortar",
  "Togekiss",
  "Yanmega",
  "Leafeon",
  "Glaceon",
  "Gliscor",
  "Mamoswine",
  "Porygon-Z",
  "Gallade",
  "Probopass",
  "Dusknoir",
  "Froslass",
  "Rotom",
  "Uxie",
  "Mesprit",
  "Azelf",
  "Dialga",
  "Palkia",
  "Heatran",
  "Regigigas",
  "Giratina",
  "Cresselia",
  "Manaphy",
  "Darkrai",
  "Shaymin",
  "Arceus",
  "Victini",
  "Serperior",
  "Emboar",
  "Samurott",
  "Watchog",
  "Stoutland",
  "Liepard",
  "Simisage",
  "Simisear",
  "Simipour",
  "Musharna",
  "Unfezant",
  "Zebstrika",
  "Gigalith",
  "Swoobat",
  "Excadrill",
  "Audino",
  "Conkeldurr",
  "Seismitoad",
  "Throh",
  "Sawk",
  "Leavanny",
  "Scolipede",
  "Whimsicott",
  "Lilligant",
  "Basculin",
  "Krookodile",
  "Darmanitan",
  "Maractus",
  "Crustle",
  "Scrafty",
  "Sigilyph",
  "Cofagrigus",
  "Carracosta",
  "Archeops",
  "Garbodor",
  "Zoroark",
  "Cinccino",
  "Gothitelle",
  "Reuniclus",
  "Swanna",
  "Vanilluxe",
  "Sawsbuck",
  "Emolga",
  "Escavalier",
  "Amoonguss",
  "Jellicent",
  "Alomomola",
  "Galvantula",
  "Ferrothorn",
  "Klinklang",
  "Eelektross",
  "Beheeyem",
  "Chandelure",
  "Haxorus",
  "Beartic",
  "Cryogonal",
  "Accelgor",
  "Stunfisk",
  "Mienshao",
  "Druddigon",
  "Golurk",
  "Bisharp",
  "Bouffalant",
  "Braviary",
  "Mandibuzz",
  "Heatmor",
  "Durant",
  "Hydreigon",
  "Volcarona",
  "Cobalion",
  "Terrakion",
  "Virizion",
  "Tornadus",
  "Thundurus",
  "Reshiram",
  "Zekrom",
  "Landorus",
  "Kyurem",
  "Keldeo",
  "Meloetta",
  "Genesect",
  "Chesnaught",
  "Delphox",
  "Greninja",
  "Diggersby",
  "Talonflame",
  "Vivillon",
  "Pyroar",
  "Florges",
  "Gogoat",
  "Pangoro",
  "Furfrou",
  "Meowstic",
  "Aegislash",
  "Aromatisse",
  "Slurpuff",
  "Malamar",
  "Barbaracle",
  "Dragalge",
  "Clawitzer",
  "Heliolisk",
  "Tyrantrum",
  "Aurorus",
  "Sylveon",
  "Hawlucha",
  "Dedenne",
  "Carbink",
  "Goodra",
  "Klefki",
  "Trevenant",
  "Gourgeist",
  "Avalugg",
  "Noivern",
  "Xerneas",
  "Yveltal",
  "Zygarde",
  "Diancie",
  "Hoopa",
  "Volcanion",
  "Decidueye",
  "Incineroar",
  "Primarina",
  "Toucannon",
  "Gumshoos",
  "Vikavolt",
  "Crabominable",
  "Orincorio",
  "Ribombee",
  "Lycanroc",
  "Wishiwashi",
  "Toxapex",
  "Mudsdale",
  "Araquanid",
  "Lurantis",
  "Shiinotic",
  "Salazzle",
  "Bewear",
  "Tsareena",
  "Comfey",
  "Oranguru",
  "Passimian",
  "Golisopod",
  "Palossand",
  "Pyukumuku",
  "Type: Null",
  "Silvally",
  "Minior",
  "Komala",
  "Turtonator",
  "Togedemaru",
  "Mimikyu",
  "Bruxish",
  "Drampa",
  "Dhelmise",
  "Kommo-o",
  "Tapu Koko",
  "Tapu Lele",
  "Tapu Bulu",
  "Tapu Fini",
  "Sologaleo",
  "Lunala",
  "Nihilego",
  "Buzzwole",
  "Pheromosa",
  "Xurkitree",
  "Celesteela",
  "Kartana",
  "Guzzlord",
  "Necrozma",
  "Magearna",
  "Marshadow"
]

angular
  .module('chooseApp', [])
  .controller('chooseCtrl', [chooseCtrl])

function chooseCtrl() {
  this.pkmn = pokemon
  this.rand = shuffle(pokemon)
  this.removePkmn = function(item) {
    let index = this.pkmn.indexOf(item)
    this.pkmn.splice(index, 1)
  }
}

// Fisher-Yates shuffle(attr:https://www.frankmitchell.org/2015/01/fisher-yates/)
function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
