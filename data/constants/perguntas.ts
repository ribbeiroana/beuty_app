import Pergunta from '@/data/model/Pergunta'

const perguntas: Pergunta[] = [
    {
        id: 1,
        enunciado: 'Qual é o maior planeta do sistema solar?',
        opcoes: ['Terra', 'Júpiter', 'Saturno', 'Urano'],
        resposta: 1,
    },
    {
        id: 2,
        enunciado: 'Quantos planetas existem no sistema solar?',
        opcoes: ['8', '9', '7', '10'],
        resposta: 0,
    },
    {
        id: 3,
        enunciado: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
        opcoes: ['Marte', 'Vênus', 'Júpiter', 'Saturno'],
        resposta: 0,
    },
    {
        id: 4,
        enunciado: 'Qual planeta é famoso pelos seus anéis?',
        opcoes: ['Urano', 'Netuno', 'Saturno', 'Júpiter'],
        resposta: 2,
    },
    {
        id: 5,
        enunciado: 'Qual é o planeta mais frio do sistema solar?',
        opcoes: ['Netuno', 'Urano', 'Saturno', 'Plutão'],
        resposta: 1,
    },
    {
        id: 6,
        enunciado: 'Qual planeta é o mais próximo do Sol?',
        opcoes: ['Terra', 'Mercúrio', 'Vênus', 'Marte'],
        resposta: 1,
    },
    {
        id: 7,
        enunciado: 'Qual é a maior lua de Saturno?',
        opcoes: ['Titã', 'Europa', 'Ganimedes', 'Calisto'],
        resposta: 0,
    },
    {
        id: 8,
        enunciado: 'Qual planeta tem um dia mais longo que seu ano?',
        opcoes: ['Vênus', 'Mercúrio', 'Marte', 'Netuno'],
        resposta: 0,
    },
    {
        id: 9,
        enunciado: "Qual planeta é conhecido como o 'gigante gasoso'?",
        opcoes: ['Júpiter', 'Saturno', 'Netuno', 'Urano'],
        resposta: 0,
    },
    {
        id: 10,
        enunciado: 'Qual planeta tem a maior montanha do sistema solar?',
        opcoes: ['Terra', 'Marte', 'Vênus', 'Mercúrio'],
        resposta: 1,
    },
    {
        id: 11,
        enunciado: 'Qual é o nome da galáxia em que vivemos?',
        opcoes: ['Via Láctea', 'Andrômeda', 'Triângulo', 'Centaurus A'],
        resposta: 0,
    },
    {
        id: 12,
        enunciado: 'Quantas luas tem Marte?',
        opcoes: ['1', '2', '3', '4'],
        resposta: 1,
    },
    {
        id: 13,
        enunciado: 'Qual é a maior lua do sistema solar?',
        opcoes: ['Titã', 'Ganimedes', 'Calisto', 'Europa'],
        resposta: 1,
    },
    {
        id: 14,
        enunciado: 'Qual planeta é conhecido por ter uma grande mancha vermelha?',
        opcoes: ['Marte', 'Júpiter', 'Saturno', 'Vênus'],
        resposta: 1,
    },
    {
        id: 15,
        enunciado: 'Qual é o menor planeta do sistema solar?',
        opcoes: ['Mercúrio', 'Marte', 'Vênus', 'Plutão'],
        resposta: 0,
    },
    {
        id: 16,
        enunciado: 'Qual é o nome do segundo maior planeta do sistema solar?',
        opcoes: ['Urano', 'Netuno', 'Saturno', 'Júpiter'],
        resposta: 2,
    },
    {
        id: 17,
        enunciado: 'Qual é o nome do rover que a NASA enviou a Marte em 2021?',
        opcoes: ['Curiosity', 'Spirit', 'Opportunity', 'Perseverance'],
        resposta: 3,
    },
    {
        id: 18,
        enunciado: 'Quantas estrelas existem na Via Láctea?',
        opcoes: [
            'Cerca de 100 bilhões',
            'Cerca de 200 bilhões',
            'Cerca de 300 bilhões',
            'Cerca de 400 bilhões',
        ],
        resposta: 3,
    },
    {
        id: 19,
        enunciado: 'Qual é a principal composição da atmosfera de Vênus?',
        opcoes: ['Oxigênio', 'Hidrogênio', 'Nitrogênio', 'Dióxido de carbono'],
        resposta: 3,
    },
    {
        id: 20,
        enunciado: 'Qual é a estrela mais próxima da Terra depois do Sol?',
        opcoes: ['Proxima Centauri', 'Betelgeuse', 'Alpha Centauri A', 'Sirius'],
        resposta: 0,
    },
    {
        id: 21,
        enunciado: 'Qual é a unidade de medida usada para distâncias dentro do sistema solar?',
        opcoes: ['Anos-luz', 'Parsecs', 'Unidade Astronômica', 'Quilômetros'],
        resposta: 2,
    },
    {
        id: 22,
        enunciado: 'O que é um buraco negro?',
        opcoes: [
            'Uma estrela em colapso',
            'Um planeta sem atmosfera',
            'Uma região de espaço-tempo de onde nada pode escapar',
            'Um tipo de cometa',
        ],
        resposta: 2,
    },
    {
        id: 23,
        enunciado: 'Qual planeta tem as maiores variações de temperatura entre o dia e a noite?',
        opcoes: ['Mercúrio', 'Marte', 'Terra', 'Vênus'],
        resposta: 0,
    },
    {
        id: 24,
        enunciado: 'Qual é o nome da maior lua de Netuno?',
        opcoes: ['Titã', 'Europa', 'Tritão', 'Io'],
        resposta: 2,
    },
    {
        id: 25,
        enunciado: 'Qual planeta tem ventos que podem chegar a 2.100 km/h?',
        opcoes: ['Júpiter', 'Saturno', 'Netuno', 'Urano'],
        resposta: 2,
    },
    {
        id: 26,
        enunciado: 'Qual é a principal composição das nuvens de Vênus?',
        opcoes: ['Água', 'Metano', 'Ácido sulfúrico', 'Amoníaco'],
        resposta: 2,
    },
    {
        id: 27,
        enunciado: 'Qual é a maior estrutura conhecida no universo?',
        opcoes: [
            'Superaglomerado de Hércules',
            'Grande Muralha de Sloan',
            'Grande Atrator',
            'Grande Muralha de Bóotes',
        ],
        resposta: 1,
    },
    {
        id: 28,
        enunciado: 'Qual planeta tem um sistema de anéis mais complexo?',
        opcoes: ['Júpiter', 'Urano', 'Netuno', 'Saturno'],
        resposta: 3,
    },
    {
        id: 29,
        enunciado: 'Qual foi o primeiro satélite artificial lançado ao espaço?',
        opcoes: ['Sputnik 1', 'Explorer 1', 'Vanguard 1', 'Luna 1'],
        resposta: 0,
    },
    {
        id: 30,
        enunciado: 'Qual é o tempo de rotação da Terra em torno de seu eixo?',
        opcoes: ['24 horas', '23 horas e 56 minutos', '24 horas e 30 minutos', '23 horas'],
        resposta: 1,
    },
    {
        "id": 31,
        "enunciado": "Qual planeta é conhecido por seus ventos intensos e tempestades?",
        "opcoes": ["Terra", "Netuno", "Júpiter", "Saturno"],
        "resposta": 1
    },
    {
        "id": 32,
        "enunciado": "Qual é a maior montanha do sistema solar?",
        "opcoes": ["Olympus Mons", "Mauna Kea", "Monte Everest", "Monte Kilimanjaro"],
        "resposta": 0
    },
    {
        "id": 33,
        "enunciado": "Qual é o planeta mais denso do sistema solar?",
        "opcoes": ["Mercúrio", "Terra", "Vênus", "Júpiter"],
        "resposta": 1
    },
    {
        "id": 34,
        "enunciado": "Qual é o nome do satélite natural da Terra?",
        "opcoes": ["Fobos", "Deimos", "Lua", "Titan"],
        "resposta": 2
    },
    {
        "id": 35,
        "enunciado": "Qual é o planeta conhecido por sua intensa atividade vulcânica?",
        "opcoes": ["Terra", "Vênus", "Marte", "Júpiter"],
        "resposta": 1
    },
    {
        "id": 36,
        "enunciado": "Qual é a temperatura média da superfície de Vênus?",
        "opcoes": ["-30°C", "15°C", "460°C", "100°C"],
        "resposta": 2
    },
    {
        "id": 37,
        "enunciado": "Qual planeta possui a maior quantidade de luas conhecidas?",
        "opcoes": ["Saturno", "Júpiter", "Urano", "Netuno"],
        "resposta": 1
    },
    {
        "id": 38,
        "enunciado": "Qual é o nome da teoria que descreve a origem do universo?",
        "opcoes": ["Teoria da Evolução", "Teoria do Big Bang", "Teoria da Relatividade", "Teoria das Cordas"],
        "resposta": 1
    },
    {
        "id": 39,
        "enunciado": "Qual planeta é o mais brilhante no céu noturno?",
        "opcoes": ["Vênus", "Júpiter", "Marte", "Saturno"],
        "resposta": 0
    },
    {
        "id": 40,
        "enunciado": "Qual é a principal razão pelas quais os planetas não colidem entre si?",
        "opcoes": ["Força gravitacional", "Rotação", "Órbitas elípticas", "Campo magnético"],
        "resposta": 2
    },
    {
        "id": 41,
        "enunciado": "Qual é a maior estrela conhecida?",
        "opcoes": ["Betelgeuse", "Sirius", "VY Canis Majoris", "Antares"],
        "resposta": 2
    },
    {
        "id": 42,
        "enunciado": "Quantos anos-luz está a estrela Proxima Centauri da Terra?",
        "opcoes": ["4,24 anos-luz", "2,5 anos-luz", "10 anos-luz", "1 ano-luz"],
        "resposta": 0
    },
    {
        "id": 43,
        "enunciado": "Qual é o planeta conhecido como o 'gigante azul'?",
        "opcoes": ["Urano", "Netuno", "Júpiter", "Saturno"],
        "resposta": 1
    },
    {
        "id": 44,
        "enunciado": "Qual é a principal razão para a existência das estações do ano na Terra?",
        "opcoes": ["Inclinação do eixo da Terra", "Distância da Terra ao Sol", "Atmosfera", "Rotação da Terra"],
        "resposta": 0
    },
    {
        "id": 45,
        "enunciado": "Qual planeta é conhecido por ter a maior quantidade de oxigênio?",
        "opcoes": ["Marte", "Terra", "Vênus", "Júpiter"],
        "resposta": 1
    },
    {
        "id": 46,
        "enunciado": "Qual é o planeta mais distante do Sol?",
        "opcoes": ["Plutão", "Netuno", "Urano", "Saturno"],
        "resposta": 1
    },
    {
        "id": 47,
        "enunciado": "Qual é o nome da primeira mulher a viajar ao espaço?",
        "opcoes": ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Eileen Collins"],
        "resposta": 0
    },
    {
        "id": 48,
        "enunciado": "Qual é a principal fonte de energia da Terra?",
        "opcoes": ["Vento", "Sol", "Água", "Terra"],
        "resposta": 1
    },
    {
        "id": 49,
        "enunciado": "Qual é o nome da missão que levou o homem à Lua pela primeira vez?",
        "opcoes": ["Apollo 11", "Gemini 8", "Mercury 7", "Apollo 13"],
        "resposta": 0
    },
    {
        "id": 50,
        "enunciado": "Qual é a maior parte da massa do sistema solar?",
        "opcoes": ["Planetas", "Sol", "Asteroides", "Luas"],
        "resposta": 1
    },
    {
        "id": 51,
        "enunciado": "Qual é o planeta mais quente do sistema solar?",
        "opcoes": ["Vênus", "Mercúrio", "Marte", "Júpiter"],
        "resposta": 0
    },
    {
        "id": 52,
        "enunciado": "Qual planeta possui a atmosfera mais densa?",
        "opcoes": ["Mercúrio", "Terra", "Vênus", "Marte"],
        "resposta": 2
    },
    {
        "id": 53,
        "enunciado": "Qual é a lua de Saturno que é conhecida por ter uma atmosfera densa?",
        "opcoes": ["Tritão", "Europa", "Titã", "Ganimedes"],
        "resposta": 2
    },
    {
        "id": 54,
        "enunciado": "Qual é a unidade usada para medir a distância de estrelas?",
        "opcoes": ["Anos-luz", "Quilômetros", "Milhas", "Parsecs"],
        "resposta": 0
    },
    {
        "id": 55,
        "enunciado": "Qual é a principal composição da atmosfera de Marte?",
        "opcoes": ["Nitrogênio", "Oxigênio", "Dióxido de carbono", "Hélio"],
        "resposta": 2
    },
    {
        "id": 56,
        "enunciado": "Qual é o nome do telescópio espacial que foi lançado em 1990?",
        "opcoes": ["Hubble", "Chandra", "Kepler", "Spitzer"],
        "resposta": 0
    },
    {
        "id": 57,
        "enunciado": "Qual é o principal ingrediente das estrelas?",
        "opcoes": ["Hélio", "Hidrogênio", "Oxigênio", "Carbono"],
        "resposta": 1
    },
    {
        "id": 58,
        "enunciado": "Qual é a diferença principal entre asteroides e cometas?",
        "opcoes": ["Composição", "Tamanho", "Forma", "Orbitas"],
        "resposta": 0
    },
    {
        "id": 59,
        "enunciado": "Qual é a única lua do sistema solar conhecida por ter atividade geológica?",
        "opcoes": ["Europa", "Tritão", "Io", "Ganimedes"],
        "resposta": 2
    },
    {
        "id": 60,
        "enunciado": "Qual é a principal função dos anéis de Saturno?",
        "opcoes": ["Proteção", "Reflexão de luz", "Gravitação", "Nada"],
        "resposta": 3
    },
    {
        "id": 61,
        "enunciado": "Qual é a forma mais comum de um buraco negro?",
        "opcoes": ["Estelar", "Supermassivo", "Primordial", "Negro"],
        "resposta": 0
    },
    {
        "id": 62,
        "enunciado": "Qual é a distância média da Terra ao Sol?",
        "opcoes": ["150 milhões de km", "100 milhões de km", "200 milhões de km", "50 milhões de km"],
        "resposta": 0
    },
    {
        "id": 63,
        "enunciado": "Qual é o nome do fenômeno que ocorre quando a Lua passa entre a Terra e o Sol?",
        "opcoes": ["Eclipse lunar", "Eclipse solar", "Superlua", "Equinócio"],
        "resposta": 1
    },
    {
        "id": 64,
        "enunciado": "Qual é o planeta conhecido por ter o maior número de anéis?",
        "opcoes": ["Netuno", "Júpiter", "Urano", "Saturno"],
        "resposta": 3
    },
    {
        "id": 65,
        "enunciado": "Qual planeta tem a maior inclinação axial?",
        "opcoes": ["Vênus", "Urano", "Marte", "Mercúrio"],
        "resposta": 1
    },
    {
        "id": 66,
        "enunciado": "Qual é a característica distintiva de um cometa?",
        "opcoes": ["Anéis", "Cauda", "Atmosfera", "Superfície sólida"],
        "resposta": 1
    },
    {
        "id": 67,
        "enunciado": "Qual é a principal característica do planeta Urano?",
        "opcoes": ["É um gigante gasoso", "Tem um eixo de rotação muito inclinado", "Possui anéis", "É o mais quente"],
        "resposta": 1
    },
    {
        "id": 68,
        "enunciado": "Quantas luas tem Júpiter aproximadamente?",
        "opcoes": ["53", "79", "67", "34"],
        "resposta": 1
    },
    {
        "id": 69,
        "enunciado": "Qual é o principal componente do núcleo da Terra?",
        "opcoes": ["Silício", "Ferro", "Oxigênio", "Cálcio"],
        "resposta": 1
    },
    {
        "id": 70,
        "enunciado": "Qual é o maior asteroide conhecido do cinturão de asteroides?",
        "opcoes": ["Ceres", "Vesta", "Pálas", "Hygiea"],
        "resposta": 0
    },
    {
        "id": 71,
        "enunciado": "Qual é a origem da maioria dos meteoros visíveis da Terra?",
        "opcoes": ["Cometas", "Asteroides", "Estrelas", "Luas"],
        "resposta": 0
    },
    {
        "id": 72,
        "enunciado": "Qual planeta é conhecido como o 'planeta do amor'?",
        "opcoes": ["Terra", "Vênus", "Marte", "Júpiter"],
        "resposta": 1
    },
    {
        "id": 73,
        "enunciado": "Qual é o termo para o movimento da Terra em torno do Sol?",
        "opcoes": ["Rotação", "Translação", "Precessão", "Nutação"],
        "resposta": 1
    },
    {
        "id": 74,
        "enunciado": "Qual é a maior lua de Júpiter?",
        "opcoes": ["Io", "Europa", "Ganimedes", "Calisto"],
        "resposta": 2
    },
    {
        "id": 75,
        "enunciado": "Qual é a missão da NASA que explorou o planeta Marte entre 1997 e 2006?",
        "opcoes": ["Curiosity", "Spirit", "Opportunity", "Perseverance"],
        "resposta": 1
    },
    {
        "id": 76,
        "enunciado": "Qual é a principal causa das marés na Terra?",
        "opcoes": ["Força gravitacional da Lua", "Ventos", "Rotação da Terra", "Mudanças atmosféricas"],
        "resposta": 0
    },
    {
        "id": 77,
        "enunciado": "Qual planeta tem a maior velocidade orbital?",
        "opcoes": ["Mercúrio", "Vênus", "Terra", "Marte"],
        "resposta": 0
    },
    {
        "id": 78,
        "enunciado": "Qual é a primeira lua a ser descoberta fora da Terra?",
        "opcoes": ["Fobos", "Io", "Europa", "Luna"],
        "resposta": 3
    },
    {
        "id": 79,
        "enunciado": "Qual é o planeta mais semelhante à Terra em tamanho?",
        "opcoes": ["Marte", "Vênus", "Mercúrio", "Plutão"],
        "resposta": 1
    },
    {
        "id": 80,
        "enunciado": "Qual é o nome do ponto mais alto em Marte?",
        "opcoes": ["Olympus Mons", "Valles Marineris", "Tharsis", "Hellas Planitia"],
        "resposta": 0
    },
    {
        "id": 81,
        "enunciado": "Qual planeta não tem um satélite natural?",
        "opcoes": ["Mercúrio", "Marte", "Vênus", "Terra"],
        "resposta": 0
    },
    {
        "id": 82,
        "enunciado": "Qual é a forma de vida que se acredita que poderia existir em Europa?",
        "opcoes": ["Bactérias", "Plantas", "Animais complexos", "Nenhuma"],
        "resposta": 0
    },
    {
        "id": 83,
        "enunciado": "Qual é o maior continente do sistema solar?",
        "opcoes": ["África", "Ásia", "América do Norte", "Europa"],
        "resposta": 0
    },
    {
        "id": 84,
        "enunciado": "Qual é a principal função da atmosfera de um planeta?",
        "opcoes": ["Refletir luz", "Proteger do espaço", "Regenerar oxigênio", "Armazenar calor"],
        "resposta": 1
    },
    {
        "id": 85,
        "enunciado": "Qual é a maior lua de Netuno?",
        "opcoes": ["Tritão", "Proteu", "Nereida", "Larissa"],
        "resposta": 0
    },
    {
        "id": 86,
        "enunciado": "Qual é a principal razão pela qual Plutão não é mais considerado um planeta?",
        "opcoes": ["Tamanho", "Órbita", "Composição", "Atmosfera"],
        "resposta": 1
    },
    {
        "id": 87,
        "enunciado": "Qual é o único planeta que gira no sentido anti-horário?",
        "opcoes": ["Vênus", "Urano", "Marte", "Júpiter"],
        "resposta": 0
    },
    {
        "id": 88,
        "enunciado": "Qual é o nome da teoria que sugere que os planetas se formaram a partir de um disco de gás e poeira?",
        "opcoes": ["Teoria do Big Bang", "Teoria da Nebulosa", "Teoria da Evolução", "Teoria da Relatividade"],
        "resposta": 1
    },
    {
        "id": 89,
        "enunciado": "Qual é a diferença entre um planeta e uma estrela?",
        "opcoes": ["Luminosidade", "Tamanho", "Composição", "Orbitas"],
        "resposta": 0
    },
    {
        "id": 90,
        "enunciado": "Qual é o nome da região que contém a maioria dos asteroides do sistema solar?",
        "opcoes": ["Cinturão de Kuiper", "Cinturão de Asteroides", "Nuvem de Oort", "Região da Terra"],
        "resposta": 1
    },
    {
        "id": 91,
        "enunciado": "Qual é o nome do telescópio espacial que estudou a radiação infravermelha?",
        "opcoes": ["Hubble", "Chandra", "Spitzer", "Kepler"],
        "resposta": 2
    },
    {
        "id": 92,
        "enunciado": "Qual é o nome do fenômeno que ocorre quando uma estrela explode?",
        "opcoes": ["Supernova", "Nova", "Pulsar", "Buraco negro"],
        "resposta": 0
    },
    {
        "id": 93,
        "enunciado": "Qual é o nome do planeta que é famoso por suas tempestades de poeira?",
        "opcoes": ["Mercúrio", "Marte", "Júpiter", "Saturno"],
        "resposta": 1
    },
    {
        "id": 94,
        "enunciado": "Qual é o principal gás da atmosfera de Júpiter?",
        "opcoes": ["Oxigênio", "Hélio", "Nitrogênio", "Dióxido de carbono"],
        "resposta": 1
    },
    {
        "id": 95,
        "enunciado": "Qual planeta é conhecido como o 'Planeta Anelado'?",
        "opcoes": ["Júpiter", "Urano", "Netuno", "Saturno"],
        "resposta": 3
    },
    {
        "id": 96,
        "enunciado": "Qual é o nome do planeta que foi reclassificado como um planeta anão em 2006?",
        "opcoes": ["Plutão", "Ceres", "Eris", "Haumea"],
        "resposta": 0
    },
    {
        "id": 97,
        "enunciado": "Qual é a lua de Saturno que possui um lago de metano?",
        "opcoes": ["Tritão", "Titã", "Ganimedes", "Io"],
        "resposta": 1
    },
    {
        "id": 98,
        "enunciado": "Qual é o planeta mais próximo da Terra?",
        "opcoes": ["Vênus", "Marte", "Mercúrio", "Júpiter"],
        "resposta": 0
    },
    {
        "id": 99,
        "enunciado": "Qual é a duração de um dia em Vênus?",
        "opcoes": ["12 horas", "24 horas", "243 dias", "90 dias"],
        "resposta": 2
    },
    {
        "id": 100,
        "enunciado": "Qual é a principal razão pela qual as estrelas parecem brilhar?",
        "opcoes": ["Reflexão da luz", "Fusão nuclear", "Tamanho", "Distância"],
        "resposta": 1
    },
    {
        "id": 101,
        "enunciado": "Qual é a forma de vida que se acredita existir na lua Europa?",
        "opcoes": ["Micro-organismos", "Plantas", "Animais", "Nenhuma"],
        "resposta": 0
    },
    {
        "id": 102,
        "enunciado": "Qual é a unidade usada para medir a luminosidade de uma estrela?",
        "opcoes": ["Lúmen", "Candela", "Magnitudes", "Kelvin"],
        "resposta": 2
    },
    {
        "id": 103,
        "enunciado": "Qual é a região mais fria do sistema solar?",
        "opcoes": ["Mercúrio", "Plutão", "Neptuno", "Uranus"],
        "resposta": 1
    },
    {
        "id": 104,
        "enunciado": "Qual é a principal composição da atmosfera de Saturno?",
        "opcoes": ["Hidrogênio", "Hélio", "Metano", "Dióxido de carbono"],
        "resposta": 0,
    },
    {
        "id": 105,
        "enunciado": "Qual é o maior planeta rochoso do sistema solar?",
        "opcoes": ["Terra", "Marte", "Vênus", "Mercúrio"],
        "resposta": 0,
    },
    {
        "id": 106,
        "enunciado": "Qual é o nome do fenômeno que provoca as auroras?",
        "opcoes": ["Efeito estufa", "Radiação solar", "Campo magnético", "Ventos solares"],
        "resposta": 3,
    },
    {
        "id": 107,
        "enunciado": "Qual é a distância média da Terra ao Sol em unidades astronômicas?",
        "opcoes": ["1 AU", "93 milhões de milhas", "150 milhões de km", "1,5 bilhão de km"],
        "resposta": 0,
    },
    {
        "id": 108,
        "enunciado": "Qual é a única lua conhecida que tem um campo magnético próprio?",
        "opcoes": ["Io", "Europa", "Tritão", "Ganimedes"],
        "resposta": 3,
    },
    {
        "id": 109,
        "enunciado": "Qual é a maior tempestade registrada no sistema solar?",
        "opcoes": ["A Grande Mancha Vermelha", "Tempestades de Vênus", "Turbulência de Saturno", "Tempestade de Marte"],
        "resposta": 0,
    },
    {
        "id": 110,
        "enunciado": "Qual é o nome da região do espaço onde a gravidade é tão forte que nada pode escapar?",
        "opcoes": ["Buraco negro", "Nova", "Supernova", "Quasar"],
        "resposta": 0,
    },
    {
        "id": 111,
        "enunciado": "Qual é a maior parte da atmosfera terrestre?",
        "opcoes": ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Argônio"],
        "resposta": 1,
    },
    {
        "id": 112,
        "enunciado": "Qual é o nome do primeiro objeto feito pelo homem a entrar em órbita ao redor da Terra?",
        "opcoes": ["Apollo 11", "Sputnik 1", "Explorer 1", "Vanguard 1"],
        "resposta": 1,
    },
    {
        "id": 113,
        "enunciado": "Qual é o nome do satélite natural de Marte?",
        "opcoes": ["Fobos e Deimos", "Tritão", "Io", "Europa"],
        "resposta": 0,
    },
    {
        "id": 114,
        "enunciado": "Qual planeta é conhecido por suas tempestades de poeira enormes?",
        "opcoes": ["Marte", "Vênus", "Terra", "Júpiter"],
        "resposta": 0,
    },
    {
        "id": 115,
        "enunciado": "Qual é o nome da força que mantém os planetas em órbita ao redor do Sol?",
        "opcoes": ["Força centrífuga", "Força gravitacional", "Força eletromagnética", "Força nuclear"],
        "resposta": 1,
    },
    {
        "id": 116,
        "enunciado": "Qual é a maior galáxia conhecida?",
        "opcoes": ["Via Láctea", "Andrômeda", "IC 1101", "Sombrero"],
        "resposta": 2,
    },
    {
        "id": 117,
        "enunciado": "Qual é o nome do primeiro ser vivo a ser enviado ao espaço?",
        "opcoes": ["Laika", "Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong"],
        "resposta": 0,
    },
    {
        "id": 118,
        "enunciado": "Qual é a principal função do telescópio Hubble?",
        "opcoes": ["Capturar imagens do espaço", "Enviar humanos ao espaço", "Lançar satélites", "Estudar a Terra"],
        "resposta": 0,
    },
    {
        "id": 119,
        "enunciado": "Qual planeta é conhecido por sua aparência azul?",
        "opcoes": ["Netuno", "Urano", "Terra", "Júpiter"],
        "resposta": 0,
    },
    {
        "id": 120,
        "enunciado": "Qual é a característica principal de um supernova?",
        "opcoes": ["Explosão de uma estrela", "Colapso de uma estrela", "Aparição de uma nova estrela", "Desaparecimento de uma estrela"],
        "resposta": 0,
    },
    {
        "id": 121,
        "enunciado": "Qual é a unidade de medida para distâncias astronômicas?",
        "opcoes": ["Quilômetros", "Anos-luz", "Milhas", "Parsecs"],
        "resposta": 1,
    },
    {
        "id": 122,
        "enunciado": "Qual planeta tem uma atmosfera densa composta principalmente de dióxido de carbono?",
        "opcoes": ["Marte", "Vênus", "Mercúrio", "Júpiter"],
        "resposta": 1,
    },
    {
        "id": 123,
        "enunciado": "Qual é o nome do maior vulcão do sistema solar?",
        "opcoes": ["Monte Everest", "Olympus Mons", "Mauna Kea", "Kilimanjaro"],
        "resposta": 1,
    },
    {
        "id": 124,
        "enunciado": "Qual planeta é conhecido como o 'Planeta Azul'?",
        "opcoes": ["Terra", "Urano", "Netuno", "Vênus"],
        "resposta": 0,
    },
    {
        "id": 125,
        "enunciado": "Qual é a camada mais externa da atmosfera terrestre?",
        "opcoes": ["Estratosfera", "Troposfera", "Exosfera", "Mesosfera"],
        "resposta": 2,
    },
    {
        "id": 126,
        "enunciado": "Qual é o principal ingrediente dos anéis de Saturno?",
        "opcoes": ["Gelo", "Pó", "Pedras", "Metano"],
        "resposta": 0,
    },
    {
        "id": 127,
        "enunciado": "Qual é a distância média entre a Terra e a Lua?",
        "opcoes": ["384.400 km", "1 milhão de km", "500.000 km", "250.000 km"],
        "resposta": 0,
    },
    {
        "id": 128,
        "enunciado": "Qual é o principal objetivo da missão Mars Rover?",
        "opcoes": ["Estudar a atmosfera de Marte", "Buscar sinais de vida", "Explorar os anéis de Saturno", "Coletar amostras de gelo"],
        "resposta": 1,
    },
    {
        "id": 129,
        "enunciado": "Qual é o maior planeta do sistema solar em termos de volume?",
        "opcoes": ["Júpiter", "Saturno", "Urano", "Netuno"],
        "resposta": 0,
    },
    {
        "id": 130,
        "enunciado": "Qual é o nome do fenômeno que provoca a maré alta e baixa?",
        "opcoes": ["Efeito lunar", "Força gravitacional", "Pressão atmosférica", "Tidal Effect"],
        "resposta": 1,
    },
    {
        "id": 131,
        "enunciado": "Qual é o nome da missão que levou os primeiros humanos à Lua?",
        "opcoes": ["Apollo 11", "Gemini 4", "Mercury 7", "Voyager 1"],
        "resposta": 0,
    },
    {
        "id": 132,
        "enunciado": "Qual é o nome da camada de ozônio que protege a Terra dos raios UV?",
        "opcoes": ["Estratosfera", "Troposfera", "Mesosfera", "Termosfera"],
        "resposta": 0,
    },
    {
        "id": 133,
        "enunciado": "Qual planeta é conhecido por seus ventos extremamente fortes?",
        "opcoes": ["Urano", "Saturno", "Netuno", "Júpiter"],
        "resposta": 2,
    },
    {
        "id": 134,
        "enunciado": "Qual é a origem do termo 'buraco negro'?",
        "opcoes": ["Buraco na atmosfera", "Uma estrela em colapso", "Uma nova forma de estrela", "Um espaço vazio"],
        "resposta": 1,
    },
    {
        "id": 135,
        "enunciado": "Qual é a principal fonte de luz e calor para a Terra?",
        "opcoes": ["A Lua", "O Sol", "As estrelas", "Os planetas"],
        "resposta": 1,
    },
    {
        "id": 136,
        "enunciado": "Qual é o fenômeno que causa a mudança das estações?",
        "opcoes": ["Rotação da Terra", "Inclinação do eixo da Terra", "Distância da Terra ao Sol", "Movimento da Lua"],
        "resposta": 1,
    },
    {
        "id": 137,
        "enunciado": "Qual é a definição de uma estrela anã?",
        "opcoes": ["Estrela de baixa massa", "Estrela em colapso", "Estrela jovem", "Estrela em sua fase final"],
        "resposta": 0,
    },
    {
        "id": 138,
        "enunciado": "Qual planeta tem a maior quantidade de luas conhecidas?",
        "opcoes": ["Júpiter", "Saturno", "Urano", "Marte"],
        "resposta": 1,
    },
    {
        "id": 139,
        "enunciado": "Qual é o maior satélite natural do sistema solar?",
        "opcoes": ["Ganimedes", "Titã", "Calisto", "Europa"],
        "resposta": 0,
    },
    {
        "id": 140,
        "enunciado": "Qual é o termo para a linha imaginária que divide a Terra em hemisférios norte e sul?",
        "opcoes": ["Equador", "Meridiano", "Paralelo", "Eixo"],
        "resposta": 0,
    },
    {
        "id": 141,
        "enunciado": "Qual é o nome da força que mantém os planetas em órbita?",
        "opcoes": ["Força gravitacional", "Força centrípeta", "Força nuclear", "Força eletromagnética"],
        "resposta": 0,
    },
    {
        "id": 142,
        "enunciado": "Qual é o nome da nave espacial que realizou a primeira missão tripulada ao espaço?",
        "opcoes": ["Vostok 1", "Apollo 11", "Gemini 7", "Shenzhou 5"],
        "resposta": 0,
    },
    {
        "id": 143,
        "enunciado": "Qual é a principal razão pela qual a Lua tem crateras?",
        "opcoes": ["Impactos de meteoros", "Erosão", "Atividade vulcânica", "Atividade atmosférica"],
        "resposta": 0,
    },
    {
        "id": 144,
        "enunciado": "Qual é o nome do telescópio espacial que ajudou a descobrir a aceleração da expansão do universo?",
        "opcoes": ["Hubble", "Chandra", "Kepler", "Spitzer"],
        "resposta": 0,
    },
    {
        "id": 145,
        "enunciado": "Qual é o fenômeno que ocorre quando a luz do Sol é refletida na atmosfera de um planeta?",
        "opcoes": ["Refração", "Reflexão", "Dispersão", "Absorção"],
        "resposta": 1,
    },
    {
        "id": 146,
        "enunciado": "Qual é o nome do fenômeno que faz com que os planetas pareçam se mover para trás no céu?",
        "opcoes": ["Retrogradação", "Rotação", "Revolução", "Precessão"],
        "resposta": 0,
    },
    {
        "id": 147,
        "enunciado": "Qual é o principal gás que compõe a atmosfera da Terra?",
        "opcoes": ["Hélio", "Nitrogênio", "Oxigênio", "Dióxido de carbono"],
        "resposta": 1,
    },
    {
        "id": 148,
        "enunciado": "Qual é o planeta mais quente do sistema solar?",
        "opcoes": ["Vênus", "Mercúrio", "Marte", "Júpiter"],
        "resposta": 0,
    },
    {
        "id": 149,
        "enunciado": "Qual é o nome do fenômeno que provoca as mudanças climáticas na Terra?",
        "opcoes": ["Efeito estufa", "Aquecimento global", "Ciclo da água", "Mudanças sazonais"],
        "resposta": 0,
    },
    {
        "id": 150,
        "enunciado": "Qual é a principal fonte de energia para a vida na Terra?",
        "opcoes": ["Sol", "Terra", "Lua", "Estrelas"],
        "resposta": 0,
    }
]

export default perguntas
