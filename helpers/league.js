var idtoName = {
  266: "Aatrox",
  412: "Thresh",
  23: "Tryndamere",
  79: "Gragas",
  69: "Cassiopeia",
  136: "Aurelion Sol",
  13: "Ryze",
  78: "Poppy",
  14: "Sion",
  1: "Annie",
  202: "Jhin",
  43: "Karma",
  111: "Nautilus",
  240: "Kled",
  99: "Lux",
  103: "Ahri",
  2: "Olaf",
  112: "Viktor",
  34: "Anivia",
  27: "Singed",
  86: "Garen",
  127: "Lissandra",
  57: "Maokai",
  25: "Morgana",
  28: "Evelynn",
  105: "Fizz",
  74: "Heimerdinger",
  238: "Zed",
  68: "Rumble",
  82: "Mordekaiser",
  37: "Sona",
  96: "Kog'Maw",
  55: "Katarina",
  117: "Lulu",
  22: "Ashe",
  30: "Karthus",
  12: "Alistar",
  122: "Darius",
  67: "Vayne",
  110: "Varus",
  77: "Udyr",
  89: "Leona",
  126: "Jayce",
  134: "Syndra",
  80: "Pantheon",
  92: "Riven",
  121: "Kha'Zix",
  42: "Corki",
  268: "Azir",
  51: "Caitlyn",
  76: "Nidalee",
  85: "Kennen",
  3: "Galio",
  45: "Veigar",
  432: "Bard",
  150: "Gnar",
  90: "Malzahar",
  104: "Graves",
  254: "Vi",
  10: "Kayle",
  39: "Irelia",
  64: "Lee Sin",
  420: "Illaoi",
  60: "Elise",
  106: "Volibear",
  20: "Nunu",
  4: "Twisted Fate",
  24: "Jax",
  102: "Shyvana",
  429: "Kalista",
  36: "Dr. Mundo",
  427: "Ivern",
  131: "Diana",
  223: "Tahm Kench",
  63: "Brand",
  113: "Sejuani",
  8: "Vladimir",
  154: "Zac",
  421: "Rek'Sai",
  133: "Quinn",
  84: "Akali",
  163: "Taliyah",
  18: "Tristana",
  120: "Hecarim",
  15: "Sivir",
  236: "Lucian",
  107: "Rengar",
  19: "Warwick",
  72: "Skarner",
  54: "Malphite",
  157: "Yasuo",
  101: "Xerath",
  17: "Teemo",
  75: "Nasus",
  58: "Renekton",
  119: "Draven",
  35: "Shaco",
  50: "Swain",
  91: "Talon",
  40: "Janna",
  115: "Ziggs",
  245: "Ekko",
  61: "Orianna",
  114: "Fiora",
  9: "Fiddlesticks",
  31: "Cho'Gath",
  33: "Rammus",
  7: "LeBlanc",
  16: "Soraka",
  26: "Zilean",
  56: "Nocturne",
  222: "Jinx",
  83: "Yorick",
  6: "Urgot",
  203: "Kindred",
  21: "Miss Fortune",
  62: "Wukong",
  53: "Blitzcrank",
  98: "Shen",
  201: "Braum",
  5: "Xin Zhao",
  29: "Twitch",
  11: "Master Yi",
  44: "Taric",
  32: "Amumu",
  41: "Gangplank",
  48: "Trundle",
  38: "Kassadin",
  161: "Vel'Koz",
  143: "Zyra",
  267: "Nami",
  59: "Jarvan IV",
  81: "Ezreal",
  142:"Sylas",
  518: "Neeko",
  246:"Qiyana",
  164: "Camille",
  145: "Kaisa",
  141: "Kain",
};

