import { Pokedex } from "./types/Pokedex";

export const pokedexData: Pokedex = [
    {
      "id": 1,
      "name": {
        "english": "Bulbasaur",
        "japanese": "フシギダネ",
        "chinese": "妙蛙种子",
        "french": "Bulbizarre"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 45,
        "Attack": 49,
        "Defense": 49,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 45
      },
      "species": "Seed Pokémon",
      "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
      "evolution": { "next": [["2", "Level 16"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "6.9 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Chlorophyll", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/001.png",
        "thumbnail": "src/assets/thumbnails/001.png",
        "hires": "src/assets/hires/001.png"
      }
    },
    {
      "id": 2,
      "name": {
        "english": "Ivysaur",
        "japanese": "フシギソウ",
        "chinese": "妙蛙草",
        "french": "Herbizarre"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 60,
        "Attack": 62,
        "Defense": 63,
        "Sp. Attack": 80,
        "Sp. Defense": 80,
        "Speed": 60
      },
      "species": "Seed Pokémon",
      "description": "There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.",
      "evolution": { "prev": ["1", "Level 16"], "next": [["3", "Level 32"]] },
      "profile": {
        "height": "1 m",
        "weight": "13 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Chlorophyll", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/002.png",
        "thumbnail": "src/assets/thumbnails/002.png",
        "hires": "src/assets/hires/002.png"
      }
    },
    {
      "id": 3,
      "name": {
        "english": "Venusaur",
        "japanese": "フシギバナ",
        "chinese": "妙蛙花",
        "french": "Florizarre"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 80,
        "Attack": 82,
        "Defense": 83,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 80
      },
      "species": "Seed Pokémon",
      "description": "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
      "evolution": { "prev": ["2", "Level 32"] },
      "profile": {
        "height": "2 m",
        "weight": "100 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Chlorophyll", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/003.png",
        "thumbnail": "src/assets/thumbnails/003.png",
        "hires": "src/assets/hires/003.png"
      }
    },
    {
      "id": 4,
      "name": {
        "english": "Charmander",
        "japanese": "ヒトカゲ",
        "chinese": "小火龙",
        "french": "Salamèche"
      },
      "type": ["Fire"],
      "base": {
        "HP": 39,
        "Attack": 52,
        "Defense": 43,
        "Sp. Attack": 60,
        "Sp. Defense": 50,
        "Speed": 65
      },
      "species": "Lizard Pokémon",
      "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
      "evolution": { "next": [["5", "Level 16"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "8.5 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Blaze", "false"],
          ["Solar Power", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/004.png",
        "thumbnail": "src/assets/thumbnails/004.png",
        "hires": "src/assets/hires/004.png"
      }
    },
    {
      "id": 5,
      "name": {
        "english": "Charmeleon",
        "japanese": "リザード",
        "chinese": "火恐龙",
        "french": "Reptincel"
      },
      "type": ["Fire"],
      "base": {
        "HP": 58,
        "Attack": 64,
        "Defense": 58,
        "Sp. Attack": 80,
        "Sp. Defense": 65,
        "Speed": 80
      },
      "species": "Flame Pokémon",
      "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
      "evolution": { "prev": ["4", "Level 16"], "next": [["6", "Level 36"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "19 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Blaze", "false"],
          ["Solar Power", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/005.png",
        "thumbnail": "src/assets/thumbnails/005.png",
        "hires": "src/assets/hires/005.png"
      }
    },
    {
      "id": 6,
      "name": {
        "english": "Charizard",
        "japanese": "リザードン",
        "chinese": "喷火龙",
        "french": "Dracaufeu"
      },
      "type": ["Fire", "Flying"],
      "base": {
        "HP": 78,
        "Attack": 84,
        "Defense": 78,
        "Sp. Attack": 109,
        "Sp. Defense": 85,
        "Speed": 100
      },
      "species": "Flame Pokémon",
      "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
      "evolution": { "prev": ["5", "Level 36"] },
      "profile": {
        "height": "1.7 m",
        "weight": "90.5 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Blaze", "false"],
          ["Solar Power", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/006.png",
        "thumbnail": "src/assets/thumbnails/006.png",
        "hires": "src/assets/hires/006.png"
      }
    },
    {
      "id": 7,
      "name": {
        "english": "Squirtle",
        "japanese": "ゼニガメ",
        "chinese": "杰尼龟",
        "french": "Carapuce"
      },
      "type": ["Water"],
      "base": {
        "HP": 44,
        "Attack": 48,
        "Defense": 65,
        "Sp. Attack": 50,
        "Sp. Defense": 64,
        "Speed": 43
      },
      "species": "Tiny Turtle Pokémon",
      "description": "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
      "evolution": { "next": [["8", "Level 16"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "9 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Rain Dish", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/007.png",
        "thumbnail": "src/assets/thumbnails/007.png",
        "hires": "src/assets/hires/007.png"
      }
    },
    {
      "id": 8,
      "name": {
        "english": "Wartortle",
        "japanese": "カメール",
        "chinese": "卡咪龟",
        "french": "Carabaffe"
      },
      "type": ["Water"],
      "base": {
        "HP": 59,
        "Attack": 63,
        "Defense": 80,
        "Sp. Attack": 65,
        "Sp. Defense": 80,
        "Speed": 58
      },
      "species": "Turtle Pokémon",
      "description": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler.",
      "evolution": { "prev": ["7", "Level 16"], "next": [["9", "Level 36"]] },
      "profile": {
        "height": "1 m",
        "weight": "22.5 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Rain Dish", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/008.png",
        "thumbnail": "src/assets/thumbnails/008.png",
        "hires": "src/assets/hires/008.png"
      }
    },
    {
      "id": 9,
      "name": {
        "english": "Blastoise",
        "japanese": "カメックス",
        "chinese": "水箭龟",
        "french": "Tortank"
      },
      "type": ["Water"],
      "base": {
        "HP": 79,
        "Attack": 83,
        "Defense": 100,
        "Sp. Attack": 85,
        "Sp. Defense": 105,
        "Speed": 78
      },
      "species": "Shellfish Pokémon",
      "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
      "evolution": { "prev": ["8", "Level 36"] },
      "profile": {
        "height": "1.6 m",
        "weight": "85.5 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Rain Dish", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/009.png",
        "thumbnail": "src/assets/thumbnails/009.png",
        "hires": "src/assets/hires/009.png"
      }
    },
    {
      "id": 10,
      "name": {
        "english": "Caterpie",
        "japanese": "キャタピー",
        "chinese": "绿毛虫",
        "french": "Chenipan"
      },
      "type": ["Bug"],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 35,
        "Sp. Attack": 20,
        "Sp. Defense": 20,
        "Speed": 45
      },
      "species": "Worm Pokémon",
      "description": "Its body is soft and weak. In nature, its perpetual fate is to be seen by others as food.",
      "evolution": { "next": [["11", "Level 7"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "2.9 kg",
        "egg": ["Bug"],
        "ability": [
          ["Shield Dust", "false"],
          ["Run Away", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/010.png",
        "thumbnail": "src/assets/thumbnails/010.png",
        "hires": "src/assets/hires/010.png"
      }
    },
    {
      "id": 11,
      "name": {
        "english": "Metapod",
        "japanese": "トランセル",
        "chinese": "铁甲蛹",
        "french": "Chrysacier"
      },
      "type": ["Bug"],
      "base": {
        "HP": 50,
        "Attack": 20,
        "Defense": 55,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 30
      },
      "species": "Cocoon Pokémon",
      "description": "Its hard shell doesn’t crack a bit even if Pikipek pecks at it, but it will tip over, spilling out its insides.",
      "evolution": { "prev": ["10", "Level 7"], "next": [["12", "Level 10"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "9.9 kg",
        "egg": ["Bug"],
        "ability": [["Shed Skin", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/011.png",
        "thumbnail": "src/assets/thumbnails/011.png",
        "hires": "src/assets/hires/011.png"
      }
    },
    {
      "id": 12,
      "name": {
        "english": "Butterfree",
        "japanese": "バタフリー",
        "chinese": "巴大蝶",
        "french": "Papilusion"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 60,
        "Attack": 45,
        "Defense": 50,
        "Sp. Attack": 90,
        "Sp. Defense": 80,
        "Speed": 70
      },
      "species": "Butterfly Pokémon",
      "description": "Nectar from pretty flowers is its favorite food. In fields of flowers, it has heated battles with Cutiefly for territory.",
      "evolution": { "prev": ["11", "Level 10"] },
      "profile": {
        "height": "1.1 m",
        "weight": "32 kg",
        "egg": ["Bug"],
        "ability": [
          ["Compound Eyes", "false"],
          ["Tinted Lens", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/012.png",
        "thumbnail": "src/assets/thumbnails/012.png",
        "hires": "src/assets/hires/012.png"
      }
    },
    {
      "id": 13,
      "name": {
        "english": "Weedle",
        "japanese": "ビードル",
        "chinese": "独角虫",
        "french": "Aspicot"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 40,
        "Attack": 35,
        "Defense": 30,
        "Sp. Attack": 20,
        "Sp. Defense": 20,
        "Speed": 50
      },
      "species": "Hairy Bug Pokémon",
      "description": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
      "evolution": { "next": [["14", "Level 7"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "3.2 kg",
        "egg": ["Bug"],
        "ability": [
          ["Shield Dust", "false"],
          ["Run Away", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/013.png",
        "thumbnail": "src/assets/thumbnails/013.png",
        "hires": "src/assets/hires/013.png"
      }
    },
    {
      "id": 14,
      "name": {
        "english": "Kakuna",
        "japanese": "コクーン",
        "chinese": "铁壳蛹",
        "french": "Coconfort"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 45,
        "Attack": 25,
        "Defense": 50,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 35
      },
      "species": "Cocoon Pokémon",
      "description": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
      "evolution": { "prev": ["13", "Level 7"], "next": [["15", "Level 10"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "10 kg",
        "egg": ["Bug"],
        "ability": [["Shed Skin", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/014.png",
        "thumbnail": "src/assets/thumbnails/014.png",
        "hires": "src/assets/hires/014.png"
      }
    },
    {
      "id": 15,
      "name": {
        "english": "Beedrill",
        "japanese": "スピアー",
        "chinese": "大针蜂",
        "french": "Dardargnan"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 40,
        "Sp. Attack": 45,
        "Sp. Defense": 80,
        "Speed": 75
      },
      "species": "Poison Bee Pokémon",
      "description": "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
      "evolution": { "prev": ["14", "Level 10"] },
      "profile": {
        "height": "1 m",
        "weight": "29.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Sniper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/015.png",
        "thumbnail": "src/assets/thumbnails/015.png",
        "hires": "src/assets/hires/015.png"
      }
    },
    {
      "id": 16,
      "name": {
        "english": "Pidgey",
        "japanese": "ポッポ",
        "chinese": "波波",
        "french": "Roucool"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 40,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 56
      },
      "species": "Tiny Bird Pokémon",
      "description": "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
      "evolution": { "next": [["17", "Level 18"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "1.8 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Tangled Feet", "false"],
          ["Big Pecks", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/016.png",
        "thumbnail": "src/assets/thumbnails/016.png",
        "hires": "src/assets/hires/016.png"
      }
    },
    {
      "id": 17,
      "name": {
        "english": "Pidgeotto",
        "japanese": "ピジョン",
        "chinese": "比比鸟",
        "french": "Roucoups"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 63,
        "Attack": 60,
        "Defense": 55,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 71
      },
      "species": "Bird Pokémon",
      "description": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
      "evolution": { "prev": ["16", "Level 18"], "next": [["18", "Level 36"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "30 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Tangled Feet", "false"],
          ["Big Pecks", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/017.png",
        "thumbnail": "src/assets/thumbnails/017.png",
        "hires": "src/assets/hires/017.png"
      }
    },
    {
      "id": 18,
      "name": {
        "english": "Pidgeot",
        "japanese": "ピジョット",
        "chinese": "大比鸟",
        "french": "Roucarnage"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 83,
        "Attack": 80,
        "Defense": 75,
        "Sp. Attack": 70,
        "Sp. Defense": 70,
        "Speed": 101
      },
      "species": "Bird Pokémon",
      "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
      "evolution": { "prev": ["17", "Level 36"] },
      "profile": {
        "height": "1.5 m",
        "weight": "39.5 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Tangled Feet", "false"],
          ["Big Pecks", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/018.png",
        "thumbnail": "src/assets/thumbnails/018.png",
        "hires": "src/assets/hires/018.png"
      }
    },
    {
      "id": 19,
      "name": {
        "english": "Rattata",
        "japanese": "コラッタ",
        "chinese": "小拉达",
        "french": "Rattata"
      },
      "type": ["Normal"],
      "base": {
        "HP": 30,
        "Attack": 56,
        "Defense": 35,
        "Sp. Attack": 25,
        "Sp. Defense": 35,
        "Speed": 72
      },
      "species": "Mouse Pokémon",
      "description": "This Pokémon is common but hazardous. Its sharp incisors can easily cut right through hard wood.",
      "evolution": { "next": [["20", "Level 20"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "3.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Run Away", "false"],
          ["Guts", "false"],
          ["Hustle", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/019.png",
        "thumbnail": "src/assets/thumbnails/019.png",
        "hires": "src/assets/hires/019.png"
      }
    },
    {
      "id": 20,
      "name": {
        "english": "Raticate",
        "japanese": "ラッタ",
        "chinese": "拉达",
        "french": "Rattatac"
      },
      "type": ["Normal"],
      "base": {
        "HP": 55,
        "Attack": 81,
        "Defense": 60,
        "Sp. Attack": 50,
        "Sp. Defense": 70,
        "Speed": 97
      },
      "species": "Mouse Pokémon",
      "description": "Its whiskers are essential for maintaining its balance. No matter how friendly you are, it will get angry and bite you if you touch its whiskers.",
      "evolution": { "prev": ["19", "Level 20"] },
      "profile": {
        "height": "0.7 m",
        "weight": "18.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Run Away", "false"],
          ["Guts", "false"],
          ["Hustle", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/020.png",
        "thumbnail": "src/assets/thumbnails/020.png",
        "hires": "src/assets/hires/020.png"
      }
    },
    {
      "id": 21,
      "name": {
        "english": "Spearow",
        "japanese": "オニスズメ",
        "chinese": "烈雀",
        "french": "Piafabec"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 40,
        "Attack": 60,
        "Defense": 30,
        "Sp. Attack": 31,
        "Sp. Defense": 31,
        "Speed": 70
      },
      "species": "Tiny Bird Pokémon",
      "description": "Due to its short wings, it can’t fly long distances. It wanders about restlessly and pecks at bug Pokémon.",
      "evolution": { "next": [["22", "Level 20"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "2 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Sniper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/021.png",
        "thumbnail": "src/assets/thumbnails/021.png",
        "hires": "src/assets/hires/021.png"
      }
    },
    {
      "id": 22,
      "name": {
        "english": "Fearow",
        "japanese": "オニドリル",
        "chinese": "大嘴雀",
        "french": "Rapasdepic"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 65,
        "Sp. Attack": 61,
        "Sp. Defense": 61,
        "Speed": 100
      },
      "species": "Beak Pokémon",
      "description": "In Alola, fish Pokémon are its prey. It can be seen circling above the ocean searching for food.",
      "evolution": { "prev": ["21", "Level 20"] },
      "profile": {
        "height": "1.2 m",
        "weight": "38 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Sniper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/022.png",
        "thumbnail": "src/assets/thumbnails/022.png",
        "hires": "src/assets/hires/022.png"
      }
    },
    {
      "id": 23,
      "name": {
        "english": "Ekans",
        "japanese": "アーボ",
        "chinese": "阿柏蛇",
        "french": "Abo"
      },
      "type": ["Poison"],
      "base": {
        "HP": 35,
        "Attack": 60,
        "Defense": 44,
        "Sp. Attack": 40,
        "Sp. Defense": 54,
        "Speed": 55
      },
      "species": "Snake Pokémon",
      "description": "The eggs of bird Pokémon are its favorite food. It swallows eggs whole, so sometimes an egg gets stuck, and Ekans faints.",
      "evolution": { "next": [["24", "Level 22"]] },
      "profile": {
        "height": "2 m",
        "weight": "6.9 kg",
        "egg": ["Field", "Dragon"],
        "ability": [
          ["Intimidate", "false"],
          ["Shed Skin", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/023.png",
        "thumbnail": "src/assets/thumbnails/023.png",
        "hires": "src/assets/hires/023.png"
      }
    },
    {
      "id": 24,
      "name": {
        "english": "Arbok",
        "japanese": "アーボック",
        "chinese": "阿柏怪",
        "french": "Arbok"
      },
      "type": ["Poison"],
      "base": {
        "HP": 60,
        "Attack": 95,
        "Defense": 69,
        "Sp. Attack": 65,
        "Sp. Defense": 79,
        "Speed": 80
      },
      "species": "Cobra Pokémon",
      "description": "After stunning its opponents with the pattern on its stomach, it quickly wraps them up in its body and waits for them to stop moving.",
      "evolution": { "prev": ["23", "Level 22"] },
      "profile": {
        "height": "3.5 m",
        "weight": "65 kg",
        "egg": ["Field", "Dragon"],
        "ability": [
          ["Intimidate", "false"],
          ["Shed Skin", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/024.png",
        "thumbnail": "src/assets/thumbnails/024.png",
        "hires": "src/assets/hires/024.png"
      }
    },
    {
      "id": 25,
      "name": {
        "english": "Pikachu",
        "japanese": "ピカチュウ",
        "chinese": "皮卡丘",
        "french": "Pikachu"
      },
      "type": ["Electric"],
      "base": {
        "HP": 35,
        "Attack": 55,
        "Defense": 40,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 90
      },
      "species": "Mouse Pokémon",
      "description": "While sleeping, it generates electricity in the sacs in its cheeks. If it’s not getting enough sleep, it will be able to use only weak electricity.",
      "evolution": {
        "prev": ["172", "high Friendship"],
        "next": [["26", "use Thunder Stone"]]
      },
      "profile": {
        "height": "0.4 m",
        "weight": "6 kg",
        "egg": ["Field", "Fairy"],
        "ability": [
          ["Static", "false"],
          ["Lightning Rod", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/025.png",
        "thumbnail": "src/assets/thumbnails/025.png",
        "hires": "src/assets/hires/025.png"
      }
    },
    {
      "id": 26,
      "name": {
        "english": "Raichu",
        "japanese": "ライチュウ",
        "chinese": "雷丘",
        "french": "Raichu"
      },
      "type": ["Electric"],
      "base": {
        "HP": 60,
        "Attack": 90,
        "Defense": 55,
        "Sp. Attack": 90,
        "Sp. Defense": 80,
        "Speed": 110
      },
      "species": "Mouse Pokémon",
      "description": "Because so many Trainers like the way Pikachu looks, you don’t see this Pokémon very often.",
      "evolution": { "prev": ["25", "use Thunder Stone"] },
      "profile": {
        "height": "0.8 m",
        "weight": "30 kg",
        "egg": ["Field", "Fairy"],
        "ability": [
          ["Static", "false"],
          ["Lightning Rod", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/026.png",
        "thumbnail": "src/assets/thumbnails/026.png",
        "hires": "src/assets/hires/026.png"
      }
    },
    {
      "id": 27,
      "name": {
        "english": "Sandshrew",
        "japanese": "サンド",
        "chinese": "穿山鼠",
        "french": "Sabelette"
      },
      "type": ["Ground"],
      "base": {
        "HP": 50,
        "Attack": 75,
        "Defense": 85,
        "Sp. Attack": 20,
        "Sp. Defense": 30,
        "Speed": 40
      },
      "species": "Mouse Pokémon",
      "description": "When its skin gets wrinkled from moisture, it heads for a volcano. It lies flat on a spot with a lot of geothermal heat and dries itself out.",
      "evolution": { "next": [["28", "Level 22"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "12 kg",
        "egg": ["Field"],
        "ability": [
          ["Sand Veil", "false"],
          ["Sand Rush", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/027.png",
        "thumbnail": "src/assets/thumbnails/027.png",
        "hires": "src/assets/hires/027.png"
      }
    },
    {
      "id": 28,
      "name": {
        "english": "Sandslash",
        "japanese": "サンドパン",
        "chinese": "穿山王",
        "french": "Sablaireau"
      },
      "type": ["Ground"],
      "base": {
        "HP": 75,
        "Attack": 100,
        "Defense": 110,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 65
      },
      "species": "Mouse Pokémon",
      "description": "Thanks to its thick claws, it’s good at climbing trees. There are plenty of Sandslash that park themselves in trees and go right to sleep.",
      "evolution": { "prev": ["27", "Level 22"] },
      "profile": {
        "height": "1 m",
        "weight": "29.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Sand Veil", "false"],
          ["Sand Rush", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/028.png",
        "thumbnail": "src/assets/thumbnails/028.png",
        "hires": "src/assets/hires/028.png"
      }
    },
    {
      "id": 29,
      "name": {
        "english": "Nidoran♀",
        "japanese": "ニドラン♀",
        "chinese": "尼多兰",
        "french": "Nidoran♀"
      },
      "type": ["Poison"],
      "base": {
        "HP": 55,
        "Attack": 47,
        "Defense": 52,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 41
      },
      "species": "Poison Pin Pokémon",
      "description": "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
      "evolution": { "next": [["30", "Level 16"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "7 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Poison Point", "false"],
          ["Rivalry", "false"],
          ["Hustle", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/029.png",
        "thumbnail": "src/assets/thumbnails/029.png",
        "hires": "src/assets/hires/029.png"
      }
    },
    {
      "id": 30,
      "name": {
        "english": "Nidorina",
        "japanese": "ニドリーナ",
        "chinese": "尼多娜",
        "french": "Nidorina"
      },
      "type": ["Poison"],
      "base": {
        "HP": 70,
        "Attack": 62,
        "Defense": 67,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 56
      },
      "species": "Poison Pin Pokémon",
      "description": "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
      "evolution": {
        "prev": ["29", "Level 16"],
        "next": [["31", "use Moon Stone"]]
      },
      "profile": {
        "height": "0.8 m",
        "weight": "20 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Poison Point", "false"],
          ["Rivalry", "false"],
          ["Hustle", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/030.png",
        "thumbnail": "src/assets/thumbnails/030.png",
        "hires": "src/assets/hires/030.png"
      }
    },
    {
      "id": 31,
      "name": {
        "english": "Nidoqueen",
        "japanese": "ニドクイン",
        "chinese": "尼多后",
        "french": "Nidoqueen"
      },
      "type": ["Poison", "Ground"],
      "base": {
        "HP": 90,
        "Attack": 92,
        "Defense": 87,
        "Sp. Attack": 75,
        "Sp. Defense": 85,
        "Speed": 76
      },
      "species": "Drill Pokémon",
      "description": "Nidoqueen’s body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
      "evolution": { "prev": ["30", "use Moon Stone"] },
      "profile": {
        "height": "1.3 m",
        "weight": "60 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Poison Point", "false"],
          ["Rivalry", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/031.png",
        "thumbnail": "src/assets/thumbnails/031.png",
        "hires": "src/assets/hires/031.png"
      }
    },
    {
      "id": 32,
      "name": {
        "english": "Nidoran♂",
        "japanese": "ニドラン♂",
        "chinese": "尼多朗",
        "french": "Nidoran♂"
      },
      "type": ["Poison"],
      "base": {
        "HP": 46,
        "Attack": 57,
        "Defense": 40,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 50
      },
      "species": "Poison Pin Pokémon",
      "description": "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon’s notice.",
      "evolution": { "next": [["33", "Level 16"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "9 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Poison Point", "false"],
          ["Rivalry", "false"],
          ["Hustle", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/032.png",
        "thumbnail": "src/assets/thumbnails/032.png",
        "hires": "src/assets/hires/032.png"
      }
    },
    {
      "id": 33,
      "name": {
        "english": "Nidorino",
        "japanese": "ニドリーノ",
        "chinese": "尼多力诺",
        "french": "Nidorino"
      },
      "type": ["Poison"],
      "base": {
        "HP": 61,
        "Attack": 72,
        "Defense": 57,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 65
      },
      "species": "Poison Pin Pokémon",
      "description": "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
      "evolution": {
        "prev": ["32", "Level 16"],
        "next": [["34", "use Moon Stone"]]
      },
      "profile": {
        "height": "0.9 m",
        "weight": "19.5 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Poison Point", "false"],
          ["Rivalry", "false"],
          ["Hustle", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/033.png",
        "thumbnail": "src/assets/thumbnails/033.png",
        "hires": "src/assets/hires/033.png"
      }
    },
    {
      "id": 34,
      "name": {
        "english": "Nidoking",
        "japanese": "ニドキング",
        "chinese": "尼多王",
        "french": "Nidoking"
      },
      "type": ["Poison", "Ground"],
      "base": {
        "HP": 81,
        "Attack": 102,
        "Defense": 77,
        "Sp. Attack": 85,
        "Sp. Defense": 75,
        "Speed": 85
      },
      "species": "Drill Pokémon",
      "description": "Nidoking’s thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
      "evolution": { "prev": ["33", "use Moon Stone"] },
      "profile": {
        "height": "1.4 m",
        "weight": "62 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Poison Point", "false"],
          ["Rivalry", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/034.png",
        "thumbnail": "src/assets/thumbnails/034.png",
        "hires": "src/assets/hires/034.png"
      }
    },
    {
      "id": 35,
      "name": {
        "english": "Clefairy",
        "japanese": "ピッピ",
        "chinese": "皮皮",
        "french": "Mélofée"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 70,
        "Attack": 45,
        "Defense": 48,
        "Sp. Attack": 60,
        "Sp. Defense": 65,
        "Speed": 35
      },
      "species": "Fairy Pokémon",
      "description": "Bathed in moonlight, its wings glow faintly. Without even flapping, Clefairy rises into the air, where it dances around.",
      "evolution": {
        "prev": ["173", "high Friendship"],
        "next": [["36", "use Moon Stone"]]
      },
      "profile": {
        "height": "0.6 m",
        "weight": "7.5 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Cute Charm", "false"],
          ["Magic Guard", "false"],
          ["Friend Guard", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/035.png",
        "thumbnail": "src/assets/thumbnails/035.png",
        "hires": "src/assets/hires/035.png"
      }
    },
    {
      "id": 36,
      "name": {
        "english": "Clefable",
        "japanese": "ピクシー",
        "chinese": "皮可西",
        "french": "Mélodelfe"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 95,
        "Attack": 70,
        "Defense": 73,
        "Sp. Attack": 95,
        "Sp. Defense": 90,
        "Speed": 60
      },
      "species": "Fairy Pokémon",
      "description": "Some scientists believe that it gazes intently at the sky on nights with a full moon because it’s homesick.",
      "evolution": { "prev": ["35", "use Moon Stone"] },
      "profile": {
        "height": "1.3 m",
        "weight": "40 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Cute Charm", "false"],
          ["Magic Guard", "false"],
          ["Unaware", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/036.png",
        "thumbnail": "src/assets/thumbnails/036.png",
        "hires": "src/assets/hires/036.png"
      }
    },
    {
      "id": 37,
      "name": {
        "english": "Vulpix",
        "japanese": "ロコン",
        "chinese": "六尾",
        "french": "Goupix"
      },
      "type": ["Fire"],
      "base": {
        "HP": 38,
        "Attack": 41,
        "Defense": 40,
        "Sp. Attack": 50,
        "Sp. Defense": 65,
        "Speed": 65
      },
      "species": "Fox Pokémon",
      "description": "It manipulates balls of fire to catch its prey. If you raise one from when it’s young, it will grow close to you like a puppy Pokémon.",
      "evolution": { "next": [["38", "use Fire Stone"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "9.9 kg",
        "egg": ["Field"],
        "ability": [
          ["Flash Fire", "false"],
          ["Drought", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/037.png",
        "thumbnail": "src/assets/thumbnails/037.png",
        "hires": "src/assets/hires/037.png"
      }
    },
    {
      "id": 38,
      "name": {
        "english": "Ninetales",
        "japanese": "キュウコン",
        "chinese": "九尾",
        "french": "Feunard"
      },
      "type": ["Fire"],
      "base": {
        "HP": 73,
        "Attack": 76,
        "Defense": 75,
        "Sp. Attack": 81,
        "Sp. Defense": 100,
        "Speed": 100
      },
      "species": "Fox Pokémon",
      "description": "The flickering flames it spews from its mouth leave its opponents hypnotized. Then, this extremely intelligent Pokémon attacks.",
      "evolution": { "prev": ["37", "use Fire Stone"] },
      "profile": {
        "height": "1.1 m",
        "weight": "19.9 kg",
        "egg": ["Field"],
        "ability": [
          ["Flash Fire", "false"],
          ["Drought", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/038.png",
        "thumbnail": "src/assets/thumbnails/038.png",
        "hires": "src/assets/hires/038.png"
      }
    },
    {
      "id": 39,
      "name": {
        "english": "Jigglypuff",
        "japanese": "プリン",
        "chinese": "胖丁",
        "french": "Rondoudou"
      },
      "type": ["Normal", "Fairy"],
      "base": {
        "HP": 115,
        "Attack": 45,
        "Defense": 20,
        "Sp. Attack": 45,
        "Sp. Defense": 25,
        "Speed": 20
      },
      "species": "Balloon Pokémon",
      "description": "The songs they sing are totally different depending on the region they live in. Some even sound like they’re shouting!",
      "evolution": {
        "prev": ["174", "high Friendship"],
        "next": [["40", "use Moon Stone"]]
      },
      "profile": {
        "height": "0.5 m",
        "weight": "5.5 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Cute Charm", "false"],
          ["Competitive", "false"],
          ["Friend Guard", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/039.png",
        "thumbnail": "src/assets/thumbnails/039.png",
        "hires": "src/assets/hires/039.png"
      }
    },
    {
      "id": 40,
      "name": {
        "english": "Wigglytuff",
        "japanese": "プクリン",
        "chinese": "胖可丁",
        "french": "Grodoudou"
      },
      "type": ["Normal", "Fairy"],
      "base": {
        "HP": 140,
        "Attack": 70,
        "Defense": 45,
        "Sp. Attack": 85,
        "Sp. Defense": 50,
        "Speed": 45
      },
      "species": "Balloon Pokémon",
      "description": "When it gets angry, it inhales with all its might, and its body gradually inflates. Sometimes they can grow 20 times larger!",
      "evolution": { "prev": ["39", "use Moon Stone"] },
      "profile": {
        "height": "1 m",
        "weight": "12 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Cute Charm", "false"],
          ["Competitive", "false"],
          ["Frisk", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/040.png",
        "thumbnail": "src/assets/thumbnails/040.png",
        "hires": "src/assets/hires/040.png"
      }
    },
    {
      "id": 41,
      "name": {
        "english": "Zubat",
        "japanese": "ズバット",
        "chinese": "超音蝠",
        "french": "Nosferapti"
      },
      "type": ["Poison", "Flying"],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 35,
        "Sp. Attack": 30,
        "Sp. Defense": 40,
        "Speed": 55
      },
      "species": "Bat Pokémon",
      "description": "Their skin is so thin that they’ll be burned if sunlight hits them. When it gets cold out, they gather together to warm one another’s bodies.",
      "evolution": { "next": [["42", "Level 22"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "7.5 kg",
        "egg": ["Flying"],
        "ability": [
          ["Inner Focus", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/041.png",
        "thumbnail": "src/assets/thumbnails/041.png",
        "hires": "src/assets/hires/041.png"
      }
    },
    {
      "id": 42,
      "name": {
        "english": "Golbat",
        "japanese": "ゴルバット",
        "chinese": "大嘴蝠",
        "french": "Nosferalto"
      },
      "type": ["Poison", "Flying"],
      "base": {
        "HP": 75,
        "Attack": 80,
        "Defense": 70,
        "Sp. Attack": 65,
        "Sp. Defense": 75,
        "Speed": 90
      },
      "species": "Bat Pokémon",
      "description": "They can suck down over 10 ounces of blood in one go. They have been known to drink so much blood that they can no longer fly.",
      "evolution": {
        "prev": ["41", "Level 22"],
        "next": [["169", "high Friendship"]]
      },
      "profile": {
        "height": "1.6 m",
        "weight": "55 kg",
        "egg": ["Flying"],
        "ability": [
          ["Inner Focus", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/042.png",
        "thumbnail": "src/assets/thumbnails/042.png",
        "hires": "src/assets/hires/042.png"
      }
    },
    {
      "id": 43,
      "name": {
        "english": "Oddish",
        "japanese": "ナゾノクサ",
        "chinese": "走路草",
        "french": "Mystherbe"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 45,
        "Attack": 50,
        "Defense": 55,
        "Sp. Attack": 75,
        "Sp. Defense": 65,
        "Speed": 30
      },
      "species": "Weed Pokémon",
      "description": "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon’s feet are thought to change shape and become similar to the roots of trees.",
      "evolution": { "next": [["44", "Level 21"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "5.4 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Run Away", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/043.png",
        "thumbnail": "src/assets/thumbnails/043.png",
        "hires": "src/assets/hires/043.png"
      }
    },
    {
      "id": 44,
      "name": {
        "english": "Gloom",
        "japanese": "クサイハナ",
        "chinese": "臭臭花",
        "french": "Ortide"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 60,
        "Attack": 65,
        "Defense": 70,
        "Sp. Attack": 85,
        "Sp. Defense": 75,
        "Speed": 40
      },
      "species": "Weed Pokémon",
      "description": "From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.",
      "evolution": {
        "prev": ["43", "Level 21"],
        "next": [
          ["45", "use Leaf Stone"],
          ["182", "use Sun Stone"]
        ]
      },
      "profile": {
        "height": "0.8 m",
        "weight": "8.6 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Stench", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/044.png",
        "thumbnail": "src/assets/thumbnails/044.png",
        "hires": "src/assets/hires/044.png"
      }
    },
    {
      "id": 45,
      "name": {
        "english": "Vileplume",
        "japanese": "ラフレシア",
        "chinese": "霸王花",
        "french": "Rafflesia"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 75,
        "Attack": 80,
        "Defense": 85,
        "Sp. Attack": 110,
        "Sp. Defense": 90,
        "Speed": 50
      },
      "species": "Flower Pokémon",
      "description": "Vileplume has the world’s largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them.",
      "evolution": { "prev": ["44", "use Leaf Stone"] },
      "profile": {
        "height": "1.2 m",
        "weight": "18.6 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Effect Spore", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/045.png",
        "thumbnail": "src/assets/thumbnails/045.png",
        "hires": "src/assets/hires/045.png"
      }
    },
    {
      "id": 46,
      "name": {
        "english": "Paras",
        "japanese": "パラス",
        "chinese": "派拉斯",
        "french": "Paras"
      },
      "type": ["Bug", "Grass"],
      "base": {
        "HP": 35,
        "Attack": 70,
        "Defense": 55,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 25
      },
      "species": "Mushroom Pokémon",
      "description": "The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off.",
      "evolution": { "next": [["47", "Level 24"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "5.4 kg",
        "egg": ["Bug", "Grass"],
        "ability": [
          ["Effect Spore", "false"],
          ["Dry Skin", "false"],
          ["Damp", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/046.png",
        "thumbnail": "src/assets/thumbnails/046.png",
        "hires": "src/assets/hires/046.png"
      }
    },
    {
      "id": 47,
      "name": {
        "english": "Parasect",
        "japanese": "パラセクト",
        "chinese": "派拉斯特",
        "french": "Parasect"
      },
      "type": ["Bug", "Grass"],
      "base": {
        "HP": 60,
        "Attack": 95,
        "Defense": 80,
        "Sp. Attack": 60,
        "Sp. Defense": 80,
        "Speed": 30
      },
      "species": "Mushroom Pokémon",
      "description": "Its poisonous spores are also used in traditional medicine. Apparently, spores produced in Alola are not of very good quality.",
      "evolution": { "prev": ["46", "Level 24"] },
      "profile": {
        "height": "1 m",
        "weight": "29.5 kg",
        "egg": ["Bug", "Grass"],
        "ability": [
          ["Effect Spore", "false"],
          ["Dry Skin", "false"],
          ["Damp", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/047.png",
        "thumbnail": "src/assets/thumbnails/047.png",
        "hires": "src/assets/hires/047.png"
      }
    },
    {
      "id": 48,
      "name": {
        "english": "Venonat",
        "japanese": "コンパン",
        "chinese": "毛球",
        "french": "Mimitoss"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 60,
        "Attack": 55,
        "Defense": 50,
        "Sp. Attack": 40,
        "Sp. Defense": 55,
        "Speed": 45
      },
      "species": "Insect Pokémon",
      "description": "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
      "evolution": { "next": [["49", "Level 31"]] },
      "profile": {
        "height": "1 m",
        "weight": "30 kg",
        "egg": ["Bug"],
        "ability": [
          ["Compound Eyes", "false"],
          ["Tinted Lens", "false"],
          ["Run Away", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/048.png",
        "thumbnail": "src/assets/thumbnails/048.png",
        "hires": "src/assets/hires/048.png"
      }
    },
    {
      "id": 49,
      "name": {
        "english": "Venomoth",
        "japanese": "モルフォン",
        "chinese": "摩鲁蛾",
        "french": "Aéromite"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 70,
        "Attack": 65,
        "Defense": 60,
        "Sp. Attack": 90,
        "Sp. Defense": 75,
        "Speed": 90
      },
      "species": "Poison Moth Pokémon",
      "description": "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
      "evolution": { "prev": ["48", "Level 31"] },
      "profile": {
        "height": "1.5 m",
        "weight": "12.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Shield Dust", "false"],
          ["Tinted Lens", "false"],
          ["Wonder Skin", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/049.png",
        "thumbnail": "src/assets/thumbnails/049.png",
        "hires": "src/assets/hires/049.png"
      }
    },
    {
      "id": 50,
      "name": {
        "english": "Diglett",
        "japanese": "ディグダ",
        "chinese": "地鼠",
        "french": "Taupiqueur"
      },
      "type": ["Ground"],
      "base": {
        "HP": 10,
        "Attack": 55,
        "Defense": 25,
        "Sp. Attack": 35,
        "Sp. Defense": 45,
        "Speed": 95
      },
      "species": "Mole Pokémon",
      "description": "Around their crops, farmers plant the kind of tree that Diglett like to eat as a way of getting Diglett to plow the fields for them.",
      "evolution": { "next": [["51", "Level 26"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "0.8 kg",
        "egg": ["Field"],
        "ability": [
          ["Sand Veil", "false"],
          ["Arena Trap", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/050.png",
        "thumbnail": "src/assets/thumbnails/050.png",
        "hires": "src/assets/hires/050.png"
      }
    },
    {
      "id": 51,
      "name": {
        "english": "Dugtrio",
        "japanese": "ダグトリオ",
        "chinese": "三地鼠",
        "french": "Triopikeur"
      },
      "type": ["Ground"],
      "base": {
        "HP": 35,
        "Attack": 100,
        "Defense": 50,
        "Sp. Attack": 50,
        "Sp. Defense": 70,
        "Speed": 120
      },
      "species": "Mole Pokémon",
      "description": "Dugtrio’s heads are sleek and smooth and incredibly hard. It can dig through any soil with its headbutts.",
      "evolution": { "prev": ["50", "Level 26"] },
      "profile": {
        "height": "0.7 m",
        "weight": "33.3 kg",
        "egg": ["Field"],
        "ability": [
          ["Sand Veil", "false"],
          ["Arena Trap", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/051.png",
        "thumbnail": "src/assets/thumbnails/051.png",
        "hires": "src/assets/hires/051.png"
      }
    },
    {
      "id": 52,
      "name": {
        "english": "Meowth",
        "japanese": "ニャース",
        "chinese": "喵喵",
        "french": "Miaouss"
      },
      "type": ["Normal"],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 35,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 90
      },
      "species": "Scratch Cat Pokémon",
      "description": "It loves coins, so if you give it one, you can make friends with Meowth easily. But it’s fickle, so you can’t count on that friendship lasting.",
      "evolution": { "next": [["53", "Level 28"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "4.2 kg",
        "egg": ["Field"],
        "ability": [
          ["Pickup", "false"],
          ["Technician", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/052.png",
        "thumbnail": "src/assets/thumbnails/052.png",
        "hires": "src/assets/hires/052.png"
      }
    },
    {
      "id": 53,
      "name": {
        "english": "Persian",
        "japanese": "ペルシアン",
        "chinese": "猫老大",
        "french": "Persian"
      },
      "type": ["Normal"],
      "base": {
        "HP": 65,
        "Attack": 70,
        "Defense": 60,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 115
      },
      "species": "Classy Cat Pokémon",
      "description": "This Pokémon is popular with rich people. It’s also targeted by hunters who are after the jewel in its forehead.",
      "evolution": { "prev": ["52", "Level 28"] },
      "profile": {
        "height": "1 m",
        "weight": "32 kg",
        "egg": ["Field"],
        "ability": [
          ["Limber", "false"],
          ["Technician", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/053.png",
        "thumbnail": "src/assets/thumbnails/053.png",
        "hires": "src/assets/hires/053.png"
      }
    },
    {
      "id": 54,
      "name": {
        "english": "Psyduck",
        "japanese": "コダック",
        "chinese": "可达鸭",
        "french": "Psykokwak"
      },
      "type": ["Water"],
      "base": {
        "HP": 50,
        "Attack": 52,
        "Defense": 48,
        "Sp. Attack": 65,
        "Sp. Defense": 50,
        "Speed": 55
      },
      "species": "Duck Pokémon",
      "description": "It has been found that its brain cells are 10 times more active when Psyduck is experiencing a headache.",
      "evolution": { "next": [["55", "Level 33"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "19.6 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Damp", "false"],
          ["Cloud Nine", "false"],
          ["Swift Swim", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/054.png",
        "thumbnail": "src/assets/thumbnails/054.png",
        "hires": "src/assets/hires/054.png"
      }
    },
    {
      "id": 55,
      "name": {
        "english": "Golduck",
        "japanese": "ゴルダック",
        "chinese": "哥达鸭",
        "french": "Akwakwak"
      },
      "type": ["Water"],
      "base": {
        "HP": 80,
        "Attack": 82,
        "Defense": 78,
        "Sp. Attack": 95,
        "Sp. Defense": 80,
        "Speed": 85
      },
      "species": "Duck Pokémon",
      "description": "A professional swimmer, it can continue swimming for two days straight by waving its long tail skillfully.",
      "evolution": { "prev": ["54", "Level 33"] },
      "profile": {
        "height": "1.7 m",
        "weight": "76.6 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Damp", "false"],
          ["Cloud Nine", "false"],
          ["Swift Swim", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/055.png",
        "thumbnail": "src/assets/thumbnails/055.png",
        "hires": "src/assets/hires/055.png"
      }
    },
    {
      "id": 56,
      "name": {
        "english": "Mankey",
        "japanese": "マンキー",
        "chinese": "猴怪",
        "french": "Férosinge"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 40,
        "Attack": 80,
        "Defense": 35,
        "Sp. Attack": 35,
        "Sp. Defense": 45,
        "Speed": 70
      },
      "species": "Pig Monkey Pokémon",
      "description": "If one gets angry, all the others around it will get angry, so silence is a rare visitor in a troop of Mankey.",
      "evolution": { "next": [["57", "Level 28"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "28 kg",
        "egg": ["Field"],
        "ability": [
          ["Vital Spirit", "false"],
          ["Anger Point", "false"],
          ["Defiant", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/056.png",
        "thumbnail": "src/assets/thumbnails/056.png",
        "hires": "src/assets/hires/056.png"
      }
    },
    {
      "id": 57,
      "name": {
        "english": "Primeape",
        "japanese": "オコリザル",
        "chinese": "火暴猴",
        "french": "Colossinge"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 65,
        "Attack": 105,
        "Defense": 60,
        "Sp. Attack": 60,
        "Sp. Defense": 70,
        "Speed": 95
      },
      "species": "Pig Monkey Pokémon",
      "description": "The blood vessels in its brain are sturdier than those of other Pokémon, so it can stay healthy despite its constant raging.",
      "evolution": { "prev": ["56", "Level 28"] },
      "profile": {
        "height": "1 m",
        "weight": "32 kg",
        "egg": ["Field"],
        "ability": [
          ["Vital Spirit", "false"],
          ["Anger Point", "false"],
          ["Defiant", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/057.png",
        "thumbnail": "src/assets/thumbnails/057.png",
        "hires": "src/assets/hires/057.png"
      }
    },
    {
      "id": 58,
      "name": {
        "english": "Growlithe",
        "japanese": "ガーディ",
        "chinese": "卡蒂狗",
        "french": "Caninos"
      },
      "type": ["Fire"],
      "base": {
        "HP": 55,
        "Attack": 70,
        "Defense": 45,
        "Sp. Attack": 70,
        "Sp. Defense": 50,
        "Speed": 60
      },
      "species": "Puppy Pokémon",
      "description": "It has lived alongside humans since ages ago. Its bones have been found in excavations of ruins from the Stone Age.",
      "evolution": { "next": [["59", "use Fire Stone"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "19 kg",
        "egg": ["Field"],
        "ability": [
          ["Intimidate", "false"],
          ["Flash Fire", "false"],
          ["Justified", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/058.png",
        "thumbnail": "src/assets/thumbnails/058.png",
        "hires": "src/assets/hires/058.png"
      }
    },
    {
      "id": 59,
      "name": {
        "english": "Arcanine",
        "japanese": "ウインディ",
        "chinese": "风速狗",
        "french": "Arcanin"
      },
      "type": ["Fire"],
      "base": {
        "HP": 90,
        "Attack": 110,
        "Defense": 80,
        "Sp. Attack": 100,
        "Sp. Defense": 80,
        "Speed": 95
      },
      "species": "Legendary Pokémon",
      "description": "There are so many old tales about them that they’re called legendary Pokémon, but there are way more of them around than you’d expect.",
      "evolution": { "prev": ["58", "use Fire Stone"] },
      "profile": {
        "height": "1.9 m",
        "weight": "155 kg",
        "egg": ["Field"],
        "ability": [
          ["Intimidate", "false"],
          ["Flash Fire", "false"],
          ["Justified", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/059.png",
        "thumbnail": "src/assets/thumbnails/059.png",
        "hires": "src/assets/hires/059.png"
      }
    },
    {
      "id": 60,
      "name": {
        "english": "Poliwag",
        "japanese": "ニョロモ",
        "chinese": "蚊香蝌蚪",
        "french": "Ptitard"
      },
      "type": ["Water"],
      "base": {
        "HP": 40,
        "Attack": 50,
        "Defense": 40,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 90
      },
      "species": "Tadpole Pokémon",
      "description": "The direction of the swirl on their stomachs differs depending on where they live. Poliwag aficionados can tell them apart at a glance.",
      "evolution": { "next": [["61", "Level 25"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "12.4 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Water Absorb", "false"],
          ["Damp", "false"],
          ["Swift Swim", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/060.png",
        "thumbnail": "src/assets/thumbnails/060.png",
        "hires": "src/assets/hires/060.png"
      }
    },
    {
      "id": 61,
      "name": {
        "english": "Poliwhirl",
        "japanese": "ニョロゾ",
        "chinese": "蚊香君",
        "french": "Têtarte"
      },
      "type": ["Water"],
      "base": {
        "HP": 65,
        "Attack": 65,
        "Defense": 65,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 90
      },
      "species": "Tadpole Pokémon",
      "description": "Its health suffers when its skin dries out, so be sure to moisturize it diligently.",
      "evolution": {
        "prev": ["60", "Level 25"],
        "next": [
          ["62", "use Water Stone"],
          ["186", "trade holding Kings Rock"]
        ]
      },
      "profile": {
        "height": "1 m",
        "weight": "20 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Water Absorb", "false"],
          ["Damp", "false"],
          ["Swift Swim", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/061.png",
        "thumbnail": "src/assets/thumbnails/061.png",
        "hires": "src/assets/hires/061.png"
      }
    },
    {
      "id": 62,
      "name": {
        "english": "Poliwrath",
        "japanese": "ニョロボン",
        "chinese": "蚊香泳士",
        "french": "Tartard"
      },
      "type": ["Water", "Fighting"],
      "base": {
        "HP": 90,
        "Attack": 95,
        "Defense": 95,
        "Sp. Attack": 70,
        "Sp. Defense": 90,
        "Speed": 70
      },
      "species": "Tadpole Pokémon",
      "description": "The muscles it has developed through swimming are thick and powerful. When it lands a square punch, it can turn huge boulders to dust.",
      "evolution": { "prev": ["61", "use Water Stone"] },
      "profile": {
        "height": "1.3 m",
        "weight": "54 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Water Absorb", "false"],
          ["Damp", "false"],
          ["Swift Swim", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/062.png",
        "thumbnail": "src/assets/thumbnails/062.png",
        "hires": "src/assets/hires/062.png"
      }
    },
    {
      "id": 63,
      "name": {
        "english": "Abra",
        "japanese": "ケーシィ",
        "chinese": "凯西",
        "french": "Abra"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 25,
        "Attack": 20,
        "Defense": 15,
        "Sp. Attack": 105,
        "Sp. Defense": 55,
        "Speed": 90
      },
      "species": "Psi Pokémon",
      "description": "It can read others’ minds and will teleport away when danger approaches. You must clear your mind if you want to catch it.",
      "evolution": { "next": [["64", "Level 16"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "19.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Synchronize", "false"],
          ["Inner Focus", "false"],
          ["Magic Guard", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/063.png",
        "thumbnail": "src/assets/thumbnails/063.png",
        "hires": "src/assets/hires/063.png"
      }
    },
    {
      "id": 64,
      "name": {
        "english": "Kadabra",
        "japanese": "ユンゲラー",
        "chinese": "勇基拉",
        "french": "Kadabra"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 40,
        "Attack": 35,
        "Defense": 30,
        "Sp. Attack": 120,
        "Sp. Defense": 70,
        "Speed": 105
      },
      "species": "Psi Pokémon",
      "description": "It possesses strong mental capabilities, but its psychic powers are halved when it’s not holding a silver spoon.",
      "evolution": { "prev": ["63", "Level 16"], "next": [["65", "Trade"]] },
      "profile": {
        "height": "1.3 m",
        "weight": "56.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Synchronize", "false"],
          ["Inner Focus", "false"],
          ["Magic Guard", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/064.png",
        "thumbnail": "src/assets/thumbnails/064.png",
        "hires": "src/assets/hires/064.png"
      }
    },
    {
      "id": 65,
      "name": {
        "english": "Alakazam",
        "japanese": "フーディン",
        "chinese": "胡地",
        "french": "Alakazam"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 55,
        "Attack": 50,
        "Defense": 45,
        "Sp. Attack": 135,
        "Sp. Defense": 95,
        "Speed": 120
      },
      "species": "Psi Pokémon",
      "description": "If it trusts someone deeply, it will let them have one of its spoons. Anything you eat with that spoon is apparently delicious.",
      "evolution": { "prev": ["64", "Trade"] },
      "profile": {
        "height": "1.5 m",
        "weight": "48 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Synchronize", "false"],
          ["Inner Focus", "false"],
          ["Magic Guard", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/065.png",
        "thumbnail": "src/assets/thumbnails/065.png",
        "hires": "src/assets/hires/065.png"
      }
    },
    {
      "id": 66,
      "name": {
        "english": "Machop",
        "japanese": "ワンリキー",
        "chinese": "腕力",
        "french": "Machoc"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 70,
        "Attack": 80,
        "Defense": 50,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 35
      },
      "species": "Superpower Pokémon",
      "description": "It likes food that’s highly nutritious because its instincts drive it to build muscle efficiently.",
      "evolution": { "next": [["67", "Level 28"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "19.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Guts", "false"],
          ["No Guard", "false"],
          ["Steadfast", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/066.png",
        "thumbnail": "src/assets/thumbnails/066.png",
        "hires": "src/assets/hires/066.png"
      }
    },
    {
      "id": 67,
      "name": {
        "english": "Machoke",
        "japanese": "ゴーリキー",
        "chinese": "豪力",
        "french": "Machopeur"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 80,
        "Attack": 100,
        "Defense": 70,
        "Sp. Attack": 50,
        "Sp. Defense": 60,
        "Speed": 45
      },
      "species": "Superpower Pokémon",
      "description": "A popular motif for sculptures, its incredibly well-developed muscles have captured the imagination of many an artist.",
      "evolution": { "prev": ["66", "Level 28"], "next": [["68", "Trade"]] },
      "profile": {
        "height": "1.5 m",
        "weight": "70.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Guts", "false"],
          ["No Guard", "false"],
          ["Steadfast", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/067.png",
        "thumbnail": "src/assets/thumbnails/067.png",
        "hires": "src/assets/hires/067.png"
      }
    },
    {
      "id": 68,
      "name": {
        "english": "Machamp",
        "japanese": "カイリキー",
        "chinese": "怪力",
        "french": "Mackogneur"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 90,
        "Attack": 130,
        "Defense": 80,
        "Sp. Attack": 65,
        "Sp. Defense": 85,
        "Speed": 55
      },
      "species": "Superpower Pokémon",
      "description": "With four arms, it can attack and defend simultaneously. It’s said to have mastered every martial art in the world.",
      "evolution": { "prev": ["67", "Trade"] },
      "profile": {
        "height": "1.6 m",
        "weight": "130 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Guts", "false"],
          ["No Guard", "false"],
          ["Steadfast", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/068.png",
        "thumbnail": "src/assets/thumbnails/068.png",
        "hires": "src/assets/hires/068.png"
      }
    },
    {
      "id": 69,
      "name": {
        "english": "Bellsprout",
        "japanese": "マダツボミ",
        "chinese": "喇叭芽",
        "french": "Chétiflor"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 50,
        "Attack": 75,
        "Defense": 35,
        "Sp. Attack": 70,
        "Sp. Defense": 30,
        "Speed": 40
      },
      "species": "Flower Pokémon",
      "description": "Bellsprout’s thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
      "evolution": { "next": [["70", "Level 21"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "4 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Gluttony", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/069.png",
        "thumbnail": "src/assets/thumbnails/069.png",
        "hires": "src/assets/hires/069.png"
      }
    },
    {
      "id": 70,
      "name": {
        "english": "Weepinbell",
        "japanese": "ウツドン",
        "chinese": "口呆花",
        "french": "Boustiflor"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 50,
        "Sp. Attack": 85,
        "Sp. Defense": 45,
        "Speed": 55
      },
      "species": "Flycatcher Pokémon",
      "description": "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
      "evolution": {
        "prev": ["69", "Level 21"],
        "next": [["71", "use Leaf Stone"]]
      },
      "profile": {
        "height": "1 m",
        "weight": "6.4 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Gluttony", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/070.png",
        "thumbnail": "src/assets/thumbnails/070.png",
        "hires": "src/assets/hires/070.png"
      }
    },
    {
      "id": 71,
      "name": {
        "english": "Victreebel",
        "japanese": "ウツボット",
        "chinese": "大食花",
        "french": "Empiflor"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 80,
        "Attack": 105,
        "Defense": 65,
        "Sp. Attack": 100,
        "Sp. Defense": 70,
        "Speed": 70
      },
      "species": "Flycatcher Pokémon",
      "description": "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
      "evolution": { "prev": ["70", "use Leaf Stone"] },
      "profile": {
        "height": "1.7 m",
        "weight": "15.5 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Gluttony", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/071.png",
        "thumbnail": "src/assets/thumbnails/071.png",
        "hires": "src/assets/hires/071.png"
      }
    },
    {
      "id": 72,
      "name": {
        "english": "Tentacool",
        "japanese": "メノクラゲ",
        "chinese": "玛瑙水母",
        "french": "Tentacool"
      },
      "type": ["Water", "Poison"],
      "base": {
        "HP": 40,
        "Attack": 40,
        "Defense": 35,
        "Sp. Attack": 50,
        "Sp. Defense": 100,
        "Speed": 70
      },
      "species": "Jellyfish Pokémon",
      "description": "Its body is 99% water. The remaining 1% contains the organ that makes its poison.",
      "evolution": { "next": [["73", "Level 30"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "45.5 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Clear Body", "false"],
          ["Liquid Ooze", "false"],
          ["Rain Dish", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/072.png",
        "thumbnail": "src/assets/thumbnails/072.png",
        "hires": "src/assets/hires/072.png"
      }
    },
    {
      "id": 73,
      "name": {
        "english": "Tentacruel",
        "japanese": "ドククラゲ",
        "chinese": "毒刺水母",
        "french": "Tentacruel"
      },
      "type": ["Water", "Poison"],
      "base": {
        "HP": 80,
        "Attack": 70,
        "Defense": 65,
        "Sp. Attack": 80,
        "Sp. Defense": 120,
        "Speed": 100
      },
      "species": "Jellyfish Pokémon",
      "description": "It communicates with others of its kind by lighting up the red orbs on its head. When the orbs are blinking, it’s a warning sign.",
      "evolution": { "prev": ["72", "Level 30"] },
      "profile": {
        "height": "1.6 m",
        "weight": "55 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Clear Body", "false"],
          ["Liquid Ooze", "false"],
          ["Rain Dish", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/073.png",
        "thumbnail": "src/assets/thumbnails/073.png",
        "hires": "src/assets/hires/073.png"
      }
    },
    {
      "id": 74,
      "name": {
        "english": "Geodude",
        "japanese": "イシツブテ",
        "chinese": "小拳石",
        "french": "Racaillou"
      },
      "type": ["Rock", "Ground"],
      "base": {
        "HP": 40,
        "Attack": 80,
        "Defense": 100,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 20
      },
      "species": "Rock Pokémon",
      "description": "It uses both hands to climb precipitous cliffs. People who see it in action have been known to take up bouldering.",
      "evolution": { "next": [["75", "Level 25"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "20 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Rock Head", "false"],
          ["Sturdy", "false"],
          ["Sand Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/074.png",
        "thumbnail": "src/assets/thumbnails/074.png",
        "hires": "src/assets/hires/074.png"
      }
    },
    {
      "id": 75,
      "name": {
        "english": "Graveler",
        "japanese": "ゴローン",
        "chinese": "隆隆石",
        "french": "Gravalanch"
      },
      "type": ["Rock", "Ground"],
      "base": {
        "HP": 55,
        "Attack": 95,
        "Defense": 115,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 35
      },
      "species": "Rock Pokémon",
      "description": "It travels by rolling down cliffs. If it falls into a river, it will explode with its last gasp.",
      "evolution": { "prev": ["74", "Level 25"], "next": [["76", "Trade"]] },
      "profile": {
        "height": "1 m",
        "weight": "105 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Rock Head", "false"],
          ["Sturdy", "false"],
          ["Sand Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/075.png",
        "thumbnail": "src/assets/thumbnails/075.png",
        "hires": "src/assets/hires/075.png"
      }
    },
    {
      "id": 76,
      "name": {
        "english": "Golem",
        "japanese": "ゴローニャ",
        "chinese": "隆隆岩",
        "french": "Grolem"
      },
      "type": ["Rock", "Ground"],
      "base": {
        "HP": 80,
        "Attack": 120,
        "Defense": 130,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 45
      },
      "species": "Megaton Pokémon",
      "description": "It detonates its own body. The power from that explosion can propel it up steep mountain paths with amazing speed.",
      "evolution": { "prev": ["75", "Trade"] },
      "profile": {
        "height": "1.4 m",
        "weight": "300 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Rock Head", "false"],
          ["Sturdy", "false"],
          ["Sand Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/076.png",
        "thumbnail": "src/assets/thumbnails/076.png",
        "hires": "src/assets/hires/076.png"
      }
    },
    {
      "id": 77,
      "name": {
        "english": "Ponyta",
        "japanese": "ポニータ",
        "chinese": "小火马",
        "french": "Ponyta"
      },
      "type": ["Fire"],
      "base": {
        "HP": 50,
        "Attack": 85,
        "Defense": 55,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 90
      },
      "species": "Fire Horse Pokémon",
      "description": "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
      "evolution": { "next": [["78", "Level 40"]] },
      "profile": {
        "height": "1 m",
        "weight": "30 kg",
        "egg": ["Field"],
        "ability": [
          ["Run Away", "false"],
          ["Flash Fire", "false"],
          ["Flame Body", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/077.png",
        "thumbnail": "src/assets/thumbnails/077.png",
        "hires": "src/assets/hires/077.png"
      }
    },
    {
      "id": 78,
      "name": {
        "english": "Rapidash",
        "japanese": "ギャロップ",
        "chinese": "烈焰马",
        "french": "Galopa"
      },
      "type": ["Fire"],
      "base": {
        "HP": 65,
        "Attack": 100,
        "Defense": 70,
        "Sp. Attack": 80,
        "Sp. Defense": 80,
        "Speed": 105
      },
      "species": "Fire Horse Pokémon",
      "description": "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
      "evolution": { "prev": ["77", "Level 40"] },
      "profile": {
        "height": "1.7 m",
        "weight": "95 kg",
        "egg": ["Field"],
        "ability": [
          ["Run Away", "false"],
          ["Flash Fire", "false"],
          ["Flame Body", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/078.png",
        "thumbnail": "src/assets/thumbnails/078.png",
        "hires": "src/assets/hires/078.png"
      }
    },
    {
      "id": 79,
      "name": {
        "english": "Slowpoke",
        "japanese": "ヤドン",
        "chinese": "呆呆兽",
        "french": "Ramoloss"
      },
      "type": ["Water", "Psychic"],
      "base": {
        "HP": 90,
        "Attack": 65,
        "Defense": 65,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 15
      },
      "species": "Dopey Pokémon",
      "description": "Although their tails, which fall off naturally, can easily be found lying around, they’re a precious ingredient for cooking.",
      "evolution": {
        "next": [
          ["80", "Level 37"],
          ["199", "trade holding Kings Rock"]
        ]
      },
      "profile": {
        "height": "1.2 m",
        "weight": "36 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Oblivious", "false"],
          ["Own Tempo", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/079.png",
        "thumbnail": "src/assets/thumbnails/079.png",
        "hires": "src/assets/hires/079.png"
      }
    },
    {
      "id": 80,
      "name": {
        "english": "Slowbro",
        "japanese": "ヤドラン",
        "chinese": "呆壳兽",
        "french": "Flagadoss"
      },
      "type": ["Water", "Psychic"],
      "base": {
        "HP": 95,
        "Attack": 75,
        "Defense": 110,
        "Sp. Attack": 100,
        "Sp. Defense": 80,
        "Speed": 30
      },
      "species": "Hermit Crab Pokémon",
      "description": "Shellder, in its greed to suck out more and more sweetness from Slowbro’s tail, has metamorphosed into a spiral-shaped shell.",
      "evolution": { "prev": ["79", "Level 37"] },
      "profile": {
        "height": "1.6 m",
        "weight": "78.5 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Oblivious", "false"],
          ["Own Tempo", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/080.png",
        "thumbnail": "src/assets/thumbnails/080.png",
        "hires": "src/assets/hires/080.png"
      }
    },
    {
      "id": 81,
      "name": {
        "english": "Magnemite",
        "japanese": "コイル",
        "chinese": "小磁怪",
        "french": "Magnéti"
      },
      "type": ["Electric", "Steel"],
      "base": {
        "HP": 25,
        "Attack": 35,
        "Defense": 70,
        "Sp. Attack": 95,
        "Sp. Defense": 55,
        "Speed": 45
      },
      "species": "Magnet Pokémon",
      "description": "Perhaps because electrical lines are often buried these days, the number of Magnemite attacks on power plants has increased.",
      "evolution": { "next": [["82", "Level 30"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "6 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Magnet Pull", "false"],
          ["Sturdy", "false"],
          ["Analytic", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/081.png",
        "thumbnail": "src/assets/thumbnails/081.png",
        "hires": "src/assets/hires/081.png"
      }
    },
    {
      "id": 82,
      "name": {
        "english": "Magneton",
        "japanese": "レアコイル",
        "chinese": "三合一磁怪",
        "french": "Magnéton"
      },
      "type": ["Electric", "Steel"],
      "base": {
        "HP": 50,
        "Attack": 60,
        "Defense": 95,
        "Sp. Attack": 120,
        "Sp. Defense": 70,
        "Speed": 70
      },
      "species": "Magnet Pokémon",
      "description": "When rain clouds form, many Magneton gather in high places to wait for lightning to strike.",
      "evolution": {
        "prev": ["81", "Level 30"],
        "next": [["462", "level up in a Magnetic Field area"]]
      },
      "profile": {
        "height": "1 m",
        "weight": "60 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Magnet Pull", "false"],
          ["Sturdy", "false"],
          ["Analytic", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/082.png",
        "thumbnail": "src/assets/thumbnails/082.png",
        "hires": "src/assets/hires/082.png"
      }
    },
    {
      "id": 83,
      "name": {
        "english": "Farfetch'd",
        "japanese": "カモネギ",
        "chinese": "大葱鸭",
        "french": "Canarticho"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 52,
        "Attack": 90,
        "Defense": 55,
        "Sp. Attack": 58,
        "Sp. Defense": 62,
        "Speed": 60
      },
      "species": "Wild Duck Pokémon",
      "description": "Farfetch’d is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
      "evolution": {},
      "profile": {
        "height": "0.8 m",
        "weight": "15 kg",
        "egg": ["Flying", "Field"],
        "ability": [
          ["Keen Eye", "false"],
          ["Inner Focus", "false"],
          ["Defiant", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/083.png",
        "thumbnail": "src/assets/thumbnails/083.png",
        "hires": "src/assets/hires/083.png"
      }
    },
    {
      "id": 84,
      "name": {
        "english": "Doduo",
        "japanese": "ドードー",
        "chinese": "嘟嘟",
        "french": "Doduo"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 35,
        "Attack": 85,
        "Defense": 45,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 75
      },
      "species": "Twin Bird Pokémon",
      "description": "Doduo’s two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pokémon possessing different sets of brains.",
      "evolution": { "next": [["85", "Level 31"]] },
      "profile": {
        "height": "1.4 m",
        "weight": "39.2 kg",
        "egg": ["Flying"],
        "ability": [
          ["Run Away", "false"],
          ["Early Bird", "false"],
          ["Tangled Feet", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/084.png",
        "thumbnail": "src/assets/thumbnails/084.png",
        "hires": "src/assets/hires/084.png"
      }
    },
    {
      "id": 85,
      "name": {
        "english": "Dodrio",
        "japanese": "ドードリオ",
        "chinese": "嘟嘟利",
        "french": "Dodrio"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 60,
        "Attack": 110,
        "Defense": 70,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 110
      },
      "species": "Triple Bird Pokémon",
      "description": "Apparently, the heads aren’t the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.",
      "evolution": { "prev": ["84", "Level 31"] },
      "profile": {
        "height": "1.8 m",
        "weight": "85.2 kg",
        "egg": ["Flying"],
        "ability": [
          ["Run Away", "false"],
          ["Early Bird", "false"],
          ["Tangled Feet", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/085.png",
        "thumbnail": "src/assets/thumbnails/085.png",
        "hires": "src/assets/hires/085.png"
      }
    },
    {
      "id": 86,
      "name": {
        "english": "Seel",
        "japanese": "パウワウ",
        "chinese": "小海狮",
        "french": "Otaria"
      },
      "type": ["Water"],
      "base": {
        "HP": 65,
        "Attack": 45,
        "Defense": 55,
        "Sp. Attack": 45,
        "Sp. Defense": 70,
        "Speed": 45
      },
      "species": "Sea Lion Pokémon",
      "description": "Thanks to its thick fat, cold seas don’t bother it at all, but it gets tired pretty easily in warm waters.",
      "evolution": { "next": [["87", "Level 34"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "90 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Thick Fat", "false"],
          ["Hydration", "false"],
          ["Ice Body", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/086.png",
        "thumbnail": "src/assets/thumbnails/086.png",
        "hires": "src/assets/hires/086.png"
      }
    },
    {
      "id": 87,
      "name": {
        "english": "Dewgong",
        "japanese": "ジュゴン",
        "chinese": "白海狮",
        "french": "Lamantine"
      },
      "type": ["Water", "Ice"],
      "base": {
        "HP": 90,
        "Attack": 70,
        "Defense": 80,
        "Sp. Attack": 70,
        "Sp. Defense": 95,
        "Speed": 70
      },
      "species": "Sea Lion Pokémon",
      "description": "It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.",
      "evolution": { "prev": ["86", "Level 34"] },
      "profile": {
        "height": "1.7 m",
        "weight": "120 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Thick Fat", "false"],
          ["Hydration", "false"],
          ["Ice Body", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/087.png",
        "thumbnail": "src/assets/thumbnails/087.png",
        "hires": "src/assets/hires/087.png"
      }
    },
    {
      "id": 88,
      "name": {
        "english": "Grimer",
        "japanese": "ベトベター",
        "chinese": "臭泥",
        "french": "Tadmorv"
      },
      "type": ["Poison"],
      "base": {
        "HP": 80,
        "Attack": 80,
        "Defense": 50,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 25
      },
      "species": "Sludge Pokémon",
      "description": "The wastewater coming from factories is clean these days, so Grimer have nothing to eat. They’re said to be on the verge of extinction.",
      "evolution": { "next": [["89", "Level 38"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "30 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Stench", "false"],
          ["Sticky Hold", "false"],
          ["Poison Touch", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/088.png",
        "thumbnail": "src/assets/thumbnails/088.png",
        "hires": "src/assets/hires/088.png"
      }
    },
    {
      "id": 89,
      "name": {
        "english": "Muk",
        "japanese": "ベトベトン",
        "chinese": "臭臭泥",
        "french": "Grotadmorv"
      },
      "type": ["Poison"],
      "base": {
        "HP": 105,
        "Attack": 105,
        "Defense": 75,
        "Sp. Attack": 65,
        "Sp. Defense": 100,
        "Speed": 50
      },
      "species": "Sludge Pokémon",
      "description": "Because they scatter germs everywhere, they’ve long been targeted for extermination, leading to a steep decline in their population.",
      "evolution": { "prev": ["88", "Level 38"] },
      "profile": {
        "height": "1.2 m",
        "weight": "30 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Stench", "false"],
          ["Sticky Hold", "false"],
          ["Poison Touch", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/089.png",
        "thumbnail": "src/assets/thumbnails/089.png",
        "hires": "src/assets/hires/089.png"
      }
    },
    {
      "id": 90,
      "name": {
        "english": "Shellder",
        "japanese": "シェルダー",
        "chinese": "大舌贝",
        "french": "Kokiyas"
      },
      "type": ["Water"],
      "base": {
        "HP": 30,
        "Attack": 65,
        "Defense": 100,
        "Sp. Attack": 45,
        "Sp. Defense": 25,
        "Speed": 40
      },
      "species": "Bivalve Pokémon",
      "description": "Even when its shell is closed, its tongue still hangs out. If you give its tongue a good yank, the shock will cause Shellder to open its shell.",
      "evolution": { "next": [["91", "use Water Stone"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "4 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Shell Armor", "false"],
          ["Skill Link", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/090.png",
        "thumbnail": "src/assets/thumbnails/090.png",
        "hires": "src/assets/hires/090.png"
      }
    },
    {
      "id": 91,
      "name": {
        "english": "Cloyster",
        "japanese": "パルシェン",
        "chinese": "刺甲贝",
        "french": "Crustabri"
      },
      "type": ["Water", "Ice"],
      "base": {
        "HP": 50,
        "Attack": 95,
        "Defense": 180,
        "Sp. Attack": 85,
        "Sp. Defense": 45,
        "Speed": 70
      },
      "species": "Bivalve Pokémon",
      "description": "Slowpoke tails are its favorite food. It has even been known to come up on land to look for Slowpoke from time to time.",
      "evolution": { "prev": ["90", "use Water Stone"] },
      "profile": {
        "height": "1.5 m",
        "weight": "132.5 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Shell Armor", "false"],
          ["Skill Link", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/091.png",
        "thumbnail": "src/assets/thumbnails/091.png",
        "hires": "src/assets/hires/091.png"
      }
    },
    {
      "id": 92,
      "name": {
        "english": "Gastly",
        "japanese": "ゴース",
        "chinese": "鬼斯",
        "french": "Fantominus"
      },
      "type": ["Ghost", "Poison"],
      "base": {
        "HP": 30,
        "Attack": 35,
        "Defense": 30,
        "Sp. Attack": 100,
        "Sp. Defense": 35,
        "Speed": 80
      },
      "species": "Gas Pokémon",
      "description": "Poisonous gas comprises 95% of its body. It’s said that the remaining 5% is made up of the souls of those who died from the gas.",
      "evolution": { "next": [["93", "Level 25"]] },
      "profile": {
        "height": "1.3 m",
        "weight": "0.1 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/092.png",
        "thumbnail": "src/assets/thumbnails/092.png",
        "hires": "src/assets/hires/092.png"
      }
    },
    {
      "id": 93,
      "name": {
        "english": "Haunter",
        "japanese": "ゴースト",
        "chinese": "鬼斯通",
        "french": "Spectrum"
      },
      "type": ["Ghost", "Poison"],
      "base": {
        "HP": 45,
        "Attack": 50,
        "Defense": 45,
        "Sp. Attack": 115,
        "Sp. Defense": 55,
        "Speed": 95
      },
      "species": "Gas Pokémon",
      "description": "It’s dangerous to go outside alone on nights when you’re feeling sad. Haunter will catch you, and you won’t be able to go back home.",
      "evolution": { "prev": ["92", "Level 25"], "next": [["94", "Trade"]] },
      "profile": {
        "height": "1.6 m",
        "weight": "0.1 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/093.png",
        "thumbnail": "src/assets/thumbnails/093.png",
        "hires": "src/assets/hires/093.png"
      }
    },
    {
      "id": 94,
      "name": {
        "english": "Gengar",
        "japanese": "ゲンガー",
        "chinese": "耿鬼",
        "french": "Ectoplasma"
      },
      "type": ["Ghost", "Poison"],
      "base": {
        "HP": 60,
        "Attack": 65,
        "Defense": 60,
        "Sp. Attack": 130,
        "Sp. Defense": 75,
        "Speed": 110
      },
      "species": "Shadow Pokémon",
      "description": "Even your home isn’t safe. Gengar will lurk in whatever dark corner of a room it can find and wait for its chance to catch its prey.",
      "evolution": { "prev": ["93", "Trade"] },
      "profile": {
        "height": "1.5 m",
        "weight": "40.5 kg",
        "egg": ["Amorphous"],
        "ability": [["Cursed Body", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/094.png",
        "thumbnail": "src/assets/thumbnails/094.png",
        "hires": "src/assets/hires/094.png"
      }
    },
    {
      "id": 95,
      "name": {
        "english": "Onix",
        "japanese": "イワーク",
        "chinese": "大岩蛇",
        "french": "Onix"
      },
      "type": ["Rock", "Ground"],
      "base": {
        "HP": 35,
        "Attack": 45,
        "Defense": 160,
        "Sp. Attack": 30,
        "Sp. Defense": 45,
        "Speed": 70
      },
      "species": "Rock Snake Pokémon",
      "description": "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
      "evolution": { "next": [["208", "trade holding Metal Coat"]] },
      "profile": {
        "height": "8.8 m",
        "weight": "210 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Rock Head", "false"],
          ["Sturdy", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/095.png",
        "thumbnail": "src/assets/thumbnails/095.png",
        "hires": "src/assets/hires/095.png"
      }
    },
    {
      "id": 96,
      "name": {
        "english": "Drowzee",
        "japanese": "スリープ",
        "chinese": "催眠貘",
        "french": "Soporifik"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 60,
        "Attack": 48,
        "Defense": 45,
        "Sp. Attack": 43,
        "Sp. Defense": 90,
        "Speed": 42
      },
      "species": "Hypnosis Pokémon",
      "description": "It puts its prey to sleep and devours their dreams. It seems that bad dreams taste sour, so Drowzee doesn’t particularly like eating them.",
      "evolution": { "next": [["97", "Level 26"]] },
      "profile": {
        "height": "1 m",
        "weight": "32.4 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Insomnia", "false"],
          ["Forewarn", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/096.png",
        "thumbnail": "src/assets/thumbnails/096.png",
        "hires": "src/assets/hires/096.png"
      }
    },
    {
      "id": 97,
      "name": {
        "english": "Hypno",
        "japanese": "スリーパー",
        "chinese": "引梦貘人",
        "french": "Hypnomade"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 85,
        "Attack": 73,
        "Defense": 70,
        "Sp. Attack": 73,
        "Sp. Defense": 115,
        "Speed": 67
      },
      "species": "Hypnosis Pokémon",
      "description": "There are some Hypno that assist doctors with patients who can’t sleep at night in hospitals.",
      "evolution": { "prev": ["96", "Level 26"] },
      "profile": {
        "height": "1.6 m",
        "weight": "75.6 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Insomnia", "false"],
          ["Forewarn", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/097.png",
        "thumbnail": "src/assets/thumbnails/097.png",
        "hires": "src/assets/hires/097.png"
      }
    },
    {
      "id": 98,
      "name": {
        "english": "Krabby",
        "japanese": "クラブ",
        "chinese": "大钳蟹",
        "french": "Krabby"
      },
      "type": ["Water"],
      "base": {
        "HP": 30,
        "Attack": 105,
        "Defense": 90,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 50
      },
      "species": "River Crab Pokémon",
      "description": "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
      "evolution": { "next": [["99", "Level 28"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "6.5 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Shell Armor", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/098.png",
        "thumbnail": "src/assets/thumbnails/098.png",
        "hires": "src/assets/hires/098.png"
      }
    },
    {
      "id": 99,
      "name": {
        "english": "Kingler",
        "japanese": "キングラー",
        "chinese": "巨钳蟹",
        "french": "Krabboss"
      },
      "type": ["Water"],
      "base": {
        "HP": 55,
        "Attack": 130,
        "Defense": 115,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 75
      },
      "species": "Pincer Pokémon",
      "description": "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
      "evolution": { "prev": ["98", "Level 28"] },
      "profile": {
        "height": "1.3 m",
        "weight": "60 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Shell Armor", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/099.png",
        "thumbnail": "src/assets/thumbnails/099.png",
        "hires": "src/assets/hires/099.png"
      }
    },
    {
      "id": 100,
      "name": {
        "english": "Voltorb",
        "japanese": "ビリリダマ",
        "chinese": "霹雳电球",
        "french": "Voltorbe"
      },
      "type": ["Electric"],
      "base": {
        "HP": 40,
        "Attack": 30,
        "Defense": 50,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 100
      },
      "species": "Ball Pokémon",
      "description": "Voltorb is extremely sensitive—it explodes at the slightest of shocks. It is rumored that it was first created when a Poké Ball was exposed to a powerful pulse of energy.",
      "evolution": { "next": [["101", "Level 30"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "10.4 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Soundproof", "false"],
          ["Static", "false"],
          ["Aftermath", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/100.png",
        "thumbnail": "src/assets/thumbnails/100.png",
        "hires": "src/assets/hires/100.png"
      }
    },
    {
      "id": 101,
      "name": {
        "english": "Electrode",
        "japanese": "マルマイン",
        "chinese": "顽皮雷弹",
        "french": "Électrode"
      },
      "type": ["Electric"],
      "base": {
        "HP": 60,
        "Attack": 50,
        "Defense": 70,
        "Sp. Attack": 80,
        "Sp. Defense": 80,
        "Speed": 150
      },
      "species": "Ball Pokémon",
      "description": "One of Electrode’s characteristics is its attraction to electricity. It is a problematical Pokémon that congregates mostly at electrical power plants to feed on electricity that has just been generated.",
      "evolution": { "prev": ["100", "Level 30"] },
      "profile": {
        "height": "1.2 m",
        "weight": "66.6 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Soundproof", "false"],
          ["Static", "false"],
          ["Aftermath", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/101.png",
        "thumbnail": "src/assets/thumbnails/101.png",
        "hires": "src/assets/hires/101.png"
      }
    },
    {
      "id": 102,
      "name": {
        "english": "Exeggcute",
        "japanese": "タマタマ",
        "chinese": "蛋蛋",
        "french": "Noeunoeuf"
      },
      "type": ["Grass", "Psychic"],
      "base": {
        "HP": 60,
        "Attack": 40,
        "Defense": 80,
        "Sp. Attack": 60,
        "Sp. Defense": 45,
        "Speed": 40
      },
      "species": "Egg Pokémon",
      "description": "Although they are the same size as other Exeggcute, the ones produced in Alola are quite heavy. Their shells are packed full.",
      "evolution": { "next": [["103", "use Leaf Stone"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "2.5 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Harvest", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/102.png",
        "thumbnail": "src/assets/thumbnails/102.png",
        "hires": "src/assets/hires/102.png"
      }
    },
    {
      "id": 103,
      "name": {
        "english": "Exeggutor",
        "japanese": "ナッシー",
        "chinese": "椰蛋树",
        "french": "Noadkoko"
      },
      "type": ["Grass", "Psychic"],
      "base": {
        "HP": 95,
        "Attack": 95,
        "Defense": 85,
        "Sp. Attack": 125,
        "Sp. Defense": 75,
        "Speed": 55
      },
      "species": "Coconut Pokémon",
      "description": "Each of its three heads has its own thoughts. When they want to go in different directions, Exeggutor becomes unable to move.",
      "evolution": { "prev": ["102", "use Leaf Stone"] },
      "profile": {
        "height": "2 m",
        "weight": "120 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Harvest", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/103.png",
        "thumbnail": "src/assets/thumbnails/103.png",
        "hires": "src/assets/hires/103.png"
      }
    },
    {
      "id": 104,
      "name": {
        "english": "Cubone",
        "japanese": "カラカラ",
        "chinese": "卡拉卡拉",
        "french": "Osselait"
      },
      "type": ["Ground"],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 95,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 35
      },
      "species": "Lonely Pokémon",
      "description": "It wears its mother’s skull on its head, so no one knows what its bare face looks like. However, it’s clear that it’s always crying.",
      "evolution": { "next": [["105", "Level 28"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "6.5 kg",
        "egg": ["Monster"],
        "ability": [
          ["Rock Head", "false"],
          ["Lightning Rod", "false"],
          ["Battle Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/104.png",
        "thumbnail": "src/assets/thumbnails/104.png",
        "hires": "src/assets/hires/104.png"
      }
    },
    {
      "id": 105,
      "name": {
        "english": "Marowak",
        "japanese": "ガラガラ",
        "chinese": "嘎啦嘎啦",
        "french": "Ossatueur"
      },
      "type": ["Ground"],
      "base": {
        "HP": 60,
        "Attack": 80,
        "Defense": 110,
        "Sp. Attack": 50,
        "Sp. Defense": 80,
        "Speed": 45
      },
      "species": "Bone Keeper Pokémon",
      "description": "They thump their bones rhythmically to communicate among themselves. There are nearly 50 different rhythmic patterns.",
      "evolution": { "prev": ["104", "Level 28"] },
      "profile": {
        "height": "1 m",
        "weight": "45 kg",
        "egg": ["Monster"],
        "ability": [
          ["Rock Head", "false"],
          ["Lightning Rod", "false"],
          ["Battle Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/105.png",
        "thumbnail": "src/assets/thumbnails/105.png",
        "hires": "src/assets/hires/105.png"
      }
    },
    {
      "id": 106,
      "name": {
        "english": "Hitmonlee",
        "japanese": "サワムラー",
        "chinese": "飞腿郎",
        "french": "Kicklee"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 50,
        "Attack": 120,
        "Defense": 53,
        "Sp. Attack": 35,
        "Sp. Defense": 110,
        "Speed": 87
      },
      "species": "Kicking Pokémon",
      "description": "Hitmonlee’s legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
      "evolution": { "prev": ["236", "Level 20, Attack > Defense"] },
      "profile": {
        "height": "1.5 m",
        "weight": "49.8 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Limber", "false"],
          ["Reckless", "false"],
          ["Unburden", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/106.png",
        "thumbnail": "src/assets/thumbnails/106.png",
        "hires": "src/assets/hires/106.png"
      }
    },
    {
      "id": 107,
      "name": {
        "english": "Hitmonchan",
        "japanese": "エビワラー",
        "chinese": "快拳郎",
        "french": "Tygnon"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 50,
        "Attack": 105,
        "Defense": 79,
        "Sp. Attack": 35,
        "Sp. Defense": 110,
        "Speed": 76
      },
      "species": "Punching Pokémon",
      "description": "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.",
      "evolution": { "prev": ["236", "Level 20, Attack < Defense"] },
      "profile": {
        "height": "1.4 m",
        "weight": "50.2 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Keen Eye", "false"],
          ["Iron Fist", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/107.png",
        "thumbnail": "src/assets/thumbnails/107.png",
        "hires": "src/assets/hires/107.png"
      }
    },
    {
      "id": 108,
      "name": {
        "english": "Lickitung",
        "japanese": "ベロリンガ",
        "chinese": "大舌头",
        "french": "Excelangue"
      },
      "type": ["Normal"],
      "base": {
        "HP": 90,
        "Attack": 55,
        "Defense": 75,
        "Sp. Attack": 60,
        "Sp. Defense": 75,
        "Speed": 30
      },
      "species": "Licking Pokémon",
      "description": "It licks filth clean with its tongue. Whatever it licks always stinks afterward, so whether it’s really clean is...questionable.",
      "evolution": { "next": [["463", "after Rollout learned"]] },
      "profile": {
        "height": "1.2 m",
        "weight": "65.5 kg",
        "egg": ["Monster"],
        "ability": [
          ["Own Tempo", "false"],
          ["Oblivious", "false"],
          ["Cloud Nine", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/108.png",
        "thumbnail": "src/assets/thumbnails/108.png",
        "hires": "src/assets/hires/108.png"
      }
    },
    {
      "id": 109,
      "name": {
        "english": "Koffing",
        "japanese": "ドガース",
        "chinese": "瓦斯弹",
        "french": "Smogo"
      },
      "type": ["Poison"],
      "base": {
        "HP": 40,
        "Attack": 65,
        "Defense": 95,
        "Sp. Attack": 60,
        "Sp. Defense": 45,
        "Speed": 35
      },
      "species": "Poison Gas Pokémon",
      "description": "Koffing embodies toxic substances. It mixes the toxins with raw garbage to set off a chemical reaction that results in a terribly powerful poison gas. The higher the temperature, the more gas is concocted by this Pokémon.",
      "evolution": { "next": [["110", "Level 35"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "1 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/109.png",
        "thumbnail": "src/assets/thumbnails/109.png",
        "hires": "src/assets/hires/109.png"
      }
    },
    {
      "id": 110,
      "name": {
        "english": "Weezing",
        "japanese": "マタドガス",
        "chinese": "双弹瓦斯",
        "french": "Smogogo"
      },
      "type": ["Poison"],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 120,
        "Sp. Attack": 85,
        "Sp. Defense": 70,
        "Speed": 60
      },
      "species": "Poison Gas Pokémon",
      "description": "Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.",
      "evolution": { "prev": ["109", "Level 35"] },
      "profile": {
        "height": "1.2 m",
        "weight": "9.5 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/110.png",
        "thumbnail": "src/assets/thumbnails/110.png",
        "hires": "src/assets/hires/110.png"
      }
    },
    {
      "id": 111,
      "name": {
        "english": "Rhyhorn",
        "japanese": "サイホーン",
        "chinese": "独角犀牛",
        "french": "Rhinocorne"
      },
      "type": ["Ground", "Rock"],
      "base": {
        "HP": 80,
        "Attack": 85,
        "Defense": 95,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 25
      },
      "species": "Spikes Pokémon",
      "description": "Rhyhorn’s brain is very small. It is so dense, while on a run it forgets why it started running in the first place. It apparently remembers sometimes if it demolishes something.",
      "evolution": { "next": [["112", "Level 42"]] },
      "profile": {
        "height": "1 m",
        "weight": "115 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Lightning Rod", "false"],
          ["Rock Head", "false"],
          ["Reckless", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/111.png",
        "thumbnail": "src/assets/thumbnails/111.png",
        "hires": "src/assets/hires/111.png"
      }
    },
    {
      "id": 112,
      "name": {
        "english": "Rhydon",
        "japanese": "サイドン",
        "chinese": "钻角犀兽",
        "french": "Rhinoféros"
      },
      "type": ["Ground", "Rock"],
      "base": {
        "HP": 105,
        "Attack": 130,
        "Defense": 120,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 40
      },
      "species": "Drill Pokémon",
      "description": "Rhydon has a horn that serves as a drill. It is used for destroying rocks and boulders. This Pokémon occasionally rams into streams of magma, but the armor-like hide prevents it from feeling the heat.",
      "evolution": {
        "prev": ["111", "Level 42"],
        "next": [["464", "trade holding Protector"]]
      },
      "profile": {
        "height": "1.9 m",
        "weight": "120 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Lightning Rod", "false"],
          ["Rock Head", "false"],
          ["Reckless", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/112.png",
        "thumbnail": "src/assets/thumbnails/112.png",
        "hires": "src/assets/hires/112.png"
      }
    },
    {
      "id": 113,
      "name": {
        "english": "Chansey",
        "japanese": "ラッキー",
        "chinese": "吉利蛋",
        "french": "Leveinard"
      },
      "type": ["Normal"],
      "base": {
        "HP": 250,
        "Attack": 5,
        "Defense": 5,
        "Sp. Attack": 35,
        "Sp. Defense": 105,
        "Speed": 50
      },
      "species": "Egg Pokémon",
      "description": "Because the eggs on their bellies have been overharvested by people in the past, the Chansey population remains very small.",
      "evolution": {
        "prev": ["440", "hold Oval Stone, Daytime"],
        "next": [["242", "high Friendship"]]
      },
      "profile": {
        "height": "1.1 m",
        "weight": "34.6 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Natural Cure", "false"],
          ["Serene Grace", "false"],
          ["Healer", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/113.png",
        "thumbnail": "src/assets/thumbnails/113.png",
        "hires": "src/assets/hires/113.png"
      }
    },
    {
      "id": 114,
      "name": {
        "english": "Tangela",
        "japanese": "モンジャラ",
        "chinese": "蔓藤怪",
        "french": "Saquedeneu"
      },
      "type": ["Grass"],
      "base": {
        "HP": 65,
        "Attack": 55,
        "Defense": 115,
        "Sp. Attack": 100,
        "Sp. Defense": 40,
        "Speed": 60
      },
      "species": "Vine Pokémon",
      "description": "Tangela’s vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
      "evolution": { "next": [["465", "after Ancient Power learned"]] },
      "profile": {
        "height": "1 m",
        "weight": "35 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Leaf Guard", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/114.png",
        "thumbnail": "src/assets/thumbnails/114.png",
        "hires": "src/assets/hires/114.png"
      }
    },
    {
      "id": 115,
      "name": {
        "english": "Kangaskhan",
        "japanese": "ガルーラ",
        "chinese": "袋兽",
        "french": "Kangourex"
      },
      "type": ["Normal"],
      "base": {
        "HP": 105,
        "Attack": 95,
        "Defense": 80,
        "Sp. Attack": 40,
        "Sp. Defense": 80,
        "Speed": 90
      },
      "species": "Parent Pokémon",
      "description": "You shouldn’t get close to the child when it’s playing outside its mother’s pouch. Its mother is always nearby watching over it.",
      "evolution": {},
      "profile": {
        "height": "2.2 m",
        "weight": "80 kg",
        "egg": ["Monster"],
        "ability": [
          ["Early Bird", "false"],
          ["Scrappy", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/115.png",
        "thumbnail": "src/assets/thumbnails/115.png",
        "hires": "src/assets/hires/115.png"
      }
    },
    {
      "id": 116,
      "name": {
        "english": "Horsea",
        "japanese": "タッツー",
        "chinese": "墨海马",
        "french": "Hypotrempe"
      },
      "type": ["Water"],
      "base": {
        "HP": 30,
        "Attack": 40,
        "Defense": 70,
        "Sp. Attack": 70,
        "Sp. Defense": 25,
        "Speed": 60
      },
      "species": "Dragon Pokémon",
      "description": "If Horsea senses danger, it will reflexively spray a dense black ink from its mouth and try to escape. This Pokémon swims by cleverly flapping the fin on its back.",
      "evolution": { "next": [["117", "Level 32"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "8 kg",
        "egg": ["Water 1", "Dragon"],
        "ability": [
          ["Swift Swim", "false"],
          ["Sniper", "false"],
          ["Damp", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/116.png",
        "thumbnail": "src/assets/thumbnails/116.png",
        "hires": "src/assets/hires/116.png"
      }
    },
    {
      "id": 117,
      "name": {
        "english": "Seadra",
        "japanese": "シードラ",
        "chinese": "海刺龙",
        "french": "Hypocéan"
      },
      "type": ["Water"],
      "base": {
        "HP": 55,
        "Attack": 65,
        "Defense": 95,
        "Sp. Attack": 95,
        "Sp. Defense": 45,
        "Speed": 85
      },
      "species": "Dragon Pokémon",
      "description": "Seadra generates whirlpools by spinning its body. The whirlpools are strong enough to swallow even fishing boats. This Pokémon weakens prey with these currents, then swallows it whole.",
      "evolution": {
        "prev": ["116", "Level 32"],
        "next": [["230", "trade holding Dragon Scale"]]
      },
      "profile": {
        "height": "1.2 m",
        "weight": "25 kg",
        "egg": ["Water 1", "Dragon"],
        "ability": [
          ["Poison Point", "false"],
          ["Sniper", "false"],
          ["Damp", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/117.png",
        "thumbnail": "src/assets/thumbnails/117.png",
        "hires": "src/assets/hires/117.png"
      }
    },
    {
      "id": 118,
      "name": {
        "english": "Goldeen",
        "japanese": "トサキント",
        "chinese": "角金鱼",
        "french": "Poissirène"
      },
      "type": ["Water"],
      "base": {
        "HP": 45,
        "Attack": 67,
        "Defense": 60,
        "Sp. Attack": 35,
        "Sp. Defense": 50,
        "Speed": 63
      },
      "species": "Goldfish Pokémon",
      "description": "The way it swims along fluttering its dress-like fins has earned it the name “princess of the water.”",
      "evolution": { "next": [["119", "Level 33"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "15 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Swift Swim", "false"],
          ["Water Veil", "false"],
          ["Lightning Rod", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/118.png",
        "thumbnail": "src/assets/thumbnails/118.png",
        "hires": "src/assets/hires/118.png"
      }
    },
    {
      "id": 119,
      "name": {
        "english": "Seaking",
        "japanese": "アズマオウ",
        "chinese": "金鱼王",
        "french": "Poissoroy"
      },
      "type": ["Water"],
      "base": {
        "HP": 80,
        "Attack": 92,
        "Defense": 65,
        "Sp. Attack": 65,
        "Sp. Defense": 80,
        "Speed": 68
      },
      "species": "Goldfish Pokémon",
      "description": "To attract females, males dance on the river’s floor. The females gather around the male that dances most gracefully.",
      "evolution": { "prev": ["118", "Level 33"] },
      "profile": {
        "height": "1.3 m",
        "weight": "39 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Swift Swim", "false"],
          ["Water Veil", "false"],
          ["Lightning Rod", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/119.png",
        "thumbnail": "src/assets/thumbnails/119.png",
        "hires": "src/assets/hires/119.png"
      }
    },
    {
      "id": 120,
      "name": {
        "english": "Staryu",
        "japanese": "ヒトデマン",
        "chinese": "海星星",
        "french": "Stari"
      },
      "type": ["Water"],
      "base": {
        "HP": 30,
        "Attack": 45,
        "Defense": 55,
        "Sp. Attack": 70,
        "Sp. Defense": 55,
        "Speed": 85
      },
      "species": "Star Shape Pokémon",
      "description": "No number of injuries can bother Staryu. Its amazing regenerative powers return it to its previous state in half a day!",
      "evolution": { "next": [["121", "use Water Stone"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "34.5 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Illuminate", "false"],
          ["Natural Cure", "false"],
          ["Analytic", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/120.png",
        "thumbnail": "src/assets/thumbnails/120.png",
        "hires": "src/assets/hires/120.png"
      }
    },
    {
      "id": 121,
      "name": {
        "english": "Starmie",
        "japanese": "スターミー",
        "chinese": "宝石海星",
        "french": "Staross"
      },
      "type": ["Water", "Psychic"],
      "base": {
        "HP": 60,
        "Attack": 75,
        "Defense": 85,
        "Sp. Attack": 100,
        "Sp. Defense": 85,
        "Speed": 115
      },
      "species": "Mysterious Pokémon",
      "description": "It rotates its geometrically shaped body to swim through the water. It always seems to be sending out mysterious radio waves.",
      "evolution": { "prev": ["120", "use Water Stone"] },
      "profile": {
        "height": "1.1 m",
        "weight": "80 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Illuminate", "false"],
          ["Natural Cure", "false"],
          ["Analytic", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/121.png",
        "thumbnail": "src/assets/thumbnails/121.png",
        "hires": "src/assets/hires/121.png"
      }
    },
    {
      "id": 122,
      "name": {
        "english": "Mr. Mime",
        "japanese": "バリヤード",
        "chinese": "魔墙人偶",
        "french": "M. Mime"
      },
      "type": ["Psychic", "Fairy"],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 65,
        "Sp. Attack": 100,
        "Sp. Defense": 120,
        "Speed": 90
      },
      "species": "Barrier Pokémon",
      "description": "It creates invisible walls with its pantomiming. If you don’t act impressed, it will attack you with a double slap!",
      "evolution": { "prev": ["439", "after Mimic learned"] },
      "profile": {
        "height": "1.3 m",
        "weight": "54.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Soundproof", "false"],
          ["Filter", "false"],
          ["Technician", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/122.png",
        "thumbnail": "src/assets/thumbnails/122.png",
        "hires": "src/assets/hires/122.png"
      }
    },
    {
      "id": 123,
      "name": {
        "english": "Scyther",
        "japanese": "ストライク",
        "chinese": "飞天螳螂",
        "french": "Insécateur"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 70,
        "Attack": 110,
        "Defense": 80,
        "Sp. Attack": 55,
        "Sp. Defense": 80,
        "Speed": 105
      },
      "species": "Mantis Pokémon",
      "description": "Some call it a ninja. Its movements— imperceptibly quick—are sufficient to cleave the air in two. It’s very popular in Alola.",
      "evolution": { "next": [["212", "trade holding Metal Coat"]] },
      "profile": {
        "height": "1.5 m",
        "weight": "56 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Technician", "false"],
          ["Steadfast", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/123.png",
        "thumbnail": "src/assets/thumbnails/123.png",
        "hires": "src/assets/hires/123.png"
      }
    },
    {
      "id": 124,
      "name": {
        "english": "Jynx",
        "japanese": "ルージュラ",
        "chinese": "迷唇姐",
        "french": "Lippoutou"
      },
      "type": ["Ice", "Psychic"],
      "base": {
        "HP": 65,
        "Attack": 50,
        "Defense": 35,
        "Sp. Attack": 115,
        "Sp. Defense": 95,
        "Speed": 95
      },
      "species": "Human Shape Pokémon",
      "description": "Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing.",
      "evolution": { "prev": ["238", "Level 30"] },
      "profile": {
        "height": "1.4 m",
        "weight": "40.6 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Oblivious", "false"],
          ["Forewarn", "false"],
          ["Dry Skin", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/124.png",
        "thumbnail": "src/assets/thumbnails/124.png",
        "hires": "src/assets/hires/124.png"
      }
    },
    {
      "id": 125,
      "name": {
        "english": "Electabuzz",
        "japanese": "エレブー",
        "chinese": "电击兽",
        "french": "Élektek"
      },
      "type": ["Electric"],
      "base": {
        "HP": 65,
        "Attack": 83,
        "Defense": 57,
        "Sp. Attack": 95,
        "Sp. Defense": 85,
        "Speed": 105
      },
      "species": "Electric Pokémon",
      "description": "While it’s often blamed for power outages, the truth is the cause of outages is more often an error on the part of the electric company.",
      "evolution": {
        "prev": ["239", "Level 30"],
        "next": [["466", "trade holding Electirizer"]]
      },
      "profile": {
        "height": "1.1 m",
        "weight": "30 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Static", "false"],
          ["Vital Spirit", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/125.png",
        "thumbnail": "src/assets/thumbnails/125.png",
        "hires": "src/assets/hires/125.png"
      }
    },
    {
      "id": 126,
      "name": {
        "english": "Magmar",
        "japanese": "ブーバー",
        "chinese": "鸭嘴火兽",
        "french": "Magmar"
      },
      "type": ["Fire"],
      "base": {
        "HP": 65,
        "Attack": 95,
        "Defense": 57,
        "Sp. Attack": 100,
        "Sp. Defense": 85,
        "Speed": 93
      },
      "species": "Spitfire Pokémon",
      "description": "The hotter the place, the better they feel. Magmar in Alola are said to be hardier than those in other areas.",
      "evolution": {
        "prev": ["240", "Level 30"],
        "next": [["467", "trade holding Magmarizer"]]
      },
      "profile": {
        "height": "1.3 m",
        "weight": "44.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Flame Body", "false"],
          ["Vital Spirit", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/126.png",
        "thumbnail": "src/assets/thumbnails/126.png",
        "hires": "src/assets/hires/126.png"
      }
    },
    {
      "id": 127,
      "name": {
        "english": "Pinsir",
        "japanese": "カイロス",
        "chinese": "凯罗斯",
        "french": "Scarabrute"
      },
      "type": ["Bug"],
      "base": {
        "HP": 65,
        "Attack": 125,
        "Defense": 100,
        "Sp. Attack": 55,
        "Sp. Defense": 70,
        "Speed": 85
      },
      "species": "Stag Beetle Pokémon",
      "description": "Although it’s tough, it can’t handle cold well. When night falls, it buries itself in leafage and sleeps.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "55 kg",
        "egg": ["Bug"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Mold Breaker", "false"],
          ["Moxie", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/127.png",
        "thumbnail": "src/assets/thumbnails/127.png",
        "hires": "src/assets/hires/127.png"
      }
    },
    {
      "id": 128,
      "name": {
        "english": "Tauros",
        "japanese": "ケンタロス",
        "chinese": "肯泰罗",
        "french": "Tauros"
      },
      "type": ["Normal"],
      "base": {
        "HP": 75,
        "Attack": 100,
        "Defense": 95,
        "Sp. Attack": 40,
        "Sp. Defense": 70,
        "Speed": 110
      },
      "species": "Wild Bull Pokémon",
      "description": "The climate seems to be related to the reason Tauros in Alola are a little calmer than those in other regions.",
      "evolution": {},
      "profile": {
        "height": "1.4 m",
        "weight": "88.4 kg",
        "egg": ["Field"],
        "ability": [
          ["Intimidate", "false"],
          ["Anger Point", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/128.png",
        "thumbnail": "src/assets/thumbnails/128.png",
        "hires": "src/assets/hires/128.png"
      }
    },
    {
      "id": 129,
      "name": {
        "english": "Magikarp",
        "japanese": "コイキング",
        "chinese": "鲤鱼王",
        "french": "Magicarpe"
      },
      "type": ["Water"],
      "base": {
        "HP": 20,
        "Attack": 10,
        "Defense": 55,
        "Sp. Attack": 15,
        "Sp. Defense": 20,
        "Speed": 80
      },
      "species": "Fish Pokémon",
      "description": "Thanks to their strong hold on life, dirty water doesn’t bother them at all. They live in waters all over the world!",
      "evolution": { "next": [["130", "Level 20"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "10 kg",
        "egg": ["Water 2", "Dragon"],
        "ability": [
          ["Swift Swim", "false"],
          ["Rattled", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/129.png",
        "thumbnail": "src/assets/thumbnails/129.png",
        "hires": "src/assets/hires/129.png"
      }
    },
    {
      "id": 130,
      "name": {
        "english": "Gyarados",
        "japanese": "ギャラドス",
        "chinese": "暴鲤龙",
        "french": "Léviator"
      },
      "type": ["Water", "Flying"],
      "base": {
        "HP": 95,
        "Attack": 125,
        "Defense": 79,
        "Sp. Attack": 60,
        "Sp. Defense": 100,
        "Speed": 81
      },
      "species": "Atrocious Pokémon",
      "description": "The energy from evolution stimulated its brain cells strongly, causing it to become very ferocious.",
      "evolution": { "prev": ["129", "Level 20"] },
      "profile": {
        "height": "6.5 m",
        "weight": "235 kg",
        "egg": ["Water 2", "Dragon"],
        "ability": [
          ["Intimidate", "false"],
          ["Moxie", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/130.png",
        "thumbnail": "src/assets/thumbnails/130.png",
        "hires": "src/assets/hires/130.png"
      }
    },
    {
      "id": 131,
      "name": {
        "english": "Lapras",
        "japanese": "ラプラス",
        "chinese": "拉普拉斯",
        "french": "Lokhlass"
      },
      "type": ["Water", "Ice"],
      "base": {
        "HP": 130,
        "Attack": 85,
        "Defense": 80,
        "Sp. Attack": 85,
        "Sp. Defense": 95,
        "Speed": 60
      },
      "species": "Transport Pokémon",
      "description": "They’ve been so cherished that there’s now an overabundance. The fish Pokémon population has declined in waters with too many Lapras.",
      "evolution": {},
      "profile": {
        "height": "2.5 m",
        "weight": "220 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Water Absorb", "false"],
          ["Shell Armor", "false"],
          ["Hydration", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/131.png",
        "thumbnail": "src/assets/thumbnails/131.png",
        "hires": "src/assets/hires/131.png"
      }
    },
    {
      "id": 132,
      "name": {
        "english": "Ditto",
        "japanese": "メタモン",
        "chinese": "百变怪",
        "french": "Métamorph"
      },
      "type": ["Normal"],
      "base": {
        "HP": 48,
        "Attack": 48,
        "Defense": 48,
        "Sp. Attack": 48,
        "Sp. Defense": 48,
        "Speed": 48
      },
      "species": "Transform Pokémon",
      "description": "It transforms into whatever it sees. If the thing it’s transforming into isn’t right in front of it, Ditto relies on its memory—so sometimes it fails.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "4 kg",
        "egg": ["Ditto"],
        "ability": [
          ["Limber", "false"],
          ["Imposter", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/132.png",
        "thumbnail": "src/assets/thumbnails/132.png",
        "hires": "src/assets/hires/132.png"
      }
    },
    {
      "id": 133,
      "name": {
        "english": "Eevee",
        "japanese": "イーブイ",
        "chinese": "伊布",
        "french": "Évoli"
      },
      "type": ["Normal"],
      "base": {
        "HP": 55,
        "Attack": 55,
        "Defense": 50,
        "Sp. Attack": 45,
        "Sp. Defense": 65,
        "Speed": 55
      },
      "species": "Evolution Pokémon",
      "description": "Its genes are easily influenced by its surroundings. Even its face starts to look like that of its Trainer.",
      "evolution": {
        "next": [
          ["134", "use Water Stone"],
          ["135", "use Thunder Stone"],
          ["136", "use Fire Stone"],
          ["196", "high Friendship, Daytime"],
          ["197", "high Friendship, Nighttime"],
          ["470", "level up near a Mossy Rock"],
          ["471", "level up near an Icy Rock"],
          ["700", "High Affection and knowing Fairy move"]
        ]
      },
      "profile": {
        "height": "0.3 m",
        "weight": "6.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Run Away", "false"],
          ["Adaptability", "false"],
          ["Anticipation", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/133.png",
        "thumbnail": "src/assets/thumbnails/133.png",
        "hires": "src/assets/hires/133.png"
      }
    },
    {
      "id": 134,
      "name": {
        "english": "Vaporeon",
        "japanese": "シャワーズ",
        "chinese": "水伊布",
        "french": "Aquali"
      },
      "type": ["Water"],
      "base": {
        "HP": 130,
        "Attack": 65,
        "Defense": 60,
        "Sp. Attack": 110,
        "Sp. Defense": 95,
        "Speed": 65
      },
      "species": "Bubble Jet Pokémon",
      "description": "It detects nearby moisture with its fin. When its fin begins trembling rapidly, that means rain will fall in a few hours.",
      "evolution": { "prev": ["133", "use Water Stone"] },
      "profile": {
        "height": "1 m",
        "weight": "29 kg",
        "egg": ["Field"],
        "ability": [
          ["Water Absorb", "false"],
          ["Hydration", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/134.png",
        "thumbnail": "src/assets/thumbnails/134.png",
        "hires": "src/assets/hires/134.png"
      }
    },
    {
      "id": 135,
      "name": {
        "english": "Jolteon",
        "japanese": "サンダース",
        "chinese": "雷伊布",
        "french": "Voltali"
      },
      "type": ["Electric"],
      "base": {
        "HP": 65,
        "Attack": 65,
        "Defense": 60,
        "Sp. Attack": 110,
        "Sp. Defense": 95,
        "Speed": 130
      },
      "species": "Lightning Pokémon",
      "description": "Its fur stands on end, becoming like needles it fires at enemies. Once they’re weakened, it finishes them off with a 10,000 volt shock.",
      "evolution": { "prev": ["133", "use Thunder Stone"] },
      "profile": {
        "height": "0.8 m",
        "weight": "24.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Volt Absorb", "false"],
          ["Quick Feet", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/135.png",
        "thumbnail": "src/assets/thumbnails/135.png",
        "hires": "src/assets/hires/135.png"
      }
    },
    {
      "id": 136,
      "name": {
        "english": "Flareon",
        "japanese": "ブースター",
        "chinese": "火伊布",
        "french": "Pyroli"
      },
      "type": ["Fire"],
      "base": {
        "HP": 65,
        "Attack": 130,
        "Defense": 60,
        "Sp. Attack": 95,
        "Sp. Defense": 110,
        "Speed": 65
      },
      "species": "Flame Pokémon",
      "description": "The flame chamber inside its body ignites when Flareon gets agitated, reaching temperatures of up to 1,650 degrees Fahrenheit.",
      "evolution": { "prev": ["133", "use Fire Stone"] },
      "profile": {
        "height": "0.9 m",
        "weight": "25 kg",
        "egg": ["Field"],
        "ability": [
          ["Flash Fire", "false"],
          ["Guts", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/136.png",
        "thumbnail": "src/assets/thumbnails/136.png",
        "hires": "src/assets/hires/136.png"
      }
    },
    {
      "id": 137,
      "name": {
        "english": "Porygon",
        "japanese": "ポリゴン",
        "chinese": "多边兽",
        "french": "Porygon"
      },
      "type": ["Normal"],
      "base": {
        "HP": 65,
        "Attack": 60,
        "Defense": 70,
        "Sp. Attack": 85,
        "Sp. Defense": 75,
        "Speed": 40
      },
      "species": "Virtual Pokémon",
      "description": "It was built 20 years ago by scientists who dreamed of exploring space. Their dreams have yet to come true.",
      "evolution": { "next": [["233", "trade holding Upgrade"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "36.5 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Trace", "false"],
          ["Download", "false"],
          ["Analytic", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/137.png",
        "thumbnail": "src/assets/thumbnails/137.png",
        "hires": "src/assets/hires/137.png"
      }
    },
    {
      "id": 138,
      "name": {
        "english": "Omanyte",
        "japanese": "オムナイト",
        "chinese": "菊石兽",
        "french": "Amonita"
      },
      "type": ["Rock", "Water"],
      "base": {
        "HP": 35,
        "Attack": 40,
        "Defense": 100,
        "Sp. Attack": 90,
        "Sp. Defense": 55,
        "Speed": 35
      },
      "species": "Spiral Pokémon",
      "description": "It was restored from an ancient fossil. Those Helix Fossils are excavated from areas that were once oceans long, long ago.",
      "evolution": { "next": [["139", "Level 40"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "7.5 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [
          ["Swift Swim", "false"],
          ["Shell Armor", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/138.png",
        "thumbnail": "src/assets/thumbnails/138.png",
        "hires": "src/assets/hires/138.png"
      }
    },
    {
      "id": 139,
      "name": {
        "english": "Omastar",
        "japanese": "オムスター",
        "chinese": "多刺菊石兽",
        "french": "Amonistar"
      },
      "type": ["Rock", "Water"],
      "base": {
        "HP": 70,
        "Attack": 60,
        "Defense": 125,
        "Sp. Attack": 115,
        "Sp. Defense": 70,
        "Speed": 55
      },
      "species": "Spiral Pokémon",
      "description": "It wraps its prey in its tentacles to immobilize them and then finishes them off with its sharp fangs.",
      "evolution": { "prev": ["138", "Level 40"] },
      "profile": {
        "height": "1 m",
        "weight": "35 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [
          ["Swift Swim", "false"],
          ["Shell Armor", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/139.png",
        "thumbnail": "src/assets/thumbnails/139.png",
        "hires": "src/assets/hires/139.png"
      }
    },
    {
      "id": 140,
      "name": {
        "english": "Kabuto",
        "japanese": "カブト",
        "chinese": "化石盔",
        "french": "Kabuto"
      },
      "type": ["Rock", "Water"],
      "base": {
        "HP": 30,
        "Attack": 80,
        "Defense": 90,
        "Sp. Attack": 55,
        "Sp. Defense": 45,
        "Speed": 55
      },
      "species": "Shellfish Pokémon",
      "description": "This Pokémon became extinct everywhere, except in a few areas. It protects itself with its hard shell.",
      "evolution": { "next": [["141", "Level 40"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "11.5 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [
          ["Swift Swim", "false"],
          ["Battle Armor", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/140.png",
        "thumbnail": "src/assets/thumbnails/140.png",
        "hires": "src/assets/hires/140.png"
      }
    },
    {
      "id": 141,
      "name": {
        "english": "Kabutops",
        "japanese": "カブトプス",
        "chinese": "镰刀盔",
        "french": "Kabutops"
      },
      "type": ["Rock", "Water"],
      "base": {
        "HP": 60,
        "Attack": 115,
        "Defense": 105,
        "Sp. Attack": 65,
        "Sp. Defense": 70,
        "Speed": 80
      },
      "species": "Shellfish Pokémon",
      "description": "It swims at speeds of roughly 29 knots, quickly closing in on its prey and slashing into them with its scythes to finish them off.",
      "evolution": { "prev": ["140", "Level 40"] },
      "profile": {
        "height": "1.3 m",
        "weight": "40.5 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [
          ["Swift Swim", "false"],
          ["Battle Armor", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/141.png",
        "thumbnail": "src/assets/thumbnails/141.png",
        "hires": "src/assets/hires/141.png"
      }
    },
    {
      "id": 142,
      "name": {
        "english": "Aerodactyl",
        "japanese": "プテラ",
        "chinese": "化石翼龙",
        "french": "Ptéra"
      },
      "type": ["Rock", "Flying"],
      "base": {
        "HP": 80,
        "Attack": 105,
        "Defense": 65,
        "Sp. Attack": 60,
        "Sp. Defense": 75,
        "Speed": 130
      },
      "species": "Fossil Pokémon",
      "description": "It flew through the open skies over the ancient continent as if they were its own. When it touched ground, its walk was weak and slow.",
      "evolution": {},
      "profile": {
        "height": "1.8 m",
        "weight": "59 kg",
        "egg": ["Flying"],
        "ability": [
          ["Rock Head", "false"],
          ["Pressure", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/142.png",
        "thumbnail": "src/assets/thumbnails/142.png",
        "hires": "src/assets/hires/142.png"
      }
    },
    {
      "id": 143,
      "name": {
        "english": "Snorlax",
        "japanese": "カビゴン",
        "chinese": "卡比兽",
        "french": "Ronflex"
      },
      "type": ["Normal"],
      "base": {
        "HP": 160,
        "Attack": 110,
        "Defense": 65,
        "Sp. Attack": 65,
        "Sp. Defense": 110,
        "Speed": 30
      },
      "species": "Sleeping Pokémon",
      "description": "It has no interest in anything other than eating. Even if you climb up on its stomach while it’s napping, it doesn’t seem to mind at all!",
      "evolution": { "prev": ["446", "high Friendship"] },
      "profile": {
        "height": "2.1 m",
        "weight": "460 kg",
        "egg": ["Monster"],
        "ability": [
          ["Immunity", "false"],
          ["Thick Fat", "false"],
          ["Gluttony", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/143.png",
        "thumbnail": "src/assets/thumbnails/143.png",
        "hires": "src/assets/hires/143.png"
      }
    },
    {
      "id": 144,
      "name": {
        "english": "Articuno",
        "japanese": "フリーザー",
        "chinese": "急冻鸟",
        "french": "Artikodin"
      },
      "type": ["Ice", "Flying"],
      "base": {
        "HP": 90,
        "Attack": 85,
        "Defense": 100,
        "Sp. Attack": 95,
        "Sp. Defense": 125,
        "Speed": 85
      },
      "species": "Freeze Pokémon",
      "description": "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
      "evolution": {},
      "profile": {
        "height": "1.7 m",
        "weight": "55.4 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Snow Cloak", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/144.png",
        "thumbnail": "src/assets/thumbnails/144.png",
        "hires": "src/assets/hires/144.png"
      }
    },
    {
      "id": 145,
      "name": {
        "english": "Zapdos",
        "japanese": "サンダー",
        "chinese": "闪电鸟",
        "french": "Électhor"
      },
      "type": ["Electric", "Flying"],
      "base": {
        "HP": 90,
        "Attack": 90,
        "Defense": 85,
        "Sp. Attack": 125,
        "Sp. Defense": 90,
        "Speed": 100
      },
      "species": "Electric Pokémon",
      "description": "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
      "evolution": {},
      "profile": {
        "height": "1.6 m",
        "weight": "52.6 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Static", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/145.png",
        "thumbnail": "src/assets/thumbnails/145.png",
        "hires": "src/assets/hires/145.png"
      }
    },
    {
      "id": 146,
      "name": {
        "english": "Moltres",
        "japanese": "ファイヤー",
        "chinese": "火焰鸟",
        "french": "Sulfura"
      },
      "type": ["Fire", "Flying"],
      "base": {
        "HP": 90,
        "Attack": 100,
        "Defense": 90,
        "Sp. Attack": 125,
        "Sp. Defense": 85,
        "Speed": 90
      },
      "species": "Flame Pokémon",
      "description": "Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "60 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Flame Body", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/146.png",
        "thumbnail": "src/assets/thumbnails/146.png",
        "hires": "src/assets/hires/146.png"
      }
    },
    {
      "id": 147,
      "name": {
        "english": "Dratini",
        "japanese": "ミニリュウ",
        "chinese": "迷你龙",
        "french": "Minidraco"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 41,
        "Attack": 64,
        "Defense": 45,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 50
      },
      "species": "Dragon Pokémon",
      "description": "It sheds its skin—almost on a daily basis—and grows larger. Its skin is soft just after it’s been shed.",
      "evolution": { "next": [["148", "Level 30"]] },
      "profile": {
        "height": "1.8 m",
        "weight": "3.3 kg",
        "egg": ["Water 1", "Dragon"],
        "ability": [
          ["Shed Skin", "false"],
          ["Marvel Scale", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/147.png",
        "thumbnail": "src/assets/thumbnails/147.png",
        "hires": "src/assets/hires/147.png"
      }
    },
    {
      "id": 148,
      "name": {
        "english": "Dragonair",
        "japanese": "ハクリュー",
        "chinese": "哈克龙",
        "french": "Draco"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 61,
        "Attack": 84,
        "Defense": 65,
        "Sp. Attack": 70,
        "Sp. Defense": 70,
        "Speed": 70
      },
      "species": "Dragon Pokémon",
      "description": "Some say that if you see it at the start of the year, flying through the sky and twisting its body, you’ll be healthy all year long.",
      "evolution": { "prev": ["147", "Level 30"], "next": [["149", "Level 55"]] },
      "profile": {
        "height": "4 m",
        "weight": "16.5 kg",
        "egg": ["Water 1", "Dragon"],
        "ability": [
          ["Shed Skin", "false"],
          ["Marvel Scale", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/148.png",
        "thumbnail": "src/assets/thumbnails/148.png",
        "hires": "src/assets/hires/148.png"
      }
    },
    {
      "id": 149,
      "name": {
        "english": "Dragonite",
        "japanese": "カイリュー",
        "chinese": "快龙",
        "french": "Dracolosse"
      },
      "type": ["Dragon", "Flying"],
      "base": {
        "HP": 91,
        "Attack": 134,
        "Defense": 95,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 80
      },
      "species": "Dragon Pokémon",
      "description": "You’ll often hear tales of this kindhearted Pokémon rescuing people or Pokémon that are drowning.",
      "evolution": { "prev": ["148", "Level 55"] },
      "profile": {
        "height": "2.2 m",
        "weight": "210 kg",
        "egg": ["Water 1", "Dragon"],
        "ability": [
          ["Inner Focus", "false"],
          ["Multiscale", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/149.png",
        "thumbnail": "src/assets/thumbnails/149.png",
        "hires": "src/assets/hires/149.png"
      }
    },
    {
      "id": 150,
      "name": {
        "english": "Mewtwo",
        "japanese": "ミュウツー",
        "chinese": "超梦",
        "french": "Mewtwo"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 106,
        "Attack": 110,
        "Defense": 90,
        "Sp. Attack": 154,
        "Sp. Defense": 90,
        "Speed": 130
      },
      "species": "Genetic Pokémon",
      "description": "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon’s body, they failed to endow Mewtwo with a compassionate heart.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "122 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/150.png",
        "thumbnail": "src/assets/thumbnails/150.png",
        "hires": "src/assets/hires/150.png"
      }
    },
    {
      "id": 151,
      "name": {
        "english": "Mew",
        "japanese": "ミュウ",
        "chinese": "梦幻",
        "french": "Mew"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 100,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 100
      },
      "species": "New Species Pokémon",
      "description": "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
      "evolution": {},
      "profile": {
        "height": "0.4 m",
        "weight": "4 kg",
        "egg": ["Undiscovered"],
        "ability": [["Synchronize", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/151.png",
        "thumbnail": "src/assets/thumbnails/151.png",
        "hires": "src/assets/hires/151.png"
      }
    },
    {
      "id": 152,
      "name": {
        "english": "Chikorita",
        "japanese": "チコリータ",
        "chinese": "菊草叶",
        "french": "Germignon"
      },
      "type": ["Grass"],
      "base": {
        "HP": 45,
        "Attack": 49,
        "Defense": 65,
        "Sp. Attack": 49,
        "Sp. Defense": 65,
        "Speed": 45
      },
      "species": "Leaf Pokémon",
      "description": "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
      "evolution": { "next": [["153", "Level 16"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "6.4 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Leaf Guard", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/152.png",
        "thumbnail": "src/assets/thumbnails/152.png",
        "hires": "src/assets/hires/152.png"
      }
    },
    {
      "id": 153,
      "name": {
        "english": "Bayleef",
        "japanese": "ベイリーフ",
        "chinese": "月桂叶",
        "french": "Macronium"
      },
      "type": ["Grass"],
      "base": {
        "HP": 60,
        "Attack": 62,
        "Defense": 80,
        "Sp. Attack": 63,
        "Sp. Defense": 80,
        "Speed": 60
      },
      "species": "Leaf Pokémon",
      "description": "Bayleef’s neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
      "evolution": { "prev": ["152", "Level 16"], "next": [["154", "Level 32"]] },
      "profile": {
        "height": "1.2 m",
        "weight": "15.8 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Leaf Guard", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/153.png",
        "thumbnail": "src/assets/thumbnails/153.png",
        "hires": "src/assets/hires/153.png"
      }
    },
    {
      "id": 154,
      "name": {
        "english": "Meganium",
        "japanese": "メガニウム",
        "chinese": "大竺葵",
        "french": "Méganium"
      },
      "type": ["Grass"],
      "base": {
        "HP": 80,
        "Attack": 82,
        "Defense": 100,
        "Sp. Attack": 83,
        "Sp. Defense": 100,
        "Speed": 80
      },
      "species": "Herb Pokémon",
      "description": "The fragrance of Meganium’s flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe’s fighting spirit.",
      "evolution": { "prev": ["153", "Level 32"] },
      "profile": {
        "height": "1.8 m",
        "weight": "100.5 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Leaf Guard", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/154.png",
        "thumbnail": "src/assets/thumbnails/154.png",
        "hires": "src/assets/hires/154.png"
      }
    },
    {
      "id": 155,
      "name": {
        "english": "Cyndaquil",
        "japanese": "ヒノアラシ",
        "chinese": "火球鼠",
        "french": "Héricendre"
      },
      "type": ["Fire"],
      "base": {
        "HP": 39,
        "Attack": 52,
        "Defense": 43,
        "Sp. Attack": 60,
        "Sp. Defense": 50,
        "Speed": 65
      },
      "species": "Fire Mouse Pokémon",
      "description": "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.",
      "evolution": { "next": [["156", "Level 14"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "7.9 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Flash Fire", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/155.png",
        "thumbnail": "src/assets/thumbnails/155.png",
        "hires": "src/assets/hires/155.png"
      }
    },
    {
      "id": 156,
      "name": {
        "english": "Quilava",
        "japanese": "マグマラシ",
        "chinese": "火岩鼠",
        "french": "Feurisson"
      },
      "type": ["Fire"],
      "base": {
        "HP": 58,
        "Attack": 64,
        "Defense": 58,
        "Sp. Attack": 80,
        "Sp. Defense": 65,
        "Speed": 80
      },
      "species": "Volcano Pokémon",
      "description": "Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pokémon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.",
      "evolution": { "prev": ["155", "Level 14"], "next": [["157", "Level 36"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "19 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Flash Fire", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/156.png",
        "thumbnail": "src/assets/thumbnails/156.png",
        "hires": "src/assets/hires/156.png"
      }
    },
    {
      "id": 157,
      "name": {
        "english": "Typhlosion",
        "japanese": "バクフーン",
        "chinese": "火暴兽",
        "french": "Typhlosion"
      },
      "type": ["Fire"],
      "base": {
        "HP": 78,
        "Attack": 84,
        "Defense": 78,
        "Sp. Attack": 109,
        "Sp. Defense": 85,
        "Speed": 100
      },
      "species": "Volcano Pokémon",
      "description": "Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.",
      "evolution": { "prev": ["156", "Level 36"] },
      "profile": {
        "height": "1.7 m",
        "weight": "79.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Flash Fire", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/157.png",
        "thumbnail": "src/assets/thumbnails/157.png",
        "hires": "src/assets/hires/157.png"
      }
    },
    {
      "id": 158,
      "name": {
        "english": "Totodile",
        "japanese": "ワニノコ",
        "chinese": "小锯鳄",
        "french": "Kaiminus"
      },
      "type": ["Water"],
      "base": {
        "HP": 50,
        "Attack": 65,
        "Defense": 64,
        "Sp. Attack": 44,
        "Sp. Defense": 48,
        "Speed": 43
      },
      "species": "Big Jaw Pokémon",
      "description": "Despite the smallness of its body, Totodile’s jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.",
      "evolution": { "next": [["159", "Level 18"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "9.5 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/158.png",
        "thumbnail": "src/assets/thumbnails/158.png",
        "hires": "src/assets/hires/158.png"
      }
    },
    {
      "id": 159,
      "name": {
        "english": "Croconaw",
        "japanese": "アリゲイツ",
        "chinese": "蓝鳄",
        "french": "Crocrodil"
      },
      "type": ["Water"],
      "base": {
        "HP": 65,
        "Attack": 80,
        "Defense": 80,
        "Sp. Attack": 59,
        "Sp. Defense": 63,
        "Speed": 58
      },
      "species": "Big Jaw Pokémon",
      "description": "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.",
      "evolution": { "prev": ["158", "Level 18"], "next": [["160", "Level 30"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "25 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/159.png",
        "thumbnail": "src/assets/thumbnails/159.png",
        "hires": "src/assets/hires/159.png"
      }
    },
    {
      "id": 160,
      "name": {
        "english": "Feraligatr",
        "japanese": "オーダイル",
        "chinese": "大力鳄",
        "french": "Aligatueur"
      },
      "type": ["Water"],
      "base": {
        "HP": 85,
        "Attack": 105,
        "Defense": 100,
        "Sp. Attack": 79,
        "Sp. Defense": 83,
        "Speed": 78
      },
      "species": "Big Jaw Pokémon",
      "description": "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.",
      "evolution": { "prev": ["159", "Level 30"] },
      "profile": {
        "height": "2.3 m",
        "weight": "88.8 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/160.png",
        "thumbnail": "src/assets/thumbnails/160.png",
        "hires": "src/assets/hires/160.png"
      }
    },
    {
      "id": 161,
      "name": {
        "english": "Sentret",
        "japanese": "オタチ",
        "chinese": "尾立",
        "french": "Fouinette"
      },
      "type": ["Normal"],
      "base": {
        "HP": 35,
        "Attack": 46,
        "Defense": 34,
        "Sp. Attack": 35,
        "Sp. Defense": 45,
        "Speed": 20
      },
      "species": "Scout Pokémon",
      "description": "When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pokémon becomes separated from its pack, it becomes incapable of sleep due to fear.",
      "evolution": { "next": [["162", "Level 15"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "6 kg",
        "egg": ["Field"],
        "ability": [
          ["Run Away", "false"],
          ["Keen Eye", "false"],
          ["Frisk", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/161.png",
        "thumbnail": "src/assets/thumbnails/161.png",
        "hires": "src/assets/hires/161.png"
      }
    },
    {
      "id": 162,
      "name": {
        "english": "Furret",
        "japanese": "オオタチ",
        "chinese": "大尾立",
        "french": "Fouinar"
      },
      "type": ["Normal"],
      "base": {
        "HP": 85,
        "Attack": 76,
        "Defense": 64,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 90
      },
      "species": "Long Body Pokémon",
      "description": "Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.",
      "evolution": { "prev": ["161", "Level 15"] },
      "profile": {
        "height": "1.8 m",
        "weight": "32.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Run Away", "false"],
          ["Keen Eye", "false"],
          ["Frisk", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/162.png",
        "thumbnail": "src/assets/thumbnails/162.png",
        "hires": "src/assets/hires/162.png"
      }
    },
    {
      "id": 163,
      "name": {
        "english": "Hoothoot",
        "japanese": "ホーホー",
        "chinese": "咕咕",
        "french": "Hoothoot"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 60,
        "Attack": 30,
        "Defense": 30,
        "Sp. Attack": 36,
        "Sp. Defense": 56,
        "Speed": 50
      },
      "species": "Owl Pokémon",
      "description": "It cries out at the same time every day. A long time ago, people cherished it and considered it a divine messenger sent to tell the time.",
      "evolution": { "next": [["164", "Level 20"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "21.2 kg",
        "egg": ["Flying"],
        "ability": [
          ["Insomnia", "false"],
          ["Keen Eye", "false"],
          ["Tinted Lens", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/163.png",
        "thumbnail": "src/assets/thumbnails/163.png",
        "hires": "src/assets/hires/163.png"
      }
    },
    {
      "id": 164,
      "name": {
        "english": "Noctowl",
        "japanese": "ヨルノズク",
        "chinese": "猫头夜鹰",
        "french": "Noarfang"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 100,
        "Attack": 50,
        "Defense": 50,
        "Sp. Attack": 86,
        "Sp. Defense": 96,
        "Speed": 70
      },
      "species": "Owl Pokémon",
      "description": "When it turns its head entirely upside down, you know it’s troubled by something. If you don’t leave it be, it will peck you.",
      "evolution": { "prev": ["163", "Level 20"] },
      "profile": {
        "height": "1.6 m",
        "weight": "40.8 kg",
        "egg": ["Flying"],
        "ability": [
          ["Insomnia", "false"],
          ["Keen Eye", "false"],
          ["Tinted Lens", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/164.png",
        "thumbnail": "src/assets/thumbnails/164.png",
        "hires": "src/assets/hires/164.png"
      }
    },
    {
      "id": 165,
      "name": {
        "english": "Ledyba",
        "japanese": "レディバ",
        "chinese": "芭瓢虫",
        "french": "Coxy"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 40,
        "Attack": 20,
        "Defense": 30,
        "Sp. Attack": 40,
        "Sp. Defense": 80,
        "Speed": 55
      },
      "species": "Five Star Pokémon",
      "description": "These very cowardly Pokémon join together and use Reflect to protect their nest.",
      "evolution": { "next": [["166", "Level 18"]] },
      "profile": {
        "height": "1 m",
        "weight": "10.8 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Early Bird", "false"],
          ["Rattled", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/165.png",
        "thumbnail": "src/assets/thumbnails/165.png",
        "hires": "src/assets/hires/165.png"
      }
    },
    {
      "id": 166,
      "name": {
        "english": "Ledian",
        "japanese": "レディアン",
        "chinese": "安瓢虫",
        "french": "Coxyclaque"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 55,
        "Attack": 35,
        "Defense": 50,
        "Sp. Attack": 55,
        "Sp. Defense": 110,
        "Speed": 85
      },
      "species": "Five Star Pokémon",
      "description": "It flies through the night sky, sprinkling sparkly dust. According to some, if that dust sticks to you, good things will happen to you.",
      "evolution": { "prev": ["165", "Level 18"] },
      "profile": {
        "height": "1.4 m",
        "weight": "35.6 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Early Bird", "false"],
          ["Iron Fist", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/166.png",
        "thumbnail": "src/assets/thumbnails/166.png",
        "hires": "src/assets/hires/166.png"
      }
    },
    {
      "id": 167,
      "name": {
        "english": "Spinarak",
        "japanese": "イトマル",
        "chinese": "圆丝蛛",
        "french": "Mimigal"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 40,
        "Attack": 60,
        "Defense": 40,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 30
      },
      "species": "String Spit Pokémon",
      "description": "Although the poison from its fangs isn’t that strong, it’s potent enough to weaken prey that gets caught in its web.",
      "evolution": { "next": [["168", "Level 22"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "8.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Insomnia", "false"],
          ["Sniper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/167.png",
        "thumbnail": "src/assets/thumbnails/167.png",
        "hires": "src/assets/hires/167.png"
      }
    },
    {
      "id": 168,
      "name": {
        "english": "Ariados",
        "japanese": "アリアドス",
        "chinese": "阿利多斯",
        "french": "Migalos"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 70,
        "Attack": 90,
        "Defense": 70,
        "Sp. Attack": 60,
        "Sp. Defense": 70,
        "Speed": 40
      },
      "species": "Long Leg Pokémon",
      "description": "It spews threads from its mouth to catch its prey. When night falls, it leaves its web to go hunt aggressively.",
      "evolution": { "prev": ["167", "Level 22"] },
      "profile": {
        "height": "1.1 m",
        "weight": "33.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Insomnia", "false"],
          ["Sniper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/168.png",
        "thumbnail": "src/assets/thumbnails/168.png",
        "hires": "src/assets/hires/168.png"
      }
    },
    {
      "id": 169,
      "name": {
        "english": "Crobat",
        "japanese": "クロバット",
        "chinese": "叉字蝠",
        "french": "Nostenfer"
      },
      "type": ["Poison", "Flying"],
      "base": {
        "HP": 85,
        "Attack": 90,
        "Defense": 80,
        "Sp. Attack": 70,
        "Sp. Defense": 80,
        "Speed": 130
      },
      "species": "Bat Pokémon",
      "description": "It feeds on the blood of living people and Pokémon. If it can’t drink any blood for even a short while, it becomes weak and unable to fly.",
      "evolution": { "prev": ["42", "high Friendship"] },
      "profile": {
        "height": "1.8 m",
        "weight": "75 kg",
        "egg": ["Flying"],
        "ability": [
          ["Inner Focus", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/169.png",
        "thumbnail": "src/assets/thumbnails/169.png",
        "hires": "src/assets/hires/169.png"
      }
    },
    {
      "id": 170,
      "name": {
        "english": "Chinchou",
        "japanese": "チョンチー",
        "chinese": "灯笼鱼",
        "french": "Loupio"
      },
      "type": ["Water", "Electric"],
      "base": {
        "HP": 75,
        "Attack": 38,
        "Defense": 38,
        "Sp. Attack": 56,
        "Sp. Defense": 56,
        "Speed": 67
      },
      "species": "Angler Pokémon",
      "description": "Chinchou blink their shining antennae at one another to claim their respective turf.",
      "evolution": { "next": [["171", "Level 27"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "12 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Volt Absorb", "false"],
          ["Illuminate", "false"],
          ["Water Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/170.png",
        "thumbnail": "src/assets/thumbnails/170.png",
        "hires": "src/assets/hires/170.png"
      }
    },
    {
      "id": 171,
      "name": {
        "english": "Lanturn",
        "japanese": "ランターン",
        "chinese": "电灯怪",
        "french": "Lanturn"
      },
      "type": ["Water", "Electric"],
      "base": {
        "HP": 125,
        "Attack": 58,
        "Defense": 58,
        "Sp. Attack": 76,
        "Sp. Defense": 76,
        "Speed": 67
      },
      "species": "Light Pokémon",
      "description": "It lives far down in the depths of the ocean. It blinds its prey with light, using the moment they’re dazzled to swallow them whole.",
      "evolution": { "prev": ["170", "Level 27"] },
      "profile": {
        "height": "1.2 m",
        "weight": "22.5 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Volt Absorb", "false"],
          ["Illuminate", "false"],
          ["Water Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/171.png",
        "thumbnail": "src/assets/thumbnails/171.png",
        "hires": "src/assets/hires/171.png"
      }
    },
    {
      "id": 172,
      "name": {
        "english": "Pichu",
        "japanese": "ピチュー",
        "chinese": "皮丘",
        "french": "Pichu"
      },
      "type": ["Electric"],
      "base": {
        "HP": 20,
        "Attack": 40,
        "Defense": 15,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 60
      },
      "species": "Tiny Mouse Pokémon",
      "description": "It has electric sacs in its cheeks. When they’re fully charged, Pichu plays very energetically.",
      "evolution": { "next": [["25", "high Friendship"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "2 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Static", "false"],
          ["Lightning Rod", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/172.png",
        "thumbnail": "src/assets/thumbnails/172.png",
        "hires": "src/assets/hires/172.png"
      }
    },
    {
      "id": 173,
      "name": {
        "english": "Cleffa",
        "japanese": "ピィ",
        "chinese": "皮宝宝",
        "french": "Mélo"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 50,
        "Attack": 25,
        "Defense": 28,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 15
      },
      "species": "Star Shape Pokémon",
      "description": "Said to have ridden here on a shooting star, Cleffa seem to appear in places where meteorites have struck in the past.",
      "evolution": { "next": [["35", "high Friendship"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "3 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Cute Charm", "false"],
          ["Magic Guard", "false"],
          ["Friend Guard", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/173.png",
        "thumbnail": "src/assets/thumbnails/173.png",
        "hires": "src/assets/hires/173.png"
      }
    },
    {
      "id": 174,
      "name": {
        "english": "Igglybuff",
        "japanese": "ププリン",
        "chinese": "宝宝丁",
        "french": "Toudoudou"
      },
      "type": ["Normal", "Fairy"],
      "base": {
        "HP": 90,
        "Attack": 30,
        "Defense": 15,
        "Sp. Attack": 40,
        "Sp. Defense": 20,
        "Speed": 15
      },
      "species": "Balloon Pokémon",
      "description": "Left to its own devices, it will constantly practice singing. You should make it take a break so it doesn’t hurt its throat.",
      "evolution": { "next": [["39", "high Friendship"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "1 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Cute Charm", "false"],
          ["Competitive", "false"],
          ["Friend Guard", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/174.png",
        "thumbnail": "src/assets/thumbnails/174.png",
        "hires": "src/assets/hires/174.png"
      }
    },
    {
      "id": 175,
      "name": {
        "english": "Togepi",
        "japanese": "トゲピー",
        "chinese": "波克比",
        "french": "Togepi"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 35,
        "Attack": 20,
        "Defense": 65,
        "Sp. Attack": 40,
        "Sp. Defense": 65,
        "Speed": 20
      },
      "species": "Spike Ball Pokémon",
      "description": "As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon. This Pokémon stores up feelings of happiness inside its shell, then shares them with others.",
      "evolution": { "next": [["176", "high Friendship"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "1.5 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Hustle", "false"],
          ["Serene Grace", "false"],
          ["Super Luck", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/175.png",
        "thumbnail": "src/assets/thumbnails/175.png",
        "hires": "src/assets/hires/175.png"
      }
    },
    {
      "id": 176,
      "name": {
        "english": "Togetic",
        "japanese": "トゲチック",
        "chinese": "波克基古",
        "french": "Togetic"
      },
      "type": ["Fairy", "Flying"],
      "base": {
        "HP": 55,
        "Attack": 40,
        "Defense": 85,
        "Sp. Attack": 80,
        "Sp. Defense": 105,
        "Speed": 40
      },
      "species": "Happiness Pokémon",
      "description": "Togetic is said to be a Pokémon that brings good fortune. When the Pokémon spots someone who is pure of heart, it is said to appear and share its happiness with that person.",
      "evolution": {
        "prev": ["175", "high Friendship"],
        "next": [["468", "use Shiny Stone"]]
      },
      "profile": {
        "height": "0.6 m",
        "weight": "3.2 kg",
        "egg": ["Flying", "Fairy"],
        "ability": [
          ["Hustle", "false"],
          ["Serene Grace", "false"],
          ["Super Luck", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/176.png",
        "thumbnail": "src/assets/thumbnails/176.png",
        "hires": "src/assets/hires/176.png"
      }
    },
    {
      "id": 177,
      "name": {
        "english": "Natu",
        "japanese": "ネイティ",
        "chinese": "天然雀",
        "french": "Natu"
      },
      "type": ["Psychic", "Flying"],
      "base": {
        "HP": 40,
        "Attack": 50,
        "Defense": 45,
        "Sp. Attack": 70,
        "Sp. Defense": 45,
        "Speed": 70
      },
      "species": "Tiny Bird Pokémon",
      "description": "The look in its eyes gives the impression that it’s carefully observing you. If you approach it, Natu will hop away.",
      "evolution": { "next": [["178", "Level 25"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "2 kg",
        "egg": ["Flying"],
        "ability": [
          ["Synchronize", "false"],
          ["Early Bird", "false"],
          ["Magic Bounce", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/177.png",
        "thumbnail": "src/assets/thumbnails/177.png",
        "hires": "src/assets/hires/177.png"
      }
    },
    {
      "id": 178,
      "name": {
        "english": "Xatu",
        "japanese": "ネイティオ",
        "chinese": "天然鸟",
        "french": "Xatu"
      },
      "type": ["Psychic", "Flying"],
      "base": {
        "HP": 65,
        "Attack": 75,
        "Defense": 70,
        "Sp. Attack": 95,
        "Sp. Defense": 70,
        "Speed": 95
      },
      "species": "Mystic Pokémon",
      "description": "While it can see the future, it has no desire to change it, which is probably why it remains motionless at all times.",
      "evolution": { "prev": ["177", "Level 25"] },
      "profile": {
        "height": "1.5 m",
        "weight": "15 kg",
        "egg": ["Flying"],
        "ability": [
          ["Synchronize", "false"],
          ["Early Bird", "false"],
          ["Magic Bounce", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/178.png",
        "thumbnail": "src/assets/thumbnails/178.png",
        "hires": "src/assets/hires/178.png"
      }
    },
    {
      "id": 179,
      "name": {
        "english": "Mareep",
        "japanese": "メリープ",
        "chinese": "咩利羊",
        "french": "Wattouat"
      },
      "type": ["Electric"],
      "base": {
        "HP": 55,
        "Attack": 40,
        "Defense": 40,
        "Sp. Attack": 65,
        "Sp. Defense": 45,
        "Speed": 35
      },
      "species": "Wool Pokémon",
      "description": "Rubbing its fleece generates electricity. You’ll want to pet it because it’s cute, but if you use your bare hand, you’ll get a painful shock.",
      "evolution": { "next": [["180", "Level 15"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "7.8 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Static", "false"],
          ["Plus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/179.png",
        "thumbnail": "src/assets/thumbnails/179.png",
        "hires": "src/assets/hires/179.png"
      }
    },
    {
      "id": 180,
      "name": {
        "english": "Flaaffy",
        "japanese": "モココ",
        "chinese": "茸茸羊",
        "french": "Lainergie"
      },
      "type": ["Electric"],
      "base": {
        "HP": 70,
        "Attack": 55,
        "Defense": 55,
        "Sp. Attack": 80,
        "Sp. Defense": 60,
        "Speed": 45
      },
      "species": "Wool Pokémon",
      "description": "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches.",
      "evolution": { "prev": ["179", "Level 15"], "next": [["181", "Level 30"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "13.3 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Static", "false"],
          ["Plus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/180.png",
        "thumbnail": "src/assets/thumbnails/180.png",
        "hires": "src/assets/hires/180.png"
      }
    },
    {
      "id": 181,
      "name": {
        "english": "Ampharos",
        "japanese": "デンリュウ",
        "chinese": "电龙",
        "french": "Pharamp"
      },
      "type": ["Electric"],
      "base": {
        "HP": 90,
        "Attack": 75,
        "Defense": 85,
        "Sp. Attack": 115,
        "Sp. Defense": 90,
        "Speed": 55
      },
      "species": "Light Pokémon",
      "description": "Its tail shines bright and strong. It has been prized since long ago as a beacon for sailors.",
      "evolution": { "prev": ["180", "Level 30"] },
      "profile": {
        "height": "1.4 m",
        "weight": "61.5 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Static", "false"],
          ["Plus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/181.png",
        "thumbnail": "src/assets/thumbnails/181.png",
        "hires": "src/assets/hires/181.png"
      }
    },
    {
      "id": 182,
      "name": {
        "english": "Bellossom",
        "japanese": "キレイハナ",
        "chinese": "美丽花",
        "french": "Joliflor"
      },
      "type": ["Grass"],
      "base": {
        "HP": 75,
        "Attack": 80,
        "Defense": 95,
        "Sp. Attack": 90,
        "Sp. Defense": 100,
        "Speed": 50
      },
      "species": "Flower Pokémon",
      "description": "A Bellossom grows flowers more beautifully if it has evolved from a smelly Gloom—the more stinky the better. At night, this Pokémon closes its petals and goes to sleep.",
      "evolution": { "prev": ["44", "use Sun Stone"] },
      "profile": {
        "height": "0.4 m",
        "weight": "5.8 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Healer", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/182.png",
        "thumbnail": "src/assets/thumbnails/182.png",
        "hires": "src/assets/hires/182.png"
      }
    },
    {
      "id": 183,
      "name": {
        "english": "Marill",
        "japanese": "マリル",
        "chinese": "玛力露",
        "french": "Marill"
      },
      "type": ["Water", "Fairy"],
      "base": {
        "HP": 70,
        "Attack": 20,
        "Defense": 50,
        "Sp. Attack": 20,
        "Sp. Defense": 50,
        "Speed": 40
      },
      "species": "Aqua Mouse Pokémon",
      "description": "When fishing for food at the edge of a fast-running stream, Marill wraps its tail around the trunk of a tree. This Pokémon’s tail is flexible and configured to stretch.",
      "evolution": {
        "prev": ["298", "high Friendship"],
        "next": [["184", "Level 18"]]
      },
      "profile": {
        "height": "0.4 m",
        "weight": "8.5 kg",
        "egg": ["Water 1", "Fairy"],
        "ability": [
          ["Thick Fat", "false"],
          ["Huge Power", "false"],
          ["Sap Sipper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/183.png",
        "thumbnail": "src/assets/thumbnails/183.png",
        "hires": "src/assets/hires/183.png"
      }
    },
    {
      "id": 184,
      "name": {
        "english": "Azumarill",
        "japanese": "マリルリ",
        "chinese": "玛力露丽",
        "french": "Azumarill"
      },
      "type": ["Water", "Fairy"],
      "base": {
        "HP": 100,
        "Attack": 50,
        "Defense": 80,
        "Sp. Attack": 60,
        "Sp. Defense": 80,
        "Speed": 50
      },
      "species": "Aqua Rabbit Pokémon",
      "description": "Azumarill can make balloons out of air. It makes these air balloons if it spots a drowning Pokémon. The air balloons enable the Pokémon in trouble to breathe.",
      "evolution": { "prev": ["183", "Level 18"] },
      "profile": {
        "height": "0.8 m",
        "weight": "28.5 kg",
        "egg": ["Water 1", "Fairy"],
        "ability": [
          ["Thick Fat", "false"],
          ["Huge Power", "false"],
          ["Sap Sipper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/184.png",
        "thumbnail": "src/assets/thumbnails/184.png",
        "hires": "src/assets/hires/184.png"
      }
    },
    {
      "id": 185,
      "name": {
        "english": "Sudowoodo",
        "japanese": "ウソッキー",
        "chinese": "树才怪‎",
        "french": "Simularbre"
      },
      "type": ["Rock"],
      "base": {
        "HP": 70,
        "Attack": 100,
        "Defense": 115,
        "Sp. Attack": 30,
        "Sp. Defense": 65,
        "Speed": 30
      },
      "species": "Imitation Pokémon",
      "description": "The result of its holding the same pose all the time is arms that have become supple yet strong.",
      "evolution": { "prev": ["438", "after Mimic learned"] },
      "profile": {
        "height": "1.2 m",
        "weight": "38 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Sturdy", "false"],
          ["Rock Head", "false"],
          ["Rattled", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/185.png",
        "thumbnail": "src/assets/thumbnails/185.png",
        "hires": "src/assets/hires/185.png"
      }
    },
    {
      "id": 186,
      "name": {
        "english": "Politoed",
        "japanese": "ニョロトノ",
        "chinese": "蚊香蛙皇",
        "french": "Tarpaud"
      },
      "type": ["Water"],
      "base": {
        "HP": 90,
        "Attack": 75,
        "Defense": 75,
        "Sp. Attack": 90,
        "Sp. Defense": 100,
        "Speed": 70
      },
      "species": "Frog Pokémon",
      "description": "The longer and more luxurious the curled hair on its head, the greater the number of Poliwag and Poliwhirl that will obey it.",
      "evolution": { "prev": ["61", "trade holding Kings Rock"] },
      "profile": {
        "height": "1.1 m",
        "weight": "33.9 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Water Absorb", "false"],
          ["Damp", "false"],
          ["Drizzle", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/186.png",
        "thumbnail": "src/assets/thumbnails/186.png",
        "hires": "src/assets/hires/186.png"
      }
    },
    {
      "id": 187,
      "name": {
        "english": "Hoppip",
        "japanese": "ハネッコ",
        "chinese": "毽子草",
        "french": "Granivol"
      },
      "type": ["Grass", "Flying"],
      "base": {
        "HP": 35,
        "Attack": 35,
        "Defense": 40,
        "Sp. Attack": 35,
        "Sp. Defense": 55,
        "Speed": 50
      },
      "species": "Cottonweed Pokémon",
      "description": "This Pokémon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.",
      "evolution": { "next": [["188", "Level 18"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "0.5 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Leaf Guard", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/187.png",
        "thumbnail": "src/assets/thumbnails/187.png",
        "hires": "src/assets/hires/187.png"
      }
    },
    {
      "id": 188,
      "name": {
        "english": "Skiploom",
        "japanese": "ポポッコ",
        "chinese": "毽子花",
        "french": "Floravol"
      },
      "type": ["Grass", "Flying"],
      "base": {
        "HP": 55,
        "Attack": 45,
        "Defense": 50,
        "Sp. Attack": 45,
        "Sp. Defense": 65,
        "Speed": 80
      },
      "species": "Cottonweed Pokémon",
      "description": "Skiploom’s flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pokémon is sometimes used as a thermometer.",
      "evolution": { "prev": ["187", "Level 18"], "next": [["189", "Level 27"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "1 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Leaf Guard", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/188.png",
        "thumbnail": "src/assets/thumbnails/188.png",
        "hires": "src/assets/hires/188.png"
      }
    },
    {
      "id": 189,
      "name": {
        "english": "Jumpluff",
        "japanese": "ワタッコ",
        "chinese": "毽子棉",
        "french": "Cotovol"
      },
      "type": ["Grass", "Flying"],
      "base": {
        "HP": 75,
        "Attack": 55,
        "Defense": 70,
        "Sp. Attack": 55,
        "Sp. Defense": 95,
        "Speed": 110
      },
      "species": "Cottonweed Pokémon",
      "description": "Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pokémon descends to the ground when it encounters cold air while it is floating.",
      "evolution": { "prev": ["188", "Level 27"] },
      "profile": {
        "height": "0.8 m",
        "weight": "3 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Leaf Guard", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/189.png",
        "thumbnail": "src/assets/thumbnails/189.png",
        "hires": "src/assets/hires/189.png"
      }
    },
    {
      "id": 190,
      "name": {
        "english": "Aipom",
        "japanese": "エイパム",
        "chinese": "长尾怪手",
        "french": "Capumain"
      },
      "type": ["Normal"],
      "base": {
        "HP": 55,
        "Attack": 70,
        "Defense": 55,
        "Sp. Attack": 40,
        "Sp. Defense": 55,
        "Speed": 85
      },
      "species": "Long Tail Pokémon",
      "description": "It searches for prey from the tops of trees. When it spots its favorite food, Bounsweet, Aipom gets excited and pounces.",
      "evolution": { "next": [["424", "after Double Hit learned"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "11.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Run Away", "false"],
          ["Pickup", "false"],
          ["Skill Link", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/190.png",
        "thumbnail": "src/assets/thumbnails/190.png",
        "hires": "src/assets/hires/190.png"
      }
    },
    {
      "id": 191,
      "name": {
        "english": "Sunkern",
        "japanese": "ヒマナッツ",
        "chinese": "向日种子",
        "french": "Tournegrin"
      },
      "type": ["Grass"],
      "base": {
        "HP": 30,
        "Attack": 30,
        "Defense": 30,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 30
      },
      "species": "Seed Pokémon",
      "description": "Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.",
      "evolution": { "next": [["192", "use Sun Stone"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "1.8 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Solar Power", "false"],
          ["Early Bird", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/191.png",
        "thumbnail": "src/assets/thumbnails/191.png",
        "hires": "src/assets/hires/191.png"
      }
    },
    {
      "id": 192,
      "name": {
        "english": "Sunflora",
        "japanese": "キマワリ",
        "chinese": "向日花怪",
        "french": "Héliatronc"
      },
      "type": ["Grass"],
      "base": {
        "HP": 75,
        "Attack": 75,
        "Defense": 55,
        "Sp. Attack": 105,
        "Sp. Defense": 85,
        "Speed": 30
      },
      "species": "Sun Pokémon",
      "description": "Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.",
      "evolution": { "prev": ["191", "use Sun Stone"] },
      "profile": {
        "height": "0.8 m",
        "weight": "8.5 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Solar Power", "false"],
          ["Early Bird", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/192.png",
        "thumbnail": "src/assets/thumbnails/192.png",
        "hires": "src/assets/hires/192.png"
      }
    },
    {
      "id": 193,
      "name": {
        "english": "Yanma",
        "japanese": "ヤンヤンマ",
        "chinese": "蜻蜻蜓",
        "french": "Yanma"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 65,
        "Attack": 65,
        "Defense": 45,
        "Sp. Attack": 75,
        "Sp. Defense": 45,
        "Speed": 95
      },
      "species": "Clear Wing Pokémon",
      "description": "Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pokémon uses its flying ability to quickly chase down targeted prey.",
      "evolution": { "next": [["469", "after Ancient Power learned"]] },
      "profile": {
        "height": "1.2 m",
        "weight": "38 kg",
        "egg": ["Bug"],
        "ability": [
          ["Speed Boost", "false"],
          ["Compound Eyes", "false"],
          ["Frisk", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/193.png",
        "thumbnail": "src/assets/thumbnails/193.png",
        "hires": "src/assets/hires/193.png"
      }
    },
    {
      "id": 194,
      "name": {
        "english": "Wooper",
        "japanese": "ウパー",
        "chinese": "乌波",
        "french": "Axoloto"
      },
      "type": ["Water", "Ground"],
      "base": {
        "HP": 55,
        "Attack": 45,
        "Defense": 45,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 15
      },
      "species": "Water Fish Pokémon",
      "description": "Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.",
      "evolution": { "next": [["195", "Level 20"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "8.5 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Damp", "false"],
          ["Water Absorb", "false"],
          ["Unaware", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/194.png",
        "thumbnail": "src/assets/thumbnails/194.png",
        "hires": "src/assets/hires/194.png"
      }
    },
    {
      "id": 195,
      "name": {
        "english": "Quagsire",
        "japanese": "ヌオー",
        "chinese": "沼王",
        "french": "Maraiste"
      },
      "type": ["Water", "Ground"],
      "base": {
        "HP": 95,
        "Attack": 85,
        "Defense": 85,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 35
      },
      "species": "Water Fish Pokémon",
      "description": "Quagsire hunts for food by leaving its mouth wide open in water and waiting for its prey to blunder in unaware. Because the Pokémon does not move, it does not get very hungry.",
      "evolution": { "prev": ["194", "Level 20"] },
      "profile": {
        "height": "1.4 m",
        "weight": "75 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Damp", "false"],
          ["Water Absorb", "false"],
          ["Unaware", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/195.png",
        "thumbnail": "src/assets/thumbnails/195.png",
        "hires": "src/assets/hires/195.png"
      }
    },
    {
      "id": 196,
      "name": {
        "english": "Espeon",
        "japanese": "エーフィ",
        "chinese": "太阳伊布",
        "french": "Mentali"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 65,
        "Attack": 65,
        "Defense": 60,
        "Sp. Attack": 130,
        "Sp. Defense": 95,
        "Speed": 110
      },
      "species": "Sun Pokémon",
      "description": "Psychic power builds up in the orb on its forehead as it bathes in the sunshine. Espeon is not good at battling at night.",
      "evolution": { "prev": ["133", "high Friendship, Daytime"] },
      "profile": {
        "height": "0.9 m",
        "weight": "26.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Synchronize", "false"],
          ["Magic Bounce", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/196.png",
        "thumbnail": "src/assets/thumbnails/196.png",
        "hires": "src/assets/hires/196.png"
      }
    },
    {
      "id": 197,
      "name": {
        "english": "Umbreon",
        "japanese": "ブラッキー",
        "chinese": "月亮伊布",
        "french": "Noctali"
      },
      "type": ["Dark"],
      "base": {
        "HP": 95,
        "Attack": 65,
        "Defense": 110,
        "Sp. Attack": 60,
        "Sp. Defense": 130,
        "Speed": 65
      },
      "species": "Moonlight Pokémon",
      "description": "It lurks in the dark of night looking for prey. At the moment it pounces, the rings on its body glow dimly but ominously.",
      "evolution": { "prev": ["133", "high Friendship, Nighttime"] },
      "profile": {
        "height": "1 m",
        "weight": "27 kg",
        "egg": ["Field"],
        "ability": [
          ["Synchronize", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/197.png",
        "thumbnail": "src/assets/thumbnails/197.png",
        "hires": "src/assets/hires/197.png"
      }
    },
    {
      "id": 198,
      "name": {
        "english": "Murkrow",
        "japanese": "ヤミカラス",
        "chinese": "黑暗鸦",
        "french": "Cornèbre"
      },
      "type": ["Dark", "Flying"],
      "base": {
        "HP": 60,
        "Attack": 85,
        "Defense": 42,
        "Sp. Attack": 85,
        "Sp. Defense": 42,
        "Speed": 91
      },
      "species": "Darkness Pokémon",
      "description": "It searches for shiny things for its boss. Murkrow’s presence is said to be unlucky, so many people detest it.",
      "evolution": { "next": [["430", "use Dusk Stone"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "2.1 kg",
        "egg": ["Flying"],
        "ability": [
          ["Insomnia", "false"],
          ["Super Luck", "false"],
          ["Prankster", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/198.png",
        "thumbnail": "src/assets/thumbnails/198.png",
        "hires": "src/assets/hires/198.png"
      }
    },
    {
      "id": 199,
      "name": {
        "english": "Slowking",
        "japanese": "ヤドキング",
        "chinese": "呆呆王",
        "french": "Roigada"
      },
      "type": ["Water", "Psychic"],
      "base": {
        "HP": 95,
        "Attack": 75,
        "Defense": 80,
        "Sp. Attack": 100,
        "Sp. Defense": 110,
        "Speed": 30
      },
      "species": "Royal Pokémon",
      "description": "It’s called “the sage of the sea.” It engages in battles of wits with Oranguru, but the result is usually a draw.",
      "evolution": { "prev": ["79", "trade holding Kings Rock"] },
      "profile": {
        "height": "2 m",
        "weight": "79.5 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Oblivious", "false"],
          ["Own Tempo", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/199.png",
        "thumbnail": "src/assets/thumbnails/199.png",
        "hires": "src/assets/hires/199.png"
      }
    },
    {
      "id": 200,
      "name": {
        "english": "Misdreavus",
        "japanese": "ムウマ",
        "chinese": "梦妖",
        "french": "Feuforêve"
      },
      "type": ["Ghost"],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 60,
        "Sp. Attack": 85,
        "Sp. Defense": 85,
        "Speed": 85
      },
      "species": "Screech Pokémon",
      "description": "What makes it happy is imitating the voices of weeping people and scaring everyone. It doesn’t deal well with folks who aren’t easily frightened.",
      "evolution": { "next": [["429", "use Dusk Stone"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "1 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/200.png",
        "thumbnail": "src/assets/thumbnails/200.png",
        "hires": "src/assets/hires/200.png"
      }
    },
    {
      "id": 201,
      "name": {
        "english": "Unown",
        "japanese": "アンノーン",
        "chinese": "未知图腾",
        "french": "Zarbi"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 48,
        "Attack": 72,
        "Defense": 48,
        "Sp. Attack": 72,
        "Sp. Defense": 48,
        "Speed": 48
      },
      "species": "Symbol Pokémon",
      "description": "This Pokémon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.",
      "evolution": {},
      "profile": {
        "height": "0.5 m",
        "weight": "5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Levitate", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/201.png",
        "thumbnail": "src/assets/thumbnails/201.png",
        "hires": "src/assets/hires/201.png"
      }
    },
    {
      "id": 202,
      "name": {
        "english": "Wobbuffet",
        "japanese": "ソーナンス",
        "chinese": "果然翁",
        "french": "Qulbutoké"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 190,
        "Attack": 33,
        "Defense": 58,
        "Sp. Attack": 33,
        "Sp. Defense": 58,
        "Speed": 33
      },
      "species": "Patient Pokémon",
      "description": "Wobbuffet does nothing but endure attacks—it won’t attack on its own. However, it won’t endure an attack on its tail. When that happens, the Pokémon will try to take the foe with it using Destiny Bond.",
      "evolution": { "prev": ["360", "Level 15"] },
      "profile": {
        "height": "1.3 m",
        "weight": "28.5 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Shadow Tag", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/202.png",
        "thumbnail": "src/assets/thumbnails/202.png",
        "hires": "src/assets/hires/202.png"
      }
    },
    {
      "id": 203,
      "name": {
        "english": "Girafarig",
        "japanese": "キリンリキ",
        "chinese": "麒麟奇",
        "french": "Girafarig"
      },
      "type": ["Normal", "Psychic"],
      "base": {
        "HP": 70,
        "Attack": 80,
        "Defense": 65,
        "Sp. Attack": 90,
        "Sp. Defense": 65,
        "Speed": 85
      },
      "species": "Long Neck Pokémon",
      "description": "Girafarig’s rear head contains a tiny brain that is too small for thinking. However, the rear head doesn’t need to sleep, so it can keep watch over its surroundings 24 hours a day.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "41.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Inner Focus", "false"],
          ["Early Bird", "false"],
          ["Sap Sipper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/203.png",
        "thumbnail": "src/assets/thumbnails/203.png",
        "hires": "src/assets/hires/203.png"
      }
    },
    {
      "id": 204,
      "name": {
        "english": "Pineco",
        "japanese": "クヌギダマ",
        "chinese": "榛果球",
        "french": "Pomdepik"
      },
      "type": ["Bug"],
      "base": {
        "HP": 50,
        "Attack": 65,
        "Defense": 90,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 15
      },
      "species": "Bagworm Pokémon",
      "description": "It sticks tree bark to itself with its saliva, making itself thicker and larger. Elderly Pineco are ridiculously huge.",
      "evolution": { "next": [["205", "Level 31"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "7.2 kg",
        "egg": ["Bug"],
        "ability": [
          ["Sturdy", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/204.png",
        "thumbnail": "src/assets/thumbnails/204.png",
        "hires": "src/assets/hires/204.png"
      }
    },
    {
      "id": 205,
      "name": {
        "english": "Forretress",
        "japanese": "フォレトス",
        "chinese": "佛烈托斯",
        "french": "Foretress"
      },
      "type": ["Bug", "Steel"],
      "base": {
        "HP": 75,
        "Attack": 90,
        "Defense": 140,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 40
      },
      "species": "Bagworm Pokémon",
      "description": "In the moment that it gulps down its prey, the inside of its shell is exposed, but to this day, no one has ever seen that sight.",
      "evolution": { "prev": ["204", "Level 31"] },
      "profile": {
        "height": "1.2 m",
        "weight": "125.8 kg",
        "egg": ["Bug"],
        "ability": [
          ["Sturdy", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/205.png",
        "thumbnail": "src/assets/thumbnails/205.png",
        "hires": "src/assets/hires/205.png"
      }
    },
    {
      "id": 206,
      "name": {
        "english": "Dunsparce",
        "japanese": "ノコッチ",
        "chinese": "土龙弟弟",
        "french": "Insolourdo"
      },
      "type": ["Normal"],
      "base": {
        "HP": 100,
        "Attack": 70,
        "Defense": 70,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 45
      },
      "species": "Land Snake Pokémon",
      "description": "When it sees a person, it digs a hole with its tail to make its escape. If you happen to find one, consider yourself lucky.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "14 kg",
        "egg": ["Field"],
        "ability": [
          ["Serene Grace", "false"],
          ["Run Away", "false"],
          ["Rattled", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/206.png",
        "thumbnail": "src/assets/thumbnails/206.png",
        "hires": "src/assets/hires/206.png"
      }
    },
    {
      "id": 207,
      "name": {
        "english": "Gligar",
        "japanese": "グライガー",
        "chinese": "天蝎",
        "french": "Scorplane"
      },
      "type": ["Ground", "Flying"],
      "base": {
        "HP": 65,
        "Attack": 75,
        "Defense": 105,
        "Sp. Attack": 35,
        "Sp. Defense": 65,
        "Speed": 85
      },
      "species": "Fly Scorpion Pokémon",
      "description": "Gligar glides through the air without a sound as if it were sliding. This Pokémon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.",
      "evolution": { "next": [["472", "hold Razor Fang, Nighttime"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "64.8 kg",
        "egg": ["Bug"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Sand Veil", "false"],
          ["Immunity", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/207.png",
        "thumbnail": "src/assets/thumbnails/207.png",
        "hires": "src/assets/hires/207.png"
      }
    },
    {
      "id": 208,
      "name": {
        "english": "Steelix",
        "japanese": "ハガネール",
        "chinese": "大钢蛇",
        "french": "Steelix"
      },
      "type": ["Steel", "Ground"],
      "base": {
        "HP": 75,
        "Attack": 85,
        "Defense": 200,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 30
      },
      "species": "Iron Snake Pokémon",
      "description": "Steelix lives even further underground than Onix. This Pokémon is known to dig toward the earth’s core. There are records of this Pokémon reaching a depth of over six-tenths of a mile underground.",
      "evolution": { "prev": ["95", "trade holding Metal Coat"] },
      "profile": {
        "height": "9.2 m",
        "weight": "400 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Rock Head", "false"],
          ["Sturdy", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/208.png",
        "thumbnail": "src/assets/thumbnails/208.png",
        "hires": "src/assets/hires/208.png"
      }
    },
    {
      "id": 209,
      "name": {
        "english": "Snubbull",
        "japanese": "ブルー",
        "chinese": "布鲁",
        "french": "Snubbull"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 60,
        "Attack": 80,
        "Defense": 50,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 30
      },
      "species": "Fairy Pokémon",
      "description": "In contrast to its appearance, it’s quite timid. When playing with other puppy Pokémon, it sometimes gets bullied.",
      "evolution": { "next": [["210", "Level 23"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "7.8 kg",
        "egg": ["Field", "Fairy"],
        "ability": [
          ["Intimidate", "false"],
          ["Run Away", "false"],
          ["Rattled", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/209.png",
        "thumbnail": "src/assets/thumbnails/209.png",
        "hires": "src/assets/hires/209.png"
      }
    },
    {
      "id": 210,
      "name": {
        "english": "Granbull",
        "japanese": "グランブル",
        "chinese": "布鲁皇",
        "french": "Granbull"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 90,
        "Attack": 120,
        "Defense": 75,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 45
      },
      "species": "Fairy Pokémon",
      "description": "Although it’s popular with young people, Granbull is timid and sensitive, so it’s totally incompetent as a watchdog.",
      "evolution": { "prev": ["209", "Level 23"] },
      "profile": {
        "height": "1.4 m",
        "weight": "48.7 kg",
        "egg": ["Field", "Fairy"],
        "ability": [
          ["Intimidate", "false"],
          ["Quick Feet", "false"],
          ["Rattled", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/210.png",
        "thumbnail": "src/assets/thumbnails/210.png",
        "hires": "src/assets/hires/210.png"
      }
    },
    {
      "id": 211,
      "name": {
        "english": "Qwilfish",
        "japanese": "ハリーセン",
        "chinese": "千针鱼",
        "french": "Qwilfish"
      },
      "type": ["Water", "Poison"],
      "base": {
        "HP": 65,
        "Attack": 95,
        "Defense": 85,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 85
      },
      "species": "Balloon Pokémon",
      "description": "Qwilfish sucks in water, inflating itself. This Pokémon uses the pressure of the water it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.",
      "evolution": {},
      "profile": {
        "height": "0.5 m",
        "weight": "3.9 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Poison Point", "false"],
          ["Swift Swim", "false"],
          ["Intimidate", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/211.png",
        "thumbnail": "src/assets/thumbnails/211.png",
        "hires": "src/assets/hires/211.png"
      }
    },
    {
      "id": 212,
      "name": {
        "english": "Scizor",
        "japanese": "ハッサム",
        "chinese": "巨钳螳螂",
        "french": "Cizayox"
      },
      "type": ["Bug", "Steel"],
      "base": {
        "HP": 70,
        "Attack": 130,
        "Defense": 100,
        "Sp. Attack": 55,
        "Sp. Defense": 80,
        "Speed": 65
      },
      "species": "Pincer Pokémon",
      "description": "Once it has identified something as an enemy, it will continue beating them with its steel-hard pincers until there’s nothing left but scraps.",
      "evolution": { "prev": ["123", "trade holding Metal Coat"] },
      "profile": {
        "height": "1.8 m",
        "weight": "118 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Technician", "false"],
          ["Light Metal", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/212.png",
        "thumbnail": "src/assets/thumbnails/212.png",
        "hires": "src/assets/hires/212.png"
      }
    },
    {
      "id": 213,
      "name": {
        "english": "Shuckle",
        "japanese": "ツボツボ",
        "chinese": "壶壶",
        "french": "Caratroc"
      },
      "type": ["Bug", "Rock"],
      "base": {
        "HP": 20,
        "Attack": 10,
        "Defense": 230,
        "Sp. Attack": 10,
        "Sp. Defense": 230,
        "Speed": 5
      },
      "species": "Mold Pokémon",
      "description": "Shuckle quietly hides itself under rocks, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juice.",
      "evolution": {},
      "profile": {
        "height": "0.6 m",
        "weight": "20.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Sturdy", "false"],
          ["Gluttony", "false"],
          ["Contrary", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/213.png",
        "thumbnail": "src/assets/thumbnails/213.png",
        "hires": "src/assets/hires/213.png"
      }
    },
    {
      "id": 214,
      "name": {
        "english": "Heracross",
        "japanese": "ヘラクロス",
        "chinese": "赫拉克罗斯",
        "french": "Scarhino"
      },
      "type": ["Bug", "Fighting"],
      "base": {
        "HP": 80,
        "Attack": 125,
        "Defense": 75,
        "Sp. Attack": 40,
        "Sp. Defense": 95,
        "Speed": 85
      },
      "species": "Single Horn Pokémon",
      "description": "It roams through forests searching for sweet nectar. Although it boasts fantastic physical strength, it’s not that good at flying.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "54 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Guts", "false"],
          ["Moxie", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/214.png",
        "thumbnail": "src/assets/thumbnails/214.png",
        "hires": "src/assets/hires/214.png"
      }
    },
    {
      "id": 215,
      "name": {
        "english": "Sneasel",
        "japanese": "ニューラ",
        "chinese": "狃拉",
        "french": "Farfuret"
      },
      "type": ["Dark", "Ice"],
      "base": {
        "HP": 55,
        "Attack": 95,
        "Defense": 55,
        "Sp. Attack": 35,
        "Sp. Defense": 75,
        "Speed": 115
      },
      "species": "Sharp Claw Pokémon",
      "description": "It blends into the dark of night to ambush its prey. Sneasel will attack Sandshrew, but its hard skin can cause Sneasel’s claws to snap off.",
      "evolution": { "next": [["461", "hold Razor Claw, Nighttime"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "28 kg",
        "egg": ["Field"],
        "ability": [
          ["Inner Focus", "false"],
          ["Keen Eye", "false"],
          ["Pickpocket", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/215.png",
        "thumbnail": "src/assets/thumbnails/215.png",
        "hires": "src/assets/hires/215.png"
      }
    },
    {
      "id": 216,
      "name": {
        "english": "Teddiursa",
        "japanese": "ヒメグマ",
        "chinese": "熊宝宝",
        "french": "Teddiursa"
      },
      "type": ["Normal"],
      "base": {
        "HP": 60,
        "Attack": 80,
        "Defense": 50,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 40
      },
      "species": "Little Bear Pokémon",
      "description": "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.",
      "evolution": { "next": [["217", "Level 30"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "8.8 kg",
        "egg": ["Field"],
        "ability": [
          ["Pickup", "false"],
          ["Quick Feet", "false"],
          ["Honey Gather", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/216.png",
        "thumbnail": "src/assets/thumbnails/216.png",
        "hires": "src/assets/hires/216.png"
      }
    },
    {
      "id": 217,
      "name": {
        "english": "Ursaring",
        "japanese": "リングマ",
        "chinese": "圈圈熊",
        "french": "Ursaring"
      },
      "type": ["Normal"],
      "base": {
        "HP": 90,
        "Attack": 130,
        "Defense": 75,
        "Sp. Attack": 75,
        "Sp. Defense": 75,
        "Speed": 55
      },
      "species": "Hibernator Pokémon",
      "description": "In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pokémon walks through its forest gathering food every day.",
      "evolution": { "prev": ["216", "Level 30"] },
      "profile": {
        "height": "1.8 m",
        "weight": "125.8 kg",
        "egg": ["Field"],
        "ability": [
          ["Guts", "false"],
          ["Quick Feet", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/217.png",
        "thumbnail": "src/assets/thumbnails/217.png",
        "hires": "src/assets/hires/217.png"
      }
    },
    {
      "id": 218,
      "name": {
        "english": "Slugma",
        "japanese": "マグマッグ",
        "chinese": "熔岩虫",
        "french": "Limagma"
      },
      "type": ["Fire"],
      "base": {
        "HP": 40,
        "Attack": 40,
        "Defense": 40,
        "Sp. Attack": 70,
        "Sp. Defense": 40,
        "Speed": 20
      },
      "species": "Lava Pokémon",
      "description": "Slugma does not have any blood in its body. Instead, intensely hot magma circulates throughout this Pokémon’s body, carrying essential nutrients and oxygen to its organs.",
      "evolution": { "next": [["219", "Level 38"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "35 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Magma Armor", "false"],
          ["Flame Body", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/218.png",
        "thumbnail": "src/assets/thumbnails/218.png",
        "hires": "src/assets/hires/218.png"
      }
    },
    {
      "id": 219,
      "name": {
        "english": "Magcargo",
        "japanese": "マグカルゴ",
        "chinese": "熔岩蜗牛",
        "french": "Volcaropod"
      },
      "type": ["Fire", "Rock"],
      "base": {
        "HP": 60,
        "Attack": 50,
        "Defense": 120,
        "Sp. Attack": 90,
        "Sp. Defense": 80,
        "Speed": 30
      },
      "species": "Lava Pokémon",
      "description": "Magcargo’s body temperature is approximately 18,000 degrees Fahrenheit. Water is vaporized on contact. If this Pokémon is caught in the rain, the raindrops instantly turn into steam, cloaking the area in a thick fog.",
      "evolution": { "prev": ["218", "Level 38"] },
      "profile": {
        "height": "0.8 m",
        "weight": "55 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Magma Armor", "false"],
          ["Flame Body", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/219.png",
        "thumbnail": "src/assets/thumbnails/219.png",
        "hires": "src/assets/hires/219.png"
      }
    },
    {
      "id": 220,
      "name": {
        "english": "Swinub",
        "japanese": "ウリムー",
        "chinese": "小山猪",
        "french": "Marcacrin"
      },
      "type": ["Ice", "Ground"],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 40,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 50
      },
      "species": "Pig Pokémon",
      "description": "Swinub roots for food by rubbing its snout against the ground. Its favorite food is a mushroom that grows under the cover of dead grass. This Pokémon occasionally roots out hot springs.",
      "evolution": { "next": [["221", "Level 33"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "6.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Oblivious", "false"],
          ["Snow Cloak", "false"],
          ["Thick Fat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/220.png",
        "thumbnail": "src/assets/thumbnails/220.png",
        "hires": "src/assets/hires/220.png"
      }
    },
    {
      "id": 221,
      "name": {
        "english": "Piloswine",
        "japanese": "イノムー",
        "chinese": "长毛猪",
        "french": "Cochignon"
      },
      "type": ["Ice", "Ground"],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 80,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 50
      },
      "species": "Swine Pokémon",
      "description": "Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pokémon uses its tusks to dig up food that has been buried under ice.",
      "evolution": {
        "prev": ["220", "Level 33"],
        "next": [["473", "after Ancient Power learned"]]
      },
      "profile": {
        "height": "1.1 m",
        "weight": "55.8 kg",
        "egg": ["Field"],
        "ability": [
          ["Oblivious", "false"],
          ["Snow Cloak", "false"],
          ["Thick Fat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/221.png",
        "thumbnail": "src/assets/thumbnails/221.png",
        "hires": "src/assets/hires/221.png"
      }
    },
    {
      "id": 222,
      "name": {
        "english": "Corsola",
        "japanese": "サニーゴ",
        "chinese": "太阳珊瑚",
        "french": "Corayon"
      },
      "type": ["Water", "Rock"],
      "base": {
        "HP": 65,
        "Attack": 55,
        "Defense": 95,
        "Sp. Attack": 65,
        "Sp. Defense": 95,
        "Speed": 35
      },
      "species": "Coral Pokémon",
      "description": "In Alola, where their natural enemies Mareanie are plentiful, many Corsola have stubby branches on their heads.",
      "evolution": {},
      "profile": {
        "height": "0.6 m",
        "weight": "5 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [
          ["Hustle", "false"],
          ["Natural Cure", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/222.png",
        "thumbnail": "src/assets/thumbnails/222.png",
        "hires": "src/assets/hires/222.png"
      }
    },
    {
      "id": 223,
      "name": {
        "english": "Remoraid",
        "japanese": "テッポウオ",
        "chinese": "铁炮鱼",
        "french": "Rémoraid"
      },
      "type": ["Water"],
      "base": {
        "HP": 35,
        "Attack": 65,
        "Defense": 35,
        "Sp. Attack": 65,
        "Sp. Defense": 35,
        "Speed": 65
      },
      "species": "Jet Pokémon",
      "description": "Also known as the “sniper of the seas,” its water gun can hit prey without fail from over 300 feet away.",
      "evolution": { "next": [["224", "Level 25"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "12 kg",
        "egg": ["Water 1", "Water 2"],
        "ability": [
          ["Hustle", "false"],
          ["Sniper", "false"],
          ["Moody", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/223.png",
        "thumbnail": "src/assets/thumbnails/223.png",
        "hires": "src/assets/hires/223.png"
      }
    },
    {
      "id": 224,
      "name": {
        "english": "Octillery",
        "japanese": "オクタン",
        "chinese": "章鱼桶",
        "french": "Octillery"
      },
      "type": ["Water"],
      "base": {
        "HP": 75,
        "Attack": 105,
        "Defense": 75,
        "Sp. Attack": 105,
        "Sp. Defense": 75,
        "Speed": 45
      },
      "species": "Jet Pokémon",
      "description": "It usually sleeps in caves. The pitch-black ink that Octillery spits is also used for cooking.",
      "evolution": { "prev": ["223", "Level 25"] },
      "profile": {
        "height": "0.9 m",
        "weight": "28.5 kg",
        "egg": ["Water 1", "Water 2"],
        "ability": [
          ["Suction Cups", "false"],
          ["Sniper", "false"],
          ["Moody", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/224.png",
        "thumbnail": "src/assets/thumbnails/224.png",
        "hires": "src/assets/hires/224.png"
      }
    },
    {
      "id": 225,
      "name": {
        "english": "Delibird",
        "japanese": "デリバード",
        "chinese": "信使鸟",
        "french": "Cadoizo"
      },
      "type": ["Ice", "Flying"],
      "base": {
        "HP": 45,
        "Attack": 55,
        "Defense": 45,
        "Sp. Attack": 65,
        "Sp. Defense": 45,
        "Speed": 75
      },
      "species": "Delivery Pokémon",
      "description": "It wraps food in its tail to carry it around. The Delibird with the biggest tail is the boss of the flock!",
      "evolution": {},
      "profile": {
        "height": "0.9 m",
        "weight": "16 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Vital Spirit", "false"],
          ["Hustle", "false"],
          ["Insomnia", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/225.png",
        "thumbnail": "src/assets/thumbnails/225.png",
        "hires": "src/assets/hires/225.png"
      }
    },
    {
      "id": 226,
      "name": {
        "english": "Mantine",
        "japanese": "マンタイン",
        "chinese": "巨翅飞鱼",
        "french": "Démanta"
      },
      "type": ["Water", "Flying"],
      "base": {
        "HP": 85,
        "Attack": 40,
        "Defense": 70,
        "Sp. Attack": 80,
        "Sp. Defense": 140,
        "Speed": 70
      },
      "species": "Kite Pokémon",
      "description": "Many people have taken up surfing because they admire how magnificently Mantine swims.",
      "evolution": { "prev": ["458", "with Remoraid in party"] },
      "profile": {
        "height": "2.1 m",
        "weight": "220 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Swift Swim", "false"],
          ["Water Absorb", "false"],
          ["Water Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/226.png",
        "thumbnail": "src/assets/thumbnails/226.png",
        "hires": "src/assets/hires/226.png"
      }
    },
    {
      "id": 227,
      "name": {
        "english": "Skarmory",
        "japanese": "エアームド",
        "chinese": "盔甲鸟",
        "french": "Airmure"
      },
      "type": ["Steel", "Flying"],
      "base": {
        "HP": 65,
        "Attack": 80,
        "Defense": 140,
        "Sp. Attack": 40,
        "Sp. Defense": 70,
        "Speed": 70
      },
      "species": "Armor Bird Pokémon",
      "description": "Its body is draped in steel armor. It looks heavy, but it can fly at speeds of up to 185 miles an hour!",
      "evolution": {},
      "profile": {
        "height": "1.7 m",
        "weight": "50.5 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Sturdy", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/227.png",
        "thumbnail": "src/assets/thumbnails/227.png",
        "hires": "src/assets/hires/227.png"
      }
    },
    {
      "id": 228,
      "name": {
        "english": "Houndour",
        "japanese": "デルビル",
        "chinese": "戴鲁比",
        "french": "Malosse"
      },
      "type": ["Dark", "Fire"],
      "base": {
        "HP": 45,
        "Attack": 60,
        "Defense": 30,
        "Sp. Attack": 80,
        "Sp. Defense": 50,
        "Speed": 65
      },
      "species": "Dark Pokémon",
      "description": "They make repeated eerie howls before dawn to call attention to their pack.",
      "evolution": { "next": [["229", "Level 24"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "10.8 kg",
        "egg": ["Field"],
        "ability": [
          ["Early Bird", "false"],
          ["Flash Fire", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/228.png",
        "thumbnail": "src/assets/thumbnails/228.png",
        "hires": "src/assets/hires/228.png"
      }
    },
    {
      "id": 229,
      "name": {
        "english": "Houndoom",
        "japanese": "ヘルガー",
        "chinese": "黑鲁加",
        "french": "Démolosse"
      },
      "type": ["Dark", "Fire"],
      "base": {
        "HP": 75,
        "Attack": 90,
        "Defense": 50,
        "Sp. Attack": 110,
        "Sp. Defense": 80,
        "Speed": 95
      },
      "species": "Dark Pokémon",
      "description": "Identifiable by its eerie howls, people a long time ago thought it was the grim reaper and feared it.",
      "evolution": { "prev": ["228", "Level 24"] },
      "profile": {
        "height": "1.4 m",
        "weight": "35 kg",
        "egg": ["Field"],
        "ability": [
          ["Early Bird", "false"],
          ["Flash Fire", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/229.png",
        "thumbnail": "src/assets/thumbnails/229.png",
        "hires": "src/assets/hires/229.png"
      }
    },
    {
      "id": 230,
      "name": {
        "english": "Kingdra",
        "japanese": "キングドラ",
        "chinese": "刺龙王",
        "french": "Hyporoi"
      },
      "type": ["Water", "Dragon"],
      "base": {
        "HP": 75,
        "Attack": 95,
        "Defense": 95,
        "Sp. Attack": 95,
        "Sp. Defense": 95,
        "Speed": 85
      },
      "species": "Dragon Pokémon",
      "description": "Kingdra sleeps on the seafloor where it is otherwise devoid of life. When a storm arrives, the Pokémon is said to awaken and wander about in search of prey.",
      "evolution": { "prev": ["117", "trade holding Dragon Scale"] },
      "profile": {
        "height": "1.8 m",
        "weight": "152 kg",
        "egg": ["Water 1", "Dragon"],
        "ability": [
          ["Swift Swim", "false"],
          ["Sniper", "false"],
          ["Damp", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/230.png",
        "thumbnail": "src/assets/thumbnails/230.png",
        "hires": "src/assets/hires/230.png"
      }
    },
    {
      "id": 231,
      "name": {
        "english": "Phanpy",
        "japanese": "ゴマゾウ",
        "chinese": "小小象",
        "french": "Phanpy"
      },
      "type": ["Ground"],
      "base": {
        "HP": 90,
        "Attack": 60,
        "Defense": 60,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 40
      },
      "species": "Long Nose Pokémon",
      "description": "Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with water. These Pokémon can be seen drying their soaking-wet bodies at the edge of water.",
      "evolution": { "next": [["232", "Level 25"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "33.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Pickup", "false"],
          ["Sand Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/231.png",
        "thumbnail": "src/assets/thumbnails/231.png",
        "hires": "src/assets/hires/231.png"
      }
    },
    {
      "id": 232,
      "name": {
        "english": "Donphan",
        "japanese": "ドンファン",
        "chinese": "顿甲",
        "french": "Donphan"
      },
      "type": ["Ground"],
      "base": {
        "HP": 90,
        "Attack": 120,
        "Defense": 120,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 50
      },
      "species": "Armor Pokémon",
      "description": "If Donphan were to tackle with its hard body, even a house could be destroyed. Using its massive strength, the Pokémon helps clear rock and mud slides that block mountain trails.",
      "evolution": { "prev": ["231", "Level 25"] },
      "profile": {
        "height": "1.1 m",
        "weight": "120 kg",
        "egg": ["Field"],
        "ability": [
          ["Sturdy", "false"],
          ["Sand Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/232.png",
        "thumbnail": "src/assets/thumbnails/232.png",
        "hires": "src/assets/hires/232.png"
      }
    },
    {
      "id": 233,
      "name": {
        "english": "Porygon2",
        "japanese": "ポリゴン２",
        "chinese": "多边兽Ⅱ",
        "french": "Porygon2"
      },
      "type": ["Normal"],
      "base": {
        "HP": 85,
        "Attack": 80,
        "Defense": 90,
        "Sp. Attack": 105,
        "Sp. Defense": 95,
        "Speed": 60
      },
      "species": "Virtual Pokémon",
      "description": "Even though it doesn’t die in the vacuum of space, it can’t move around very well in zero gravity.",
      "evolution": {
        "prev": ["137", "trade holding Upgrade"],
        "next": [["474", "trade holding Dubious Disc"]]
      },
      "profile": {
        "height": "0.6 m",
        "weight": "32.5 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Trace", "false"],
          ["Download", "false"],
          ["Analytic", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/233.png",
        "thumbnail": "src/assets/thumbnails/233.png",
        "hires": "src/assets/hires/233.png"
      }
    },
    {
      "id": 234,
      "name": {
        "english": "Stantler",
        "japanese": "オドシシ",
        "chinese": "惊角鹿",
        "french": "Cerfrousse"
      },
      "type": ["Normal"],
      "base": {
        "HP": 73,
        "Attack": 95,
        "Defense": 62,
        "Sp. Attack": 85,
        "Sp. Defense": 65,
        "Speed": 85
      },
      "species": "Big Horn Pokémon",
      "description": "Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.",
      "evolution": {},
      "profile": {
        "height": "1.4 m",
        "weight": "71.2 kg",
        "egg": ["Field"],
        "ability": [
          ["Intimidate", "false"],
          ["Frisk", "false"],
          ["Sap Sipper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/234.png",
        "thumbnail": "src/assets/thumbnails/234.png",
        "hires": "src/assets/hires/234.png"
      }
    },
    {
      "id": 235,
      "name": {
        "english": "Smeargle",
        "japanese": "ドーブル",
        "chinese": "图图犬",
        "french": "Queulorior"
      },
      "type": ["Normal"],
      "base": {
        "HP": 55,
        "Attack": 20,
        "Defense": 35,
        "Sp. Attack": 20,
        "Sp. Defense": 45,
        "Speed": 75
      },
      "species": "Painter Pokémon",
      "description": "It draws symbols with the fluid that oozes from the tip of its tail. Depending on the symbol, Smeargle fanatics will pay big money for them.",
      "evolution": {},
      "profile": {
        "height": "1.2 m",
        "weight": "58 kg",
        "egg": ["Field"],
        "ability": [
          ["Own Tempo", "false"],
          ["Technician", "false"],
          ["Moody", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/235.png",
        "thumbnail": "src/assets/thumbnails/235.png",
        "hires": "src/assets/hires/235.png"
      }
    },
    {
      "id": 236,
      "name": {
        "english": "Tyrogue",
        "japanese": "バルキー",
        "chinese": "无畏小子",
        "french": "Debugant"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 35,
        "Attack": 35,
        "Defense": 35,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 35
      },
      "species": "Scuffle Pokémon",
      "description": "Tyrogue becomes stressed out if it does not get to train every day. When raising this Pokémon, the Trainer must establish and uphold various training methods.",
      "evolution": {
        "next": [
          ["106", "Level 20, Attack > Defense"],
          ["107", "Level 20, Attack < Defense"],
          ["237", "Level 20, Attack = Defense"]
        ]
      },
      "profile": {
        "height": "0.7 m",
        "weight": "21 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Guts", "false"],
          ["Steadfast", "false"],
          ["Vital Spirit", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/236.png",
        "thumbnail": "src/assets/thumbnails/236.png",
        "hires": "src/assets/hires/236.png"
      }
    },
    {
      "id": 237,
      "name": {
        "english": "Hitmontop",
        "japanese": "カポエラー",
        "chinese": "战舞郎",
        "french": "Kapoera"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 50,
        "Attack": 95,
        "Defense": 95,
        "Sp. Attack": 35,
        "Sp. Defense": 110,
        "Speed": 70
      },
      "species": "Handstand Pokémon",
      "description": "Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pokémon travels faster spinning than it does walking.",
      "evolution": { "prev": ["236", "Level 20, Attack = Defense"] },
      "profile": {
        "height": "1.4 m",
        "weight": "48 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Intimidate", "false"],
          ["Technician", "false"],
          ["Steadfast", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/237.png",
        "thumbnail": "src/assets/thumbnails/237.png",
        "hires": "src/assets/hires/237.png"
      }
    },
    {
      "id": 238,
      "name": {
        "english": "Smoochum",
        "japanese": "ムチュール",
        "chinese": "迷唇娃",
        "french": "Lippouti"
      },
      "type": ["Ice", "Psychic"],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 15,
        "Sp. Attack": 85,
        "Sp. Defense": 65,
        "Speed": 65
      },
      "species": "Kiss Pokémon",
      "description": "Highly perceptive sensors, Smoochum’s lips are kept moist by its daily application of tree sap.",
      "evolution": { "next": [["124", "Level 30"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "6 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Oblivious", "false"],
          ["Forewarn", "false"],
          ["Hydration", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/238.png",
        "thumbnail": "src/assets/thumbnails/238.png",
        "hires": "src/assets/hires/238.png"
      }
    },
    {
      "id": 239,
      "name": {
        "english": "Elekid",
        "japanese": "エレキッド",
        "chinese": "电击怪",
        "french": "Élekid"
      },
      "type": ["Electric"],
      "base": {
        "HP": 45,
        "Attack": 63,
        "Defense": 37,
        "Sp. Attack": 65,
        "Sp. Defense": 55,
        "Speed": 95
      },
      "species": "Electric Pokémon",
      "description": "When its horns shine a bluish white, that’s the sign it’s fully charged. You’ll get a shocking jolt if you touch it!",
      "evolution": { "next": [["125", "Level 30"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "23.5 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Static", "false"],
          ["Vital Spirit", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/239.png",
        "thumbnail": "src/assets/thumbnails/239.png",
        "hires": "src/assets/hires/239.png"
      }
    },
    {
      "id": 240,
      "name": {
        "english": "Magby",
        "japanese": "ブビィ",
        "chinese": "鸭嘴宝宝",
        "french": "Magby"
      },
      "type": ["Fire"],
      "base": {
        "HP": 45,
        "Attack": 75,
        "Defense": 37,
        "Sp. Attack": 70,
        "Sp. Defense": 55,
        "Speed": 83
      },
      "species": "Live Coal Pokémon",
      "description": "Its body temperature is always around 1,100 degrees Fahrenheit. If Magby falls into a small- enough pond, the whole thing will dry up.",
      "evolution": { "next": [["126", "Level 30"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "21.4 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Flame Body", "false"],
          ["Vital Spirit", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/240.png",
        "thumbnail": "src/assets/thumbnails/240.png",
        "hires": "src/assets/hires/240.png"
      }
    },
    {
      "id": 241,
      "name": {
        "english": "Miltank",
        "japanese": "ミルタンク",
        "chinese": "大奶罐",
        "french": "Écrémeuh"
      },
      "type": ["Normal"],
      "base": {
        "HP": 95,
        "Attack": 80,
        "Defense": 105,
        "Sp. Attack": 40,
        "Sp. Defense": 70,
        "Speed": 100
      },
      "species": "Milk Cow Pokémon",
      "description": "Its milk is delicious and chock-full of nutrients. However, if you drink too much, it could make your stomach hurt, so be careful.",
      "evolution": {},
      "profile": {
        "height": "1.2 m",
        "weight": "75.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Thick Fat", "false"],
          ["Scrappy", "false"],
          ["Sap Sipper", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/241.png",
        "thumbnail": "src/assets/thumbnails/241.png",
        "hires": "src/assets/hires/241.png"
      }
    },
    {
      "id": 242,
      "name": {
        "english": "Blissey",
        "japanese": "ハピナス",
        "chinese": "幸福蛋",
        "french": "Leuphorie"
      },
      "type": ["Normal"],
      "base": {
        "HP": 255,
        "Attack": 10,
        "Defense": 10,
        "Sp. Attack": 75,
        "Sp. Defense": 135,
        "Speed": 55
      },
      "species": "Happiness Pokémon",
      "description": "This Pokémon is overflowing with love. Only Chansey that share a strong bond with their Trainer can evolve, so people say.",
      "evolution": { "prev": ["113", "high Friendship"] },
      "profile": {
        "height": "1.5 m",
        "weight": "46.8 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Natural Cure", "false"],
          ["Serene Grace", "false"],
          ["Healer", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/242.png",
        "thumbnail": "src/assets/thumbnails/242.png",
        "hires": "src/assets/hires/242.png"
      }
    },
    {
      "id": 243,
      "name": {
        "english": "Raikou",
        "japanese": "ライコウ",
        "chinese": "雷公",
        "french": "Raikou"
      },
      "type": ["Electric"],
      "base": {
        "HP": 90,
        "Attack": 85,
        "Defense": 75,
        "Sp. Attack": 115,
        "Sp. Defense": 100,
        "Speed": 115
      },
      "species": "Thunder Pokémon",
      "description": "Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.",
      "evolution": {},
      "profile": {
        "height": "1.9 m",
        "weight": "178 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/243.png",
        "thumbnail": "src/assets/thumbnails/243.png",
        "hires": "src/assets/hires/243.png"
      }
    },
    {
      "id": 244,
      "name": {
        "english": "Entei",
        "japanese": "エンテイ",
        "chinese": "炎帝",
        "french": "Entei"
      },
      "type": ["Fire"],
      "base": {
        "HP": 115,
        "Attack": 115,
        "Defense": 85,
        "Sp. Attack": 90,
        "Sp. Defense": 75,
        "Speed": 100
      },
      "species": "Volcano Pokémon",
      "description": "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
      "evolution": {},
      "profile": {
        "height": "2.1 m",
        "weight": "198 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/244.png",
        "thumbnail": "src/assets/thumbnails/244.png",
        "hires": "src/assets/hires/244.png"
      }
    },
    {
      "id": 245,
      "name": {
        "english": "Suicune",
        "japanese": "スイクン",
        "chinese": "水君",
        "french": "Suicune"
      },
      "type": ["Water"],
      "base": {
        "HP": 100,
        "Attack": 75,
        "Defense": 115,
        "Sp. Attack": 90,
        "Sp. Defense": 115,
        "Speed": 85
      },
      "species": "Aurora Pokémon",
      "description": "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "187 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/245.png",
        "thumbnail": "src/assets/thumbnails/245.png",
        "hires": "src/assets/hires/245.png"
      }
    },
    {
      "id": 246,
      "name": {
        "english": "Larvitar",
        "japanese": "ヨーギラス",
        "chinese": "幼基拉斯",
        "french": "Embrylex"
      },
      "type": ["Rock", "Ground"],
      "base": {
        "HP": 50,
        "Attack": 64,
        "Defense": 50,
        "Sp. Attack": 45,
        "Sp. Defense": 50,
        "Speed": 41
      },
      "species": "Rock Skin Pokémon",
      "description": "Raised on nutrients it finds in the dirt, it eats roughly a mountain’s worth of dirt before it becomes a pupa.",
      "evolution": { "next": [["247", "Level 30"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "72 kg",
        "egg": ["Monster"],
        "ability": [
          ["Guts", "false"],
          ["Sand Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/246.png",
        "thumbnail": "src/assets/thumbnails/246.png",
        "hires": "src/assets/hires/246.png"
      }
    },
    {
      "id": 247,
      "name": {
        "english": "Pupitar",
        "japanese": "サナギラス",
        "chinese": "沙基拉斯",
        "french": "Ymphect"
      },
      "type": ["Rock", "Ground"],
      "base": {
        "HP": 70,
        "Attack": 84,
        "Defense": 70,
        "Sp. Attack": 65,
        "Sp. Defense": 70,
        "Speed": 51
      },
      "species": "Hard Shell Pokémon",
      "description": "This dangerous pupa thrashes about. Its shell is as hard as bedrock, containing its gradually forming new body within.",
      "evolution": { "prev": ["246", "Level 30"], "next": [["248", "Level 55"]] },
      "profile": {
        "height": "1.2 m",
        "weight": "152 kg",
        "egg": ["Monster"],
        "ability": [["Shed Skin", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/247.png",
        "thumbnail": "src/assets/thumbnails/247.png",
        "hires": "src/assets/hires/247.png"
      }
    },
    {
      "id": 248,
      "name": {
        "english": "Tyranitar",
        "japanese": "バンギラス",
        "chinese": "班基拉斯",
        "french": "Tyranocif"
      },
      "type": ["Rock", "Dark"],
      "base": {
        "HP": 100,
        "Attack": 134,
        "Defense": 110,
        "Sp. Attack": 95,
        "Sp. Defense": 100,
        "Speed": 61
      },
      "species": "Armor Pokémon",
      "description": "This Pokémon is a mobile disaster, leaving mountains crumbled and houses destroyed in its wake.",
      "evolution": { "prev": ["247", "Level 55"] },
      "profile": {
        "height": "2 m",
        "weight": "202 kg",
        "egg": ["Monster"],
        "ability": [
          ["Sand Stream", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/248.png",
        "thumbnail": "src/assets/thumbnails/248.png",
        "hires": "src/assets/hires/248.png"
      }
    },
    {
      "id": 249,
      "name": {
        "english": "Lugia",
        "japanese": "ルギア",
        "chinese": "洛奇亚",
        "french": "Lugia"
      },
      "type": ["Psychic", "Flying"],
      "base": {
        "HP": 106,
        "Attack": 90,
        "Defense": 130,
        "Sp. Attack": 90,
        "Sp. Defense": 154,
        "Speed": 110
      },
      "species": "Diving Pokémon",
      "description": "Lugia’s wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
      "evolution": {},
      "profile": {
        "height": "5.2 m",
        "weight": "216 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Multiscale", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/249.png",
        "thumbnail": "src/assets/thumbnails/249.png",
        "hires": "src/assets/hires/249.png"
      }
    },
    {
      "id": 250,
      "name": {
        "english": "Ho-Oh",
        "japanese": "ホウオウ",
        "chinese": "凤王",
        "french": "Ho-Oh"
      },
      "type": ["Fire", "Flying"],
      "base": {
        "HP": 106,
        "Attack": 130,
        "Defense": 90,
        "Sp. Attack": 110,
        "Sp. Defense": 154,
        "Speed": 90
      },
      "species": "Rainbow Pokémon",
      "description": "Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
      "evolution": {},
      "profile": {
        "height": "3.8 m",
        "weight": "199 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/250.png",
        "thumbnail": "src/assets/thumbnails/250.png",
        "hires": "src/assets/hires/250.png"
      }
    },
    {
      "id": 251,
      "name": {
        "english": "Celebi",
        "japanese": "セレビィ",
        "chinese": "时拉比",
        "french": "Celebi"
      },
      "type": ["Psychic", "Grass"],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 100,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 100
      },
      "species": "Time Travel Pokémon",
      "description": "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
      "evolution": {},
      "profile": {
        "height": "0.6 m",
        "weight": "5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Natural Cure", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/251.png",
        "thumbnail": "src/assets/thumbnails/251.png",
        "hires": "src/assets/hires/251.png"
      }
    },
    {
      "id": 252,
      "name": {
        "english": "Treecko",
        "japanese": "キモリ",
        "chinese": "木守宫",
        "french": "Arcko"
      },
      "type": ["Grass"],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 35,
        "Sp. Attack": 65,
        "Sp. Defense": 55,
        "Speed": 70
      },
      "species": "Wood Gecko Pokémon",
      "description": "Treecko is cool, calm, and collected—it never panics under any situation. If a bigger foe were to glare at this Pokémon, it would glare right back without conceding an inch of ground.",
      "evolution": { "next": [["253", "Level 16"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "5 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Overgrow", "false"],
          ["Unburden", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/252.png",
        "thumbnail": "src/assets/thumbnails/252.png",
        "hires": "src/assets/hires/252.png"
      }
    },
    {
      "id": 253,
      "name": {
        "english": "Grovyle",
        "japanese": "ジュプトル",
        "chinese": "森林蜥蜴",
        "french": "Massko"
      },
      "type": ["Grass"],
      "base": {
        "HP": 50,
        "Attack": 65,
        "Defense": 45,
        "Sp. Attack": 85,
        "Sp. Defense": 65,
        "Speed": 95
      },
      "species": "Wood Gecko Pokémon",
      "description": "This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.",
      "evolution": { "prev": ["252", "Level 16"], "next": [["254", "Level 36"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "21.6 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Overgrow", "false"],
          ["Unburden", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/253.png",
        "thumbnail": "src/assets/thumbnails/253.png",
        "hires": "src/assets/hires/253.png"
      }
    },
    {
      "id": 254,
      "name": {
        "english": "Sceptile",
        "japanese": "ジュカイン",
        "chinese": "蜥蜴王",
        "french": "Jungko"
      },
      "type": ["Grass"],
      "base": {
        "HP": 70,
        "Attack": 85,
        "Defense": 65,
        "Sp. Attack": 105,
        "Sp. Defense": 85,
        "Speed": 120
      },
      "species": "Forest Pokémon",
      "description": "Sceptile has seeds growing on its back. They are said to be bursting with nutrients that revitalize trees. This Pokémon raises the trees in a forest with loving care.",
      "evolution": { "prev": ["253", "Level 36"] },
      "profile": {
        "height": "1.7 m",
        "weight": "52.2 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Overgrow", "false"],
          ["Unburden", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/254.png",
        "thumbnail": "src/assets/thumbnails/254.png",
        "hires": "src/assets/hires/254.png"
      }
    },
    {
      "id": 255,
      "name": {
        "english": "Torchic",
        "japanese": "アチャモ",
        "chinese": "火稚鸡",
        "french": "Poussifeu"
      },
      "type": ["Fire"],
      "base": {
        "HP": 45,
        "Attack": 60,
        "Defense": 40,
        "Sp. Attack": 70,
        "Sp. Defense": 50,
        "Speed": 45
      },
      "species": "Chick Pokémon",
      "description": "Torchic has a place inside its body where it keeps its flame. Give it a hug—it will be glowing with warmth. This Pokémon is covered all over by a fluffy coat of down.",
      "evolution": { "next": [["256", "Level 16"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "2.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Speed Boost", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/255.png",
        "thumbnail": "src/assets/thumbnails/255.png",
        "hires": "src/assets/hires/255.png"
      }
    },
    {
      "id": 256,
      "name": {
        "english": "Combusken",
        "japanese": "ワカシャモ",
        "chinese": "力壮鸡",
        "french": "Galifeu"
      },
      "type": ["Fire", "Fighting"],
      "base": {
        "HP": 60,
        "Attack": 85,
        "Defense": 60,
        "Sp. Attack": 85,
        "Sp. Defense": 60,
        "Speed": 55
      },
      "species": "Young Fowl Pokémon",
      "description": "Combusken battles with the intensely hot flames it spews from its beak and with outstandingly destructive kicks. This Pokémon’s cry is very loud and distracting.",
      "evolution": { "prev": ["255", "Level 16"], "next": [["257", "Level 36"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "19.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Speed Boost", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/256.png",
        "thumbnail": "src/assets/thumbnails/256.png",
        "hires": "src/assets/hires/256.png"
      }
    },
    {
      "id": 257,
      "name": {
        "english": "Blaziken",
        "japanese": "バシャーモ",
        "chinese": "火焰鸡",
        "french": "Braségali"
      },
      "type": ["Fire", "Fighting"],
      "base": {
        "HP": 80,
        "Attack": 120,
        "Defense": 70,
        "Sp. Attack": 110,
        "Sp. Defense": 70,
        "Speed": 80
      },
      "species": "Blaze Pokémon",
      "description": "Blaziken has incredibly strong legs—it can easily clear a 30-story building in one leap. This Pokémon’s blazing punches leave its foes scorched and blackened.",
      "evolution": { "prev": ["256", "Level 36"] },
      "profile": {
        "height": "1.9 m",
        "weight": "52 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Speed Boost", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/257.png",
        "thumbnail": "src/assets/thumbnails/257.png",
        "hires": "src/assets/hires/257.png"
      }
    },
    {
      "id": 258,
      "name": {
        "english": "Mudkip",
        "japanese": "ミズゴロウ",
        "chinese": "水跃鱼",
        "french": "Gobou"
      },
      "type": ["Water"],
      "base": {
        "HP": 50,
        "Attack": 70,
        "Defense": 50,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 40
      },
      "species": "Mud Fish Pokémon",
      "description": "In water, Mudkip breathes using the gills on its cheeks. If it is faced with a tight situation in battle, this Pokémon will unleash its amazing power—it can crush rocks bigger than itself.",
      "evolution": { "next": [["259", "Level 16"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "7.6 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Damp", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/258.png",
        "thumbnail": "src/assets/thumbnails/258.png",
        "hires": "src/assets/hires/258.png"
      }
    },
    {
      "id": 259,
      "name": {
        "english": "Marshtomp",
        "japanese": "ヌマクロー",
        "chinese": "沼跃鱼",
        "french": "Flobio"
      },
      "type": ["Water", "Ground"],
      "base": {
        "HP": 70,
        "Attack": 85,
        "Defense": 70,
        "Sp. Attack": 60,
        "Sp. Defense": 70,
        "Speed": 50
      },
      "species": "Mud Fish Pokémon",
      "description": "Marshtomp is much faster at traveling through mud than it is at swimming. This Pokémon’s hindquarters exhibit obvious development, giving it the ability to walk on just its hind legs.",
      "evolution": { "prev": ["258", "Level 16"], "next": [["260", "Level 36"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "28 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Damp", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/259.png",
        "thumbnail": "src/assets/thumbnails/259.png",
        "hires": "src/assets/hires/259.png"
      }
    },
    {
      "id": 260,
      "name": {
        "english": "Swampert",
        "japanese": "ラグラージ",
        "chinese": "巨沼怪",
        "french": "Laggron"
      },
      "type": ["Water", "Ground"],
      "base": {
        "HP": 100,
        "Attack": 110,
        "Defense": 90,
        "Sp. Attack": 85,
        "Sp. Defense": 90,
        "Speed": 60
      },
      "species": "Mud Fish Pokémon",
      "description": "Swampert predicts storms by sensing subtle differences in the sounds of waves and tidal winds with its fins. If a storm is approaching, it piles up boulders to protect itself.",
      "evolution": { "prev": ["259", "Level 36"] },
      "profile": {
        "height": "1.5 m",
        "weight": "81.9 kg",
        "egg": ["Monster", "Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Damp", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/260.png",
        "thumbnail": "src/assets/thumbnails/260.png",
        "hires": "src/assets/hires/260.png"
      }
    },
    {
      "id": 261,
      "name": {
        "english": "Poochyena",
        "japanese": "ポチエナ",
        "chinese": "土狼犬",
        "french": "Medhyèna"
      },
      "type": ["Dark"],
      "base": {
        "HP": 35,
        "Attack": 55,
        "Defense": 35,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 35
      },
      "species": "Bite Pokémon",
      "description": "Poochyena is an omnivore—it will eat anything. A distinguishing feature is how large its fangs are compared to its body. This Pokémon tries to intimidate its foes by making the hair on its tail bristle out.",
      "evolution": { "next": [["262", "Level 18"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "13.6 kg",
        "egg": ["Field"],
        "ability": [
          ["Run Away", "false"],
          ["Quick Feet", "false"],
          ["Rattled", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/261.png",
        "thumbnail": "src/assets/thumbnails/261.png",
        "hires": "src/assets/hires/261.png"
      }
    },
    {
      "id": 262,
      "name": {
        "english": "Mightyena",
        "japanese": "グラエナ",
        "chinese": "大狼犬",
        "french": "Grahyèna"
      },
      "type": ["Dark"],
      "base": {
        "HP": 70,
        "Attack": 90,
        "Defense": 70,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 70
      },
      "species": "Bite Pokémon",
      "description": "Mightyena travel and act as a pack in the wild. The memory of its life in the wild compels the Pokémon to obey only those Trainers that it recognizes to possess superior skill.",
      "evolution": { "prev": ["261", "Level 18"] },
      "profile": {
        "height": "1 m",
        "weight": "37 kg",
        "egg": ["Field"],
        "ability": [
          ["Intimidate", "false"],
          ["Quick Feet", "false"],
          ["Moxie", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/262.png",
        "thumbnail": "src/assets/thumbnails/262.png",
        "hires": "src/assets/hires/262.png"
      }
    },
    {
      "id": 263,
      "name": {
        "english": "Zigzagoon",
        "japanese": "ジグザグマ",
        "chinese": "蛇纹熊",
        "french": "Zigzaton"
      },
      "type": ["Normal"],
      "base": {
        "HP": 38,
        "Attack": 30,
        "Defense": 41,
        "Sp. Attack": 30,
        "Sp. Defense": 41,
        "Speed": 60
      },
      "species": "Tiny Raccoon Pokémon",
      "description": "The hair on Zigzagoon’s back is bristly. It rubs the hard back hair against trees to leave its territorial markings. This Pokémon may play dead to fool foes in battle.",
      "evolution": { "next": [["264", "Level 20"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "17.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Pickup", "false"],
          ["Gluttony", "false"],
          ["Quick Feet", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/263.png",
        "thumbnail": "src/assets/thumbnails/263.png",
        "hires": "src/assets/hires/263.png"
      }
    },
    {
      "id": 264,
      "name": {
        "english": "Linoone",
        "japanese": "マッスグマ",
        "chinese": "直冲熊",
        "french": "Linéon"
      },
      "type": ["Normal"],
      "base": {
        "HP": 78,
        "Attack": 70,
        "Defense": 61,
        "Sp. Attack": 50,
        "Sp. Defense": 61,
        "Speed": 100
      },
      "species": "Rushing Pokémon",
      "description": "When hunting, Linoone will make a beeline straight for the prey at a full run. While this Pokémon is capable of topping 60 mph, it has to come to a screeching halt before it can turn.",
      "evolution": {
        "prev": ["263", "Level 20"],
        "next": [["862", "Level 35, Nighttime"]]
      },
      "profile": {
        "height": "0.5 m",
        "weight": "32.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Pickup", "false"],
          ["Gluttony", "false"],
          ["Quick Feet", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/264.png",
        "thumbnail": "src/assets/thumbnails/264.png",
        "hires": "src/assets/hires/264.png"
      }
    },
    {
      "id": 265,
      "name": {
        "english": "Wurmple",
        "japanese": "ケムッソ",
        "chinese": "刺尾虫",
        "french": "Chenipotte"
      },
      "type": ["Bug"],
      "base": {
        "HP": 45,
        "Attack": 45,
        "Defense": 35,
        "Sp. Attack": 20,
        "Sp. Defense": 30,
        "Speed": 20
      },
      "species": "Worm Pokémon",
      "description": "Wurmple is targeted by Swellow as prey. This Pokémon will try to resist by pointing the spikes on its rear at the attacking predator. It will weaken the foe by leaking poison from the spikes.",
      "evolution": {
        "next": [
          ["266", "Level 7, random based on personality"],
          ["268", "Level 7, random based on personality"]
        ]
      },
      "profile": {
        "height": "0.3 m",
        "weight": "3.6 kg",
        "egg": ["Bug"],
        "ability": [
          ["Shield Dust", "false"],
          ["Run Away", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/265.png",
        "thumbnail": "src/assets/thumbnails/265.png",
        "hires": "src/assets/hires/265.png"
      }
    },
    {
      "id": 266,
      "name": {
        "english": "Silcoon",
        "japanese": "カラサリス",
        "chinese": "甲壳茧",
        "french": "Armulys"
      },
      "type": ["Bug"],
      "base": {
        "HP": 50,
        "Attack": 35,
        "Defense": 55,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 15
      },
      "species": "Cocoon Pokémon",
      "description": "Silcoon was thought to endure hunger and not consume anything before its evolution. However, it is now thought that this Pokémon slakes its thirst by drinking rainwater that collects on its silk.",
      "evolution": {
        "prev": ["265", "Level 7, random based on personality"],
        "next": [["267", "Level 10"]]
      },
      "profile": {
        "height": "0.6 m",
        "weight": "10 kg",
        "egg": ["Bug"],
        "ability": [["Shed Skin", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/266.png",
        "thumbnail": "src/assets/thumbnails/266.png",
        "hires": "src/assets/hires/266.png"
      }
    },
    {
      "id": 267,
      "name": {
        "english": "Beautifly",
        "japanese": "アゲハント",
        "chinese": "狩猎凤蝶",
        "french": "Charmillon"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 60,
        "Attack": 70,
        "Defense": 50,
        "Sp. Attack": 100,
        "Sp. Defense": 50,
        "Speed": 65
      },
      "species": "Butterfly Pokémon",
      "description": "Beautifly has a long mouth like a coiled needle, which is very convenient for collecting pollen from flowers. This Pokémon rides the spring winds as it flits around gathering pollen.",
      "evolution": { "prev": ["266", "Level 10"] },
      "profile": {
        "height": "1 m",
        "weight": "28.4 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Rivalry", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/267.png",
        "thumbnail": "src/assets/thumbnails/267.png",
        "hires": "src/assets/hires/267.png"
      }
    },
    {
      "id": 268,
      "name": {
        "english": "Cascoon",
        "japanese": "マユルド",
        "chinese": "盾甲茧",
        "french": "Blindalys"
      },
      "type": ["Bug"],
      "base": {
        "HP": 50,
        "Attack": 35,
        "Defense": 55,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 15
      },
      "species": "Cocoon Pokémon",
      "description": "If it is attacked, Cascoon remains motionless however badly it may be hurt. It does so because if it were to move, its body would be weak upon evolution. This Pokémon will also not forget the pain it endured.",
      "evolution": {
        "prev": ["265", "Level 7, random based on personality"],
        "next": [["269", "Level 10"]]
      },
      "profile": {
        "height": "0.7 m",
        "weight": "11.5 kg",
        "egg": ["Bug"],
        "ability": [["Shed Skin", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/268.png",
        "thumbnail": "src/assets/thumbnails/268.png",
        "hires": "src/assets/hires/268.png"
      }
    },
    {
      "id": 269,
      "name": {
        "english": "Dustox",
        "japanese": "ドクケイル",
        "chinese": "毒粉蛾",
        "french": "Papinox"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 60,
        "Attack": 50,
        "Defense": 70,
        "Sp. Attack": 50,
        "Sp. Defense": 90,
        "Speed": 65
      },
      "species": "Poison Moth Pokémon",
      "description": "When Dustox flaps its wings, a fine dust is scattered all over. This dust is actually a powerful poison that will even make a pro wrestler sick. This Pokémon searches for food using its antennae like radar.",
      "evolution": { "prev": ["265", "Level 10"] },
      "profile": {
        "height": "1.2 m",
        "weight": "31.6 kg",
        "egg": ["Bug"],
        "ability": [
          ["Shield Dust", "false"],
          ["Compound Eyes", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/269.png",
        "thumbnail": "src/assets/thumbnails/269.png",
        "hires": "src/assets/hires/269.png"
      }
    },
    {
      "id": 270,
      "name": {
        "english": "Lotad",
        "japanese": "ハスボー",
        "chinese": "莲叶童子",
        "french": "Nénupiot"
      },
      "type": ["Water", "Grass"],
      "base": {
        "HP": 40,
        "Attack": 30,
        "Defense": 30,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 30
      },
      "species": "Water Weed Pokémon",
      "description": "Lotad is said to have dwelled on land before. However, this Pokémon is thought to have returned to water because the leaf on its head grew large and heavy. It now lives by floating atop the water.",
      "evolution": { "next": [["271", "Level 14"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "2.6 kg",
        "egg": ["Water 1", "Grass"],
        "ability": [
          ["Swift Swim", "false"],
          ["Rain Dish", "false"],
          ["Own Tempo", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/270.png",
        "thumbnail": "src/assets/thumbnails/270.png",
        "hires": "src/assets/hires/270.png"
      }
    },
    {
      "id": 271,
      "name": {
        "english": "Lombre",
        "japanese": "ハスブレロ",
        "chinese": "莲帽小童",
        "french": "Lombre"
      },
      "type": ["Water", "Grass"],
      "base": {
        "HP": 60,
        "Attack": 50,
        "Defense": 50,
        "Sp. Attack": 60,
        "Sp. Defense": 70,
        "Speed": 50
      },
      "species": "Jolly Pokémon",
      "description": "Lombre’s entire body is covered by a slippery, slimy film. It feels horribly unpleasant to be touched by this Pokémon’s hands. Lombre is often mistaken for a human child.",
      "evolution": {
        "prev": ["270", "Level 14"],
        "next": [["272", "use Water Stone"]]
      },
      "profile": {
        "height": "1.2 m",
        "weight": "32.5 kg",
        "egg": ["Water 1", "Grass"],
        "ability": [
          ["Swift Swim", "false"],
          ["Rain Dish", "false"],
          ["Own Tempo", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/271.png",
        "thumbnail": "src/assets/thumbnails/271.png",
        "hires": "src/assets/hires/271.png"
      }
    },
    {
      "id": 272,
      "name": {
        "english": "Ludicolo",
        "japanese": "ルンパッパ",
        "chinese": "乐天河童",
        "french": "Ludicolo"
      },
      "type": ["Water", "Grass"],
      "base": {
        "HP": 80,
        "Attack": 70,
        "Defense": 70,
        "Sp. Attack": 90,
        "Sp. Defense": 100,
        "Speed": 70
      },
      "species": "Carefree Pokémon",
      "description": "Upon hearing an upbeat and cheerful rhythm, the cells in Ludicolo’s body become very energetic and active. Even in battle, this Pokémon will exhibit an amazing amount of power.",
      "evolution": { "prev": ["271", "use Water Stone"] },
      "profile": {
        "height": "1.5 m",
        "weight": "55 kg",
        "egg": ["Water 1", "Grass"],
        "ability": [
          ["Swift Swim", "false"],
          ["Rain Dish", "false"],
          ["Own Tempo", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/272.png",
        "thumbnail": "src/assets/thumbnails/272.png",
        "hires": "src/assets/hires/272.png"
      }
    },
    {
      "id": 273,
      "name": {
        "english": "Seedot",
        "japanese": "タネボー",
        "chinese": "橡实果",
        "french": "Grainipiot"
      },
      "type": ["Grass"],
      "base": {
        "HP": 40,
        "Attack": 40,
        "Defense": 50,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 30
      },
      "species": "Acorn Pokémon",
      "description": "Seedot looks exactly like an acorn when it is dangling from a tree branch. It startles other Pokémon by suddenly moving. This Pokémon polishes its body once a day using leaves.",
      "evolution": { "next": [["274", "Level 14"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "4 kg",
        "egg": ["Field", "Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Early Bird", "false"],
          ["Pickpocket", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/273.png",
        "thumbnail": "src/assets/thumbnails/273.png",
        "hires": "src/assets/hires/273.png"
      }
    },
    {
      "id": 274,
      "name": {
        "english": "Nuzleaf",
        "japanese": "コノハナ",
        "chinese": "长鼻叶",
        "french": "Pifeuil"
      },
      "type": ["Grass", "Dark"],
      "base": {
        "HP": 70,
        "Attack": 70,
        "Defense": 40,
        "Sp. Attack": 60,
        "Sp. Defense": 40,
        "Speed": 60
      },
      "species": "Wily Pokémon",
      "description": "This Pokémon pulls out the leaf on its head and makes a flute with it. The sound of Nuzleaf’s flute strikes fear and uncertainty in the hearts of people lost in a forest.",
      "evolution": {
        "prev": ["273", "Level 14"],
        "next": [["275", "use Leaf Stone"]]
      },
      "profile": {
        "height": "1 m",
        "weight": "28 kg",
        "egg": ["Field", "Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Early Bird", "false"],
          ["Pickpocket", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/274.png",
        "thumbnail": "src/assets/thumbnails/274.png",
        "hires": "src/assets/hires/274.png"
      }
    },
    {
      "id": 275,
      "name": {
        "english": "Shiftry",
        "japanese": "ダーテング",
        "chinese": "狡猾天狗",
        "french": "Tengalice"
      },
      "type": ["Grass", "Dark"],
      "base": {
        "HP": 90,
        "Attack": 100,
        "Defense": 60,
        "Sp. Attack": 90,
        "Sp. Defense": 60,
        "Speed": 80
      },
      "species": "Wicked Pokémon",
      "description": "Shiftry’s large fans generate awesome gusts of wind at a speed close to 100 feet per second. The whipped-up wind blows anything away. This Pokémon chooses to live quietly deep in forests.",
      "evolution": { "prev": ["274", "use Leaf Stone"] },
      "profile": {
        "height": "1.3 m",
        "weight": "59.6 kg",
        "egg": ["Field", "Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Early Bird", "false"],
          ["Pickpocket", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/275.png",
        "thumbnail": "src/assets/thumbnails/275.png",
        "hires": "src/assets/hires/275.png"
      }
    },
    {
      "id": 276,
      "name": {
        "english": "Taillow",
        "japanese": "スバメ",
        "chinese": "傲骨燕",
        "french": "Nirondelle"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 40,
        "Attack": 55,
        "Defense": 30,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 85
      },
      "species": "Tiny Swallow Pokémon",
      "description": "Taillow is young—it has only just left its nest. As a result, it sometimes becomes lonesome and cries at night. This Pokémon feeds on Wurmple that live in forests.",
      "evolution": { "next": [["277", "Level 22"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "2.3 kg",
        "egg": ["Flying"],
        "ability": [
          ["Guts", "false"],
          ["Scrappy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/276.png",
        "thumbnail": "src/assets/thumbnails/276.png",
        "hires": "src/assets/hires/276.png"
      }
    },
    {
      "id": 277,
      "name": {
        "english": "Swellow",
        "japanese": "オオスバメ",
        "chinese": "大王燕",
        "french": "Hélédelle"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 60,
        "Attack": 85,
        "Defense": 60,
        "Sp. Attack": 75,
        "Sp. Defense": 50,
        "Speed": 125
      },
      "species": "Swallow Pokémon",
      "description": "Swellow is very conscientious about the upkeep of its glossy wings. Once two Swellow are gathered, they diligently take care of cleaning each other’s wings.",
      "evolution": { "prev": ["276", "Level 22"] },
      "profile": {
        "height": "0.7 m",
        "weight": "19.8 kg",
        "egg": ["Flying"],
        "ability": [
          ["Guts", "false"],
          ["Scrappy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/277.png",
        "thumbnail": "src/assets/thumbnails/277.png",
        "hires": "src/assets/hires/277.png"
      }
    },
    {
      "id": 278,
      "name": {
        "english": "Wingull",
        "japanese": "キャモメ",
        "chinese": "长翅鸥",
        "french": "Goélise"
      },
      "type": ["Water", "Flying"],
      "base": {
        "HP": 40,
        "Attack": 30,
        "Defense": 30,
        "Sp. Attack": 55,
        "Sp. Defense": 30,
        "Speed": 85
      },
      "species": "Seagull Pokémon",
      "description": "It builds nests in cliffs by the sea. It circles the skies above the ocean looking for its favorite food—Wishiwashi.",
      "evolution": { "next": [["279", "Level 25"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "9.5 kg",
        "egg": ["Water 1", "Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Hydration", "false"],
          ["Rain Dish", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/278.png",
        "thumbnail": "src/assets/thumbnails/278.png",
        "hires": "src/assets/hires/278.png"
      }
    },
    {
      "id": 279,
      "name": {
        "english": "Pelipper",
        "japanese": "ペリッパー",
        "chinese": "大嘴鸥",
        "french": "Bekipan"
      },
      "type": ["Water", "Flying"],
      "base": {
        "HP": 60,
        "Attack": 50,
        "Defense": 100,
        "Sp. Attack": 95,
        "Sp. Defense": 70,
        "Speed": 65
      },
      "species": "Water Bird Pokémon",
      "description": "It scoops up Wishiwashi in its huge beak and swallows them whole. It can devour more than 30 at one go!",
      "evolution": { "prev": ["278", "Level 25"] },
      "profile": {
        "height": "1.2 m",
        "weight": "28 kg",
        "egg": ["Water 1", "Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Drizzle", "false"],
          ["Rain Dish", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/279.png",
        "thumbnail": "src/assets/thumbnails/279.png",
        "hires": "src/assets/hires/279.png"
      }
    },
    {
      "id": 280,
      "name": {
        "english": "Ralts",
        "japanese": "ラルトス",
        "chinese": "拉鲁拉丝",
        "french": "Tarsal"
      },
      "type": ["Psychic", "Fairy"],
      "base": {
        "HP": 28,
        "Attack": 25,
        "Defense": 25,
        "Sp. Attack": 45,
        "Sp. Defense": 35,
        "Speed": 40
      },
      "species": "Feeling Pokémon",
      "description": "Ralts has the ability to sense the emotions of people. If its Trainer is in a cheerful mood, this Pokémon grows cheerful and joyous in the same way.",
      "evolution": { "next": [["281", "Level 20"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "6.6 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Synchronize", "false"],
          ["Trace", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/280.png",
        "thumbnail": "src/assets/thumbnails/280.png",
        "hires": "src/assets/hires/280.png"
      }
    },
    {
      "id": 281,
      "name": {
        "english": "Kirlia",
        "japanese": "キルリア",
        "chinese": "奇鲁莉安",
        "french": "Kirlia"
      },
      "type": ["Psychic", "Fairy"],
      "base": {
        "HP": 38,
        "Attack": 35,
        "Defense": 35,
        "Sp. Attack": 65,
        "Sp. Defense": 55,
        "Speed": 50
      },
      "species": "Emotion Pokémon",
      "description": "Kirlia uses the horns on its head to amplify its psychokinetic power. When the Pokémon uses its power, the air around it becomes distorted, creating mirages of nonexistent scenery.",
      "evolution": { "prev": ["280", "Level 20"], "next": [["282", "Level 30"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "20.2 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Synchronize", "false"],
          ["Trace", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/281.png",
        "thumbnail": "src/assets/thumbnails/281.png",
        "hires": "src/assets/hires/281.png"
      }
    },
    {
      "id": 282,
      "name": {
        "english": "Gardevoir",
        "japanese": "サーナイト",
        "chinese": "沙奈朵",
        "french": "Gardevoir"
      },
      "type": ["Psychic", "Fairy"],
      "base": {
        "HP": 68,
        "Attack": 65,
        "Defense": 65,
        "Sp. Attack": 125,
        "Sp. Defense": 115,
        "Speed": 80
      },
      "species": "Embrace Pokémon",
      "description": "Gardevoir has the psychokinetic power to distort the dimensions and create a small black hole. This Pokémon will try to protect its Trainer even at the risk of its own life.",
      "evolution": { "prev": ["281", "Level 30"] },
      "profile": {
        "height": "1.6 m",
        "weight": "48.4 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Synchronize", "false"],
          ["Trace", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/282.png",
        "thumbnail": "src/assets/thumbnails/282.png",
        "hires": "src/assets/hires/282.png"
      }
    },
    {
      "id": 283,
      "name": {
        "english": "Surskit",
        "japanese": "アメタマ",
        "chinese": "溜溜糖球",
        "french": "Arakdo"
      },
      "type": ["Bug", "Water"],
      "base": {
        "HP": 40,
        "Attack": 30,
        "Defense": 32,
        "Sp. Attack": 50,
        "Sp. Defense": 52,
        "Speed": 65
      },
      "species": "Pond Skater Pokémon",
      "description": "It lives in ponds and marshes that feature lots of plant life. It often fights with Dewpider, whose habitat and diet are similar.",
      "evolution": { "next": [["284", "Level 22"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "1.7 kg",
        "egg": ["Water 1", "Bug"],
        "ability": [
          ["Swift Swim", "false"],
          ["Rain Dish", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/283.png",
        "thumbnail": "src/assets/thumbnails/283.png",
        "hires": "src/assets/hires/283.png"
      }
    },
    {
      "id": 284,
      "name": {
        "english": "Masquerain",
        "japanese": "アメモース",
        "chinese": "雨翅蛾",
        "french": "Maskadra"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 70,
        "Attack": 60,
        "Defense": 62,
        "Sp. Attack": 100,
        "Sp. Defense": 82,
        "Speed": 80
      },
      "species": "Eyeball Pokémon",
      "description": "Its thin, winglike antennae are highly absorbent. It waits out rainy days in tree hollows.",
      "evolution": { "prev": ["283", "Level 22"] },
      "profile": {
        "height": "0.8 m",
        "weight": "3.6 kg",
        "egg": ["Water 1", "Bug"],
        "ability": [
          ["Intimidate", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/284.png",
        "thumbnail": "src/assets/thumbnails/284.png",
        "hires": "src/assets/hires/284.png"
      }
    },
    {
      "id": 285,
      "name": {
        "english": "Shroomish",
        "japanese": "キノココ",
        "chinese": "蘑蘑菇",
        "french": "Balignon"
      },
      "type": ["Grass"],
      "base": {
        "HP": 60,
        "Attack": 40,
        "Defense": 60,
        "Sp. Attack": 40,
        "Sp. Defense": 60,
        "Speed": 35
      },
      "species": "Mushroom Pokémon",
      "description": "If Shroomish senses danger, it shakes its body and scatters spores from the top of its head. This Pokémon’s spores are so toxic, they make trees and weeds wilt.",
      "evolution": { "next": [["286", "Level 23"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "4.5 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [
          ["Effect Spore", "false"],
          ["Poison Heal", "false"],
          ["Quick Feet", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/285.png",
        "thumbnail": "src/assets/thumbnails/285.png",
        "hires": "src/assets/hires/285.png"
      }
    },
    {
      "id": 286,
      "name": {
        "english": "Breloom",
        "japanese": "キノガッサ",
        "chinese": "斗笠菇",
        "french": "Chapignon"
      },
      "type": ["Grass", "Fighting"],
      "base": {
        "HP": 60,
        "Attack": 130,
        "Defense": 80,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 70
      },
      "species": "Mushroom Pokémon",
      "description": "The seeds ringing Breloom’s tail are made of hardened toxic spores. It is horrible to eat the seeds. Just taking a bite of this Pokémon’s seed will cause your stomach to rumble.",
      "evolution": { "prev": ["285", "Level 23"] },
      "profile": {
        "height": "1.2 m",
        "weight": "39.2 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [
          ["Effect Spore", "false"],
          ["Poison Heal", "false"],
          ["Technician", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/286.png",
        "thumbnail": "src/assets/thumbnails/286.png",
        "hires": "src/assets/hires/286.png"
      }
    },
    {
      "id": 287,
      "name": {
        "english": "Slakoth",
        "japanese": "ナマケロ",
        "chinese": "懒人獭",
        "french": "Parecool"
      },
      "type": ["Normal"],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 60,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 30
      },
      "species": "Slacker Pokémon",
      "description": "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless. It is rare to see this Pokémon in motion.",
      "evolution": { "next": [["288", "Level 18"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "24 kg",
        "egg": ["Field"],
        "ability": [["Truant", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/287.png",
        "thumbnail": "src/assets/thumbnails/287.png",
        "hires": "src/assets/hires/287.png"
      }
    },
    {
      "id": 288,
      "name": {
        "english": "Vigoroth",
        "japanese": "ヤルキモノ",
        "chinese": "过动猿",
        "french": "Vigoroth"
      },
      "type": ["Normal"],
      "base": {
        "HP": 80,
        "Attack": 80,
        "Defense": 80,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 90
      },
      "species": "Wild Monkey Pokémon",
      "description": "Vigoroth is simply incapable of remaining still. Even when it tries to sleep, the blood in its veins grows agitated, compelling this Pokémon to run wild throughout the jungle before it can settle down.",
      "evolution": { "prev": ["287", "Level 18"], "next": [["289", "Level 36"]] },
      "profile": {
        "height": "1.4 m",
        "weight": "46.5 kg",
        "egg": ["Field"],
        "ability": [["Vital Spirit", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/288.png",
        "thumbnail": "src/assets/thumbnails/288.png",
        "hires": "src/assets/hires/288.png"
      }
    },
    {
      "id": 289,
      "name": {
        "english": "Slaking",
        "japanese": "ケッキング",
        "chinese": "请假王",
        "french": "Monaflèmit"
      },
      "type": ["Normal"],
      "base": {
        "HP": 150,
        "Attack": 160,
        "Defense": 100,
        "Sp. Attack": 95,
        "Sp. Defense": 65,
        "Speed": 100
      },
      "species": "Lazy Pokémon",
      "description": "Wherever Slaking live, rings of over a yard in diameter appear in grassy fields. They are made by the Pokémon as it eats all the grass within reach while lying prone on the ground.",
      "evolution": { "prev": ["288", "Level 36"] },
      "profile": {
        "height": "2 m",
        "weight": "130.5 kg",
        "egg": ["Field"],
        "ability": [["Truant", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/289.png",
        "thumbnail": "src/assets/thumbnails/289.png",
        "hires": "src/assets/hires/289.png"
      }
    },
    {
      "id": 290,
      "name": {
        "english": "Nincada",
        "japanese": "ツチニン",
        "chinese": "土居忍士",
        "french": "Ningale"
      },
      "type": ["Bug", "Ground"],
      "base": {
        "HP": 31,
        "Attack": 45,
        "Defense": 90,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 40
      },
      "species": "Trainee Pokémon",
      "description": "Nincada lives underground. It uses its sharp claws to carve the roots of trees and absorb moisture and nutrients. This Pokémon can’t withstand bright sunlight so avoids it.",
      "evolution": {
        "next": [
          ["291", "Level 20"],
          ["292", "Level 20, empty spot in party, Pokéball in bag"]
        ]
      },
      "profile": {
        "height": "0.5 m",
        "weight": "5.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Compound Eyes", "false"],
          ["Run Away", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/290.png",
        "thumbnail": "src/assets/thumbnails/290.png",
        "hires": "src/assets/hires/290.png"
      }
    },
    {
      "id": 291,
      "name": {
        "english": "Ninjask",
        "japanese": "テッカニン",
        "chinese": "铁面忍者",
        "french": "Ninjask"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 61,
        "Attack": 90,
        "Defense": 45,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 160
      },
      "species": "Ninja Pokémon",
      "description": "If Ninjask is not trained properly, it will refuse to obey the Trainer and cry loudly continuously. Because of this quality, this Pokémon is said to be one that puts the Trainer’s abilities to the test.",
      "evolution": { "prev": ["290", "Level 20"] },
      "profile": {
        "height": "0.8 m",
        "weight": "12 kg",
        "egg": ["Bug"],
        "ability": [
          ["Speed Boost", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/291.png",
        "thumbnail": "src/assets/thumbnails/291.png",
        "hires": "src/assets/hires/291.png"
      }
    },
    {
      "id": 292,
      "name": {
        "english": "Shedinja",
        "japanese": "ヌケニン",
        "chinese": "脱壳忍者",
        "french": "Munja"
      },
      "type": ["Bug", "Ghost"],
      "base": {
        "HP": 1,
        "Attack": 90,
        "Defense": 45,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 40
      },
      "species": "Shed Pokémon",
      "description": "Shedinja is a peculiar Pokémon. It seems to appear unsought in a Poké Ball after a Nincada evolves. This bizarre Pokémon is entirely immobile—it doesn’t even breathe.",
      "evolution": {
        "prev": ["290", "Level 20, empty spot in party, Pokéball in bag"]
      },
      "profile": {
        "height": "0.8 m",
        "weight": "1.2 kg",
        "egg": ["Mineral"],
        "ability": [["Wonder Guard", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/292.png",
        "thumbnail": "src/assets/thumbnails/292.png",
        "hires": "src/assets/hires/292.png"
      }
    },
    {
      "id": 293,
      "name": {
        "english": "Whismur",
        "japanese": "ゴニョニョ",
        "chinese": "咕妞妞",
        "french": "Chuchmur"
      },
      "type": ["Normal"],
      "base": {
        "HP": 64,
        "Attack": 51,
        "Defense": 23,
        "Sp. Attack": 51,
        "Sp. Defense": 23,
        "Speed": 28
      },
      "species": "Whisper Pokémon",
      "description": "Whismur is very timid. If it starts to cry loudly, it becomes startled by its own crying and cries even harder. When it finally stops crying, the Pokémon goes to sleep, all tired out.",
      "evolution": { "next": [["294", "Level 20"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "16.3 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Soundproof", "false"],
          ["Rattled", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/293.png",
        "thumbnail": "src/assets/thumbnails/293.png",
        "hires": "src/assets/hires/293.png"
      }
    },
    {
      "id": 294,
      "name": {
        "english": "Loudred",
        "japanese": "ドゴーム",
        "chinese": "吼爆弹",
        "french": "Ramboum"
      },
      "type": ["Normal"],
      "base": {
        "HP": 84,
        "Attack": 71,
        "Defense": 43,
        "Sp. Attack": 71,
        "Sp. Defense": 43,
        "Speed": 48
      },
      "species": "Big Voice Pokémon",
      "description": "Loudred shouts while stamping its feet. After it finishes shouting, this Pokémon becomes incapable of hearing anything for a while. This is considered to be a weak point.",
      "evolution": { "prev": ["293", "Level 20"], "next": [["295", "Level 40"]] },
      "profile": {
        "height": "1 m",
        "weight": "40.5 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Soundproof", "false"],
          ["Scrappy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/294.png",
        "thumbnail": "src/assets/thumbnails/294.png",
        "hires": "src/assets/hires/294.png"
      }
    },
    {
      "id": 295,
      "name": {
        "english": "Exploud",
        "japanese": "バクオング",
        "chinese": "爆音怪",
        "french": "Brouhabam"
      },
      "type": ["Normal"],
      "base": {
        "HP": 104,
        "Attack": 91,
        "Defense": 63,
        "Sp. Attack": 91,
        "Sp. Defense": 73,
        "Speed": 68
      },
      "species": "Loud Noise Pokémon",
      "description": "Exploud communicates its feelings to the others by emitting whistle-like sounds from the tubes on its body. This Pokémon only raises its voice when it is in battle.",
      "evolution": { "prev": ["294", "Level 40"] },
      "profile": {
        "height": "1.5 m",
        "weight": "84 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Soundproof", "false"],
          ["Scrappy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/295.png",
        "thumbnail": "src/assets/thumbnails/295.png",
        "hires": "src/assets/hires/295.png"
      }
    },
    {
      "id": 296,
      "name": {
        "english": "Makuhita",
        "japanese": "マクノシタ",
        "chinese": "幕下力士",
        "french": "Makuhita"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 72,
        "Attack": 60,
        "Defense": 30,
        "Sp. Attack": 20,
        "Sp. Defense": 30,
        "Speed": 25
      },
      "species": "Guts Pokémon",
      "description": "There’s a rumor of a traditional recipe for stew that Trainers can use to raise strong Makuhita.",
      "evolution": { "next": [["297", "Level 24"]] },
      "profile": {
        "height": "1 m",
        "weight": "86.4 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Thick Fat", "false"],
          ["Guts", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/296.png",
        "thumbnail": "src/assets/thumbnails/296.png",
        "hires": "src/assets/hires/296.png"
      }
    },
    {
      "id": 297,
      "name": {
        "english": "Hariyama",
        "japanese": "ハリテヤマ",
        "chinese": "铁掌力士",
        "french": "Hariyama"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 144,
        "Attack": 120,
        "Defense": 60,
        "Sp. Attack": 40,
        "Sp. Defense": 60,
        "Speed": 50
      },
      "species": "Arm Thrust Pokémon",
      "description": "Hariyama that are big and fat aren’t necessarily strong. There are some small ones that move nimbly and use moves skillfully.",
      "evolution": { "prev": ["296", "Level 24"] },
      "profile": {
        "height": "2.3 m",
        "weight": "253.8 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Thick Fat", "false"],
          ["Guts", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/297.png",
        "thumbnail": "src/assets/thumbnails/297.png",
        "hires": "src/assets/hires/297.png"
      }
    },
    {
      "id": 298,
      "name": {
        "english": "Azurill",
        "japanese": "ルリリ",
        "chinese": "露力丽",
        "french": "Azurill"
      },
      "type": ["Normal", "Fairy"],
      "base": {
        "HP": 50,
        "Attack": 20,
        "Defense": 40,
        "Sp. Attack": 20,
        "Sp. Defense": 40,
        "Speed": 20
      },
      "species": "Polka Dot Pokémon",
      "description": "Azurill’s tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow. Azurill can be seen bouncing and playing on its big, rubbery tail.",
      "evolution": { "next": [["183", "high Friendship"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "2 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Thick Fat", "false"],
          ["Huge Power", "false"],
          ["Sap Sipper", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/298.png",
        "thumbnail": "src/assets/thumbnails/298.png",
        "hires": "src/assets/hires/298.png"
      }
    },
    {
      "id": 299,
      "name": {
        "english": "Nosepass",
        "japanese": "ノズパス",
        "chinese": "朝北鼻",
        "french": "Tarinor"
      },
      "type": ["Rock"],
      "base": {
        "HP": 30,
        "Attack": 45,
        "Defense": 135,
        "Sp. Attack": 45,
        "Sp. Defense": 90,
        "Speed": 30
      },
      "species": "Compass Pokémon",
      "description": "It hunts without twitching a muscle by pulling in its prey with powerful magnetism. But sometimes it pulls natural enemies in close.",
      "evolution": { "next": [["476", "level up in a Magnetic Field area"]] },
      "profile": {
        "height": "1 m",
        "weight": "97 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Sturdy", "false"],
          ["Magnet Pull", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/299.png",
        "thumbnail": "src/assets/thumbnails/299.png",
        "hires": "src/assets/hires/299.png"
      }
    },
    {
      "id": 300,
      "name": {
        "english": "Skitty",
        "japanese": "エネコ",
        "chinese": "向尾喵",
        "french": "Skitty"
      },
      "type": ["Normal"],
      "base": {
        "HP": 50,
        "Attack": 45,
        "Defense": 45,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 50
      },
      "species": "Kitten Pokémon",
      "description": "Skitty is known to chase around playfully after its own tail. In the wild, this Pokémon lives in holes in the trees of forests. It is very popular as a pet because of its adorable looks.",
      "evolution": { "next": [["301", "use Moon Stone"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "11 kg",
        "egg": ["Field", "Fairy"],
        "ability": [
          ["Cute Charm", "false"],
          ["Normalize", "false"],
          ["Wonder Skin", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/300.png",
        "thumbnail": "src/assets/thumbnails/300.png",
        "hires": "src/assets/hires/300.png"
      }
    },
    {
      "id": 301,
      "name": {
        "english": "Delcatty",
        "japanese": "エネコロロ",
        "chinese": "优雅猫",
        "french": "Delcatty"
      },
      "type": ["Normal"],
      "base": {
        "HP": 70,
        "Attack": 65,
        "Defense": 65,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 90
      },
      "species": "Prim Pokémon",
      "description": "Delcatty sleeps anywhere it wants without keeping a permanent nest. If other Pokémon approach it as it sleeps, this Pokémon will never fight—it will just move away somewhere else.",
      "evolution": { "prev": ["300", "use Moon Stone"] },
      "profile": {
        "height": "1.1 m",
        "weight": "32.6 kg",
        "egg": ["Field", "Fairy"],
        "ability": [
          ["Cute Charm", "false"],
          ["Normalize", "false"],
          ["Wonder Skin", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/301.png",
        "thumbnail": "src/assets/thumbnails/301.png",
        "hires": "src/assets/hires/301.png"
      }
    },
    {
      "id": 302,
      "name": {
        "english": "Sableye",
        "japanese": "ヤミラミ",
        "chinese": "勾魂眼",
        "french": "Ténéfix"
      },
      "type": ["Dark", "Ghost"],
      "base": {
        "HP": 50,
        "Attack": 75,
        "Defense": 75,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 50
      },
      "species": "Darkness Pokémon",
      "description": "Materials from gems it has eaten float to the surface of its body and can form an infinite number of patterns among individuals.",
      "evolution": {},
      "profile": {
        "height": "0.5 m",
        "weight": "11 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Keen Eye", "false"],
          ["Stall", "false"],
          ["Prankster", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/302.png",
        "thumbnail": "src/assets/thumbnails/302.png",
        "hires": "src/assets/hires/302.png"
      }
    },
    {
      "id": 303,
      "name": {
        "english": "Mawile",
        "japanese": "クチート",
        "chinese": "大嘴娃",
        "french": "Mysdibule"
      },
      "type": ["Steel", "Fairy"],
      "base": {
        "HP": 50,
        "Attack": 85,
        "Defense": 85,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 50
      },
      "species": "Deceiver Pokémon",
      "description": "It has two mouths. The big jaws on the back of its head can’t taste anything, so that’s the mouth it uses to eat foods it doesn’t like.",
      "evolution": {},
      "profile": {
        "height": "0.6 m",
        "weight": "11.5 kg",
        "egg": ["Field", "Fairy"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Intimidate", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/303.png",
        "thumbnail": "src/assets/thumbnails/303.png",
        "hires": "src/assets/hires/303.png"
      }
    },
    {
      "id": 304,
      "name": {
        "english": "Aron",
        "japanese": "ココドラ",
        "chinese": "可可多拉",
        "french": "Galekid"
      },
      "type": ["Steel", "Rock"],
      "base": {
        "HP": 50,
        "Attack": 70,
        "Defense": 100,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 30
      },
      "species": "Iron Armor Pokémon",
      "description": "Aron has a body of steel. With one all-out charge, this Pokémon can demolish even a heavy dump truck. The destroyed dump truck then becomes a handy meal for the Pokémon.",
      "evolution": { "next": [["305", "Level 32"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "60 kg",
        "egg": ["Monster"],
        "ability": [
          ["Sturdy", "false"],
          ["Rock Head", "false"],
          ["Heavy Metal", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/304.png",
        "thumbnail": "src/assets/thumbnails/304.png",
        "hires": "src/assets/hires/304.png"
      }
    },
    {
      "id": 305,
      "name": {
        "english": "Lairon",
        "japanese": "コドラ",
        "chinese": "可多拉",
        "french": "Galegon"
      },
      "type": ["Steel", "Rock"],
      "base": {
        "HP": 60,
        "Attack": 90,
        "Defense": 140,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 40
      },
      "species": "Iron Armor Pokémon",
      "description": "Lairon feeds on iron contained in rocks and water. It makes its nest on mountains where iron ore is buried. As a result, the Pokémon often clashes with humans mining the iron ore.",
      "evolution": { "prev": ["304", "Level 32"], "next": [["306", "Level 42"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "120 kg",
        "egg": ["Monster"],
        "ability": [
          ["Sturdy", "false"],
          ["Rock Head", "false"],
          ["Heavy Metal", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/305.png",
        "thumbnail": "src/assets/thumbnails/305.png",
        "hires": "src/assets/hires/305.png"
      }
    },
    {
      "id": 306,
      "name": {
        "english": "Aggron",
        "japanese": "ボスゴドラ",
        "chinese": "波士可多拉",
        "french": "Galeking"
      },
      "type": ["Steel", "Rock"],
      "base": {
        "HP": 70,
        "Attack": 110,
        "Defense": 180,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 50
      },
      "species": "Iron Armor Pokémon",
      "description": "Aggron is protective of its environment. If its mountain is ravaged by a landslide or a fire, this Pokémon will haul topsoil to the area, plant trees, and beautifully restore its own territory.",
      "evolution": { "prev": ["305", "Level 42"] },
      "profile": {
        "height": "2.1 m",
        "weight": "360 kg",
        "egg": ["Monster"],
        "ability": [
          ["Sturdy", "false"],
          ["Rock Head", "false"],
          ["Heavy Metal", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/306.png",
        "thumbnail": "src/assets/thumbnails/306.png",
        "hires": "src/assets/hires/306.png"
      }
    },
    {
      "id": 307,
      "name": {
        "english": "Meditite",
        "japanese": "アサナン",
        "chinese": "玛沙那",
        "french": "Méditikka"
      },
      "type": ["Fighting", "Psychic"],
      "base": {
        "HP": 30,
        "Attack": 40,
        "Defense": 55,
        "Sp. Attack": 40,
        "Sp. Defense": 55,
        "Speed": 60
      },
      "species": "Meditate Pokémon",
      "description": "Meditite heightens its inner energy through meditation. It survives on just one berry a day. Minimal eating is another aspect of this Pokémon’s training.",
      "evolution": { "next": [["308", "Level 37"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "11.2 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Pure Power", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/307.png",
        "thumbnail": "src/assets/thumbnails/307.png",
        "hires": "src/assets/hires/307.png"
      }
    },
    {
      "id": 308,
      "name": {
        "english": "Medicham",
        "japanese": "チャーレム",
        "chinese": "恰雷姆",
        "french": "Charmina"
      },
      "type": ["Fighting", "Psychic"],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 75,
        "Sp. Attack": 60,
        "Sp. Defense": 75,
        "Speed": 80
      },
      "species": "Meditate Pokémon",
      "description": "Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.",
      "evolution": { "prev": ["307", "Level 37"] },
      "profile": {
        "height": "1.3 m",
        "weight": "31.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Pure Power", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/308.png",
        "thumbnail": "src/assets/thumbnails/308.png",
        "hires": "src/assets/hires/308.png"
      }
    },
    {
      "id": 309,
      "name": {
        "english": "Electrike",
        "japanese": "ラクライ",
        "chinese": "落雷兽",
        "french": "Dynavolt"
      },
      "type": ["Electric"],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 40,
        "Sp. Attack": 65,
        "Sp. Defense": 40,
        "Speed": 65
      },
      "species": "Lightning Pokémon",
      "description": "Static electricity builds up all over its body as strands of its long fur rub together. This Pokémon boasts incredible speed.",
      "evolution": { "next": [["310", "Level 26"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "15.2 kg",
        "egg": ["Field"],
        "ability": [
          ["Static", "false"],
          ["Lightning Rod", "false"],
          ["Minus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/309.png",
        "thumbnail": "src/assets/thumbnails/309.png",
        "hires": "src/assets/hires/309.png"
      }
    },
    {
      "id": 310,
      "name": {
        "english": "Manectric",
        "japanese": "ライボルト",
        "chinese": "雷电兽",
        "french": "Élecsprint"
      },
      "type": ["Electric"],
      "base": {
        "HP": 70,
        "Attack": 75,
        "Defense": 60,
        "Sp. Attack": 105,
        "Sp. Defense": 60,
        "Speed": 105
      },
      "species": "Discharge Pokémon",
      "description": "It stimulates its own muscles with electricity, so it can move quickly. It eases its soreness with electricity, too, so it can recover quickly as well.",
      "evolution": { "prev": ["309", "Level 26"] },
      "profile": {
        "height": "1.5 m",
        "weight": "40.2 kg",
        "egg": ["Field"],
        "ability": [
          ["Static", "false"],
          ["Lightning Rod", "false"],
          ["Minus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/310.png",
        "thumbnail": "src/assets/thumbnails/310.png",
        "hires": "src/assets/hires/310.png"
      }
    },
    {
      "id": 311,
      "name": {
        "english": "Plusle",
        "japanese": "プラスル",
        "chinese": "正电拍拍",
        "french": "Posipi"
      },
      "type": ["Electric"],
      "base": {
        "HP": 60,
        "Attack": 50,
        "Defense": 40,
        "Sp. Attack": 85,
        "Sp. Defense": 75,
        "Speed": 95
      },
      "species": "Cheering Pokémon",
      "description": "When Plusle is cheering on its partner, it flashes with electric sparks from all over its body. If its partner loses, this Pokémon cries loudly.",
      "evolution": {},
      "profile": {
        "height": "0.4 m",
        "weight": "4.2 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Plus", "false"],
          ["Lightning Rod", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/311.png",
        "thumbnail": "src/assets/thumbnails/311.png",
        "hires": "src/assets/hires/311.png"
      }
    },
    {
      "id": 312,
      "name": {
        "english": "Minun",
        "japanese": "マイナン",
        "chinese": "负电拍拍",
        "french": "Négapi"
      },
      "type": ["Electric"],
      "base": {
        "HP": 60,
        "Attack": 40,
        "Defense": 50,
        "Sp. Attack": 75,
        "Sp. Defense": 85,
        "Speed": 95
      },
      "species": "Cheering Pokémon",
      "description": "Minun loves to cheer on its partner in battle. It gives off sparks from its body while it is doing so. If its partner is in trouble, this Pokémon gives off increasing amounts of sparks.",
      "evolution": {},
      "profile": {
        "height": "0.4 m",
        "weight": "4.2 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Minus", "false"],
          ["Volt Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/312.png",
        "thumbnail": "src/assets/thumbnails/312.png",
        "hires": "src/assets/hires/312.png"
      }
    },
    {
      "id": 313,
      "name": {
        "english": "Volbeat",
        "japanese": "バルビート",
        "chinese": "电萤虫",
        "french": "Muciole"
      },
      "type": ["Bug"],
      "base": {
        "HP": 65,
        "Attack": 73,
        "Defense": 75,
        "Sp. Attack": 47,
        "Sp. Defense": 85,
        "Speed": 85
      },
      "species": "Firefly Pokémon",
      "description": "Volbeat’s tail glows like a lightbulb. With other Volbeat, it uses its tail to draw geometric shapes in the night sky. This Pokémon loves the sweet aroma given off by Illumise.",
      "evolution": {},
      "profile": {
        "height": "0.7 m",
        "weight": "17.7 kg",
        "egg": ["Bug", "Human-Like"],
        "ability": [
          ["Illuminate", "false"],
          ["Swarm", "false"],
          ["Prankster", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/313.png",
        "thumbnail": "src/assets/thumbnails/313.png",
        "hires": "src/assets/hires/313.png"
      }
    },
    {
      "id": 314,
      "name": {
        "english": "Illumise",
        "japanese": "イルミーゼ",
        "chinese": "甜甜萤",
        "french": "Lumivole"
      },
      "type": ["Bug"],
      "base": {
        "HP": 65,
        "Attack": 47,
        "Defense": 75,
        "Sp. Attack": 73,
        "Sp. Defense": 85,
        "Speed": 85
      },
      "species": "Firefly Pokémon",
      "description": "Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.",
      "evolution": {},
      "profile": {
        "height": "0.6 m",
        "weight": "17.7 kg",
        "egg": ["Bug", "Human-Like"],
        "ability": [
          ["Oblivious", "false"],
          ["Tinted Lens", "false"],
          ["Prankster", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/314.png",
        "thumbnail": "src/assets/thumbnails/314.png",
        "hires": "src/assets/hires/314.png"
      }
    },
    {
      "id": 315,
      "name": {
        "english": "Roselia",
        "japanese": "ロゼリア",
        "chinese": "毒蔷薇",
        "french": "Rosélia"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 50,
        "Attack": 60,
        "Defense": 45,
        "Sp. Attack": 100,
        "Sp. Defense": 80,
        "Speed": 65
      },
      "species": "Thorn Pokémon",
      "description": "On extremely rare occasions, a Roselia is said to appear with its flowers in unusual colors. The thorns on this Pokémon’s head contain a vicious poison.",
      "evolution": {
        "prev": ["406", "high Friendship, Daytime"],
        "next": [["407", "use Shiny Stone"]]
      },
      "profile": {
        "height": "0.3 m",
        "weight": "2 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [
          ["Natural Cure", "false"],
          ["Poison Point", "false"],
          ["Leaf Guard", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/315.png",
        "thumbnail": "src/assets/thumbnails/315.png",
        "hires": "src/assets/hires/315.png"
      }
    },
    {
      "id": 316,
      "name": {
        "english": "Gulpin",
        "japanese": "ゴクリン",
        "chinese": "溶食兽",
        "french": "Gloupti"
      },
      "type": ["Poison"],
      "base": {
        "HP": 70,
        "Attack": 43,
        "Defense": 53,
        "Sp. Attack": 43,
        "Sp. Defense": 53,
        "Speed": 40
      },
      "species": "Stomach Pokémon",
      "description": "Most of Gulpin’s body is made up of its stomach—its heart and brain are very small in comparison. This Pokémon’s stomach contains special enzymes that dissolve anything.",
      "evolution": { "next": [["317", "Level 26"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "10.3 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Liquid Ooze", "false"],
          ["Sticky Hold", "false"],
          ["Gluttony", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/316.png",
        "thumbnail": "src/assets/thumbnails/316.png",
        "hires": "src/assets/hires/316.png"
      }
    },
    {
      "id": 317,
      "name": {
        "english": "Swalot",
        "japanese": "マルノーム",
        "chinese": "吞食兽",
        "french": "Avaltout"
      },
      "type": ["Poison"],
      "base": {
        "HP": 100,
        "Attack": 73,
        "Defense": 83,
        "Sp. Attack": 73,
        "Sp. Defense": 83,
        "Speed": 55
      },
      "species": "Poison Bag Pokémon",
      "description": "Swalot has no teeth, so what it eats, it swallows whole, no matter what. Its cavernous mouth yawns widely. An automobile tire could easily fit inside this Pokémon’s mouth.",
      "evolution": { "prev": ["316", "Level 26"] },
      "profile": {
        "height": "1.7 m",
        "weight": "80 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Liquid Ooze", "false"],
          ["Sticky Hold", "false"],
          ["Gluttony", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/317.png",
        "thumbnail": "src/assets/thumbnails/317.png",
        "hires": "src/assets/hires/317.png"
      }
    },
    {
      "id": 318,
      "name": {
        "english": "Carvanha",
        "japanese": "キバニア",
        "chinese": "利牙鱼",
        "french": "Carvanha"
      },
      "type": ["Water", "Dark"],
      "base": {
        "HP": 45,
        "Attack": 90,
        "Defense": 20,
        "Sp. Attack": 65,
        "Sp. Defense": 20,
        "Speed": 65
      },
      "species": "Savage Pokémon",
      "description": "With its sturdy jaws and fangs, it can easily chomp wooden boats to splinters. It fights with Basculin over food.",
      "evolution": { "next": [["319", "Level 30"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "20.8 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Rough Skin", "false"],
          ["Speed Boost", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/318.png",
        "thumbnail": "src/assets/thumbnails/318.png",
        "hires": "src/assets/hires/318.png"
      }
    },
    {
      "id": 319,
      "name": {
        "english": "Sharpedo",
        "japanese": "サメハダー",
        "chinese": "巨牙鲨",
        "french": "Sharpedo"
      },
      "type": ["Water", "Dark"],
      "base": {
        "HP": 70,
        "Attack": 120,
        "Defense": 40,
        "Sp. Attack": 95,
        "Sp. Defense": 40,
        "Speed": 95
      },
      "species": "Brutal Pokémon",
      "description": "It drinks in seawater and jets it from its rear to propel itself. It’s very sensitive to the scent of blood.",
      "evolution": { "prev": ["318", "Level 30"] },
      "profile": {
        "height": "1.8 m",
        "weight": "88.8 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Rough Skin", "false"],
          ["Speed Boost", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/319.png",
        "thumbnail": "src/assets/thumbnails/319.png",
        "hires": "src/assets/hires/319.png"
      }
    },
    {
      "id": 320,
      "name": {
        "english": "Wailmer",
        "japanese": "ホエルコ",
        "chinese": "吼吼鲸",
        "french": "Wailmer"
      },
      "type": ["Water"],
      "base": {
        "HP": 130,
        "Attack": 70,
        "Defense": 35,
        "Sp. Attack": 70,
        "Sp. Defense": 35,
        "Speed": 60
      },
      "species": "Ball Whale Pokémon",
      "description": "Due to their memories of when they once lived on land, pods of them will, very rarely, wash up on shore.",
      "evolution": { "next": [["321", "Level 40"]] },
      "profile": {
        "height": "2 m",
        "weight": "130 kg",
        "egg": ["Field", "Water 2"],
        "ability": [
          ["Water Veil", "false"],
          ["Oblivious", "false"],
          ["Pressure", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/320.png",
        "thumbnail": "src/assets/thumbnails/320.png",
        "hires": "src/assets/hires/320.png"
      }
    },
    {
      "id": 321,
      "name": {
        "english": "Wailord",
        "japanese": "ホエルオー",
        "chinese": "吼鲸王",
        "french": "Wailord"
      },
      "type": ["Water"],
      "base": {
        "HP": 170,
        "Attack": 90,
        "Defense": 45,
        "Sp. Attack": 90,
        "Sp. Defense": 45,
        "Speed": 60
      },
      "species": "Float Whale Pokémon",
      "description": "When a small Wailmer is attacked by Sharpedo or Dhelmise, its whole pod works together to protect it.",
      "evolution": { "prev": ["320", "Level 40"] },
      "profile": {
        "height": "14.5 m",
        "weight": "398 kg",
        "egg": ["Field", "Water 2"],
        "ability": [
          ["Water Veil", "false"],
          ["Oblivious", "false"],
          ["Pressure", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/321.png",
        "thumbnail": "src/assets/thumbnails/321.png",
        "hires": "src/assets/hires/321.png"
      }
    },
    {
      "id": 322,
      "name": {
        "english": "Numel",
        "japanese": "ドンメル",
        "chinese": "呆火驼",
        "french": "Chamallot"
      },
      "type": ["Fire", "Ground"],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 40,
        "Sp. Attack": 65,
        "Sp. Defense": 45,
        "Speed": 35
      },
      "species": "Numb Pokémon",
      "description": "Numel stores magma of almost 2,200 degrees Fahrenheit within its body. If it gets wet, the magma cools and hardens. In that event, the Pokémon’s body grows heavy and its movements become sluggish.",
      "evolution": { "next": [["323", "Level 33"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "24 kg",
        "egg": ["Field"],
        "ability": [
          ["Oblivious", "false"],
          ["Simple", "false"],
          ["Own Tempo", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/322.png",
        "thumbnail": "src/assets/thumbnails/322.png",
        "hires": "src/assets/hires/322.png"
      }
    },
    {
      "id": 323,
      "name": {
        "english": "Camerupt",
        "japanese": "バクーダ",
        "chinese": "喷火驼",
        "french": "Camérupt"
      },
      "type": ["Fire", "Ground"],
      "base": {
        "HP": 70,
        "Attack": 100,
        "Defense": 70,
        "Sp. Attack": 105,
        "Sp. Defense": 75,
        "Speed": 40
      },
      "species": "Eruption Pokémon",
      "description": "The humps on Camerupt’s back are formed by a transformation of its bones. They sometimes blast out molten magma. This Pokémon apparently erupts often when it is enraged.",
      "evolution": { "prev": ["322", "Level 33"] },
      "profile": {
        "height": "1.9 m",
        "weight": "220 kg",
        "egg": ["Field"],
        "ability": [
          ["Magma Armor", "false"],
          ["Solid Rock", "false"],
          ["Anger Point", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/323.png",
        "thumbnail": "src/assets/thumbnails/323.png",
        "hires": "src/assets/hires/323.png"
      }
    },
    {
      "id": 324,
      "name": {
        "english": "Torkoal",
        "japanese": "コータス",
        "chinese": "煤炭龟",
        "french": "Chartor"
      },
      "type": ["Fire"],
      "base": {
        "HP": 70,
        "Attack": 85,
        "Defense": 140,
        "Sp. Attack": 85,
        "Sp. Defense": 70,
        "Speed": 20
      },
      "species": "Coal Pokémon",
      "description": "It burns coal to produce energy. When it has burned through all of its coal, it becomes unable to move.",
      "evolution": {},
      "profile": {
        "height": "0.5 m",
        "weight": "80.4 kg",
        "egg": ["Field"],
        "ability": [
          ["White Smoke", "false"],
          ["Drought", "false"],
          ["Shell Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/324.png",
        "thumbnail": "src/assets/thumbnails/324.png",
        "hires": "src/assets/hires/324.png"
      }
    },
    {
      "id": 325,
      "name": {
        "english": "Spoink",
        "japanese": "バネブー",
        "chinese": "跳跳猪",
        "french": "Spoink"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 60,
        "Attack": 25,
        "Defense": 35,
        "Sp. Attack": 70,
        "Sp. Defense": 80,
        "Speed": 60
      },
      "species": "Bounce Pokémon",
      "description": "Spoink keeps a pearl on top of its head. The pearl functions to amplify this Pokémon’s psychokinetic powers. It is therefore on a constant search for a bigger pearl.",
      "evolution": { "next": [["326", "Level 32"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "30.6 kg",
        "egg": ["Field"],
        "ability": [
          ["Thick Fat", "false"],
          ["Own Tempo", "false"],
          ["Gluttony", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/325.png",
        "thumbnail": "src/assets/thumbnails/325.png",
        "hires": "src/assets/hires/325.png"
      }
    },
    {
      "id": 326,
      "name": {
        "english": "Grumpig",
        "japanese": "ブーピッグ",
        "chinese": "噗噗猪",
        "french": "Groret"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 80,
        "Attack": 45,
        "Defense": 65,
        "Sp. Attack": 90,
        "Sp. Defense": 110,
        "Speed": 80
      },
      "species": "Manipulate Pokémon",
      "description": "Grumpig uses the black pearls on its body to wield its fantastic powers. When it is doing so, it dances bizarrely. This Pokémon’s black pearls are valuable as works of art.",
      "evolution": { "prev": ["325", "Level 32"] },
      "profile": {
        "height": "0.9 m",
        "weight": "71.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Thick Fat", "false"],
          ["Own Tempo", "false"],
          ["Gluttony", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/326.png",
        "thumbnail": "src/assets/thumbnails/326.png",
        "hires": "src/assets/hires/326.png"
      }
    },
    {
      "id": 327,
      "name": {
        "english": "Spinda",
        "japanese": "パッチール",
        "chinese": "晃晃斑",
        "french": "Spinda"
      },
      "type": ["Normal"],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 60,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 60
      },
      "species": "Spot Panda Pokémon",
      "description": "Each Spinda’s spot pattern is different. With its stumbling movements, it evades opponents’ attacks brilliantly!",
      "evolution": {},
      "profile": {
        "height": "1.1 m",
        "weight": "5 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Own Tempo", "false"],
          ["Tangled Feet", "false"],
          ["Contrary", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/327.png",
        "thumbnail": "src/assets/thumbnails/327.png",
        "hires": "src/assets/hires/327.png"
      }
    },
    {
      "id": 328,
      "name": {
        "english": "Trapinch",
        "japanese": "ナックラー",
        "chinese": "大颚蚁",
        "french": "Kraknoix"
      },
      "type": ["Ground"],
      "base": {
        "HP": 45,
        "Attack": 100,
        "Defense": 45,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 10
      },
      "species": "Ant Pit Pokémon",
      "description": "It builds nests that double as traps, lying in wait for its prey to get caught. When night falls, it digs itself a spot beneath the sand to sleep.",
      "evolution": { "next": [["329", "Level 35"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "15 kg",
        "egg": ["Bug"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Arena Trap", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/328.png",
        "thumbnail": "src/assets/thumbnails/328.png",
        "hires": "src/assets/hires/328.png"
      }
    },
    {
      "id": 329,
      "name": {
        "english": "Vibrava",
        "japanese": "ビブラーバ",
        "chinese": "超音波幼虫",
        "french": "Vibraninf"
      },
      "type": ["Ground", "Dragon"],
      "base": {
        "HP": 50,
        "Attack": 70,
        "Defense": 50,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 70
      },
      "species": "Vibration Pokémon",
      "description": "It vibrates its wings to send out odd sound waves. Trainers who are with it need earplugs.",
      "evolution": { "prev": ["328", "Level 35"], "next": [["330", "Level 45"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "15.3 kg",
        "egg": ["Bug"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/329.png",
        "thumbnail": "src/assets/thumbnails/329.png",
        "hires": "src/assets/hires/329.png"
      }
    },
    {
      "id": 330,
      "name": {
        "english": "Flygon",
        "japanese": "フライゴン",
        "chinese": "沙漠蜻蜓",
        "french": "Libégon"
      },
      "type": ["Ground", "Dragon"],
      "base": {
        "HP": 80,
        "Attack": 100,
        "Defense": 80,
        "Sp. Attack": 80,
        "Sp. Defense": 80,
        "Speed": 100
      },
      "species": "Mystic Pokémon",
      "description": "People continue to have their hearts stolen by its enchanting songs and find themselves stranded in the desert.",
      "evolution": { "prev": ["329", "Level 45"] },
      "profile": {
        "height": "2 m",
        "weight": "82 kg",
        "egg": ["Bug"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/330.png",
        "thumbnail": "src/assets/thumbnails/330.png",
        "hires": "src/assets/hires/330.png"
      }
    },
    {
      "id": 331,
      "name": {
        "english": "Cacnea",
        "japanese": "サボネア",
        "chinese": "刺球仙人掌",
        "french": "Cacnea"
      },
      "type": ["Grass"],
      "base": {
        "HP": 50,
        "Attack": 85,
        "Defense": 40,
        "Sp. Attack": 85,
        "Sp. Defense": 40,
        "Speed": 35
      },
      "species": "Cactus Pokémon",
      "description": "The more arid and harsh the environment, the more pretty and fragrant a flower Cacnea grows. This Pokémon battles by wildly swinging its thorny arms.",
      "evolution": { "next": [["332", "Level 32"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "51.3 kg",
        "egg": ["Grass", "Human-Like"],
        "ability": [
          ["Sand Veil", "false"],
          ["Water Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/331.png",
        "thumbnail": "src/assets/thumbnails/331.png",
        "hires": "src/assets/hires/331.png"
      }
    },
    {
      "id": 332,
      "name": {
        "english": "Cacturne",
        "japanese": "ノクタス",
        "chinese": "梦歌仙人掌",
        "french": "Cacturne"
      },
      "type": ["Grass", "Dark"],
      "base": {
        "HP": 70,
        "Attack": 115,
        "Defense": 60,
        "Sp. Attack": 115,
        "Sp. Defense": 60,
        "Speed": 55
      },
      "species": "Scarecrow Pokémon",
      "description": "If a traveler is going through a desert in the thick of night, Cacturne will follow in a ragtag group. The Pokémon are biding their time, waiting for the traveler to tire and become incapable of moving.",
      "evolution": { "prev": ["331", "Level 32"] },
      "profile": {
        "height": "1.3 m",
        "weight": "77.4 kg",
        "egg": ["Grass", "Human-Like"],
        "ability": [
          ["Sand Veil", "false"],
          ["Water Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/332.png",
        "thumbnail": "src/assets/thumbnails/332.png",
        "hires": "src/assets/hires/332.png"
      }
    },
    {
      "id": 333,
      "name": {
        "english": "Swablu",
        "japanese": "チルット",
        "chinese": "青绵鸟",
        "french": "Tylton"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 45,
        "Attack": 40,
        "Defense": 60,
        "Sp. Attack": 40,
        "Sp. Defense": 75,
        "Speed": 50
      },
      "species": "Cotton Bird Pokémon",
      "description": "Swablu loves to make things clean. If it spots something dirty, it will wipe and polish it with its cottony wings. If its wings become dirty, this Pokémon finds a stream and showers itself.",
      "evolution": { "next": [["334", "Level 35"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "1.2 kg",
        "egg": ["Flying", "Dragon"],
        "ability": [
          ["Natural Cure", "false"],
          ["Cloud Nine", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/333.png",
        "thumbnail": "src/assets/thumbnails/333.png",
        "hires": "src/assets/hires/333.png"
      }
    },
    {
      "id": 334,
      "name": {
        "english": "Altaria",
        "japanese": "チルタリス",
        "chinese": "七夕青鸟",
        "french": "Altaria"
      },
      "type": ["Dragon", "Flying"],
      "base": {
        "HP": 75,
        "Attack": 70,
        "Defense": 90,
        "Sp. Attack": 70,
        "Sp. Defense": 105,
        "Speed": 80
      },
      "species": "Humming Pokémon",
      "description": "Altaria sings in a gorgeous soprano. Its wings are like cotton clouds. This Pokémon catches updrafts with its buoyant wings and soars way up into the wild blue yonder.",
      "evolution": { "prev": ["333", "Level 35"] },
      "profile": {
        "height": "1.1 m",
        "weight": "20.6 kg",
        "egg": ["Flying", "Dragon"],
        "ability": [
          ["Natural Cure", "false"],
          ["Cloud Nine", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/334.png",
        "thumbnail": "src/assets/thumbnails/334.png",
        "hires": "src/assets/hires/334.png"
      }
    },
    {
      "id": 335,
      "name": {
        "english": "Zangoose",
        "japanese": "ザングース",
        "chinese": "猫鼬斩",
        "french": "Mangriff"
      },
      "type": ["Normal"],
      "base": {
        "HP": 73,
        "Attack": 115,
        "Defense": 60,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 90
      },
      "species": "Cat Ferret Pokémon",
      "description": "Zangoose usually stays on all fours, but when angered, it gets up on its hind legs and extends its claws. This Pokémon shares a bitter rivalry with Seviper that dates back over generations.",
      "evolution": {},
      "profile": {
        "height": "1.3 m",
        "weight": "40.3 kg",
        "egg": ["Field"],
        "ability": [
          ["Immunity", "false"],
          ["Toxic Boost", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/335.png",
        "thumbnail": "src/assets/thumbnails/335.png",
        "hires": "src/assets/hires/335.png"
      }
    },
    {
      "id": 336,
      "name": {
        "english": "Seviper",
        "japanese": "ハブネーク",
        "chinese": "饭匙蛇",
        "french": "Séviper"
      },
      "type": ["Poison"],
      "base": {
        "HP": 73,
        "Attack": 100,
        "Defense": 60,
        "Sp. Attack": 100,
        "Sp. Defense": 60,
        "Speed": 65
      },
      "species": "Fang Snake Pokémon",
      "description": "Seviper’s swordlike tail serves two purposes—it slashes foes and douses them with secreted poison. This Pokémon will not give up its long-running blood feud with Zangoose.",
      "evolution": {},
      "profile": {
        "height": "2.7 m",
        "weight": "52.5 kg",
        "egg": ["Field", "Dragon"],
        "ability": [
          ["Shed Skin", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/336.png",
        "thumbnail": "src/assets/thumbnails/336.png",
        "hires": "src/assets/hires/336.png"
      }
    },
    {
      "id": 337,
      "name": {
        "english": "Lunatone",
        "japanese": "ルナトーン",
        "chinese": "月石",
        "french": "Séléroc"
      },
      "type": ["Rock", "Psychic"],
      "base": {
        "HP": 90,
        "Attack": 55,
        "Defense": 65,
        "Sp. Attack": 95,
        "Sp. Defense": 85,
        "Speed": 70
      },
      "species": "Meteorite Pokémon",
      "description": "Lunatone becomes active around the time of the full moon. Instead of walking, it moves by floating in midair. The Pokémon’s intimidating red eyes cause all those who see it to become transfixed with fear.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "168 kg",
        "egg": ["Mineral"],
        "ability": [["Levitate", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/337.png",
        "thumbnail": "src/assets/thumbnails/337.png",
        "hires": "src/assets/hires/337.png"
      }
    },
    {
      "id": 338,
      "name": {
        "english": "Solrock",
        "japanese": "ソルロック",
        "chinese": "太阳岩",
        "french": "Solaroc"
      },
      "type": ["Rock", "Psychic"],
      "base": {
        "HP": 90,
        "Attack": 95,
        "Defense": 85,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 70
      },
      "species": "Meteorite Pokémon",
      "description": "Sunlight is the source of Solrock’s power. It is said to possess the ability to read the emotions of others. This Pokémon gives off intense heat while rotating its body.",
      "evolution": {},
      "profile": {
        "height": "1.2 m",
        "weight": "154 kg",
        "egg": ["Mineral"],
        "ability": [["Levitate", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/338.png",
        "thumbnail": "src/assets/thumbnails/338.png",
        "hires": "src/assets/hires/338.png"
      }
    },
    {
      "id": 339,
      "name": {
        "english": "Barboach",
        "japanese": "ドジョッチ",
        "chinese": "泥泥鳅",
        "french": "Barloche"
      },
      "type": ["Water", "Ground"],
      "base": {
        "HP": 50,
        "Attack": 48,
        "Defense": 43,
        "Sp. Attack": 46,
        "Sp. Defense": 41,
        "Speed": 60
      },
      "species": "Whiskers Pokémon",
      "description": "Its whiskers are filled with nerves. They can sense smells and flavors just as a person’s nose or tongue would.",
      "evolution": { "next": [["340", "Level 30"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "1.9 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Oblivious", "false"],
          ["Anticipation", "false"],
          ["Hydration", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/339.png",
        "thumbnail": "src/assets/thumbnails/339.png",
        "hires": "src/assets/hires/339.png"
      }
    },
    {
      "id": 340,
      "name": {
        "english": "Whiscash",
        "japanese": "ナマズン",
        "chinese": "鲶鱼王",
        "french": "Barbicha"
      },
      "type": ["Water", "Ground"],
      "base": {
        "HP": 110,
        "Attack": 78,
        "Defense": 73,
        "Sp. Attack": 76,
        "Sp. Defense": 71,
        "Speed": 60
      },
      "species": "Whiskers Pokémon",
      "description": "Its vision is not that good. It senses vibrations in the water with its whiskers to determine the location of its prey.",
      "evolution": { "prev": ["339", "Level 30"] },
      "profile": {
        "height": "0.9 m",
        "weight": "23.6 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Oblivious", "false"],
          ["Anticipation", "false"],
          ["Hydration", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/340.png",
        "thumbnail": "src/assets/thumbnails/340.png",
        "hires": "src/assets/hires/340.png"
      }
    },
    {
      "id": 341,
      "name": {
        "english": "Corphish",
        "japanese": "ヘイガニ",
        "chinese": "龙虾小兵",
        "french": "Écrapince"
      },
      "type": ["Water"],
      "base": {
        "HP": 43,
        "Attack": 80,
        "Defense": 65,
        "Sp. Attack": 50,
        "Sp. Defense": 35,
        "Speed": 35
      },
      "species": "Ruffian Pokémon",
      "description": "It can adapt very well to its environment. Feebas and Corphish are about the only Pokémon to live in stagnant ditches.",
      "evolution": { "next": [["342", "Level 30"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "11.5 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Shell Armor", "false"],
          ["Adaptability", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/341.png",
        "thumbnail": "src/assets/thumbnails/341.png",
        "hires": "src/assets/hires/341.png"
      }
    },
    {
      "id": 342,
      "name": {
        "english": "Crawdaunt",
        "japanese": "シザリガー",
        "chinese": "铁螯龙虾",
        "french": "Colhomard"
      },
      "type": ["Water", "Dark"],
      "base": {
        "HP": 63,
        "Attack": 120,
        "Defense": 85,
        "Sp. Attack": 90,
        "Sp. Defense": 55,
        "Speed": 55
      },
      "species": "Rogue Pokémon",
      "description": "Its pincers often fall off. Unlike with Crabrawler or Clauncher, the meat in its claws is utterly nasty and stinking.",
      "evolution": { "prev": ["341", "Level 30"] },
      "profile": {
        "height": "1.1 m",
        "weight": "32.8 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Shell Armor", "false"],
          ["Adaptability", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/342.png",
        "thumbnail": "src/assets/thumbnails/342.png",
        "hires": "src/assets/hires/342.png"
      }
    },
    {
      "id": 343,
      "name": {
        "english": "Baltoy",
        "japanese": "ヤジロン",
        "chinese": "天秤偶",
        "french": "Balbuto"
      },
      "type": ["Ground", "Psychic"],
      "base": {
        "HP": 40,
        "Attack": 40,
        "Defense": 55,
        "Sp. Attack": 40,
        "Sp. Defense": 70,
        "Speed": 55
      },
      "species": "Clay Doll Pokémon",
      "description": "When they find others of their kind, they cry out loudly and gather together. Large numbers of them can be found in old graveyards.",
      "evolution": { "next": [["344", "Level 36"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "21.5 kg",
        "egg": ["Mineral"],
        "ability": [["Levitate", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/343.png",
        "thumbnail": "src/assets/thumbnails/343.png",
        "hires": "src/assets/hires/343.png"
      }
    },
    {
      "id": 344,
      "name": {
        "english": "Claydol",
        "japanese": "ネンドール",
        "chinese": "念力土偶",
        "french": "Kaorine"
      },
      "type": ["Ground", "Psychic"],
      "base": {
        "HP": 60,
        "Attack": 70,
        "Defense": 105,
        "Sp. Attack": 70,
        "Sp. Defense": 120,
        "Speed": 75
      },
      "species": "Clay Doll Pokémon",
      "description": "The ancient people who made it apparently modeled it after something that descended from the sky. It fires beams from both arms.",
      "evolution": { "prev": ["343", "Level 36"] },
      "profile": {
        "height": "1.5 m",
        "weight": "108 kg",
        "egg": ["Mineral"],
        "ability": [["Levitate", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/344.png",
        "thumbnail": "src/assets/thumbnails/344.png",
        "hires": "src/assets/hires/344.png"
      }
    },
    {
      "id": 345,
      "name": {
        "english": "Lileep",
        "japanese": "リリーラ",
        "chinese": "触手百合",
        "french": "Lilia"
      },
      "type": ["Rock", "Grass"],
      "base": {
        "HP": 66,
        "Attack": 41,
        "Defense": 77,
        "Sp. Attack": 61,
        "Sp. Defense": 87,
        "Speed": 23
      },
      "species": "Sea Lily Pokémon",
      "description": "It sticks to rocks with its powerful suckers and can’t be washed away no matter how rough the surf gets.",
      "evolution": { "next": [["346", "Level 40"]] },
      "profile": {
        "height": "1 m",
        "weight": "23.8 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Suction Cups", "false"],
          ["Storm Drain", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/345.png",
        "thumbnail": "src/assets/thumbnails/345.png",
        "hires": "src/assets/hires/345.png"
      }
    },
    {
      "id": 346,
      "name": {
        "english": "Cradily",
        "japanese": "ユレイドル",
        "chinese": "摇篮百合",
        "french": "Vacilys"
      },
      "type": ["Rock", "Grass"],
      "base": {
        "HP": 86,
        "Attack": 81,
        "Defense": 97,
        "Sp. Attack": 81,
        "Sp. Defense": 107,
        "Speed": 43
      },
      "species": "Barnacle Pokémon",
      "description": "This carnivorous Pokémon lived in primordial seas. It catches prey in its eight tentacles and dissolves them with digestive fluid as it eats.",
      "evolution": { "prev": ["345", "Level 40"] },
      "profile": {
        "height": "1.5 m",
        "weight": "60.4 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Suction Cups", "false"],
          ["Storm Drain", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/346.png",
        "thumbnail": "src/assets/thumbnails/346.png",
        "hires": "src/assets/hires/346.png"
      }
    },
    {
      "id": 347,
      "name": {
        "english": "Anorith",
        "japanese": "アノプス",
        "chinese": "太古羽虫",
        "french": "Anorith"
      },
      "type": ["Rock", "Bug"],
      "base": {
        "HP": 45,
        "Attack": 95,
        "Defense": 50,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 75
      },
      "species": "Old Shrimp Pokémon",
      "description": "This is one kind of primeval bug Pokémon. With eight wings, it could apparently swim a lot faster than you’d expect.",
      "evolution": { "next": [["348", "Level 40"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "12.5 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Battle Armor", "false"],
          ["Swift Swim", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/347.png",
        "thumbnail": "src/assets/thumbnails/347.png",
        "hires": "src/assets/hires/347.png"
      }
    },
    {
      "id": 348,
      "name": {
        "english": "Armaldo",
        "japanese": "アーマルド",
        "chinese": "太古盔甲",
        "french": "Armaldo"
      },
      "type": ["Rock", "Bug"],
      "base": {
        "HP": 75,
        "Attack": 125,
        "Defense": 100,
        "Sp. Attack": 70,
        "Sp. Defense": 80,
        "Speed": 45
      },
      "species": "Plate Pokémon",
      "description": "Armaldo adapted from living in water to living on land. It has been determined that it is the ancestor of some bug Pokémon.",
      "evolution": { "prev": ["347", "Level 40"] },
      "profile": {
        "height": "1.5 m",
        "weight": "68.2 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Battle Armor", "false"],
          ["Swift Swim", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/348.png",
        "thumbnail": "src/assets/thumbnails/348.png",
        "hires": "src/assets/hires/348.png"
      }
    },
    {
      "id": 349,
      "name": {
        "english": "Feebas",
        "japanese": "ヒンバス",
        "chinese": "丑丑鱼",
        "french": "Barpau"
      },
      "type": ["Water"],
      "base": {
        "HP": 20,
        "Attack": 15,
        "Defense": 20,
        "Sp. Attack": 10,
        "Sp. Defense": 55,
        "Speed": 80
      },
      "species": "Fish Pokémon",
      "description": "Because of its wretched appearance, most people pay it no attention, but there are some who collect Feebas—and Feebas alone!",
      "evolution": {
        "next": [
          ["350", "trade holding Prism Scale, or level up with max Beauty"]
        ]
      },
      "profile": {
        "height": "0.6 m",
        "weight": "7.4 kg",
        "egg": ["Water 1", "Dragon"],
        "ability": [
          ["Swift Swim", "false"],
          ["Oblivious", "false"],
          ["Adaptability", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/349.png",
        "thumbnail": "src/assets/thumbnails/349.png",
        "hires": "src/assets/hires/349.png"
      }
    },
    {
      "id": 350,
      "name": {
        "english": "Milotic",
        "japanese": "ミロカロス",
        "chinese": "美纳斯",
        "french": "Milobellus"
      },
      "type": ["Water"],
      "base": {
        "HP": 95,
        "Attack": 60,
        "Defense": 79,
        "Sp. Attack": 100,
        "Sp. Defense": 125,
        "Speed": 81
      },
      "species": "Tender Pokémon",
      "description": "Its dwelling place is the bottom of big lakes. Those who behold its loveliness are said to have their hearts purified.",
      "evolution": {
        "prev": ["349", "trade holding Prism Scale, or level up with max Beauty"]
      },
      "profile": {
        "height": "6.2 m",
        "weight": "162 kg",
        "egg": ["Water 1", "Dragon"],
        "ability": [
          ["Marvel Scale", "false"],
          ["Competitive", "false"],
          ["Cute Charm", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/350.png",
        "thumbnail": "src/assets/thumbnails/350.png",
        "hires": "src/assets/hires/350.png"
      }
    },
    {
      "id": 351,
      "name": {
        "english": "Castform",
        "japanese": "ポワルン",
        "chinese": "飘浮泡泡",
        "french": "Morphéo"
      },
      "type": ["Normal"],
      "base": {
        "HP": 70,
        "Attack": 70,
        "Defense": 70,
        "Sp. Attack": 70,
        "Sp. Defense": 70,
        "Speed": 70
      },
      "species": "Weather Pokémon",
      "description": "Its form changes depending on the weather. The rougher conditions get, the rougher Castform’s disposition!",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "0.8 kg",
        "egg": ["Fairy", "Amorphous"],
        "ability": [["Forecast", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/351.png",
        "thumbnail": "src/assets/thumbnails/351.png",
        "hires": "src/assets/hires/351.png"
      }
    },
    {
      "id": 352,
      "name": {
        "english": "Kecleon",
        "japanese": "カクレオン",
        "chinese": "变隐龙",
        "french": "Kecleon"
      },
      "type": ["Normal"],
      "base": {
        "HP": 60,
        "Attack": 90,
        "Defense": 70,
        "Sp. Attack": 60,
        "Sp. Defense": 120,
        "Speed": 40
      },
      "species": "Color Swap Pokémon",
      "description": "Its color changes for concealment and also when its mood or health changes. The darker the color, the healthier it is.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "22 kg",
        "egg": ["Field"],
        "ability": [
          ["Color Change", "false"],
          ["Protean", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/352.png",
        "thumbnail": "src/assets/thumbnails/352.png",
        "hires": "src/assets/hires/352.png"
      }
    },
    {
      "id": 353,
      "name": {
        "english": "Shuppet",
        "japanese": "カゲボウズ",
        "chinese": "怨影娃娃",
        "french": "Polichombr"
      },
      "type": ["Ghost"],
      "base": {
        "HP": 44,
        "Attack": 75,
        "Defense": 35,
        "Sp. Attack": 63,
        "Sp. Defense": 33,
        "Speed": 45
      },
      "species": "Puppet Pokémon",
      "description": "There’s a proverb that says, “Shun the house where Shuppet gather in the growing dusk.”",
      "evolution": { "next": [["354", "Level 37"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "2.3 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Insomnia", "false"],
          ["Frisk", "false"],
          ["Cursed Body", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/353.png",
        "thumbnail": "src/assets/thumbnails/353.png",
        "hires": "src/assets/hires/353.png"
      }
    },
    {
      "id": 354,
      "name": {
        "english": "Banette",
        "japanese": "ジュペッタ",
        "chinese": "诅咒娃娃",
        "french": "Branette"
      },
      "type": ["Ghost"],
      "base": {
        "HP": 64,
        "Attack": 115,
        "Defense": 65,
        "Sp. Attack": 83,
        "Sp. Defense": 63,
        "Speed": 65
      },
      "species": "Marionette Pokémon",
      "description": "Resentment at being cast off made it spring into being. Some say that treating it well will satisfy it, and it will once more become a stuffed toy.",
      "evolution": { "prev": ["353", "Level 37"] },
      "profile": {
        "height": "1.1 m",
        "weight": "12.5 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Insomnia", "false"],
          ["Frisk", "false"],
          ["Cursed Body", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/354.png",
        "thumbnail": "src/assets/thumbnails/354.png",
        "hires": "src/assets/hires/354.png"
      }
    },
    {
      "id": 355,
      "name": {
        "english": "Duskull",
        "japanese": "ヨマワル",
        "chinese": "夜巡灵",
        "french": "Skelénox"
      },
      "type": ["Ghost"],
      "base": {
        "HP": 20,
        "Attack": 40,
        "Defense": 90,
        "Sp. Attack": 30,
        "Sp. Defense": 90,
        "Speed": 25
      },
      "species": "Requiem Pokémon",
      "description": "Duskull wanders lost among the deep darkness of midnight. There is an oft-told admonishment given to misbehaving children that this Pokémon will spirit away bad children who earn scoldings from their mothers.",
      "evolution": { "next": [["356", "Level 37"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "15 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Levitate", "false"],
          ["Frisk", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/355.png",
        "thumbnail": "src/assets/thumbnails/355.png",
        "hires": "src/assets/hires/355.png"
      }
    },
    {
      "id": 356,
      "name": {
        "english": "Dusclops",
        "japanese": "サマヨール",
        "chinese": "彷徨夜灵",
        "french": "Téraclope"
      },
      "type": ["Ghost"],
      "base": {
        "HP": 40,
        "Attack": 70,
        "Defense": 130,
        "Sp. Attack": 60,
        "Sp. Defense": 130,
        "Speed": 25
      },
      "species": "Beckon Pokémon",
      "description": "Dusclops absorbs anything, however large the object may be. This Pokémon hypnotizes its foe by waving its hands in a macabre manner and by bringing its single eye to bear. The hypnotized foe is made to do Dusclops’s bidding.",
      "evolution": {
        "prev": ["355", "Level 37"],
        "next": [["477", "trade holding Reaper Cloth"]]
      },
      "profile": {
        "height": "1.6 m",
        "weight": "30.6 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Pressure", "false"],
          ["Frisk", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/356.png",
        "thumbnail": "src/assets/thumbnails/356.png",
        "hires": "src/assets/hires/356.png"
      }
    },
    {
      "id": 357,
      "name": {
        "english": "Tropius",
        "japanese": "トロピウス",
        "chinese": "热带龙",
        "french": "Tropius"
      },
      "type": ["Grass", "Flying"],
      "base": {
        "HP": 99,
        "Attack": 68,
        "Defense": 83,
        "Sp. Attack": 72,
        "Sp. Defense": 87,
        "Speed": 51
      },
      "species": "Fruit Pokémon",
      "description": "Bunches of delicious fruit grow around its neck. In warm areas, many ranches raise Tropius.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "100 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Solar Power", "false"],
          ["Harvest", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/357.png",
        "thumbnail": "src/assets/thumbnails/357.png",
        "hires": "src/assets/hires/357.png"
      }
    },
    {
      "id": 358,
      "name": {
        "english": "Chimecho",
        "japanese": "チリーン",
        "chinese": "风铃铃",
        "french": "Éoko"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 75,
        "Attack": 50,
        "Defense": 80,
        "Sp. Attack": 95,
        "Sp. Defense": 90,
        "Speed": 65
      },
      "species": "Wind Chime Pokémon",
      "description": "In high winds, Chimecho cries as it hangs from a tree branch or the eaves of a building using a suction cup on its head. This Pokémon plucks berries with its long tail and eats them.",
      "evolution": { "prev": ["433", "high Friendship, Nighttime"] },
      "profile": {
        "height": "0.6 m",
        "weight": "1 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/358.png",
        "thumbnail": "src/assets/thumbnails/358.png",
        "hires": "src/assets/hires/358.png"
      }
    },
    {
      "id": 359,
      "name": {
        "english": "Absol",
        "japanese": "アブソル",
        "chinese": "阿勃梭鲁",
        "french": "Absol"
      },
      "type": ["Dark"],
      "base": {
        "HP": 65,
        "Attack": 130,
        "Defense": 60,
        "Sp. Attack": 75,
        "Sp. Defense": 60,
        "Speed": 75
      },
      "species": "Disaster Pokémon",
      "description": "The elderly call it the disaster Pokémon and detest it, but interest in its power to predict disasters is on the rise.",
      "evolution": {},
      "profile": {
        "height": "1.2 m",
        "weight": "47 kg",
        "egg": ["Field"],
        "ability": [
          ["Pressure", "false"],
          ["Super Luck", "false"],
          ["Justified", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/359.png",
        "thumbnail": "src/assets/thumbnails/359.png",
        "hires": "src/assets/hires/359.png"
      }
    },
    {
      "id": 360,
      "name": {
        "english": "Wynaut",
        "japanese": "ソーナノ",
        "chinese": "小果然",
        "french": "Okéoké"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 95,
        "Attack": 23,
        "Defense": 48,
        "Sp. Attack": 23,
        "Sp. Defense": 48,
        "Speed": 23
      },
      "species": "Bright Pokémon",
      "description": "Wynaut gather on moonlit nights to play by squeezing up against each other. By being squeezed, this Pokémon gains endurance and is trained to dole out powerful counterattacks.",
      "evolution": { "next": [["202", "Level 15"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "14 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Shadow Tag", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/360.png",
        "thumbnail": "src/assets/thumbnails/360.png",
        "hires": "src/assets/hires/360.png"
      }
    },
    {
      "id": 361,
      "name": {
        "english": "Snorunt",
        "japanese": "ユキワラシ",
        "chinese": "雪童子",
        "french": "Stalgamin"
      },
      "type": ["Ice"],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 50,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 50
      },
      "species": "Snow Hat Pokémon",
      "description": "Rich people from cold areas all share childhood memories of playing with Snorunt.",
      "evolution": {
        "next": [
          ["362", "Level 42"],
          ["478", "use Dawn Stone, Female"]
        ]
      },
      "profile": {
        "height": "0.7 m",
        "weight": "16.8 kg",
        "egg": ["Fairy", "Mineral"],
        "ability": [
          ["Inner Focus", "false"],
          ["Ice Body", "false"],
          ["Moody", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/361.png",
        "thumbnail": "src/assets/thumbnails/361.png",
        "hires": "src/assets/hires/361.png"
      }
    },
    {
      "id": 362,
      "name": {
        "english": "Glalie",
        "japanese": "オニゴーリ",
        "chinese": "冰鬼护",
        "french": "Oniglali"
      },
      "type": ["Ice"],
      "base": {
        "HP": 80,
        "Attack": 80,
        "Defense": 80,
        "Sp. Attack": 80,
        "Sp. Defense": 80,
        "Speed": 80
      },
      "species": "Face Pokémon",
      "description": "Its actual body is a rock that isn’t particularly hard. Glalie absorbs moisture from the air and drapes itself in an armor of ice.",
      "evolution": { "prev": ["361", "Level 42"] },
      "profile": {
        "height": "1.5 m",
        "weight": "256.5 kg",
        "egg": ["Fairy", "Mineral"],
        "ability": [
          ["Inner Focus", "false"],
          ["Ice Body", "false"],
          ["Moody", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/362.png",
        "thumbnail": "src/assets/thumbnails/362.png",
        "hires": "src/assets/hires/362.png"
      }
    },
    {
      "id": 363,
      "name": {
        "english": "Spheal",
        "japanese": "タマザラシ",
        "chinese": "海豹球",
        "french": "Obalie"
      },
      "type": ["Ice", "Water"],
      "base": {
        "HP": 70,
        "Attack": 40,
        "Defense": 50,
        "Sp. Attack": 55,
        "Sp. Defense": 50,
        "Speed": 25
      },
      "species": "Clap Pokémon",
      "description": "Spheal always travels by rolling around on its ball-like body. When the season for ice floes arrives, this Pokémon can be seen rolling about on ice and crossing the sea.",
      "evolution": { "next": [["364", "Level 32"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "39.5 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Thick Fat", "false"],
          ["Ice Body", "false"],
          ["Oblivious", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/363.png",
        "thumbnail": "src/assets/thumbnails/363.png",
        "hires": "src/assets/hires/363.png"
      }
    },
    {
      "id": 364,
      "name": {
        "english": "Sealeo",
        "japanese": "トドグラー",
        "chinese": "海魔狮",
        "french": "Phogleur"
      },
      "type": ["Ice", "Water"],
      "base": {
        "HP": 90,
        "Attack": 60,
        "Defense": 70,
        "Sp. Attack": 75,
        "Sp. Defense": 70,
        "Speed": 45
      },
      "species": "Ball Roll Pokémon",
      "description": "Sealeo often balances and rolls things on the tip of its nose. While the Pokémon is rolling something, it checks the object’s aroma and texture to determine whether it likes the object or not.",
      "evolution": { "prev": ["363", "Level 32"], "next": [["365", "Level 44"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "87.6 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Thick Fat", "false"],
          ["Ice Body", "false"],
          ["Oblivious", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/364.png",
        "thumbnail": "src/assets/thumbnails/364.png",
        "hires": "src/assets/hires/364.png"
      }
    },
    {
      "id": 365,
      "name": {
        "english": "Walrein",
        "japanese": "トドゼルガ",
        "chinese": "帝牙海狮",
        "french": "Kaimorse"
      },
      "type": ["Ice", "Water"],
      "base": {
        "HP": 110,
        "Attack": 80,
        "Defense": 90,
        "Sp. Attack": 95,
        "Sp. Defense": 90,
        "Speed": 65
      },
      "species": "Ice Break Pokémon",
      "description": "Walrein swims all over in frigid seawater while crushing icebergs with its grand, imposing tusks. Its thick layer of blubber makes enemy attacks bounce off harmlessly.",
      "evolution": { "prev": ["364", "Level 44"] },
      "profile": {
        "height": "1.4 m",
        "weight": "150.6 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Thick Fat", "false"],
          ["Ice Body", "false"],
          ["Oblivious", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/365.png",
        "thumbnail": "src/assets/thumbnails/365.png",
        "hires": "src/assets/hires/365.png"
      }
    },
    {
      "id": 366,
      "name": {
        "english": "Clamperl",
        "japanese": "パールル",
        "chinese": "珍珠贝",
        "french": "Coquiperl"
      },
      "type": ["Water"],
      "base": {
        "HP": 35,
        "Attack": 64,
        "Defense": 85,
        "Sp. Attack": 74,
        "Sp. Defense": 55,
        "Speed": 32
      },
      "species": "Bivalve Pokémon",
      "description": "Clamperl’s pearls are exceedingly precious. They can be more than 10 times as costly as Shellder’s pearls.",
      "evolution": {
        "next": [
          ["367", "trade holding Deep Sea Tooth"],
          ["368", "trade holding Deep Sea Scale"]
        ]
      },
      "profile": {
        "height": "0.4 m",
        "weight": "52.5 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Shell Armor", "false"],
          ["Rattled", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/366.png",
        "thumbnail": "src/assets/thumbnails/366.png",
        "hires": "src/assets/hires/366.png"
      }
    },
    {
      "id": 367,
      "name": {
        "english": "Huntail",
        "japanese": "ハンテール",
        "chinese": "猎斑鱼",
        "french": "Serpang"
      },
      "type": ["Water"],
      "base": {
        "HP": 55,
        "Attack": 104,
        "Defense": 105,
        "Sp. Attack": 94,
        "Sp. Defense": 75,
        "Speed": 52
      },
      "species": "Deep Sea Pokémon",
      "description": "Deep seas are their habitat. According to tradition, when Huntail wash up onshore, something unfortunate will happen.",
      "evolution": { "prev": ["366", "trade holding Deep Sea Tooth"] },
      "profile": {
        "height": "1.7 m",
        "weight": "27 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Swift Swim", "false"],
          ["Water Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/367.png",
        "thumbnail": "src/assets/thumbnails/367.png",
        "hires": "src/assets/hires/367.png"
      }
    },
    {
      "id": 368,
      "name": {
        "english": "Gorebyss",
        "japanese": "サクラビス",
        "chinese": "樱花鱼",
        "french": "Rosabyss"
      },
      "type": ["Water"],
      "base": {
        "HP": 55,
        "Attack": 84,
        "Defense": 105,
        "Sp. Attack": 114,
        "Sp. Defense": 75,
        "Speed": 52
      },
      "species": "South Sea Pokémon",
      "description": "It sucks bodily fluids out of its prey. The leftover meat sinks to the seafloor, where it becomes food for other Pokémon.",
      "evolution": { "prev": ["366", "trade holding Deep Sea Scale"] },
      "profile": {
        "height": "1.8 m",
        "weight": "22.6 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Swift Swim", "false"],
          ["Hydration", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/368.png",
        "thumbnail": "src/assets/thumbnails/368.png",
        "hires": "src/assets/hires/368.png"
      }
    },
    {
      "id": 369,
      "name": {
        "english": "Relicanth",
        "japanese": "ジーランス",
        "chinese": "古空棘鱼",
        "french": "Relicanth"
      },
      "type": ["Water", "Rock"],
      "base": {
        "HP": 100,
        "Attack": 90,
        "Defense": 130,
        "Sp. Attack": 45,
        "Sp. Defense": 65,
        "Speed": 55
      },
      "species": "Longevity Pokémon",
      "description": "The reason it hasn’t changed at all in a hundred million years is that it’s apparently already a perfect life-form.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "23.4 kg",
        "egg": ["Water 1", "Water 2"],
        "ability": [
          ["Swift Swim", "false"],
          ["Rock Head", "false"],
          ["Sturdy", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/369.png",
        "thumbnail": "src/assets/thumbnails/369.png",
        "hires": "src/assets/hires/369.png"
      }
    },
    {
      "id": 370,
      "name": {
        "english": "Luvdisc",
        "japanese": "ラブカス",
        "chinese": "爱心鱼",
        "french": "Lovdisc"
      },
      "type": ["Water"],
      "base": {
        "HP": 43,
        "Attack": 30,
        "Defense": 55,
        "Sp. Attack": 40,
        "Sp. Defense": 65,
        "Speed": 97
      },
      "species": "Rendezvous Pokémon",
      "description": "Luvdisc makes its home in coral reefs in warm seas. It especially likes sleeping in the space between Corsola’s branches.",
      "evolution": {},
      "profile": {
        "height": "0.6 m",
        "weight": "8.7 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Swift Swim", "false"],
          ["Hydration", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/370.png",
        "thumbnail": "src/assets/thumbnails/370.png",
        "hires": "src/assets/hires/370.png"
      }
    },
    {
      "id": 371,
      "name": {
        "english": "Bagon",
        "japanese": "タツベイ",
        "chinese": "宝贝龙",
        "french": "Draby"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 45,
        "Attack": 75,
        "Defense": 60,
        "Sp. Attack": 40,
        "Sp. Defense": 30,
        "Speed": 50
      },
      "species": "Rock Head Pokémon",
      "description": "Some theories suggest that its behavior of forcefully bashing its head into things stimulates cells that affect its evolution.",
      "evolution": { "next": [["372", "Level 30"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "42.1 kg",
        "egg": ["Dragon"],
        "ability": [
          ["Rock Head", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/371.png",
        "thumbnail": "src/assets/thumbnails/371.png",
        "hires": "src/assets/hires/371.png"
      }
    },
    {
      "id": 372,
      "name": {
        "english": "Shelgon",
        "japanese": "コモルー",
        "chinese": "甲壳龙",
        "french": "Drackhaus"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 65,
        "Attack": 95,
        "Defense": 100,
        "Sp. Attack": 60,
        "Sp. Defense": 50,
        "Speed": 50
      },
      "species": "Endurance Pokémon",
      "description": "Shelgon lives deep within caves. It stays shut up in its hard shell, dreaming of the day it will be able to fly.",
      "evolution": { "prev": ["371", "Level 30"], "next": [["373", "Level 50"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "110.5 kg",
        "egg": ["Dragon"],
        "ability": [
          ["Rock Head", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/372.png",
        "thumbnail": "src/assets/thumbnails/372.png",
        "hires": "src/assets/hires/372.png"
      }
    },
    {
      "id": 373,
      "name": {
        "english": "Salamence",
        "japanese": "ボーマンダ",
        "chinese": "暴飞龙",
        "french": "Drattak"
      },
      "type": ["Dragon", "Flying"],
      "base": {
        "HP": 95,
        "Attack": 135,
        "Defense": 80,
        "Sp. Attack": 110,
        "Sp. Defense": 80,
        "Speed": 100
      },
      "species": "Dragon Pokémon",
      "description": "Thanks to its fervent wishes, the cells in its body finally mutated, and at last it has its heart’s desire—wings.",
      "evolution": { "prev": ["372", "Level 50"] },
      "profile": {
        "height": "1.5 m",
        "weight": "102.6 kg",
        "egg": ["Dragon"],
        "ability": [
          ["Intimidate", "false"],
          ["Moxie", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/373.png",
        "thumbnail": "src/assets/thumbnails/373.png",
        "hires": "src/assets/hires/373.png"
      }
    },
    {
      "id": 374,
      "name": {
        "english": "Beldum",
        "japanese": "ダンバル",
        "chinese": "铁哑铃",
        "french": "Terhal"
      },
      "type": ["Steel", "Psychic"],
      "base": {
        "HP": 40,
        "Attack": 55,
        "Defense": 80,
        "Sp. Attack": 35,
        "Sp. Defense": 60,
        "Speed": 30
      },
      "species": "Iron Ball Pokémon",
      "description": "If you anger it, it will do more than rampage. It will also burst out strong magnetism, causing nearby machines to break.",
      "evolution": { "next": [["375", "Level 20"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "95.2 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Clear Body", "false"],
          ["Light Metal", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/374.png",
        "thumbnail": "src/assets/thumbnails/374.png",
        "hires": "src/assets/hires/374.png"
      }
    },
    {
      "id": 375,
      "name": {
        "english": "Metang",
        "japanese": "メタング",
        "chinese": "金属怪",
        "french": "Métang"
      },
      "type": ["Steel", "Psychic"],
      "base": {
        "HP": 60,
        "Attack": 75,
        "Defense": 100,
        "Sp. Attack": 55,
        "Sp. Defense": 80,
        "Speed": 50
      },
      "species": "Iron Claw Pokémon",
      "description": "It flies at high speeds around the skies. When it finds its prey, Metang takes a firm grip with its sharp claws and never lets go.",
      "evolution": { "prev": ["374", "Level 20"], "next": [["376", "Level 45"]] },
      "profile": {
        "height": "1.2 m",
        "weight": "202.5 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Clear Body", "false"],
          ["Light Metal", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/375.png",
        "thumbnail": "src/assets/thumbnails/375.png",
        "hires": "src/assets/hires/375.png"
      }
    },
    {
      "id": 376,
      "name": {
        "english": "Metagross",
        "japanese": "メタグロス",
        "chinese": "巨金怪",
        "french": "Métalosse"
      },
      "type": ["Steel", "Psychic"],
      "base": {
        "HP": 80,
        "Attack": 135,
        "Defense": 130,
        "Sp. Attack": 95,
        "Sp. Defense": 90,
        "Speed": 70
      },
      "species": "Iron Leg Pokémon",
      "description": "It analyzes its opponents with more accuracy than a supercomputer, which enables it to calmly back them into a corner.",
      "evolution": { "prev": ["375", "Level 45"] },
      "profile": {
        "height": "1.6 m",
        "weight": "550 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Clear Body", "false"],
          ["Light Metal", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/376.png",
        "thumbnail": "src/assets/thumbnails/376.png",
        "hires": "src/assets/hires/376.png"
      }
    },
    {
      "id": 377,
      "name": {
        "english": "Regirock",
        "japanese": "レジロック",
        "chinese": "雷吉洛克",
        "french": "Regirock"
      },
      "type": ["Rock"],
      "base": {
        "HP": 80,
        "Attack": 100,
        "Defense": 200,
        "Sp. Attack": 50,
        "Sp. Defense": 100,
        "Speed": 50
      },
      "species": "Rock Peak Pokémon",
      "description": "Regirock’s body is composed entirely of rocks. Recently, a study made the startling discovery that the rocks were all unearthed from different locations.",
      "evolution": {},
      "profile": {
        "height": "1.7 m",
        "weight": "230 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Clear Body", "false"],
          ["Sturdy", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/377.png",
        "thumbnail": "src/assets/thumbnails/377.png",
        "hires": "src/assets/hires/377.png"
      }
    },
    {
      "id": 378,
      "name": {
        "english": "Regice",
        "japanese": "レジアイス",
        "chinese": "雷吉艾斯",
        "french": "Regice"
      },
      "type": ["Ice"],
      "base": {
        "HP": 80,
        "Attack": 50,
        "Defense": 100,
        "Sp. Attack": 100,
        "Sp. Defense": 200,
        "Speed": 50
      },
      "species": "Iceberg Pokémon",
      "description": "Regice cloaks itself with frigid air of -328 degrees Fahrenheit. Things will freeze solid just by going near this Pokémon. Its icy body is so cold, it will not melt even if it is immersed in magma.",
      "evolution": {},
      "profile": {
        "height": "1.8 m",
        "weight": "175 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Clear Body", "false"],
          ["Ice Body", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/378.png",
        "thumbnail": "src/assets/thumbnails/378.png",
        "hires": "src/assets/hires/378.png"
      }
    },
    {
      "id": 379,
      "name": {
        "english": "Registeel",
        "japanese": "レジスチル",
        "chinese": "雷吉斯奇鲁",
        "french": "Registeel"
      },
      "type": ["Steel"],
      "base": {
        "HP": 80,
        "Attack": 75,
        "Defense": 150,
        "Sp. Attack": 75,
        "Sp. Defense": 150,
        "Speed": 50
      },
      "species": "Iron Pokémon",
      "description": "Registeel was imprisoned by people in ancient times. The metal composing its body is thought to be a curious substance that is not of this earth.",
      "evolution": {},
      "profile": {
        "height": "1.9 m",
        "weight": "205 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Clear Body", "false"],
          ["Light Metal", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/379.png",
        "thumbnail": "src/assets/thumbnails/379.png",
        "hires": "src/assets/hires/379.png"
      }
    },
    {
      "id": 380,
      "name": {
        "english": "Latias",
        "japanese": "ラティアス",
        "chinese": "拉帝亚斯",
        "french": "Latias"
      },
      "type": ["Dragon", "Psychic"],
      "base": {
        "HP": 80,
        "Attack": 80,
        "Defense": 90,
        "Sp. Attack": 110,
        "Sp. Defense": 130,
        "Speed": 110
      },
      "species": "Eon Pokémon",
      "description": "Latias is highly intelligent and capable of understanding human speech. It is covered with a glass-like down. The Pokémon enfolds its body with its down and refracts light to alter its appearance.",
      "evolution": {},
      "profile": {
        "height": "1.4 m",
        "weight": "40 kg",
        "egg": ["Undiscovered"],
        "ability": [["Levitate", "false"]],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/380.png",
        "thumbnail": "src/assets/thumbnails/380.png",
        "hires": "src/assets/hires/380.png"
      }
    },
    {
      "id": 381,
      "name": {
        "english": "Latios",
        "japanese": "ラティオス",
        "chinese": "拉帝欧斯",
        "french": "Latios"
      },
      "type": ["Dragon", "Psychic"],
      "base": {
        "HP": 80,
        "Attack": 90,
        "Defense": 80,
        "Sp. Attack": 130,
        "Sp. Defense": 110,
        "Speed": 110
      },
      "species": "Eon Pokémon",
      "description": "Latios will only open its heart to a Trainer with a compassionate spirit. This Pokémon can fly faster than a jet plane by folding its forelegs to minimize air resistance.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "60 kg",
        "egg": ["Undiscovered"],
        "ability": [["Levitate", "false"]],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/381.png",
        "thumbnail": "src/assets/thumbnails/381.png",
        "hires": "src/assets/hires/381.png"
      }
    },
    {
      "id": 382,
      "name": {
        "english": "Kyogre",
        "japanese": "カイオーガ",
        "chinese": "盖欧卡",
        "french": "Kyogre"
      },
      "type": ["Water"],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 90,
        "Sp. Attack": 150,
        "Sp. Defense": 140,
        "Speed": 90
      },
      "species": "Sea Basin Pokémon",
      "description": "Kyogre is said to be the personification of the sea itself. Legends tell of its many clashes against Groudon, as each sought to gain the power of nature.",
      "evolution": {},
      "profile": {
        "height": "4.5 m",
        "weight": "352 kg",
        "egg": ["Undiscovered"],
        "ability": [["Drizzle", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/382.png",
        "thumbnail": "src/assets/thumbnails/382.png",
        "hires": "src/assets/hires/382.png"
      }
    },
    {
      "id": 383,
      "name": {
        "english": "Groudon",
        "japanese": "グラードン",
        "chinese": "固拉多",
        "french": "Groudon"
      },
      "type": ["Ground"],
      "base": {
        "HP": 100,
        "Attack": 150,
        "Defense": 140,
        "Sp. Attack": 100,
        "Sp. Defense": 90,
        "Speed": 90
      },
      "species": "Continent Pokémon",
      "description": "Through Primal Reversion and with nature’s full power, it will take back its true form. It can cause magma to erupt and expand the landmass of the world.",
      "evolution": {},
      "profile": {
        "height": "3.5 m",
        "weight": "950 kg",
        "egg": ["Undiscovered"],
        "ability": [["Drought", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/383.png",
        "thumbnail": "src/assets/thumbnails/383.png",
        "hires": "src/assets/hires/383.png"
      }
    },
    {
      "id": 384,
      "name": {
        "english": "Rayquaza",
        "japanese": "レックウザ",
        "chinese": "烈空坐",
        "french": "Rayquaza"
      },
      "type": ["Dragon", "Flying"],
      "base": {
        "HP": 105,
        "Attack": 150,
        "Defense": 90,
        "Sp. Attack": 150,
        "Sp. Defense": 90,
        "Speed": 95
      },
      "species": "Sky High Pokémon",
      "description": "It flies forever through the ozone layer, consuming meteoroids for sustenance. The many meteoroids in its body provide the energy it needs to Mega Evolve.",
      "evolution": {},
      "profile": {
        "height": "7 m",
        "weight": "206.5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Air Lock", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/384.png",
        "thumbnail": "src/assets/thumbnails/384.png",
        "hires": "src/assets/hires/384.png"
      }
    },
    {
      "id": 385,
      "name": {
        "english": "Jirachi",
        "japanese": "ジラーチ",
        "chinese": "基拉祈",
        "french": "Jirachi"
      },
      "type": ["Steel", "Psychic"],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 100,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 100
      },
      "species": "Wish Pokémon",
      "description": "Jirachi will awaken from its sleep of a thousand years if you sing to it in a voice of purity. It is said to make true any wish that people desire.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "1.1 kg",
        "egg": ["Undiscovered"],
        "ability": [["Serene Grace", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/385.png",
        "thumbnail": "src/assets/thumbnails/385.png",
        "hires": "src/assets/hires/385.png"
      }
    },
    {
      "id": 386,
      "name": {
        "english": "Deoxys",
        "japanese": "デオキシス",
        "chinese": "代欧奇希斯",
        "french": "Deoxys"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 50,
        "Attack": 150,
        "Defense": 50,
        "Sp. Attack": 150,
        "Sp. Defense": 50,
        "Speed": 150
      },
      "species": "DNA Pokémon",
      "description": "Deoxys emerged from a virus that came from space. It is highly intelligent and wields psychokinetic powers. This Pokémon shoots lasers from the crystalline organ on its chest.",
      "evolution": {},
      "profile": {
        "height": "1.7 m",
        "weight": "60.8 kg",
        "egg": ["Undiscovered"],
        "ability": [["Pressure", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/386.png",
        "thumbnail": "src/assets/thumbnails/386.png",
        "hires": "src/assets/hires/386.png"
      }
    },
    {
      "id": 387,
      "name": {
        "english": "Turtwig",
        "japanese": "ナエトル",
        "chinese": "草苗龟",
        "french": "Tortipouss"
      },
      "type": ["Grass"],
      "base": {
        "HP": 55,
        "Attack": 68,
        "Defense": 64,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 31
      },
      "species": "Tiny Leaf Pokémon",
      "description": "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.",
      "evolution": { "next": [["388", "Level 18"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "10.2 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Shell Armor", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/387.png",
        "thumbnail": "src/assets/thumbnails/387.png",
        "hires": "src/assets/hires/387.png"
      }
    },
    {
      "id": 388,
      "name": {
        "english": "Grotle",
        "japanese": "ハヤシガメ",
        "chinese": "树林龟",
        "french": "Boskara"
      },
      "type": ["Grass"],
      "base": {
        "HP": 75,
        "Attack": 89,
        "Defense": 85,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 36
      },
      "species": "Grove Pokémon",
      "description": "It knows where pure water wells up. It carries fellow Pokémon there on its back.",
      "evolution": { "prev": ["387", "Level 18"], "next": [["389", "Level 32"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "97 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Shell Armor", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/388.png",
        "thumbnail": "src/assets/thumbnails/388.png",
        "hires": "src/assets/hires/388.png"
      }
    },
    {
      "id": 389,
      "name": {
        "english": "Torterra",
        "japanese": "ドダイトス",
        "chinese": "土台龟",
        "french": "Torterra"
      },
      "type": ["Grass", "Ground"],
      "base": {
        "HP": 95,
        "Attack": 109,
        "Defense": 105,
        "Sp. Attack": 75,
        "Sp. Defense": 85,
        "Speed": 56
      },
      "species": "Continent Pokémon",
      "description": "Small Pokémon occasionally gather on its unmoving back to begin building their nests.",
      "evolution": { "prev": ["388", "Level 32"] },
      "profile": {
        "height": "2.2 m",
        "weight": "310 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Shell Armor", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/389.png",
        "thumbnail": "src/assets/thumbnails/389.png",
        "hires": "src/assets/hires/389.png"
      }
    },
    {
      "id": 390,
      "name": {
        "english": "Chimchar",
        "japanese": "ヒコザル",
        "chinese": "小火焰猴",
        "french": "Ouisticram"
      },
      "type": ["Fire"],
      "base": {
        "HP": 44,
        "Attack": 58,
        "Defense": 44,
        "Sp. Attack": 58,
        "Sp. Defense": 44,
        "Speed": 61
      },
      "species": "Chimp Pokémon",
      "description": "The gas made in its belly burns from its rear end. The fire burns weakly when it feels sick.",
      "evolution": { "next": [["391", "Level 14"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "6.2 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Blaze", "false"],
          ["Iron Fist", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/390.png",
        "thumbnail": "src/assets/thumbnails/390.png",
        "hires": "src/assets/hires/390.png"
      }
    },
    {
      "id": 391,
      "name": {
        "english": "Monferno",
        "japanese": "モウカザル",
        "chinese": "猛火猴",
        "french": "Chimpenfeu"
      },
      "type": ["Fire", "Fighting"],
      "base": {
        "HP": 64,
        "Attack": 78,
        "Defense": 52,
        "Sp. Attack": 78,
        "Sp. Defense": 52,
        "Speed": 81
      },
      "species": "Playful Pokémon",
      "description": "It uses ceilings and walls to launch aerial attacks. Its fiery tail is but one weapon.",
      "evolution": { "prev": ["390", "Level 14"], "next": [["392", "Level 36"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "22 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Blaze", "false"],
          ["Iron Fist", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/391.png",
        "thumbnail": "src/assets/thumbnails/391.png",
        "hires": "src/assets/hires/391.png"
      }
    },
    {
      "id": 392,
      "name": {
        "english": "Infernape",
        "japanese": "ゴウカザル",
        "chinese": "烈焰猴",
        "french": "Simiabraz"
      },
      "type": ["Fire", "Fighting"],
      "base": {
        "HP": 76,
        "Attack": 104,
        "Defense": 71,
        "Sp. Attack": 104,
        "Sp. Defense": 71,
        "Speed": 108
      },
      "species": "Flame Pokémon",
      "description": "It tosses its enemies around with agility. It uses all its limbs to fight in its own unique style.",
      "evolution": { "prev": ["391", "Level 36"] },
      "profile": {
        "height": "1.2 m",
        "weight": "55 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Blaze", "false"],
          ["Iron Fist", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/392.png",
        "thumbnail": "src/assets/thumbnails/392.png",
        "hires": "src/assets/hires/392.png"
      }
    },
    {
      "id": 393,
      "name": {
        "english": "Piplup",
        "japanese": "ポッチャマ",
        "chinese": "波加曼",
        "french": "Tiplouf"
      },
      "type": ["Water"],
      "base": {
        "HP": 53,
        "Attack": 51,
        "Defense": 53,
        "Sp. Attack": 61,
        "Sp. Defense": 56,
        "Speed": 40
      },
      "species": "Penguin Pokémon",
      "description": "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.",
      "evolution": { "next": [["394", "Level 16"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "5.2 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Torrent", "false"],
          ["Defiant", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/393.png",
        "thumbnail": "src/assets/thumbnails/393.png",
        "hires": "src/assets/hires/393.png"
      }
    },
    {
      "id": 394,
      "name": {
        "english": "Prinplup",
        "japanese": "ポッタイシ",
        "chinese": "波皇子",
        "french": "Prinplouf"
      },
      "type": ["Water"],
      "base": {
        "HP": 64,
        "Attack": 66,
        "Defense": 68,
        "Sp. Attack": 81,
        "Sp. Defense": 76,
        "Speed": 50
      },
      "species": "Penguin Pokémon",
      "description": "It lives a solitary life. Its wings deliver wicked blows that can snap even the thickest of trees.",
      "evolution": { "prev": ["393", "Level 16"], "next": [["395", "Level 36"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "23 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Torrent", "false"],
          ["Defiant", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/394.png",
        "thumbnail": "src/assets/thumbnails/394.png",
        "hires": "src/assets/hires/394.png"
      }
    },
    {
      "id": 395,
      "name": {
        "english": "Empoleon",
        "japanese": "エンペルト",
        "chinese": "帝王拿波",
        "french": "Pingoléon"
      },
      "type": ["Water", "Steel"],
      "base": {
        "HP": 84,
        "Attack": 86,
        "Defense": 88,
        "Sp. Attack": 111,
        "Sp. Defense": 101,
        "Speed": 60
      },
      "species": "Emperor Pokémon",
      "description": "The three horns that extend from its beak attest to its power. The leader has the biggest horns.",
      "evolution": { "prev": ["394", "Level 36"] },
      "profile": {
        "height": "1.7 m",
        "weight": "84.5 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Torrent", "false"],
          ["Defiant", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/395.png",
        "thumbnail": "src/assets/thumbnails/395.png",
        "hires": "src/assets/hires/395.png"
      }
    },
    {
      "id": 396,
      "name": {
        "english": "Starly",
        "japanese": "ムックル",
        "chinese": "姆克儿",
        "french": "Étourmi"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 40,
        "Attack": 55,
        "Defense": 30,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 60
      },
      "species": "Starling Pokémon",
      "description": "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.",
      "evolution": { "next": [["397", "Level 14"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "2 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Reckless", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/396.png",
        "thumbnail": "src/assets/thumbnails/396.png",
        "hires": "src/assets/hires/396.png"
      }
    },
    {
      "id": 397,
      "name": {
        "english": "Staravia",
        "japanese": "ムクバード",
        "chinese": "姆克鸟",
        "french": "Étourvol"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 55,
        "Attack": 75,
        "Defense": 50,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 80
      },
      "species": "Starling Pokémon",
      "description": "It lives in forests and fields. Squabbles over territory occur when flocks collide.",
      "evolution": { "prev": ["396", "Level 14"], "next": [["398", "Level 34"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "15.5 kg",
        "egg": ["Flying"],
        "ability": [
          ["Intimidate", "false"],
          ["Reckless", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/397.png",
        "thumbnail": "src/assets/thumbnails/397.png",
        "hires": "src/assets/hires/397.png"
      }
    },
    {
      "id": 398,
      "name": {
        "english": "Staraptor",
        "japanese": "ムクホーク",
        "chinese": "姆克鹰",
        "french": "Étouraptor"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 85,
        "Attack": 120,
        "Defense": 70,
        "Sp. Attack": 50,
        "Sp. Defense": 60,
        "Speed": 100
      },
      "species": "Predator Pokémon",
      "description": "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",
      "evolution": { "prev": ["397", "Level 34"] },
      "profile": {
        "height": "1.2 m",
        "weight": "24.9 kg",
        "egg": ["Flying"],
        "ability": [
          ["Intimidate", "false"],
          ["Reckless", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/398.png",
        "thumbnail": "src/assets/thumbnails/398.png",
        "hires": "src/assets/hires/398.png"
      }
    },
    {
      "id": 399,
      "name": {
        "english": "Bidoof",
        "japanese": "ビッパ",
        "chinese": "大牙狸",
        "french": "Keunotor"
      },
      "type": ["Normal"],
      "base": {
        "HP": 59,
        "Attack": 45,
        "Defense": 40,
        "Sp. Attack": 35,
        "Sp. Defense": 40,
        "Speed": 31
      },
      "species": "Plump Mouse Pokémon",
      "description": "It constantly gnaws on logs and rocks to whittle down its front teeth. It nests alongside water.",
      "evolution": { "next": [["400", "Level 15"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "20 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Simple", "false"],
          ["Unaware", "false"],
          ["Moody", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/399.png",
        "thumbnail": "src/assets/thumbnails/399.png",
        "hires": "src/assets/hires/399.png"
      }
    },
    {
      "id": 400,
      "name": {
        "english": "Bibarel",
        "japanese": "ビーダル",
        "chinese": "大尾狸",
        "french": "Castorno"
      },
      "type": ["Normal", "Water"],
      "base": {
        "HP": 79,
        "Attack": 85,
        "Defense": 60,
        "Sp. Attack": 55,
        "Sp. Defense": 60,
        "Speed": 71
      },
      "species": "Beaver Pokémon",
      "description": "It makes its nest by damming streams with bark and mud. It is known as an industrious worker.",
      "evolution": { "prev": ["399", "Level 15"] },
      "profile": {
        "height": "1 m",
        "weight": "31.5 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Simple", "false"],
          ["Unaware", "false"],
          ["Moody", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/400.png",
        "thumbnail": "src/assets/thumbnails/400.png",
        "hires": "src/assets/hires/400.png"
      }
    },
    {
      "id": 401,
      "name": {
        "english": "Kricketot",
        "japanese": "コロボーシ",
        "chinese": "圆法师",
        "french": "Crikzik"
      },
      "type": ["Bug"],
      "base": {
        "HP": 37,
        "Attack": 25,
        "Defense": 41,
        "Sp. Attack": 25,
        "Sp. Defense": 41,
        "Speed": 25
      },
      "species": "Cricket Pokémon",
      "description": "When its antennae hit each other, it sounds like the music of a xylophone.",
      "evolution": { "next": [["402", "Level 10"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "2.2 kg",
        "egg": ["Bug"],
        "ability": [
          ["Shed Skin", "false"],
          ["Run Away", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/401.png",
        "thumbnail": "src/assets/thumbnails/401.png",
        "hires": "src/assets/hires/401.png"
      }
    },
    {
      "id": 402,
      "name": {
        "english": "Kricketune",
        "japanese": "コロトック",
        "chinese": "音箱蟀",
        "french": "Mélokrik"
      },
      "type": ["Bug"],
      "base": {
        "HP": 77,
        "Attack": 85,
        "Defense": 51,
        "Sp. Attack": 55,
        "Sp. Defense": 51,
        "Speed": 65
      },
      "species": "Cricket Pokémon",
      "description": "It signals its emotions with its melodies. Scientists are studying these melodic patterns.",
      "evolution": { "prev": ["401", "Level 10"] },
      "profile": {
        "height": "1 m",
        "weight": "25.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Technician", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/402.png",
        "thumbnail": "src/assets/thumbnails/402.png",
        "hires": "src/assets/hires/402.png"
      }
    },
    {
      "id": 403,
      "name": {
        "english": "Shinx",
        "japanese": "コリンク",
        "chinese": "小猫怪",
        "french": "Lixy"
      },
      "type": ["Electric"],
      "base": {
        "HP": 45,
        "Attack": 65,
        "Defense": 34,
        "Sp. Attack": 40,
        "Sp. Defense": 34,
        "Speed": 45
      },
      "species": "Flash Pokémon",
      "description": "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded.",
      "evolution": { "next": [["404", "Level 15"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "9.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Rivalry", "false"],
          ["Intimidate", "false"],
          ["Guts", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/403.png",
        "thumbnail": "src/assets/thumbnails/403.png",
        "hires": "src/assets/hires/403.png"
      }
    },
    {
      "id": 404,
      "name": {
        "english": "Luxio",
        "japanese": "ルクシオ",
        "chinese": "勒克猫",
        "french": "Luxio"
      },
      "type": ["Electric"],
      "base": {
        "HP": 60,
        "Attack": 85,
        "Defense": 49,
        "Sp. Attack": 60,
        "Sp. Defense": 49,
        "Speed": 60
      },
      "species": "Spark Pokémon",
      "description": "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
      "evolution": { "prev": ["403", "Level 15"], "next": [["405", "Level 30"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "30.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Rivalry", "false"],
          ["Intimidate", "false"],
          ["Guts", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/404.png",
        "thumbnail": "src/assets/thumbnails/404.png",
        "hires": "src/assets/hires/404.png"
      }
    },
    {
      "id": 405,
      "name": {
        "english": "Luxray",
        "japanese": "レントラー",
        "chinese": "伦琴猫",
        "french": "Luxray"
      },
      "type": ["Electric"],
      "base": {
        "HP": 80,
        "Attack": 120,
        "Defense": 79,
        "Sp. Attack": 95,
        "Sp. Defense": 79,
        "Speed": 70
      },
      "species": "Gleam Eyes Pokémon",
      "description": "Luxray’s ability to see through objects comes in handy when it’s scouting for danger.",
      "evolution": { "prev": ["404", "Level 30"] },
      "profile": {
        "height": "1.4 m",
        "weight": "42 kg",
        "egg": ["Field"],
        "ability": [
          ["Rivalry", "false"],
          ["Intimidate", "false"],
          ["Guts", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/405.png",
        "thumbnail": "src/assets/thumbnails/405.png",
        "hires": "src/assets/hires/405.png"
      }
    },
    {
      "id": 406,
      "name": {
        "english": "Budew",
        "japanese": "スボミー",
        "chinese": "含羞苞",
        "french": "Rozbouton"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 40,
        "Attack": 30,
        "Defense": 35,
        "Sp. Attack": 50,
        "Sp. Defense": 70,
        "Speed": 55
      },
      "species": "Bud Pokémon",
      "description": "Over the winter, it closes its bud and endures the cold. In spring, the bud opens and releases pollen.",
      "evolution": { "next": [["315", "high Friendship, Daytime"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "1.2 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Natural Cure", "false"],
          ["Poison Point", "false"],
          ["Leaf Guard", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/406.png",
        "thumbnail": "src/assets/thumbnails/406.png",
        "hires": "src/assets/hires/406.png"
      }
    },
    {
      "id": 407,
      "name": {
        "english": "Roserade",
        "japanese": "ロズレイド",
        "chinese": "罗丝雷朵",
        "french": "Roserade"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 60,
        "Attack": 70,
        "Defense": 65,
        "Sp. Attack": 125,
        "Sp. Defense": 105,
        "Speed": 90
      },
      "species": "Bouquet Pokémon",
      "description": "With the movements of a dancer, it strikes with whips that are densely lined with poison thorns.",
      "evolution": { "prev": ["315", "use Shiny Stone"] },
      "profile": {
        "height": "0.9 m",
        "weight": "14.5 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [
          ["Natural Cure", "false"],
          ["Poison Point", "false"],
          ["Technician", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/407.png",
        "thumbnail": "src/assets/thumbnails/407.png",
        "hires": "src/assets/hires/407.png"
      }
    },
    {
      "id": 408,
      "name": {
        "english": "Cranidos",
        "japanese": "ズガイドス",
        "chinese": "头盖龙",
        "french": "Kranidos"
      },
      "type": ["Rock"],
      "base": {
        "HP": 67,
        "Attack": 125,
        "Defense": 40,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 58
      },
      "species": "Head Butt Pokémon",
      "description": "Its hard skull is its distinguishing feature. It snapped trees by headbutting them, and then it fed on their ripe berries.",
      "evolution": { "next": [["409", "Level 30"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "31.5 kg",
        "egg": ["Monster"],
        "ability": [
          ["Mold Breaker", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/408.png",
        "thumbnail": "src/assets/thumbnails/408.png",
        "hires": "src/assets/hires/408.png"
      }
    },
    {
      "id": 409,
      "name": {
        "english": "Rampardos",
        "japanese": "ラムパルド",
        "chinese": "战槌龙",
        "french": "Charkos"
      },
      "type": ["Rock"],
      "base": {
        "HP": 97,
        "Attack": 165,
        "Defense": 60,
        "Sp. Attack": 65,
        "Sp. Defense": 50,
        "Speed": 58
      },
      "species": "Head Butt Pokémon",
      "description": "This ancient Pokémon used headbutts skillfully. Its brain was really small, so some theories suggest that its stupidity led to its extinction.",
      "evolution": { "prev": ["408", "Level 30"] },
      "profile": {
        "height": "1.6 m",
        "weight": "102.5 kg",
        "egg": ["Monster"],
        "ability": [
          ["Mold Breaker", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/409.png",
        "thumbnail": "src/assets/thumbnails/409.png",
        "hires": "src/assets/hires/409.png"
      }
    },
    {
      "id": 410,
      "name": {
        "english": "Shieldon",
        "japanese": "タテトプス",
        "chinese": "盾甲龙",
        "french": "Dinoclier"
      },
      "type": ["Rock", "Steel"],
      "base": {
        "HP": 30,
        "Attack": 42,
        "Defense": 118,
        "Sp. Attack": 42,
        "Sp. Defense": 88,
        "Speed": 30
      },
      "species": "Shield Pokémon",
      "description": "Although its fossils can be found in layers of primeval rock, nothing but its face has ever been discovered.",
      "evolution": { "next": [["411", "Level 30"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "57 kg",
        "egg": ["Monster"],
        "ability": [
          ["Sturdy", "false"],
          ["Soundproof", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/410.png",
        "thumbnail": "src/assets/thumbnails/410.png",
        "hires": "src/assets/hires/410.png"
      }
    },
    {
      "id": 411,
      "name": {
        "english": "Bastiodon",
        "japanese": "トリデプス",
        "chinese": "护城龙",
        "french": "Bastiodon"
      },
      "type": ["Rock", "Steel"],
      "base": {
        "HP": 60,
        "Attack": 52,
        "Defense": 168,
        "Sp. Attack": 47,
        "Sp. Defense": 138,
        "Speed": 30
      },
      "species": "Shield Pokémon",
      "description": "This Pokémon is from roughly 100 million years ago. Its terrifyingly tough face is harder than steel.",
      "evolution": { "prev": ["410", "Level 30"] },
      "profile": {
        "height": "1.3 m",
        "weight": "149.5 kg",
        "egg": ["Monster"],
        "ability": [
          ["Sturdy", "false"],
          ["Soundproof", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/411.png",
        "thumbnail": "src/assets/thumbnails/411.png",
        "hires": "src/assets/hires/411.png"
      }
    },
    {
      "id": 412,
      "name": {
        "english": "Burmy",
        "japanese": "ミノムッチ",
        "chinese": "结草儿",
        "french": "Cheniti"
      },
      "type": ["Bug"],
      "base": {
        "HP": 40,
        "Attack": 29,
        "Defense": 45,
        "Sp. Attack": 29,
        "Sp. Defense": 45,
        "Speed": 36
      },
      "species": "Bagworm Pokémon",
      "description": "If its cloak is broken in battle, it quickly remakes the cloak with materials nearby.",
      "evolution": {
        "next": [
          ["413", "Level 20, Female"],
          ["414", "Level 20, Male"]
        ]
      },
      "profile": {
        "height": "0.2 m",
        "weight": "3.4 kg",
        "egg": ["Bug"],
        "ability": [
          ["Shed Skin", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/412.png",
        "thumbnail": "src/assets/thumbnails/412.png",
        "hires": "src/assets/hires/412.png"
      }
    },
    {
      "id": 413,
      "name": {
        "english": "Wormadam",
        "japanese": "ミノマダム",
        "chinese": "结草贵妇",
        "french": "Cheniselle"
      },
      "type": ["Bug", "Grass"],
      "base": {
        "HP": 60,
        "Attack": 59,
        "Defense": 85,
        "Sp. Attack": 79,
        "Sp. Defense": 105,
        "Speed": 36
      },
      "species": "Bagworm Pokémon",
      "description": "When Burmy evolved, its cloak became a part of this Pokémon’s body. The cloak is never shed.",
      "evolution": { "prev": ["412", "Level 20, Female"] },
      "profile": {
        "height": "0.5 m",
        "weight": "6.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Anticipation", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/413.png",
        "thumbnail": "src/assets/thumbnails/413.png",
        "hires": "src/assets/hires/413.png"
      }
    },
    {
      "id": 414,
      "name": {
        "english": "Mothim",
        "japanese": "ガーメイル",
        "chinese": "绅士蛾",
        "french": "Papilord"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 70,
        "Attack": 94,
        "Defense": 50,
        "Sp. Attack": 94,
        "Sp. Defense": 50,
        "Speed": 66
      },
      "species": "Moth Pokémon",
      "description": "It flutters around at night and steals honey from the Combee hive.",
      "evolution": { "prev": ["412", "Level 20, Male"] },
      "profile": {
        "height": "0.9 m",
        "weight": "23.3 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Tinted Lens", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/414.png",
        "thumbnail": "src/assets/thumbnails/414.png",
        "hires": "src/assets/hires/414.png"
      }
    },
    {
      "id": 415,
      "name": {
        "english": "Combee",
        "japanese": "ミツハニー",
        "chinese": "三蜜蜂",
        "french": "Apitrini"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 30,
        "Attack": 30,
        "Defense": 42,
        "Sp. Attack": 30,
        "Sp. Defense": 42,
        "Speed": 70
      },
      "species": "Tiny Bee Pokémon",
      "description": "It collects and delivers honey to its colony. At night, they cluster to form a beehive and sleep.",
      "evolution": { "next": [["416", "Level 21, Female"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "5.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Honey Gather", "false"],
          ["Hustle", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/415.png",
        "thumbnail": "src/assets/thumbnails/415.png",
        "hires": "src/assets/hires/415.png"
      }
    },
    {
      "id": 416,
      "name": {
        "english": "Vespiquen",
        "japanese": "ビークイン",
        "chinese": "蜂女王",
        "french": "Apireine"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 70,
        "Attack": 80,
        "Defense": 102,
        "Sp. Attack": 80,
        "Sp. Defense": 102,
        "Speed": 40
      },
      "species": "Beehive Pokémon",
      "description": "Its abdomen is a honeycomb for grubs. It raises its grubs on honey collected by Combee.",
      "evolution": { "prev": ["415", "Level 21, Female"] },
      "profile": {
        "height": "1.2 m",
        "weight": "38.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Pressure", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/416.png",
        "thumbnail": "src/assets/thumbnails/416.png",
        "hires": "src/assets/hires/416.png"
      }
    },
    {
      "id": 417,
      "name": {
        "english": "Pachirisu",
        "japanese": "パチリス",
        "chinese": "帕奇利兹",
        "french": "Pachirisu"
      },
      "type": ["Electric"],
      "base": {
        "HP": 60,
        "Attack": 45,
        "Defense": 70,
        "Sp. Attack": 45,
        "Sp. Defense": 90,
        "Speed": 95
      },
      "species": "EleSquirrel Pokémon",
      "description": "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
      "evolution": {},
      "profile": {
        "height": "0.4 m",
        "weight": "3.9 kg",
        "egg": ["Field", "Fairy"],
        "ability": [
          ["Run Away", "false"],
          ["Pickup", "false"],
          ["Volt Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/417.png",
        "thumbnail": "src/assets/thumbnails/417.png",
        "hires": "src/assets/hires/417.png"
      }
    },
    {
      "id": 418,
      "name": {
        "english": "Buizel",
        "japanese": "ブイゼル",
        "chinese": "泳圈鼬",
        "french": "Mustébouée"
      },
      "type": ["Water"],
      "base": {
        "HP": 55,
        "Attack": 65,
        "Defense": 35,
        "Sp. Attack": 60,
        "Sp. Defense": 30,
        "Speed": 85
      },
      "species": "Sea Weasel Pokémon",
      "description": "It inflates the flotation sac around its neck and pokes its head out of the water to see what is going on.",
      "evolution": { "next": [["419", "Level 26"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "29.5 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Swift Swim", "false"],
          ["Water Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/418.png",
        "thumbnail": "src/assets/thumbnails/418.png",
        "hires": "src/assets/hires/418.png"
      }
    },
    {
      "id": 419,
      "name": {
        "english": "Floatzel",
        "japanese": "フローゼル",
        "chinese": "浮潜鼬",
        "french": "Mustéflott"
      },
      "type": ["Water"],
      "base": {
        "HP": 85,
        "Attack": 105,
        "Defense": 55,
        "Sp. Attack": 85,
        "Sp. Defense": 50,
        "Speed": 115
      },
      "species": "Sea Weasel Pokémon",
      "description": "Its flotation sac developed as a result of pursuing aquatic prey. It can double as a rubber raft.",
      "evolution": { "prev": ["418", "Level 26"] },
      "profile": {
        "height": "1.1 m",
        "weight": "33.5 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Swift Swim", "false"],
          ["Water Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/419.png",
        "thumbnail": "src/assets/thumbnails/419.png",
        "hires": "src/assets/hires/419.png"
      }
    },
    {
      "id": 420,
      "name": {
        "english": "Cherubi",
        "japanese": "チェリンボ",
        "chinese": "樱花宝",
        "french": "Ceribou"
      },
      "type": ["Grass"],
      "base": {
        "HP": 45,
        "Attack": 35,
        "Defense": 45,
        "Sp. Attack": 62,
        "Sp. Defense": 53,
        "Speed": 35
      },
      "species": "Cherry Pokémon",
      "description": "It evolves by sucking the energy out of the small ball where it had been storing nutrients.",
      "evolution": { "next": [["421", "Level 25"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "3.3 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [["Chlorophyll", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/420.png",
        "thumbnail": "src/assets/thumbnails/420.png",
        "hires": "src/assets/hires/420.png"
      }
    },
    {
      "id": 421,
      "name": {
        "english": "Cherrim",
        "japanese": "チェリム",
        "chinese": "樱花儿",
        "french": "Ceriflor"
      },
      "type": ["Grass"],
      "base": {
        "HP": 70,
        "Attack": 60,
        "Defense": 70,
        "Sp. Attack": 87,
        "Sp. Defense": 78,
        "Speed": 85
      },
      "species": "Blossom Pokémon",
      "description": "If it senses strong sunlight, it opens its folded petals to absorb the sun’s rays with its whole body.",
      "evolution": { "prev": ["420", "Level 25"] },
      "profile": {
        "height": "0.5 m",
        "weight": "9.3 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [["Flower Gift", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/421.png",
        "thumbnail": "src/assets/thumbnails/421.png",
        "hires": "src/assets/hires/421.png"
      }
    },
    {
      "id": 422,
      "name": {
        "english": "Shellos",
        "japanese": "カラナクシ",
        "chinese": "无壳海兔",
        "french": "Sancoki"
      },
      "type": ["Water"],
      "base": {
        "HP": 76,
        "Attack": 48,
        "Defense": 48,
        "Sp. Attack": 57,
        "Sp. Defense": 62,
        "Speed": 34
      },
      "species": "Sea Slug Pokémon",
      "description": "When it senses danger, a purple liquid oozes out of it. The liquid is thought to be something like greasy sweat.",
      "evolution": { "next": [["423", "Level 30"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "6.3 kg",
        "egg": ["Water 1", "Amorphous"],
        "ability": [
          ["Sticky Hold", "false"],
          ["Storm Drain", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/422.png",
        "thumbnail": "src/assets/thumbnails/422.png",
        "hires": "src/assets/hires/422.png"
      }
    },
    {
      "id": 423,
      "name": {
        "english": "Gastrodon",
        "japanese": "トリトドン",
        "chinese": "海兔兽",
        "french": "Tritosor"
      },
      "type": ["Water", "Ground"],
      "base": {
        "HP": 111,
        "Attack": 83,
        "Defense": 68,
        "Sp. Attack": 92,
        "Sp. Defense": 82,
        "Speed": 39
      },
      "species": "Sea Slug Pokémon",
      "description": "Their shape and color change, depending on their environment and diet. There are many of them at beaches where the waves are calm.",
      "evolution": { "prev": ["422", "Level 30"] },
      "profile": {
        "height": "0.9 m",
        "weight": "29.9 kg",
        "egg": ["Water 1", "Amorphous"],
        "ability": [
          ["Sticky Hold", "false"],
          ["Storm Drain", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/423.png",
        "thumbnail": "src/assets/thumbnails/423.png",
        "hires": "src/assets/hires/423.png"
      }
    },
    {
      "id": 424,
      "name": {
        "english": "Ambipom",
        "japanese": "エテボース",
        "chinese": "双尾怪手",
        "french": "Capidextre"
      },
      "type": ["Normal"],
      "base": {
        "HP": 75,
        "Attack": 100,
        "Defense": 66,
        "Sp. Attack": 60,
        "Sp. Defense": 66,
        "Speed": 115
      },
      "species": "Long Tail Pokémon",
      "description": "It uses its tails for everything. If it wraps both of its tails around you and gives you a squeeze, that’s proof it really likes you.",
      "evolution": { "prev": ["190", "after Double Hit learned"] },
      "profile": {
        "height": "1.2 m",
        "weight": "20.3 kg",
        "egg": ["Field"],
        "ability": [
          ["Technician", "false"],
          ["Pickup", "false"],
          ["Skill Link", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/424.png",
        "thumbnail": "src/assets/thumbnails/424.png",
        "hires": "src/assets/hires/424.png"
      }
    },
    {
      "id": 425,
      "name": {
        "english": "Drifloon",
        "japanese": "フワンテ",
        "chinese": "飘飘球",
        "french": "Baudrive"
      },
      "type": ["Ghost", "Flying"],
      "base": {
        "HP": 90,
        "Attack": 50,
        "Defense": 34,
        "Sp. Attack": 60,
        "Sp. Defense": 44,
        "Speed": 70
      },
      "species": "Balloon Pokémon",
      "description": "Wandering souls gathered together to form this Pokémon. When trying to make friends with children, Drifloon grabs them by the hand.",
      "evolution": { "next": [["426", "Level 28"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "1.2 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Aftermath", "false"],
          ["Unburden", "false"],
          ["Flare Boost", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/425.png",
        "thumbnail": "src/assets/thumbnails/425.png",
        "hires": "src/assets/hires/425.png"
      }
    },
    {
      "id": 426,
      "name": {
        "english": "Drifblim",
        "japanese": "フワライド",
        "chinese": "随风球",
        "french": "Grodrive"
      },
      "type": ["Ghost", "Flying"],
      "base": {
        "HP": 150,
        "Attack": 80,
        "Defense": 44,
        "Sp. Attack": 90,
        "Sp. Defense": 54,
        "Speed": 80
      },
      "species": "Blimp Pokémon",
      "description": "The raw material for the gas inside its body is souls. When its body starts to deflate, it’s thought to carry away people and Pokémon.",
      "evolution": { "prev": ["425", "Level 28"] },
      "profile": {
        "height": "1.2 m",
        "weight": "15 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Aftermath", "false"],
          ["Unburden", "false"],
          ["Flare Boost", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/426.png",
        "thumbnail": "src/assets/thumbnails/426.png",
        "hires": "src/assets/hires/426.png"
      }
    },
    {
      "id": 427,
      "name": {
        "english": "Buneary",
        "japanese": "ミミロル",
        "chinese": "卷卷耳",
        "french": "Laporeille"
      },
      "type": ["Normal"],
      "base": {
        "HP": 55,
        "Attack": 66,
        "Defense": 44,
        "Sp. Attack": 44,
        "Sp. Defense": 56,
        "Speed": 85
      },
      "species": "Rabbit Pokémon",
      "description": "The reason it keeps one ear rolled up is so it can launch a swift counterattack if it’s attacked by an enemy.",
      "evolution": { "next": [["428", "high Friendship"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "5.5 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Run Away", "false"],
          ["Klutz", "false"],
          ["Limber", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/427.png",
        "thumbnail": "src/assets/thumbnails/427.png",
        "hires": "src/assets/hires/427.png"
      }
    },
    {
      "id": 428,
      "name": {
        "english": "Lopunny",
        "japanese": "ミミロップ",
        "chinese": "长耳兔",
        "french": "Lockpin"
      },
      "type": ["Normal"],
      "base": {
        "HP": 65,
        "Attack": 76,
        "Defense": 84,
        "Sp. Attack": 54,
        "Sp. Defense": 96,
        "Speed": 105
      },
      "species": "Rabbit Pokémon",
      "description": "It’s notably wary and has a dislike of fighting, but at the same time, it can deliver powerful kicks with its lithe legs.",
      "evolution": { "prev": ["427", "high Friendship"] },
      "profile": {
        "height": "1.2 m",
        "weight": "33.3 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Cute Charm", "false"],
          ["Klutz", "false"],
          ["Limber", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/428.png",
        "thumbnail": "src/assets/thumbnails/428.png",
        "hires": "src/assets/hires/428.png"
      }
    },
    {
      "id": 429,
      "name": {
        "english": "Mismagius",
        "japanese": "ムウマージ",
        "chinese": "梦妖魔",
        "french": "Magirêve"
      },
      "type": ["Ghost"],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 60,
        "Sp. Attack": 105,
        "Sp. Defense": 105,
        "Speed": 105
      },
      "species": "Magical Pokémon",
      "description": "Its muttered curses can cause awful headaches or terrifying visions that torment others.",
      "evolution": { "prev": ["200", "use Dusk Stone"] },
      "profile": {
        "height": "0.9 m",
        "weight": "4.4 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/429.png",
        "thumbnail": "src/assets/thumbnails/429.png",
        "hires": "src/assets/hires/429.png"
      }
    },
    {
      "id": 430,
      "name": {
        "english": "Honchkrow",
        "japanese": "ドンカラス",
        "chinese": "乌鸦头头",
        "french": "Corboss"
      },
      "type": ["Dark", "Flying"],
      "base": {
        "HP": 100,
        "Attack": 125,
        "Defense": 52,
        "Sp. Attack": 105,
        "Sp. Defense": 52,
        "Speed": 71
      },
      "species": "Big Boss Pokémon",
      "description": "Its goons take care of most of the fighting for it. The only time it dirties its own hands is in delivering a final blow to finish off an opponent.",
      "evolution": { "prev": ["198", "use Dusk Stone"] },
      "profile": {
        "height": "0.9 m",
        "weight": "27.3 kg",
        "egg": ["Flying"],
        "ability": [
          ["Insomnia", "false"],
          ["Super Luck", "false"],
          ["Moxie", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/430.png",
        "thumbnail": "src/assets/thumbnails/430.png",
        "hires": "src/assets/hires/430.png"
      }
    },
    {
      "id": 431,
      "name": {
        "english": "Glameow",
        "japanese": "ニャルマー",
        "chinese": "魅力喵",
        "french": "Chaglam"
      },
      "type": ["Normal"],
      "base": {
        "HP": 49,
        "Attack": 55,
        "Defense": 42,
        "Sp. Attack": 42,
        "Sp. Defense": 37,
        "Speed": 85
      },
      "species": "Catty Pokémon",
      "description": "When it’s happy, Glameow demonstrates beautiful movements of its tail, like a dancing ribbon.",
      "evolution": { "next": [["432", "Level 38"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "3.9 kg",
        "egg": ["Field"],
        "ability": [
          ["Limber", "false"],
          ["Own Tempo", "false"],
          ["Keen Eye", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/431.png",
        "thumbnail": "src/assets/thumbnails/431.png",
        "hires": "src/assets/hires/431.png"
      }
    },
    {
      "id": 432,
      "name": {
        "english": "Purugly",
        "japanese": "ブニャット",
        "chinese": "东施喵",
        "french": "Chaffreux"
      },
      "type": ["Normal"],
      "base": {
        "HP": 71,
        "Attack": 82,
        "Defense": 64,
        "Sp. Attack": 64,
        "Sp. Defense": 59,
        "Speed": 112
      },
      "species": "Tiger Cat Pokémon",
      "description": "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails.",
      "evolution": { "prev": ["431", "Level 38"] },
      "profile": {
        "height": "1 m",
        "weight": "43.8 kg",
        "egg": ["Field"],
        "ability": [
          ["Thick Fat", "false"],
          ["Own Tempo", "false"],
          ["Defiant", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/432.png",
        "thumbnail": "src/assets/thumbnails/432.png",
        "hires": "src/assets/hires/432.png"
      }
    },
    {
      "id": 433,
      "name": {
        "english": "Chingling",
        "japanese": "リーシャン",
        "chinese": "铃铛响",
        "french": "Korillon"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 50,
        "Sp. Attack": 65,
        "Sp. Defense": 50,
        "Speed": 45
      },
      "species": "Bell Pokémon",
      "description": "There is an orb inside its mouth. When it hops, the orb bounces all over and makes a ringing sound.",
      "evolution": { "next": [["358", "high Friendship, Nighttime"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "0.6 kg",
        "egg": ["Undiscovered"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/433.png",
        "thumbnail": "src/assets/thumbnails/433.png",
        "hires": "src/assets/hires/433.png"
      }
    },
    {
      "id": 434,
      "name": {
        "english": "Stunky",
        "japanese": "スカンプー",
        "chinese": "臭鼬噗",
        "french": "Moufouette"
      },
      "type": ["Poison", "Dark"],
      "base": {
        "HP": 63,
        "Attack": 63,
        "Defense": 47,
        "Sp. Attack": 41,
        "Sp. Defense": 41,
        "Speed": 74
      },
      "species": "Skunk Pokémon",
      "description": "It protects itself by spraying a noxious fluid from its rear. The stench lingers for 24 hours.",
      "evolution": { "next": [["435", "Level 34"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "19.2 kg",
        "egg": ["Field"],
        "ability": [
          ["Stench", "false"],
          ["Aftermath", "false"],
          ["Keen Eye", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/434.png",
        "thumbnail": "src/assets/thumbnails/434.png",
        "hires": "src/assets/hires/434.png"
      }
    },
    {
      "id": 435,
      "name": {
        "english": "Skuntank",
        "japanese": "スカタンク",
        "chinese": "坦克臭鼬",
        "french": "Moufflair"
      },
      "type": ["Poison", "Dark"],
      "base": {
        "HP": 103,
        "Attack": 93,
        "Defense": 67,
        "Sp. Attack": 71,
        "Sp. Defense": 61,
        "Speed": 84
      },
      "species": "Skunk Pokémon",
      "description": "It sprays a stinky fluid from its tail. The fluid smells worse the longer it is allowed to fester.",
      "evolution": { "prev": ["434", "Level 34"] },
      "profile": {
        "height": "1 m",
        "weight": "38 kg",
        "egg": ["Field"],
        "ability": [
          ["Stench", "false"],
          ["Aftermath", "false"],
          ["Keen Eye", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/435.png",
        "thumbnail": "src/assets/thumbnails/435.png",
        "hires": "src/assets/hires/435.png"
      }
    },
    {
      "id": 436,
      "name": {
        "english": "Bronzor",
        "japanese": "ドーミラー",
        "chinese": "铜镜怪",
        "french": "Archéomire"
      },
      "type": ["Steel", "Psychic"],
      "base": {
        "HP": 57,
        "Attack": 24,
        "Defense": 86,
        "Sp. Attack": 24,
        "Sp. Defense": 86,
        "Speed": 23
      },
      "species": "Bronze Pokémon",
      "description": "Implements shaped like it were discovered in ancient tombs. It is unknown if they are related.",
      "evolution": { "next": [["437", "Level 33"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "60.5 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Levitate", "false"],
          ["Heatproof", "false"],
          ["Heavy Metal", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/436.png",
        "thumbnail": "src/assets/thumbnails/436.png",
        "hires": "src/assets/hires/436.png"
      }
    },
    {
      "id": 437,
      "name": {
        "english": "Bronzong",
        "japanese": "ドータクン",
        "chinese": "青铜钟",
        "french": "Archéodong"
      },
      "type": ["Steel", "Psychic"],
      "base": {
        "HP": 67,
        "Attack": 89,
        "Defense": 116,
        "Sp. Attack": 79,
        "Sp. Defense": 116,
        "Speed": 33
      },
      "species": "Bronze Bell Pokémon",
      "description": "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow.",
      "evolution": { "prev": ["436", "Level 33"] },
      "profile": {
        "height": "1.3 m",
        "weight": "187 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Levitate", "false"],
          ["Heatproof", "false"],
          ["Heavy Metal", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/437.png",
        "thumbnail": "src/assets/thumbnails/437.png",
        "hires": "src/assets/hires/437.png"
      }
    },
    {
      "id": 438,
      "name": {
        "english": "Bonsly",
        "japanese": "ウソハチ",
        "chinese": "盆才怪",
        "french": "Manzaï"
      },
      "type": ["Rock"],
      "base": {
        "HP": 50,
        "Attack": 80,
        "Defense": 95,
        "Sp. Attack": 10,
        "Sp. Defense": 45,
        "Speed": 10
      },
      "species": "Bonsai Pokémon",
      "description": "If its body gets too damp, it will die. So, in a process reminiscent of sweating, its eyes expel moisture.",
      "evolution": { "next": [["185", "after Mimic learned"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "15 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Sturdy", "false"],
          ["Rock Head", "false"],
          ["Rattled", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/438.png",
        "thumbnail": "src/assets/thumbnails/438.png",
        "hires": "src/assets/hires/438.png"
      }
    },
    {
      "id": 439,
      "name": {
        "english": "Mime Jr.",
        "japanese": "マネネ",
        "chinese": "魔尼尼",
        "french": "Mime Jr"
      },
      "type": ["Psychic", "Fairy"],
      "base": {
        "HP": 20,
        "Attack": 25,
        "Defense": 45,
        "Sp. Attack": 70,
        "Sp. Defense": 90,
        "Speed": 60
      },
      "species": "Mime Pokémon",
      "description": "When this gifted mimic surprises an opponent, Mime Jr. feels so happy that it ends up forgetting it was imitating something.",
      "evolution": { "next": [["122", "after Mimic learned"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "13 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Soundproof", "false"],
          ["Filter", "false"],
          ["Technician", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/439.png",
        "thumbnail": "src/assets/thumbnails/439.png",
        "hires": "src/assets/hires/439.png"
      }
    },
    {
      "id": 440,
      "name": {
        "english": "Happiny",
        "japanese": "ピンプク",
        "chinese": "小福蛋",
        "french": "Ptiravi"
      },
      "type": ["Normal"],
      "base": {
        "HP": 100,
        "Attack": 5,
        "Defense": 5,
        "Sp. Attack": 15,
        "Sp. Defense": 65,
        "Speed": 30
      },
      "species": "Playhouse Pokémon",
      "description": "When it sees something round and white, Happiny puts it into the pouch on its stomach. It sometimes becomes overloaded and can’t move.",
      "evolution": { "next": [["113", "hold Oval Stone, Daytime"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "24.4 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Natural Cure", "false"],
          ["Serene Grace", "false"],
          ["Friend Guard", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/440.png",
        "thumbnail": "src/assets/thumbnails/440.png",
        "hires": "src/assets/hires/440.png"
      }
    },
    {
      "id": 441,
      "name": {
        "english": "Chatot",
        "japanese": "ペラップ",
        "chinese": "聒噪鸟",
        "french": "Pijako"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 76,
        "Attack": 65,
        "Defense": 45,
        "Sp. Attack": 92,
        "Sp. Defense": 42,
        "Speed": 91
      },
      "species": "Music Note Pokémon",
      "description": "It can learn and speak human words. If they gather, they all learn the same saying.",
      "evolution": {},
      "profile": {
        "height": "0.5 m",
        "weight": "1.9 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Tangled Feet", "false"],
          ["Big Pecks", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/441.png",
        "thumbnail": "src/assets/thumbnails/441.png",
        "hires": "src/assets/hires/441.png"
      }
    },
    {
      "id": 442,
      "name": {
        "english": "Spiritomb",
        "japanese": "ミカルゲ",
        "chinese": "花岩怪",
        "french": "Spiritomb"
      },
      "type": ["Ghost", "Dark"],
      "base": {
        "HP": 50,
        "Attack": 92,
        "Defense": 108,
        "Sp. Attack": 92,
        "Sp. Defense": 108,
        "Speed": 35
      },
      "species": "Forbidden Pokémon",
      "description": "It was bound to a fissure in an odd keystone as punishment for misdeeds 500 years ago.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "108 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Pressure", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/442.png",
        "thumbnail": "src/assets/thumbnails/442.png",
        "hires": "src/assets/hires/442.png"
      }
    },
    {
      "id": 443,
      "name": {
        "english": "Gible",
        "japanese": "フカマル",
        "chinese": "圆陆鲨",
        "french": "Griknot"
      },
      "type": ["Dragon", "Ground"],
      "base": {
        "HP": 58,
        "Attack": 70,
        "Defense": 45,
        "Sp. Attack": 40,
        "Sp. Defense": 45,
        "Speed": 42
      },
      "species": "Land Shark Pokémon",
      "description": "Its original home is an area much hotter than Alola. If you’re planning to live with one, your heating bill will soar.",
      "evolution": { "next": [["444", "Level 24"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "20.5 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Sand Veil", "false"],
          ["Rough Skin", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/443.png",
        "thumbnail": "src/assets/thumbnails/443.png",
        "hires": "src/assets/hires/443.png"
      }
    },
    {
      "id": 444,
      "name": {
        "english": "Gabite",
        "japanese": "ガバイト",
        "chinese": "尖牙陆鲨",
        "french": "Carmache"
      },
      "type": ["Dragon", "Ground"],
      "base": {
        "HP": 68,
        "Attack": 90,
        "Defense": 65,
        "Sp. Attack": 50,
        "Sp. Defense": 55,
        "Speed": 82
      },
      "species": "Cave Pokémon",
      "description": "It sheds its skin and gradually grows larger. Its scales can be ground into a powder and used as raw materials for traditional medicine.",
      "evolution": { "prev": ["443", "Level 24"], "next": [["445", "Level 48"]] },
      "profile": {
        "height": "1.4 m",
        "weight": "56 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Sand Veil", "false"],
          ["Rough Skin", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/444.png",
        "thumbnail": "src/assets/thumbnails/444.png",
        "hires": "src/assets/hires/444.png"
      }
    },
    {
      "id": 445,
      "name": {
        "english": "Garchomp",
        "japanese": "ガブリアス",
        "chinese": "烈咬陆鲨",
        "french": "Carchacrok"
      },
      "type": ["Dragon", "Ground"],
      "base": {
        "HP": 108,
        "Attack": 130,
        "Defense": 95,
        "Sp. Attack": 80,
        "Sp. Defense": 85,
        "Speed": 102
      },
      "species": "Mach Pokémon",
      "description": "Its fine scales don’t just reduce wind resistance—their sharp edges also cause injury to any opponent who attacks it.",
      "evolution": { "prev": ["444", "Level 48"] },
      "profile": {
        "height": "1.9 m",
        "weight": "95 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Sand Veil", "false"],
          ["Rough Skin", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/445.png",
        "thumbnail": "src/assets/thumbnails/445.png",
        "hires": "src/assets/hires/445.png"
      }
    },
    {
      "id": 446,
      "name": {
        "english": "Munchlax",
        "japanese": "ゴンベ",
        "chinese": "小卡比兽",
        "french": "Goinfrex"
      },
      "type": ["Normal"],
      "base": {
        "HP": 135,
        "Attack": 85,
        "Defense": 40,
        "Sp. Attack": 40,
        "Sp. Defense": 85,
        "Speed": 5
      },
      "species": "Big Eater Pokémon",
      "description": "Anything that looks edible, Munchlax will go on and swallow whole. Its stomach is tough enough to handle it even if the food has gone rotten.",
      "evolution": { "next": [["143", "high Friendship"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "105 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pickup", "false"],
          ["Thick Fat", "false"],
          ["Gluttony", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/446.png",
        "thumbnail": "src/assets/thumbnails/446.png",
        "hires": "src/assets/hires/446.png"
      }
    },
    {
      "id": 447,
      "name": {
        "english": "Riolu",
        "japanese": "リオル",
        "chinese": "利欧路",
        "french": "Riolu"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 40,
        "Attack": 70,
        "Defense": 40,
        "Sp. Attack": 35,
        "Sp. Defense": 40,
        "Speed": 60
      },
      "species": "Emanation Pokémon",
      "description": "It uses waves called auras to communicate with others of its kind. It doesn’t make any noise during this time, so its enemies can’t detect it.",
      "evolution": { "next": [["448", "high Friendship, Daytime"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "20.2 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Steadfast", "false"],
          ["Inner Focus", "false"],
          ["Prankster", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/447.png",
        "thumbnail": "src/assets/thumbnails/447.png",
        "hires": "src/assets/hires/447.png"
      }
    },
    {
      "id": 448,
      "name": {
        "english": "Lucario",
        "japanese": "ルカリオ",
        "chinese": "路卡利欧",
        "french": "Lucario"
      },
      "type": ["Fighting", "Steel"],
      "base": {
        "HP": 70,
        "Attack": 110,
        "Defense": 70,
        "Sp. Attack": 115,
        "Sp. Defense": 70,
        "Speed": 90
      },
      "species": "Aura Pokémon",
      "description": "Lucario reads its opponent’s feelings with its aura waves. It finds out things it would rather not know, so it gets stressed out easily.",
      "evolution": { "prev": ["447", "high Friendship, Daytime"] },
      "profile": {
        "height": "1.2 m",
        "weight": "54 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Steadfast", "false"],
          ["Inner Focus", "false"],
          ["Justified", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/448.png",
        "thumbnail": "src/assets/thumbnails/448.png",
        "hires": "src/assets/hires/448.png"
      }
    },
    {
      "id": 449,
      "name": {
        "english": "Hippopotas",
        "japanese": "ヒポポタス",
        "chinese": "沙河马",
        "french": "Hippopotas"
      },
      "type": ["Ground"],
      "base": {
        "HP": 68,
        "Attack": 72,
        "Defense": 78,
        "Sp. Attack": 38,
        "Sp. Defense": 42,
        "Speed": 32
      },
      "species": "Hippo Pokémon",
      "description": "It enshrouds itself with sand to protect itself from germs. It does not enjoy getting wet.",
      "evolution": { "next": [["450", "Level 34"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "49.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Sand Stream", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/449.png",
        "thumbnail": "src/assets/thumbnails/449.png",
        "hires": "src/assets/hires/449.png"
      }
    },
    {
      "id": 450,
      "name": {
        "english": "Hippowdon",
        "japanese": "カバルドン",
        "chinese": "河马兽",
        "french": "Hippodocus"
      },
      "type": ["Ground"],
      "base": {
        "HP": 108,
        "Attack": 112,
        "Defense": 118,
        "Sp. Attack": 68,
        "Sp. Defense": 72,
        "Speed": 47
      },
      "species": "Heavyweight Pokémon",
      "description": "It blasts internally stored sand from ports on its body to create a towering twister for attack.",
      "evolution": { "prev": ["449", "Level 34"] },
      "profile": {
        "height": "2 m",
        "weight": "300 kg",
        "egg": ["Field"],
        "ability": [
          ["Sand Stream", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/450.png",
        "thumbnail": "src/assets/thumbnails/450.png",
        "hires": "src/assets/hires/450.png"
      }
    },
    {
      "id": 451,
      "name": {
        "english": "Skorupi",
        "japanese": "スコルピ",
        "chinese": "钳尾蝎",
        "french": "Rapion"
      },
      "type": ["Poison", "Bug"],
      "base": {
        "HP": 40,
        "Attack": 50,
        "Defense": 90,
        "Sp. Attack": 30,
        "Sp. Defense": 55,
        "Speed": 65
      },
      "species": "Scorpion Pokémon",
      "description": "It burrows under the sand to lie in wait for prey. Its tail claws can inject its prey with a savage poison.",
      "evolution": { "next": [["452", "Level 40"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "12 kg",
        "egg": ["Bug", "Water 3"],
        "ability": [
          ["Battle Armor", "false"],
          ["Sniper", "false"],
          ["Keen Eye", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/451.png",
        "thumbnail": "src/assets/thumbnails/451.png",
        "hires": "src/assets/hires/451.png"
      }
    },
    {
      "id": 452,
      "name": {
        "english": "Drapion",
        "japanese": "ドラピオン",
        "chinese": "龙王蝎",
        "french": "Drascore"
      },
      "type": ["Poison", "Dark"],
      "base": {
        "HP": 70,
        "Attack": 90,
        "Defense": 110,
        "Sp. Attack": 60,
        "Sp. Defense": 75,
        "Speed": 95
      },
      "species": "Ogre Scorpion Pokémon",
      "description": "It has the power in its clawed arms to make scrap of a car. The tips of its claws release poison.",
      "evolution": { "prev": ["451", "Level 40"] },
      "profile": {
        "height": "1.3 m",
        "weight": "61.5 kg",
        "egg": ["Bug", "Water 3"],
        "ability": [
          ["Battle Armor", "false"],
          ["Sniper", "false"],
          ["Keen Eye", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/452.png",
        "thumbnail": "src/assets/thumbnails/452.png",
        "hires": "src/assets/hires/452.png"
      }
    },
    {
      "id": 453,
      "name": {
        "english": "Croagunk",
        "japanese": "グレッグル",
        "chinese": "不良蛙",
        "french": "Cradopaud"
      },
      "type": ["Poison", "Fighting"],
      "base": {
        "HP": 48,
        "Attack": 61,
        "Defense": 40,
        "Sp. Attack": 61,
        "Sp. Defense": 40,
        "Speed": 50
      },
      "species": "Toxic Mouth Pokémon",
      "description": "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
      "evolution": { "next": [["454", "Level 37"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "23 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Anticipation", "false"],
          ["Dry Skin", "false"],
          ["Poison Touch", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/453.png",
        "thumbnail": "src/assets/thumbnails/453.png",
        "hires": "src/assets/hires/453.png"
      }
    },
    {
      "id": 454,
      "name": {
        "english": "Toxicroak",
        "japanese": "ドクロッグ",
        "chinese": "毒骷蛙",
        "french": "Coatox"
      },
      "type": ["Poison", "Fighting"],
      "base": {
        "HP": 83,
        "Attack": 106,
        "Defense": 65,
        "Sp. Attack": 86,
        "Sp. Defense": 65,
        "Speed": 85
      },
      "species": "Toxic Mouth Pokémon",
      "description": "Its knuckle claws secrete a toxin so vile that even a scratch could prove fatal.",
      "evolution": { "prev": ["453", "Level 37"] },
      "profile": {
        "height": "1.3 m",
        "weight": "44.4 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Anticipation", "false"],
          ["Dry Skin", "false"],
          ["Poison Touch", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/454.png",
        "thumbnail": "src/assets/thumbnails/454.png",
        "hires": "src/assets/hires/454.png"
      }
    },
    {
      "id": 455,
      "name": {
        "english": "Carnivine",
        "japanese": "マスキッパ",
        "chinese": "尖牙笼",
        "french": "Vortente"
      },
      "type": ["Grass"],
      "base": {
        "HP": 74,
        "Attack": 100,
        "Defense": 72,
        "Sp. Attack": 90,
        "Sp. Defense": 72,
        "Speed": 46
      },
      "species": "Bug Catcher Pokémon",
      "description": "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
      "evolution": {},
      "profile": {
        "height": "1.4 m",
        "weight": "27 kg",
        "egg": ["Grass"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/455.png",
        "thumbnail": "src/assets/thumbnails/455.png",
        "hires": "src/assets/hires/455.png"
      }
    },
    {
      "id": 456,
      "name": {
        "english": "Finneon",
        "japanese": "ケイコウオ",
        "chinese": "荧光鱼",
        "french": "Écayon"
      },
      "type": ["Water"],
      "base": {
        "HP": 49,
        "Attack": 49,
        "Defense": 56,
        "Sp. Attack": 49,
        "Sp. Defense": 61,
        "Speed": 66
      },
      "species": "Wing Fish Pokémon",
      "description": "It lures in prey with its shining tail fins. It stays near the surface during the day and moves to the depths when night falls.",
      "evolution": { "next": [["457", "Level 31"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "7 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Swift Swim", "false"],
          ["Storm Drain", "false"],
          ["Water Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/456.png",
        "thumbnail": "src/assets/thumbnails/456.png",
        "hires": "src/assets/hires/456.png"
      }
    },
    {
      "id": 457,
      "name": {
        "english": "Lumineon",
        "japanese": "ネオラント",
        "chinese": "霓虹鱼",
        "french": "Luminéon"
      },
      "type": ["Water"],
      "base": {
        "HP": 69,
        "Attack": 69,
        "Defense": 76,
        "Sp. Attack": 69,
        "Sp. Defense": 86,
        "Speed": 91
      },
      "species": "Neon Pokémon",
      "description": "They traverse the deep waters as if crawling over the seafloor. The fantastic lights of its fins shine like stars in the night sky.",
      "evolution": { "prev": ["456", "Level 31"] },
      "profile": {
        "height": "1.2 m",
        "weight": "24 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Swift Swim", "false"],
          ["Storm Drain", "false"],
          ["Water Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/457.png",
        "thumbnail": "src/assets/thumbnails/457.png",
        "hires": "src/assets/hires/457.png"
      }
    },
    {
      "id": 458,
      "name": {
        "english": "Mantyke",
        "japanese": "タマンタ",
        "chinese": "小球飞鱼",
        "french": "Babimanta"
      },
      "type": ["Water", "Flying"],
      "base": {
        "HP": 45,
        "Attack": 20,
        "Defense": 50,
        "Sp. Attack": 60,
        "Sp. Defense": 120,
        "Speed": 50
      },
      "species": "Kite Pokémon",
      "description": "Mantyke are friendly toward people and will approach boats closely. The patterns on their backs differ depending on their habitat.",
      "evolution": { "next": [["226", "with Remoraid in party"]] },
      "profile": {
        "height": "1 m",
        "weight": "65 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Swift Swim", "false"],
          ["Water Absorb", "false"],
          ["Water Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/458.png",
        "thumbnail": "src/assets/thumbnails/458.png",
        "hires": "src/assets/hires/458.png"
      }
    },
    {
      "id": 459,
      "name": {
        "english": "Snover",
        "japanese": "ユキカブリ",
        "chinese": "雪笠怪",
        "french": "Blizzi"
      },
      "type": ["Grass", "Ice"],
      "base": {
        "HP": 60,
        "Attack": 62,
        "Defense": 50,
        "Sp. Attack": 62,
        "Sp. Defense": 60,
        "Speed": 40
      },
      "species": "Frost Tree Pokémon",
      "description": "In the spring, it grows berries with the texture of frozen treats around its belly.",
      "evolution": { "next": [["460", "Level 40"]] },
      "profile": {
        "height": "1 m",
        "weight": "50.5 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Snow Warning", "false"],
          ["Soundproof", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/459.png",
        "thumbnail": "src/assets/thumbnails/459.png",
        "hires": "src/assets/hires/459.png"
      }
    },
    {
      "id": 460,
      "name": {
        "english": "Abomasnow",
        "japanese": "ユキノオー",
        "chinese": "暴雪王",
        "french": "Blizzaroi"
      },
      "type": ["Grass", "Ice"],
      "base": {
        "HP": 90,
        "Attack": 92,
        "Defense": 75,
        "Sp. Attack": 92,
        "Sp. Defense": 85,
        "Speed": 60
      },
      "species": "Frost Tree Pokémon",
      "description": "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
      "evolution": { "prev": ["459", "Level 40"] },
      "profile": {
        "height": "2.2 m",
        "weight": "135.5 kg",
        "egg": ["Monster", "Grass"],
        "ability": [
          ["Snow Warning", "false"],
          ["Soundproof", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/460.png",
        "thumbnail": "src/assets/thumbnails/460.png",
        "hires": "src/assets/hires/460.png"
      }
    },
    {
      "id": 461,
      "name": {
        "english": "Weavile",
        "japanese": "マニューラ",
        "chinese": "玛狃拉",
        "french": "Dimoret"
      },
      "type": ["Dark", "Ice"],
      "base": {
        "HP": 70,
        "Attack": 120,
        "Defense": 65,
        "Sp. Attack": 45,
        "Sp. Defense": 85,
        "Speed": 125
      },
      "species": "Sharp Claw Pokémon",
      "description": "Thanks to its increased intelligence, scrapping over food is a thing of the past. A scratch from its claws will give you a case of frostbite!",
      "evolution": { "prev": ["215", "hold Razor Claw, Nighttime"] },
      "profile": {
        "height": "1.1 m",
        "weight": "34 kg",
        "egg": ["Field"],
        "ability": [
          ["Pressure", "false"],
          ["Pickpocket", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/461.png",
        "thumbnail": "src/assets/thumbnails/461.png",
        "hires": "src/assets/hires/461.png"
      }
    },
    {
      "id": 462,
      "name": {
        "english": "Magnezone",
        "japanese": "ジバコイル",
        "chinese": "自爆磁怪",
        "french": "Magnézone"
      },
      "type": ["Electric", "Steel"],
      "base": {
        "HP": 70,
        "Attack": 70,
        "Defense": 115,
        "Sp. Attack": 130,
        "Sp. Defense": 90,
        "Speed": 60
      },
      "species": "Magnet Area Pokémon",
      "description": "There are still people who believe that this Pokémon came from outer space. It emanates a powerful magnetic field.",
      "evolution": { "prev": ["82", "level up in a Magnetic Field area"] },
      "profile": {
        "height": "1.2 m",
        "weight": "180 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Magnet Pull", "false"],
          ["Sturdy", "false"],
          ["Analytic", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/462.png",
        "thumbnail": "src/assets/thumbnails/462.png",
        "hires": "src/assets/hires/462.png"
      }
    },
    {
      "id": 463,
      "name": {
        "english": "Lickilicky",
        "japanese": "ベロベルト",
        "chinese": "大舌舔",
        "french": "Coudlangue"
      },
      "type": ["Normal"],
      "base": {
        "HP": 110,
        "Attack": 85,
        "Defense": 95,
        "Sp. Attack": 80,
        "Sp. Defense": 95,
        "Speed": 50
      },
      "species": "Licking Pokémon",
      "description": "It uses its tongue much more skillfully than its hands or its feet. It can deftly pick up a single small bean with its tongue.",
      "evolution": { "prev": ["108", "after Rollout learned"] },
      "profile": {
        "height": "1.7 m",
        "weight": "140 kg",
        "egg": ["Monster"],
        "ability": [
          ["Own Tempo", "false"],
          ["Oblivious", "false"],
          ["Cloud Nine", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/463.png",
        "thumbnail": "src/assets/thumbnails/463.png",
        "hires": "src/assets/hires/463.png"
      }
    },
    {
      "id": 464,
      "name": {
        "english": "Rhyperior",
        "japanese": "ドサイドン",
        "chinese": "超甲狂犀",
        "french": "Rhinastoc"
      },
      "type": ["Ground", "Rock"],
      "base": {
        "HP": 115,
        "Attack": 140,
        "Defense": 130,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 40
      },
      "species": "Drill Pokémon",
      "description": "It puts rocks in holes in its palms and uses its muscles to shoot them. Geodude are shot at rare times.",
      "evolution": { "prev": ["112", "trade holding Protector"] },
      "profile": {
        "height": "2.4 m",
        "weight": "282.8 kg",
        "egg": ["Monster", "Field"],
        "ability": [
          ["Lightning Rod", "false"],
          ["Solid Rock", "false"],
          ["Reckless", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/464.png",
        "thumbnail": "src/assets/thumbnails/464.png",
        "hires": "src/assets/hires/464.png"
      }
    },
    {
      "id": 465,
      "name": {
        "english": "Tangrowth",
        "japanese": "モジャンボ",
        "chinese": "巨蔓藤",
        "french": "Bouldeneu"
      },
      "type": ["Grass"],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 125,
        "Sp. Attack": 110,
        "Sp. Defense": 50,
        "Speed": 50
      },
      "species": "Vine Pokémon",
      "description": "Its vines grow so profusely that, in the warm season, you can’t even see its eyes.",
      "evolution": { "prev": ["114", "after Ancient Power learned"] },
      "profile": {
        "height": "2 m",
        "weight": "128.6 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Leaf Guard", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/465.png",
        "thumbnail": "src/assets/thumbnails/465.png",
        "hires": "src/assets/hires/465.png"
      }
    },
    {
      "id": 466,
      "name": {
        "english": "Electivire",
        "japanese": "エレキブル",
        "chinese": "电击魔兽",
        "french": "Élekable"
      },
      "type": ["Electric"],
      "base": {
        "HP": 75,
        "Attack": 123,
        "Defense": 67,
        "Sp. Attack": 95,
        "Sp. Defense": 85,
        "Speed": 95
      },
      "species": "Thunderbolt Pokémon",
      "description": "A single Electivire can provide enough electricity for all the buildings in a big city for a year.",
      "evolution": { "prev": ["125", "trade holding Electirizer"] },
      "profile": {
        "height": "1.8 m",
        "weight": "138.6 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Motor Drive", "false"],
          ["Vital Spirit", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/466.png",
        "thumbnail": "src/assets/thumbnails/466.png",
        "hires": "src/assets/hires/466.png"
      }
    },
    {
      "id": 467,
      "name": {
        "english": "Magmortar",
        "japanese": "ブーバーン",
        "chinese": "鸭嘴炎兽",
        "french": "Maganon"
      },
      "type": ["Fire"],
      "base": {
        "HP": 75,
        "Attack": 95,
        "Defense": 67,
        "Sp. Attack": 125,
        "Sp. Defense": 95,
        "Speed": 83
      },
      "species": "Blast Pokémon",
      "description": "Magmortar takes down its enemies by shooting fireballs, which burn them to a blackened crisp. It avoids this method when hunting prey.",
      "evolution": { "prev": ["126", "trade holding Magmarizer"] },
      "profile": {
        "height": "1.6 m",
        "weight": "68 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Flame Body", "false"],
          ["Vital Spirit", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/467.png",
        "thumbnail": "src/assets/thumbnails/467.png",
        "hires": "src/assets/hires/467.png"
      }
    },
    {
      "id": 468,
      "name": {
        "english": "Togekiss",
        "japanese": "トゲキッス",
        "chinese": "波克基斯",
        "french": "Togekiss"
      },
      "type": ["Fairy", "Flying"],
      "base": {
        "HP": 85,
        "Attack": 50,
        "Defense": 95,
        "Sp. Attack": 120,
        "Sp. Defense": 115,
        "Speed": 80
      },
      "species": "Jubilee Pokémon",
      "description": "It shares many blessings with people who respect one another’s rights and avoid needless strife.",
      "evolution": { "prev": ["176", "use Shiny Stone"] },
      "profile": {
        "height": "1.5 m",
        "weight": "38 kg",
        "egg": ["Flying", "Fairy"],
        "ability": [
          ["Hustle", "false"],
          ["Serene Grace", "false"],
          ["Super Luck", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/468.png",
        "thumbnail": "src/assets/thumbnails/468.png",
        "hires": "src/assets/hires/468.png"
      }
    },
    {
      "id": 469,
      "name": {
        "english": "Yanmega",
        "japanese": "メガヤンマ",
        "chinese": "远古巨蜓",
        "french": "Yanmega"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 86,
        "Attack": 76,
        "Defense": 86,
        "Sp. Attack": 116,
        "Sp. Defense": 56,
        "Speed": 95
      },
      "species": "Ogre Darner Pokémon",
      "description": "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.",
      "evolution": { "prev": ["193", "after Ancient Power learned"] },
      "profile": {
        "height": "1.9 m",
        "weight": "51.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Speed Boost", "false"],
          ["Tinted Lens", "false"],
          ["Frisk", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/469.png",
        "thumbnail": "src/assets/thumbnails/469.png",
        "hires": "src/assets/hires/469.png"
      }
    },
    {
      "id": 470,
      "name": {
        "english": "Leafeon",
        "japanese": "リーフィア",
        "chinese": "叶伊布",
        "french": "Phyllali"
      },
      "type": ["Grass"],
      "base": {
        "HP": 65,
        "Attack": 110,
        "Defense": 130,
        "Sp. Attack": 60,
        "Sp. Defense": 65,
        "Speed": 95
      },
      "species": "Verdant Pokémon",
      "description": "It gets its nutrition from photosynthesis. It lives a quiet life deep in forests where clean rivers flow.",
      "evolution": { "prev": ["133", "level up near a Mossy Rock"] },
      "profile": {
        "height": "1 m",
        "weight": "25.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Leaf Guard", "false"],
          ["Chlorophyll", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/470.png",
        "thumbnail": "src/assets/thumbnails/470.png",
        "hires": "src/assets/hires/470.png"
      }
    },
    {
      "id": 471,
      "name": {
        "english": "Glaceon",
        "japanese": "グレイシア",
        "chinese": "冰伊布",
        "french": "Givrali"
      },
      "type": ["Ice"],
      "base": {
        "HP": 65,
        "Attack": 60,
        "Defense": 110,
        "Sp. Attack": 130,
        "Sp. Defense": 95,
        "Speed": 65
      },
      "species": "Fresh Snow Pokémon",
      "description": "It can instantaneously freeze any moisture that’s around it, creating ice pellets to shoot at its prey.",
      "evolution": { "prev": ["133", "level up near an Icy Rock"] },
      "profile": {
        "height": "0.8 m",
        "weight": "25.9 kg",
        "egg": ["Field"],
        "ability": [
          ["Snow Cloak", "false"],
          ["Ice Body", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/471.png",
        "thumbnail": "src/assets/thumbnails/471.png",
        "hires": "src/assets/hires/471.png"
      }
    },
    {
      "id": 472,
      "name": {
        "english": "Gliscor",
        "japanese": "グライオン",
        "chinese": "天蝎王",
        "french": "Scorvol"
      },
      "type": ["Ground", "Flying"],
      "base": {
        "HP": 75,
        "Attack": 95,
        "Defense": 125,
        "Sp. Attack": 45,
        "Sp. Defense": 75,
        "Speed": 95
      },
      "species": "Fang Scorpion Pokémon",
      "description": "Its flight is soundless. It uses its lengthy tail to carry off its prey... Then its elongated fangs do the rest.",
      "evolution": { "prev": ["207", "hold Razor Fang, Nighttime"] },
      "profile": {
        "height": "2 m",
        "weight": "42.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Sand Veil", "false"],
          ["Poison Heal", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/472.png",
        "thumbnail": "src/assets/thumbnails/472.png",
        "hires": "src/assets/hires/472.png"
      }
    },
    {
      "id": 473,
      "name": {
        "english": "Mamoswine",
        "japanese": "マンムー",
        "chinese": "象牙猪",
        "french": "Mammochon"
      },
      "type": ["Ice", "Ground"],
      "base": {
        "HP": 110,
        "Attack": 130,
        "Defense": 80,
        "Sp. Attack": 70,
        "Sp. Defense": 60,
        "Speed": 80
      },
      "species": "Twin Tusk Pokémon",
      "description": "Its impressive tusks are made of ice. The population thinned when it turned warm after the ice age.",
      "evolution": { "prev": ["221", "after Ancient Power learned"] },
      "profile": {
        "height": "2.5 m",
        "weight": "291 kg",
        "egg": ["Field"],
        "ability": [
          ["Oblivious", "false"],
          ["Snow Cloak", "false"],
          ["Thick Fat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/473.png",
        "thumbnail": "src/assets/thumbnails/473.png",
        "hires": "src/assets/hires/473.png"
      }
    },
    {
      "id": 474,
      "name": {
        "english": "Porygon-Z",
        "japanese": "ポリゴンＺ",
        "chinese": "多边兽Ｚ",
        "french": "Porygon-Z"
      },
      "type": ["Normal"],
      "base": {
        "HP": 85,
        "Attack": 80,
        "Defense": 70,
        "Sp. Attack": 135,
        "Sp. Defense": 75,
        "Speed": 90
      },
      "species": "Virtual Pokémon",
      "description": "A faulty update was added to its programming. Its behavior is noticeably strange, so the experiment may have been a failure.",
      "evolution": { "prev": ["233", "trade holding Dubious Disc"] },
      "profile": {
        "height": "0.9 m",
        "weight": "34 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Adaptability", "false"],
          ["Download", "false"],
          ["Analytic", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/474.png",
        "thumbnail": "src/assets/thumbnails/474.png",
        "hires": "src/assets/hires/474.png"
      }
    },
    {
      "id": 475,
      "name": {
        "english": "Gallade",
        "japanese": "エルレイド",
        "chinese": "艾路雷朵",
        "french": "Gallame"
      },
      "type": ["Psychic", "Fighting"],
      "base": {
        "HP": 68,
        "Attack": 125,
        "Defense": 65,
        "Sp. Attack": 65,
        "Sp. Defense": 115,
        "Speed": 80
      },
      "species": "Blade Pokémon",
      "description": "A master of courtesy and swordsmanship, it fights using extending swords on its elbows.",
      "evolution": { "prev": ["281", "use Dawn Stone, Male"] },
      "profile": {
        "height": "1.6 m",
        "weight": "52 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Steadfast", "false"],
          ["Justified", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/475.png",
        "thumbnail": "src/assets/thumbnails/475.png",
        "hires": "src/assets/hires/475.png"
      }
    },
    {
      "id": 476,
      "name": {
        "english": "Probopass",
        "japanese": "ダイノーズ",
        "chinese": "大朝北鼻",
        "french": "Tarinorme"
      },
      "type": ["Rock", "Steel"],
      "base": {
        "HP": 60,
        "Attack": 55,
        "Defense": 145,
        "Sp. Attack": 75,
        "Sp. Defense": 150,
        "Speed": 40
      },
      "species": "Compass Pokémon",
      "description": "It uses three small units to catch prey and battle enemies. The main body mostly just gives orders.",
      "evolution": { "prev": ["299", "level up in a Magnetic Field area"] },
      "profile": {
        "height": "1.4 m",
        "weight": "340 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Sturdy", "false"],
          ["Magnet Pull", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/476.png",
        "thumbnail": "src/assets/thumbnails/476.png",
        "hires": "src/assets/hires/476.png"
      }
    },
    {
      "id": 477,
      "name": {
        "english": "Dusknoir",
        "japanese": "ヨノワール",
        "chinese": "黑夜魔灵",
        "french": "Noctunoir"
      },
      "type": ["Ghost"],
      "base": {
        "HP": 45,
        "Attack": 100,
        "Defense": 135,
        "Sp. Attack": 65,
        "Sp. Defense": 135,
        "Speed": 45
      },
      "species": "Gripper Pokémon",
      "description": "The antenna on its head captures radio waves from the world of spirits that command it to take people there.",
      "evolution": { "prev": ["356", "trade holding Reaper Cloth"] },
      "profile": {
        "height": "2.2 m",
        "weight": "106.6 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Pressure", "false"],
          ["Frisk", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/477.png",
        "thumbnail": "src/assets/thumbnails/477.png",
        "hires": "src/assets/hires/477.png"
      }
    },
    {
      "id": 478,
      "name": {
        "english": "Froslass",
        "japanese": "ユキメノコ",
        "chinese": "雪妖女",
        "french": "Momartik"
      },
      "type": ["Ice", "Ghost"],
      "base": {
        "HP": 70,
        "Attack": 80,
        "Defense": 70,
        "Sp. Attack": 80,
        "Sp. Defense": 70,
        "Speed": 110
      },
      "species": "Snow Land Pokémon",
      "description": "It’s said that on nights of terrible blizzards, it comes down to human settlements. If you hear it knocking at your door, do not open it!",
      "evolution": { "prev": ["361", "use Dawn Stone, Female"] },
      "profile": {
        "height": "1.3 m",
        "weight": "26.6 kg",
        "egg": ["Fairy", "Mineral"],
        "ability": [
          ["Snow Cloak", "false"],
          ["Cursed Body", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/478.png",
        "thumbnail": "src/assets/thumbnails/478.png",
        "hires": "src/assets/hires/478.png"
      }
    },
    {
      "id": 479,
      "name": {
        "english": "Rotom",
        "japanese": "ロトム",
        "chinese": "洛托姆",
        "french": "Motisma"
      },
      "type": ["Electric", "Ghost"],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 77,
        "Sp. Attack": 95,
        "Sp. Defense": 77,
        "Speed": 91
      },
      "species": "Plasma Pokémon",
      "description": "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "0.3 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/479.png",
        "thumbnail": "src/assets/thumbnails/479.png",
        "hires": "src/assets/hires/479.png"
      }
    },
    {
      "id": 480,
      "name": {
        "english": "Uxie",
        "japanese": "ユクシー",
        "chinese": "由克希",
        "french": "Créhelf"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 75,
        "Attack": 75,
        "Defense": 130,
        "Sp. Attack": 75,
        "Sp. Defense": 130,
        "Speed": 95
      },
      "species": "Knowledge Pokémon",
      "description": "It is said that its emergence gave humans the intelligence to improve their quality of life.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "0.3 kg",
        "egg": ["Undiscovered"],
        "ability": [["Levitate", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/480.png",
        "thumbnail": "src/assets/thumbnails/480.png",
        "hires": "src/assets/hires/480.png"
      }
    },
    {
      "id": 481,
      "name": {
        "english": "Mesprit",
        "japanese": "エムリット",
        "chinese": "艾姆利多",
        "french": "Créfollet"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 80,
        "Attack": 105,
        "Defense": 105,
        "Sp. Attack": 105,
        "Sp. Defense": 105,
        "Speed": 80
      },
      "species": "Emotion Pokémon",
      "description": "It sleeps at the bottom of a lake. Its spirit is said to leave its body to fly on the lake’s surface.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "0.3 kg",
        "egg": ["Undiscovered"],
        "ability": [["Levitate", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/481.png",
        "thumbnail": "src/assets/thumbnails/481.png",
        "hires": "src/assets/hires/481.png"
      }
    },
    {
      "id": 482,
      "name": {
        "english": "Azelf",
        "japanese": "アグノム",
        "chinese": "亚克诺姆",
        "french": "Créfadet"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 75,
        "Attack": 125,
        "Defense": 70,
        "Sp. Attack": 125,
        "Sp. Defense": 70,
        "Speed": 115
      },
      "species": "Willpower Pokémon",
      "description": "It is thought that Uxie, Mesprit, and Azelf all came from the same egg.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "0.3 kg",
        "egg": ["Undiscovered"],
        "ability": [["Levitate", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/482.png",
        "thumbnail": "src/assets/thumbnails/482.png",
        "hires": "src/assets/hires/482.png"
      }
    },
    {
      "id": 483,
      "name": {
        "english": "Dialga",
        "japanese": "ディアルガ",
        "chinese": "帝牙卢卡",
        "french": "Dialga"
      },
      "type": ["Steel", "Dragon"],
      "base": {
        "HP": 100,
        "Attack": 120,
        "Defense": 120,
        "Sp. Attack": 150,
        "Sp. Defense": 100,
        "Speed": 90
      },
      "species": "Temporal Pokémon",
      "description": "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
      "evolution": {},
      "profile": {
        "height": "5.4 m",
        "weight": "683 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/483.png",
        "thumbnail": "src/assets/thumbnails/483.png",
        "hires": "src/assets/hires/483.png"
      }
    },
    {
      "id": 484,
      "name": {
        "english": "Palkia",
        "japanese": "パルキア",
        "chinese": "帕路奇亚",
        "french": "Palkia"
      },
      "type": ["Water", "Dragon"],
      "base": {
        "HP": 90,
        "Attack": 120,
        "Defense": 100,
        "Sp. Attack": 150,
        "Sp. Defense": 120,
        "Speed": 100
      },
      "species": "Spatial Pokémon",
      "description": "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.",
      "evolution": {},
      "profile": {
        "height": "4.2 m",
        "weight": "336 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/484.png",
        "thumbnail": "src/assets/thumbnails/484.png",
        "hires": "src/assets/hires/484.png"
      }
    },
    {
      "id": 485,
      "name": {
        "english": "Heatran",
        "japanese": "ヒードラン",
        "chinese": "席多蓝恩",
        "french": "Heatran"
      },
      "type": ["Fire", "Steel"],
      "base": {
        "HP": 91,
        "Attack": 90,
        "Defense": 106,
        "Sp. Attack": 130,
        "Sp. Defense": 106,
        "Speed": 77
      },
      "species": "Lava Dome Pokémon",
      "description": "Boiling blood, like magma, circulates through its body. It makes its dwelling place in volcanic caves.",
      "evolution": {},
      "profile": {
        "height": "1.7 m",
        "weight": "430 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Flash Fire", "false"],
          ["Flame Body", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/485.png",
        "thumbnail": "src/assets/thumbnails/485.png",
        "hires": "src/assets/hires/485.png"
      }
    },
    {
      "id": 486,
      "name": {
        "english": "Regigigas",
        "japanese": "レジギガス",
        "chinese": "雷吉奇卡斯",
        "french": "Regigigas"
      },
      "type": ["Normal"],
      "base": {
        "HP": 110,
        "Attack": 160,
        "Defense": 110,
        "Sp. Attack": 80,
        "Sp. Defense": 110,
        "Speed": 100
      },
      "species": "Colossal Pokémon",
      "description": "There is an enduring legend that states this Pokémon towed continents with ropes.",
      "evolution": {},
      "profile": {
        "height": "3.7 m",
        "weight": "420 kg",
        "egg": ["Undiscovered"],
        "ability": [["Slow Start", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/486.png",
        "thumbnail": "src/assets/thumbnails/486.png",
        "hires": "src/assets/hires/486.png"
      }
    },
    {
      "id": 487,
      "name": {
        "english": "Giratina",
        "japanese": "ギラティナ",
        "chinese": "骑拉帝纳",
        "french": "Giratina"
      },
      "type": ["Ghost", "Dragon"],
      "base": {
        "HP": 150,
        "Attack": 100,
        "Defense": 120,
        "Sp. Attack": 100,
        "Sp. Defense": 120,
        "Speed": 90
      },
      "species": "Renegade Pokémon",
      "description": "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
      "evolution": {},
      "profile": {
        "height": "4.5 m",
        "weight": "750 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Pressure", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/487.png",
        "thumbnail": "src/assets/thumbnails/487.png",
        "hires": "src/assets/hires/487.png"
      }
    },
    {
      "id": 488,
      "name": {
        "english": "Cresselia",
        "japanese": "クレセリア",
        "chinese": "克雷色利亚",
        "french": "Cresselia"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 120,
        "Attack": 70,
        "Defense": 120,
        "Sp. Attack": 75,
        "Sp. Defense": 130,
        "Speed": 85
      },
      "species": "Lunar Pokémon",
      "description": "Those who sleep holding Cresselia’s feather are assured of joyful dreams. It is said to represent the crescent moon.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "85.6 kg",
        "egg": ["Undiscovered"],
        "ability": [["Levitate", "false"]],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/488.png",
        "thumbnail": "src/assets/thumbnails/488.png",
        "hires": "src/assets/hires/488.png"
      }
    },
    {
      "id": 489,
      "name": {
        "english": "Phione",
        "japanese": "フィオネ",
        "chinese": "霏欧纳",
        "french": "Phione"
      },
      "type": ["Water"],
      "base": {
        "HP": 80,
        "Attack": 80,
        "Defense": 80,
        "Sp. Attack": 80,
        "Sp. Defense": 80,
        "Speed": 80
      },
      "species": "Sea Drifter Pokémon",
      "description": "It drifts in warm seas. It always returns to where it was born, no matter how far it may have drifted.",
      "evolution": {},
      "profile": {
        "height": "0.4 m",
        "weight": "3.1 kg",
        "egg": ["Water 1", "Fairy"],
        "ability": [["Hydration", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/489.png",
        "thumbnail": "src/assets/thumbnails/489.png",
        "hires": "src/assets/hires/489.png"
      }
    },
    {
      "id": 490,
      "name": {
        "english": "Manaphy",
        "japanese": "マナフィ",
        "chinese": "玛纳霏",
        "french": "Manaphy"
      },
      "type": ["Water"],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 100,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 100
      },
      "species": "Seafaring Pokémon",
      "description": "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "1.4 kg",
        "egg": ["Water 1", "Fairy"],
        "ability": [["Hydration", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/490.png",
        "thumbnail": "src/assets/thumbnails/490.png",
        "hires": "src/assets/hires/490.png"
      }
    },
    {
      "id": 491,
      "name": {
        "english": "Darkrai",
        "japanese": "ダークライ",
        "chinese": "达克莱伊",
        "french": "Darkrai"
      },
      "type": ["Dark"],
      "base": {
        "HP": 70,
        "Attack": 90,
        "Defense": 90,
        "Sp. Attack": 135,
        "Sp. Defense": 90,
        "Speed": 125
      },
      "species": "Pitch-Black Pokémon",
      "description": "It can lull people to sleep and make them dream. It is active during nights of the new moon.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "50.5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Bad Dreams", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/491.png",
        "thumbnail": "src/assets/thumbnails/491.png",
        "hires": "src/assets/hires/491.png"
      }
    },
    {
      "id": 492,
      "name": {
        "english": "Shaymin",
        "japanese": "シェイミ",
        "chinese": "谢米",
        "french": "Shaymin"
      },
      "type": ["Grass"],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 100,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 100
      },
      "species": "Gratitude Pokémon",
      "description": "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers.",
      "evolution": {},
      "profile": {
        "height": "0.2 m",
        "weight": "2.1 kg",
        "egg": ["Undiscovered"],
        "ability": [["Natural Cure", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/492.png",
        "thumbnail": "src/assets/thumbnails/492.png",
        "hires": "src/assets/hires/492.png"
      }
    },
    {
      "id": 493,
      "name": {
        "english": "Arceus",
        "japanese": "アルセウス",
        "chinese": "阿尔宙斯",
        "french": "Arceus"
      },
      "type": ["Normal"],
      "base": {
        "HP": 120,
        "Attack": 120,
        "Defense": 120,
        "Sp. Attack": 120,
        "Sp. Defense": 120,
        "Speed": 120
      },
      "species": "Alpha Pokémon",
      "description": "It is told in mythology that this Pokémon was born before the universe even existed.",
      "evolution": {},
      "profile": {
        "height": "3.2 m",
        "weight": "320 kg",
        "egg": ["Undiscovered"],
        "ability": [["Multitype", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/493.png",
        "thumbnail": "src/assets/thumbnails/493.png",
        "hires": "src/assets/hires/493.png"
      }
    },
    {
      "id": 494,
      "name": {
        "english": "Victini",
        "japanese": "ビクティニ",
        "chinese": "比克提尼",
        "french": "Victini"
      },
      "type": ["Psychic", "Fire"],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 100,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 100
      },
      "species": "Victory Pokémon",
      "description": "When it shares the infinite energy it creates, that being’s entire body will be overflowing with power.",
      "evolution": {},
      "profile": {
        "height": "0.4 m",
        "weight": "4 kg",
        "egg": ["Undiscovered"],
        "ability": [["Victory Star", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/494.png",
        "thumbnail": "src/assets/thumbnails/494.png",
        "hires": "src/assets/hires/494.png"
      }
    },
    {
      "id": 495,
      "name": {
        "english": "Snivy",
        "japanese": "ツタージャ",
        "chinese": "藤藤蛇",
        "french": "Vipélierre"
      },
      "type": ["Grass"],
      "base": {
        "HP": 45,
        "Attack": 45,
        "Defense": 55,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 63
      },
      "species": "Grass Snake Pokémon",
      "description": "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.",
      "evolution": { "next": [["496", "Level 17"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "8.1 kg",
        "egg": ["Field", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Contrary", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/495.png",
        "thumbnail": "src/assets/thumbnails/495.png",
        "hires": "src/assets/hires/495.png"
      }
    },
    {
      "id": 496,
      "name": {
        "english": "Servine",
        "japanese": "ジャノビー",
        "chinese": "青藤蛇",
        "french": "Lianaja"
      },
      "type": ["Grass"],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 75,
        "Sp. Attack": 60,
        "Sp. Defense": 75,
        "Speed": 83
      },
      "species": "Grass Snake Pokémon",
      "description": "When it gets dirty, its leaves can’t be used in photosynthesis, so it always keeps itself clean.",
      "evolution": { "prev": ["495", "Level 17"], "next": [["497", "Level 36"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "16 kg",
        "egg": ["Field", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Contrary", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/496.png",
        "thumbnail": "src/assets/thumbnails/496.png",
        "hires": "src/assets/hires/496.png"
      }
    },
    {
      "id": 497,
      "name": {
        "english": "Serperior",
        "japanese": "ジャローダ",
        "chinese": "君主蛇",
        "french": "Majaspic"
      },
      "type": ["Grass"],
      "base": {
        "HP": 75,
        "Attack": 75,
        "Defense": 95,
        "Sp. Attack": 75,
        "Sp. Defense": 95,
        "Speed": 113
      },
      "species": "Regal Pokémon",
      "description": "It can stop its opponents’ movements with just a glare. It takes in solar energy and boosts it internally.",
      "evolution": { "prev": ["496", "Level 36"] },
      "profile": {
        "height": "3.3 m",
        "weight": "63 kg",
        "egg": ["Field", "Grass"],
        "ability": [
          ["Overgrow", "false"],
          ["Contrary", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/497.png",
        "thumbnail": "src/assets/thumbnails/497.png",
        "hires": "src/assets/hires/497.png"
      }
    },
    {
      "id": 498,
      "name": {
        "english": "Tepig",
        "japanese": "ポカブ",
        "chinese": "暖暖猪",
        "french": "Gruikui"
      },
      "type": ["Fire"],
      "base": {
        "HP": 65,
        "Attack": 63,
        "Defense": 45,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 45
      },
      "species": "Fire Pig Pokémon",
      "description": "It loves to eat roasted berries, but sometimes it gets too excited and burns them to a crisp.",
      "evolution": { "next": [["499", "Level 17"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "9.9 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Thick Fat", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/498.png",
        "thumbnail": "src/assets/thumbnails/498.png",
        "hires": "src/assets/hires/498.png"
      }
    },
    {
      "id": 499,
      "name": {
        "english": "Pignite",
        "japanese": "チャオブー",
        "chinese": "炒炒猪",
        "french": "Grotichon"
      },
      "type": ["Fire", "Fighting"],
      "base": {
        "HP": 90,
        "Attack": 93,
        "Defense": 55,
        "Sp. Attack": 70,
        "Sp. Defense": 55,
        "Speed": 55
      },
      "species": "Fire Pig Pokémon",
      "description": "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke.",
      "evolution": { "prev": ["498", "Level 17"], "next": [["500", "Level 36"]] },
      "profile": {
        "height": "1 m",
        "weight": "55.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Thick Fat", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/499.png",
        "thumbnail": "src/assets/thumbnails/499.png",
        "hires": "src/assets/hires/499.png"
      }
    },
    {
      "id": 500,
      "name": {
        "english": "Emboar",
        "japanese": "エンブオー",
        "chinese": "炎武王",
        "french": "Roitiflam"
      },
      "type": ["Fire", "Fighting"],
      "base": {
        "HP": 110,
        "Attack": 123,
        "Defense": 65,
        "Sp. Attack": 100,
        "Sp. Defense": 65,
        "Speed": 65
      },
      "species": "Mega Fire Pig Pokémon",
      "description": "It has mastered fast and powerful fighting moves. It grows a beard of fire.",
      "evolution": { "prev": ["499", "Level 36"] },
      "profile": {
        "height": "1.6 m",
        "weight": "150 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Reckless", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/500.png",
        "thumbnail": "src/assets/thumbnails/500.png",
        "hires": "src/assets/hires/500.png"
      }
    },
    {
      "id": 501,
      "name": {
        "english": "Oshawott",
        "japanese": "ミジュマル",
        "chinese": "水水獭",
        "french": "Moustillon"
      },
      "type": ["Water"],
      "base": {
        "HP": 55,
        "Attack": 55,
        "Defense": 45,
        "Sp. Attack": 63,
        "Sp. Defense": 45,
        "Speed": 45
      },
      "species": "Sea Otter Pokémon",
      "description": "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing.",
      "evolution": { "next": [["502", "Level 17"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "5.9 kg",
        "egg": ["Field"],
        "ability": [
          ["Torrent", "false"],
          ["Shell Armor", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/501.png",
        "thumbnail": "src/assets/thumbnails/501.png",
        "hires": "src/assets/hires/501.png"
      }
    },
    {
      "id": 502,
      "name": {
        "english": "Dewott",
        "japanese": "フタチマル",
        "chinese": "双刃丸",
        "french": "Mateloutre"
      },
      "type": ["Water"],
      "base": {
        "HP": 75,
        "Attack": 75,
        "Defense": 60,
        "Sp. Attack": 83,
        "Sp. Defense": 60,
        "Speed": 60
      },
      "species": "Discipline Pokémon",
      "description": "As a result of strict training, each Dewott learns different forms for using the scalchops.",
      "evolution": { "prev": ["501", "Level 17"], "next": [["503", "Level 36"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "24.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Torrent", "false"],
          ["Shell Armor", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/502.png",
        "thumbnail": "src/assets/thumbnails/502.png",
        "hires": "src/assets/hires/502.png"
      }
    },
    {
      "id": 503,
      "name": {
        "english": "Samurott",
        "japanese": "ダイケンキ",
        "chinese": "大剑鬼",
        "french": "Clamiral"
      },
      "type": ["Water"],
      "base": {
        "HP": 95,
        "Attack": 100,
        "Defense": 85,
        "Sp. Attack": 108,
        "Sp. Defense": 70,
        "Speed": 70
      },
      "species": "Formidable Pokémon",
      "description": "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody.",
      "evolution": { "prev": ["502", "Level 36"] },
      "profile": {
        "height": "1.5 m",
        "weight": "94.6 kg",
        "egg": ["Field"],
        "ability": [
          ["Torrent", "false"],
          ["Shell Armor", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/503.png",
        "thumbnail": "src/assets/thumbnails/503.png",
        "hires": "src/assets/hires/503.png"
      }
    },
    {
      "id": 504,
      "name": {
        "english": "Patrat",
        "japanese": "ミネズミ",
        "chinese": "探探鼠",
        "french": "Ratentif"
      },
      "type": ["Normal"],
      "base": {
        "HP": 45,
        "Attack": 55,
        "Defense": 39,
        "Sp. Attack": 35,
        "Sp. Defense": 39,
        "Speed": 42
      },
      "species": "Scout Pokémon",
      "description": "Extremely cautious, one of them will always be on the lookout, but it won’t notice a foe coming from behind.",
      "evolution": { "next": [["505", "Level 20"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "11.6 kg",
        "egg": ["Field"],
        "ability": [
          ["Run Away", "false"],
          ["Keen Eye", "false"],
          ["Analytic", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/504.png",
        "thumbnail": "src/assets/thumbnails/504.png",
        "hires": "src/assets/hires/504.png"
      }
    },
    {
      "id": 505,
      "name": {
        "english": "Watchog",
        "japanese": "ミルホッグ",
        "chinese": "步哨鼠",
        "french": "Miradar"
      },
      "type": ["Normal"],
      "base": {
        "HP": 60,
        "Attack": 85,
        "Defense": 69,
        "Sp. Attack": 60,
        "Sp. Defense": 69,
        "Speed": 77
      },
      "species": "Lookout Pokémon",
      "description": "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches.",
      "evolution": { "prev": ["504", "Level 20"] },
      "profile": {
        "height": "1.1 m",
        "weight": "27 kg",
        "egg": ["Field"],
        "ability": [
          ["Illuminate", "false"],
          ["Keen Eye", "false"],
          ["Analytic", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/505.png",
        "thumbnail": "src/assets/thumbnails/505.png",
        "hires": "src/assets/hires/505.png"
      }
    },
    {
      "id": 506,
      "name": {
        "english": "Lillipup",
        "japanese": "ヨーテリー",
        "chinese": "小约克",
        "french": "Ponchiot"
      },
      "type": ["Normal"],
      "base": {
        "HP": 45,
        "Attack": 60,
        "Defense": 45,
        "Sp. Attack": 25,
        "Sp. Defense": 45,
        "Speed": 55
      },
      "species": "Puppy Pokémon",
      "description": "This Pokémon is popular with beginners because it’s intelligent, obedient to its Trainer’s commands, and easy to raise.",
      "evolution": { "next": [["507", "Level 16"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "4.1 kg",
        "egg": ["Field"],
        "ability": [
          ["Vital Spirit", "false"],
          ["Pickup", "false"],
          ["Run Away", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/506.png",
        "thumbnail": "src/assets/thumbnails/506.png",
        "hires": "src/assets/hires/506.png"
      }
    },
    {
      "id": 507,
      "name": {
        "english": "Herdier",
        "japanese": "ハーデリア",
        "chinese": "哈约克",
        "french": "Ponchien"
      },
      "type": ["Normal"],
      "base": {
        "HP": 65,
        "Attack": 80,
        "Defense": 65,
        "Sp. Attack": 35,
        "Sp. Defense": 65,
        "Speed": 60
      },
      "species": "Loyal Dog Pokémon",
      "description": "It has been living with people for so long that portrayals of it can be found on the walls of caves from long, long ago.",
      "evolution": { "prev": ["506", "Level 16"], "next": [["508", "Level 32"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "14.7 kg",
        "egg": ["Field"],
        "ability": [
          ["Intimidate", "false"],
          ["Sand Rush", "false"],
          ["Scrappy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/507.png",
        "thumbnail": "src/assets/thumbnails/507.png",
        "hires": "src/assets/hires/507.png"
      }
    },
    {
      "id": 508,
      "name": {
        "english": "Stoutland",
        "japanese": "ムーランド",
        "chinese": "长毛狗",
        "french": "Mastouffe"
      },
      "type": ["Normal"],
      "base": {
        "HP": 85,
        "Attack": 110,
        "Defense": 90,
        "Sp. Attack": 45,
        "Sp. Defense": 90,
        "Speed": 80
      },
      "species": "Big-Hearted Pokémon",
      "description": "Its fur is long and thick. A long time ago in cold regions, every household kept a Stoutland.",
      "evolution": { "prev": ["507", "Level 32"] },
      "profile": {
        "height": "1.2 m",
        "weight": "61 kg",
        "egg": ["Field"],
        "ability": [
          ["Intimidate", "false"],
          ["Sand Rush", "false"],
          ["Scrappy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/508.png",
        "thumbnail": "src/assets/thumbnails/508.png",
        "hires": "src/assets/hires/508.png"
      }
    },
    {
      "id": 509,
      "name": {
        "english": "Purrloin",
        "japanese": "チョロネコ",
        "chinese": "扒手猫",
        "french": "Chacripan"
      },
      "type": ["Dark"],
      "base": {
        "HP": 41,
        "Attack": 50,
        "Defense": 37,
        "Sp. Attack": 50,
        "Sp. Defense": 37,
        "Speed": 66
      },
      "species": "Devious Pokémon",
      "description": "They steal from people for fun, but their victims can’t help but forgive them. Their deceptively cute act is perfect.",
      "evolution": { "next": [["510", "Level 20"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "10.1 kg",
        "egg": ["Field"],
        "ability": [
          ["Limber", "false"],
          ["Unburden", "false"],
          ["Prankster", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/509.png",
        "thumbnail": "src/assets/thumbnails/509.png",
        "hires": "src/assets/hires/509.png"
      }
    },
    {
      "id": 510,
      "name": {
        "english": "Liepard",
        "japanese": "レパルダス",
        "chinese": "酷豹",
        "french": "Léopardus"
      },
      "type": ["Dark"],
      "base": {
        "HP": 64,
        "Attack": 88,
        "Defense": 50,
        "Sp. Attack": 88,
        "Sp. Defense": 50,
        "Speed": 106
      },
      "species": "Cruel Pokémon",
      "description": "Stealthily, it sneaks up on its target, striking from behind before its victim has a chance to react.",
      "evolution": { "prev": ["509", "Level 20"] },
      "profile": {
        "height": "1.1 m",
        "weight": "37.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Limber", "false"],
          ["Unburden", "false"],
          ["Prankster", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/510.png",
        "thumbnail": "src/assets/thumbnails/510.png",
        "hires": "src/assets/hires/510.png"
      }
    },
    {
      "id": 511,
      "name": {
        "english": "Pansage",
        "japanese": "ヤナップ",
        "chinese": "花椰猴",
        "french": "Feuillajou"
      },
      "type": ["Grass"],
      "base": {
        "HP": 50,
        "Attack": 53,
        "Defense": 48,
        "Sp. Attack": 53,
        "Sp. Defense": 48,
        "Speed": 64
      },
      "species": "Grass Monkey Pokémon",
      "description": "It’s good at finding berries and gathers them from all over. It’s kind enough to share them with friends.",
      "evolution": { "next": [["512", "use Leaf Stone"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "10.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Gluttony", "false"],
          ["Overgrow", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/511.png",
        "thumbnail": "src/assets/thumbnails/511.png",
        "hires": "src/assets/hires/511.png"
      }
    },
    {
      "id": 512,
      "name": {
        "english": "Simisage",
        "japanese": "ヤナッキー",
        "chinese": "花椰猿",
        "french": "Feuiloutan"
      },
      "type": ["Grass"],
      "base": {
        "HP": 75,
        "Attack": 98,
        "Defense": 63,
        "Sp. Attack": 98,
        "Sp. Defense": 63,
        "Speed": 101
      },
      "species": "Thorn Monkey Pokémon",
      "description": "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter.",
      "evolution": { "prev": ["511", "use Leaf Stone"] },
      "profile": {
        "height": "1.1 m",
        "weight": "30.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Gluttony", "false"],
          ["Overgrow", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/512.png",
        "thumbnail": "src/assets/thumbnails/512.png",
        "hires": "src/assets/hires/512.png"
      }
    },
    {
      "id": 513,
      "name": {
        "english": "Pansear",
        "japanese": "バオップ",
        "chinese": "爆香猴",
        "french": "Flamajou"
      },
      "type": ["Fire"],
      "base": {
        "HP": 50,
        "Attack": 53,
        "Defense": 48,
        "Sp. Attack": 53,
        "Sp. Defense": 48,
        "Speed": 64
      },
      "species": "High Temp Pokémon",
      "description": "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit.",
      "evolution": { "next": [["514", "use Fire Stone"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "11 kg",
        "egg": ["Field"],
        "ability": [
          ["Gluttony", "false"],
          ["Blaze", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/513.png",
        "thumbnail": "src/assets/thumbnails/513.png",
        "hires": "src/assets/hires/513.png"
      }
    },
    {
      "id": 514,
      "name": {
        "english": "Simisear",
        "japanese": "バオッキー",
        "chinese": "爆香猿",
        "french": "Flamoutan"
      },
      "type": ["Fire"],
      "base": {
        "HP": 75,
        "Attack": 98,
        "Defense": 63,
        "Sp. Attack": 98,
        "Sp. Defense": 63,
        "Speed": 101
      },
      "species": "Ember Pokémon",
      "description": "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets.",
      "evolution": { "prev": ["513", "use Fire Stone"] },
      "profile": {
        "height": "1 m",
        "weight": "28 kg",
        "egg": ["Field"],
        "ability": [
          ["Gluttony", "false"],
          ["Blaze", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/514.png",
        "thumbnail": "src/assets/thumbnails/514.png",
        "hires": "src/assets/hires/514.png"
      }
    },
    {
      "id": 515,
      "name": {
        "english": "Panpour",
        "japanese": "ヒヤップ",
        "chinese": "冷水猴",
        "french": "Flotajou"
      },
      "type": ["Water"],
      "base": {
        "HP": 50,
        "Attack": 53,
        "Defense": 48,
        "Sp. Attack": 53,
        "Sp. Defense": 48,
        "Speed": 64
      },
      "species": "Spray Pokémon",
      "description": "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.",
      "evolution": { "next": [["516", "use Water Stone"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "13.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Gluttony", "false"],
          ["Torrent", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/515.png",
        "thumbnail": "src/assets/thumbnails/515.png",
        "hires": "src/assets/hires/515.png"
      }
    },
    {
      "id": 516,
      "name": {
        "english": "Simipour",
        "japanese": "ヒヤッキー",
        "chinese": "冷水猿",
        "french": "Flotoutan"
      },
      "type": ["Water"],
      "base": {
        "HP": 75,
        "Attack": 98,
        "Defense": 63,
        "Sp. Attack": 98,
        "Sp. Defense": 63,
        "Speed": 101
      },
      "species": "Geyser Pokémon",
      "description": "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail.",
      "evolution": { "prev": ["515", "use Water Stone"] },
      "profile": {
        "height": "1 m",
        "weight": "29 kg",
        "egg": ["Field"],
        "ability": [
          ["Gluttony", "false"],
          ["Torrent", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/516.png",
        "thumbnail": "src/assets/thumbnails/516.png",
        "hires": "src/assets/hires/516.png"
      }
    },
    {
      "id": 517,
      "name": {
        "english": "Munna",
        "japanese": "ムンナ",
        "chinese": "食梦梦",
        "french": "Munna"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 76,
        "Attack": 25,
        "Defense": 45,
        "Sp. Attack": 67,
        "Sp. Defense": 55,
        "Speed": 24
      },
      "species": "Dream Eater Pokémon",
      "description": "It eats the dreams of people and Pokémon. When it eats a pleasant dream, it expels pink-colored mist.",
      "evolution": { "next": [["518", "use Moon Stone"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "23.3 kg",
        "egg": ["Field"],
        "ability": [
          ["Forewarn", "false"],
          ["Synchronize", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/517.png",
        "thumbnail": "src/assets/thumbnails/517.png",
        "hires": "src/assets/hires/517.png"
      }
    },
    {
      "id": 518,
      "name": {
        "english": "Musharna",
        "japanese": "ムシャーナ",
        "chinese": "梦梦蚀",
        "french": "Mushana"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 116,
        "Attack": 55,
        "Defense": 85,
        "Sp. Attack": 107,
        "Sp. Defense": 95,
        "Speed": 29
      },
      "species": "Drowsing Pokémon",
      "description": "The dream mist coming from its forehead changes into many different colors depending on the dream that was eaten.",
      "evolution": { "prev": ["517", "use Moon Stone"] },
      "profile": {
        "height": "1.1 m",
        "weight": "60.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Forewarn", "false"],
          ["Synchronize", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/518.png",
        "thumbnail": "src/assets/thumbnails/518.png",
        "hires": "src/assets/hires/518.png"
      }
    },
    {
      "id": 519,
      "name": {
        "english": "Pidove",
        "japanese": "マメパト",
        "chinese": "豆豆鸽",
        "french": "Poichigeon"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 50,
        "Attack": 55,
        "Defense": 50,
        "Sp. Attack": 36,
        "Sp. Defense": 30,
        "Speed": 43
      },
      "species": "Tiny Pigeon Pokémon",
      "description": "These Pokémon live in cities. They are accustomed to people. Flocks often gather in parks and plazas.",
      "evolution": { "next": [["520", "Level 21"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "2.1 kg",
        "egg": ["Flying"],
        "ability": [
          ["Big Pecks", "false"],
          ["Super Luck", "false"],
          ["Rivalry", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/519.png",
        "thumbnail": "src/assets/thumbnails/519.png",
        "hires": "src/assets/hires/519.png"
      }
    },
    {
      "id": 520,
      "name": {
        "english": "Tranquill",
        "japanese": "ハトーボー",
        "chinese": "咕咕鸽",
        "french": "Colombeau"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 62,
        "Attack": 77,
        "Defense": 62,
        "Sp. Attack": 50,
        "Sp. Defense": 42,
        "Speed": 65
      },
      "species": "Wild Pigeon Pokémon",
      "description": "No matter where in the world it goes, it knows where its nest is, so it never gets separated from its Trainer.",
      "evolution": { "prev": ["519", "Level 21"], "next": [["521", "Level 32"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "15 kg",
        "egg": ["Flying"],
        "ability": [
          ["Big Pecks", "false"],
          ["Super Luck", "false"],
          ["Rivalry", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/520.png",
        "thumbnail": "src/assets/thumbnails/520.png",
        "hires": "src/assets/hires/520.png"
      }
    },
    {
      "id": 521,
      "name": {
        "english": "Unfezant",
        "japanese": "ケンホロウ",
        "chinese": "高傲雉鸡",
        "french": "Déflaisan"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 80,
        "Attack": 115,
        "Defense": 80,
        "Sp. Attack": 65,
        "Sp. Defense": 55,
        "Speed": 93
      },
      "species": "Proud Pokémon",
      "description": "Males have plumage on their heads. They will never let themselves feel close to anyone other than their Trainers.",
      "evolution": { "prev": ["520", "Level 32"] },
      "profile": {
        "height": "1.2 m",
        "weight": "29 kg",
        "egg": ["Flying"],
        "ability": [
          ["Big Pecks", "false"],
          ["Super Luck", "false"],
          ["Rivalry", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/521.png",
        "thumbnail": "src/assets/thumbnails/521.png",
        "hires": "src/assets/hires/521.png"
      }
    },
    {
      "id": 522,
      "name": {
        "english": "Blitzle",
        "japanese": "シママ",
        "chinese": "斑斑马",
        "french": "Zébibron"
      },
      "type": ["Electric"],
      "base": {
        "HP": 45,
        "Attack": 60,
        "Defense": 32,
        "Sp. Attack": 50,
        "Sp. Defense": 32,
        "Speed": 76
      },
      "species": "Electrified Pokémon",
      "description": "Its mane shines when it discharges electricity. They use the frequency and rhythm of these flashes to communicate.",
      "evolution": { "next": [["523", "Level 27"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "29.8 kg",
        "egg": ["Field"],
        "ability": [
          ["Lightning Rod", "false"],
          ["Motor Drive", "false"],
          ["Sap Sipper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/522.png",
        "thumbnail": "src/assets/thumbnails/522.png",
        "hires": "src/assets/hires/522.png"
      }
    },
    {
      "id": 523,
      "name": {
        "english": "Zebstrika",
        "japanese": "ゼブライカ",
        "chinese": "雷电斑马",
        "french": "Zéblitz"
      },
      "type": ["Electric"],
      "base": {
        "HP": 75,
        "Attack": 100,
        "Defense": 63,
        "Sp. Attack": 80,
        "Sp. Defense": 63,
        "Speed": 116
      },
      "species": "Thunderbolt Pokémon",
      "description": "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
      "evolution": { "prev": ["522", "Level 27"] },
      "profile": {
        "height": "1.6 m",
        "weight": "79.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Lightning Rod", "false"],
          ["Motor Drive", "false"],
          ["Sap Sipper", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/523.png",
        "thumbnail": "src/assets/thumbnails/523.png",
        "hires": "src/assets/hires/523.png"
      }
    },
    {
      "id": 524,
      "name": {
        "english": "Roggenrola",
        "japanese": "ダンゴロ",
        "chinese": "石丸子",
        "french": "Nodulithe"
      },
      "type": ["Rock"],
      "base": {
        "HP": 55,
        "Attack": 75,
        "Defense": 85,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 15
      },
      "species": "Mantle Pokémon",
      "description": "It was found in a fissure in a layer of exposed rock. The material that makes up its body is dirt from several hundred years ago.",
      "evolution": { "next": [["525", "Level 25"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "18 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Sturdy", "false"],
          ["Weak Armor", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/524.png",
        "thumbnail": "src/assets/thumbnails/524.png",
        "hires": "src/assets/hires/524.png"
      }
    },
    {
      "id": 525,
      "name": {
        "english": "Boldore",
        "japanese": "ガントル",
        "chinese": "地幔岩",
        "french": "Géolithe"
      },
      "type": ["Rock"],
      "base": {
        "HP": 70,
        "Attack": 105,
        "Defense": 105,
        "Sp. Attack": 50,
        "Sp. Defense": 40,
        "Speed": 20
      },
      "species": "Ore Pokémon",
      "description": "Its orange crystals are lumps of powerful energy. They’re valuable, so Boldore is sometimes targeted for them.",
      "evolution": { "prev": ["524", "Level 25"], "next": [["526", "Trade"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "102 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Sturdy", "false"],
          ["Weak Armor", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/525.png",
        "thumbnail": "src/assets/thumbnails/525.png",
        "hires": "src/assets/hires/525.png"
      }
    },
    {
      "id": 526,
      "name": {
        "english": "Gigalith",
        "japanese": "ギガイアス",
        "chinese": "庞岩怪",
        "french": "Gigalithe"
      },
      "type": ["Rock"],
      "base": {
        "HP": 85,
        "Attack": 135,
        "Defense": 130,
        "Sp. Attack": 60,
        "Sp. Defense": 80,
        "Speed": 25
      },
      "species": "Compressed Pokémon",
      "description": "It absorbs rays of sunlight and shoots out energy. It’s usually lurking deep beneath the surface.",
      "evolution": { "prev": ["525", "Trade"] },
      "profile": {
        "height": "1.7 m",
        "weight": "260 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Sturdy", "false"],
          ["Sand Stream", "false"],
          ["Sand Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/526.png",
        "thumbnail": "src/assets/thumbnails/526.png",
        "hires": "src/assets/hires/526.png"
      }
    },
    {
      "id": 527,
      "name": {
        "english": "Woobat",
        "japanese": "コロモリ",
        "chinese": "滚滚蝙蝠",
        "french": "Chovsourir"
      },
      "type": ["Psychic", "Flying"],
      "base": {
        "HP": 65,
        "Attack": 45,
        "Defense": 43,
        "Sp. Attack": 55,
        "Sp. Defense": 43,
        "Speed": 72
      },
      "species": "Bat Pokémon",
      "description": "The heart-shaped mark left on a body after a Woobat has been attached to it is said to bring good fortune.",
      "evolution": { "next": [["528", "high Friendship"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "2.1 kg",
        "egg": ["Flying", "Field"],
        "ability": [
          ["Unaware", "false"],
          ["Klutz", "false"],
          ["Simple", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/527.png",
        "thumbnail": "src/assets/thumbnails/527.png",
        "hires": "src/assets/hires/527.png"
      }
    },
    {
      "id": 528,
      "name": {
        "english": "Swoobat",
        "japanese": "ココロモリ",
        "chinese": "心蝙蝠",
        "french": "Rhinolove"
      },
      "type": ["Psychic", "Flying"],
      "base": {
        "HP": 67,
        "Attack": 57,
        "Defense": 55,
        "Sp. Attack": 77,
        "Sp. Defense": 55,
        "Speed": 114
      },
      "species": "Courting Pokémon",
      "description": "Anyone who comes into contact with the ultrasonic waves emitted by a courting male experiences a positive mood shift.",
      "evolution": { "prev": ["527", "high Friendship"] },
      "profile": {
        "height": "0.9 m",
        "weight": "10.5 kg",
        "egg": ["Flying", "Field"],
        "ability": [
          ["Unaware", "false"],
          ["Klutz", "false"],
          ["Simple", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/528.png",
        "thumbnail": "src/assets/thumbnails/528.png",
        "hires": "src/assets/hires/528.png"
      }
    },
    {
      "id": 529,
      "name": {
        "english": "Drilbur",
        "japanese": "モグリュー",
        "chinese": "螺钉地鼠",
        "french": "Rototaupe"
      },
      "type": ["Ground"],
      "base": {
        "HP": 60,
        "Attack": 85,
        "Defense": 40,
        "Sp. Attack": 30,
        "Sp. Defense": 45,
        "Speed": 68
      },
      "species": "Mole Pokémon",
      "description": "By spinning its body, it can dig straight through the ground at a speed of 30 mph.",
      "evolution": { "next": [["530", "Level 31"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "8.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Sand Rush", "false"],
          ["Sand Force", "false"],
          ["Mold Breaker", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/529.png",
        "thumbnail": "src/assets/thumbnails/529.png",
        "hires": "src/assets/hires/529.png"
      }
    },
    {
      "id": 530,
      "name": {
        "english": "Excadrill",
        "japanese": "ドリュウズ",
        "chinese": "龙头地鼠",
        "french": "Minotaupe"
      },
      "type": ["Ground", "Steel"],
      "base": {
        "HP": 110,
        "Attack": 135,
        "Defense": 60,
        "Sp. Attack": 50,
        "Sp. Defense": 65,
        "Speed": 88
      },
      "species": "Subterrene Pokémon",
      "description": "More than 300 feet below the surface, they build mazelike nests. Their activity can be destructive to subway tunnels.",
      "evolution": { "prev": ["529", "Level 31"] },
      "profile": {
        "height": "0.7 m",
        "weight": "40.4 kg",
        "egg": ["Field"],
        "ability": [
          ["Sand Rush", "false"],
          ["Sand Force", "false"],
          ["Mold Breaker", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/530.png",
        "thumbnail": "src/assets/thumbnails/530.png",
        "hires": "src/assets/hires/530.png"
      }
    },
    {
      "id": 531,
      "name": {
        "english": "Audino",
        "japanese": "タブンネ",
        "chinese": "差不多娃娃",
        "french": "Nanméouïe"
      },
      "type": ["Normal"],
      "base": {
        "HP": 103,
        "Attack": 60,
        "Defense": 86,
        "Sp. Attack": 60,
        "Sp. Defense": 86,
        "Speed": 50
      },
      "species": "Hearing Pokémon",
      "description": "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling.",
      "evolution": {},
      "profile": {
        "height": "1.1 m",
        "weight": "31 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Healer", "false"],
          ["Regenerator", "false"],
          ["Klutz", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/531.png",
        "thumbnail": "src/assets/thumbnails/531.png",
        "hires": "src/assets/hires/531.png"
      }
    },
    {
      "id": 532,
      "name": {
        "english": "Timburr",
        "japanese": "ドッコラー",
        "chinese": "搬运小匠",
        "french": "Charpenti"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 75,
        "Attack": 80,
        "Defense": 55,
        "Sp. Attack": 25,
        "Sp. Defense": 35,
        "Speed": 35
      },
      "species": "Muscular Pokémon",
      "description": "Always carrying squared logs, they help out with construction. As they grow, they carry bigger logs.",
      "evolution": { "next": [["533", "Level 25"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "12.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Guts", "false"],
          ["Sheer Force", "false"],
          ["Iron Fist", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/532.png",
        "thumbnail": "src/assets/thumbnails/532.png",
        "hires": "src/assets/hires/532.png"
      }
    },
    {
      "id": 533,
      "name": {
        "english": "Gurdurr",
        "japanese": "ドテッコツ",
        "chinese": "铁骨土人",
        "french": "Ouvrifier"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 85,
        "Attack": 105,
        "Defense": 85,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 40
      },
      "species": "Muscular Pokémon",
      "description": "This Pokémon is so muscular and strongly built that even a group of wrestlers could not make it budge an inch.",
      "evolution": { "prev": ["532", "Level 25"], "next": [["534", "Trade"]] },
      "profile": {
        "height": "1.2 m",
        "weight": "40 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Guts", "false"],
          ["Sheer Force", "false"],
          ["Iron Fist", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/533.png",
        "thumbnail": "src/assets/thumbnails/533.png",
        "hires": "src/assets/hires/533.png"
      }
    },
    {
      "id": 534,
      "name": {
        "english": "Conkeldurr",
        "japanese": "ローブシン",
        "chinese": "修建老匠",
        "french": "Bétochef"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 105,
        "Attack": 140,
        "Defense": 95,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 45
      },
      "species": "Muscular Pokémon",
      "description": "Rather than rely on force, they master moves that utilize the centrifugal force of spinning concrete.",
      "evolution": { "prev": ["533", "Trade"] },
      "profile": {
        "height": "1.4 m",
        "weight": "87 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Guts", "false"],
          ["Sheer Force", "false"],
          ["Iron Fist", "true"]
        ],
        "gender": "75:25"
      },
      "image": {
        "sprite": "src/assets/sprites/534.png",
        "thumbnail": "src/assets/thumbnails/534.png",
        "hires": "src/assets/hires/534.png"
      }
    },
    {
      "id": 535,
      "name": {
        "english": "Tympole",
        "japanese": "オタマロ",
        "chinese": "圆蝌蚪",
        "french": "Tritonde"
      },
      "type": ["Water"],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 40,
        "Sp. Attack": 50,
        "Sp. Defense": 40,
        "Speed": 64
      },
      "species": "Tadpole Pokémon",
      "description": "By vibrating its cheeks, it emits sound waves imperceptible to humans. It uses the rhythm of these sounds to talk.",
      "evolution": { "next": [["536", "Level 25"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "4.5 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Swift Swim", "false"],
          ["Hydration", "false"],
          ["Water Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/535.png",
        "thumbnail": "src/assets/thumbnails/535.png",
        "hires": "src/assets/hires/535.png"
      }
    },
    {
      "id": 536,
      "name": {
        "english": "Palpitoad",
        "japanese": "ガマガル",
        "chinese": "蓝蟾蜍",
        "french": "Batracné"
      },
      "type": ["Water", "Ground"],
      "base": {
        "HP": 75,
        "Attack": 65,
        "Defense": 55,
        "Sp. Attack": 65,
        "Sp. Defense": 55,
        "Speed": 69
      },
      "species": "Vibration Pokémon",
      "description": "It lives in the water and on land. It uses its long, sticky tongue to immobilize its opponents.",
      "evolution": { "prev": ["535", "Level 25"], "next": [["537", "Level 36"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "17 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Swift Swim", "false"],
          ["Hydration", "false"],
          ["Water Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/536.png",
        "thumbnail": "src/assets/thumbnails/536.png",
        "hires": "src/assets/hires/536.png"
      }
    },
    {
      "id": 537,
      "name": {
        "english": "Seismitoad",
        "japanese": "ガマゲロゲ",
        "chinese": "蟾蜍王",
        "french": "Crapustule"
      },
      "type": ["Water", "Ground"],
      "base": {
        "HP": 105,
        "Attack": 95,
        "Defense": 75,
        "Sp. Attack": 85,
        "Sp. Defense": 75,
        "Speed": 74
      },
      "species": "Vibration Pokémon",
      "description": "They shoot paralyzing liquid from their head bumps. They use vibration to hurt their opponents.",
      "evolution": { "prev": ["536", "Level 36"] },
      "profile": {
        "height": "1.5 m",
        "weight": "62 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Swift Swim", "false"],
          ["Poison Touch", "false"],
          ["Water Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/537.png",
        "thumbnail": "src/assets/thumbnails/537.png",
        "hires": "src/assets/hires/537.png"
      }
    },
    {
      "id": 538,
      "name": {
        "english": "Throh",
        "japanese": "ナゲキ",
        "chinese": "投摔鬼",
        "french": "Judokrak"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 120,
        "Attack": 100,
        "Defense": 85,
        "Sp. Attack": 30,
        "Sp. Defense": 85,
        "Speed": 45
      },
      "species": "Judo Pokémon",
      "description": "When it encounters a foe bigger than itself, it wants to throw it. It changes belts as it gets stronger.",
      "evolution": {},
      "profile": {
        "height": "1.3 m",
        "weight": "55.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Guts", "false"],
          ["Inner Focus", "false"],
          ["Mold Breaker", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/538.png",
        "thumbnail": "src/assets/thumbnails/538.png",
        "hires": "src/assets/hires/538.png"
      }
    },
    {
      "id": 539,
      "name": {
        "english": "Sawk",
        "japanese": "ダゲキ",
        "chinese": "打击鬼",
        "french": "Karaclée"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 75,
        "Attack": 125,
        "Defense": 75,
        "Sp. Attack": 30,
        "Sp. Defense": 75,
        "Speed": 85
      },
      "species": "Karate Pokémon",
      "description": "Tying their belts gets them pumped and makes their punches more destructive. Disturbing their training angers them.",
      "evolution": {},
      "profile": {
        "height": "1.4 m",
        "weight": "51 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Sturdy", "false"],
          ["Inner Focus", "false"],
          ["Mold Breaker", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/539.png",
        "thumbnail": "src/assets/thumbnails/539.png",
        "hires": "src/assets/hires/539.png"
      }
    },
    {
      "id": 540,
      "name": {
        "english": "Sewaddle",
        "japanese": "クルミル",
        "chinese": "虫宝包",
        "french": "Larveyette"
      },
      "type": ["Bug", "Grass"],
      "base": {
        "HP": 45,
        "Attack": 53,
        "Defense": 70,
        "Sp. Attack": 40,
        "Sp. Defense": 60,
        "Speed": 42
      },
      "species": "Sewing Pokémon",
      "description": "Since this Pokémon makes its own clothes out of leaves, it is a popular mascot for fashion designers.",
      "evolution": { "next": [["541", "Level 20"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "2.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Chlorophyll", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/540.png",
        "thumbnail": "src/assets/thumbnails/540.png",
        "hires": "src/assets/hires/540.png"
      }
    },
    {
      "id": 541,
      "name": {
        "english": "Swadloon",
        "japanese": "クルマユ",
        "chinese": "宝包茧",
        "french": "Couverdure"
      },
      "type": ["Bug", "Grass"],
      "base": {
        "HP": 55,
        "Attack": 63,
        "Defense": 90,
        "Sp. Attack": 50,
        "Sp. Defense": 80,
        "Speed": 42
      },
      "species": "Leaf-Wrapped Pokémon",
      "description": "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests.",
      "evolution": {
        "prev": ["540", "Level 20"],
        "next": [["542", "high Friendship"]]
      },
      "profile": {
        "height": "0.5 m",
        "weight": "7.3 kg",
        "egg": ["Bug"],
        "ability": [
          ["Leaf Guard", "false"],
          ["Chlorophyll", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/541.png",
        "thumbnail": "src/assets/thumbnails/541.png",
        "hires": "src/assets/hires/541.png"
      }
    },
    {
      "id": 542,
      "name": {
        "english": "Leavanny",
        "japanese": "ハハコモリ",
        "chinese": "保姆虫",
        "french": "Manternel"
      },
      "type": ["Bug", "Grass"],
      "base": {
        "HP": 75,
        "Attack": 103,
        "Defense": 80,
        "Sp. Attack": 70,
        "Sp. Defense": 80,
        "Speed": 92
      },
      "species": "Nurturing Pokémon",
      "description": "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle.",
      "evolution": { "prev": ["541", "high Friendship"] },
      "profile": {
        "height": "1.2 m",
        "weight": "20.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Chlorophyll", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/542.png",
        "thumbnail": "src/assets/thumbnails/542.png",
        "hires": "src/assets/hires/542.png"
      }
    },
    {
      "id": 543,
      "name": {
        "english": "Venipede",
        "japanese": "フシデ",
        "chinese": "百足蜈蚣",
        "french": "Venipatte"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 30,
        "Attack": 45,
        "Defense": 59,
        "Sp. Attack": 30,
        "Sp. Defense": 39,
        "Speed": 57
      },
      "species": "Centipede Pokémon",
      "description": "Its bite injects a potent poison, enough to paralyze large bird Pokémon that try to prey on it.",
      "evolution": { "next": [["544", "Level 22"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "5.3 kg",
        "egg": ["Bug"],
        "ability": [
          ["Poison Point", "false"],
          ["Swarm", "false"],
          ["Speed Boost", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/543.png",
        "thumbnail": "src/assets/thumbnails/543.png",
        "hires": "src/assets/hires/543.png"
      }
    },
    {
      "id": 544,
      "name": {
        "english": "Whirlipede",
        "japanese": "ホイーガ",
        "chinese": "车轮球",
        "french": "Scobolide"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 40,
        "Attack": 55,
        "Defense": 99,
        "Sp. Attack": 40,
        "Sp. Defense": 79,
        "Speed": 47
      },
      "species": "Curlipede Pokémon",
      "description": "It is usually motionless, but when attacked, it rotates at high speed and then crashes into its opponent.",
      "evolution": { "prev": ["543", "Level 22"], "next": [["545", "Level 30"]] },
      "profile": {
        "height": "1.2 m",
        "weight": "58.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Poison Point", "false"],
          ["Swarm", "false"],
          ["Speed Boost", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/544.png",
        "thumbnail": "src/assets/thumbnails/544.png",
        "hires": "src/assets/hires/544.png"
      }
    },
    {
      "id": 545,
      "name": {
        "english": "Scolipede",
        "japanese": "ペンドラー",
        "chinese": "蜈蚣王",
        "french": "Brutapode"
      },
      "type": ["Bug", "Poison"],
      "base": {
        "HP": 60,
        "Attack": 100,
        "Defense": 89,
        "Sp. Attack": 55,
        "Sp. Defense": 69,
        "Speed": 112
      },
      "species": "Megapede Pokémon",
      "description": "With quick movements, it chases down its foes, attacking relentlessly with its horns until it prevails.",
      "evolution": { "prev": ["544", "Level 30"] },
      "profile": {
        "height": "2.5 m",
        "weight": "200.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Poison Point", "false"],
          ["Swarm", "false"],
          ["Speed Boost", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/545.png",
        "thumbnail": "src/assets/thumbnails/545.png",
        "hires": "src/assets/hires/545.png"
      }
    },
    {
      "id": 546,
      "name": {
        "english": "Cottonee",
        "japanese": "モンメン",
        "chinese": "木棉球",
        "french": "Doudouvet"
      },
      "type": ["Grass", "Fairy"],
      "base": {
        "HP": 40,
        "Attack": 27,
        "Defense": 60,
        "Sp. Attack": 37,
        "Sp. Defense": 50,
        "Speed": 66
      },
      "species": "Cotton Puff Pokémon",
      "description": "When attacked, it expels cotton from its body to create a diversion. The cotton it loses grows back in quickly.",
      "evolution": { "next": [["547", "use Sun Stone"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "0.6 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [
          ["Prankster", "false"],
          ["Infiltrator", "false"],
          ["Chlorophyll", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/546.png",
        "thumbnail": "src/assets/thumbnails/546.png",
        "hires": "src/assets/hires/546.png"
      }
    },
    {
      "id": 547,
      "name": {
        "english": "Whimsicott",
        "japanese": "エルフーン",
        "chinese": "风妖精",
        "french": "Farfaduvet"
      },
      "type": ["Grass", "Fairy"],
      "base": {
        "HP": 60,
        "Attack": 67,
        "Defense": 85,
        "Sp. Attack": 77,
        "Sp. Defense": 75,
        "Speed": 116
      },
      "species": "Windveiled Pokémon",
      "description": "Whimsicott doesn’t live in a fixed location. It floats around on whirling winds, appearing all over the place to perform its mischief.",
      "evolution": { "prev": ["546", "use Sun Stone"] },
      "profile": {
        "height": "0.7 m",
        "weight": "6.6 kg",
        "egg": ["Fairy", "Grass"],
        "ability": [
          ["Prankster", "false"],
          ["Infiltrator", "false"],
          ["Chlorophyll", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/547.png",
        "thumbnail": "src/assets/thumbnails/547.png",
        "hires": "src/assets/hires/547.png"
      }
    },
    {
      "id": 548,
      "name": {
        "english": "Petilil",
        "japanese": "チュリネ",
        "chinese": "百合根娃娃",
        "french": "Chlorobule"
      },
      "type": ["Grass"],
      "base": {
        "HP": 45,
        "Attack": 35,
        "Defense": 50,
        "Sp. Attack": 70,
        "Sp. Defense": 50,
        "Speed": 30
      },
      "species": "Bulb Pokémon",
      "description": "They prefer clean water and soil. When the environment they live in turns bad, the whole bunch will up and move to a new area.",
      "evolution": { "next": [["549", "use Sun Stone"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "6.6 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Own Tempo", "false"],
          ["Leaf Guard", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/548.png",
        "thumbnail": "src/assets/thumbnails/548.png",
        "hires": "src/assets/hires/548.png"
      }
    },
    {
      "id": 549,
      "name": {
        "english": "Lilligant",
        "japanese": "ドレディア",
        "chinese": "裙儿小姐",
        "french": "Fragilady"
      },
      "type": ["Grass"],
      "base": {
        "HP": 70,
        "Attack": 60,
        "Defense": 75,
        "Sp. Attack": 110,
        "Sp. Defense": 75,
        "Speed": 90
      },
      "species": "Flowering Pokémon",
      "description": "It’s well liked by other Pokémon because of its beauty. The flower on its head needs constant care, or it will soon wither and rot.",
      "evolution": { "prev": ["548", "use Sun Stone"] },
      "profile": {
        "height": "1.1 m",
        "weight": "16.3 kg",
        "egg": ["Grass"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Own Tempo", "false"],
          ["Leaf Guard", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/549.png",
        "thumbnail": "src/assets/thumbnails/549.png",
        "hires": "src/assets/hires/549.png"
      }
    },
    {
      "id": 550,
      "name": {
        "english": "Basculin",
        "japanese": "バスラオ",
        "chinese": "野蛮鲈鱼",
        "french": "Bargantua"
      },
      "type": ["Water"],
      "base": {
        "HP": 70,
        "Attack": 92,
        "Defense": 65,
        "Sp. Attack": 80,
        "Sp. Defense": 55,
        "Speed": 98
      },
      "species": "Hostile Pokémon",
      "description": "When a school of Basculin appears in a lake, everything else disappears, except for Corphish and Crawdaunt. That’s how violent Basculin are.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "18 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Reckless", "false"],
          ["Adaptability", "false"],
          ["Mold Breaker", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/550.png",
        "thumbnail": "src/assets/thumbnails/550.png",
        "hires": "src/assets/hires/550.png"
      }
    },
    {
      "id": 551,
      "name": {
        "english": "Sandile",
        "japanese": "メグロコ",
        "chinese": "黑眼鳄",
        "french": "Mascaïman"
      },
      "type": ["Ground", "Dark"],
      "base": {
        "HP": 50,
        "Attack": 72,
        "Defense": 35,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 65
      },
      "species": "Desert Croc Pokémon",
      "description": "Sandile’s still not good at hunting, so it mostly eats things that have collapsed in the desert. It’s called “the cleaner of the desert.”",
      "evolution": { "next": [["552", "Level 29"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "15.2 kg",
        "egg": ["Field"],
        "ability": [
          ["Intimidate", "false"],
          ["Moxie", "false"],
          ["Anger Point", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/551.png",
        "thumbnail": "src/assets/thumbnails/551.png",
        "hires": "src/assets/hires/551.png"
      }
    },
    {
      "id": 552,
      "name": {
        "english": "Krokorok",
        "japanese": "ワルビル",
        "chinese": "混混鳄",
        "french": "Escroco"
      },
      "type": ["Ground", "Dark"],
      "base": {
        "HP": 60,
        "Attack": 82,
        "Defense": 45,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 74
      },
      "species": "Desert Croc Pokémon",
      "description": "It buries some of its prey in the sand to use as emergency meals when its hunts are unsuccessful.",
      "evolution": { "prev": ["551", "Level 29"], "next": [["553", "Level 40"]] },
      "profile": {
        "height": "1 m",
        "weight": "33.4 kg",
        "egg": ["Field"],
        "ability": [
          ["Intimidate", "false"],
          ["Moxie", "false"],
          ["Anger Point", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/552.png",
        "thumbnail": "src/assets/thumbnails/552.png",
        "hires": "src/assets/hires/552.png"
      }
    },
    {
      "id": 553,
      "name": {
        "english": "Krookodile",
        "japanese": "ワルビアル",
        "chinese": "流氓鳄",
        "french": "Crocorible"
      },
      "type": ["Ground", "Dark"],
      "base": {
        "HP": 95,
        "Attack": 117,
        "Defense": 80,
        "Sp. Attack": 65,
        "Sp. Defense": 70,
        "Speed": 92
      },
      "species": "Intimidation Pokémon",
      "description": "It conceals itself in sandstorms that Flygon whip up and waits patiently for prey to appear.",
      "evolution": { "prev": ["552", "Level 40"] },
      "profile": {
        "height": "1.5 m",
        "weight": "96.3 kg",
        "egg": ["Field"],
        "ability": [
          ["Intimidate", "false"],
          ["Moxie", "false"],
          ["Anger Point", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/553.png",
        "thumbnail": "src/assets/thumbnails/553.png",
        "hires": "src/assets/hires/553.png"
      }
    },
    {
      "id": 554,
      "name": {
        "english": "Darumaka",
        "japanese": "ダルマッカ",
        "chinese": "火红不倒翁",
        "french": "Darumarond"
      },
      "type": ["Fire"],
      "base": {
        "HP": 70,
        "Attack": 90,
        "Defense": 45,
        "Sp. Attack": 15,
        "Sp. Defense": 45,
        "Speed": 50
      },
      "species": "Zen Charm Pokémon",
      "description": "When it sleeps, it pulls its limbs into its body and its internal fire goes down to 1,100 degrees Fahrenheit.",
      "evolution": { "next": [["555", "use Ice Stone"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "37.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Hustle", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/554.png",
        "thumbnail": "src/assets/thumbnails/554.png",
        "hires": "src/assets/hires/554.png"
      }
    },
    {
      "id": 555,
      "name": {
        "english": "Darmanitan",
        "japanese": "ヒヒダルマ",
        "chinese": "达摩狒狒",
        "french": "Darumacho"
      },
      "type": ["Fire"],
      "base": {
        "HP": 105,
        "Attack": 140,
        "Defense": 55,
        "Sp. Attack": 30,
        "Sp. Defense": 55,
        "Speed": 95
      },
      "species": "Blazing Pokémon",
      "description": "Its internal fire burns at 2,500 degrees Fahrenheit, making enough power that it can destroy a dump truck with one punch.",
      "evolution": { "prev": ["554", "use Ice Stone"] },
      "profile": {
        "height": "1.3 m",
        "weight": "92.9 kg",
        "egg": ["Field"],
        "ability": [
          ["Sheer Force", "false"],
          ["Zen Mode", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/555.png",
        "thumbnail": "src/assets/thumbnails/555.png",
        "hires": "src/assets/hires/555.png"
      }
    },
    {
      "id": 556,
      "name": {
        "english": "Maractus",
        "japanese": "マラカッチ",
        "chinese": "沙铃仙人掌",
        "french": "Maracachi"
      },
      "type": ["Grass"],
      "base": {
        "HP": 75,
        "Attack": 86,
        "Defense": 67,
        "Sp. Attack": 106,
        "Sp. Defense": 67,
        "Speed": 60
      },
      "species": "Cactus Pokémon",
      "description": "Arid regions are their habitat. They move rhythmically, making a sound similar to maracas.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "28 kg",
        "egg": ["Grass"],
        "ability": [
          ["Water Absorb", "false"],
          ["Chlorophyll", "false"],
          ["Storm Drain", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/556.png",
        "thumbnail": "src/assets/thumbnails/556.png",
        "hires": "src/assets/hires/556.png"
      }
    },
    {
      "id": 557,
      "name": {
        "english": "Dwebble",
        "japanese": "イシズマイ",
        "chinese": "石居蟹",
        "french": "Crabicoque"
      },
      "type": ["Bug", "Rock"],
      "base": {
        "HP": 50,
        "Attack": 65,
        "Defense": 85,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 55
      },
      "species": "Rock Inn Pokémon",
      "description": "When it finds a stone of a suitable size, it secretes a liquid from its mouth to open up a hole to crawl into.",
      "evolution": { "next": [["558", "Level 34"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "14.5 kg",
        "egg": ["Bug", "Mineral"],
        "ability": [
          ["Sturdy", "false"],
          ["Shell Armor", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/557.png",
        "thumbnail": "src/assets/thumbnails/557.png",
        "hires": "src/assets/hires/557.png"
      }
    },
    {
      "id": 558,
      "name": {
        "english": "Crustle",
        "japanese": "イワパレス",
        "chinese": "岩殿居蟹",
        "french": "Crabaraque"
      },
      "type": ["Bug", "Rock"],
      "base": {
        "HP": 70,
        "Attack": 105,
        "Defense": 125,
        "Sp. Attack": 65,
        "Sp. Defense": 75,
        "Speed": 45
      },
      "species": "Stone Home Pokémon",
      "description": "Competing for territory, Crustle fight viciously. The one whose boulder is broken is the loser of the battle.",
      "evolution": { "prev": ["557", "Level 34"] },
      "profile": {
        "height": "1.4 m",
        "weight": "200 kg",
        "egg": ["Bug", "Mineral"],
        "ability": [
          ["Sturdy", "false"],
          ["Shell Armor", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/558.png",
        "thumbnail": "src/assets/thumbnails/558.png",
        "hires": "src/assets/hires/558.png"
      }
    },
    {
      "id": 559,
      "name": {
        "english": "Scraggy",
        "japanese": "ズルッグ",
        "chinese": "滑滑小子",
        "french": "Baggiguane"
      },
      "type": ["Dark", "Fighting"],
      "base": {
        "HP": 50,
        "Attack": 75,
        "Defense": 70,
        "Sp. Attack": 35,
        "Sp. Defense": 70,
        "Speed": 48
      },
      "species": "Shedding Pokémon",
      "description": "It stretches its saggy skin up to its neck to protect itself. The saggier their skin, the more respect they garner.",
      "evolution": { "next": [["560", "Level 39"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "11.8 kg",
        "egg": ["Field", "Dragon"],
        "ability": [
          ["Shed Skin", "false"],
          ["Moxie", "false"],
          ["Intimidate", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/559.png",
        "thumbnail": "src/assets/thumbnails/559.png",
        "hires": "src/assets/hires/559.png"
      }
    },
    {
      "id": 560,
      "name": {
        "english": "Scrafty",
        "japanese": "ズルズキン",
        "chinese": "头巾混混",
        "french": "Baggaïd"
      },
      "type": ["Dark", "Fighting"],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 115,
        "Sp. Attack": 45,
        "Sp. Defense": 115,
        "Speed": 58
      },
      "species": "Hoodlum Pokémon",
      "description": "It taunts its opponents by spitting. It has a certain territory that it never leaves its whole life long.",
      "evolution": { "prev": ["559", "Level 39"] },
      "profile": {
        "height": "1.1 m",
        "weight": "30 kg",
        "egg": ["Field", "Dragon"],
        "ability": [
          ["Shed Skin", "false"],
          ["Moxie", "false"],
          ["Intimidate", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/560.png",
        "thumbnail": "src/assets/thumbnails/560.png",
        "hires": "src/assets/hires/560.png"
      }
    },
    {
      "id": 561,
      "name": {
        "english": "Sigilyph",
        "japanese": "シンボラー",
        "chinese": "象征鸟",
        "french": "Cryptéro"
      },
      "type": ["Psychic", "Flying"],
      "base": {
        "HP": 72,
        "Attack": 58,
        "Defense": 80,
        "Sp. Attack": 103,
        "Sp. Defense": 80,
        "Speed": 97
      },
      "species": "Avianoid Pokémon",
      "description": "The guardians of an ancient city, they always fly the same route while keeping watch for invaders.",
      "evolution": {},
      "profile": {
        "height": "1.4 m",
        "weight": "14 kg",
        "egg": ["Flying"],
        "ability": [
          ["Wonder Skin", "false"],
          ["Magic Guard", "false"],
          ["Tinted Lens", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/561.png",
        "thumbnail": "src/assets/thumbnails/561.png",
        "hires": "src/assets/hires/561.png"
      }
    },
    {
      "id": 562,
      "name": {
        "english": "Yamask",
        "japanese": "デスマス",
        "chinese": "哭哭面具",
        "french": "Tutafeh"
      },
      "type": ["Ghost"],
      "base": {
        "HP": 38,
        "Attack": 30,
        "Defense": 85,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 30
      },
      "species": "Spirit Pokémon",
      "description": "Each of them carries a mask that used to be its face when it was human. Sometimes they look at it and cry.",
      "evolution": { "next": [["867", "near Dusty Bowl"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "1.5 kg",
        "egg": ["Mineral", "Amorphous"],
        "ability": [["Mummy", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/562.png",
        "thumbnail": "src/assets/thumbnails/562.png",
        "hires": "src/assets/hires/562.png"
      }
    },
    {
      "id": 563,
      "name": {
        "english": "Cofagrigus",
        "japanese": "デスカーン",
        "chinese": "死神棺",
        "french": "Tutankafer"
      },
      "type": ["Ghost"],
      "base": {
        "HP": 58,
        "Attack": 50,
        "Defense": 145,
        "Sp. Attack": 95,
        "Sp. Defense": 105,
        "Speed": 30
      },
      "species": "Coffin Pokémon",
      "description": "Grave robbers who mistake them for real coffins and get too close end up trapped inside their bodies.",
      "evolution": { "prev": ["562", "Level 34"] },
      "profile": {
        "height": "1.7 m",
        "weight": "76.5 kg",
        "egg": ["Mineral", "Amorphous"],
        "ability": [["Mummy", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/563.png",
        "thumbnail": "src/assets/thumbnails/563.png",
        "hires": "src/assets/hires/563.png"
      }
    },
    {
      "id": 564,
      "name": {
        "english": "Tirtouga",
        "japanese": "プロトーガ",
        "chinese": "原盖海龟",
        "french": "Carapagos"
      },
      "type": ["Water", "Rock"],
      "base": {
        "HP": 54,
        "Attack": 78,
        "Defense": 103,
        "Sp. Attack": 53,
        "Sp. Defense": 45,
        "Speed": 22
      },
      "species": "Prototurtle Pokémon",
      "description": "Its hunting grounds encompassed a broad area, from the land to more than half a mile deep in the ocean.",
      "evolution": { "next": [["565", "Level 37"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "16.5 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [
          ["Solid Rock", "false"],
          ["Sturdy", "false"],
          ["Swift Swim", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/564.png",
        "thumbnail": "src/assets/thumbnails/564.png",
        "hires": "src/assets/hires/564.png"
      }
    },
    {
      "id": 565,
      "name": {
        "english": "Carracosta",
        "japanese": "アバゴーラ",
        "chinese": "肋骨海龟",
        "french": "Mégapagos"
      },
      "type": ["Water", "Rock"],
      "base": {
        "HP": 74,
        "Attack": 108,
        "Defense": 133,
        "Sp. Attack": 83,
        "Sp. Defense": 65,
        "Speed": 32
      },
      "species": "Prototurtle Pokémon",
      "description": "Carracosta eats every last bit of the prey it catches, even the shells and bones, to further strengthen its sturdy shell.",
      "evolution": { "prev": ["564", "Level 37"] },
      "profile": {
        "height": "1.2 m",
        "weight": "81 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [
          ["Solid Rock", "false"],
          ["Sturdy", "false"],
          ["Swift Swim", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/565.png",
        "thumbnail": "src/assets/thumbnails/565.png",
        "hires": "src/assets/hires/565.png"
      }
    },
    {
      "id": 566,
      "name": {
        "english": "Archen",
        "japanese": "アーケン",
        "chinese": "始祖小鸟",
        "french": "Arkéapti"
      },
      "type": ["Rock", "Flying"],
      "base": {
        "HP": 55,
        "Attack": 112,
        "Defense": 45,
        "Sp. Attack": 74,
        "Sp. Defense": 45,
        "Speed": 70
      },
      "species": "First Bird Pokémon",
      "description": "Restored from a fossil, this ancient bird Pokémon has wings but can’t yet fly.",
      "evolution": { "next": [["567", "Level 37"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "9.5 kg",
        "egg": ["Flying", "Water 3"],
        "ability": [["Defeatist", "false"]],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/566.png",
        "thumbnail": "src/assets/thumbnails/566.png",
        "hires": "src/assets/hires/566.png"
      }
    },
    {
      "id": 567,
      "name": {
        "english": "Archeops",
        "japanese": "アーケオス",
        "chinese": "始祖大鸟",
        "french": "Aéroptéryx"
      },
      "type": ["Rock", "Flying"],
      "base": {
        "HP": 75,
        "Attack": 140,
        "Defense": 65,
        "Sp. Attack": 112,
        "Sp. Defense": 65,
        "Speed": 110
      },
      "species": "First Bird Pokémon",
      "description": "Said to be an ancestor of bird Pokémon, the muscles it uses to flap its wings are still weak, so it needs a long runway in order to take off.",
      "evolution": { "prev": ["566", "Level 37"] },
      "profile": {
        "height": "1.4 m",
        "weight": "32 kg",
        "egg": ["Flying", "Water 3"],
        "ability": [["Defeatist", "false"]],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/567.png",
        "thumbnail": "src/assets/thumbnails/567.png",
        "hires": "src/assets/hires/567.png"
      }
    },
    {
      "id": 568,
      "name": {
        "english": "Trubbish",
        "japanese": "ヤブクロン",
        "chinese": "破破袋",
        "french": "Miamiasme"
      },
      "type": ["Poison"],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 62,
        "Sp. Attack": 40,
        "Sp. Defense": 62,
        "Speed": 65
      },
      "species": "Trash Bag Pokémon",
      "description": "If a young Pokémon or child breathes in the toxic gas that Trubbish belches out, it could be a life-threatening situation.",
      "evolution": { "next": [["569", "Level 36"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "31 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Stench", "false"],
          ["Sticky Hold", "false"],
          ["Aftermath", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/568.png",
        "thumbnail": "src/assets/thumbnails/568.png",
        "hires": "src/assets/hires/568.png"
      }
    },
    {
      "id": 569,
      "name": {
        "english": "Garbodor",
        "japanese": "ダストダス",
        "chinese": "灰尘山",
        "french": "Miasmax"
      },
      "type": ["Poison"],
      "base": {
        "HP": 80,
        "Attack": 95,
        "Defense": 82,
        "Sp. Attack": 60,
        "Sp. Defense": 82,
        "Speed": 75
      },
      "species": "Trash Heap Pokémon",
      "description": "Some say the reason Garbodor in Alola are a little stronger than their counterparts elsewhere is the presence of Muk, their natural enemy.",
      "evolution": { "prev": ["568", "Level 36"] },
      "profile": {
        "height": "1.9 m",
        "weight": "107.3 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Stench", "false"],
          ["Weak Armor", "false"],
          ["Aftermath", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/569.png",
        "thumbnail": "src/assets/thumbnails/569.png",
        "hires": "src/assets/hires/569.png"
      }
    },
    {
      "id": 570,
      "name": {
        "english": "Zorua",
        "japanese": "ゾロア",
        "chinese": "索罗亚",
        "french": "Zorua"
      },
      "type": ["Dark"],
      "base": {
        "HP": 40,
        "Attack": 65,
        "Defense": 40,
        "Sp. Attack": 80,
        "Sp. Defense": 40,
        "Speed": 65
      },
      "species": "Tricky Fox Pokémon",
      "description": "If a normally talkative child suddenly stops talking, it may have been replaced by Zorua.",
      "evolution": { "next": [["571", "Level 30"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "12.5 kg",
        "egg": ["Field"],
        "ability": [["Illusion", "false"]],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/570.png",
        "thumbnail": "src/assets/thumbnails/570.png",
        "hires": "src/assets/hires/570.png"
      }
    },
    {
      "id": 571,
      "name": {
        "english": "Zoroark",
        "japanese": "ゾロアーク",
        "chinese": "索罗亚克",
        "french": "Zoroark"
      },
      "type": ["Dark"],
      "base": {
        "HP": 60,
        "Attack": 105,
        "Defense": 60,
        "Sp. Attack": 120,
        "Sp. Defense": 60,
        "Speed": 105
      },
      "species": "Illusion Fox Pokémon",
      "description": "If it thinks humans are going to discover its den, Zoroark shows them visions that make them wander around in the woods.",
      "evolution": { "prev": ["570", "Level 30"] },
      "profile": {
        "height": "1.6 m",
        "weight": "81.1 kg",
        "egg": ["Field"],
        "ability": [["Illusion", "false"]],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/571.png",
        "thumbnail": "src/assets/thumbnails/571.png",
        "hires": "src/assets/hires/571.png"
      }
    },
    {
      "id": 572,
      "name": {
        "english": "Minccino",
        "japanese": "チラーミィ",
        "chinese": "泡沫栗鼠",
        "french": "Chinchidou"
      },
      "type": ["Normal"],
      "base": {
        "HP": 55,
        "Attack": 50,
        "Defense": 40,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 75
      },
      "species": "Chinchilla Pokémon",
      "description": "When its tail has gotten dirty from self-cleaning or from cleaning its nest, Minccino spends a whole day washing its tail in clean spring water.",
      "evolution": { "next": [["573", "use Shiny Stone"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "5.8 kg",
        "egg": ["Field"],
        "ability": [
          ["Cute Charm", "false"],
          ["Technician", "false"],
          ["Skill Link", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/572.png",
        "thumbnail": "src/assets/thumbnails/572.png",
        "hires": "src/assets/hires/572.png"
      }
    },
    {
      "id": 573,
      "name": {
        "english": "Cinccino",
        "japanese": "チラチーノ",
        "chinese": "奇诺栗鼠",
        "french": "Pashmilla"
      },
      "type": ["Normal"],
      "base": {
        "HP": 75,
        "Attack": 95,
        "Defense": 60,
        "Sp. Attack": 65,
        "Sp. Defense": 60,
        "Speed": 115
      },
      "species": "Scarf Pokémon",
      "description": "The oil that seeps from its body is really smooth. For people troubled by bad skin, this oil is an effective treatment.",
      "evolution": { "prev": ["572", "use Shiny Stone"] },
      "profile": {
        "height": "0.5 m",
        "weight": "7.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Cute Charm", "false"],
          ["Technician", "false"],
          ["Skill Link", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/573.png",
        "thumbnail": "src/assets/thumbnails/573.png",
        "hires": "src/assets/hires/573.png"
      }
    },
    {
      "id": 574,
      "name": {
        "english": "Gothita",
        "japanese": "ゴチム",
        "chinese": "哥德宝宝",
        "french": "Scrutella"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 50,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 45
      },
      "species": "Fixation Pokémon",
      "description": "They intently observe both Trainers and Pokémon. Apparently, they are looking at something that only Gothita can see.",
      "evolution": { "next": [["575", "Level 32"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "5.8 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Frisk", "false"],
          ["Competitive", "false"],
          ["Shadow Tag", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/574.png",
        "thumbnail": "src/assets/thumbnails/574.png",
        "hires": "src/assets/hires/574.png"
      }
    },
    {
      "id": 575,
      "name": {
        "english": "Gothorita",
        "japanese": "ゴチミル",
        "chinese": "哥德小童",
        "french": "Mesmérella"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 60,
        "Attack": 45,
        "Defense": 70,
        "Sp. Attack": 75,
        "Sp. Defense": 85,
        "Speed": 55
      },
      "species": "Manipulate Pokémon",
      "description": "According to many old tales, it creates friends for itself by controlling sleeping children on starry nights.",
      "evolution": { "prev": ["574", "Level 32"], "next": [["576", "Level 41"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "18 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Frisk", "false"],
          ["Competitive", "false"],
          ["Shadow Tag", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/575.png",
        "thumbnail": "src/assets/thumbnails/575.png",
        "hires": "src/assets/hires/575.png"
      }
    },
    {
      "id": 576,
      "name": {
        "english": "Gothitelle",
        "japanese": "ゴチルゼル",
        "chinese": "哥德小姐",
        "french": "Sidérella"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 70,
        "Attack": 55,
        "Defense": 95,
        "Sp. Attack": 95,
        "Sp. Defense": 110,
        "Speed": 65
      },
      "species": "Astral Body Pokémon",
      "description": "They can predict the future from the placement and movement of the stars. They can see Trainers’ life spans.",
      "evolution": { "prev": ["575", "Level 41"] },
      "profile": {
        "height": "1.5 m",
        "weight": "44 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Frisk", "false"],
          ["Competitive", "false"],
          ["Shadow Tag", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/576.png",
        "thumbnail": "src/assets/thumbnails/576.png",
        "hires": "src/assets/hires/576.png"
      }
    },
    {
      "id": 577,
      "name": {
        "english": "Solosis",
        "japanese": "ユニラン",
        "chinese": "单卵细胞球",
        "french": "Nucléos"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 40,
        "Sp. Attack": 105,
        "Sp. Defense": 50,
        "Speed": 20
      },
      "species": "Cell Pokémon",
      "description": "They drive away attackers by unleashing psychic power. They can use telepathy to talk with others.",
      "evolution": { "next": [["578", "Level 32"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "1 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Overcoat", "false"],
          ["Magic Guard", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/577.png",
        "thumbnail": "src/assets/thumbnails/577.png",
        "hires": "src/assets/hires/577.png"
      }
    },
    {
      "id": 578,
      "name": {
        "english": "Duosion",
        "japanese": "ダブラン",
        "chinese": "双卵细胞球",
        "french": "Méios"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 65,
        "Attack": 40,
        "Defense": 50,
        "Sp. Attack": 125,
        "Sp. Defense": 60,
        "Speed": 30
      },
      "species": "Mitosis Pokémon",
      "description": "When their two divided brains think the same thoughts, their psychic power is maximized.",
      "evolution": { "prev": ["577", "Level 32"], "next": [["579", "Level 41"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "8 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Overcoat", "false"],
          ["Magic Guard", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/578.png",
        "thumbnail": "src/assets/thumbnails/578.png",
        "hires": "src/assets/hires/578.png"
      }
    },
    {
      "id": 579,
      "name": {
        "english": "Reuniclus",
        "japanese": "ランクルス",
        "chinese": "人造细胞卵",
        "french": "Symbios"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 110,
        "Attack": 65,
        "Defense": 75,
        "Sp. Attack": 125,
        "Sp. Defense": 85,
        "Speed": 30
      },
      "species": "Multiplying Pokémon",
      "description": "When Reuniclus shake hands, a network forms between their brains, increasing their psychic power.",
      "evolution": { "prev": ["578", "Level 41"] },
      "profile": {
        "height": "1 m",
        "weight": "20.1 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Overcoat", "false"],
          ["Magic Guard", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/579.png",
        "thumbnail": "src/assets/thumbnails/579.png",
        "hires": "src/assets/hires/579.png"
      }
    },
    {
      "id": 580,
      "name": {
        "english": "Ducklett",
        "japanese": "コアルヒー",
        "chinese": "鸭宝宝",
        "french": "Couaneton"
      },
      "type": ["Water", "Flying"],
      "base": {
        "HP": 62,
        "Attack": 44,
        "Defense": 50,
        "Sp. Attack": 44,
        "Sp. Defense": 50,
        "Speed": 55
      },
      "species": "Water Bird Pokémon",
      "description": "They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater.",
      "evolution": { "next": [["581", "Level 35"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "5.5 kg",
        "egg": ["Water 1", "Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Big Pecks", "false"],
          ["Hydration", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/580.png",
        "thumbnail": "src/assets/thumbnails/580.png",
        "hires": "src/assets/hires/580.png"
      }
    },
    {
      "id": 581,
      "name": {
        "english": "Swanna",
        "japanese": "スワンナ",
        "chinese": "舞天鹅",
        "french": "Lakmécygne"
      },
      "type": ["Water", "Flying"],
      "base": {
        "HP": 75,
        "Attack": 87,
        "Defense": 63,
        "Sp. Attack": 87,
        "Sp. Defense": 63,
        "Speed": 98
      },
      "species": "White Bird Pokémon",
      "description": "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock.",
      "evolution": { "prev": ["580", "Level 35"] },
      "profile": {
        "height": "1.3 m",
        "weight": "24.2 kg",
        "egg": ["Water 1", "Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Big Pecks", "false"],
          ["Hydration", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/581.png",
        "thumbnail": "src/assets/thumbnails/581.png",
        "hires": "src/assets/hires/581.png"
      }
    },
    {
      "id": 582,
      "name": {
        "english": "Vanillite",
        "japanese": "バニプッチ",
        "chinese": "迷你冰",
        "french": "Sorbébé"
      },
      "type": ["Ice"],
      "base": {
        "HP": 36,
        "Attack": 50,
        "Defense": 50,
        "Sp. Attack": 65,
        "Sp. Defense": 60,
        "Speed": 44
      },
      "species": "Fresh Snow Pokémon",
      "description": "When the morning sun hit an icicle, it wished not to melt, and thus Vanillite was born. At night, it buries itself in snow to sleep.",
      "evolution": { "next": [["583", "Level 35"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "5.7 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Ice Body", "false"],
          ["Snow Cloak", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/582.png",
        "thumbnail": "src/assets/thumbnails/582.png",
        "hires": "src/assets/hires/582.png"
      }
    },
    {
      "id": 583,
      "name": {
        "english": "Vanillish",
        "japanese": "バニリッチ",
        "chinese": "多多冰",
        "french": "Sorboul"
      },
      "type": ["Ice"],
      "base": {
        "HP": 51,
        "Attack": 65,
        "Defense": 65,
        "Sp. Attack": 80,
        "Sp. Defense": 75,
        "Speed": 59
      },
      "species": "Icy Snow Pokémon",
      "description": "This hearty Pokémon survived the Ice Age. It’s incredibly popular in very hot regions.",
      "evolution": { "prev": ["582", "Level 35"], "next": [["584", "Level 47"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "41 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Ice Body", "false"],
          ["Snow Cloak", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/583.png",
        "thumbnail": "src/assets/thumbnails/583.png",
        "hires": "src/assets/hires/583.png"
      }
    },
    {
      "id": 584,
      "name": {
        "english": "Vanilluxe",
        "japanese": "バイバニラ",
        "chinese": "双倍多多冰",
        "french": "Sorbouboul"
      },
      "type": ["Ice"],
      "base": {
        "HP": 71,
        "Attack": 95,
        "Defense": 85,
        "Sp. Attack": 110,
        "Sp. Defense": 95,
        "Speed": 79
      },
      "species": "Snowstorm Pokémon",
      "description": "Vanilluxe is born when two Vanillish, half-melted by the day’s light, stick to each other and freeze together in the cold return of night.",
      "evolution": { "prev": ["583", "Level 47"] },
      "profile": {
        "height": "1.3 m",
        "weight": "57.5 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Ice Body", "false"],
          ["Snow Warning", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/584.png",
        "thumbnail": "src/assets/thumbnails/584.png",
        "hires": "src/assets/hires/584.png"
      }
    },
    {
      "id": 585,
      "name": {
        "english": "Deerling",
        "japanese": "シキジカ",
        "chinese": "四季鹿",
        "french": "Vivaldaim"
      },
      "type": ["Normal", "Grass"],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 50,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 75
      },
      "species": "Season Pokémon",
      "description": "The turning of the seasons changes the color and scent of this Pokémon’s fur. People use it to mark the seasons.",
      "evolution": { "next": [["586", "Level 34"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "19.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Sap Sipper", "false"],
          ["Serene Grace", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/585.png",
        "thumbnail": "src/assets/thumbnails/585.png",
        "hires": "src/assets/hires/585.png"
      }
    },
    {
      "id": 586,
      "name": {
        "english": "Sawsbuck",
        "japanese": "メブキジカ",
        "chinese": "萌芽鹿",
        "french": "Haydaim"
      },
      "type": ["Normal", "Grass"],
      "base": {
        "HP": 80,
        "Attack": 100,
        "Defense": 70,
        "Sp. Attack": 60,
        "Sp. Defense": 70,
        "Speed": 95
      },
      "species": "Season Pokémon",
      "description": "They migrate according to the seasons, so some people call Sawsbuck the harbingers of spring.",
      "evolution": { "prev": ["585", "Level 34"] },
      "profile": {
        "height": "1.9 m",
        "weight": "92.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Chlorophyll", "false"],
          ["Sap Sipper", "false"],
          ["Serene Grace", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/586.png",
        "thumbnail": "src/assets/thumbnails/586.png",
        "hires": "src/assets/hires/586.png"
      }
    },
    {
      "id": 587,
      "name": {
        "english": "Emolga",
        "japanese": "エモンガ",
        "chinese": "电飞鼠",
        "french": "Emolga"
      },
      "type": ["Electric", "Flying"],
      "base": {
        "HP": 55,
        "Attack": 75,
        "Defense": 60,
        "Sp. Attack": 75,
        "Sp. Defense": 60,
        "Speed": 103
      },
      "species": "Sky Squirrel Pokémon",
      "description": "As it flies, it scatters electricity around, so bird Pokémon keep their distance. That’s why Emolga can keep all its food to itself.",
      "evolution": {},
      "profile": {
        "height": "0.4 m",
        "weight": "5 kg",
        "egg": ["Field"],
        "ability": [
          ["Static", "false"],
          ["Motor Drive", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/587.png",
        "thumbnail": "src/assets/thumbnails/587.png",
        "hires": "src/assets/hires/587.png"
      }
    },
    {
      "id": 588,
      "name": {
        "english": "Karrablast",
        "japanese": "カブルモ",
        "chinese": "盖盖虫",
        "french": "Carabing"
      },
      "type": ["Bug"],
      "base": {
        "HP": 50,
        "Attack": 75,
        "Defense": 45,
        "Sp. Attack": 40,
        "Sp. Defense": 45,
        "Speed": 60
      },
      "species": "Clamping Pokémon",
      "description": "For some reason they evolve when they receive electrical energy while they are attacking Shelmet.",
      "evolution": { "next": [["589", "Trade with Shelmet"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "5.9 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Shed Skin", "false"],
          ["No Guard", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/588.png",
        "thumbnail": "src/assets/thumbnails/588.png",
        "hires": "src/assets/hires/588.png"
      }
    },
    {
      "id": 589,
      "name": {
        "english": "Escavalier",
        "japanese": "シュバルゴ",
        "chinese": "骑士蜗牛",
        "french": "Lançargot"
      },
      "type": ["Bug", "Steel"],
      "base": {
        "HP": 70,
        "Attack": 135,
        "Defense": 105,
        "Sp. Attack": 60,
        "Sp. Defense": 105,
        "Speed": 20
      },
      "species": "Cavalry Pokémon",
      "description": "These Pokémon evolve by wearing the shell covering of a Shelmet. The steel armor protects their whole body.",
      "evolution": { "prev": ["588", "Trade with Shelmet"] },
      "profile": {
        "height": "1 m",
        "weight": "33 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Shell Armor", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/589.png",
        "thumbnail": "src/assets/thumbnails/589.png",
        "hires": "src/assets/hires/589.png"
      }
    },
    {
      "id": 590,
      "name": {
        "english": "Foongus",
        "japanese": "タマゲタケ",
        "chinese": "哎呀球菇",
        "french": "Trompignon"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 69,
        "Attack": 55,
        "Defense": 45,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 15
      },
      "species": "Mushroom Pokémon",
      "description": "It lures Pokémon with its pattern that looks just like a Poké Ball, then releases poison spores.",
      "evolution": { "next": [["591", "Level 39"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "1 kg",
        "egg": ["Grass"],
        "ability": [
          ["Effect Spore", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/590.png",
        "thumbnail": "src/assets/thumbnails/590.png",
        "hires": "src/assets/hires/590.png"
      }
    },
    {
      "id": 591,
      "name": {
        "english": "Amoonguss",
        "japanese": "モロバレル",
        "chinese": "败露球菇",
        "french": "Gaulet"
      },
      "type": ["Grass", "Poison"],
      "base": {
        "HP": 114,
        "Attack": 85,
        "Defense": 70,
        "Sp. Attack": 85,
        "Sp. Defense": 80,
        "Speed": 30
      },
      "species": "Mushroom Pokémon",
      "description": "It lures prey close by dancing and waving its arm caps, which resemble Poké Balls, in a swaying motion.",
      "evolution": { "prev": ["590", "Level 39"] },
      "profile": {
        "height": "0.6 m",
        "weight": "10.5 kg",
        "egg": ["Grass"],
        "ability": [
          ["Effect Spore", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/591.png",
        "thumbnail": "src/assets/thumbnails/591.png",
        "hires": "src/assets/hires/591.png"
      }
    },
    {
      "id": 592,
      "name": {
        "english": "Frillish",
        "japanese": "プルリル",
        "chinese": "轻飘飘",
        "french": "Viskuse"
      },
      "type": ["Water", "Ghost"],
      "base": {
        "HP": 55,
        "Attack": 40,
        "Defense": 50,
        "Sp. Attack": 65,
        "Sp. Defense": 85,
        "Speed": 40
      },
      "species": "Floating Pokémon",
      "description": "Using the invisible poison spikes on its veillike arms and legs, it paralyzes its enemies and causes them to drown.",
      "evolution": { "next": [["593", "Level 40"]] },
      "profile": {
        "height": "1.2 m",
        "weight": "33 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Water Absorb", "false"],
          ["Cursed Body", "false"],
          ["Damp", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/592.png",
        "thumbnail": "src/assets/thumbnails/592.png",
        "hires": "src/assets/hires/592.png"
      }
    },
    {
      "id": 593,
      "name": {
        "english": "Jellicent",
        "japanese": "ブルンゲル",
        "chinese": "胖嘟嘟",
        "french": "Moyade"
      },
      "type": ["Water", "Ghost"],
      "base": {
        "HP": 100,
        "Attack": 60,
        "Defense": 70,
        "Sp. Attack": 85,
        "Sp. Defense": 105,
        "Speed": 60
      },
      "species": "Floating Pokémon",
      "description": "Fishermen are terrified of Jellicent. It’s rumored to drag them into the sea and steal their lives away.",
      "evolution": { "prev": ["592", "Level 40"] },
      "profile": {
        "height": "2.2 m",
        "weight": "135 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Water Absorb", "false"],
          ["Cursed Body", "false"],
          ["Damp", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/593.png",
        "thumbnail": "src/assets/thumbnails/593.png",
        "hires": "src/assets/hires/593.png"
      }
    },
    {
      "id": 594,
      "name": {
        "english": "Alomomola",
        "japanese": "ママンボウ",
        "chinese": "保姆曼波",
        "french": "Mamanbo"
      },
      "type": ["Water"],
      "base": {
        "HP": 165,
        "Attack": 75,
        "Defense": 80,
        "Sp. Attack": 40,
        "Sp. Defense": 45,
        "Speed": 65
      },
      "species": "Caring Pokémon",
      "description": "The reason it helps Pokémon in a weakened condition is that any Pokémon coming after them may also attack Alomomola.",
      "evolution": {},
      "profile": {
        "height": "1.2 m",
        "weight": "31.6 kg",
        "egg": ["Water 1", "Water 2"],
        "ability": [
          ["Healer", "false"],
          ["Hydration", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/594.png",
        "thumbnail": "src/assets/thumbnails/594.png",
        "hires": "src/assets/hires/594.png"
      }
    },
    {
      "id": 595,
      "name": {
        "english": "Joltik",
        "japanese": "バチュル",
        "chinese": "电电虫",
        "french": "Statitik"
      },
      "type": ["Bug", "Electric"],
      "base": {
        "HP": 50,
        "Attack": 47,
        "Defense": 50,
        "Sp. Attack": 57,
        "Sp. Defense": 50,
        "Speed": 65
      },
      "species": "Attaching Pokémon",
      "description": "They attach themselves to large-bodied Pokémon and absorb static electricity, which they store in an electric pouch.",
      "evolution": { "next": [["596", "Level 36"]] },
      "profile": {
        "height": "0.1 m",
        "weight": "0.6 kg",
        "egg": ["Bug"],
        "ability": [
          ["Compound Eyes", "false"],
          ["Unnerve", "false"],
          ["Swarm", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/595.png",
        "thumbnail": "src/assets/thumbnails/595.png",
        "hires": "src/assets/hires/595.png"
      }
    },
    {
      "id": 596,
      "name": {
        "english": "Galvantula",
        "japanese": "デンチュラ",
        "chinese": "电蜘蛛",
        "french": "Mygavolt"
      },
      "type": ["Bug", "Electric"],
      "base": {
        "HP": 70,
        "Attack": 77,
        "Defense": 60,
        "Sp. Attack": 97,
        "Sp. Defense": 60,
        "Speed": 108
      },
      "species": "EleSpider Pokémon",
      "description": "When attacked, they create an electric barrier by spitting out many electrically charged threads.",
      "evolution": { "prev": ["595", "Level 36"] },
      "profile": {
        "height": "0.8 m",
        "weight": "14.3 kg",
        "egg": ["Bug"],
        "ability": [
          ["Compound Eyes", "false"],
          ["Unnerve", "false"],
          ["Swarm", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/596.png",
        "thumbnail": "src/assets/thumbnails/596.png",
        "hires": "src/assets/hires/596.png"
      }
    },
    {
      "id": 597,
      "name": {
        "english": "Ferroseed",
        "japanese": "テッシード",
        "chinese": "种子铁球",
        "french": "Grindur"
      },
      "type": ["Grass", "Steel"],
      "base": {
        "HP": 44,
        "Attack": 50,
        "Defense": 91,
        "Sp. Attack": 24,
        "Sp. Defense": 86,
        "Speed": 10
      },
      "species": "Thorn Seed Pokémon",
      "description": "It absorbs the iron it finds in the rock while clinging to the ceiling. It shoots spikes when in danger.",
      "evolution": { "next": [["598", "Level 40"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "18.8 kg",
        "egg": ["Grass", "Mineral"],
        "ability": [["Iron Barbs", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/597.png",
        "thumbnail": "src/assets/thumbnails/597.png",
        "hires": "src/assets/hires/597.png"
      }
    },
    {
      "id": 598,
      "name": {
        "english": "Ferrothorn",
        "japanese": "ナットレイ",
        "chinese": "坚果哑铃",
        "french": "Noacier"
      },
      "type": ["Grass", "Steel"],
      "base": {
        "HP": 74,
        "Attack": 94,
        "Defense": 131,
        "Sp. Attack": 54,
        "Sp. Defense": 116,
        "Speed": 20
      },
      "species": "Thorn Pod Pokémon",
      "description": "They attach themselves to cave ceilings, firing steel spikes at targets passing beneath them.",
      "evolution": { "prev": ["597", "Level 40"] },
      "profile": {
        "height": "1 m",
        "weight": "110 kg",
        "egg": ["Grass", "Mineral"],
        "ability": [
          ["Iron Barbs", "false"],
          ["Anticipation", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/598.png",
        "thumbnail": "src/assets/thumbnails/598.png",
        "hires": "src/assets/hires/598.png"
      }
    },
    {
      "id": 599,
      "name": {
        "english": "Klink",
        "japanese": "ギアル",
        "chinese": "齿轮儿",
        "french": "Tic"
      },
      "type": ["Steel"],
      "base": {
        "HP": 40,
        "Attack": 55,
        "Defense": 70,
        "Sp. Attack": 45,
        "Sp. Defense": 60,
        "Speed": 30
      },
      "species": "Gear Pokémon",
      "description": "The two minigears that mesh together are predetermined. Each will rebound from other minigears without meshing.",
      "evolution": { "next": [["600", "Level 38"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "21 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Plus", "false"],
          ["Minus", "false"],
          ["Clear Body", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/599.png",
        "thumbnail": "src/assets/thumbnails/599.png",
        "hires": "src/assets/hires/599.png"
      }
    },
    {
      "id": 600,
      "name": {
        "english": "Klang",
        "japanese": "ギギアル",
        "chinese": "齿轮组",
        "french": "Clic"
      },
      "type": ["Steel"],
      "base": {
        "HP": 60,
        "Attack": 80,
        "Defense": 95,
        "Sp. Attack": 70,
        "Sp. Defense": 85,
        "Speed": 50
      },
      "species": "Gear Pokémon",
      "description": "A minigear and big gear comprise its body. If the minigear it launches at a foe doesn’t return, it will die.",
      "evolution": { "prev": ["599", "Level 38"], "next": [["601", "Level 49"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "51 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Plus", "false"],
          ["Minus", "false"],
          ["Clear Body", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/600.png",
        "thumbnail": "src/assets/thumbnails/600.png",
        "hires": "src/assets/hires/600.png"
      }
    },
    {
      "id": 601,
      "name": {
        "english": "Klinklang",
        "japanese": "ギギギアル",
        "chinese": "齿轮怪",
        "french": "Cliticlic"
      },
      "type": ["Steel"],
      "base": {
        "HP": 60,
        "Attack": 100,
        "Defense": 115,
        "Sp. Attack": 70,
        "Sp. Defense": 85,
        "Speed": 90
      },
      "species": "Gear Pokémon",
      "description": "Its red core functions as an energy tank. It fires the charged energy through its spikes into an area.",
      "evolution": { "prev": ["600", "Level 49"] },
      "profile": {
        "height": "0.6 m",
        "weight": "81 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Plus", "false"],
          ["Minus", "false"],
          ["Clear Body", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/601.png",
        "thumbnail": "src/assets/thumbnails/601.png",
        "hires": "src/assets/hires/601.png"
      }
    },
    {
      "id": 602,
      "name": {
        "english": "Tynamo",
        "japanese": "シビシラス",
        "chinese": "麻麻小鱼",
        "french": "Anchwatt"
      },
      "type": ["Electric"],
      "base": {
        "HP": 35,
        "Attack": 55,
        "Defense": 40,
        "Sp. Attack": 45,
        "Sp. Defense": 40,
        "Speed": 60
      },
      "species": "EleFish Pokémon",
      "description": "One alone can emit only a trickle of electricity, so a group of them gathers to unleash a powerful electric shock.",
      "evolution": { "next": [["603", "Level 39"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "0.3 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/602.png",
        "thumbnail": "src/assets/thumbnails/602.png",
        "hires": "src/assets/hires/602.png"
      }
    },
    {
      "id": 603,
      "name": {
        "english": "Eelektrik",
        "japanese": "シビビール",
        "chinese": "麻麻鳗",
        "french": "Lampéroie"
      },
      "type": ["Electric"],
      "base": {
        "HP": 65,
        "Attack": 85,
        "Defense": 70,
        "Sp. Attack": 75,
        "Sp. Defense": 70,
        "Speed": 40
      },
      "species": "EleFish Pokémon",
      "description": "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity.",
      "evolution": {
        "prev": ["602", "Level 39"],
        "next": [["604", "use Thunder Stone"]]
      },
      "profile": {
        "height": "1.2 m",
        "weight": "22 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/603.png",
        "thumbnail": "src/assets/thumbnails/603.png",
        "hires": "src/assets/hires/603.png"
      }
    },
    {
      "id": 604,
      "name": {
        "english": "Eelektross",
        "japanese": "シビルドン",
        "chinese": "麻麻鳗鱼王",
        "french": "Ohmassacre"
      },
      "type": ["Electric"],
      "base": {
        "HP": 85,
        "Attack": 115,
        "Defense": 80,
        "Sp. Attack": 105,
        "Sp. Defense": 80,
        "Speed": 50
      },
      "species": "EleFish Pokémon",
      "description": "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
      "evolution": { "prev": ["603", "use Thunder Stone"] },
      "profile": {
        "height": "2.1 m",
        "weight": "80.5 kg",
        "egg": ["Amorphous"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/604.png",
        "thumbnail": "src/assets/thumbnails/604.png",
        "hires": "src/assets/hires/604.png"
      }
    },
    {
      "id": 605,
      "name": {
        "english": "Elgyem",
        "japanese": "リグレー",
        "chinese": "小灰怪",
        "french": "Lewsor"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 55,
        "Attack": 55,
        "Defense": 55,
        "Sp. Attack": 85,
        "Sp. Defense": 55,
        "Speed": 30
      },
      "species": "Cerebral Pokémon",
      "description": "This Pokémon is shrouded in mystery. It’s said to have appeared from a UFO that fell from the sky about 50 years ago.",
      "evolution": { "next": [["606", "Level 42"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "9 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Telepathy", "false"],
          ["Synchronize", "false"],
          ["Analytic", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/605.png",
        "thumbnail": "src/assets/thumbnails/605.png",
        "hires": "src/assets/hires/605.png"
      }
    },
    {
      "id": 606,
      "name": {
        "english": "Beheeyem",
        "japanese": "オーベム",
        "chinese": "大宇怪",
        "french": "Neitram"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 75,
        "Attack": 75,
        "Defense": 75,
        "Sp. Attack": 125,
        "Sp. Defense": 95,
        "Speed": 40
      },
      "species": "Cerebral Pokémon",
      "description": "It has strong psychic powers. Using its fingers that flash three different colors, it controls its opponents and rewrites their memories.",
      "evolution": { "prev": ["605", "Level 42"] },
      "profile": {
        "height": "1 m",
        "weight": "34.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Telepathy", "false"],
          ["Synchronize", "false"],
          ["Analytic", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/606.png",
        "thumbnail": "src/assets/thumbnails/606.png",
        "hires": "src/assets/hires/606.png"
      }
    },
    {
      "id": 607,
      "name": {
        "english": "Litwick",
        "japanese": "ヒトモシ",
        "chinese": "烛光灵",
        "french": "Funécire"
      },
      "type": ["Ghost", "Fire"],
      "base": {
        "HP": 50,
        "Attack": 30,
        "Defense": 55,
        "Sp. Attack": 65,
        "Sp. Defense": 55,
        "Speed": 20
      },
      "species": "Candle Pokémon",
      "description": "Litwick shines a light that absorbs the life energy of people and Pokémon, which becomes the fuel that it burns.",
      "evolution": { "next": [["608", "Level 41"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "3.1 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Flash Fire", "false"],
          ["Flame Body", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/607.png",
        "thumbnail": "src/assets/thumbnails/607.png",
        "hires": "src/assets/hires/607.png"
      }
    },
    {
      "id": 608,
      "name": {
        "english": "Lampent",
        "japanese": "ランプラー",
        "chinese": "灯火幽灵",
        "french": "Mélancolux"
      },
      "type": ["Ghost", "Fire"],
      "base": {
        "HP": 60,
        "Attack": 40,
        "Defense": 60,
        "Sp. Attack": 95,
        "Sp. Defense": 60,
        "Speed": 55
      },
      "species": "Lamp Pokémon",
      "description": "It arrives near the moment of death and steals spirit from the body.",
      "evolution": {
        "prev": ["607", "Level 41"],
        "next": [["609", "use Dusk Stone"]]
      },
      "profile": {
        "height": "0.6 m",
        "weight": "13 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Flash Fire", "false"],
          ["Flame Body", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/608.png",
        "thumbnail": "src/assets/thumbnails/608.png",
        "hires": "src/assets/hires/608.png"
      }
    },
    {
      "id": 609,
      "name": {
        "english": "Chandelure",
        "japanese": "シャンデラ",
        "chinese": "水晶灯火灵",
        "french": "Lugulabre"
      },
      "type": ["Ghost", "Fire"],
      "base": {
        "HP": 60,
        "Attack": 55,
        "Defense": 90,
        "Sp. Attack": 145,
        "Sp. Defense": 90,
        "Speed": 80
      },
      "species": "Luring Pokémon",
      "description": "The spirits burned up in its ominous flame lose their way and wander this world forever.",
      "evolution": { "prev": ["608", "use Dusk Stone"] },
      "profile": {
        "height": "1 m",
        "weight": "34.3 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Flash Fire", "false"],
          ["Flame Body", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/609.png",
        "thumbnail": "src/assets/thumbnails/609.png",
        "hires": "src/assets/hires/609.png"
      }
    },
    {
      "id": 610,
      "name": {
        "english": "Axew",
        "japanese": "キバゴ",
        "chinese": "牙牙",
        "french": "Coupenotte"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 46,
        "Attack": 87,
        "Defense": 60,
        "Sp. Attack": 30,
        "Sp. Defense": 40,
        "Speed": 57
      },
      "species": "Tusk Pokémon",
      "description": "They mark their territory by leaving gashes in trees with their tusks. If a tusk breaks, a new one grows in quickly.",
      "evolution": { "next": [["611", "Level 38"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "18 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Rivalry", "false"],
          ["Mold Breaker", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/610.png",
        "thumbnail": "src/assets/thumbnails/610.png",
        "hires": "src/assets/hires/610.png"
      }
    },
    {
      "id": 611,
      "name": {
        "english": "Fraxure",
        "japanese": "オノンド",
        "chinese": "斧牙龙",
        "french": "Incisache"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 66,
        "Attack": 117,
        "Defense": 70,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 67
      },
      "species": "Axe Jaw Pokémon",
      "description": "A broken tusk will not grow back, so it diligently sharpens its tusks on river rocks after the end of a battle.",
      "evolution": { "prev": ["610", "Level 38"], "next": [["612", "Level 48"]] },
      "profile": {
        "height": "1 m",
        "weight": "36 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Rivalry", "false"],
          ["Mold Breaker", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/611.png",
        "thumbnail": "src/assets/thumbnails/611.png",
        "hires": "src/assets/hires/611.png"
      }
    },
    {
      "id": 612,
      "name": {
        "english": "Haxorus",
        "japanese": "オノノクス",
        "chinese": "双斧战龙",
        "french": "Tranchodon"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 76,
        "Attack": 147,
        "Defense": 90,
        "Sp. Attack": 60,
        "Sp. Defense": 70,
        "Speed": 97
      },
      "species": "Axe Jaw Pokémon",
      "description": "Their sturdy tusks will stay sharp even if used to cut steel beams. These Pokémon are covered in hard armor.",
      "evolution": { "prev": ["611", "Level 48"] },
      "profile": {
        "height": "1.8 m",
        "weight": "105.5 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Rivalry", "false"],
          ["Mold Breaker", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/612.png",
        "thumbnail": "src/assets/thumbnails/612.png",
        "hires": "src/assets/hires/612.png"
      }
    },
    {
      "id": 613,
      "name": {
        "english": "Cubchoo",
        "japanese": "クマシュン",
        "chinese": "喷嚏熊",
        "french": "Polarhume"
      },
      "type": ["Ice"],
      "base": {
        "HP": 55,
        "Attack": 70,
        "Defense": 40,
        "Sp. Attack": 60,
        "Sp. Defense": 40,
        "Speed": 40
      },
      "species": "Chill Pokémon",
      "description": "Their snot is a barometer of health. When healthy, their snot is sticky and the power of their ice moves increases.",
      "evolution": { "next": [["614", "Level 37"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "8.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Snow Cloak", "false"],
          ["Slush Rush", "false"],
          ["Rattled", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/613.png",
        "thumbnail": "src/assets/thumbnails/613.png",
        "hires": "src/assets/hires/613.png"
      }
    },
    {
      "id": 614,
      "name": {
        "english": "Beartic",
        "japanese": "ツンベアー",
        "chinese": "冻原熊",
        "french": "Polagriffe"
      },
      "type": ["Ice"],
      "base": {
        "HP": 95,
        "Attack": 130,
        "Defense": 80,
        "Sp. Attack": 70,
        "Sp. Defense": 80,
        "Speed": 50
      },
      "species": "Freezing Pokémon",
      "description": "It freezes its breath to create fangs and claws of ice to fight with. Cold northern areas are its habitat.",
      "evolution": { "prev": ["613", "Level 37"] },
      "profile": {
        "height": "2.6 m",
        "weight": "260 kg",
        "egg": ["Field"],
        "ability": [
          ["Snow Cloak", "false"],
          ["Slush Rush", "false"],
          ["Swift Swim", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/614.png",
        "thumbnail": "src/assets/thumbnails/614.png",
        "hires": "src/assets/hires/614.png"
      }
    },
    {
      "id": 615,
      "name": {
        "english": "Cryogonal",
        "japanese": "フリージオ",
        "chinese": "几何雪花",
        "french": "Hexagel"
      },
      "type": ["Ice"],
      "base": {
        "HP": 80,
        "Attack": 50,
        "Defense": 50,
        "Sp. Attack": 95,
        "Sp. Defense": 135,
        "Speed": 105
      },
      "species": "Crystallizing Pokémon",
      "description": "They are composed of ice crystals. They capture prey with chains of ice, freezing the prey at -148 degrees Fahrenheit.",
      "evolution": {},
      "profile": {
        "height": "1.1 m",
        "weight": "148 kg",
        "egg": ["Mineral"],
        "ability": [["Levitate", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/615.png",
        "thumbnail": "src/assets/thumbnails/615.png",
        "hires": "src/assets/hires/615.png"
      }
    },
    {
      "id": 616,
      "name": {
        "english": "Shelmet",
        "japanese": "チョボマキ",
        "chinese": "小嘴蜗",
        "french": "Escargaume"
      },
      "type": ["Bug"],
      "base": {
        "HP": 50,
        "Attack": 40,
        "Defense": 85,
        "Sp. Attack": 40,
        "Sp. Defense": 65,
        "Speed": 25
      },
      "species": "Snail Pokémon",
      "description": "It evolves when bathed in an electric-like energy along with Karrablast. The reason is still unknown.",
      "evolution": { "next": [["617", "Trade with Karrablast"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "7.7 kg",
        "egg": ["Bug"],
        "ability": [
          ["Hydration", "false"],
          ["Shell Armor", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/616.png",
        "thumbnail": "src/assets/thumbnails/616.png",
        "hires": "src/assets/hires/616.png"
      }
    },
    {
      "id": 617,
      "name": {
        "english": "Accelgor",
        "japanese": "アギルダー",
        "chinese": "敏捷虫",
        "french": "Limaspeed"
      },
      "type": ["Bug"],
      "base": {
        "HP": 80,
        "Attack": 70,
        "Defense": 40,
        "Sp. Attack": 100,
        "Sp. Defense": 60,
        "Speed": 145
      },
      "species": "Shell Out Pokémon",
      "description": "When its body dries out, it weakens. So, to prevent dehydration, it wraps itself in many layers of thin membrane.",
      "evolution": { "prev": ["616", "Trade with Karrablast"] },
      "profile": {
        "height": "0.8 m",
        "weight": "25.3 kg",
        "egg": ["Bug"],
        "ability": [
          ["Hydration", "false"],
          ["Sticky Hold", "false"],
          ["Unburden", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/617.png",
        "thumbnail": "src/assets/thumbnails/617.png",
        "hires": "src/assets/hires/617.png"
      }
    },
    {
      "id": 618,
      "name": {
        "english": "Stunfisk",
        "japanese": "マッギョ",
        "chinese": "泥巴鱼",
        "french": "Limonde"
      },
      "type": ["Ground", "Electric"],
      "base": {
        "HP": 109,
        "Attack": 66,
        "Defense": 84,
        "Sp. Attack": 81,
        "Sp. Defense": 99,
        "Speed": 32
      },
      "species": "Trap Pokémon",
      "description": "It conceals itself in the mud of the seashore. Then it waits. When prey touch it, it delivers a jolt of electricity.",
      "evolution": {},
      "profile": {
        "height": "0.7 m",
        "weight": "11 kg",
        "egg": ["Water 1", "Amorphous"],
        "ability": [
          ["Static", "false"],
          ["Limber", "false"],
          ["Sand Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/618.png",
        "thumbnail": "src/assets/thumbnails/618.png",
        "hires": "src/assets/hires/618.png"
      }
    },
    {
      "id": 619,
      "name": {
        "english": "Mienfoo",
        "japanese": "コジョフー",
        "chinese": "功夫鼬",
        "french": "Kungfouine"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 45,
        "Attack": 85,
        "Defense": 50,
        "Sp. Attack": 55,
        "Sp. Defense": 50,
        "Speed": 65
      },
      "species": "Martial Arts Pokémon",
      "description": "They seclude themselves in the mountains and devote themselves to training. The form of their kicks and chops differs from pack to pack.",
      "evolution": { "next": [["620", "Level 50"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "20 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Inner Focus", "false"],
          ["Regenerator", "false"],
          ["Reckless", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/619.png",
        "thumbnail": "src/assets/thumbnails/619.png",
        "hires": "src/assets/hires/619.png"
      }
    },
    {
      "id": 620,
      "name": {
        "english": "Mienshao",
        "japanese": "コジョンド",
        "chinese": "师父鼬",
        "french": "Shaofouine"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 65,
        "Attack": 125,
        "Defense": 60,
        "Sp. Attack": 95,
        "Sp. Defense": 60,
        "Speed": 105
      },
      "species": "Martial Arts Pokémon",
      "description": "When Mienshao lets out a bizarre wail, you’re in danger. A flurry of kicks and chops too fast to see is about to be unleashed!",
      "evolution": { "prev": ["619", "Level 50"] },
      "profile": {
        "height": "1.4 m",
        "weight": "35.5 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Inner Focus", "false"],
          ["Regenerator", "false"],
          ["Reckless", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/620.png",
        "thumbnail": "src/assets/thumbnails/620.png",
        "hires": "src/assets/hires/620.png"
      }
    },
    {
      "id": 621,
      "name": {
        "english": "Druddigon",
        "japanese": "クリムガン",
        "chinese": "赤面龙",
        "french": "Drakkarmin"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 77,
        "Attack": 120,
        "Defense": 90,
        "Sp. Attack": 60,
        "Sp. Defense": 90,
        "Speed": 48
      },
      "species": "Cave Pokémon",
      "description": "It infiltrates tunnels that Pokémon like Diglett and Dugtrio have dug and quietly waits for prey to pass through.",
      "evolution": {},
      "profile": {
        "height": "1.6 m",
        "weight": "139 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Rough Skin", "false"],
          ["Sheer Force", "false"],
          ["Mold Breaker", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/621.png",
        "thumbnail": "src/assets/thumbnails/621.png",
        "hires": "src/assets/hires/621.png"
      }
    },
    {
      "id": 622,
      "name": {
        "english": "Golett",
        "japanese": "ゴビット",
        "chinese": "泥偶小人",
        "french": "Gringolem"
      },
      "type": ["Ground", "Ghost"],
      "base": {
        "HP": 59,
        "Attack": 74,
        "Defense": 50,
        "Sp. Attack": 35,
        "Sp. Defense": 50,
        "Speed": 35
      },
      "species": "Automaton Pokémon",
      "description": "Although ancient people apparently built it by working with clay, the source of its energy is unclear.",
      "evolution": { "next": [["623", "Level 43"]] },
      "profile": {
        "height": "1 m",
        "weight": "92 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Iron Fist", "false"],
          ["Klutz", "false"],
          ["No Guard", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/622.png",
        "thumbnail": "src/assets/thumbnails/622.png",
        "hires": "src/assets/hires/622.png"
      }
    },
    {
      "id": 623,
      "name": {
        "english": "Golurk",
        "japanese": "ゴルーグ",
        "chinese": "泥偶巨人",
        "french": "Golemastoc"
      },
      "type": ["Ground", "Ghost"],
      "base": {
        "HP": 89,
        "Attack": 124,
        "Defense": 80,
        "Sp. Attack": 55,
        "Sp. Defense": 80,
        "Speed": 55
      },
      "species": "Automaton Pokémon",
      "description": "When the seal on its chest is removed, it rages indiscriminately, turning the whole town around it into a mountain of rubble.",
      "evolution": { "prev": ["622", "Level 43"] },
      "profile": {
        "height": "2.8 m",
        "weight": "330 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Iron Fist", "false"],
          ["Klutz", "false"],
          ["No Guard", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/623.png",
        "thumbnail": "src/assets/thumbnails/623.png",
        "hires": "src/assets/hires/623.png"
      }
    },
    {
      "id": 624,
      "name": {
        "english": "Pawniard",
        "japanese": "コマタナ",
        "chinese": "驹刀小兵",
        "french": "Scalpion"
      },
      "type": ["Dark", "Steel"],
      "base": {
        "HP": 45,
        "Attack": 85,
        "Defense": 70,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 60
      },
      "species": "Sharp Blade Pokémon",
      "description": "It follows Bisharp’s orders to a tee when it attacks enemies. After slashing an opponent, Pawniard clangs both of its blades together.",
      "evolution": { "next": [["625", "Level 52"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "10.2 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Defiant", "false"],
          ["Inner Focus", "false"],
          ["Pressure", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/624.png",
        "thumbnail": "src/assets/thumbnails/624.png",
        "hires": "src/assets/hires/624.png"
      }
    },
    {
      "id": 625,
      "name": {
        "english": "Bisharp",
        "japanese": "キリキザン",
        "chinese": "劈斩司令",
        "french": "Scalproie"
      },
      "type": ["Dark", "Steel"],
      "base": {
        "HP": 65,
        "Attack": 125,
        "Defense": 100,
        "Sp. Attack": 60,
        "Sp. Defense": 70,
        "Speed": 70
      },
      "species": "Sword Blade Pokémon",
      "description": "It leads a group of Pawniard. Bisharp doesn’t even change its expression when it deals the finishing blow to an opponent.",
      "evolution": { "prev": ["624", "Level 52"] },
      "profile": {
        "height": "1.6 m",
        "weight": "70 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Defiant", "false"],
          ["Inner Focus", "false"],
          ["Pressure", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/625.png",
        "thumbnail": "src/assets/thumbnails/625.png",
        "hires": "src/assets/hires/625.png"
      }
    },
    {
      "id": 626,
      "name": {
        "english": "Bouffalant",
        "japanese": "バッフロン",
        "chinese": "爆炸头水牛",
        "french": "Frison"
      },
      "type": ["Normal"],
      "base": {
        "HP": 95,
        "Attack": 110,
        "Defense": 95,
        "Sp. Attack": 40,
        "Sp. Defense": 95,
        "Speed": 55
      },
      "species": "Bash Buffalo Pokémon",
      "description": "Their fluffy fur absorbs damage, even if they strike foes with a fierce headbutt.",
      "evolution": {},
      "profile": {
        "height": "1.6 m",
        "weight": "94.6 kg",
        "egg": ["Field"],
        "ability": [
          ["Reckless", "false"],
          ["Sap Sipper", "false"],
          ["Soundproof", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/626.png",
        "thumbnail": "src/assets/thumbnails/626.png",
        "hires": "src/assets/hires/626.png"
      }
    },
    {
      "id": 627,
      "name": {
        "english": "Rufflet",
        "japanese": "ワシボン",
        "chinese": "毛头小鹰",
        "french": "Furaiglon"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 70,
        "Attack": 83,
        "Defense": 50,
        "Sp. Attack": 37,
        "Sp. Defense": 50,
        "Speed": 60
      },
      "species": "Eaglet Pokémon",
      "description": "Known as a natural-born warrior, soon after its hatching, it will challenge its parent to a fight in order to gain their acceptance.",
      "evolution": { "next": [["628", "Level 54"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "10.5 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Sheer Force", "false"],
          ["Hustle", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/627.png",
        "thumbnail": "src/assets/thumbnails/627.png",
        "hires": "src/assets/hires/627.png"
      }
    },
    {
      "id": 628,
      "name": {
        "english": "Braviary",
        "japanese": "ウォーグル",
        "chinese": "勇士雄鹰",
        "french": "Gueriaigle"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 100,
        "Attack": 123,
        "Defense": 75,
        "Sp. Attack": 57,
        "Sp. Defense": 75,
        "Speed": 80
      },
      "species": "Valiant Pokémon",
      "description": "Known as “the hero of the skies,” this Pokémon is so proud and so brave that it will never retreat, even when it’s injured.",
      "evolution": { "prev": ["627", "Level 54"] },
      "profile": {
        "height": "1.5 m",
        "weight": "41 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Sheer Force", "false"],
          ["Defiant", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/628.png",
        "thumbnail": "src/assets/thumbnails/628.png",
        "hires": "src/assets/hires/628.png"
      }
    },
    {
      "id": 629,
      "name": {
        "english": "Vullaby",
        "japanese": "バルチャイ",
        "chinese": "秃鹰丫头",
        "french": "Vostourno"
      },
      "type": ["Dark", "Flying"],
      "base": {
        "HP": 70,
        "Attack": 55,
        "Defense": 75,
        "Sp. Attack": 45,
        "Sp. Defense": 65,
        "Speed": 60
      },
      "species": "Diapered Pokémon",
      "description": "Its healthy appetite leads to visible growth spurts. It often has to replace the bones it wears as its size increases.",
      "evolution": { "next": [["630", "Level 54"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "9 kg",
        "egg": ["Flying"],
        "ability": [
          ["Big Pecks", "false"],
          ["Overcoat", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/629.png",
        "thumbnail": "src/assets/thumbnails/629.png",
        "hires": "src/assets/hires/629.png"
      }
    },
    {
      "id": 630,
      "name": {
        "english": "Mandibuzz",
        "japanese": "バルジーナ",
        "chinese": "秃鹰娜",
        "french": "Vaututrice"
      },
      "type": ["Dark", "Flying"],
      "base": {
        "HP": 110,
        "Attack": 65,
        "Defense": 105,
        "Sp. Attack": 55,
        "Sp. Defense": 95,
        "Speed": 80
      },
      "species": "Bone Vulture Pokémon",
      "description": "It’s always searching for food for Vullaby. When it finds a weak Pokémon, Mandibuzz swoops it right off to its nest.",
      "evolution": { "prev": ["629", "Level 54"] },
      "profile": {
        "height": "1.2 m",
        "weight": "39.5 kg",
        "egg": ["Flying"],
        "ability": [
          ["Big Pecks", "false"],
          ["Overcoat", "false"],
          ["Weak Armor", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/630.png",
        "thumbnail": "src/assets/thumbnails/630.png",
        "hires": "src/assets/hires/630.png"
      }
    },
    {
      "id": 631,
      "name": {
        "english": "Heatmor",
        "japanese": "クイタラン",
        "chinese": "熔蚁兽",
        "french": "Aflamanoir"
      },
      "type": ["Fire"],
      "base": {
        "HP": 85,
        "Attack": 97,
        "Defense": 66,
        "Sp. Attack": 105,
        "Sp. Defense": 66,
        "Speed": 65
      },
      "species": "Anteater Pokémon",
      "description": "It draws in air through its tail, transforms it into fire, and uses it like a tongue. It melts Durant and eats them.",
      "evolution": {},
      "profile": {
        "height": "1.4 m",
        "weight": "58 kg",
        "egg": ["Field"],
        "ability": [
          ["Gluttony", "false"],
          ["Flash Fire", "false"],
          ["White Smoke", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/631.png",
        "thumbnail": "src/assets/thumbnails/631.png",
        "hires": "src/assets/hires/631.png"
      }
    },
    {
      "id": 632,
      "name": {
        "english": "Durant",
        "japanese": "アイアント",
        "chinese": "铁蚁",
        "french": "Fermite"
      },
      "type": ["Bug", "Steel"],
      "base": {
        "HP": 58,
        "Attack": 109,
        "Defense": 112,
        "Sp. Attack": 48,
        "Sp. Defense": 48,
        "Speed": 109
      },
      "species": "Iron Ant Pokémon",
      "description": "They attack in groups, covering themselves in steel armor to protect themselves from Heatmor.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "33 kg",
        "egg": ["Bug"],
        "ability": [
          ["Swarm", "false"],
          ["Hustle", "false"],
          ["Truant", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/632.png",
        "thumbnail": "src/assets/thumbnails/632.png",
        "hires": "src/assets/hires/632.png"
      }
    },
    {
      "id": 633,
      "name": {
        "english": "Deino",
        "japanese": "モノズ",
        "chinese": "单首龙",
        "french": "Solochi"
      },
      "type": ["Dark", "Dragon"],
      "base": {
        "HP": 52,
        "Attack": 65,
        "Defense": 50,
        "Sp. Attack": 45,
        "Sp. Defense": 50,
        "Speed": 38
      },
      "species": "Irate Pokémon",
      "description": "Lacking sight, it’s unaware of its surroundings, so it bumps into things and eats anything that moves.",
      "evolution": { "next": [["634", "Level 50"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "17.3 kg",
        "egg": ["Dragon"],
        "ability": [["Hustle", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/633.png",
        "thumbnail": "src/assets/thumbnails/633.png",
        "hires": "src/assets/hires/633.png"
      }
    },
    {
      "id": 634,
      "name": {
        "english": "Zweilous",
        "japanese": "ジヘッド",
        "chinese": "双首暴龙",
        "french": "Diamat"
      },
      "type": ["Dark", "Dragon"],
      "base": {
        "HP": 72,
        "Attack": 85,
        "Defense": 70,
        "Sp. Attack": 65,
        "Sp. Defense": 70,
        "Speed": 58
      },
      "species": "Hostile Pokémon",
      "description": "After it has eaten up all the food in its territory, it moves to another area. Its two heads do not get along.",
      "evolution": { "prev": ["633", "Level 50"], "next": [["635", "Level 64"]] },
      "profile": {
        "height": "1.4 m",
        "weight": "50 kg",
        "egg": ["Dragon"],
        "ability": [["Hustle", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/634.png",
        "thumbnail": "src/assets/thumbnails/634.png",
        "hires": "src/assets/hires/634.png"
      }
    },
    {
      "id": 635,
      "name": {
        "english": "Hydreigon",
        "japanese": "サザンドラ",
        "chinese": "三首恶龙",
        "french": "Trioxhydre"
      },
      "type": ["Dark", "Dragon"],
      "base": {
        "HP": 92,
        "Attack": 105,
        "Defense": 90,
        "Sp. Attack": 125,
        "Sp. Defense": 90,
        "Speed": 98
      },
      "species": "Brutal Pokémon",
      "description": "It responds to movement by attacking. This scary, three-headed Pokémon devours everything in its path!",
      "evolution": { "prev": ["634", "Level 64"] },
      "profile": {
        "height": "1.8 m",
        "weight": "160 kg",
        "egg": ["Dragon"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/635.png",
        "thumbnail": "src/assets/thumbnails/635.png",
        "hires": "src/assets/hires/635.png"
      }
    },
    {
      "id": 636,
      "name": {
        "english": "Larvesta",
        "japanese": "メラルバ",
        "chinese": "燃烧虫",
        "french": "Pyronille"
      },
      "type": ["Bug", "Fire"],
      "base": {
        "HP": 55,
        "Attack": 85,
        "Defense": 55,
        "Sp. Attack": 50,
        "Sp. Defense": 55,
        "Speed": 60
      },
      "species": "Torch Pokémon",
      "description": "It protects itself with flame. Long years ago, people believed Larvesta had a nest on the sun.",
      "evolution": { "next": [["637", "Level 59"]] },
      "profile": {
        "height": "1.1 m",
        "weight": "28.8 kg",
        "egg": ["Bug"],
        "ability": [
          ["Flame Body", "false"],
          ["Swarm", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/636.png",
        "thumbnail": "src/assets/thumbnails/636.png",
        "hires": "src/assets/hires/636.png"
      }
    },
    {
      "id": 637,
      "name": {
        "english": "Volcarona",
        "japanese": "ウルガモス",
        "chinese": "火神蛾",
        "french": "Pyrax"
      },
      "type": ["Bug", "Fire"],
      "base": {
        "HP": 85,
        "Attack": 60,
        "Defense": 65,
        "Sp. Attack": 135,
        "Sp. Defense": 105,
        "Speed": 100
      },
      "species": "Sun Pokémon",
      "description": "According to legends, it was hatched from a flaming cocoon to save people and Pokémon that were suffering from the cold.",
      "evolution": { "prev": ["636", "Level 59"] },
      "profile": {
        "height": "1.6 m",
        "weight": "46 kg",
        "egg": ["Bug"],
        "ability": [
          ["Flame Body", "false"],
          ["Swarm", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/637.png",
        "thumbnail": "src/assets/thumbnails/637.png",
        "hires": "src/assets/hires/637.png"
      }
    },
    {
      "id": 638,
      "name": {
        "english": "Cobalion",
        "japanese": "コバルオン",
        "chinese": "勾帕路翁",
        "french": "Cobaltium"
      },
      "type": ["Steel", "Fighting"],
      "base": {
        "HP": 91,
        "Attack": 90,
        "Defense": 129,
        "Sp. Attack": 90,
        "Sp. Defense": 72,
        "Speed": 108
      },
      "species": "Iron Will Pokémon",
      "description": "It has a body and heart of steel. It worked with its allies to punish people when they hurt Pokémon.",
      "evolution": {},
      "profile": {
        "height": "2.1 m",
        "weight": "250 kg",
        "egg": ["Undiscovered"],
        "ability": [["Justified", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/638.png",
        "thumbnail": "src/assets/thumbnails/638.png",
        "hires": "src/assets/hires/638.png"
      }
    },
    {
      "id": 639,
      "name": {
        "english": "Terrakion",
        "japanese": "テラキオン",
        "chinese": "代拉基翁",
        "french": "Terrakium"
      },
      "type": ["Rock", "Fighting"],
      "base": {
        "HP": 91,
        "Attack": 129,
        "Defense": 90,
        "Sp. Attack": 72,
        "Sp. Defense": 90,
        "Speed": 108
      },
      "species": "Cavern Pokémon",
      "description": "Spoken of in legend, this Pokémon used its phenomenal power to destroy a castle in its effort to protect Pokémon.",
      "evolution": {},
      "profile": {
        "height": "1.9 m",
        "weight": "260 kg",
        "egg": ["Undiscovered"],
        "ability": [["Justified", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/639.png",
        "thumbnail": "src/assets/thumbnails/639.png",
        "hires": "src/assets/hires/639.png"
      }
    },
    {
      "id": 640,
      "name": {
        "english": "Virizion",
        "japanese": "ビリジオン",
        "chinese": "毕力吉翁",
        "french": "Viridium"
      },
      "type": ["Grass", "Fighting"],
      "base": {
        "HP": 91,
        "Attack": 90,
        "Defense": 72,
        "Sp. Attack": 90,
        "Sp. Defense": 129,
        "Speed": 108
      },
      "species": "Grassland Pokémon",
      "description": "Legends say this Pokémon confounded opponents with its swift movements.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "200 kg",
        "egg": ["Undiscovered"],
        "ability": [["Justified", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/640.png",
        "thumbnail": "src/assets/thumbnails/640.png",
        "hires": "src/assets/hires/640.png"
      }
    },
    {
      "id": 641,
      "name": {
        "english": "Tornadus",
        "japanese": "トルネロス",
        "chinese": "龙卷云",
        "french": "Boréas"
      },
      "type": ["Flying"],
      "base": {
        "HP": 79,
        "Attack": 115,
        "Defense": 70,
        "Sp. Attack": 125,
        "Sp. Defense": 80,
        "Speed": 111
      },
      "species": "Cyclone Pokémon",
      "description": "Tornadus expels massive energy from its tail, causing severe storms. Its power is great enough to blow houses away.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "63 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Prankster", "false"],
          ["Defiant", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/641.png",
        "thumbnail": "src/assets/thumbnails/641.png",
        "hires": "src/assets/hires/641.png"
      }
    },
    {
      "id": 642,
      "name": {
        "english": "Thundurus",
        "japanese": "ボルトロス",
        "chinese": "雷电云",
        "french": "Fulguris"
      },
      "type": ["Electric", "Flying"],
      "base": {
        "HP": 79,
        "Attack": 115,
        "Defense": 70,
        "Sp. Attack": 125,
        "Sp. Defense": 80,
        "Speed": 111
      },
      "species": "Bolt Strike Pokémon",
      "description": "As it flies around, it shoots lightning all over the place and causes forest fires. It is therefore disliked.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "61 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Prankster", "false"],
          ["Defiant", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/642.png",
        "thumbnail": "src/assets/thumbnails/642.png",
        "hires": "src/assets/hires/642.png"
      }
    },
    {
      "id": 643,
      "name": {
        "english": "Reshiram",
        "japanese": "レシラム",
        "chinese": "莱希拉姆",
        "french": "Reshiram"
      },
      "type": ["Dragon", "Fire"],
      "base": {
        "HP": 100,
        "Attack": 120,
        "Defense": 100,
        "Sp. Attack": 150,
        "Sp. Defense": 120,
        "Speed": 90
      },
      "species": "Vast White Pokémon",
      "description": "When Reshiram’s tail flares, the heat energy moves the atmosphere and changes the world’s weather.",
      "evolution": {},
      "profile": {
        "height": "3.2 m",
        "weight": "330 kg",
        "egg": ["Undiscovered"],
        "ability": [["Turboblaze", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/643.png",
        "thumbnail": "src/assets/thumbnails/643.png",
        "hires": "src/assets/hires/643.png"
      }
    },
    {
      "id": 644,
      "name": {
        "english": "Zekrom",
        "japanese": "ゼクロム",
        "chinese": "捷克罗姆",
        "french": "Zekrom"
      },
      "type": ["Dragon", "Electric"],
      "base": {
        "HP": 100,
        "Attack": 150,
        "Defense": 120,
        "Sp. Attack": 120,
        "Sp. Defense": 100,
        "Speed": 90
      },
      "species": "Deep Black Pokémon",
      "description": "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail.",
      "evolution": {},
      "profile": {
        "height": "2.9 m",
        "weight": "345 kg",
        "egg": ["Undiscovered"],
        "ability": [["Teravolt", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/644.png",
        "thumbnail": "src/assets/thumbnails/644.png",
        "hires": "src/assets/hires/644.png"
      }
    },
    {
      "id": 645,
      "name": {
        "english": "Landorus",
        "japanese": "ランドロス",
        "chinese": "土地云",
        "french": "Démétéros"
      },
      "type": ["Ground", "Flying"],
      "base": {
        "HP": 89,
        "Attack": 125,
        "Defense": 90,
        "Sp. Attack": 115,
        "Sp. Defense": 80,
        "Speed": 101
      },
      "species": "Abundance Pokémon",
      "description": "From the forces of lightning and wind, it creates energy to give nutrients to the soil and make the land abundant.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "68 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Sand Force", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "100:0"
      },
      "image": {
        "sprite": "src/assets/sprites/645.png",
        "thumbnail": "src/assets/thumbnails/645.png",
        "hires": "src/assets/hires/645.png"
      }
    },
    {
      "id": 646,
      "name": {
        "english": "Kyurem",
        "japanese": "キュレム",
        "chinese": "酋雷姆",
        "french": "Kyurem"
      },
      "type": ["Dragon", "Ice"],
      "base": {
        "HP": 125,
        "Attack": 130,
        "Defense": 90,
        "Sp. Attack": 130,
        "Sp. Defense": 90,
        "Speed": 95
      },
      "species": "Boundary Pokémon",
      "description": "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.",
      "evolution": {},
      "profile": {
        "height": "3 m",
        "weight": "325 kg",
        "egg": ["Undiscovered"],
        "ability": [["Pressure", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/646.png",
        "thumbnail": "src/assets/thumbnails/646.png",
        "hires": "src/assets/hires/646.png"
      }
    },
    {
      "id": 647,
      "name": {
        "english": "Keldeo",
        "japanese": "ケルディオ",
        "chinese": "凯路迪欧",
        "french": "Keldeo"
      },
      "type": ["Water", "Fighting"],
      "base": {
        "HP": 91,
        "Attack": 72,
        "Defense": 90,
        "Sp. Attack": 129,
        "Sp. Defense": 90,
        "Speed": 108
      },
      "species": "Colt Pokémon",
      "description": "When it is resolute, its body fills with power and it becomes swifter. Its jumps are then too fast to follow.",
      "evolution": {},
      "profile": {
        "height": "1.4 m",
        "weight": "48.5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Justified", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/647.png",
        "thumbnail": "src/assets/thumbnails/647.png",
        "hires": "src/assets/hires/647.png"
      }
    },
    {
      "id": 648,
      "name": {
        "english": "Meloetta",
        "japanese": "メロエッタ",
        "chinese": "美洛耶塔",
        "french": "Meloetta"
      },
      "type": ["Normal", "Psychic"],
      "base": {
        "HP": 100,
        "Attack": 77,
        "Defense": 77,
        "Sp. Attack": 128,
        "Sp. Defense": 128,
        "Speed": 90
      },
      "species": "Melody Pokémon",
      "description": "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it.",
      "evolution": {},
      "profile": {
        "height": "0.6 m",
        "weight": "6.5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Serene Grace", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/648.png",
        "thumbnail": "src/assets/thumbnails/648.png",
        "hires": "src/assets/hires/648.png"
      }
    },
    {
      "id": 649,
      "name": {
        "english": "Genesect",
        "japanese": "ゲノセクト",
        "chinese": "盖诺赛克特",
        "french": "Genesect"
      },
      "type": ["Bug", "Steel"],
      "base": {
        "HP": 71,
        "Attack": 120,
        "Defense": 95,
        "Sp. Attack": 120,
        "Sp. Defense": 95,
        "Speed": 99
      },
      "species": "Paleozoic Pokémon",
      "description": "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "82.5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Download", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/649.png",
        "thumbnail": "src/assets/thumbnails/649.png",
        "hires": "src/assets/hires/649.png"
      }
    },
    {
      "id": 650,
      "name": {
        "english": "Chespin",
        "japanese": "ハリマロン",
        "chinese": "哈力栗",
        "french": "Marisson"
      },
      "type": ["Grass"],
      "base": {
        "HP": 56,
        "Attack": 61,
        "Defense": 65,
        "Sp. Attack": 48,
        "Sp. Defense": 45,
        "Speed": 38
      },
      "species": "Spiny Nut Pokémon",
      "description": "Such a thick shell of wood covers its head and back that even a direct hit from a truck wouldn’t faze it.",
      "evolution": { "next": [["651", "Level 16"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "9 kg",
        "egg": ["Field"],
        "ability": [
          ["Overgrow", "false"],
          ["Bulletproof", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/650.png",
        "thumbnail": "src/assets/thumbnails/650.png",
        "hires": "src/assets/hires/650.png"
      }
    },
    {
      "id": 651,
      "name": {
        "english": "Quilladin",
        "japanese": "ハリボーグ",
        "chinese": "胖胖哈力",
        "french": "Boguérisse"
      },
      "type": ["Grass"],
      "base": {
        "HP": 61,
        "Attack": 78,
        "Defense": 95,
        "Sp. Attack": 56,
        "Sp. Defense": 58,
        "Speed": 57
      },
      "species": "Spiny Armor Pokémon",
      "description": "They strengthen their lower bodies by running into one another. They are very kind and won’t start fights.",
      "evolution": { "prev": ["650", "Level 16"], "next": [["652", "Level 36"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "29 kg",
        "egg": ["Field"],
        "ability": [
          ["Overgrow", "false"],
          ["Bulletproof", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/651.png",
        "thumbnail": "src/assets/thumbnails/651.png",
        "hires": "src/assets/hires/651.png"
      }
    },
    {
      "id": 652,
      "name": {
        "english": "Chesnaught",
        "japanese": "ブリガロン",
        "chinese": "布里卡隆",
        "french": "Blindépique"
      },
      "type": ["Grass", "Fighting"],
      "base": {
        "HP": 88,
        "Attack": 107,
        "Defense": 122,
        "Sp. Attack": 74,
        "Sp. Defense": 75,
        "Speed": 64
      },
      "species": "Spiny Armor Pokémon",
      "description": "When it takes a defensive posture with its fists guarding its face, it could withstand a bomb blast.",
      "evolution": { "prev": ["651", "Level 36"] },
      "profile": {
        "height": "1.6 m",
        "weight": "90 kg",
        "egg": ["Field"],
        "ability": [
          ["Overgrow", "false"],
          ["Bulletproof", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/652.png",
        "thumbnail": "src/assets/thumbnails/652.png",
        "hires": "src/assets/hires/652.png"
      }
    },
    {
      "id": 653,
      "name": {
        "english": "Fennekin",
        "japanese": "フォッコ",
        "chinese": "火狐狸",
        "french": "Feunnec"
      },
      "type": ["Fire"],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 40,
        "Sp. Attack": 62,
        "Sp. Defense": 60,
        "Speed": 60
      },
      "species": "Fox Pokémon",
      "description": "As it walks, it munches on a twig in place of a snack. It intimidates opponents by puffing hot air out of its ears.",
      "evolution": { "next": [["654", "Level 16"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "9.4 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Magician", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/653.png",
        "thumbnail": "src/assets/thumbnails/653.png",
        "hires": "src/assets/hires/653.png"
      }
    },
    {
      "id": 654,
      "name": {
        "english": "Braixen",
        "japanese": "テールナー",
        "chinese": "长尾火狐",
        "french": "Roussil"
      },
      "type": ["Fire"],
      "base": {
        "HP": 59,
        "Attack": 59,
        "Defense": 58,
        "Sp. Attack": 90,
        "Sp. Defense": 70,
        "Speed": 73
      },
      "species": "Fox Pokémon",
      "description": "When the twig is plucked from its tail, friction sets the twig alight. The flame is used to send signals to its allies.",
      "evolution": { "prev": ["653", "Level 16"], "next": [["655", "Level 36"]] },
      "profile": {
        "height": "1 m",
        "weight": "14.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Magician", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/654.png",
        "thumbnail": "src/assets/thumbnails/654.png",
        "hires": "src/assets/hires/654.png"
      }
    },
    {
      "id": 655,
      "name": {
        "english": "Delphox",
        "japanese": "マフォクシー",
        "chinese": "妖火红狐",
        "french": "Goupelin"
      },
      "type": ["Fire", "Psychic"],
      "base": {
        "HP": 75,
        "Attack": 69,
        "Defense": 72,
        "Sp. Attack": 114,
        "Sp. Defense": 100,
        "Speed": 104
      },
      "species": "Fox Pokémon",
      "description": "Using psychic power, it generates a fiery vortex of 5,400 degrees Fahrenheit, incinerating foes swept into this whirl of flame.",
      "evolution": { "prev": ["654", "Level 36"] },
      "profile": {
        "height": "1.5 m",
        "weight": "39 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Magician", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/655.png",
        "thumbnail": "src/assets/thumbnails/655.png",
        "hires": "src/assets/hires/655.png"
      }
    },
    {
      "id": 656,
      "name": {
        "english": "Froakie",
        "japanese": "ケロマツ",
        "chinese": "呱呱泡蛙",
        "french": "Grenousse"
      },
      "type": ["Water"],
      "base": {
        "HP": 41,
        "Attack": 56,
        "Defense": 40,
        "Sp. Attack": 62,
        "Sp. Defense": 44,
        "Speed": 71
      },
      "species": "Bubble Frog Pokémon",
      "description": "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
      "evolution": { "next": [["657", "Level 16"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "7 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Protean", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/656.png",
        "thumbnail": "src/assets/thumbnails/656.png",
        "hires": "src/assets/hires/656.png"
      }
    },
    {
      "id": 657,
      "name": {
        "english": "Frogadier",
        "japanese": "ゲコガシラ",
        "chinese": "呱头蛙",
        "french": "Croâporal"
      },
      "type": ["Water"],
      "base": {
        "HP": 54,
        "Attack": 63,
        "Defense": 52,
        "Sp. Attack": 83,
        "Sp. Defense": 56,
        "Speed": 97
      },
      "species": "Bubble Frog Pokémon",
      "description": "Its swiftness is unparalleled. It can scale a tower of more than 2,000 feet in a minute’s time.",
      "evolution": { "prev": ["656", "Level 16"], "next": [["658", "Level 36"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "10.9 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Protean", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/657.png",
        "thumbnail": "src/assets/thumbnails/657.png",
        "hires": "src/assets/hires/657.png"
      }
    },
    {
      "id": 658,
      "name": {
        "english": "Greninja",
        "japanese": "ゲッコウガ",
        "chinese": "甲贺忍蛙",
        "french": "Amphinobi"
      },
      "type": ["Water", "Dark"],
      "base": {
        "HP": 72,
        "Attack": 95,
        "Defense": 67,
        "Sp. Attack": 103,
        "Sp. Defense": 71,
        "Speed": 122
      },
      "species": "Ninja Pokémon",
      "description": "It appears and vanishes with a ninja’s grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.",
      "evolution": { "prev": ["657", "Level 36"] },
      "profile": {
        "height": "1.5 m",
        "weight": "40 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Torrent", "false"],
          ["Protean", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/658.png",
        "thumbnail": "src/assets/thumbnails/658.png",
        "hires": "src/assets/hires/658.png"
      }
    },
    {
      "id": 659,
      "name": {
        "english": "Bunnelby",
        "japanese": "ホルビー",
        "chinese": "掘掘兔",
        "french": "Sapereau"
      },
      "type": ["Normal"],
      "base": {
        "HP": 38,
        "Attack": 36,
        "Defense": 38,
        "Sp. Attack": 32,
        "Sp. Defense": 36,
        "Speed": 57
      },
      "species": "Digging Pokémon",
      "description": "It has ears like shovels. Digging holes strengthens its ears so much that they can sever thick roots effortlessly.",
      "evolution": { "next": [["660", "Level 20"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "5 kg",
        "egg": ["Field"],
        "ability": [
          ["Pickup", "false"],
          ["Cheek Pouch", "false"],
          ["Huge Power", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/659.png",
        "thumbnail": "src/assets/thumbnails/659.png",
        "hires": "src/assets/hires/659.png"
      }
    },
    {
      "id": 660,
      "name": {
        "english": "Diggersby",
        "japanese": "ホルード",
        "chinese": "掘地兔",
        "french": "Excavarenne"
      },
      "type": ["Normal", "Ground"],
      "base": {
        "HP": 85,
        "Attack": 56,
        "Defense": 77,
        "Sp. Attack": 50,
        "Sp. Defense": 77,
        "Speed": 78
      },
      "species": "Digging Pokémon",
      "description": "As powerful as an excavator, its ears can reduce dense bedrock to rubble. When it’s finished digging, it lounges lazily.",
      "evolution": { "prev": ["659", "Level 20"] },
      "profile": {
        "height": "1 m",
        "weight": "42.4 kg",
        "egg": ["Field"],
        "ability": [
          ["Pickup", "false"],
          ["Cheek Pouch", "false"],
          ["Huge Power", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/660.png",
        "thumbnail": "src/assets/thumbnails/660.png",
        "hires": "src/assets/hires/660.png"
      }
    },
    {
      "id": 661,
      "name": {
        "english": "Fletchling",
        "japanese": "ヤヤコマ",
        "chinese": "小箭雀",
        "french": "Passerouge"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 45,
        "Attack": 50,
        "Defense": 43,
        "Sp. Attack": 40,
        "Sp. Defense": 38,
        "Speed": 62
      },
      "species": "Tiny Robin Pokémon",
      "description": "Its body is always warm. Trainers who live in cold areas apparently sleep with it in their bed.",
      "evolution": { "next": [["662", "Level 17"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "1.7 kg",
        "egg": ["Flying"],
        "ability": [
          ["Big Pecks", "false"],
          ["Gale Wings", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/661.png",
        "thumbnail": "src/assets/thumbnails/661.png",
        "hires": "src/assets/hires/661.png"
      }
    },
    {
      "id": 662,
      "name": {
        "english": "Fletchinder",
        "japanese": "ヒノヤコマ",
        "chinese": "火箭雀",
        "french": "Braisillon"
      },
      "type": ["Fire", "Flying"],
      "base": {
        "HP": 62,
        "Attack": 73,
        "Defense": 55,
        "Sp. Attack": 56,
        "Sp. Defense": 52,
        "Speed": 84
      },
      "species": "Ember Pokémon",
      "description": "Its speed right after takeoff already puts it in the top speed class of all bird Pokémon.",
      "evolution": { "prev": ["661", "Level 17"], "next": [["663", "Level 35"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "16 kg",
        "egg": ["Flying"],
        "ability": [
          ["Flame Body", "false"],
          ["Gale Wings", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/662.png",
        "thumbnail": "src/assets/thumbnails/662.png",
        "hires": "src/assets/hires/662.png"
      }
    },
    {
      "id": 663,
      "name": {
        "english": "Talonflame",
        "japanese": "ファイアロー",
        "chinese": "烈箭鹰",
        "french": "Flambusard"
      },
      "type": ["Fire", "Flying"],
      "base": {
        "HP": 78,
        "Attack": 81,
        "Defense": 71,
        "Sp. Attack": 74,
        "Sp. Defense": 69,
        "Speed": 126
      },
      "species": "Scorching Pokémon",
      "description": "Bird Pokémon make up most of its diet. It approaches at high speeds and smacks them down to the ground with its powerful kick.",
      "evolution": { "prev": ["662", "Level 35"] },
      "profile": {
        "height": "1.2 m",
        "weight": "24.5 kg",
        "egg": ["Flying"],
        "ability": [
          ["Flame Body", "false"],
          ["Gale Wings", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/663.png",
        "thumbnail": "src/assets/thumbnails/663.png",
        "hires": "src/assets/hires/663.png"
      }
    },
    {
      "id": 664,
      "name": {
        "english": "Scatterbug",
        "japanese": "コフキムシ",
        "chinese": "粉蝶虫",
        "french": "Lépidonille"
      },
      "type": ["Bug"],
      "base": {
        "HP": 38,
        "Attack": 35,
        "Defense": 40,
        "Sp. Attack": 27,
        "Sp. Defense": 25,
        "Speed": 35
      },
      "species": "Scatterdust Pokémon",
      "description": "The powder that covers its body regulates its temperature, so it can live in any region or climate.",
      "evolution": { "next": [["665", "Level 9"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "2.5 kg",
        "egg": ["Bug"],
        "ability": [
          ["Shield Dust", "false"],
          ["Compound Eyes", "false"],
          ["Friend Guard", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/664.png",
        "thumbnail": "src/assets/thumbnails/664.png",
        "hires": "src/assets/hires/664.png"
      }
    },
    {
      "id": 665,
      "name": {
        "english": "Spewpa",
        "japanese": "コフーライ",
        "chinese": "粉蝶蛹",
        "french": "Pérégrain"
      },
      "type": ["Bug"],
      "base": {
        "HP": 45,
        "Attack": 22,
        "Defense": 60,
        "Sp. Attack": 27,
        "Sp. Defense": 30,
        "Speed": 29
      },
      "species": "Scatterdust Pokémon",
      "description": "The beaks of bird Pokémon can’t begin to scratch its stalwart body. To defend itself, it spews powder.",
      "evolution": { "prev": ["664", "Level 9"], "next": [["666", "Level 12"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "8.4 kg",
        "egg": ["Bug"],
        "ability": [
          ["Shed Skin", "false"],
          ["Friend Guard", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/665.png",
        "thumbnail": "src/assets/thumbnails/665.png",
        "hires": "src/assets/hires/665.png"
      }
    },
    {
      "id": 666,
      "name": {
        "english": "Vivillon",
        "japanese": "ビビヨン",
        "chinese": "彩粉蝶",
        "french": "Prismillon"
      },
      "type": ["Bug", "Flying"],
      "base": {
        "HP": 80,
        "Attack": 52,
        "Defense": 50,
        "Sp. Attack": 90,
        "Sp. Defense": 50,
        "Speed": 89
      },
      "species": "Scale Pokémon",
      "description": "The patterns on this Pokémon’s wings depend on the climate and topography of its habitat. It scatters colorful scales.",
      "evolution": { "prev": ["665", "Level 12"] },
      "profile": {
        "height": "1.2 m",
        "weight": "17 kg",
        "egg": ["Bug"],
        "ability": [
          ["Shield Dust", "false"],
          ["Compound Eyes", "false"],
          ["Friend Guard", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/666.png",
        "thumbnail": "src/assets/thumbnails/666.png",
        "hires": "src/assets/hires/666.png"
      }
    },
    {
      "id": 667,
      "name": {
        "english": "Litleo",
        "japanese": "シシコ",
        "chinese": "小狮狮",
        "french": "Hélionceau"
      },
      "type": ["Fire", "Normal"],
      "base": {
        "HP": 62,
        "Attack": 50,
        "Defense": 58,
        "Sp. Attack": 73,
        "Sp. Defense": 54,
        "Speed": 72
      },
      "species": "Lion Cub Pokémon",
      "description": "This hot-blooded Pokémon is filled with curiosity. When it gets angry or starts fighting, its short mane gets hot.",
      "evolution": { "next": [["668", "Level 35"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "13.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Rivalry", "false"],
          ["Unnerve", "false"],
          ["Moxie", "true"]
        ],
        "gender": "12.5:87.5"
      },
      "image": {
        "sprite": "src/assets/sprites/667.png",
        "thumbnail": "src/assets/thumbnails/667.png",
        "hires": "src/assets/hires/667.png"
      }
    },
    {
      "id": 668,
      "name": {
        "english": "Pyroar",
        "japanese": "カエンジシ",
        "chinese": "火炎狮",
        "french": "Némélios"
      },
      "type": ["Fire", "Normal"],
      "base": {
        "HP": 86,
        "Attack": 68,
        "Defense": 72,
        "Sp. Attack": 109,
        "Sp. Defense": 66,
        "Speed": 106
      },
      "species": "Royal Pokémon",
      "description": "The temperature of its breath is over 10,000 degrees Fahrenheit, but Pyroar doesn’t use it on its prey. This Pokémon prefers to eat raw meat.",
      "evolution": { "prev": ["667", "Level 35"] },
      "profile": {
        "height": "1.5 m",
        "weight": "81.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Rivalry", "false"],
          ["Unnerve", "false"],
          ["Moxie", "true"]
        ],
        "gender": "12.5:87.5"
      },
      "image": {
        "sprite": "src/assets/sprites/668.png",
        "thumbnail": "src/assets/thumbnails/668.png",
        "hires": "src/assets/hires/668.png"
      }
    },
    {
      "id": 669,
      "name": {
        "english": "Flabébé",
        "japanese": "フラベベ",
        "chinese": "花蓓蓓",
        "french": "Flabébé"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 44,
        "Attack": 38,
        "Defense": 39,
        "Sp. Attack": 61,
        "Sp. Defense": 79,
        "Speed": 42
      },
      "species": "Single Bloom Pokémon",
      "description": "Flabébé wears a crown made from pollen it’s collected from its flower. The crown has hidden healing properties.",
      "evolution": { "next": [["670", "Level 19"]] },
      "profile": {
        "height": "0.1 m",
        "weight": "0.1 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Flower Veil", "false"],
          ["Symbiosis", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/669.png",
        "thumbnail": "src/assets/thumbnails/669.png",
        "hires": "src/assets/hires/669.png"
      }
    },
    {
      "id": 670,
      "name": {
        "english": "Floette",
        "japanese": "フラエッテ",
        "chinese": "花叶蒂",
        "french": "FLOETTE"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 54,
        "Attack": 45,
        "Defense": 47,
        "Sp. Attack": 75,
        "Sp. Defense": 98,
        "Speed": 52
      },
      "species": "Single Bloom Pokémon",
      "description": "It gives its own power to flowers, pouring its heart into caring for them. Floette never forgives anyone who messes up a flower bed.",
      "evolution": {
        "prev": ["669", "Level 19"],
        "next": [["671", "use Shiny Stone"]]
      },
      "profile": {
        "height": "0.2 m",
        "weight": "0.9 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Flower Veil", "false"],
          ["Symbiosis", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/670.png",
        "thumbnail": "src/assets/thumbnails/670.png",
        "hires": "src/assets/hires/670.png"
      }
    },
    {
      "id": 671,
      "name": {
        "english": "Florges",
        "japanese": "フラージェス",
        "chinese": "花洁夫人",
        "french": "Florges"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 78,
        "Attack": 65,
        "Defense": 68,
        "Sp. Attack": 112,
        "Sp. Defense": 154,
        "Speed": 75
      },
      "species": "Garden Pokémon",
      "description": "Its life can span several hundred years. It’s said to devote its entire life to protecting gardens.",
      "evolution": { "prev": ["670", "use Shiny Stone"] },
      "profile": {
        "height": "1.1 m",
        "weight": "10 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Flower Veil", "false"],
          ["Symbiosis", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/671.png",
        "thumbnail": "src/assets/thumbnails/671.png",
        "hires": "src/assets/hires/671.png"
      }
    },
    {
      "id": 672,
      "name": {
        "english": "Skiddo",
        "japanese": "メェークル",
        "chinese": "坐骑小羊",
        "french": "Cabriolaine"
      },
      "type": ["Grass"],
      "base": {
        "HP": 66,
        "Attack": 65,
        "Defense": 48,
        "Sp. Attack": 62,
        "Sp. Defense": 57,
        "Speed": 52
      },
      "species": "Mount Pokémon",
      "description": "If it has sunshine and water, it doesn’t need to eat, because it can generate energy from the leaves on its back.",
      "evolution": { "next": [["673", "Level 32"]] },
      "profile": {
        "height": "0.9 m",
        "weight": "31 kg",
        "egg": ["Field"],
        "ability": [
          ["Sap Sipper", "false"],
          ["Grass Pelt", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/672.png",
        "thumbnail": "src/assets/thumbnails/672.png",
        "hires": "src/assets/hires/672.png"
      }
    },
    {
      "id": 673,
      "name": {
        "english": "Gogoat",
        "japanese": "ゴーゴート",
        "chinese": "坐骑山羊",
        "french": "Chevroum"
      },
      "type": ["Grass"],
      "base": {
        "HP": 123,
        "Attack": 100,
        "Defense": 62,
        "Sp. Attack": 97,
        "Sp. Defense": 81,
        "Speed": 68
      },
      "species": "Mount Pokémon",
      "description": "They inhabit mountainous regions. The leader of the herd is decided by a battle of clashing horns.",
      "evolution": { "prev": ["672", "Level 32"] },
      "profile": {
        "height": "1.7 m",
        "weight": "91 kg",
        "egg": ["Field"],
        "ability": [
          ["Sap Sipper", "false"],
          ["Grass Pelt", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/673.png",
        "thumbnail": "src/assets/thumbnails/673.png",
        "hires": "src/assets/hires/673.png"
      }
    },
    {
      "id": 674,
      "name": {
        "english": "Pancham",
        "japanese": "ヤンチャム",
        "chinese": "顽皮熊猫",
        "french": "Pandespiègle"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 67,
        "Attack": 82,
        "Defense": 62,
        "Sp. Attack": 46,
        "Sp. Defense": 48,
        "Speed": 43
      },
      "species": "Playful Pokémon",
      "description": "It’s desperate to intimidate its opponents. Be nice and pretend to be scared if you catch it glaring at you intensely.",
      "evolution": { "next": [["675", "Level 32, Dark type Pokémon in party"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "8 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Iron Fist", "false"],
          ["Mold Breaker", "false"],
          ["Scrappy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/674.png",
        "thumbnail": "src/assets/thumbnails/674.png",
        "hires": "src/assets/hires/674.png"
      }
    },
    {
      "id": 675,
      "name": {
        "english": "Pangoro",
        "japanese": "ゴロンダ",
        "chinese": "流氓熊猫",
        "french": "Pandarbare"
      },
      "type": ["Fighting", "Dark"],
      "base": {
        "HP": 95,
        "Attack": 124,
        "Defense": 78,
        "Sp. Attack": 69,
        "Sp. Defense": 71,
        "Speed": 58
      },
      "species": "Daunting Pokémon",
      "description": "Pangoro is the type to talk with its fists. It doesn’t say much as it pummels opponents with enough force to send a dump truck flying.",
      "evolution": { "prev": ["674", "Level 32, Dark type Pokémon in party"] },
      "profile": {
        "height": "2.1 m",
        "weight": "136 kg",
        "egg": ["Field", "Human-Like"],
        "ability": [
          ["Iron Fist", "false"],
          ["Mold Breaker", "false"],
          ["Scrappy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/675.png",
        "thumbnail": "src/assets/thumbnails/675.png",
        "hires": "src/assets/hires/675.png"
      }
    },
    {
      "id": 676,
      "name": {
        "english": "Furfrou",
        "japanese": "トリミアン",
        "chinese": "多丽米亚",
        "french": "Couafarel"
      },
      "type": ["Normal"],
      "base": {
        "HP": 75,
        "Attack": 80,
        "Defense": 60,
        "Sp. Attack": 65,
        "Sp. Defense": 90,
        "Speed": 102
      },
      "species": "Poodle Pokémon",
      "description": "Left alone, its fur will grow longer and longer, but it will only allow someone it trusts to cut it.",
      "evolution": {},
      "profile": {
        "height": "1.2 m",
        "weight": "28 kg",
        "egg": ["Field"],
        "ability": [["Fur Coat", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/676.png",
        "thumbnail": "src/assets/thumbnails/676.png",
        "hires": "src/assets/hires/676.png"
      }
    },
    {
      "id": 677,
      "name": {
        "english": "Espurr",
        "japanese": "ニャスパー",
        "chinese": "妙喵",
        "french": "Psystigri"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 62,
        "Attack": 48,
        "Defense": 54,
        "Sp. Attack": 63,
        "Sp. Defense": 60,
        "Speed": 68
      },
      "species": "Restraint Pokémon",
      "description": "It has enough psychic energy to blast everything within 300 feet of itself, but it has no control over its power.",
      "evolution": { "next": [["678", "Level 25"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "3.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Keen Eye", "false"],
          ["Infiltrator", "false"],
          ["Own Tempo", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/677.png",
        "thumbnail": "src/assets/thumbnails/677.png",
        "hires": "src/assets/hires/677.png"
      }
    },
    {
      "id": 678,
      "name": {
        "english": "Meowstic",
        "japanese": "ニャオニクス",
        "chinese": "超能妙喵",
        "french": "Mistigrix"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 74,
        "Attack": 48,
        "Defense": 76,
        "Sp. Attack": 83,
        "Sp. Defense": 81,
        "Speed": 104
      },
      "species": "Constraint Pokémon",
      "description": "The eyeball patterns on the interior of its ears emit psychic energy. It keeps the patterns tightly covered because that power is too immense.",
      "evolution": { "prev": ["677", "Level 25"] },
      "profile": {
        "height": "0.6 m",
        "weight": "8.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Keen Eye", "false"],
          ["Infiltrator", "false"],
          ["Prankster", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/678.png",
        "thumbnail": "src/assets/thumbnails/678.png",
        "hires": "src/assets/hires/678.png"
      }
    },
    {
      "id": 679,
      "name": {
        "english": "Honedge",
        "japanese": "ヒトツキ",
        "chinese": "独剑鞘",
        "french": "Monorpale"
      },
      "type": ["Steel", "Ghost"],
      "base": {
        "HP": 45,
        "Attack": 80,
        "Defense": 100,
        "Sp. Attack": 35,
        "Sp. Defense": 37,
        "Speed": 28
      },
      "species": "Sword Pokémon",
      "description": "If anyone dares to grab its hilt, it wraps a blue cloth around that person’s arm and drains that person’s life energy completely.",
      "evolution": { "next": [["680", "Level 35"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "2 kg",
        "egg": ["Mineral"],
        "ability": [["No Guard", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/679.png",
        "thumbnail": "src/assets/thumbnails/679.png",
        "hires": "src/assets/hires/679.png"
      }
    },
    {
      "id": 680,
      "name": {
        "english": "Doublade",
        "japanese": "ニダンギル",
        "chinese": "双剑鞘",
        "french": "Dimoclès"
      },
      "type": ["Steel", "Ghost"],
      "base": {
        "HP": 59,
        "Attack": 110,
        "Defense": 150,
        "Sp. Attack": 45,
        "Sp. Defense": 49,
        "Speed": 35
      },
      "species": "Sword Pokémon",
      "description": "The complex attack patterns of its two swords are unstoppable, even for an opponent greatly accomplished at swordplay.",
      "evolution": {
        "prev": ["679", "Level 35"],
        "next": [["681", "use Dusk Stone"]]
      },
      "profile": {
        "height": "0.8 m",
        "weight": "4.5 kg",
        "egg": ["Mineral"],
        "ability": [["No Guard", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/680.png",
        "thumbnail": "src/assets/thumbnails/680.png",
        "hires": "src/assets/hires/680.png"
      }
    },
    {
      "id": 681,
      "name": {
        "english": "Aegislash",
        "japanese": "ギルガルド",
        "chinese": "坚盾剑怪",
        "french": "Exagide"
      },
      "type": ["Steel", "Ghost"],
      "base": {
        "HP": 60,
        "Attack": 50,
        "Defense": 150,
        "Sp. Attack": 50,
        "Sp. Defense": 150,
        "Speed": 60
      },
      "species": "Royal Sword Pokémon",
      "description": "Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king.",
      "evolution": { "prev": ["680", "use Dusk Stone"] },
      "profile": {
        "height": "1.7 m",
        "weight": "53 kg",
        "egg": ["Mineral"],
        "ability": [["Stance Change", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/681.png",
        "thumbnail": "src/assets/thumbnails/681.png",
        "hires": "src/assets/hires/681.png"
      }
    },
    {
      "id": 682,
      "name": {
        "english": "Spritzee",
        "japanese": "シュシュプ",
        "chinese": "粉香香",
        "french": "Fluvetin"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 78,
        "Attack": 52,
        "Defense": 60,
        "Sp. Attack": 63,
        "Sp. Defense": 65,
        "Speed": 23
      },
      "species": "Perfume Pokémon",
      "description": "In the past, rather than using perfume, royal ladies carried a Spritzee that would waft a fragrance they liked.",
      "evolution": { "next": [["683", "trade holding Sachet"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "0.5 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Healer", "false"],
          ["Aroma Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/682.png",
        "thumbnail": "src/assets/thumbnails/682.png",
        "hires": "src/assets/hires/682.png"
      }
    },
    {
      "id": 683,
      "name": {
        "english": "Aromatisse",
        "japanese": "フレフワン",
        "chinese": "芳香精",
        "french": "Cocotine"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 101,
        "Attack": 72,
        "Defense": 72,
        "Sp. Attack": 99,
        "Sp. Defense": 89,
        "Speed": 29
      },
      "species": "Fragrance Pokémon",
      "description": "Its scent is so overpowering that, unless a Trainer happens to really enjoy the smell, he or she will have a hard time walking alongside it.",
      "evolution": { "prev": ["682", "trade holding Sachet"] },
      "profile": {
        "height": "0.8 m",
        "weight": "15.5 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Healer", "false"],
          ["Aroma Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/683.png",
        "thumbnail": "src/assets/thumbnails/683.png",
        "hires": "src/assets/hires/683.png"
      }
    },
    {
      "id": 684,
      "name": {
        "english": "Swirlix",
        "japanese": "ペロッパフ",
        "chinese": "绵绵泡芙",
        "french": "Sucroquin"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 62,
        "Attack": 48,
        "Defense": 66,
        "Sp. Attack": 59,
        "Sp. Defense": 57,
        "Speed": 49
      },
      "species": "Cotton Candy Pokémon",
      "description": "Because it eats nothing but sweets, its fur is as sticky sweet as cotton candy.",
      "evolution": { "next": [["685", "trade holding Whipped Dream"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "3.5 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Sweet Veil", "false"],
          ["Unburden", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/684.png",
        "thumbnail": "src/assets/thumbnails/684.png",
        "hires": "src/assets/hires/684.png"
      }
    },
    {
      "id": 685,
      "name": {
        "english": "Slurpuff",
        "japanese": "ペロリーム",
        "chinese": "胖甜妮",
        "french": "Cupcanaille"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 82,
        "Attack": 80,
        "Defense": 86,
        "Sp. Attack": 85,
        "Sp. Defense": 75,
        "Speed": 72
      },
      "species": "Meringue Pokémon",
      "description": "Its sense of smell is 100 million times better than a human’s, so even the faintest scent tells it about everything in the area. It’s like it can see with its nose!",
      "evolution": { "prev": ["684", "trade holding Whipped Dream"] },
      "profile": {
        "height": "0.8 m",
        "weight": "5 kg",
        "egg": ["Fairy"],
        "ability": [
          ["Sweet Veil", "false"],
          ["Unburden", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/685.png",
        "thumbnail": "src/assets/thumbnails/685.png",
        "hires": "src/assets/hires/685.png"
      }
    },
    {
      "id": 686,
      "name": {
        "english": "Inkay",
        "japanese": "マーイーカ",
        "chinese": "好啦鱿",
        "french": "Sepiatop"
      },
      "type": ["Dark", "Psychic"],
      "base": {
        "HP": 53,
        "Attack": 54,
        "Defense": 53,
        "Sp. Attack": 37,
        "Sp. Defense": 46,
        "Speed": 45
      },
      "species": "Revolving Pokémon",
      "description": "When exchanging information with others of its kind, it flashes the light-emitting spots on its body in a complex rhythm.",
      "evolution": { "next": [["687", "Level 30, holding console upside down"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "3.5 kg",
        "egg": ["Water 1", "Water 2"],
        "ability": [
          ["Contrary", "false"],
          ["Suction Cups", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/686.png",
        "thumbnail": "src/assets/thumbnails/686.png",
        "hires": "src/assets/hires/686.png"
      }
    },
    {
      "id": 687,
      "name": {
        "english": "Malamar",
        "japanese": "カラマネロ",
        "chinese": "乌贼王",
        "french": "Sepiatroce"
      },
      "type": ["Dark", "Psychic"],
      "base": {
        "HP": 86,
        "Attack": 92,
        "Defense": 88,
        "Sp. Attack": 68,
        "Sp. Defense": 75,
        "Speed": 73
      },
      "species": "Overturning Pokémon",
      "description": "It flashes the pattern on its torso to control its prey and draw them in. The edges of its fins are supremely sharp.",
      "evolution": { "prev": ["686", "Level 30, holding console upside down"] },
      "profile": {
        "height": "1.5 m",
        "weight": "47 kg",
        "egg": ["Water 1", "Water 2"],
        "ability": [
          ["Contrary", "false"],
          ["Suction Cups", "false"],
          ["Infiltrator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/687.png",
        "thumbnail": "src/assets/thumbnails/687.png",
        "hires": "src/assets/hires/687.png"
      }
    },
    {
      "id": 688,
      "name": {
        "english": "Binacle",
        "japanese": "カメテテ",
        "chinese": "龟脚脚",
        "french": "Opermine"
      },
      "type": ["Rock", "Water"],
      "base": {
        "HP": 42,
        "Attack": 52,
        "Defense": 67,
        "Sp. Attack": 39,
        "Sp. Defense": 56,
        "Speed": 50
      },
      "species": "Two-Handed Pokémon",
      "description": "They stretch and then contract, yanking their rocks along with them in bold hops. They eat seaweed that washes up on the shoreline.",
      "evolution": { "next": [["689", "Level 39"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "31 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Tough Claws", "false"],
          ["Sniper", "false"],
          ["Pickpocket", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/688.png",
        "thumbnail": "src/assets/thumbnails/688.png",
        "hires": "src/assets/hires/688.png"
      }
    },
    {
      "id": 689,
      "name": {
        "english": "Barbaracle",
        "japanese": "ガメノデス",
        "chinese": "龟足巨铠",
        "french": "Golgopathe"
      },
      "type": ["Rock", "Water"],
      "base": {
        "HP": 72,
        "Attack": 105,
        "Defense": 115,
        "Sp. Attack": 54,
        "Sp. Defense": 86,
        "Speed": 68
      },
      "species": "Collective Pokémon",
      "description": "Barbaracle’s legs and hands have minds of their own, and they will move independently. But they usually follow the head’s orders.",
      "evolution": { "prev": ["688", "Level 39"] },
      "profile": {
        "height": "1.3 m",
        "weight": "96 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Tough Claws", "false"],
          ["Sniper", "false"],
          ["Pickpocket", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/689.png",
        "thumbnail": "src/assets/thumbnails/689.png",
        "hires": "src/assets/hires/689.png"
      }
    },
    {
      "id": 690,
      "name": {
        "english": "Skrelp",
        "japanese": "クズモー",
        "chinese": "垃垃藻",
        "french": "Venalgue"
      },
      "type": ["Poison", "Water"],
      "base": {
        "HP": 50,
        "Attack": 60,
        "Defense": 60,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 30
      },
      "species": "Mock Kelp Pokémon",
      "description": "It’s not good at swimming, so it clings to the seaweed. In the Alola region, it’s often found near Dhelmise.",
      "evolution": { "next": [["691", "Level 48"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "7.3 kg",
        "egg": ["Water 1", "Dragon"],
        "ability": [
          ["Poison Point", "false"],
          ["Poison Touch", "false"],
          ["Adaptability", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/690.png",
        "thumbnail": "src/assets/thumbnails/690.png",
        "hires": "src/assets/hires/690.png"
      }
    },
    {
      "id": 691,
      "name": {
        "english": "Dragalge",
        "japanese": "ドラミドロ",
        "chinese": "毒藻龙",
        "french": "Kravarech"
      },
      "type": ["Poison", "Dragon"],
      "base": {
        "HP": 65,
        "Attack": 75,
        "Defense": 90,
        "Sp. Attack": 97,
        "Sp. Defense": 123,
        "Speed": 44
      },
      "species": "Mock Kelp Pokémon",
      "description": "It blends in with seaweed to ambush its prey and then takes them down with a poisonous liquid strong enough to melt metal.",
      "evolution": { "prev": ["690", "Level 48"] },
      "profile": {
        "height": "1.8 m",
        "weight": "81.5 kg",
        "egg": ["Water 1", "Dragon"],
        "ability": [
          ["Poison Point", "false"],
          ["Poison Touch", "false"],
          ["Adaptability", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/691.png",
        "thumbnail": "src/assets/thumbnails/691.png",
        "hires": "src/assets/hires/691.png"
      }
    },
    {
      "id": 692,
      "name": {
        "english": "Clauncher",
        "japanese": "ウデッポウ",
        "chinese": "铁臂枪虾",
        "french": "Flingouste"
      },
      "type": ["Water"],
      "base": {
        "HP": 50,
        "Attack": 53,
        "Defense": 62,
        "Sp. Attack": 58,
        "Sp. Defense": 63,
        "Speed": 44
      },
      "species": "Water Gun Pokémon",
      "description": "It moves around by jetting water from its right pincer. It has a poor sense of balance, so it’s terrible at swimming straight.",
      "evolution": { "next": [["693", "Level 37"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "8.3 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [["Mega Launcher", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/692.png",
        "thumbnail": "src/assets/thumbnails/692.png",
        "hires": "src/assets/hires/692.png"
      }
    },
    {
      "id": 693,
      "name": {
        "english": "Clawitzer",
        "japanese": "ブロスター",
        "chinese": "钢炮臂虾",
        "french": "Gamblast"
      },
      "type": ["Water"],
      "base": {
        "HP": 71,
        "Attack": 73,
        "Defense": 88,
        "Sp. Attack": 120,
        "Sp. Defense": 89,
        "Speed": 59
      },
      "species": "Howitzer Pokémon",
      "description": "Its right arm is packed with meat. When its pincer falls off, it’s exported to be used as a cooking ingredient.",
      "evolution": { "prev": ["692", "Level 37"] },
      "profile": {
        "height": "1.3 m",
        "weight": "35.3 kg",
        "egg": ["Water 1", "Water 3"],
        "ability": [["Mega Launcher", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/693.png",
        "thumbnail": "src/assets/thumbnails/693.png",
        "hires": "src/assets/hires/693.png"
      }
    },
    {
      "id": 694,
      "name": {
        "english": "Helioptile",
        "japanese": "エリキテル",
        "chinese": "伞电蜥",
        "french": "Galvaran"
      },
      "type": ["Electric", "Normal"],
      "base": {
        "HP": 44,
        "Attack": 38,
        "Defense": 33,
        "Sp. Attack": 61,
        "Sp. Defense": 43,
        "Speed": 70
      },
      "species": "Generator Pokémon",
      "description": "The frills on either side of its head have cells that generate electricity when exposed to sunlight.",
      "evolution": { "next": [["695", "use Sun Stone"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "6 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Dry Skin", "false"],
          ["Sand Veil", "false"],
          ["Solar Power", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/694.png",
        "thumbnail": "src/assets/thumbnails/694.png",
        "hires": "src/assets/hires/694.png"
      }
    },
    {
      "id": 695,
      "name": {
        "english": "Heliolisk",
        "japanese": "エレザード",
        "chinese": "光电伞蜥",
        "french": "Iguolta"
      },
      "type": ["Electric", "Normal"],
      "base": {
        "HP": 62,
        "Attack": 55,
        "Defense": 52,
        "Sp. Attack": 109,
        "Sp. Defense": 94,
        "Speed": 109
      },
      "species": "Generator Pokémon",
      "description": "It stimulates its muscles with electricity, boosting the strength in its legs and enabling it to run 100 yards in five seconds.",
      "evolution": { "prev": ["694", "use Sun Stone"] },
      "profile": {
        "height": "1 m",
        "weight": "21 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Dry Skin", "false"],
          ["Sand Veil", "false"],
          ["Solar Power", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/695.png",
        "thumbnail": "src/assets/thumbnails/695.png",
        "hires": "src/assets/hires/695.png"
      }
    },
    {
      "id": 696,
      "name": {
        "english": "Tyrunt",
        "japanese": "チゴラス",
        "chinese": "宝宝暴龙",
        "french": "Ptyranidur"
      },
      "type": ["Rock", "Dragon"],
      "base": {
        "HP": 58,
        "Attack": 89,
        "Defense": 77,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 48
      },
      "species": "Royal Heir Pokémon",
      "description": "Tyrunt is spoiled and selfish. It may just be trying to frolic, but sometimes the ones it’s trying to frolic with are gravely injured.",
      "evolution": { "next": [["697", "Level 39, Daytime"]] },
      "profile": {
        "height": "0.8 m",
        "weight": "26 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Strong Jaw", "false"],
          ["Sturdy", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/696.png",
        "thumbnail": "src/assets/thumbnails/696.png",
        "hires": "src/assets/hires/696.png"
      }
    },
    {
      "id": 697,
      "name": {
        "english": "Tyrantrum",
        "japanese": "ガチゴラス",
        "chinese": "怪颚龙",
        "french": "Rexillius"
      },
      "type": ["Rock", "Dragon"],
      "base": {
        "HP": 82,
        "Attack": 121,
        "Defense": 119,
        "Sp. Attack": 69,
        "Sp. Defense": 59,
        "Speed": 71
      },
      "species": "Despot Pokémon",
      "description": "The king of the ancient world, it can easily crunch a car with the devastating strength of its enormous jaws.",
      "evolution": { "prev": ["696", "Level 39, Daytime"] },
      "profile": {
        "height": "2.5 m",
        "weight": "270 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Strong Jaw", "false"],
          ["Rock Head", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/697.png",
        "thumbnail": "src/assets/thumbnails/697.png",
        "hires": "src/assets/hires/697.png"
      }
    },
    {
      "id": 698,
      "name": {
        "english": "Amaura",
        "japanese": "アマルス",
        "chinese": "冰雪龙",
        "french": "Amagara"
      },
      "type": ["Rock", "Ice"],
      "base": {
        "HP": 77,
        "Attack": 59,
        "Defense": 50,
        "Sp. Attack": 67,
        "Sp. Defense": 63,
        "Speed": 46
      },
      "species": "Tundra Pokémon",
      "description": "Amaura was restored successfully, but it’s not expected to live long because of the heat of the current environment.",
      "evolution": { "next": [["699", "Level 39, Nighttime"]] },
      "profile": {
        "height": "1.3 m",
        "weight": "25.2 kg",
        "egg": ["Monster"],
        "ability": [
          ["Refrigerate", "false"],
          ["Snow Warning", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/698.png",
        "thumbnail": "src/assets/thumbnails/698.png",
        "hires": "src/assets/hires/698.png"
      }
    },
    {
      "id": 699,
      "name": {
        "english": "Aurorus",
        "japanese": "アマルルガ",
        "chinese": "冰雪巨龙",
        "french": "Dragmara"
      },
      "type": ["Rock", "Ice"],
      "base": {
        "HP": 123,
        "Attack": 77,
        "Defense": 72,
        "Sp. Attack": 99,
        "Sp. Defense": 92,
        "Speed": 58
      },
      "species": "Tundra Pokémon",
      "description": "This usually quiet and kindly Pokémon has a surface temperature of around –240 degrees Fahrenheit.",
      "evolution": { "prev": ["698", "Level 39, Nighttime"] },
      "profile": {
        "height": "2.7 m",
        "weight": "225 kg",
        "egg": ["Monster"],
        "ability": [
          ["Refrigerate", "false"],
          ["Snow Warning", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/699.png",
        "thumbnail": "src/assets/thumbnails/699.png",
        "hires": "src/assets/hires/699.png"
      }
    },
    {
      "id": 700,
      "name": {
        "english": "Sylveon",
        "japanese": "ニンフィア",
        "chinese": "仙子伊布",
        "french": "Nymphali"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 95,
        "Attack": 65,
        "Defense": 65,
        "Sp. Attack": 110,
        "Sp. Defense": 130,
        "Speed": 60
      },
      "species": "Intertwining Pokémon",
      "description": "Sylveon wraps its ribbonlike feelers around its Trainer’s arm because this touch enables it to read its Trainer’s feelings.",
      "evolution": { "prev": ["133", "High Affection, knowing Fairy move"] },
      "profile": {
        "height": "1 m",
        "weight": "23.5 kg",
        "egg": ["Field"],
        "ability": [
          ["Cute Charm", "false"],
          ["Pixilate", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/700.png",
        "thumbnail": "src/assets/thumbnails/700.png",
        "hires": "src/assets/hires/700.png"
      }
    },
    {
      "id": 701,
      "name": {
        "english": "Hawlucha",
        "japanese": "ルチャブル",
        "chinese": "摔角鹰人",
        "french": "Brutalibré"
      },
      "type": ["Fighting", "Flying"],
      "base": {
        "HP": 78,
        "Attack": 92,
        "Defense": 75,
        "Sp. Attack": 74,
        "Sp. Defense": 63,
        "Speed": 118
      },
      "species": "Wrestling Pokémon",
      "description": "In combat, Hawlucha leaps nimbly about, taking advantage of its opponents’ blind spots. It’s also skilled at using superb submission holds.",
      "evolution": {},
      "profile": {
        "height": "0.8 m",
        "weight": "21.5 kg",
        "egg": ["Human-Like"],
        "ability": [
          ["Limber", "false"],
          ["Unburden", "false"],
          ["Mold Breaker", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/701.png",
        "thumbnail": "src/assets/thumbnails/701.png",
        "hires": "src/assets/hires/701.png"
      }
    },
    {
      "id": 702,
      "name": {
        "english": "Dedenne",
        "japanese": "デデンネ",
        "chinese": "咚咚鼠",
        "french": "DEDENNE"
      },
      "type": ["Electric", "Fairy"],
      "base": {
        "HP": 67,
        "Attack": 58,
        "Defense": 57,
        "Sp. Attack": 81,
        "Sp. Defense": 67,
        "Speed": 101
      },
      "species": "Antenna Pokémon",
      "description": "Its upper whiskers are sensors that survey its surroundings. Its lower whiskers are organs that shoot electricity.",
      "evolution": {},
      "profile": {
        "height": "0.2 m",
        "weight": "2.2 kg",
        "egg": ["Field", "Fairy"],
        "ability": [
          ["Cheek Pouch", "false"],
          ["Pickup", "false"],
          ["Plus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/702.png",
        "thumbnail": "src/assets/thumbnails/702.png",
        "hires": "src/assets/hires/702.png"
      }
    },
    {
      "id": 703,
      "name": {
        "english": "Carbink",
        "japanese": "メレシー",
        "chinese": "小碎钻",
        "french": "Strassie"
      },
      "type": ["Rock", "Fairy"],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 150,
        "Sp. Attack": 50,
        "Sp. Defense": 150,
        "Speed": 50
      },
      "species": "Jewel Pokémon",
      "description": "To keep the jewels on their bodies free of tarnish, packs of Carbink use their soft manes to polish one another’s jewels.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "5.7 kg",
        "egg": ["Fairy", "Mineral"],
        "ability": [
          ["Clear Body", "false"],
          ["Sturdy", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/703.png",
        "thumbnail": "src/assets/thumbnails/703.png",
        "hires": "src/assets/hires/703.png"
      }
    },
    {
      "id": 704,
      "name": {
        "english": "Goomy",
        "japanese": "ヌメラ",
        "chinese": "黏黏宝",
        "french": "Mucuscule"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 45,
        "Attack": 50,
        "Defense": 35,
        "Sp. Attack": 55,
        "Sp. Defense": 75,
        "Speed": 40
      },
      "species": "Soft Tissue Pokémon",
      "description": "Its body is mostly water. If it dries out, it will die, so it’s always sitting with perfect stillness in the shade.",
      "evolution": { "next": [["705", "Level 40"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "2.8 kg",
        "egg": ["Dragon"],
        "ability": [
          ["Sap Sipper", "false"],
          ["Hydration", "false"],
          ["Gooey", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/704.png",
        "thumbnail": "src/assets/thumbnails/704.png",
        "hires": "src/assets/hires/704.png"
      }
    },
    {
      "id": 705,
      "name": {
        "english": "Sliggoo",
        "japanese": "ヌメイル",
        "chinese": "黏美儿",
        "french": "Colimucus"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 68,
        "Attack": 75,
        "Defense": 53,
        "Sp. Attack": 83,
        "Sp. Defense": 113,
        "Speed": 60
      },
      "species": "Soft Tissue Pokémon",
      "description": "Its entire body is covered with gooey mucus that can dissolve anything. Be sure to put gloves on if you’re going to touch it.",
      "evolution": {
        "prev": ["704", "Level 40"],
        "next": [["706", "Level 50, during rain"]]
      },
      "profile": {
        "height": "0.8 m",
        "weight": "17.5 kg",
        "egg": ["Dragon"],
        "ability": [
          ["Sap Sipper", "false"],
          ["Hydration", "false"],
          ["Gooey", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/705.png",
        "thumbnail": "src/assets/thumbnails/705.png",
        "hires": "src/assets/hires/705.png"
      }
    },
    {
      "id": 706,
      "name": {
        "english": "Goodra",
        "japanese": "ヌメルゴン",
        "chinese": "黏美龙",
        "french": "Muplodocus"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 90,
        "Attack": 100,
        "Defense": 70,
        "Sp. Attack": 110,
        "Sp. Defense": 150,
        "Speed": 80
      },
      "species": "Dragon Pokémon",
      "description": "Underneath its slimy skin is a thick layer of fat, and the combination of the two makes enemies’ attacks slide right off.",
      "evolution": { "prev": ["705", "Level 50, during rain"] },
      "profile": {
        "height": "2 m",
        "weight": "150.5 kg",
        "egg": ["Dragon"],
        "ability": [
          ["Sap Sipper", "false"],
          ["Hydration", "false"],
          ["Gooey", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/706.png",
        "thumbnail": "src/assets/thumbnails/706.png",
        "hires": "src/assets/hires/706.png"
      }
    },
    {
      "id": 707,
      "name": {
        "english": "Klefki",
        "japanese": "クレッフィ",
        "chinese": "钥圈儿",
        "french": "Trousselin"
      },
      "type": ["Steel", "Fairy"],
      "base": {
        "HP": 57,
        "Attack": 80,
        "Defense": 91,
        "Sp. Attack": 80,
        "Sp. Defense": 87,
        "Speed": 75
      },
      "species": "Key Ring Pokémon",
      "description": "Long ago it lived in mines, but once the minerals that make up its diet became scarcer, Klefki began appearing in human settlements.",
      "evolution": {},
      "profile": {
        "height": "0.2 m",
        "weight": "3 kg",
        "egg": ["Mineral"],
        "ability": [
          ["Prankster", "false"],
          ["Magician", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/707.png",
        "thumbnail": "src/assets/thumbnails/707.png",
        "hires": "src/assets/hires/707.png"
      }
    },
    {
      "id": 708,
      "name": {
        "english": "Phantump",
        "japanese": "ボクレー",
        "chinese": "小木灵",
        "french": "Brocélôme"
      },
      "type": ["Ghost", "Grass"],
      "base": {
        "HP": 43,
        "Attack": 70,
        "Defense": 48,
        "Sp. Attack": 50,
        "Sp. Defense": 60,
        "Speed": 38
      },
      "species": "Stump Pokémon",
      "description": "An unknown spirit came to lodge in a tree stump, creating this Pokémon. A cure-all can be made from an infusion of its green leaves.",
      "evolution": { "next": [["709", "Trade"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "7 kg",
        "egg": ["Grass", "Amorphous"],
        "ability": [
          ["Natural Cure", "false"],
          ["Frisk", "false"],
          ["Harvest", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/708.png",
        "thumbnail": "src/assets/thumbnails/708.png",
        "hires": "src/assets/hires/708.png"
      }
    },
    {
      "id": 709,
      "name": {
        "english": "Trevenant",
        "japanese": "オーロット",
        "chinese": "朽木妖",
        "french": "Desséliande"
      },
      "type": ["Ghost", "Grass"],
      "base": {
        "HP": 85,
        "Attack": 110,
        "Defense": 76,
        "Sp. Attack": 65,
        "Sp. Defense": 82,
        "Speed": 56
      },
      "species": "Elder Tree Pokémon",
      "description": "This Pokémon controls trees via roots stretching from its feet, and it will attack anyone that dares to ravage the forest.",
      "evolution": { "prev": ["708", "Trade"] },
      "profile": {
        "height": "1.5 m",
        "weight": "71 kg",
        "egg": ["Grass", "Amorphous"],
        "ability": [
          ["Natural Cure", "false"],
          ["Frisk", "false"],
          ["Harvest", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/709.png",
        "thumbnail": "src/assets/thumbnails/709.png",
        "hires": "src/assets/hires/709.png"
      }
    },
    {
      "id": 710,
      "name": {
        "english": "Pumpkaboo",
        "japanese": "バケッチャ",
        "chinese": "南瓜精",
        "french": "Pitrouille"
      },
      "type": ["Ghost", "Grass"],
      "base": {
        "HP": 59,
        "Attack": 66,
        "Defense": 70,
        "Sp. Attack": 44,
        "Sp. Defense": 55,
        "Speed": 41
      },
      "species": "Pumpkin Pokémon",
      "description": "It is said to carry wandering spirits to the place where they belong so they can move on.",
      "evolution": { "next": [["711", "Trade"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "5 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Pickup", "false"],
          ["Frisk", "false"],
          ["Insomnia", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/710.png",
        "thumbnail": "src/assets/thumbnails/710.png",
        "hires": "src/assets/hires/710.png"
      }
    },
    {
      "id": 711,
      "name": {
        "english": "Gourgeist",
        "japanese": "パンプジン",
        "chinese": "南瓜怪人",
        "french": "Banshitrouye"
      },
      "type": ["Ghost", "Grass"],
      "base": {
        "HP": 85,
        "Attack": 100,
        "Defense": 122,
        "Sp. Attack": 58,
        "Sp. Defense": 75,
        "Speed": 54
      },
      "species": "Pumpkin Pokémon",
      "description": "It enwraps its prey in its hairlike arms. It sings joyfully as it observes the suffering of its prey.",
      "evolution": { "prev": ["710", "Trade"] },
      "profile": {
        "height": "0.9 m",
        "weight": "12.5 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Pickup", "false"],
          ["Frisk", "false"],
          ["Insomnia", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/711.png",
        "thumbnail": "src/assets/thumbnails/711.png",
        "hires": "src/assets/hires/711.png"
      }
    },
    {
      "id": 712,
      "name": {
        "english": "Bergmite",
        "japanese": "カチコール",
        "chinese": "冰宝",
        "french": "Grelaçon"
      },
      "type": ["Ice"],
      "base": {
        "HP": 55,
        "Attack": 69,
        "Defense": 85,
        "Sp. Attack": 32,
        "Sp. Defense": 35,
        "Speed": 28
      },
      "species": "Ice Chunk Pokémon",
      "description": "Using air of -150 degrees Fahrenheit, they freeze opponents solid. They live in herds above the snow line on mountains.",
      "evolution": { "next": [["713", "Level 37"]] },
      "profile": {
        "height": "1 m",
        "weight": "99.5 kg",
        "egg": ["Monster"],
        "ability": [
          ["Own Tempo", "false"],
          ["Ice Body", "false"],
          ["Sturdy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/712.png",
        "thumbnail": "src/assets/thumbnails/712.png",
        "hires": "src/assets/hires/712.png"
      }
    },
    {
      "id": 713,
      "name": {
        "english": "Avalugg",
        "japanese": "クレベース",
        "chinese": "冰岩怪",
        "french": "Séracrawl"
      },
      "type": ["Ice"],
      "base": {
        "HP": 95,
        "Attack": 117,
        "Defense": 184,
        "Sp. Attack": 44,
        "Sp. Defense": 46,
        "Speed": 28
      },
      "species": "Iceberg Pokémon",
      "description": "The way several Bergmite huddle on its back makes it look like an aircraft carrier made of ice.",
      "evolution": { "prev": ["712", "Level 37"] },
      "profile": {
        "height": "2 m",
        "weight": "505 kg",
        "egg": ["Monster"],
        "ability": [
          ["Own Tempo", "false"],
          ["Ice Body", "false"],
          ["Sturdy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/713.png",
        "thumbnail": "src/assets/thumbnails/713.png",
        "hires": "src/assets/hires/713.png"
      }
    },
    {
      "id": 714,
      "name": {
        "english": "Noibat",
        "japanese": "オンバット",
        "chinese": "嗡蝠",
        "french": "Sonistrelle"
      },
      "type": ["Flying", "Dragon"],
      "base": {
        "HP": 40,
        "Attack": 30,
        "Defense": 35,
        "Sp. Attack": 45,
        "Sp. Defense": 40,
        "Speed": 55
      },
      "species": "Sound Wave Pokémon",
      "description": "It flies around in search of fruit to eat. It uses ultrasonic waves to detect which fruits are ripe.",
      "evolution": { "next": [["715", "Level 48"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "8 kg",
        "egg": ["Flying"],
        "ability": [
          ["Frisk", "false"],
          ["Infiltrator", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/714.png",
        "thumbnail": "src/assets/thumbnails/714.png",
        "hires": "src/assets/hires/714.png"
      }
    },
    {
      "id": 715,
      "name": {
        "english": "Noivern",
        "japanese": "オンバーン",
        "chinese": "音波龙",
        "french": "Bruyverne"
      },
      "type": ["Flying", "Dragon"],
      "base": {
        "HP": 85,
        "Attack": 70,
        "Defense": 80,
        "Sp. Attack": 97,
        "Sp. Defense": 80,
        "Speed": 123
      },
      "species": "Sound Wave Pokémon",
      "description": "This hot-blooded Pokémon attacks anything it sees with ultrasonic waves that can crush boulders.",
      "evolution": { "prev": ["714", "Level 48"] },
      "profile": {
        "height": "1.5 m",
        "weight": "85 kg",
        "egg": ["Flying"],
        "ability": [
          ["Frisk", "false"],
          ["Infiltrator", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/715.png",
        "thumbnail": "src/assets/thumbnails/715.png",
        "hires": "src/assets/hires/715.png"
      }
    },
    {
      "id": 716,
      "name": {
        "english": "Xerneas",
        "japanese": "ゼルネアス",
        "chinese": "哲尔尼亚斯",
        "french": "Xerneas"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 126,
        "Attack": 131,
        "Defense": 95,
        "Sp. Attack": 131,
        "Sp. Defense": 98,
        "Speed": 99
      },
      "species": "Life Pokémon",
      "description": "When the horns on its head shine in seven colors, it is said to be sharing everlasting life.",
      "evolution": {},
      "profile": {
        "height": "3 m",
        "weight": "215 kg",
        "egg": ["Undiscovered"],
        "ability": [["Fairy Aura", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/716.png",
        "thumbnail": "src/assets/thumbnails/716.png",
        "hires": "src/assets/hires/716.png"
      }
    },
    {
      "id": 717,
      "name": {
        "english": "Yveltal",
        "japanese": "イベルタル",
        "chinese": "伊裴尔塔尔",
        "french": "Yveltal"
      },
      "type": ["Dark", "Flying"],
      "base": {
        "HP": 126,
        "Attack": 131,
        "Defense": 95,
        "Sp. Attack": 131,
        "Sp. Defense": 98,
        "Speed": 99
      },
      "species": "Destruction Pokémon",
      "description": "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more.",
      "evolution": {},
      "profile": {
        "height": "5.8 m",
        "weight": "203 kg",
        "egg": ["Undiscovered"],
        "ability": [["Dark Aura", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/717.png",
        "thumbnail": "src/assets/thumbnails/717.png",
        "hires": "src/assets/hires/717.png"
      }
    },
    {
      "id": 718,
      "name": {
        "english": "Zygarde",
        "japanese": "ジガルデ",
        "chinese": "基格尔德",
        "french": "Zygarde"
      },
      "type": ["Dragon", "Ground"],
      "base": {
        "HP": 108,
        "Attack": 100,
        "Defense": 121,
        "Sp. Attack": 81,
        "Sp. Defense": 95,
        "Speed": 95
      },
      "species": "Order Pokémon",
      "description": "Some say it can change to an even more powerful form when battling those who threaten the ecosystem.",
      "evolution": {},
      "profile": {
        "height": "5 m",
        "weight": "305 kg",
        "egg": ["Undiscovered"],
        "ability": [["Aura Break", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/718.png",
        "thumbnail": "src/assets/thumbnails/718.png",
        "hires": "src/assets/hires/718.png"
      }
    },
    {
      "id": 719,
      "name": {
        "english": "Diancie",
        "japanese": "ディアンシー",
        "chinese": "蒂安希",
        "french": "Diancie"
      },
      "type": ["Rock", "Fairy"],
      "base": {
        "HP": 50,
        "Attack": 100,
        "Defense": 150,
        "Sp. Attack": 100,
        "Sp. Defense": 150,
        "Speed": 50
      },
      "species": "Jewel Pokémon",
      "description": "It can instantly create many diamonds by compressing the carbon in the air between its hands.",
      "evolution": {},
      "profile": {
        "height": "0.7 m",
        "weight": "8.8 kg",
        "egg": ["Undiscovered"],
        "ability": [["Clear Body", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/719.png",
        "thumbnail": "src/assets/thumbnails/719.png",
        "hires": "src/assets/hires/719.png"
      }
    },
    {
      "id": 720,
      "name": {
        "english": "Hoopa",
        "japanese": "フーパ",
        "chinese": "胡帕",
        "french": "Hoopa"
      },
      "type": ["Psychic", "Ghost"],
      "base": {
        "HP": 80,
        "Attack": 110,
        "Defense": 60,
        "Sp. Attack": 150,
        "Sp. Defense": 130,
        "Speed": 70
      },
      "species": "Mischief Pokémon",
      "description": "It is said to be able to seize anything it desires with its six rings and six huge arms. With its power sealed, it is transformed into a much smaller form.",
      "evolution": {},
      "profile": {
        "height": "0.5 m",
        "weight": "9 kg",
        "egg": ["Undiscovered"],
        "ability": [["Magician", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/720.png",
        "thumbnail": "src/assets/thumbnails/720.png",
        "hires": "src/assets/hires/720.png"
      }
    },
    {
      "id": 721,
      "name": {
        "english": "Volcanion",
        "japanese": "ボルケニオン",
        "chinese": "波尔凯尼恩",
        "french": "Volcanion"
      },
      "type": ["Fire", "Water"],
      "base": {
        "HP": 80,
        "Attack": 110,
        "Defense": 120,
        "Sp. Attack": 130,
        "Sp. Defense": 90,
        "Speed": 70
      },
      "species": "Steam Pokémon",
      "description": "It expels its internal steam from the arms on its back. It has enough power to blow away a mountain.",
      "evolution": {},
      "profile": {
        "height": "1.7 m",
        "weight": "195 kg",
        "egg": ["Undiscovered"],
        "ability": [["Water Absorb", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/721.png",
        "thumbnail": "src/assets/thumbnails/721.png",
        "hires": "src/assets/hires/721.png"
      }
    },
    {
      "id": 722,
      "name": {
        "english": "Rowlet",
        "japanese": "モクロー",
        "chinese": "木木枭",
        "french": "Brindibou"
      },
      "type": ["Grass", "Flying"],
      "base": {
        "HP": 68,
        "Attack": 55,
        "Defense": 55,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 42
      },
      "species": "Grass Quill Pokémon",
      "description": "It feels relaxed in tight, dark places and has been known to use its Trainer’s pocket or bag as a nest.",
      "evolution": { "next": [["723", "Level 17"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "1.5 kg",
        "egg": ["Flying"],
        "ability": [
          ["Overgrow", "false"],
          ["Long Reach", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/722.png",
        "thumbnail": "src/assets/thumbnails/722.png",
        "hires": "src/assets/hires/722.png"
      }
    },
    {
      "id": 723,
      "name": {
        "english": "Dartrix",
        "japanese": "フクスロー",
        "chinese": "投羽枭",
        "french": "Efflèche"
      },
      "type": ["Grass", "Flying"],
      "base": {
        "HP": 78,
        "Attack": 75,
        "Defense": 75,
        "Sp. Attack": 70,
        "Sp. Defense": 70,
        "Speed": 52
      },
      "species": "Blade Quill Pokémon",
      "description": "Supremely sensitive to the presence of others, it can detect opponents standing behind it, flinging its sharp feathers to take them out.",
      "evolution": { "prev": ["722", "Level 17"], "next": [["724", "Level 34"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "16 kg",
        "egg": ["Flying"],
        "ability": [
          ["Overgrow", "false"],
          ["Long Reach", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/723.png",
        "thumbnail": "src/assets/thumbnails/723.png",
        "hires": "src/assets/hires/723.png"
      }
    },
    {
      "id": 724,
      "name": {
        "english": "Decidueye",
        "japanese": "ジュナイパー",
        "chinese": "狙射树枭",
        "french": "Archéduc"
      },
      "type": ["Grass", "Ghost"],
      "base": {
        "HP": 78,
        "Attack": 107,
        "Defense": 75,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 70
      },
      "species": "Arrow Quill Pokémon",
      "description": "Decidueye can nock and fire an arrow at an enemy in a tenth of a second, so its battles are decided in the blink of an eye.",
      "evolution": { "prev": ["723", "Level 34"] },
      "profile": {
        "height": "1.6 m",
        "weight": "36.6 kg",
        "egg": ["Flying"],
        "ability": [
          ["Overgrow", "false"],
          ["Long Reach", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/724.png",
        "thumbnail": "src/assets/thumbnails/724.png",
        "hires": "src/assets/hires/724.png"
      }
    },
    {
      "id": 725,
      "name": {
        "english": "Litten",
        "japanese": "ニャビー",
        "chinese": "火斑喵",
        "french": "Flamiaou"
      },
      "type": ["Fire"],
      "base": {
        "HP": 45,
        "Attack": 65,
        "Defense": 40,
        "Sp. Attack": 60,
        "Sp. Defense": 40,
        "Speed": 70
      },
      "species": "Fire Cat Pokémon",
      "description": "Its coat regrows twice a year. When the time comes, Litten sets its own body on fire and burns away the old fur.",
      "evolution": { "next": [["726", "Level 17"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "4.3 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Intimidate", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/725.png",
        "thumbnail": "src/assets/thumbnails/725.png",
        "hires": "src/assets/hires/725.png"
      }
    },
    {
      "id": 726,
      "name": {
        "english": "Torracat",
        "japanese": "ニャヒート",
        "chinese": "炎热喵",
        "french": "Matoufeu"
      },
      "type": ["Fire"],
      "base": {
        "HP": 65,
        "Attack": 85,
        "Defense": 50,
        "Sp. Attack": 80,
        "Sp. Defense": 50,
        "Speed": 90
      },
      "species": "Fire Cat Pokémon",
      "description": "When its mane is standing on end, you can tell it’s feeling good. When it isn’t feeling well, its fur will lie down flat.",
      "evolution": { "prev": ["725", "Level 17"], "next": [["727", "Level 34"]] },
      "profile": {
        "height": "0.7 m",
        "weight": "25 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Intimidate", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/726.png",
        "thumbnail": "src/assets/thumbnails/726.png",
        "hires": "src/assets/hires/726.png"
      }
    },
    {
      "id": 727,
      "name": {
        "english": "Incineroar",
        "japanese": "ガオガエン",
        "chinese": "炽焰咆哮虎",
        "french": "Félinferno"
      },
      "type": ["Fire", "Dark"],
      "base": {
        "HP": 95,
        "Attack": 115,
        "Defense": 90,
        "Sp. Attack": 80,
        "Sp. Defense": 90,
        "Speed": 60
      },
      "species": "Heel Pokémon",
      "description": "When its fighting spirit is set alight, the flames around its waist become especially intense.",
      "evolution": { "prev": ["726", "Level 34"] },
      "profile": {
        "height": "1.8 m",
        "weight": "83 kg",
        "egg": ["Field"],
        "ability": [
          ["Blaze", "false"],
          ["Intimidate", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/727.png",
        "thumbnail": "src/assets/thumbnails/727.png",
        "hires": "src/assets/hires/727.png"
      }
    },
    {
      "id": 728,
      "name": {
        "english": "Popplio",
        "japanese": "アシマリ",
        "chinese": "球球海狮",
        "french": "Otaquin"
      },
      "type": ["Water"],
      "base": {
        "HP": 50,
        "Attack": 54,
        "Defense": 54,
        "Sp. Attack": 66,
        "Sp. Defense": 56,
        "Speed": 40
      },
      "species": "Sea Lion Pokémon",
      "description": "Popplio gets on top of its bouncy water balloons to jump higher. It’s quite the acrobatic fighter!",
      "evolution": { "next": [["729", "Level 17"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "7.5 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Torrent", "false"],
          ["Liquid Voice", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/728.png",
        "thumbnail": "src/assets/thumbnails/728.png",
        "hires": "src/assets/hires/728.png"
      }
    },
    {
      "id": 729,
      "name": {
        "english": "Brionne",
        "japanese": "オシャマリ",
        "chinese": "花漾海狮",
        "french": "Otarlette"
      },
      "type": ["Water"],
      "base": {
        "HP": 60,
        "Attack": 69,
        "Defense": 69,
        "Sp. Attack": 91,
        "Sp. Defense": 81,
        "Speed": 50
      },
      "species": "Pop Star Pokémon",
      "description": "It attacks by smacking its enemies with the exploding water balloons that it creates.",
      "evolution": { "prev": ["728", "Level 17"], "next": [["730", "Level 34"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "17.5 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Torrent", "false"],
          ["Liquid Voice", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/729.png",
        "thumbnail": "src/assets/thumbnails/729.png",
        "hires": "src/assets/hires/729.png"
      }
    },
    {
      "id": 730,
      "name": {
        "english": "Primarina",
        "japanese": "アシレーヌ",
        "chinese": "西狮海壬",
        "french": "Oratoria"
      },
      "type": ["Water", "Fairy"],
      "base": {
        "HP": 80,
        "Attack": 74,
        "Defense": 74,
        "Sp. Attack": 126,
        "Sp. Defense": 116,
        "Speed": 60
      },
      "species": "Soloist Pokémon",
      "description": "Also known as a songstress, it has a fantastical look on moonlit nights when it leads its colony in song.",
      "evolution": { "prev": ["729", "Level 34"] },
      "profile": {
        "height": "1.8 m",
        "weight": "44 kg",
        "egg": ["Water 1", "Field"],
        "ability": [
          ["Torrent", "false"],
          ["Liquid Voice", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/730.png",
        "thumbnail": "src/assets/thumbnails/730.png",
        "hires": "src/assets/hires/730.png"
      }
    },
    {
      "id": 731,
      "name": {
        "english": "Pikipek",
        "japanese": "ツツケラ",
        "chinese": "小笃儿",
        "french": "Picassaut"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 35,
        "Attack": 75,
        "Defense": 30,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 65
      },
      "species": "Woodpecker Pokémon",
      "description": "It may look spindly, but its neck muscles are heavy-duty. It can peck at a tree 16 times per second!",
      "evolution": { "next": [["732", "Level 14"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "1.2 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Skill Link", "false"],
          ["Pickup", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/731.png",
        "thumbnail": "src/assets/thumbnails/731.png",
        "hires": "src/assets/hires/731.png"
      }
    },
    {
      "id": 732,
      "name": {
        "english": "Trumbeak",
        "japanese": "ケララッパ",
        "chinese": "喇叭啄鸟",
        "french": "Piclairon"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 55,
        "Attack": 85,
        "Defense": 50,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 75
      },
      "species": "Bugle Beak Pokémon",
      "description": "From its mouth, it fires the seeds of berries it has eaten. The scattered seeds give rise to new plants.",
      "evolution": { "prev": ["731", "Level 14"], "next": [["733", "Level 28"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "14.8 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Skill Link", "false"],
          ["Pickup", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/732.png",
        "thumbnail": "src/assets/thumbnails/732.png",
        "hires": "src/assets/hires/732.png"
      }
    },
    {
      "id": 733,
      "name": {
        "english": "Toucannon",
        "japanese": "ドデカバシ",
        "chinese": "铳嘴大鸟",
        "french": "Bazoucan"
      },
      "type": ["Normal", "Flying"],
      "base": {
        "HP": 80,
        "Attack": 120,
        "Defense": 75,
        "Sp. Attack": 75,
        "Sp. Defense": 75,
        "Speed": 60
      },
      "species": "Cannon Pokémon",
      "description": "Known for forming harmonious couples, this Pokémon is brought to wedding ceremonies as a good luck charm.",
      "evolution": { "prev": ["732", "Level 28"] },
      "profile": {
        "height": "1.1 m",
        "weight": "26 kg",
        "egg": ["Flying"],
        "ability": [
          ["Keen Eye", "false"],
          ["Skill Link", "false"],
          ["Sheer Force", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/733.png",
        "thumbnail": "src/assets/thumbnails/733.png",
        "hires": "src/assets/hires/733.png"
      }
    },
    {
      "id": 734,
      "name": {
        "english": "Yungoos",
        "japanese": "ヤングース",
        "chinese": "猫鼬少",
        "french": "Manglouton"
      },
      "type": ["Normal"],
      "base": {
        "HP": 48,
        "Attack": 70,
        "Defense": 30,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 45
      },
      "species": "Loitering Pokémon",
      "description": "Although it will eat anything, it prefers fresh living things, so it marches down streets in search of prey.",
      "evolution": { "next": [["735", "Level 20, Daytime"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "6 kg",
        "egg": ["Field"],
        "ability": [
          ["Stakeout", "false"],
          ["Strong Jaw", "false"],
          ["Adaptability", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/734.png",
        "thumbnail": "src/assets/thumbnails/734.png",
        "hires": "src/assets/hires/734.png"
      }
    },
    {
      "id": 735,
      "name": {
        "english": "Gumshoos",
        "japanese": "デカグース",
        "chinese": "猫鼬探长",
        "french": "Argouste"
      },
      "type": ["Normal"],
      "base": {
        "HP": 88,
        "Attack": 110,
        "Defense": 60,
        "Sp. Attack": 55,
        "Sp. Defense": 60,
        "Speed": 45
      },
      "species": "Stakeout Pokémon",
      "description": "Patient by nature, this Pokémon loses control of itself and pounces when it spots its favorite meal—Rattata!",
      "evolution": { "prev": ["734", "Level 20, Daytime"] },
      "profile": {
        "height": "0.7 m",
        "weight": "14.2 kg",
        "egg": ["Field"],
        "ability": [
          ["Stakeout", "false"],
          ["Strong Jaw", "false"],
          ["Adaptability", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/735.png",
        "thumbnail": "src/assets/thumbnails/735.png",
        "hires": "src/assets/hires/735.png"
      }
    },
    {
      "id": 736,
      "name": {
        "english": "Grubbin",
        "japanese": "アゴジムシ",
        "chinese": "强颚鸡母虫",
        "french": "Larvibule"
      },
      "type": ["Bug"],
      "base": {
        "HP": 47,
        "Attack": 62,
        "Defense": 45,
        "Sp. Attack": 55,
        "Sp. Defense": 45,
        "Speed": 46
      },
      "species": "Larva Pokémon",
      "description": "It spits a sticky thread to stop opponents in their tracks, and then it grabs them in its sharp, sturdy mandibles to take them down.",
      "evolution": { "next": [["737", "Level 20"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "4.4 kg",
        "egg": ["Bug"],
        "ability": [["Swarm", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/736.png",
        "thumbnail": "src/assets/thumbnails/736.png",
        "hires": "src/assets/hires/736.png"
      }
    },
    {
      "id": 737,
      "name": {
        "english": "Charjabug",
        "japanese": "デンヂムシ",
        "chinese": "虫电宝",
        "french": "Chrysapile"
      },
      "type": ["Bug", "Electric"],
      "base": {
        "HP": 57,
        "Attack": 82,
        "Defense": 95,
        "Sp. Attack": 55,
        "Sp. Defense": 75,
        "Speed": 36
      },
      "species": "Battery Pokémon",
      "description": "Its stout shell provides excellent defense from attacks. It uses electricity on persistent opponents.",
      "evolution": {
        "prev": ["736", "Level 20"],
        "next": [["738", "Level up in a Magnetic Field area"]]
      },
      "profile": {
        "height": "0.5 m",
        "weight": "10.5 kg",
        "egg": ["Bug"],
        "ability": [["Battery", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/737.png",
        "thumbnail": "src/assets/thumbnails/737.png",
        "hires": "src/assets/hires/737.png"
      }
    },
    {
      "id": 738,
      "name": {
        "english": "Vikavolt",
        "japanese": "クワガノン",
        "chinese": "锹农炮虫",
        "french": "Lucanon"
      },
      "type": ["Bug", "Electric"],
      "base": {
        "HP": 77,
        "Attack": 70,
        "Defense": 90,
        "Sp. Attack": 145,
        "Sp. Defense": 75,
        "Speed": 43
      },
      "species": "Stag Beetle Pokémon",
      "description": "Vikavolt flusters opponents with acrobatic flying maneuvers. This creates an opening for it to deliver an electric beam attack.",
      "evolution": {
        "prev": [
          "737",
          "use Thunder Stone, in Gen 8, or level up in a Magnetic Field area"
        ]
      },
      "profile": {
        "height": "1.5 m",
        "weight": "45 kg",
        "egg": ["Bug"],
        "ability": [["Levitate", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/738.png",
        "thumbnail": "src/assets/thumbnails/738.png",
        "hires": "src/assets/hires/738.png"
      }
    },
    {
      "id": 739,
      "name": {
        "english": "Crabrawler",
        "japanese": "マケンカニ",
        "chinese": "好胜蟹",
        "french": "Crabagarre"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 47,
        "Attack": 82,
        "Defense": 57,
        "Sp. Attack": 42,
        "Sp. Defense": 47,
        "Speed": 63
      },
      "species": "Boxing Pokémon",
      "description": "Crabrawler has been known to mistake Exeggutor for a coconut tree and climb it. The enraged Exeggutor shakes it off and stomps it.",
      "evolution": { "next": [["740", "at Mount Lanakila"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "7 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Iron Fist", "false"],
          ["Anger Point", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/739.png",
        "thumbnail": "src/assets/thumbnails/739.png",
        "hires": "src/assets/hires/739.png"
      }
    },
    {
      "id": 740,
      "name": {
        "english": "Crabominable",
        "japanese": "ケケンカニ",
        "chinese": "好胜毛蟹",
        "french": "Crabominable"
      },
      "type": ["Fighting", "Ice"],
      "base": {
        "HP": 97,
        "Attack": 132,
        "Defense": 77,
        "Sp. Attack": 62,
        "Sp. Defense": 67,
        "Speed": 43
      },
      "species": "Woolly Crab Pokémon",
      "description": "Before it stops to think, it just starts pummeling. There are records of its turning back avalanches with a flurry of punches.",
      "evolution": { "prev": ["739", "at Mount Lanakila"] },
      "profile": {
        "height": "1.7 m",
        "weight": "180 kg",
        "egg": ["Water 3"],
        "ability": [
          ["Hyper Cutter", "false"],
          ["Iron Fist", "false"],
          ["Anger Point", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/740.png",
        "thumbnail": "src/assets/thumbnails/740.png",
        "hires": "src/assets/hires/740.png"
      }
    },
    {
      "id": 741,
      "name": {
        "english": "Oricorio",
        "japanese": "オドリドリ",
        "chinese": "花舞鸟",
        "french": "Plumeline"
      },
      "type": ["Fire", "Flying"],
      "base": {
        "HP": 75,
        "Attack": 70,
        "Defense": 70,
        "Sp. Attack": 98,
        "Sp. Defense": 70,
        "Speed": 93
      },
      "species": "Dancing Pokémon",
      "description": "This Oricorio has drunk red nectar. If its Trainer gives the wrong order, this passionate Pokémon becomes fiercely angry.",
      "evolution": {},
      "profile": {
        "height": "0.6 m",
        "weight": "3.4 kg",
        "egg": ["Flying"],
        "ability": [["Dancer", "false"]],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/741.png",
        "thumbnail": "src/assets/thumbnails/741.png",
        "hires": "src/assets/hires/741.png"
      }
    },
    {
      "id": 742,
      "name": {
        "english": "Cutiefly",
        "japanese": "アブリー",
        "chinese": "萌虻",
        "french": "Bombydou"
      },
      "type": ["Bug", "Fairy"],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 40,
        "Sp. Attack": 55,
        "Sp. Defense": 40,
        "Speed": 84
      },
      "species": "Bee Fly Pokémon",
      "description": "Cutiefly can pick up the auras of living things. It skillfully reads those auras to predict its foes’ movements and make fools of them.",
      "evolution": { "next": [["743", "Level 25"]] },
      "profile": {
        "height": "0.1 m",
        "weight": "0.2 kg",
        "egg": ["Bug", "Fairy"],
        "ability": [
          ["Honey Gather", "false"],
          ["Shield Dust", "false"],
          ["Sweet Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/742.png",
        "thumbnail": "src/assets/thumbnails/742.png",
        "hires": "src/assets/hires/742.png"
      }
    },
    {
      "id": 743,
      "name": {
        "english": "Ribombee",
        "japanese": "アブリボン",
        "chinese": "蝶结萌虻",
        "french": "Rubombelle"
      },
      "type": ["Bug", "Fairy"],
      "base": {
        "HP": 60,
        "Attack": 55,
        "Defense": 60,
        "Sp. Attack": 95,
        "Sp. Defense": 70,
        "Speed": 124
      },
      "species": "Bee Fly Pokémon",
      "description": "It can predict the weather from moisture levels and wind direction. Ribombee only reveals itself when there are a few clear days in a row.",
      "evolution": { "prev": ["742", "Level 25"] },
      "profile": {
        "height": "0.2 m",
        "weight": "0.5 kg",
        "egg": ["Bug", "Fairy"],
        "ability": [
          ["Honey Gather", "false"],
          ["Shield Dust", "false"],
          ["Sweet Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/743.png",
        "thumbnail": "src/assets/thumbnails/743.png",
        "hires": "src/assets/hires/743.png"
      }
    },
    {
      "id": 744,
      "name": {
        "english": "Rockruff",
        "japanese": "イワンコ",
        "chinese": "岩狗狗",
        "french": "Rocabot"
      },
      "type": ["Rock"],
      "base": {
        "HP": 45,
        "Attack": 65,
        "Defense": 40,
        "Sp. Attack": 30,
        "Sp. Defense": 40,
        "Speed": 60
      },
      "species": "Puppy Pokémon",
      "description": "When it rubs the rocks on its neck against you, that’s proof of its love for you. However, the rocks are sharp, so the gesture is quite painful!",
      "evolution": { "next": [["745", "Level 25"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "9.2 kg",
        "egg": ["Field"],
        "ability": [
          ["Keen Eye", "false"],
          ["Vital Spirit", "false"],
          ["Steadfast", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/744.png",
        "thumbnail": "src/assets/thumbnails/744.png",
        "hires": "src/assets/hires/744.png"
      }
    },
    {
      "id": 745,
      "name": {
        "english": "Lycanroc",
        "japanese": "ルガルガン",
        "chinese": "鬃岩狼人",
        "french": "Lougaroc"
      },
      "type": ["Rock"],
      "base": {
        "HP": 75,
        "Attack": 115,
        "Defense": 65,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 112
      },
      "species": "Wolf Pokémon",
      "description": "The rocks in its mane are sharper than a knife. Fragments that break off are treasured as good luck charms.",
      "evolution": { "prev": ["744", "Level 25"] },
      "profile": {
        "height": "0.8 m",
        "weight": "25 kg",
        "egg": ["Field"],
        "ability": [
          ["Keen Eye", "false"],
          ["Sand Rush", "false"],
          ["Steadfast", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/745.png",
        "thumbnail": "src/assets/thumbnails/745.png",
        "hires": "src/assets/hires/745.png"
      }
    },
    {
      "id": 746,
      "name": {
        "english": "Wishiwashi",
        "japanese": "ヨワシ",
        "chinese": "弱丁鱼",
        "french": "Froussardine"
      },
      "type": ["Water"],
      "base": {
        "HP": 45,
        "Attack": 20,
        "Defense": 20,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 40
      },
      "species": "Small Fry Pokémon",
      "description": "When it’s in a jam, its shining eyes attract others of its kind. The light from its eyes is visible almost 25 miles away.",
      "evolution": {},
      "profile": {
        "height": "0.2 m",
        "weight": "0.3 kg",
        "egg": ["Water 2"],
        "ability": [["Schooling", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/746.png",
        "thumbnail": "src/assets/thumbnails/746.png",
        "hires": "src/assets/hires/746.png"
      }
    },
    {
      "id": 747,
      "name": {
        "english": "Mareanie",
        "japanese": "ヒドイデ",
        "chinese": "好坏星",
        "french": "Vorastérie"
      },
      "type": ["Poison", "Water"],
      "base": {
        "HP": 50,
        "Attack": 53,
        "Defense": 62,
        "Sp. Attack": 43,
        "Sp. Defense": 52,
        "Speed": 45
      },
      "species": "Brutal Star Pokémon",
      "description": "Aside from its head, its body parts regenerate quickly if they’re cut off. After a good night’s sleep, Mareanie is back to normal.",
      "evolution": { "next": [["748", "Level 38"]] },
      "profile": {
        "height": "0.4 m",
        "weight": "8 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Merciless", "false"],
          ["Limber", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/747.png",
        "thumbnail": "src/assets/thumbnails/747.png",
        "hires": "src/assets/hires/747.png"
      }
    },
    {
      "id": 748,
      "name": {
        "english": "Toxapex",
        "japanese": "ドヒドイデ",
        "chinese": "超坏星",
        "french": "Prédastérie"
      },
      "type": ["Poison", "Water"],
      "base": {
        "HP": 50,
        "Attack": 63,
        "Defense": 152,
        "Sp. Attack": 53,
        "Sp. Defense": 142,
        "Speed": 35
      },
      "species": "Brutal Star Pokémon",
      "description": "With its 12 legs, it creates a dome to shelter within. The flow of the tides doesn’t affect Toxapex in there, so it’s very comfortable.",
      "evolution": { "prev": ["747", "Level 38"] },
      "profile": {
        "height": "0.7 m",
        "weight": "14.5 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Merciless", "false"],
          ["Limber", "false"],
          ["Regenerator", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/748.png",
        "thumbnail": "src/assets/thumbnails/748.png",
        "hires": "src/assets/hires/748.png"
      }
    },
    {
      "id": 749,
      "name": {
        "english": "Mudbray",
        "japanese": "ドロバンコ",
        "chinese": "泥驴仔",
        "french": "Tiboudet"
      },
      "type": ["Ground"],
      "base": {
        "HP": 70,
        "Attack": 100,
        "Defense": 70,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 45
      },
      "species": "Donkey Pokémon",
      "description": "Possessing mighty power, Mudbray can be loaded with 50 times its own body weight and will be totally fine.",
      "evolution": { "next": [["750", "Level 30"]] },
      "profile": {
        "height": "1 m",
        "weight": "110 kg",
        "egg": ["Field"],
        "ability": [
          ["Own Tempo", "false"],
          ["Stamina", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/749.png",
        "thumbnail": "src/assets/thumbnails/749.png",
        "hires": "src/assets/hires/749.png"
      }
    },
    {
      "id": 750,
      "name": {
        "english": "Mudsdale",
        "japanese": "バンバドロ",
        "chinese": "重泥挽马",
        "french": "Bourrinos"
      },
      "type": ["Ground"],
      "base": {
        "HP": 100,
        "Attack": 125,
        "Defense": 100,
        "Sp. Attack": 55,
        "Sp. Defense": 85,
        "Speed": 35
      },
      "species": "Draft Horse Pokémon",
      "description": "It can trudge mountain roads without rest for three days and three nights, all the while dragging a 10-ton load.",
      "evolution": { "prev": ["749", "Level 30"] },
      "profile": {
        "height": "2.5 m",
        "weight": "920 kg",
        "egg": ["Field"],
        "ability": [
          ["Own Tempo", "false"],
          ["Stamina", "false"],
          ["Inner Focus", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/750.png",
        "thumbnail": "src/assets/thumbnails/750.png",
        "hires": "src/assets/hires/750.png"
      }
    },
    {
      "id": 751,
      "name": {
        "english": "Dewpider",
        "japanese": "シズクモ",
        "chinese": "滴蛛",
        "french": "Araqua"
      },
      "type": ["Water", "Bug"],
      "base": {
        "HP": 38,
        "Attack": 40,
        "Defense": 52,
        "Sp. Attack": 40,
        "Sp. Defense": 72,
        "Speed": 27
      },
      "species": "Water Bubble Pokémon",
      "description": "It can only breathe oxygen that has dissolved in water, so it wears a water bubble on its head when it walks around on land.",
      "evolution": { "next": [["752", "Level 22"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "4 kg",
        "egg": ["Water 1", "Bug"],
        "ability": [
          ["Water Bubble", "false"],
          ["Water Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/751.png",
        "thumbnail": "src/assets/thumbnails/751.png",
        "hires": "src/assets/hires/751.png"
      }
    },
    {
      "id": 752,
      "name": {
        "english": "Araquanid",
        "japanese": "オニシズクモ",
        "chinese": "滴蛛霸",
        "french": "Tarenbulle"
      },
      "type": ["Water", "Bug"],
      "base": {
        "HP": 68,
        "Attack": 70,
        "Defense": 92,
        "Sp. Attack": 50,
        "Sp. Defense": 132,
        "Speed": 42
      },
      "species": "Water Bubble Pokémon",
      "description": "It has a habit of storing things it values in its water bubble. If its Trainer doesn’t watch out, Araquanid will try to put them in its bubble!",
      "evolution": { "prev": ["751", "Level 22"] },
      "profile": {
        "height": "1.8 m",
        "weight": "82 kg",
        "egg": ["Water 1", "Bug"],
        "ability": [
          ["Water Bubble", "false"],
          ["Water Absorb", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/752.png",
        "thumbnail": "src/assets/thumbnails/752.png",
        "hires": "src/assets/hires/752.png"
      }
    },
    {
      "id": 753,
      "name": {
        "english": "Fomantis",
        "japanese": "カリキリ",
        "chinese": "伪螳草",
        "french": "Mimantis"
      },
      "type": ["Grass"],
      "base": {
        "HP": 40,
        "Attack": 55,
        "Defense": 35,
        "Sp. Attack": 50,
        "Sp. Defense": 35,
        "Speed": 35
      },
      "species": "Sickle Grass Pokémon",
      "description": "It loves the sunshine. When it basks in the sunlight regularly, it grows up with vivid coloration.",
      "evolution": { "next": [["754", "Level 34, Daytime"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "1.5 kg",
        "egg": ["Grass"],
        "ability": [
          ["Leaf Guard", "false"],
          ["Contrary", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/753.png",
        "thumbnail": "src/assets/thumbnails/753.png",
        "hires": "src/assets/hires/753.png"
      }
    },
    {
      "id": 754,
      "name": {
        "english": "Lurantis",
        "japanese": "ラランテス",
        "chinese": "兰螳花",
        "french": "Floramantis"
      },
      "type": ["Grass"],
      "base": {
        "HP": 70,
        "Attack": 105,
        "Defense": 90,
        "Sp. Attack": 80,
        "Sp. Defense": 90,
        "Speed": 45
      },
      "species": "Bloom Sickle Pokémon",
      "description": "As it slashes into its enemies, it looks like it’s dancing. Its elegant appearance has led some to call it the most glamorous Grass Pokémon.",
      "evolution": { "prev": ["753", "Level 34, Daytime"] },
      "profile": {
        "height": "0.9 m",
        "weight": "18.5 kg",
        "egg": ["Grass"],
        "ability": [
          ["Leaf Guard", "false"],
          ["Contrary", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/754.png",
        "thumbnail": "src/assets/thumbnails/754.png",
        "hires": "src/assets/hires/754.png"
      }
    },
    {
      "id": 755,
      "name": {
        "english": "Morelull",
        "japanese": "ネマシュ",
        "chinese": "睡睡菇",
        "french": "Spododo"
      },
      "type": ["Grass", "Fairy"],
      "base": {
        "HP": 40,
        "Attack": 35,
        "Defense": 55,
        "Sp. Attack": 65,
        "Sp. Defense": 75,
        "Speed": 15
      },
      "species": "Illuminating Pokémon",
      "description": "It likes damp dark places. When night falls, the spores filling the caps of its mushrooms glow.",
      "evolution": { "next": [["756", "Level 24"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "1.5 kg",
        "egg": ["Grass"],
        "ability": [
          ["Illuminate", "false"],
          ["Effect Spore", "false"],
          ["Rain Dish", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/755.png",
        "thumbnail": "src/assets/thumbnails/755.png",
        "hires": "src/assets/hires/755.png"
      }
    },
    {
      "id": 756,
      "name": {
        "english": "Shiinotic",
        "japanese": "マシェード",
        "chinese": "灯罩夜菇",
        "french": "Lampignon"
      },
      "type": ["Grass", "Fairy"],
      "base": {
        "HP": 60,
        "Attack": 45,
        "Defense": 80,
        "Sp. Attack": 90,
        "Sp. Defense": 100,
        "Speed": 30
      },
      "species": "Illuminating Pokémon",
      "description": "When it starts fighting for territory with Parasect, the entire area gets completely coated in spores!",
      "evolution": { "prev": ["755", "Level 24"] },
      "profile": {
        "height": "1 m",
        "weight": "11.5 kg",
        "egg": ["Grass"],
        "ability": [
          ["Illuminate", "false"],
          ["Effect Spore", "false"],
          ["Rain Dish", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/756.png",
        "thumbnail": "src/assets/thumbnails/756.png",
        "hires": "src/assets/hires/756.png"
      }
    },
    {
      "id": 757,
      "name": {
        "english": "Salandit",
        "japanese": "ヤトウモリ",
        "chinese": "夜盗火蜥",
        "french": "Tritox"
      },
      "type": ["Poison", "Fire"],
      "base": {
        "HP": 48,
        "Attack": 44,
        "Defense": 40,
        "Sp. Attack": 71,
        "Sp. Defense": 40,
        "Speed": 77
      },
      "species": "Toxic Lizard Pokémon",
      "description": "It weakens opponents and sends them reeling with its poisonous gas. Salandit doesn’t deal well with Spinda, since it’s always reeling.",
      "evolution": { "next": [["758", "Level 33, Female"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "4.8 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Corrosion", "false"],
          ["Oblivious", "true"]
        ],
        "gender": "87.5:12.5"
      },
      "image": {
        "sprite": "src/assets/sprites/757.png",
        "thumbnail": "src/assets/thumbnails/757.png",
        "hires": "src/assets/hires/757.png"
      }
    },
    {
      "id": 758,
      "name": {
        "english": "Salazzle",
        "japanese": "エンニュート",
        "chinese": "焰后蜥",
        "french": "Malamandre"
      },
      "type": ["Poison", "Fire"],
      "base": {
        "HP": 68,
        "Attack": 64,
        "Defense": 60,
        "Sp. Attack": 111,
        "Sp. Defense": 60,
        "Speed": 117
      },
      "species": "Toxic Lizard Pokémon",
      "description": "It punishes Salandit that couldn’t bring it food with a fierce slap of its flame-spewing palm.",
      "evolution": { "prev": ["757", "Level 33, Female"] },
      "profile": {
        "height": "1.2 m",
        "weight": "22.2 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Corrosion", "false"],
          ["Oblivious", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/758.png",
        "thumbnail": "src/assets/thumbnails/758.png",
        "hires": "src/assets/hires/758.png"
      }
    },
    {
      "id": 759,
      "name": {
        "english": "Stufful",
        "japanese": "ヌイコグマ",
        "chinese": "童偶熊",
        "french": "Nounourson"
      },
      "type": ["Normal", "Fighting"],
      "base": {
        "HP": 70,
        "Attack": 75,
        "Defense": 50,
        "Sp. Attack": 45,
        "Sp. Defense": 50,
        "Speed": 50
      },
      "species": "Flailing Pokémon",
      "description": "Stufful hates to be hugged or touched in any way. It will squirm, thrash, and resist with amazing power.",
      "evolution": { "next": [["760", "Level 27"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "6.8 kg",
        "egg": ["Field"],
        "ability": [
          ["Fluffy", "false"],
          ["Klutz", "false"],
          ["Cute Charm", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/759.png",
        "thumbnail": "src/assets/thumbnails/759.png",
        "hires": "src/assets/hires/759.png"
      }
    },
    {
      "id": 760,
      "name": {
        "english": "Bewear",
        "japanese": "キテルグマ",
        "chinese": "穿着熊",
        "french": "Chelours"
      },
      "type": ["Normal", "Fighting"],
      "base": {
        "HP": 120,
        "Attack": 125,
        "Defense": 80,
        "Sp. Attack": 55,
        "Sp. Defense": 60,
        "Speed": 60
      },
      "species": "Strong Arm Pokémon",
      "description": "It boasts tremendous physical strength. Many people call it the most dangerous Pokémon in the Alola region.",
      "evolution": { "prev": ["759", "Level 27"] },
      "profile": {
        "height": "2.1 m",
        "weight": "135 kg",
        "egg": ["Field"],
        "ability": [
          ["Fluffy", "false"],
          ["Klutz", "false"],
          ["Unnerve", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/760.png",
        "thumbnail": "src/assets/thumbnails/760.png",
        "hires": "src/assets/hires/760.png"
      }
    },
    {
      "id": 761,
      "name": {
        "english": "Bounsweet",
        "japanese": "アマカジ",
        "chinese": "甜竹竹",
        "french": "Croquine"
      },
      "type": ["Grass"],
      "base": {
        "HP": 42,
        "Attack": 30,
        "Defense": 38,
        "Sp. Attack": 30,
        "Sp. Defense": 38,
        "Speed": 32
      },
      "species": "Fruit Pokémon",
      "description": "It tries to resist being swallowed by a bird Pokémon by spinning the sepals on its head. It’s usually a fruitless attempt.",
      "evolution": { "next": [["762", "Level 18"]] },
      "profile": {
        "height": "0.3 m",
        "weight": "3.2 kg",
        "egg": ["Grass"],
        "ability": [
          ["Leaf Guard", "false"],
          ["Oblivious", "false"],
          ["Sweet Veil", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/761.png",
        "thumbnail": "src/assets/thumbnails/761.png",
        "hires": "src/assets/hires/761.png"
      }
    },
    {
      "id": 762,
      "name": {
        "english": "Steenee",
        "japanese": "アママイコ",
        "chinese": "甜舞妮",
        "french": "Candine"
      },
      "type": ["Grass"],
      "base": {
        "HP": 52,
        "Attack": 40,
        "Defense": 48,
        "Sp. Attack": 40,
        "Sp. Defense": 48,
        "Speed": 62
      },
      "species": "Fruit Pokémon",
      "description": "It bounces around, swinging the sepals on its head with abandon. They’re quite painful when they smack you!",
      "evolution": {
        "prev": ["761", "Level 18"],
        "next": [["763", "after Stomp learned"]]
      },
      "profile": {
        "height": "0.7 m",
        "weight": "8.2 kg",
        "egg": ["Grass"],
        "ability": [
          ["Leaf Guard", "false"],
          ["Oblivious", "false"],
          ["Sweet Veil", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/762.png",
        "thumbnail": "src/assets/thumbnails/762.png",
        "hires": "src/assets/hires/762.png"
      }
    },
    {
      "id": 763,
      "name": {
        "english": "Tsareena",
        "japanese": "アマージョ",
        "chinese": "甜冷美后",
        "french": "Sucreine"
      },
      "type": ["Grass"],
      "base": {
        "HP": 72,
        "Attack": 120,
        "Defense": 98,
        "Sp. Attack": 50,
        "Sp. Defense": 98,
        "Speed": 72
      },
      "species": "Fruit Pokémon",
      "description": "A Pokémon with an aggressive personality and a mastery of kicking, it cackles every time it kicks an opponent.",
      "evolution": { "prev": ["762", "after Stomp learned"] },
      "profile": {
        "height": "1.2 m",
        "weight": "21.4 kg",
        "egg": ["Grass"],
        "ability": [
          ["Leaf Guard", "false"],
          ["Queenly Majesty", "false"],
          ["Sweet Veil", "true"]
        ],
        "gender": "0:100"
      },
      "image": {
        "sprite": "src/assets/sprites/763.png",
        "thumbnail": "src/assets/thumbnails/763.png",
        "hires": "src/assets/hires/763.png"
      }
    },
    {
      "id": 764,
      "name": {
        "english": "Comfey",
        "japanese": "キュワワー",
        "chinese": "花疗环环",
        "french": "Guérilande"
      },
      "type": ["Fairy"],
      "base": {
        "HP": 51,
        "Attack": 52,
        "Defense": 90,
        "Sp. Attack": 82,
        "Sp. Defense": 110,
        "Speed": 100
      },
      "species": "Posy Picker Pokémon",
      "description": "It picks flowers and sticks them to its body with fluids it produces. The aroma that wafts from its petals has a healing effect.",
      "evolution": {},
      "profile": {
        "height": "0.1 m",
        "weight": "0.3 kg",
        "egg": ["Grass"],
        "ability": [
          ["Flower Veil", "false"],
          ["Triage", "false"],
          ["Natural Cure", "true"]
        ],
        "gender": "25:75"
      },
      "image": {
        "sprite": "src/assets/sprites/764.png",
        "thumbnail": "src/assets/thumbnails/764.png",
        "hires": "src/assets/hires/764.png"
      }
    },
    {
      "id": 765,
      "name": {
        "english": "Oranguru",
        "japanese": "ヤレユータン",
        "chinese": "智挥猩",
        "french": "Gouroutan"
      },
      "type": ["Normal", "Psychic"],
      "base": {
        "HP": 90,
        "Attack": 60,
        "Defense": 80,
        "Sp. Attack": 90,
        "Sp. Defense": 110,
        "Speed": 60
      },
      "species": "Sage Pokémon",
      "description": "Oranguru don’t get along with each other, so they’re always engaging in battles of wits to decide which one is superior.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "76 kg",
        "egg": ["Field"],
        "ability": [
          ["Inner Focus", "false"],
          ["Telepathy", "false"],
          ["Symbiosis", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/765.png",
        "thumbnail": "src/assets/thumbnails/765.png",
        "hires": "src/assets/hires/765.png"
      }
    },
    {
      "id": 766,
      "name": {
        "english": "Passimian",
        "japanese": "ナゲツケサル",
        "chinese": "投掷猴",
        "french": "Quartermac"
      },
      "type": ["Fighting"],
      "base": {
        "HP": 100,
        "Attack": 120,
        "Defense": 90,
        "Sp. Attack": 40,
        "Sp. Defense": 60,
        "Speed": 80
      },
      "species": "Teamwork Pokémon",
      "description": "Berries are its weapons as well as the staple of its diet. The one that can throw a berry the farthest is the boss of the troop.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "82.8 kg",
        "egg": ["Field"],
        "ability": [
          ["Receiver", "false"],
          ["Defiant", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/766.png",
        "thumbnail": "src/assets/thumbnails/766.png",
        "hires": "src/assets/hires/766.png"
      }
    },
    {
      "id": 767,
      "name": {
        "english": "Wimpod",
        "japanese": "コソクムシ",
        "chinese": "胆小虫",
        "french": "Sovkipou"
      },
      "type": ["Bug", "Water"],
      "base": {
        "HP": 25,
        "Attack": 35,
        "Defense": 40,
        "Sp. Attack": 20,
        "Sp. Defense": 30,
        "Speed": 80
      },
      "species": "Turn Tail Pokémon",
      "description": "An astonishingly cowardly Pokémon, Wimpod will whir its legs at high speeds to run away if anything comes near it.",
      "evolution": { "next": [["768", "Level 30"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "12 kg",
        "egg": ["Bug", "Water 3"],
        "ability": [["Wimp Out", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/767.png",
        "thumbnail": "src/assets/thumbnails/767.png",
        "hires": "src/assets/hires/767.png"
      }
    },
    {
      "id": 768,
      "name": {
        "english": "Golisopod",
        "japanese": "グソクムシャ",
        "chinese": "具甲武者",
        "french": "Sarmuraï"
      },
      "type": ["Bug", "Water"],
      "base": {
        "HP": 75,
        "Attack": 125,
        "Defense": 140,
        "Sp. Attack": 60,
        "Sp. Defense": 90,
        "Speed": 40
      },
      "species": "Hard Scale Pokémon",
      "description": "Its claws, which it can extend and retract at will, are its greatest weapons. Golisopod is sometimes accompanied by Wimpod.",
      "evolution": { "prev": ["767", "Level 30"] },
      "profile": {
        "height": "2 m",
        "weight": "108 kg",
        "egg": ["Bug", "Water 3"],
        "ability": [["Emergency Exit", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/768.png",
        "thumbnail": "src/assets/thumbnails/768.png",
        "hires": "src/assets/hires/768.png"
      }
    },
    {
      "id": 769,
      "name": {
        "english": "Sandygast",
        "japanese": "スナバァ",
        "chinese": "沙丘娃",
        "french": "Bacabouh"
      },
      "type": ["Ghost", "Ground"],
      "base": {
        "HP": 55,
        "Attack": 55,
        "Defense": 80,
        "Sp. Attack": 70,
        "Sp. Defense": 45,
        "Speed": 15
      },
      "species": "Sand Heap Pokémon",
      "description": "If you build sand mounds when you’re playing, destroy them before you go home, or they may get possessed and become Sandygast.",
      "evolution": { "next": [["770", "Level 42"]] },
      "profile": {
        "height": "0.5 m",
        "weight": "70 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Water Compaction", "false"],
          ["Sand Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/769.png",
        "thumbnail": "src/assets/thumbnails/769.png",
        "hires": "src/assets/hires/769.png"
      }
    },
    {
      "id": 770,
      "name": {
        "english": "Palossand",
        "japanese": "シロデスナ",
        "chinese": "噬沙堡爷",
        "french": "Trépassable"
      },
      "type": ["Ghost", "Ground"],
      "base": {
        "HP": 85,
        "Attack": 75,
        "Defense": 110,
        "Sp. Attack": 100,
        "Sp. Defense": 75,
        "Speed": 35
      },
      "species": "Sand Castle Pokémon",
      "description": "Once it has whipped up a sandstorm to halt its opponents in their tracks, this terrifying Pokémon snatches away their vitality.",
      "evolution": { "prev": ["769", "Level 42"] },
      "profile": {
        "height": "1.3 m",
        "weight": "250 kg",
        "egg": ["Amorphous"],
        "ability": [
          ["Water Compaction", "false"],
          ["Sand Veil", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/770.png",
        "thumbnail": "src/assets/thumbnails/770.png",
        "hires": "src/assets/hires/770.png"
      }
    },
    {
      "id": 771,
      "name": {
        "english": "Pyukumuku",
        "japanese": "ナマコブシ",
        "chinese": "拳海参",
        "french": "Concombaffe"
      },
      "type": ["Water"],
      "base": {
        "HP": 55,
        "Attack": 60,
        "Defense": 130,
        "Sp. Attack": 30,
        "Sp. Defense": 130,
        "Speed": 5
      },
      "species": "Sea Cucumber Pokémon",
      "description": "Its entire body is covered in its own slime. If you accidentally step on one, you’ll slip, and it will get mad and smack you!",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "1.2 kg",
        "egg": ["Water 1"],
        "ability": [
          ["Innards Out", "false"],
          ["Unaware", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/771.png",
        "thumbnail": "src/assets/thumbnails/771.png",
        "hires": "src/assets/hires/771.png"
      }
    },
    {
      "id": 772,
      "name": {
        "english": "Type: Null",
        "japanese": "タイプ：ヌル",
        "chinese": "属性：空",
        "french": "Silvallié"
      },
      "type": ["Normal"],
      "base": {
        "HP": 95,
        "Attack": 95,
        "Defense": 95,
        "Sp. Attack": 95,
        "Sp. Defense": 95,
        "Speed": 59
      },
      "species": "Synthetic Pokémon",
      "description": "There’s danger of its going on a rampage, so its true power is sealed away beneath its control mask.",
      "evolution": { "next": [["773", "high Friendship"]] },
      "profile": {
        "height": "1.9 m",
        "weight": "120.5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Battle Armor", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/772.png",
        "thumbnail": "src/assets/thumbnails/772.png",
        "hires": "src/assets/hires/772.png"
      }
    },
    {
      "id": 773,
      "name": {
        "english": "Silvally",
        "japanese": "シルヴァディ",
        "chinese": "银伴战兽",
        "french": "Météno"
      },
      "type": ["Normal"],
      "base": {
        "HP": 95,
        "Attack": 95,
        "Defense": 95,
        "Sp. Attack": 95,
        "Sp. Defense": 95,
        "Speed": 95
      },
      "species": "Synthetic Pokémon",
      "description": "Through the bond it formed with its Trainer, its will was strengthened, and it was able to destroy its control mask.",
      "evolution": { "prev": ["772", "high Friendship"] },
      "profile": {
        "height": "2.3 m",
        "weight": "100.5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Rks System", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/773.png",
        "thumbnail": "src/assets/thumbnails/773.png",
        "hires": "src/assets/hires/773.png"
      }
    },
    {
      "id": 774,
      "name": {
        "english": "Minior",
        "japanese": "メテノ",
        "chinese": "小陨星",
        "french": "Dodoala"
      },
      "type": ["Rock", "Flying"],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 100,
        "Sp. Attack": 60,
        "Sp. Defense": 100,
        "Speed": 60
      },
      "species": "Meteor Pokémon",
      "description": "Although its outer shell is uncommonly durable, the shock of falling to the ground smashes the shell to smithereens.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "40 kg",
        "egg": ["Mineral"],
        "ability": [["Shields Down", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/774.png",
        "thumbnail": "src/assets/thumbnails/774.png",
        "hires": "src/assets/hires/774.png"
      }
    },
    {
      "id": 775,
      "name": {
        "english": "Komala",
        "japanese": "ネッコアラ",
        "chinese": "树枕尾熊",
        "french": "Boumata"
      },
      "type": ["Normal"],
      "base": {
        "HP": 65,
        "Attack": 115,
        "Defense": 65,
        "Sp. Attack": 75,
        "Sp. Defense": 95,
        "Speed": 65
      },
      "species": "Drowsing Pokémon",
      "description": "It remains asleep from birth to death as a result of the sedative properties of the leaves that form its diet.",
      "evolution": {},
      "profile": {
        "height": "0.4 m",
        "weight": "19.9 kg",
        "egg": ["Field"],
        "ability": [["Comatose", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/775.png",
        "thumbnail": "src/assets/thumbnails/775.png",
        "hires": "src/assets/hires/775.png"
      }
    },
    {
      "id": 776,
      "name": {
        "english": "Turtonator",
        "japanese": "バクガメス",
        "chinese": "爆焰龟兽",
        "french": "Togedemaru"
      },
      "type": ["Fire", "Dragon"],
      "base": {
        "HP": 60,
        "Attack": 78,
        "Defense": 135,
        "Sp. Attack": 91,
        "Sp. Defense": 85,
        "Speed": 36
      },
      "species": "Blast Turtle Pokémon",
      "description": "Its exploding shell poses a real danger but is sensitive to moisture. On rainy days, Turtonator takes silent refuge in caves.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "212 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [["Shell Armor", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/776.png",
        "thumbnail": "src/assets/thumbnails/776.png",
        "hires": "src/assets/hires/776.png"
      }
    },
    {
      "id": 777,
      "name": {
        "english": "Togedemaru",
        "japanese": "トゲデマル",
        "chinese": "托戈德玛尔",
        "french": "Mimiqui"
      },
      "type": ["Electric", "Steel"],
      "base": {
        "HP": 65,
        "Attack": 98,
        "Defense": 63,
        "Sp. Attack": 40,
        "Sp. Defense": 73,
        "Speed": 96
      },
      "species": "Roly-Poly Pokémon",
      "description": "Its capacity to produce electricity is somewhat limited, so it gets charged up by letting lightning strike it!",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "3.3 kg",
        "egg": ["Field", "Fairy"],
        "ability": [
          ["Iron Barbs", "false"],
          ["Lightning Rod", "false"],
          ["Sturdy", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/777.png",
        "thumbnail": "src/assets/thumbnails/777.png",
        "hires": "src/assets/hires/777.png"
      }
    },
    {
      "id": 778,
      "name": {
        "english": "Mimikyu",
        "japanese": "ミミッキュ",
        "chinese": "谜拟Ｑ",
        "french": "Denticrisse"
      },
      "type": ["Ghost", "Fairy"],
      "base": {
        "HP": 55,
        "Attack": 90,
        "Defense": 80,
        "Sp. Attack": 50,
        "Sp. Defense": 105,
        "Speed": 96
      },
      "species": "Disguise Pokémon",
      "description": "A gust of wind revealed what hides under this Pokémon’s rag to a passing Trainer, who went home and died painfully that very night.",
      "evolution": {},
      "profile": {
        "height": "0.2 m",
        "weight": "0.7 kg",
        "egg": ["Amorphous"],
        "ability": [["Disguise", "false"]],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/778.png",
        "thumbnail": "src/assets/thumbnails/778.png",
        "hires": "src/assets/hires/778.png"
      }
    },
    {
      "id": 779,
      "name": {
        "english": "Bruxish",
        "japanese": "ハギギシリ",
        "chinese": "磨牙彩皮鱼",
        "french": "Draïeul"
      },
      "type": ["Water", "Psychic"],
      "base": {
        "HP": 68,
        "Attack": 105,
        "Defense": 70,
        "Sp. Attack": 70,
        "Sp. Defense": 70,
        "Speed": 92
      },
      "species": "Gnash Teeth Pokémon",
      "description": "Its skin is thick enough to fend off Mareanie’s spikes. With its robust teeth, Bruxish crunches up the spikes and eats them.",
      "evolution": {},
      "profile": {
        "height": "0.9 m",
        "weight": "19 kg",
        "egg": ["Water 2"],
        "ability": [
          ["Dazzling", "false"],
          ["Strong Jaw", "false"],
          ["Wonder Skin", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/779.png",
        "thumbnail": "src/assets/thumbnails/779.png",
        "hires": "src/assets/hires/779.png"
      }
    },
    {
      "id": 780,
      "name": {
        "english": "Drampa",
        "japanese": "ジジーロン",
        "chinese": "老翁龙",
        "french": "Sinistrail"
      },
      "type": ["Normal", "Dragon"],
      "base": {
        "HP": 78,
        "Attack": 60,
        "Defense": 85,
        "Sp. Attack": 135,
        "Sp. Defense": 91,
        "Speed": 36
      },
      "species": "Placid Pokémon",
      "description": "It appears in towns and plays with the children. Drampa will protect kids when they’re in danger, so their moms don’t have to worry.",
      "evolution": {},
      "profile": {
        "height": "3 m",
        "weight": "185 kg",
        "egg": ["Monster", "Dragon"],
        "ability": [
          ["Berserk", "false"],
          ["Sap Sipper", "false"],
          ["Cloud Nine", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/780.png",
        "thumbnail": "src/assets/thumbnails/780.png",
        "hires": "src/assets/hires/780.png"
      }
    },
    {
      "id": 781,
      "name": {
        "english": "Dhelmise",
        "japanese": "ダダリン",
        "chinese": "破破舵轮",
        "french": "Bébécaille"
      },
      "type": ["Ghost", "Grass"],
      "base": {
        "HP": 70,
        "Attack": 131,
        "Defense": 100,
        "Sp. Attack": 86,
        "Sp. Defense": 90,
        "Speed": 40
      },
      "species": "Sea Creeper Pokémon",
      "description": "Its chain-like green seaweed can stretch outward for hundreds of yards. For some reason, it gets along well with Skrelp.",
      "evolution": {},
      "profile": {
        "height": "3.9 m",
        "weight": "210 kg",
        "egg": ["Mineral"],
        "ability": [["Steelworker", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/781.png",
        "thumbnail": "src/assets/thumbnails/781.png",
        "hires": "src/assets/hires/781.png"
      }
    },
    {
      "id": 782,
      "name": {
        "english": "Jangmo-o",
        "japanese": "ジャラコ",
        "chinese": "心鳞宝",
        "french": "Écaïd"
      },
      "type": ["Dragon"],
      "base": {
        "HP": 45,
        "Attack": 55,
        "Defense": 65,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 45
      },
      "species": "Scaly Pokémon",
      "description": "It will never show an enemy its back in battle. Ancient warriors liked Jangmo-o for its valiant disposition and made it one of their own.",
      "evolution": { "next": [["783", "Level 35"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "29.7 kg",
        "egg": ["Dragon"],
        "ability": [
          ["Bulletproof", "false"],
          ["Soundproof", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/782.png",
        "thumbnail": "src/assets/thumbnails/782.png",
        "hires": "src/assets/hires/782.png"
      }
    },
    {
      "id": 783,
      "name": {
        "english": "Hakamo-o",
        "japanese": "ジャランゴ",
        "chinese": "鳞甲龙",
        "french": "Ékaïser"
      },
      "type": ["Dragon", "Fighting"],
      "base": {
        "HP": 55,
        "Attack": 75,
        "Defense": 90,
        "Sp. Attack": 65,
        "Sp. Defense": 70,
        "Speed": 65
      },
      "species": "Scaly Pokémon",
      "description": "The scales it sheds can be molded and processed to make pots and pans. They conduct heat well, so they’re a popular item.",
      "evolution": { "prev": ["782", "Level 35"], "next": [["784", "Level 45"]] },
      "profile": {
        "height": "1.2 m",
        "weight": "47 kg",
        "egg": ["Dragon"],
        "ability": [
          ["Bulletproof", "false"],
          ["Soundproof", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/783.png",
        "thumbnail": "src/assets/thumbnails/783.png",
        "hires": "src/assets/hires/783.png"
      }
    },
    {
      "id": 784,
      "name": {
        "english": "Kommo-o",
        "japanese": "ジャラランガ",
        "chinese": "杖尾鳞甲龙",
        "french": "Tokorico"
      },
      "type": ["Dragon", "Fighting"],
      "base": {
        "HP": 75,
        "Attack": 110,
        "Defense": 125,
        "Sp. Attack": 100,
        "Sp. Defense": 105,
        "Speed": 85
      },
      "species": "Scaly Pokémon",
      "description": "It battles valiantly with its fists, which are armored in steel scales. Kommo-o specializes in uppercuts.",
      "evolution": { "prev": ["783", "Level 45"] },
      "profile": {
        "height": "1.6 m",
        "weight": "78.2 kg",
        "egg": ["Dragon"],
        "ability": [
          ["Bulletproof", "false"],
          ["Soundproof", "false"],
          ["Overcoat", "true"]
        ],
        "gender": "50:50"
      },
      "image": {
        "sprite": "src/assets/sprites/784.png",
        "thumbnail": "src/assets/thumbnails/784.png",
        "hires": "src/assets/hires/784.png"
      }
    },
    {
      "id": 785,
      "name": {
        "english": "Tapu Koko",
        "japanese": "カプ・コケコ",
        "chinese": "卡璞・鸣鸣",
        "french": "Tokopiyon"
      },
      "type": ["Electric", "Fairy"],
      "base": {
        "HP": 70,
        "Attack": 115,
        "Defense": 85,
        "Sp. Attack": 95,
        "Sp. Defense": 75,
        "Speed": 130
      },
      "species": "Land Spirit Pokémon",
      "description": "The lightning-wielding guardian deity of Melemele, Tapu Koko is brimming with curiosity and appears before people from time to time.",
      "evolution": {},
      "profile": {
        "height": "1.8 m",
        "weight": "20.5 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Electric Surge", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/785.png",
        "thumbnail": "src/assets/thumbnails/785.png",
        "hires": "src/assets/hires/785.png"
      }
    },
    {
      "id": 786,
      "name": {
        "english": "Tapu Lele",
        "japanese": "カプ・テテフ",
        "chinese": "卡璞・蝶蝶",
        "french": "Tokotoro"
      },
      "type": ["Psychic", "Fairy"],
      "base": {
        "HP": 70,
        "Attack": 85,
        "Defense": 75,
        "Sp. Attack": 130,
        "Sp. Defense": 115,
        "Speed": 95
      },
      "species": "Land Spirit Pokémon",
      "description": "Although called a guardian deity, Tapu Lele is devoid of guilt about its cruel disposition and can be described as nature incarnate.",
      "evolution": {},
      "profile": {
        "height": "1.2 m",
        "weight": "18.6 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Psychic Surge", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/786.png",
        "thumbnail": "src/assets/thumbnails/786.png",
        "hires": "src/assets/hires/786.png"
      }
    },
    {
      "id": 787,
      "name": {
        "english": "Tapu Bulu",
        "japanese": "カプ・ブルル",
        "chinese": "卡璞・哞哞",
        "french": "Tokopisco"
      },
      "type": ["Grass", "Fairy"],
      "base": {
        "HP": 70,
        "Attack": 130,
        "Defense": 115,
        "Sp. Attack": 85,
        "Sp. Defense": 95,
        "Speed": 75
      },
      "species": "Land Spirit Pokémon",
      "description": "It makes ringing sounds with its tail to let others know where it is, avoiding unneeded conflicts. This guardian deity of Ula’ula controls plants.",
      "evolution": {},
      "profile": {
        "height": "1.9 m",
        "weight": "45.5 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Grassy Surge", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/787.png",
        "thumbnail": "src/assets/thumbnails/787.png",
        "hires": "src/assets/hires/787.png"
      }
    },
    {
      "id": 788,
      "name": {
        "english": "Tapu Fini",
        "japanese": "カプ・レヒレ",
        "chinese": "卡璞・鳍鳍",
        "french": "Tokopisco"
      },
      "type": ["Water", "Fairy"],
      "base": {
        "HP": 70,
        "Attack": 75,
        "Defense": 115,
        "Sp. Attack": 95,
        "Sp. Defense": 130,
        "Speed": 85
      },
      "species": "Land Spirit Pokémon",
      "description": "Although it’s called a guardian deity, terrible calamities sometimes befall those who recklessly approach Tapu Fini.",
      "evolution": {},
      "profile": {
        "height": "1.3 m",
        "weight": "21.2 kg",
        "egg": ["Undiscovered"],
        "ability": [
          ["Misty Surge", "false"],
          ["Telepathy", "true"]
        ],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/788.png",
        "thumbnail": "src/assets/thumbnails/788.png",
        "hires": "src/assets/hires/788.png"
      }
    },
    {
      "id": 789,
      "name": {
        "english": "Cosmog",
        "japanese": "コスモッグ",
        "chinese": "科斯莫古",
        "french": "Cosmog"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 43,
        "Attack": 29,
        "Defense": 31,
        "Sp. Attack": 29,
        "Sp. Defense": 31,
        "Speed": 37
      },
      "species": "Nebula Pokémon",
      "description": "Whether or not it’s a Pokémon from this world is a mystery. When it’s in a jam, it warps away to a safe place to hide.",
      "evolution": { "next": [["790", "Level 43"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "0.1 kg",
        "egg": ["Undiscovered"],
        "ability": [["Unaware", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/789.png",
        "thumbnail": "src/assets/thumbnails/789.png",
        "hires": "src/assets/hires/789.png"
      }
    },
    {
      "id": 790,
      "name": {
        "english": "Cosmoem",
        "japanese": "コスモウム",
        "chinese": "科斯莫姆",
        "french": "Cosmovum"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 43,
        "Attack": 29,
        "Defense": 131,
        "Sp. Attack": 29,
        "Sp. Defense": 131,
        "Speed": 37
      },
      "species": "Protostar Pokémon",
      "description": "As it absorbs light, Cosmoem continues to grow. Its golden shell is surprisingly solid.",
      "evolution": {
        "prev": ["789", "Level 43"],
        "next": [
          ["791", "Level 53, in Pokémon Sun or Ultra Sun"],
          ["792", "Level 53, in Pokémon Sun or Ultra Sun"]
        ]
      },
      "profile": {
        "height": "0.1 m",
        "weight": "999.9 kg",
        "egg": ["Undiscovered"],
        "ability": [["Sturdy", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/790.png",
        "thumbnail": "src/assets/thumbnails/790.png",
        "hires": "src/assets/hires/790.png"
      }
    },
    {
      "id": 791,
      "name": {
        "english": "Solgaleo",
        "japanese": "ソルガレオ",
        "chinese": "索尔迦雷欧",
        "french": "Solgaleo"
      },
      "type": ["Psychic", "Steel"],
      "base": {
        "HP": 137,
        "Attack": 137,
        "Defense": 107,
        "Sp. Attack": 113,
        "Sp. Defense": 89,
        "Speed": 97
      },
      "species": "Sunne Pokémon",
      "description": "In writings from the distant past, it’s called by the name “the beast that devours the sun.”",
      "evolution": { "prev": ["790", "Level 53, in Pokémon Sun or Ultra Sun"] },
      "profile": {
        "height": "3.4 m",
        "weight": "230 kg",
        "egg": ["Undiscovered"],
        "ability": [["Full Metal Body", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/791.png",
        "thumbnail": "src/assets/thumbnails/791.png",
        "hires": "src/assets/hires/791.png"
      }
    },
    {
      "id": 792,
      "name": {
        "english": "Lunala",
        "japanese": "ルナアーラ",
        "chinese": "露奈雅拉",
        "french": "Lunala"
      },
      "type": ["Psychic", "Ghost"],
      "base": {
        "HP": 137,
        "Attack": 113,
        "Defense": 89,
        "Sp. Attack": 137,
        "Sp. Defense": 107,
        "Speed": 97
      },
      "species": "Moone Pokémon",
      "description": "It sometimes summons unknown powers and life-forms here to this world from holes that lead to other worlds.",
      "evolution": { "prev": ["790", "Level 53, in Pokémon Moon or Ultra Moon"] },
      "profile": {
        "height": "4 m",
        "weight": "120 kg",
        "egg": ["Undiscovered"],
        "ability": [["Shadow Shield", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/792.png",
        "thumbnail": "src/assets/thumbnails/792.png",
        "hires": "src/assets/hires/792.png"
      }
    },
    {
      "id": 793,
      "name": {
        "english": "Nihilego",
        "japanese": "ウツロイド",
        "chinese": "虚吾伊德",
        "french": "Zéroïd"
      },
      "type": ["Rock", "Poison"],
      "base": {
        "HP": 109,
        "Attack": 53,
        "Defense": 47,
        "Sp. Attack": 127,
        "Sp. Defense": 131,
        "Speed": 103
      },
      "species": "Parasite Pokémon",
      "description": "It appeared in this world from an Ultra Wormhole. Nihilego appears to be a parasite that lives by feeding on people and Pokémon.",
      "evolution": {},
      "profile": {
        "height": "1.2 m",
        "weight": "55.5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/793.png",
        "thumbnail": "src/assets/thumbnails/793.png",
        "hires": "src/assets/hires/793.png"
      }
    },
    {
      "id": 794,
      "name": {
        "english": "Buzzwole",
        "japanese": "マッシブーン",
        "chinese": "爆肌蚊",
        "french": "Mouscoto"
      },
      "type": ["Bug", "Fighting"],
      "base": {
        "HP": 107,
        "Attack": 139,
        "Defense": 139,
        "Sp. Attack": 53,
        "Sp. Defense": 53,
        "Speed": 79
      },
      "species": "Swollen Pokémon",
      "description": "Buzzwole goes around showing off its abnormally swollen muscles. It is one kind of Ultra Beast.",
      "evolution": {},
      "profile": {
        "height": "2.4 m",
        "weight": "333.6 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/794.png",
        "thumbnail": "src/assets/thumbnails/794.png",
        "hires": "src/assets/hires/794.png"
      }
    },
    {
      "id": 795,
      "name": {
        "english": "Pheromosa",
        "japanese": "フェローチェ",
        "chinese": "费洛美螂",
        "french": "Cancrelove"
      },
      "type": ["Bug", "Fighting"],
      "base": {
        "HP": 71,
        "Attack": 137,
        "Defense": 37,
        "Sp. Attack": 137,
        "Sp. Defense": 37,
        "Speed": 151
      },
      "species": "Lissome Pokémon",
      "description": "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
      "evolution": {},
      "profile": {
        "height": "1.8 m",
        "weight": "25 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/795.png",
        "thumbnail": "src/assets/thumbnails/795.png",
        "hires": "src/assets/hires/795.png"
      }
    },
    {
      "id": 796,
      "name": {
        "english": "Xurkitree",
        "japanese": "デンジュモク",
        "chinese": "电束木",
        "french": "Câblifère"
      },
      "type": ["Electric"],
      "base": {
        "HP": 83,
        "Attack": 89,
        "Defense": 71,
        "Sp. Attack": 173,
        "Sp. Defense": 71,
        "Speed": 83
      },
      "species": "Glowing Pokémon",
      "description": "They’ve been dubbed Ultra Beasts. Some of them stand unmoving, like trees, with their arms and legs stuck into the ground.",
      "evolution": {},
      "profile": {
        "height": "3.8 m",
        "weight": "100 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/796.png",
        "thumbnail": "src/assets/thumbnails/796.png",
        "hires": "src/assets/hires/796.png"
      }
    },
    {
      "id": 797,
      "name": {
        "english": "Celesteela",
        "japanese": "テッカグヤ",
        "chinese": "铁火辉夜",
        "french": "Bamboiselle"
      },
      "type": ["Steel", "Flying"],
      "base": {
        "HP": 97,
        "Attack": 101,
        "Defense": 103,
        "Sp. Attack": 107,
        "Sp. Defense": 101,
        "Speed": 61
      },
      "species": "Launch Pokémon",
      "description": "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
      "evolution": {},
      "profile": {
        "height": "9.2 m",
        "weight": "999.9 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/797.png",
        "thumbnail": "src/assets/thumbnails/797.png",
        "hires": "src/assets/hires/797.png"
      }
    },
    {
      "id": 798,
      "name": {
        "english": "Kartana",
        "japanese": "カミツルギ",
        "chinese": "纸御剑",
        "french": "Katagami"
      },
      "type": ["Grass", "Steel"],
      "base": {
        "HP": 59,
        "Attack": 181,
        "Defense": 131,
        "Sp. Attack": 59,
        "Sp. Defense": 31,
        "Speed": 109
      },
      "species": "Drawn Sword Pokémon",
      "description": "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
      "evolution": {},
      "profile": {
        "height": "0.3 m",
        "weight": "0.1 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/798.png",
        "thumbnail": "src/assets/thumbnails/798.png",
        "hires": "src/assets/hires/798.png"
      }
    },
    {
      "id": 799,
      "name": {
        "english": "Guzzlord",
        "japanese": "アクジキング",
        "chinese": "恶食大王",
        "french": "Engloutyran"
      },
      "type": ["Dark", "Dragon"],
      "base": {
        "HP": 223,
        "Attack": 101,
        "Defense": 53,
        "Sp. Attack": 97,
        "Sp. Defense": 53,
        "Speed": 43
      },
      "species": "Junkivore Pokémon",
      "description": "An unknown life-form called a UB. It may be constantly hungry—it is certainly always devouring something.",
      "evolution": {},
      "profile": {
        "height": "5.5 m",
        "weight": "888 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/799.png",
        "thumbnail": "src/assets/thumbnails/799.png",
        "hires": "src/assets/hires/799.png"
      }
    },
    {
      "id": 800,
      "name": {
        "english": "Necrozma",
        "japanese": "ネクロズマ",
        "chinese": "奈克洛兹玛",
        "french": "Necrozma"
      },
      "type": ["Psychic"],
      "base": {
        "HP": 97,
        "Attack": 107,
        "Defense": 101,
        "Sp. Attack": 127,
        "Sp. Defense": 89,
        "Speed": 79
      },
      "species": "Prism Pokémon",
      "description": "Light is the source of its energy. If it isn’t devouring light, impurities build up in it and on it, and Necrozma darkens and stops moving.",
      "evolution": {},
      "profile": {
        "height": "2.4 m",
        "weight": "230 kg",
        "egg": ["Undiscovered"],
        "ability": [["Prism Armor", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/800.png",
        "thumbnail": "src/assets/thumbnails/800.png",
        "hires": "src/assets/hires/800.png"
      }
    },
    {
      "id": 801,
      "name": {
        "english": "Magearna",
        "japanese": "マギアナ",
        "chinese": "玛机雅娜",
        "french": "Magearna"
      },
      "type": ["Steel", "Fairy"],
      "base": {
        "HP": 80,
        "Attack": 95,
        "Defense": 115,
        "Sp. Attack": 130,
        "Sp. Defense": 115,
        "Speed": 65
      },
      "species": "Artificial Pokémon",
      "description": "Built roughly 500 years ago by a scientist, the part called the Soul-Heart is the actual life-form.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "80.5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Soul Heart", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/801.png",
        "thumbnail": "src/assets/thumbnails/801.png",
        "hires": "src/assets/hires/801.png"
      }
    },
    {
      "id": 802,
      "name": {
        "english": "Marshadow",
        "japanese": "マーシャドー",
        "chinese": "玛夏多",
        "french": "Marshadow"
      },
      "type": ["Fighting", "Ghost"],
      "base": {
        "HP": 90,
        "Attack": 125,
        "Defense": 80,
        "Sp. Attack": 90,
        "Sp. Defense": 90,
        "Speed": 125
      },
      "species": "Gloomdweller Pokémon",
      "description": "It sinks into the shadows of people and Pokémon, where it can understand their feelings and copy their capabilities.",
      "evolution": {},
      "profile": {
        "height": "0.7 m",
        "weight": "22.2 kg",
        "egg": ["Undiscovered"],
        "ability": [["Technician", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/802.png",
        "thumbnail": "src/assets/thumbnails/802.png",
        "hires": "src/assets/hires/802.png"
      }
    },
    {
      "id": 803,
      "name": {
        "english": "Poipole",
        "japanese": "ベベノム",
        "chinese": "毒贝比",
        "french": "Vémini"
      },
      "type": ["Poison"],
      "base": {
        "HP": 67,
        "Attack": 73,
        "Defense": 67,
        "Sp. Attack": 73,
        "Sp. Defense": 67,
        "Speed": 73
      },
      "species": "Poison Pin Pokémon",
      "description": "An Ultra Beast that lives in a different world, it cackles wildly as it sprays its opponents with poison from the needles on its head.",
      "evolution": { "next": [["804", "after Dragon Pulse learned"]] },
      "profile": {
        "height": "0.6 m",
        "weight": "1.8 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/803.png",
        "thumbnail": "src/assets/thumbnails/803.png",
        "hires": "src/assets/hires/803.png"
      }
    },
    {
      "id": 804,
      "name": {
        "english": "Naganadel",
        "japanese": "アーゴヨン",
        "chinese": "四颚针龙",
        "french": "Mandrillon"
      },
      "type": ["Poison", "Dragon"],
      "base": {
        "HP": 73,
        "Attack": 73,
        "Defense": 73,
        "Sp. Attack": 127,
        "Sp. Defense": 73,
        "Speed": 121
      },
      "species": "Poison Pin Pokémon",
      "description": "One kind of Ultra Beast, it fires a glowing, venomous liquid from its needles. This liquid is also immensely adhesive.",
      "evolution": { "prev": ["803", "after Dragon Pulse learned"] },
      "profile": {
        "height": "3.6 m",
        "weight": "150 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/804.png",
        "thumbnail": "src/assets/thumbnails/804.png",
        "hires": "src/assets/hires/804.png"
      }
    },
    {
      "id": 805,
      "name": {
        "english": "Stakataka",
        "japanese": "ツンデツンデ",
        "chinese": "垒磊石",
        "french": "Ama - Ama"
      },
      "type": ["Rock", "Steel"],
      "base": {
        "HP": 61,
        "Attack": 131,
        "Defense": 211,
        "Sp. Attack": 53,
        "Sp. Defense": 101,
        "Speed": 13
      },
      "species": "Rampart Pokémon",
      "description": "When stone walls started moving and attacking, the brute’s true identity was this mysterious life-form, which brings to mind an Ultra Beast.",
      "evolution": {},
      "profile": {
        "height": "5.5 m",
        "weight": "820 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/805.png",
        "thumbnail": "src/assets/thumbnails/805.png",
        "hires": "src/assets/hires/805.png"
      }
    },
    {
      "id": 806,
      "name": {
        "english": "Blacephalon",
        "japanese": "ズガドーン",
        "chinese": "砰头小丑",
        "french": "Pierroteknik"
      },
      "type": ["Fire", "Ghost"],
      "base": {
        "HP": 53,
        "Attack": 127,
        "Defense": 53,
        "Sp. Attack": 151,
        "Sp. Defense": 79,
        "Speed": 107
      },
      "species": "Fireworks Pokémon",
      "description": "A UB that appeared from an Ultra Wormhole, it causes explosions, then takes advantage of opponents’ surprise to rob them of their vitality.",
      "evolution": {},
      "profile": {
        "height": "1.8 m",
        "weight": "13 kg",
        "egg": ["Undiscovered"],
        "ability": [["Beast Boost", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/806.png",
        "thumbnail": "src/assets/thumbnails/806.png",
        "hires": "src/assets/hires/806.png"
      }
    },
    {
      "id": 807,
      "name": {
        "english": "Zeraora",
        "japanese": "ゼラオラ",
        "chinese": "捷拉奥拉",
        "french": "Zeraora"
      },
      "type": ["Electric"],
      "base": {
        "HP": 88,
        "Attack": 112,
        "Defense": 75,
        "Sp. Attack": 102,
        "Sp. Defense": 80,
        "Speed": 143
      },
      "species": "Thunderclap Pokémon",
      "description": "It approaches its enemies at the speed of lightning, then tears them limb from limb with its sharp claws.",
      "evolution": {},
      "profile": {
        "height": "1.5 m",
        "weight": "44.5 kg",
        "egg": ["Undiscovered"],
        "ability": [["Volt Absorb", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/807.png",
        "thumbnail": "src/assets/thumbnails/807.png",
        "hires": "src/assets/hires/807.png"
      }
    },
    {
      "id": 808,
      "name": {
        "english": "Meltan",
        "japanese": "メルタン",
        "chinese": "美录坦",
        "french": "Meltan"
      },
      "type": ["Steel"],
      "base": {
        "HP": 46,
        "Attack": 65,
        "Defense": 65,
        "Sp. Attack": 55,
        "Sp. Defense": 35,
        "Speed": 34
      },
      "species": "Hex Nut Pokémon",
      "description": "They live as a group, but when the time comes, one strong Meltan will absorb all the others and evolve.",
      "evolution": { "next": [["809", "Pokémon GO only, 400 Meltan Candies"]] },
      "profile": {
        "height": "0.2 m",
        "weight": "8.0 kg",
        "egg": ["Undiscovered"],
        "ability": [["Magnet Pull", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/808.png",
        "thumbnail": "src/assets/thumbnails/808.png",
        "hires": "src/assets/hires/808.png"
      }
    },
    {
      "id": 809,
      "name": {
        "english": "Melmetal",
        "japanese": "メルメタル",
        "chinese": "美录梅塔",
        "french": "Melmetal"
      },
      "type": ["Steel"],
      "base": {
        "HP": 135,
        "Attack": 143,
        "Defense": 143,
        "Sp. Attack": 80,
        "Sp. Defense": 65,
        "Speed": 34
      },
      "species": "Hex Nut Pokémon",
      "description": "Centrifugal force is behind the punches of Melmetal's heavy hex-nut arms. Melmetal is said to deliver the strongest punches of all Pokémon.",
      "evolution": { "prev": ["808", "Pokémon GO only, 400 Meltan Candies"] },
      "profile": {
        "height": "2.5 m",
        "weight": "800.0 kg",
        "egg": ["Undiscovered"],
        "ability": [["Iron Fist", "false"]],
        "gender": "Genderless"
      },
      "image": {
        "sprite": "src/assets/sprites/809.png",
        "thumbnail": "src/assets/thumbnails/809.png",
        "hires": "src/assets/hires/809.png"
      }
    },
    {
      "id": 810,
      "name": {
        "english": "Grookey",
        "japanese": "サルノリ",
        "chinese": "敲音猴",
        "french": "Ouistempo"
      },
      "type": ["Grass"],
      "species": "Chimp Pokémon",
      "description": "It attacks with rapid beats of its stick. As it strikes with amazing speed, it gets more and more pumped.",
      "evolution": { "next": [["811", "Level 16"]] },
      "profile": {
        "height": "0 m",
        "weight": "5 kg",
        "gender": "87.5:12.5",
        "ability": [
          ["Overgrow", "false"],
          ["Grassy-surge", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/810.png",
        "thumbnail": "src/assets/thumbnails/810.png",
        "hires": "src/assets/hires/810.png"
      }
    },
    {
      "id": 811,
      "name": {
        "english": "Thwackey",
        "japanese": "バチンキー",
        "chinese": "啪咚猴",
        "french": "Badabouin"
      },
      "type": ["Grass"],
      "species": "Beat Pokémon",
      "description": "When it’s drumming out rapid beats in battle, it gets so caught up in the rhythm that it won’t even notice that it’s already knocked out its opponent.",
      "evolution": { "prev": ["810", "Level 16"], "next": [["812", "Level 35"]] },
      "profile": {
        "height": "1 m",
        "weight": "14 kg",
        "gender": "87.5:12.5",
        "ability": [
          ["Overgrow", "false"],
          ["Grassy-surge", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/811.png",
        "thumbnail": "src/assets/thumbnails/811.png",
        "hires": "src/assets/hires/811.png"
      }
    },
    {
      "id": 812,
      "name": {
        "english": "Rillaboom",
        "japanese": "ゴリランダー",
        "chinese": "轰擂金刚猩",
        "french": "Gorythmic"
      },
      "type": ["Grass"],
      "species": "Drummer Pokémon",
      "description": "The one with the best drumming techniques becomes the boss of the troop. It has a gentle disposition and values harmony among its group.",
      "evolution": { "prev": ["811", "Level 35"] },
      "profile": {
        "height": "2 m",
        "weight": "90 kg",
        "gender": "87.5:12.5",
        "ability": [
          ["Overgrow", "false"],
          ["Grassy-surge", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/812.png",
        "thumbnail": "src/assets/thumbnails/812.png",
        "hires": "src/assets/hires/812.png"
      }
    },
    {
      "id": 813,
      "name": {
        "english": "Scorbunny",
        "japanese": "ヒバニー",
        "chinese": "炎兔儿",
        "french": "Flambino"
      },
      "type": ["Fire"],
      "species": "Rabbit Pokémon",
      "description": "It has special pads on the backs of its feet, and one on its nose. Once it’s raring to fight, these pads radiate tremendous heat.",
      "evolution": { "next": [["814", "Level 16"]] },
      "profile": {
        "height": "0 m",
        "weight": "4 kg",
        "gender": "87.5:12.5",
        "ability": [
          ["Blaze", "false"],
          ["Libero", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/813.png",
        "thumbnail": "src/assets/thumbnails/813.png",
        "hires": "src/assets/hires/813.png"
      }
    },
    {
      "id": 814,
      "name": {
        "english": "Raboot",
        "japanese": "ラビフット",
        "chinese": "腾蹴小将",
        "french": "Lapyro"
      },
      "type": ["Fire"],
      "species": "Rabbit Pokémon",
      "description": "It kicks berries right off the branches of trees and then juggles them with its feet, practicing its footwork.",
      "evolution": { "prev": ["813", "Level 16"], "next": [["815", "Level 35"]] },
      "profile": {
        "height": "1 m",
        "weight": "9 kg",
        "gender": "87.5:12.5",
        "ability": [
          ["Blaze", "false"],
          ["Libero", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/814.png",
        "thumbnail": "src/assets/thumbnails/814.png",
        "hires": "src/assets/hires/814.png"
      }
    },
    {
      "id": 815,
      "name": {
        "english": "Cinderace",
        "japanese": "エースバーン",
        "chinese": "闪焰王牌",
        "french": "Pyrobut"
      },
      "type": ["Fire"],
      "species": "Striker Pokémon",
      "description": "It’s skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot.",
      "evolution": { "prev": ["814", "Level 35"] },
      "profile": {
        "height": "1 m",
        "weight": "33 kg",
        "gender": "87.5:12.5",
        "ability": [
          ["Blaze", "false"],
          ["Libero", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/815.png",
        "thumbnail": "src/assets/thumbnails/815.png",
        "hires": "src/assets/hires/815.png"
      }
    },
    {
      "id": 816,
      "name": {
        "english": "Sobble",
        "japanese": "メッソン",
        "chinese": "泪眼蜥",
        "french": "Larméléon"
      },
      "type": ["Water"],
      "species": "Water Lizard Pokémon",
      "description": "When it gets wet, its skin changes color, and this Pokémon becomes invisible as if it were camouflaged.",
      "evolution": { "next": [["817", "Level 16"]] },
      "profile": {
        "height": "0 m",
        "weight": "4 kg",
        "gender": "87.5:12.5",
        "ability": [
          ["Torrent", "false"],
          ["Sniper", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/816.png",
        "thumbnail": "src/assets/thumbnails/816.png",
        "hires": "src/assets/hires/816.png"
      }
    },
    {
      "id": 817,
      "name": {
        "english": "Drizzile",
        "japanese": "ジメレオン",
        "chinese": "变涩蜥",
        "french": "Arrozard"
      },
      "type": ["Water"],
      "species": "Water lizard Pokémon",
      "description": "Highly intelligent but also very lazy, it keeps enemies out of its territory by laying traps everywhere.",
      "evolution": { "prev": ["816", "Level 16"], "next": [["818", "Level 35"]] },
      "profile": {
        "height": "1 m",
        "weight": "12 kg",
        "gender": "87.5:12.5",
        "ability": [
          ["Torrent", "false"],
          ["Sniper", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/817.png",
        "thumbnail": "src/assets/thumbnails/817.png",
        "hires": "src/assets/hires/817.png"
      }
    },
    {
      "id": 818,
      "name": {
        "english": "Inteleon",
        "japanese": "インテレオン",
        "chinese": "千面避役",
        "french": "Lézargus"
      },
      "type": ["Water"],
      "species": "Secret Agent Pokémon",
      "description": "Its nictitating membranes let it pick out foes’ weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3.",
      "evolution": { "prev": ["817", "Level 35"] },
      "profile": {
        "height": "2 m",
        "weight": "45 kg",
        "gender": "87.5:12.5",
        "ability": [
          ["Torrent", "false"],
          ["Sniper", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/818.png",
        "thumbnail": "src/assets/thumbnails/818.png",
        "hires": "src/assets/hires/818.png"
      }
    },
    {
      "id": 819,
      "name": {
        "english": "Skwovet",
        "japanese": "ホシガリス",
        "chinese": "贪心栗鼠",
        "french": "Rongourmand"
      },
      "type": ["Normal"],
      "species": "Cheeky Pokémon",
      "description": "It eats berries nonstop—a habit that has made it more resilient than it looks. It’ll show up on farms, searching for yet more berries.",
      "evolution": { "next": [["820", "Level 24"]] },
      "profile": {
        "height": "0 m",
        "weight": "2 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Cheek-pouch", "false"],
          ["Gluttony", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/819.png",
        "thumbnail": "src/assets/thumbnails/819.png",
        "hires": "src/assets/hires/819.png"
      }
    },
    {
      "id": 820,
      "name": {
        "english": "Greedent",
        "japanese": "ヨクバリス",
        "chinese": "藏饱栗鼠",
        "french": "Rongrigou"
      },
      "type": ["Normal"],
      "species": "Greedy Pokémon",
      "description": "Common throughout the Galar region, this Pokémon has strong teeth and can chew through the toughest of berry shells.",
      "evolution": { "prev": ["819", "Level 24"] },
      "profile": {
        "height": "1 m",
        "weight": "6 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Cheek-pouch", "false"],
          ["Gluttony", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/820.png",
        "thumbnail": "src/assets/thumbnails/820.png",
        "hires": "src/assets/hires/820.png"
      }
    },
    {
      "id": 821,
      "name": {
        "english": "Rookidee",
        "japanese": "ココガラ",
        "chinese": "稚山雀",
        "french": "Minisange"
      },
      "type": ["Flying"],
      "species": "Tiny Bird Pokémon",
      "description": "Jumping nimbly about, this small-bodied Pokémon takes advantage of even the slightest opportunity to disorient larger opponents.",
      "evolution": { "next": [["822", "Level 18"]] },
      "profile": {
        "height": "0 m",
        "weight": "2 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Keen-eye", "false"],
          ["Unnerve", "false"],
          ["Big-pecks", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/821.png",
        "thumbnail": "src/assets/thumbnails/821.png",
        "hires": "src/assets/hires/821.png"
      }
    },
    {
      "id": 822,
      "name": {
        "english": "Corvisquire",
        "japanese": "アオガラス",
        "chinese": "蓝鸦",
        "french": "Bleuseille"
      },
      "type": ["Flying"],
      "species": "Raven Pokémon",
      "description": "The lessons of many harsh battles have taught it how to accurately judge an opponent’s strength.",
      "evolution": { "prev": ["821", "Level 18"], "next": [["823", "Level 38"]] },
      "profile": {
        "height": "1 m",
        "weight": "16 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Keen-eye", "false"],
          ["Unnerve", "false"],
          ["Big-pecks", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/822.png",
        "thumbnail": "src/assets/thumbnails/822.png",
        "hires": "src/assets/hires/822.png"
      }
    },
    {
      "id": 823,
      "name": {
        "english": "Corviknight",
        "japanese": "アーマーガア",
        "chinese": "钢铠鸦",
        "french": "Corvaillus"
      },
      "type": ["Flying", "Steel"],
      "species": "Raven Pokémon",
      "description": "With their great intellect and flying skills, these Pokémon very successfully act as the Galar region’s airborne taxi service.",
      "evolution": { "prev": ["822", "Level 38"] },
      "profile": {
        "height": "2 m",
        "weight": "75 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Pressure", "false"],
          ["Unnerve", "false"],
          ["Mirror-armor", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/823.png",
        "thumbnail": "src/assets/thumbnails/823.png",
        "hires": "src/assets/hires/823.png"
      }
    },
    {
      "id": 824,
      "name": {
        "english": "Blipbug",
        "japanese": "サッチムシ",
        "chinese": "索侦虫",
        "french": "Larvadar"
      },
      "type": ["Bug"],
      "species": "Larva Pokémon",
      "description": "Often found in gardens, this Pokémon has hairs on its body that it uses to assess its surroundings.",
      "evolution": { "next": [["825", "Level 10"]] },
      "profile": {
        "height": "0 m",
        "weight": "8 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Swarm", "false"],
          ["Compound-eyes", "false"],
          ["Telepathy", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/824.png",
        "thumbnail": "src/assets/thumbnails/824.png",
        "hires": "src/assets/hires/824.png"
      }
    },
    {
      "id": 825,
      "name": {
        "english": "Dottler",
        "japanese": "レドームシ",
        "chinese": "天罩虫",
        "french": "Coléodôme"
      },
      "type": ["Bug", "Psychic"],
      "species": "Radome Pokémon",
      "description": "As it grows inside its shell, it uses its psychic abilities to monitor the outside world and prepare for evolution.",
      "evolution": { "prev": ["824", "Level 10"], "next": [["826", "Level 30"]] },
      "profile": {
        "height": "0 m",
        "weight": "20 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Swarm", "false"],
          ["Compound-eyes", "false"],
          ["Telepathy", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/825.png",
        "thumbnail": "src/assets/thumbnails/825.png",
        "hires": "src/assets/hires/825.png"
      }
    },
    {
      "id": 826,
      "name": {
        "english": "Orbeetle",
        "japanese": "イオルブ",
        "chinese": "以欧路普",
        "french": "Astronelle"
      },
      "type": ["Bug", "Psychic"],
      "species": "Seven Spot Pokémon",
      "description": "It emits psychic energy to observe and study what’s around it—and what’s around it can include things over six miles away.",
      "evolution": { "prev": ["825", "Level 30"] },
      "profile": {
        "height": "0 m",
        "weight": "41 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Swarm", "false"],
          ["Frisk", "false"],
          ["Telepathy", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/826.png",
        "thumbnail": "src/assets/thumbnails/826.png",
        "hires": "src/assets/hires/826.png"
      }
    },
    {
      "id": 827,
      "name": {
        "english": "Nickit",
        "japanese": "クスネ",
        "chinese": "偷儿狐",
        "french": "Goupilou"
      },
      "type": ["Dark"],
      "species": "Fox Pokémon",
      "description": "Cunning and cautious, this Pokémon survives by stealing food from others. It erases its tracks with swipes of its tail as it makes off with its plunder.",
      "evolution": { "next": [["828", "Level 18"]] },
      "profile": {
        "height": "1 m",
        "weight": "9 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Run-away", "false"],
          ["Unburden", "false"],
          ["Stakeout", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/827.png",
        "thumbnail": "src/assets/thumbnails/827.png",
        "hires": "src/assets/hires/827.png"
      }
    },
    {
      "id": 828,
      "name": {
        "english": "Thievul",
        "japanese": "フォクスライ",
        "chinese": "狐大盗",
        "french": "Roublenard"
      },
      "type": ["Dark"],
      "species": "Fox Pokémon",
      "description": "With a lithe body and sharp claws, it goes around stealing food and eggs. Boltund is its natural enemy.",
      "evolution": { "prev": ["827", "Level 18"] },
      "profile": {
        "height": "1 m",
        "weight": "20 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Run-away", "false"],
          ["Unburden", "false"],
          ["Stakeout", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/828.png",
        "thumbnail": "src/assets/thumbnails/828.png",
        "hires": "src/assets/hires/828.png"
      }
    },
    {
      "id": 829,
      "name": {
        "english": "Gossifleur",
        "japanese": "ヒメンカ",
        "chinese": "幼棉棉",
        "french": "Tournicoton"
      },
      "type": ["Grass"],
      "species": "Flowering Pokémon",
      "description": "It whirls around in the wind while singing a joyous song. This delightful display has charmed many into raising this Pokémon.",
      "evolution": { "next": [["830", "Level 20"]] },
      "profile": {
        "height": "0 m",
        "weight": "2 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Cotton-down", "false"],
          ["Regenerator", "false"],
          ["Effect-spore", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/829.png",
        "thumbnail": "src/assets/thumbnails/829.png",
        "hires": "src/assets/hires/829.png"
      }
    },
    {
      "id": 830,
      "name": {
        "english": "Eldegoss",
        "japanese": "ワタシラガ",
        "chinese": "白蓬蓬",
        "french": "Blancoton"
      },
      "type": ["Grass"],
      "species": "Cotton Bloom Pokémon",
      "description": "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty.",
      "evolution": { "prev": ["829", "Level 20"] },
      "profile": {
        "height": "1 m",
        "weight": "2 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Cotton-down", "false"],
          ["Regenerator", "false"],
          ["Effect-spore", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/830.png",
        "thumbnail": "src/assets/thumbnails/830.png",
        "hires": "src/assets/hires/830.png"
      }
    },
    {
      "id": 831,
      "name": {
        "english": "Wooloo",
        "japanese": "ウールー",
        "chinese": "毛辫羊",
        "french": "Moumouton"
      },
      "type": ["Normal"],
      "species": "Sheep Pokémon",
      "description": "If its fleece grows too long, Wooloo won’t be able to move. Cloth made with the wool of this Pokémon is surprisingly strong.",
      "evolution": { "next": [["832", "Level 24"]] },
      "profile": {
        "height": "1 m",
        "weight": "6 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Fluffy", "false"],
          ["Run-away", "false"],
          ["Bulletproof", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/831.png",
        "thumbnail": "src/assets/thumbnails/831.png",
        "hires": "src/assets/hires/831.png"
      }
    },
    {
      "id": 832,
      "name": {
        "english": "Dubwool",
        "japanese": "バイウールー",
        "chinese": "毛毛角羊",
        "french": "Moumouflon"
      },
      "type": ["Normal"],
      "species": "Sheep Pokémon",
      "description": "Its majestic horns are meant only to impress the opposite gender. They never see use in battle.",
      "evolution": { "prev": ["831", "Level 24"] },
      "profile": {
        "height": "1 m",
        "weight": "43 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Fluffy", "false"],
          ["Run-away", "false"],
          ["Bulletproof", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/832.png",
        "thumbnail": "src/assets/thumbnails/832.png",
        "hires": "src/assets/hires/832.png"
      }
    },
    {
      "id": 833,
      "name": {
        "english": "Chewtle",
        "japanese": "カムカメ",
        "chinese": "咬咬龟 ",
        "french": "Khélocrok"
      },
      "type": ["Water"],
      "species": "Snapping Pokémon",
      "description": "It starts off battles by attacking with its rock-hard horn, but as soon as the opponent flinches, this Pokémon bites down and never lets go.",
      "evolution": { "next": [["834", "Level 22"]] },
      "profile": {
        "height": "0 m",
        "weight": "8 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Strong-jaw", "false"],
          ["Shell-armor", "false"],
          ["Swift-swim", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/833.png",
        "thumbnail": "src/assets/thumbnails/833.png",
        "hires": "src/assets/hires/833.png"
      }
    },
    {
      "id": 834,
      "name": {
        "english": "Drednaw",
        "japanese": "カジリガメ",
        "chinese": "暴噬龟",
        "french": "Torgamord"
      },
      "type": ["Water", "Rock"],
      "species": "Bite Pokémon",
      "description": "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down.",
      "evolution": { "prev": ["833", "Level 22"] },
      "profile": {
        "height": "1 m",
        "weight": "116 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Strong-jaw", "false"],
          ["Shell-armor", "false"],
          ["Swift-swim", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/834.png",
        "thumbnail": "src/assets/thumbnails/834.png",
        "hires": "src/assets/hires/834.png"
      }
    },
    {
      "id": 835,
      "name": {
        "english": "Yamper",
        "japanese": "ワンパチ",
        "chinese": "来电汪",
        "french": "Voltoutou"
      },
      "type": ["Electric"],
      "species": "Puppy Pokémon",
      "description": "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity.",
      "evolution": { "next": [["836", "Level 25"]] },
      "profile": {
        "height": "0 m",
        "weight": "14 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Ball-fetch", "false"],
          ["Rattled", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/835.png",
        "thumbnail": "src/assets/thumbnails/835.png",
        "hires": "src/assets/hires/835.png"
      }
    },
    {
      "id": 836,
      "name": {
        "english": "Boltund",
        "japanese": "パルスワン",
        "chinese": "逐电犬",
        "french": "Fulgudog"
      },
      "type": ["Electric"],
      "species": "Dog Pokémon",
      "description": "It sends electricity through its legs to boost their strength. Running at top speed, it easily breaks 50 mph.",
      "evolution": { "prev": ["835", "Level 25"] },
      "profile": {
        "height": "1 m",
        "weight": "34 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Strong-jaw", "false"],
          ["Competitive", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/836.png",
        "thumbnail": "src/assets/thumbnails/836.png",
        "hires": "src/assets/hires/836.png"
      }
    },
    {
      "id": 837,
      "name": {
        "english": "Rolycoly",
        "japanese": "タンドン",
        "chinese": "小炭仔",
        "french": "Charbi"
      },
      "type": ["Rock"],
      "species": "Coal Pokémon",
      "description": "It can race around like a unicycle, even on rough, rocky terrain. Burning coal sustains it.",
      "evolution": { "next": [["838", "Level 18"]] },
      "profile": {
        "height": "0 m",
        "weight": "12 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Steam-engine", "false"],
          ["Heatproof", "false"],
          ["Flash-fire", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/837.png",
        "thumbnail": "src/assets/thumbnails/837.png",
        "hires": "src/assets/hires/837.png"
      }
    },
    {
      "id": 838,
      "name": {
        "english": "Carkol",
        "japanese": "トロッゴン",
        "chinese": "大炭车",
        "french": "Wagomine"
      },
      "type": ["Rock", "Fire"],
      "species": "Coal Pokémon",
      "description": "By rapidly rolling its legs, it can travel at over 18 mph. The temperature of the flames it breathes exceeds 1,800 degrees Fahrenheit.",
      "evolution": { "prev": ["837", "Level 18"], "next": [["839", "Level 34"]] },
      "profile": {
        "height": "1 m",
        "weight": "78 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Steam-engine", "false"],
          ["Flame-body", "false"],
          ["Flash-fire", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/838.png",
        "thumbnail": "src/assets/thumbnails/838.png",
        "hires": "src/assets/hires/838.png"
      }
    },
    {
      "id": 839,
      "name": {
        "english": "Coalossal",
        "japanese": "セキタンザン",
        "chinese": "巨炭山",
        "french": "Monthracite"
      },
      "type": ["Rock", "Fire"],
      "species": "Coal Pokémon",
      "description": "While it’s engaged in battle, its mountain of coal will burn bright red, sending off sparks that scorch the surrounding area.",
      "evolution": { "prev": ["838", "Level 34"] },
      "profile": {
        "height": "3 m",
        "weight": "310 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Steam-engine", "false"],
          ["Flame-body", "false"],
          ["Flash-fire", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/839.png",
        "thumbnail": "src/assets/thumbnails/839.png",
        "hires": "src/assets/hires/839.png"
      }
    },
    {
      "id": 840,
      "name": {
        "english": "Applin",
        "japanese": "カジッチュ",
        "chinese": "啃果虫",
        "french": "Verpom"
      },
      "type": ["Grass", "Dragon"],
      "species": "Apple Core Pokémon",
      "description": "As soon as it’s born, it burrows into an apple. Not only does the apple serve as its food source, but the flavor of the fruit determines its evolution.",
      "evolution": {
        "next": [
          ["841", "use "],
          ["842", "use "]
        ]
      },
      "profile": {
        "height": "0 m",
        "weight": "0 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Ripen", "false"],
          ["Gluttony", "false"],
          ["Bulletproof", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/840.png",
        "thumbnail": "src/assets/thumbnails/840.png",
        "hires": "src/assets/hires/840.png"
      }
    },
    {
      "id": 841,
      "name": {
        "english": "Flapple",
        "japanese": "アップリュー",
        "chinese": "苹裹龙",
        "french": "Pomdrapi"
      },
      "type": ["Grass", "Dragon"],
      "species": "Apple Wing Pokémon",
      "description": "It flies on wings of apple skin and spits a powerful acid. It can also change its shape into that of an apple.",
      "evolution": { "prev": ["840", "use "] },
      "profile": {
        "height": "0 m",
        "weight": "1 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Ripen", "false"],
          ["Gluttony", "false"],
          ["Hustle", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/841.png",
        "thumbnail": "src/assets/thumbnails/841.png",
        "hires": "src/assets/hires/841.png"
      }
    },
    {
      "id": 842,
      "name": {
        "english": "Appletun",
        "japanese": "タルップル",
        "chinese": "丰蜜龙",
        "french": "Dratatin"
      },
      "type": ["Grass", "Dragon"],
      "species": "Apple Nectar Pokémon",
      "description": "Its body is covered in sweet nectar, and the skin on its back is especially yummy. Children used to have it as a snack.",
      "evolution": { "prev": ["840", "use "] },
      "profile": {
        "height": "0 m",
        "weight": "13 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Ripen", "false"],
          ["Gluttony", "false"],
          ["Thick-fat", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/842.png",
        "thumbnail": "src/assets/thumbnails/842.png",
        "hires": "src/assets/hires/842.png"
      }
    },
    {
      "id": 843,
      "name": {
        "english": "Silicobra",
        "japanese": "スナヘビ",
        "chinese": "沙包蛇",
        "french": "Dunaja"
      },
      "type": ["Ground"],
      "species": "Sand Snake Pokémon",
      "description": "It spews sand from its nostrils. While the enemy is blinded, it burrows into the ground to hide.",
      "evolution": { "next": [["844", "Level 36"]] },
      "profile": {
        "height": "2 m",
        "weight": "8 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Sand-spit", "false"],
          ["Shed-skin", "false"],
          ["Sand-veil", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/843.png",
        "thumbnail": "src/assets/thumbnails/843.png",
        "hires": "src/assets/hires/843.png"
      }
    },
    {
      "id": 844,
      "name": {
        "english": "Sandaconda",
        "japanese": "サダイジャ",
        "chinese": "沙螺蟒",
        "french": "Dunaconda"
      },
      "type": ["Ground"],
      "species": "Sand Snake Pokémon",
      "description": "Its unique style of coiling allows it to blast sand out of its sand sac more efficiently.",
      "evolution": { "prev": ["843", "Level 36"] },
      "profile": {
        "height": "4 m",
        "weight": "66 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Sand-spit", "false"],
          ["Shed-skin", "false"],
          ["Sand-veil", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/844.png",
        "thumbnail": "src/assets/thumbnails/844.png",
        "hires": "src/assets/hires/844.png"
      }
    },
    {
      "id": 845,
      "name": {
        "english": "Cramorant",
        "japanese": "ウッウ",
        "chinese": "古月鸟",
        "french": "Nigosier"
      },
      "type": ["Flying", "Water"],
      "species": "Gulp Pokémon",
      "description": "This hungry Pokémon swallows Arrokuda whole. Occasionally, it makes a mistake and tries to swallow a Pokémon other than its preferred prey.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "18 kg",
        "gender": "50.0:50.0",
        "ability": [["Gulp-missile", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/845.png",
        "thumbnail": "src/assets/thumbnails/845.png",
        "hires": "src/assets/hires/845.png"
      }
    },
    {
      "id": 846,
      "name": {
        "english": "Arrokuda",
        "japanese": "サシカマス",
        "chinese": "刺梭鱼",
        "french": "Embrochet"
      },
      "type": ["Water"],
      "species": "Rush Pokémon",
      "description": "After it’s eaten its fill, its movements become extremely sluggish. That’s when Cramorant swallows it up.",
      "evolution": { "next": [["847", "Level 26"]] },
      "profile": {
        "height": "1 m",
        "weight": "1 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Swift-swim", "false"],
          ["Propeller-tail", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/846.png",
        "thumbnail": "src/assets/thumbnails/846.png",
        "hires": "src/assets/hires/846.png"
      }
    },
    {
      "id": 847,
      "name": {
        "english": "Barraskewda",
        "japanese": "カマスジョー",
        "chinese": "戽斗尖梭",
        "french": "Hastacuda"
      },
      "type": ["Water"],
      "species": "Skewer Pokémon",
      "description": "It spins its tail fins to propel itself, surging forward at speeds of over 100 knots before ramming prey and spearing into them.",
      "evolution": { "prev": ["846", "Level 26"] },
      "profile": {
        "height": "1 m",
        "weight": "30 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Swift-swim", "false"],
          ["Propeller-tail", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/847.png",
        "thumbnail": "src/assets/thumbnails/847.png",
        "hires": "src/assets/hires/847.png"
      }
    },
    {
      "id": 848,
      "name": {
        "english": "Toxel",
        "japanese": "エレズン",
        "chinese": "毒电婴",
        "french": "Toxizap"
      },
      "type": ["Electric", "Poison"],
      "species": "Baby Pokémon",
      "description": "It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis.",
      "evolution": { "next": [["849", "Level 30, with a "]] },
      "profile": {
        "height": "0 m",
        "weight": "11 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Rattled", "false"],
          ["Static", "false"],
          ["Klutz", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/848.png",
        "thumbnail": "src/assets/thumbnails/848.png",
        "hires": "src/assets/hires/848.png"
      }
    },
    {
      "id": 849,
      "name": {
        "english": "Toxtricity",
        "japanese": "ストリンダー",
        "chinese": "颤弦蝾螈",
        "french": "Salarsen"
      },
      "type": ["Electric", "Poison"],
      "species": "Punk Pokémon",
      "description": "This short-tempered and aggressive Pokémon chugs stagnant water to absorb any toxins it might contain.",
      "evolution": { "next": [["849", "Level 30, with a "]] },
      "profile": {
        "height": "2 m",
        "weight": "40 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Punk-rock", "false"],
          ["Plus", "false"],
          ["Technician", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/849.png",
        "thumbnail": "src/assets/thumbnails/849.png",
        "hires": "src/assets/hires/849.png"
      }
    },
    {
      "id": 850,
      "name": {
        "english": "Sizzlipede",
        "japanese": "ヤクデ",
        "chinese": "烧火蚣",
        "french": "Grillepattes"
      },
      "type": ["Fire", "Bug"],
      "species": "Radiator Pokémon",
      "description": "It wraps prey up with its heated body, cooking them in its coils. Once they’re well-done, it will voraciously nibble them down to the last morsel.",
      "evolution": { "next": [["851", "Level 28"]] },
      "profile": {
        "height": "1 m",
        "weight": "1 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Flash-fire", "false"],
          ["White-smoke", "false"],
          ["Flame-body", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/850.png",
        "thumbnail": "src/assets/thumbnails/850.png",
        "hires": "src/assets/hires/850.png"
      }
    },
    {
      "id": 851,
      "name": {
        "english": "Centiskorch",
        "japanese": "マルヤクデ",
        "chinese": "焚焰蚣",
        "french": "Scolocendre"
      },
      "type": ["Fire", "Bug"],
      "species": "Radiator Pokémon",
      "description": "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs.",
      "evolution": { "prev": ["850", "Level 28"] },
      "profile": {
        "height": "3 m",
        "weight": "120 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Flash-fire", "false"],
          ["White-smoke", "false"],
          ["Flame-body", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/851.png",
        "thumbnail": "src/assets/thumbnails/851.png",
        "hires": "src/assets/hires/851.png"
      }
    },
    {
      "id": 852,
      "name": {
        "english": "Clobbopus",
        "japanese": "タタッコ",
        "chinese": "拳拳蛸",
        "french": "Poulpaf"
      },
      "type": ["Fighting"],
      "species": "Tantrum Pokémon",
      "description": "Its tentacles tear off easily, but it isn’t alarmed when that happens—it knows they’ll grow back. It’s about as smart as a three-year-old.",
      "evolution": { "next": [["853", "after "]] },
      "profile": {
        "height": "1 m",
        "weight": "4 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Limber", "false"],
          ["Technician", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/852.png",
        "thumbnail": "src/assets/thumbnails/852.png",
        "hires": "src/assets/hires/852.png"
      }
    },
    {
      "id": 853,
      "name": {
        "english": "Grapploct",
        "japanese": "オトスパス",
        "chinese": "八爪武师",
        "french": "Krakos"
      },
      "type": ["Fighting"],
      "species": "Tantrum Pokémon",
      "description": "Searching for an opponent to test its skills against, it emerges onto land. Once the battle is over, it returns to the sea.",
      "evolution": { "prev": ["852", "after "] },
      "profile": {
        "height": "2 m",
        "weight": "39 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Limber", "false"],
          ["Technician", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/853.png",
        "thumbnail": "src/assets/thumbnails/853.png",
        "hires": "src/assets/hires/853.png"
      }
    },
    {
      "id": 854,
      "name": {
        "english": "Sinistea",
        "japanese": "ヤバチャ",
        "chinese": "来悲茶",
        "french": "Théffroi"
      },
      "type": ["Ghost"],
      "species": "Black Tea Pokémon",
      "description": "The teacup in which this Pokémon makes its home is a famous piece of antique tableware. Many forgeries are in circulation.",
      "evolution": { "next": [["855", "use "]] },
      "profile": {
        "height": "0 m",
        "weight": "0 kg",
        "gender": "Genderless",
        "ability": [
          ["Weak-armor", "false"],
          ["Cursed-body", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/854.png",
        "thumbnail": "src/assets/thumbnails/854.png",
        "hires": "src/assets/hires/854.png"
      }
    },
    {
      "id": 855,
      "name": {
        "english": "Polteageist",
        "japanese": "ポットデス",
        "chinese": "怖思壶",
        "french": "Polthégeist"
      },
      "type": ["Ghost"],
      "species": "Black Tea Pokémon",
      "description": "Leaving leftover black tea unattended is asking for this Pokémon to come along and pour itself into it, turning the tea into a new Polteageist.",
      "evolution": { "prev": ["854", "use "] },
      "profile": {
        "height": "0 m",
        "weight": "0 kg",
        "gender": "Genderless",
        "ability": [
          ["Weak-armor", "false"],
          ["Cursed-body", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/855.png",
        "thumbnail": "src/assets/thumbnails/855.png",
        "hires": "src/assets/hires/855.png"
      }
    },
    {
      "id": 856,
      "name": {
        "english": "Hatenna",
        "japanese": "ミブリム",
        "chinese": "迷布莉姆",
        "french": "Bibichut"
      },
      "type": ["Psychic"],
      "species": "Calm Pokémon",
      "description": "If this Pokémon senses a strong emotion, it will run away as fast as it can. It prefers areas without people.",
      "evolution": { "next": [["857", "Level 32"]] },
      "profile": {
        "height": "0 m",
        "weight": "3 kg",
        "gender": "0.0:100.0",
        "ability": [
          ["Healer", "false"],
          ["Anticipation", "false"],
          ["Magic-bounce", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/856.png",
        "thumbnail": "src/assets/thumbnails/856.png",
        "hires": "src/assets/hires/856.png"
      }
    },
    {
      "id": 857,
      "name": {
        "english": "Hattrem",
        "japanese": "テブリム",
        "chinese": "提布莉姆",
        "french": "Chapotus"
      },
      "type": ["Psychic"],
      "species": "Serene Pokémon",
      "description": "Using the braids on its head, it pummels foes to get them to quiet down. One blow from those braids would knock out a professional boxer.",
      "evolution": { "prev": ["856", "Level 32"], "next": [["858", "Level 42"]] },
      "profile": {
        "height": "1 m",
        "weight": "5 kg",
        "gender": "0.0:100.0",
        "ability": [
          ["Healer", "false"],
          ["Anticipation", "false"],
          ["Magic-bounce", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/857.png",
        "thumbnail": "src/assets/thumbnails/857.png",
        "hires": "src/assets/hires/857.png"
      }
    },
    {
      "id": 858,
      "name": {
        "english": "Hatterene",
        "japanese": "ブリムオン",
        "chinese": "布莉姆温",
        "french": "Sorcilence"
      },
      "type": ["Psychic", "Fairy"],
      "species": "Silent Pokémon",
      "description": "If you’re too loud around it, you risk being torn apart by the claws on its tentacle. This Pokémon is also known as the Forest Witch.",
      "evolution": { "prev": ["857", "Level 42"] },
      "profile": {
        "height": "2 m",
        "weight": "5 kg",
        "gender": "0.0:100.0",
        "ability": [
          ["Healer", "false"],
          ["Anticipation", "false"],
          ["Magic-bounce", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/858.png",
        "thumbnail": "src/assets/thumbnails/858.png",
        "hires": "src/assets/hires/858.png"
      }
    },
    {
      "id": 859,
      "name": {
        "english": "Impidimp",
        "japanese": "ベロバー",
        "chinese": "捣蛋小妖",
        "french": "Grimalin"
      },
      "type": ["Dark", "Fairy"],
      "species": "Wily Pokémon",
      "description": "It sneaks into people’s homes, stealing things and feasting on the negative energy of the frustrated occupants.",
      "evolution": { "next": [["860", "Level 32"]] },
      "profile": {
        "height": "0 m",
        "weight": "6 kg",
        "gender": "100.0:0.0",
        "ability": [
          ["Prankster", "false"],
          ["Frisk", "false"],
          ["Pickpocket", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/859.png",
        "thumbnail": "src/assets/thumbnails/859.png",
        "hires": "src/assets/hires/859.png"
      }
    },
    {
      "id": 860,
      "name": {
        "english": "Morgrem",
        "japanese": "ギモー",
        "chinese": "诈唬魔",
        "french": "Fourbelin"
      },
      "type": ["Dark", "Fairy"],
      "species": "Devious Pokémon",
      "description": "With sly cunning, it tries to lure people into the woods. Some believe it to have the power to make crops grow.",
      "evolution": { "prev": ["859", "Level 32"], "next": [["861", "Level 42"]] },
      "profile": {
        "height": "1 m",
        "weight": "12 kg",
        "gender": "100.0:0.0",
        "ability": [
          ["Prankster", "false"],
          ["Frisk", "false"],
          ["Pickpocket", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/860.png",
        "thumbnail": "src/assets/thumbnails/860.png",
        "hires": "src/assets/hires/860.png"
      }
    },
    {
      "id": 861,
      "name": {
        "english": "Grimmsnarl",
        "japanese": "オーロンゲ",
        "chinese": "长毛巨魔",
        "french": "Angoliath"
      },
      "type": ["Dark", "Fairy"],
      "species": "Bulk Up Pokémon",
      "description": "Its hairs work like muscle fibers. When its hairs unfurl, they latch on to opponents, ensnaring them as tentacles would.",
      "evolution": { "prev": ["860", "Level 42"] },
      "profile": {
        "height": "1 m",
        "weight": "61 kg",
        "gender": "100.0:0.0",
        "ability": [
          ["Prankster", "false"],
          ["Frisk", "false"],
          ["Pickpocket", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/861.png",
        "thumbnail": "src/assets/thumbnails/861.png",
        "hires": "src/assets/hires/861.png"
      }
    },
    {
      "id": 862,
      "name": {
        "english": "Obstagoon",
        "japanese": "タチフサグマ",
        "chinese": "堵拦熊",
        "french": "Ixon"
      },
      "type": ["Dark", "Normal"],
      "species": "Blocking Pokémon",
      "description": "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch.",
      "evolution": { "prev": ["264", "Level 35, Nighttime"] },
      "profile": {
        "height": "2 m",
        "weight": "46 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Reckless", "false"],
          ["Guts", "false"],
          ["Defiant", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/862.png",
        "thumbnail": "src/assets/thumbnails/862.png",
        "hires": "src/assets/hires/862.png"
      }
    },
    {
      "id": 863,
      "name": {
        "english": "Perrserker",
        "japanese": "ニャイキング",
        "chinese": "喵头目",
        "french": "Berserkatt"
      },
      "type": ["Steel"],
      "species": "Viking Pokémon",
      "description": "After many battles, it evolved dangerous claws that come together to form daggers when extended.",
      "evolution": { "prev": ["52", "Level 28"] },
      "profile": {
        "height": "1 m",
        "weight": "28 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Battle-armor", "false"],
          ["Tough-claws", "false"],
          ["Steely-spirit", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/863.png",
        "thumbnail": "src/assets/thumbnails/863.png",
        "hires": "src/assets/hires/863.png"
      }
    },
    {
      "id": 864,
      "name": {
        "english": "Cursola",
        "japanese": "サニゴーン",
        "chinese": "魔灵珊瑚",
        "french": "Corayôme"
      },
      "type": ["Ghost"],
      "species": "Coral Pokémon",
      "description": "Be cautious of the ectoplasmic body surrounding its soul. You’ll become stiff as stone if you touch it.",
      "evolution": { "prev": ["222", "Level 38"] },
      "profile": {
        "height": "1 m",
        "weight": "0 kg",
        "gender": "25.0:75.0",
        "ability": [
          ["Weak-armor", "false"],
          ["Perish-body", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/864.png",
        "thumbnail": "src/assets/thumbnails/864.png",
        "hires": "src/assets/hires/864.png"
      }
    },
    {
      "id": 865,
      "name": {
        "english": "Sirfetch'd",
        "japanese": "ネギガナイト",
        "chinese": "葱游兵",
        "french": "Palarticho"
      },
      "type": ["Fighting"],
      "species": "Wild Duck Pokémon",
      "description": "After deflecting attacks with its hard leaf shield, it strikes back with its sharp leek stalk. The leek stalk is both weapon and food.",
      "evolution": { "prev": ["83", "achieve 3 critical hits in one battle"] },
      "profile": {
        "height": "1 m",
        "weight": "117 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Steadfast", "false"],
          ["Scrappy", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/865.png",
        "thumbnail": "src/assets/thumbnails/865.png",
        "hires": "src/assets/hires/865.png"
      }
    },
    {
      "id": 866,
      "name": {
        "english": "Mr. Rime",
        "japanese": "バリコオル",
        "chinese": "踏冰人偶",
        "french": "M. Glaquette"
      },
      "type": ["Ice", "Psychic"],
      "species": "Comedian Pokémon",
      "description": "Its amusing movements make it very popular. It releases its psychic power from the pattern on its belly.",
      "evolution": { "prev": ["122", "Level 42"] },
      "profile": {
        "height": "1 m",
        "weight": "58 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Tangled-feet", "false"],
          ["Screen-cleaner", "false"],
          ["Ice-body", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/866.png",
        "thumbnail": "src/assets/thumbnails/866.png",
        "hires": "src/assets/hires/866.png"
      }
    },
    {
      "id": 867,
      "name": {
        "english": "Runerigus",
        "japanese": "デスバーン",
        "chinese": "死神板",
        "french": "Tutétékri"
      },
      "type": ["Ground", "Ghost"],
      "species": "Grudge Pokémon",
      "description": "Never touch its shadowlike body, or you’ll be shown the horrific memories behind the picture carved into it.",
      "evolution": { "prev": ["562", "Level 34"] },
      "profile": {
        "height": "2 m",
        "weight": "67 kg",
        "gender": "50.0:50.0",
        "ability": [["Wandering-spirit", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/867.png",
        "thumbnail": "src/assets/thumbnails/867.png",
        "hires": "src/assets/hires/867.png"
      }
    },
    {
      "id": 868,
      "name": {
        "english": "Milcery",
        "japanese": "マホミル",
        "chinese": "小仙奶",
        "french": "Crèmy"
      },
      "type": ["Fairy"],
      "species": "Cream Pokémon",
      "description": "They say that any patisserie visited by Milcery is guaranteed success and good fortune.",
      "evolution": { "next": [["869", "spin around holding Sweet"]] },
      "profile": {
        "height": "0 m",
        "weight": "0 kg",
        "gender": "0.0:100.0",
        "ability": [
          ["Sweet-veil", "false"],
          ["Aroma-veil", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/868.png",
        "thumbnail": "src/assets/thumbnails/868.png",
        "hires": "src/assets/hires/868.png"
      }
    },
    {
      "id": 869,
      "name": {
        "english": "Alcremie",
        "japanese": "マホイップ",
        "chinese": "霜奶仙",
        "french": "Charmilly"
      },
      "type": ["Fairy"],
      "species": "Cream Pokémon",
      "description": "When Alcremie is content, the cream it secretes from its hands becomes sweeter and richer.",
      "evolution": { "prev": ["868", "spin around holding Sweet"] },
      "profile": {
        "height": "0 m",
        "weight": "0 kg",
        "gender": "0.0:100.0",
        "ability": [
          ["Sweet-veil", "false"],
          ["Aroma-veil", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/869.png",
        "thumbnail": "src/assets/thumbnails/869.png",
        "hires": "src/assets/hires/869.png"
      }
    },
    {
      "id": 870,
      "name": {
        "english": "Falinks",
        "japanese": "タイレーツ",
        "chinese": "列阵兵",
        "french": "Hexadron"
      },
      "type": ["Fighting"],
      "species": "Formation Pokémon",
      "description": "The six of them work together as one Pokémon. Teamwork is also their battle strategy, and they constantly change their formation as they fight.",
      "evolution": {},
      "profile": {
        "height": "3 m",
        "weight": "62 kg",
        "gender": "Genderless",
        "ability": [
          ["Battle-armor", "false"],
          ["Defiant", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/870.png",
        "thumbnail": "src/assets/thumbnails/870.png",
        "hires": "src/assets/hires/870.png"
      }
    },
    {
      "id": 871,
      "name": {
        "english": "Pincurchin",
        "japanese": "バチンウニ",
        "chinese": "啪嚓海胆",
        "french": "Wattapik"
      },
      "type": ["Electric"],
      "species": "Sea Urchin Pokémon",
      "description": "It stores electricity in each spine. Even if one gets broken off, it still continues to emit electricity for at least three hours.",
      "evolution": {},
      "profile": {
        "height": "0 m",
        "weight": "1 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Lightning-rod", "false"],
          ["Electric-surge", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/871.png",
        "thumbnail": "src/assets/thumbnails/871.png",
        "hires": "src/assets/hires/871.png"
      }
    },
    {
      "id": 872,
      "name": {
        "english": "Snom",
        "japanese": "ユキハミ",
        "chinese": "雪吞虫",
        "french": "Frissonille"
      },
      "type": ["Ice", "Bug"],
      "species": "Worm Pokémon",
      "description": "It eats snow that piles up on the ground. The more snow it eats, the bigger and more impressive the spikes on its back grow.",
      "evolution": { "next": [["873", "high "]] },
      "profile": {
        "height": "0 m",
        "weight": "4 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Shield-dust", "false"],
          ["Ice-scales", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/872.png",
        "thumbnail": "src/assets/thumbnails/872.png",
        "hires": "src/assets/hires/872.png"
      }
    },
    {
      "id": 873,
      "name": {
        "english": "Frosmoth",
        "japanese": "モスノウ",
        "chinese": "雪绒蛾",
        "french": "Beldeneige"
      },
      "type": ["Ice", "Bug"],
      "species": "Frost Moth Pokémon",
      "description": "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away.",
      "evolution": { "prev": ["872", "high "] },
      "profile": {
        "height": "1 m",
        "weight": "42 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Shield-dust", "false"],
          ["Ice-scales", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/873.png",
        "thumbnail": "src/assets/thumbnails/873.png",
        "hires": "src/assets/hires/873.png"
      }
    },
    {
      "id": 874,
      "name": {
        "english": "Stonjourner",
        "japanese": "イシヘンジン",
        "chinese": "巨石丁",
        "french": "Dolman"
      },
      "type": ["Rock"],
      "species": "Big Rock Pokémon",
      "description": "Once a year, on a specific date and at a specific time, they gather out of nowhere and form up in a circle.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "520 kg",
        "gender": "50.0:50.0",
        "ability": [["Power-spot", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/874.png",
        "thumbnail": "src/assets/thumbnails/874.png",
        "hires": "src/assets/hires/874.png"
      }
    },
    {
      "id": 875,
      "name": {
        "english": "Eiscue",
        "japanese": "コオリッポ",
        "chinese": "冰砌鹅",
        "french": "Bekaglaçon"
      },
      "type": ["Ice"],
      "species": "Penguin Pokémon",
      "description": "This Pokémon keeps its heat-sensitive head cool with ice. It fishes for its food, dangling its single hair into the sea to lure in prey.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "89 kg",
        "gender": "50.0:50.0",
        "ability": [["Ice-face", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/875.png",
        "thumbnail": "src/assets/thumbnails/875.png",
        "hires": "src/assets/hires/875.png"
      }
    },
    {
      "id": 876,
      "name": {
        "english": "Indeedee",
        "japanese": "イエッサン",
        "chinese": "爱管侍",
        "french": "Wimessir"
      },
      "type": ["Psychic", "Normal"],
      "species": "Emotion Pokémon",
      "description": "Through its horns, it can pick up on the emotions of creatures around it. Positive emotions are the source of its strength.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "28 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Inner-focus", "false"],
          ["Synchronize", "false"],
          ["Psychic-surge", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/876.png",
        "thumbnail": "src/assets/thumbnails/876.png",
        "hires": "src/assets/hires/876.png"
      }
    },
    {
      "id": 877,
      "name": {
        "english": "Morpeko",
        "japanese": "モルペコ",
        "chinese": "莫鲁贝可",
        "french": "Morpeko"
      },
      "type": ["Electric", "Dark"],
      "species": "Two-Sided Pokémon",
      "description": "It carries electrically roasted seeds with it as if they’re precious treasures. No matter how much it eats, it always gets hungry again in short order.",
      "evolution": {},
      "profile": {
        "height": "0 m",
        "weight": "3 kg",
        "gender": "50.0:50.0",
        "ability": [["Hunger-switch", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/877.png",
        "thumbnail": "src/assets/thumbnails/877.png"
      }
    },
    {
      "id": 878,
      "name": {
        "english": "Cufant",
        "japanese": "ゾウドウ",
        "chinese": "铜象",
        "french": "Charibari"
      },
      "type": ["Steel"],
      "species": "Copperderm Pokémon",
      "description": "If a job requires serious strength, this Pokémon will excel at it. Its copper body tarnishes in the rain, turning a vibrant green color.",
      "evolution": { "next": [["879", "Level 34"]] },
      "profile": {
        "height": "1 m",
        "weight": "100 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Sheer-force", "false"],
          ["Heavy-metal", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/878.png",
        "thumbnail": "src/assets/thumbnails/878.png",
        "hires": "src/assets/hires/878.png"
      }
    },
    {
      "id": 879,
      "name": {
        "english": "Copperajah",
        "japanese": "ダイオウドウ",
        "chinese": "大王铜象",
        "french": "Pachyradjah"
      },
      "type": ["Steel"],
      "species": "Copperderm Pokémon",
      "description": "These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder.",
      "evolution": { "prev": ["878", "Level 34"] },
      "profile": {
        "height": "3 m",
        "weight": "650 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Sheer-force", "false"],
          ["Heavy-metal", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/879.png",
        "thumbnail": "src/assets/thumbnails/879.png",
        "hires": "src/assets/hires/879.png"
      }
    },
    {
      "id": 880,
      "name": {
        "english": "Dracozolt",
        "japanese": "パッチラゴン",
        "chinese": "雷鸟龙",
        "french": "Galvagon"
      },
      "type": ["Electric", "Dragon"],
      "species": "Fossil Pokémon",
      "description": "The powerful muscles in its tail generate its electricity. Compared to its lower body, its upper half is entirely too small.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "190 kg",
        "gender": "Genderless",
        "ability": [
          ["Volt-absorb", "false"],
          ["Hustle", "false"],
          ["Sand-rush", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/880.png",
        "thumbnail": "src/assets/thumbnails/880.png",
        "hires": "src/assets/hires/880.png"
      }
    },
    {
      "id": 881,
      "name": {
        "english": "Arctozolt",
        "japanese": "パッチルドン",
        "chinese": "雷鸟海兽",
        "french": "Galvagla"
      },
      "type": ["Electric", "Ice"],
      "species": "Fossil Pokémon",
      "description": "This Pokémon lived on prehistoric seashores and was able to preserve food with the ice on its body. It went extinct because it moved so slowly.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "150 kg",
        "gender": "Genderless",
        "ability": [
          ["Volt-absorb", "false"],
          ["Static", "false"],
          ["Slush-rush", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/881.png",
        "thumbnail": "src/assets/thumbnails/881.png",
        "hires": "src/assets/hires/881.png"
      }
    },
    {
      "id": 882,
      "name": {
        "english": "Dracovish",
        "japanese": "ウオノラゴン",
        "chinese": "鳃鱼龙",
        "french": "Hydragon"
      },
      "type": ["Water", "Dragon"],
      "species": "Fossil Pokémon",
      "description": "Its mighty legs are capable of running at speeds exceeding 40 mph, but this Pokémon can’t breathe unless it’s underwater.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "215 kg",
        "gender": "Genderless",
        "ability": [
          ["Water-absorb", "false"],
          ["Strong-jaw", "false"],
          ["Sand-rush", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/882.png",
        "thumbnail": "src/assets/thumbnails/882.png",
        "hires": "src/assets/hires/882.png"
      }
    },
    {
      "id": 883,
      "name": {
        "english": "Arctovish",
        "japanese": "ウオチルドン",
        "chinese": "鳃鱼海兽",
        "french": "Hydragla"
      },
      "type": ["Water", "Ice"],
      "species": "Fossil Pokémon",
      "description": "The skin on its face is impervious to attack, but breathing difficulties made this Pokémon go extinct anyway.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "175 kg",
        "gender": "Genderless",
        "ability": [
          ["Water-absorb", "false"],
          ["Ice-body", "false"],
          ["Slush-rush", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/883.png",
        "thumbnail": "src/assets/thumbnails/883.png",
        "hires": "src/assets/hires/883.png"
      }
    },
    {
      "id": 884,
      "name": {
        "english": "Duraludon",
        "japanese": "ジュラルドン",
        "chinese": "铝钢龙",
        "french": "Duralugon"
      },
      "type": ["Steel", "Dragon"],
      "species": "Alloy Pokémon",
      "description": "The special metal that composes its body is very light, so this Pokémon has considerable agility. It lives in caves because it dislikes the rain.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "40 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Light-metal", "false"],
          ["Heavy-metal", "false"],
          ["Stalwart", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/884.png",
        "thumbnail": "src/assets/thumbnails/884.png",
        "hires": "src/assets/hires/884.png"
      }
    },
    {
      "id": 885,
      "name": {
        "english": "Dreepy",
        "japanese": "ドラメシヤ",
        "chinese": "多龙梅西亚",
        "french": "Fantyrm"
      },
      "type": ["Dragon", "Ghost"],
      "species": "Lingering Pokémon",
      "description": "If this weak Pokémon is by itself, a mere child could defeat it. But if Dreepy has friends to help it train, it can evolve and become much stronger.",
      "evolution": { "next": [["886", "Level 50"]] },
      "profile": {
        "height": "1 m",
        "weight": "2 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Clear-body", "false"],
          ["Infiltrator", "false"],
          ["Cursed-body", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/885.png",
        "thumbnail": "src/assets/thumbnails/885.png",
        "hires": "src/assets/hires/885.png"
      }
    },
    {
      "id": 886,
      "name": {
        "english": "Drakloak",
        "japanese": "ドロンチ",
        "chinese": "多龙奇",
        "french": "Dispareptil"
      },
      "type": ["Dragon", "Ghost"],
      "species": "Caretaker Pokémon",
      "description": "Without a Dreepy to place on its head and care for, it gets so uneasy it’ll try to substitute any Pokémon it finds for the missing Dreepy.",
      "evolution": { "prev": ["885", "Level 50"], "next": [["887", "Level 60"]] },
      "profile": {
        "height": "1 m",
        "weight": "11 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Clear-body", "false"],
          ["Infiltrator", "false"],
          ["Cursed-body", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/886.png",
        "thumbnail": "src/assets/thumbnails/886.png",
        "hires": "src/assets/hires/886.png"
      }
    },
    {
      "id": 887,
      "name": {
        "english": "Dragapult",
        "japanese": "ドラパルト",
        "chinese": "多龙巴鲁托",
        "french": "Lanssorien"
      },
      "type": ["Dragon", "Ghost"],
      "species": "Stealth Pokémon",
      "description": "Apparently the Dreepy inside Dragapult’s horns eagerly look forward to being launched out at Mach speeds.",
      "evolution": { "prev": ["886", "Level 60"] },
      "profile": {
        "height": "3 m",
        "weight": "50 kg",
        "gender": "50.0:50.0",
        "ability": [
          ["Clear-body", "false"],
          ["Infiltrator", "false"],
          ["Cursed-body", "true"]
        ]
      },
      "image": {
        "sprite": "src/assets/sprites/887.png",
        "thumbnail": "src/assets/thumbnails/887.png",
        "hires": "src/assets/hires/887.png"
      }
    },
    {
      "id": 888,
      "name": {
        "english": "Zacian",
        "japanese": "ザシアン",
        "chinese": "苍响",
        "french": "Zacian"
      },
      "type": ["Fairy"],
      "species": "Warrior Pokémon",
      "description": "This Pokémon has slumbered for many years. Some say it’s Zamazenta’s elder sister—others say the two Pokémon are rivals.",
      "evolution": {},
      "profile": {
        "height": "3 m",
        "weight": "110 kg",
        "gender": "Genderless",
        "ability": [["Intrepid-sword", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/888.png",
        "thumbnail": "src/assets/thumbnails/888.png",
        "hires": "src/assets/hires/888.png"
      }
    },
    {
      "id": 889,
      "name": {
        "english": "Zamazenta",
        "japanese": "ザマゼンタ",
        "chinese": "藏玛然特",
        "french": "Zamazent"
      },
      "type": ["Fighting"],
      "species": "Warrior Pokémon",
      "description": "This Pokémon slept for aeons while in the form of a statue. It was asleep for so long, people forgot that it ever existed.",
      "evolution": {},
      "profile": {
        "height": "3 m",
        "weight": "210 kg",
        "gender": "Genderless",
        "ability": [["Dauntless-shield", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/889.png",
        "thumbnail": "src/assets/thumbnails/889.png",
        "hires": "src/assets/hires/889.png"
      }
    },
    {
      "id": 890,
      "name": {
        "english": "Eternatus",
        "japanese": "ムゲンダイナ",
        "chinese": "无极汰那",
        "french": "Éthernatos"
      },
      "type": ["Poison", "Dragon"],
      "species": "Gigantic Pokémon",
      "description": "It was inside a meteorite that fell 20,000 years ago. There seems to be a connection between this Pokémon and the Dynamax phenomenon.",
      "evolution": {},
      "profile": {
        "height": "20 m",
        "weight": "950 kg",
        "gender": "Genderless",
        "ability": [["Pressure", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/890.png",
        "thumbnail": "src/assets/thumbnails/890.png",
        "hires": "src/assets/hires/890.png"
      }
    },
    {
      "id": 891,
      "name": {
        "english": "Kubfu",
        "japanese": "ダクマ",
        "chinese": "熊徒弟",
        "french": "Wushours"
      },
      "type": ["Fighting"],
      "species": "Wushu Pokémon",
      "description": "If Kubfu pulls the long white hair on its head, its fighting spirit heightens and power wells up from the depths of its belly.",
      "evolution": {
        "next": [
          ["892", "Scroll of Darkness"],
          ["892", "Scroll of Waters"]
        ]
      },
      "profile": {
        "height": "1 m",
        "weight": "12 kg",
        "gender": "87.5:12.5",
        "ability": [["Inner-focus", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/891.png",
        "thumbnail": "src/assets/thumbnails/891.png",
        "hires": "src/assets/hires/891.png"
      }
    },
    {
      "id": 892,
      "name": {
        "english": "Urshifu",
        "japanese": "ウーラオス",
        "chinese": "武道熊师",
        "french": "Shifours"
      },
      "type": ["Fighting", "Dark"],
      "species": "Wushu Pokémon",
      "description": "Inhabiting the mountains of a distant region, this Pokémon races across sheer cliffs, training its legs and refining its moves.",
      "evolution": { "prev": ["892", "Scroll of Darkness"] },
      "profile": {
        "height": "2 m",
        "weight": "105 kg",
        "gender": "87.5:12.5",
        "ability": [["Unseen-fist", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/892.png",
        "thumbnail": "src/assets/thumbnails/892.png",
        "hires": "src/assets/hires/892.png"
      }
    },
    {
      "id": 893,
      "name": {
        "english": "Zarude",
        "japanese": "ザルード",
        "chinese": "萨戮德",
        "french": "Zarude"
      },
      "type": ["Dark", "Grass"],
      "species": "Rogue Monkey Pokémon",
      "description": "Once the vines on Zarude’s body tear off, they become nutrients in the soil. This helps the plants of the forest grow.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "70 kg",
        "gender": "Genderless",
        "ability": [["Leaf-guard", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/893.png",
        "thumbnail": "src/assets/thumbnails/893.png",
        "hires": "src/assets/hires/893.png"
      }
    },
    {
      "id": 894,
      "name": {
        "english": "Regieleki",
        "japanese": "レジエレキ",
        "chinese": "雷吉艾勒奇",
        "french": "Regieleki"
      },
      "type": ["Electric"],
      "species": "Electron Pokémon",
      "description": "Its entire body is made up of a single organ that generates electrical energy. Regieleki is capable of creating all Galar’s electricity.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "145 kg",
        "gender": "Genderless",
        "ability": [["Transistor", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/894.png",
        "thumbnail": "src/assets/thumbnails/894.png",
        "hires": "src/assets/hires/894.png"
      }
    },
    {
      "id": 895,
      "name": {
        "english": "Regidrago",
        "japanese": "レジドラゴ",
        "chinese": "雷吉铎拉戈",
        "french": "Regidrago"
      },
      "type": ["Dragon"],
      "species": "Dragon Orb Pokémon",
      "description": "Its body is composed of crystallized dragon energy. Regidrago is said to have the powers of every dragon Pokémon.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "200 kg",
        "gender": "Genderless",
        "ability": [["Dragons-maw", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/895.png",
        "thumbnail": "src/assets/thumbnails/895.png",
        "hires": "src/assets/hires/895.png"
      }
    },
    {
      "id": 896,
      "name": {
        "english": "Glastrier",
        "japanese": "ブリザポス",
        "chinese": "雪暴马",
        "french": "Blizzeval"
      },
      "type": ["Ice"],
      "species": "Wild Horse Pokémon",
      "description": "Glastrier has tremendous physical strength, and the mask of ice covering its face is 100 times harder than diamond.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "800 kg",
        "gender": "Genderless",
        "ability": [["Chilling-neigh", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/896.png",
        "thumbnail": "src/assets/thumbnails/896.png",
        "hires": "src/assets/hires/896.png"
      }
    },
    {
      "id": 897,
      "name": {
        "english": "Spectrier",
        "japanese": "レイスポス",
        "chinese": "灵幽马",
        "french": "Spectreval"
      },
      "type": ["Ghost"],
      "species": "Swift Horse Pokémon",
      "description": "As it dashes through the night, Spectrier absorbs the life-force of sleeping creatures. It craves silence and solitude.",
      "evolution": {},
      "profile": {
        "height": "2 m",
        "weight": "44 kg",
        "gender": "Genderless",
        "ability": [["Grim-neigh", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/897.png",
        "thumbnail": "src/assets/thumbnails/897.png",
        "hires": "src/assets/hires/897.png"
      }
    },
    {
      "id": 898,
      "name": {
        "english": "Calyrex",
        "japanese": "バドレックス",
        "chinese": "蕾冠王",
        "french": "Sylveroy"
      },
      "type": ["Psychic", "Grass"],
      "species": "King Pokémon",
      "description": "Calyrex is known in legend as a king that ruled over Galar in ancient times. It has the power to cause hearts to mend and plants to spring forth.",
      "evolution": {},
      "profile": {
        "height": "1 m",
        "weight": "8 kg",
        "gender": "Genderless",
        "ability": [["Unnerve", "false"]]
      },
      "image": {
        "sprite": "src/assets/sprites/898.png",
        "thumbnail": "src/assets/thumbnails/898.png",
        "hires": "src/assets/hires/898.png"
      }
    }
  ]