let idtoItem = 
{'1001': 'Boots of Speed',
 '1004': 'Faerie Charm',
 '1006': 'Rejuvenation Bead',
 '1011': "Giant's Belt",
 '1018': 'Cloak of Agility',
 '1026': 'Blasting Wand',
 '1027': 'Sapphire Crystal',
 '1028': 'Ruby Crystal',
 '1029': 'Cloth Armor',
 '1031': 'Chain Vest',
 '1033': 'Null-Magic Mantle',
 '1036': 'Long Sword',
 '1037': 'Pickaxe',
 '1038': 'B. F. Sword',
 '1039': "Hunter's Talisman",
 '1041': "Hunter's Machete",
 '1042': 'Dagger',
 '1043': 'Recurve Bow',
 '1051': "Brawler's Gloves",
 '1052': 'Amplifying Tome',
 '1053': 'Vampiric Scepter',
 '1054': "Doran's Shield",
 '1055': "Doran's Blade",
 '1056': "Doran's Ring",
 '1057': 'Negatron Cloak',
 '1058': 'Needlessly Large Rod',
 '1082': 'The Dark Seal',
 '1083': 'Cull',
 '1400': 'Enchantment: Warrior',
 '1401': 'Enchantment: Cinderhulk',
 '1402': 'Enchantment: Runic Echoes',
 '1408': 'Enchantment: Warrior',
 '1409': 'Enchantment: Cinderhulk',
 '1410': 'Enchantment: Runic Echoes',
 '1412': 'Enchantment: Warrior',
 '1413': 'Enchantment: Cinderhulk',
 '1414': 'Enchantment: Runic Echoes',
 '1416': 'Enchantment: Bloodrazor',
 '1418': 'Enchantment: Bloodrazor',
 '1419': 'Enchantment: Bloodrazor',
 '2003': 'Health Potion',
 '2009': 'Total Biscuit of Rejuvenation',
 '2010': 'Total Biscuit of Rejuvenation',
 '2015': 'Kircheis Shard',
 '2031': 'Refillable Potion',
 '2032': "Hunter's Potion",
 '2033': 'Corrupting Potion',
 '2045': 'Ruby Sightstone',
 '2047': "Oracle's Extract",
 '2049': 'Sightstone',
 '2050': "Explorer's Ward",
 '2051': "Guardian's Horn",
 '2052': 'Poro-Snax',
 '2053': 'Raptor Cloak',
 '2054': 'Diet Poro-Snax',
 '2055': 'Control Ward',
 '2138': 'Elixir of Iron',
 '2139': 'Elixir of Sorcery',
 '2140': 'Elixir of Wrath',
 '2301': 'Eye of the Watchers',
 '2302': 'Eye of the Oasis',
 '2303': 'Eye of the Equinox',
 '3001': 'Abyssal Scepter',
 '3003': "Archangel's Staff",
 '3004': 'Manamune',
 '3006': "Berserker's Greaves",
 '3007': "Archangel's Staff (Quick Charge)",
 '3008': 'Manamune (Quick Charge)',
 '3009': 'Boots of Swiftness',
 '3010': 'Catalyst of Aeons',
 '3020': "Sorcerer's Shoes",
 '3022': 'Frozen Mallet',
 '3024': 'Glacial Shroud',
 '3025': 'Iceborn Gauntlet',
 '3026': 'Guardian Angel',
 '3027': 'Rod of Ages',
 '3028': 'Chalice of Harmony',
 '3029': 'Rod of Ages (Quick Charge)',
 '3030': 'Hextech GLP-800',
 '3031': 'Infinity Edge',
 '3033': 'Mortal Reminder',
 '3034': 'Giant Slayer',
 '3035': 'Last Whisper',
 '3036': "Lord Dominik's Regards",
 '3040': "Seraph's Embrace",
 '3041': "Mejai's Soulstealer",
 '3042': 'Muramana',
 '3043': 'Muramana',
 '3044': 'Phage',
 '3046': 'Phantom Dancer',
 '3047': 'Ninja Tabi',
 '3048': "Seraph's Embrace",
 '3050': "Zeke's Harbinger",
 '3052': "Jaurim's Fist",
 '3053': "Sterak's Gage",
 '3056': 'Ohmwrecker',
 '3057': 'Sheen',
 '3060': 'Banner of Command',
 '3065': 'Spirit Visage',
 '3067': 'Kindlegem',
 '3068': 'Sunfire Cape',
 '3069': 'Talisman of Ascension',
 '3070': 'Tear of the Goddess',
 '3071': 'The Black Cleaver',
 '3072': 'The Bloodthirster',
 '3073': 'Tear of the Goddess (Quick Charge)',
 '3074': 'Ravenous Hydra',
 '3075': 'Thornmail',
 '3077': 'Tiamat',
 '3078': 'Trinity Force',
 '3082': "Warden's Mail",
 '3083': "Warmog's Armor",
 '3084': "Overlord's Bloodmail",
 '3085': "Runaan's Hurricane",
 '3086': 'Zeal',
 '3087': 'Statikk Shiv',
 '3089': "Rabadon's Deathcap",
 '3090': "Wooglet's Witchcap",
 '3091': "Wit's End",
 '3092': "Frost Queen's Claim",
 '3094': 'Rapid Firecannon',
 '3096': "Nomad's Medallion",
 '3097': "Targon's Brace",
 '3098': 'Frostfang',
 '3100': 'Lich Bane',
 '3101': 'Stinger',
 '3102': "Banshee's Veil",
 '3104': "Lord Van Damm's Pillager",
 '3105': 'Aegis of the Legion',
 '3107': 'Redemption',
 '3108': 'Fiendish Codex',
 '3109': "Knight's Vow",
 '3110': 'Frozen Heart',
 '3111': "Mercury's Treads",
 '3112': "Guardian's Orb",
 '3113': 'Aether Wisp',
 '3114': 'Forbidden Idol',
 '3115': "Nashor's Tooth",
 '3116': "Rylai's Crystal Scepter",
 '3117': 'Boots of Mobility',
 '3122': 'Wicked Hatchet',
 '3123': "Executioner's Calling",
 '3124': "Guinsoo's Rageblade",
 '3133': "Caulfield's Warhammer",
 '3134': 'Serrated Dirk',
 '3135': 'Void Staff',
 '3136': 'Haunting Guise',
 '3137': 'Dervish Blade',
 '3139': 'Mercurial Scimitar',
 '3140': 'Quicksilver Sash',
 '3142': "Youmuu's Ghostblade",
 '3143': "Randuin's Omen",
 '3144': 'Bilgewater Cutlass',
 '3145': 'Hextech Revolver',
 '3146': 'Hextech Gunblade',
 '3147': 'Duskblade of Draktharr',
 '3151': "Liandry's Torment",
 '3152': 'Hextech Protobelt-01',
 '3153': 'Blade of the Ruined King',
 '3155': 'Hexdrinker',
 '3156': 'Maw of Malmortius',
 '3157': "Zhonya's Hourglass",
 '3158': 'Ionian Boots of Lucidity',
 '3165': 'Morellonomicon',
 '3170': 'Moonflair Spellblade',
 '3174': "Athene's Unholy Grail",
 '3175': "Head of Kha'Zix",
 '3181': 'Sanguine Blade',
 '3184': "Guardian's Hammer",
 '3185': 'The Lightbringer',
 '3187': 'Arcane Sweeper',
 '3190': 'Locket of the Iron Solari',
 '3191': "Seeker's Armguard",
 '3196': 'The Hex Core mk-1',
 '3197': 'The Hex Core mk-2',
 '3198': 'Perfect Hex Core',
 '3200': 'Prototype Hex Core',
 '3211': "Spectre's Cowl",
 '3222': "Mikael's Crucible",
 '3252': "Poacher's Dirk",
 '3285': "Luden's Echo",
 '3301': 'Ancient Coin',
 '3302': 'Relic Shield',
 '3303': "Spellthief's Edge",
 '3340': 'Warding Totem (Trinket)',
 '3341': 'Sweeping Lens (Trinket)',
 '3345': 'Soul Anchor (Trinket)',
 '3348': 'Arcane Sweeper',
 '3361': 'Greater Stealth Totem (Trinket)',
 '3362': 'Greater Vision Totem (Trinket)',
 '3363': 'Farsight Alteration',
 '3364': 'Oracle Alteration',
 '3401': 'Face of the Mountain',
 '3410': "Head of Kha'Zix",
 '3416': "Head of Kha'Zix",
 '3422': "Head of Kha'Zix",
 '3455': "Head of Kha'Zix",
 '3460': 'Golden Transcendence',
 '3461': 'Golden Transcendence (Disabled)',
 '3462': 'Seer Stone (Trinket)',
 '3504': 'Ardent Censer',
 '3508': 'Essence Reaver',
 '3512': "Zz'Rot Portal",
 '3599': 'The Black Spear',
 '3630': 'Siege Teleport',
 '3631': 'Siege Ballista',
 '3632': '',
 '3633': 'Siege Teleport',
 '3634': 'Tower: Beam of Ruination',
 '3635': 'Port Pad',
 '3636': 'Tower: Storm Bulwark',
 '3637': 'Nexus Siege: Siege Weapon Slot',
 '3640': 'Flash Zone',
 '3641': 'Vanguard Banner',
 '3642': 'Siege Refund',
 '3643': 'Entropy Field',
 '3645': 'Seer Stone (Trinket)',
 '3647': 'Shield Totem',
 '3648': 'Siege Teleport (Inactive)',
 '3649': 'Siege Sight Warder',
 '3671': 'Enchantment: Warrior',
 '3672': 'Enchantment: Cinderhulk',
 '3673': 'Enchantment: Runic Echoes',
 '3675': 'Enchantment: Bloodrazor',
 '3680': 'Frosted Snax',
 '3681': 'Super Spicy Snax',
 '3682': 'Espresso Snax',
 '3683': 'Rainbow Snax Party Pack!',
 '3706': "Stalker's Blade",
 '3711': "Tracker's Knife",
 '3715': "Skirmisher's Sabre",
 '3742': "Dead Man's Plate",
 '3748': 'Titanic Hydra',
 '3751': "Bami's Cinder",
 '3800': 'Righteous Glory',
 '3801': 'Crystalline Bracer',
 '3802': 'Lost Chapter',
 '3812': "Death's Dance",
 '3814': 'Edge of Night',
 '3901': 'Fire at Will',
 '3902': "Death's Daughter",
 '3903': 'Raise Morale'}

 let keyToId = 
{'21': 'Barrier',
 '1': 'Cleanse',
 '35': 'Disabled Summoner Spells',
 '36': 'Disabled Summoner Spells',
 '14': 'Ignite',
 '3': 'Exhaust',
 '4': 'Flash',
 '6': 'Ghost',
 '7': 'Heal',
 '13': 'Clarity',
 '30': 'To the King!',
 '31': 'Poro Toss',
 '33': 'Nexus Siege: Siege Weapon Slot',
 '34': 'Nexus Siege: Siege Weapon Slot',
 '11': 'Smite',
 '39': 'Ultra (Rapidly Flung) Mark',
 '32': 'Mark',
 '12': 'Teleport'}





function getIdFromName(id) {
    return idtoName[id];
}
function getIdToItem(id) {
  return idtoItem[id];
}
function getKeyToSpell(id){
  return keyToId[id];
}

var data = {
  labels: ["January", "February", "March"],
  datasets: [
      {
          label: "Compras",
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
             
          ],
          borderWidth: 1,
          data: [65, 59, 80],
      }
  ]
};

function createDataForChart(mastery){
  let data = mastery.map(x=>{
    return(x.championPoints)
  })
  let labels = mastery.map(x=>{
    return( x.championName)
  })

  let datasets = [{
    label: "Most Played Champions",
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      
  ],
  borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
     
  ],
    borderWidth: 1,
    data: data
  }]

  return {
    labels: labels,
    datasets: datasets
  }
  
}
module.exports = {
  getIdFromName,
  createDataForChart,
  getIdToItem,
  getKeyToSpell
}