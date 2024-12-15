const products = [
    {
      "id":1,
      "name": "Areca Palm",
      "category":"Indoor",
      "price": 150.99,
      "description": "A popular indoor and outdoor plant known for its graceful appearance and air-purifying qualities. ",
      "featured": "true",
      "image": "../Images/Plant/Indoor/areca.png"
    },
    {
        "id":2,
        "name": "Money Plant Variegated",
        "category":"Indoor",
        "price": 249,
        "description": "The money plant is a low-maintenance indoor plant known for bringing good luck.",
        "featured": "true",
        "image": "../Images/Plant/Indoor/moneyplant.png"
    },
    {
        "id":3,
        "name": "Peace Lily",
        "category":"Indoor",
        "price": 299,
        "description": "The peace lily is a low-maintenance indoor plant known for purifying the air and adding calmness.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/lily.png"
    },
    {
        "id":4,
        "name": "Peace Lily",
        "category":"Flower",
        "price": 299,
        "description": "A popular indoor and outdoor plant known for its graceful appearance and air-purifying qualities. ",
        "featured": "false",
        "image": "../Images/Plant/Indoor/lily.png"
    },
    {
        "id": 5,
        "name": "Aglaonema Pink Beauty Plant",
        "category": "Indoor",
        "price": 699,
        "description": "A beautiful indoor plant with pink-tinted leaves, perfect for adding a splash of color to your home.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/Aglaonema.png"
    },
    {
        "id": 6,
        "name": "Anthurium Red Plant",
        "category": "Indoor",
        "price": 799,
        "description": "A striking plant with vibrant red flowers that make a bold statement in any room.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/Anthurium.png"
    },
    {
        "id": 7,
        "name": "Lucky Bamboo Plant",
        "category": "Indoor",
        "price": 399,
        "description": "An easy-to-care-for plant believed to bring good fortune, often grown in water or soil.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/LuckyBamboo.png"
    },
    {
        "id": 8,
        "name": "Bamboo Palm",
        "category": "Indoor",
        "price": 2599,
        "description": "A tall, elegant palm that thrives indoors and helps to purify the air.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/bambooPalm.png"
    },
    {
        "id": 9,
        "name": "Broken Heart",
        "category": "Indoor",
        "price": 999,
        "description": "A unique plant with heart-shaped leaves, perfect for adding a touch of nature to your indoor space.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/BrokenHeart.png"
    },
    {
        "id": 10,
        "name": "Calathea Sanderiana",
        "category": "Indoor",
        "price": 699,
        "description": "An eye-catching plant with strikingly patterned leaves, ideal for brightening up any room.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/Calathea.png"
    },
    {
        "id": 11,
        "name": "The China Doll Plant",
        "category": "Indoor",
        "price": 2499,
        "description": "A delicate plant with glossy, deep green leaves that adds a touch of elegance to indoor spaces.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/ChinaDoll.png"
    },
    {
        "id": 12,
        "name": "Croton Petra",
        "category": "Indoor",
        "price": 1999,
        "description": "A vibrant plant with colorful, variegated leaves that stands out in any setting.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/Croton.png"
    },
    {
        "id": 13,
        "name": "Fern Plant",
        "category": "Indoor",
        "price": 499,
        "description": "A lush, green plant that thrives in low light, making it perfect for any indoor environment.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/Fern.png"
    },
    {
        "id": 14,
        "name": "Ficus Lyrata Bambino -XL",
        "category": "Indoor",
        "price": 2999,
        "description": "A popular indoor tree with large, fiddle-shaped leaves, ideal for adding a tropical feel to your space.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/FicusLyrata.png"
    },
    {
        "id": 15,
        "name": "Jade Plant Mini",
        "category": "Indoor",
        "price": 250,
        "description": "A compact, easy-care succulent with thick, fleshy leaves, often associated with good luck.",
        "featured": "true",
        "image": "../Images/Plant/Indoor/jade.png"
    },
    {
        "id": 16,
        "name": "Monstera Deliciosa Plant",
        "category": "Indoor",
        "price": 1049,
        "description": "A trendy indoor plant with large, perforated leaves that create a bold, tropical look.",
        "featured": "true",
        "image": "../Images/Plant/Indoor/monstera.png"
    },
    {
        "id": 17,
        "name": "Rubber Plant",
        "category": "Indoor",
        "price": 499,
        "description": "An attractive plant with thick, glossy leaves, known for its air-purifying qualities.",
        "featured": "true",
        "image": "../Images/Plant/Indoor/RubberPlant.png"
    },
    {
        "id": 18,
        "name": "Snake Plant - Green",
        "category": "Indoor",
        "price": 499,
        "description": "A hardy plant with upright, sword-like leaves, excellent for improving indoor air quality.",
        "featured": "true",
        "image": "../Images/Plant/Indoor/snake-green.png"
    },
    {
        "id": 18,
        "name": "Snake Plant - Golden Hahnii",
        "category": "Indoor",
        "price": 399,
        "description": "A compact variety of snake plant with yellow-edged leaves, perfect for small spaces.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/snake.png"
    },
    {
        "id": 19,
        "name": "Sansevieria Superba Green - Snake Plant",
        "category": "Indoor",
        "price": 599,
        "description": "A robust plant with tall, green leaves that require minimal care, ideal for beginners.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/SnakeBig.png"
    },
    {
        "id": 20,
        "name": "ZZ Plant",
        "category": "Indoor",
        "price": 399,
        "description": "A low-maintenance plant with waxy, dark green leaves, perfect for low-light areas.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/zz.png"
    },
    {
        "id": 21,
        "name": "Peacock Plant",
        "category": "Indoor",
        "price": 599,
        "description": "A stunning plant with intricately patterned leaves, known for its unique appearance.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/Peacock.png"
    },
    {
        "id": 22,
        "name": "Peacock Plant",
        "category": "Indoor",
        "price": 599,
        "description": "A stunning plant with intricately patterned leaves, known for its unique appearance.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/Peacock.png"
    },
    {
        "id": 22,
        "name": "Areca Palm",
        "category": "Outdoor",
        "price": 899,
        "description": "A popular palm with feathery fronds, great for both indoor and outdoor decoration.",
        "featured": "false",
        "image": "../Images/Plant/Indoor/areca.png"
    },
    {
        "id": "45",
        "category": "outdoor",
        "name": "Tulsi",
        "price": "200",
        "description": "A sacred and aromatic plant known for its medicinal properties and religious significance.",
        "image": "../Images/Plant/Outdoor/Tulsi.png"
    },
    
        {
            "id": "25",
            "category": "outdoor",
            "name": "Jasmine Moonbeam",
            "price": "450",
            "description": "A low-maintenance plant with beautiful white flowers and soft, fuzzy leaves.",
            "image": "../Images/Plant/Outdoor/Moonbeam.jpg",
        },
        {
            "id": "26",
            "category": "outdoor",
            "name": "Tabernaemontana coronaira",
            "price": "800",
            "description": "A fragrant, flowering shrub with white blooms and glossy leaves, perfect for hedges.",
            "image": "../Images/Plant/Outdoor/Tabernaemontana.jpg"
        },
        {
            "id": "27",
            "category": "outdoor",
            "name": "Echeveria",
            "price": "250",
            "description": "A stunning succulent with rosettes of fleshy leaves in shades of blue, pink, and white.",
            "image": "../Images/Plant/Outdoor/Echeveria.jpg"
        },
        {
            "id": "28",
            "category": "outdoor",
            "name": "Eucalyptus",
            "price": "1200",
            "description": "A fast-growing tree with aromatic leaves and a refreshing scent, great for landscaping.",
            "image": "../Images/Plant/Outdoor/Eucalyptus.jpg"
        },
        {
            "id": "30",
            "category": "outdoor",
            "name": "Neem Tree",
            "price": "900",
            "description": "A medicinal tree with bitter leaves and a natural pest-repellent property, great for gardens.",
            "image": "../Images/Plant/Outdoor/NeemTree.jpg"
        },
        {
            "id": "31",
            "category": "outdoor",
            "name": "Duranta",
            "price": "350",
            "description": "A flowering shrub with blue or purple blooms and golden berries, perfect for hedges and borders.",
            "image": "../Images/Plant/Outdoor/Duranta.jpg"
        },
        {
            "id": "32",
            "category": "outdoor",
            "name": "Nerium",
            "price": "600",
            "description": "A fragrant, flowering shrub with pink or white blooms and dark green leaves, great for landscaping.",
            "image": "../Images/Plant/Outdoor/Nerium.jpg"
        },
        {
            "id": "33",
            "category": "outdoor",
            "name": "Pentas",
            "price": "400",
            "description": "A low-maintenance shrub with star-shaped flowers in shades of pink, purple, and white.",
            "image": "../Images/Plant/Outdoor/Pentas.png"
        },
        {
            "id": "34",
            "category": "outdoor",
            "name": "Fern Plant",
            "price": "200",
            "description": "A delicate, shade-loving plant with lacy fronds and a natural, tropical look.",
            "image": "../Images/Plant/Outdoor/FernPlant.jpg"
        },
        {
            "id": "34",
            "category": "outdoor",
            "name": "Mayurpankh",
            "price": "200",
            "description": "A delicate, shade-loving plant with lacy fronds and a natural, tropical look.",
            "image": "../Images/Plant/Outdoor/Mayurpankh.jpg"
        },
        {
            "id": "35",
            "category": "outdoor",
            "name": "Pomegranate",
            "price": "450",
            "description": "A fruit-bearing shrub with glossy leaves and bright red, juicy fruits.",
            "image": "../Images/Plant/Outdoor/Pomegranate.png"
        },
        {
            "id": "36",
            "category": "outdoor",
            "name": "Aloe Vera",
            "price": "300",
            "description": "A versatile plant known for its medicinal properties, with thick, fleshy leaves.",
            "image": "../Images/Plant/Outdoor/AloeVera.jpg"
        },
        {
            "id": "37",
            "category": "outdoor",
            "name": "Amla",
            "price": "200",
            "description": "A small tree with round, green fruits that are rich in vitamin C.",
            "image": "../Images/Plant/Outdoor/Amla.jpg"
        },
        {
            "id": "38",
            "category": "outdoor",
            "name": "Chiku",
            "price": "350",
            "description": "A tropical fruit plant producing brown, sweet fruits with a grainy texture.",
            "image": "../Images/Plant/Outdoor/Chiku.jpg"
        },
        {
            "id": "39",
            "category": "outdoor",
            "name": "Grapes",
            "price": "400",
            "description": "A climbing plant that produces clusters of juicy, sweet fruits.",
            "image": "../Images/Plant/Outdoor/Grapes.jpg"
        },
        {
            "id": "40",
            "category": "outdoor",
            "name": "Guava",
            "price": "250",
            "description": "A tropical plant that bears round, fragrant fruits with sweet, juicy flesh.",
            "image": "../Images/Plant/Outdoor/Guava.jpg"
        },
        {
            "id": "41",
            "category": "outdoor",
            "name": "Lemon",
            "price": "300",
            "description": "A citrus plant known for its bright yellow, tangy fruits used in cooking and beverages.",
            "image": "../Images/Plant/Outdoor/Lemon.jpg"
        },
        {
            "id": "42",
            "category": "outdoor",
            "name": "Mango",
            "price": "500",
            "description": "A popular tropical fruit tree producing sweet, juicy mangoes.",
            "image": "../Images/Plant/Outdoor/Mango.jpg"
        },
        {
            "id": "43",
            "category": "outdoor",
            "name": "Nerium",
            "price": "150",
            "description": "An evergreen shrub with beautiful pink or white flowers, often used in landscaping.",
            "image": "../Images/Plant/Outdoor/Nerium.jpg"
        },
        {
            "id": "44",
            "category": "Flower",
            "name": "Marigold",
            "price": "120",
            "description": "Bright, cheerful flowers in vibrant hues of yellow and orange, commonly used in festive decorations and gardens.",
            "image": "../Images/Plant/Flower/Marigold.jpg"
        },
        {
            "id": "45",
            "category": "Flower",
            "name": "Hibiscus",
            "price": "200",
            "description": "Large, showy blooms in various colors including red, pink, and yellow, known for their tropical appeal.",
            "image": "../Images/Plant/Flower/Hibiscus.jpg"
        },
        {
            "id": "46",
            "category": "Flower",
            "name": "Bougainvillea",
            "price": "150",
            "description": "A vigorous climber with vibrant, paper-like bracts in shades of pink, purple, red, and orange.",
            "image": "../Images/Plant/Flower/Bougainvillea.jpg"
        },
        {
            "id": "47",
            "category": "Flower",
            "name": "Jasmine",
            "price": "130",
            "description": "Fragrant white or yellow blooms that are widely used in garlands, perfumes, and for ornamental purposes.",
            "image": "../Images/Plant/Flower/Jasmine.jpeg"
        },
        {
            "id": "48",
            "category": "Flower",
            "name": "Ixora",
            "price": "140",
            "description": "Compact shrub with clusters of small, colorful flowers in red, orange, and yellow, perfect for garden beds and borders.",
            "image": "../Images/Plant/Flower/Ixora.jpg"
        },
        {
            "id": "49",
            "category": "Flower",
            "name": "Lantana",
            "price": "110",
            "description": "Produces clusters of bright, multi-colored flowers that attract butterflies and add vibrant color to the garden.",
            "image": "../Images/Plant/Flower/Lantana.jpg"
        },
        {
            "id": "50",
            "category": "Flower",
            "name": "Oleander",
            "price": "160",
            "description": "Evergreen shrub with large, fragrant flowers in pink, red, or white, suitable for creating a lush garden effect.",
            "image": "../Images/Plant/Flower/Oleander.jpg"
        },
        {
            "id": "51",
            "category": "Flower",
            "name": "Balsam",
            "price": "140",
            "description": "Colorful and vibrant flowers that bloom throughout the year, often used for borders and container gardening.",
            "image": "../Images/Plant/Flower/Balsam.jpg"
        },
        {
            "id": "52",
            "category": "Flower",
            "name": "Antirrhinum",
            "price": "180",
            "description": "Also known as Snapdragon, this plant features tall spikes of colorful flowers that add a vertical element to gardens.",
            "image": "../Images/Plant/Flower/Antirrhinum.jpg"
        },
        {
            "id": "53",
            "category": "Flower",
            "name": "Kalanchoe",
            "price": "130",
            "description": "Compact succulent with clusters of small, colorful flowers that bloom in a range of shades including red, pink, and orange.",
            "image": "../Images/Plant/Flower/Kalanchoe.jpg"
        },
        {
            "id": "54",
            "category": "Flower",
            "name": "Canna Lily",
            "price": "220",
            "description": "Tropical plant with large, vibrant flowers in red, orange, and yellow, known for its dramatic foliage and blooms.",
            "image": "../Images/Plant/Flower/CannaLily.jpg"
        },
        {
            "id": "55",
            "category": "Flower",
            "name": "Crape Myrtle",
            "price": "190",
            "description": "Ornamental tree with a long flowering period and colorful blooms in shades of pink, purple, red, and white.",
            "image": "../Images/Plant/Flower/CrapeMyrtle.jpg"
        },
        {
            "id": "56",
            "category": "Flower",
            "name": "Lotus",
            "price": "250",
            "description": "Elegant aquatic plant with large, fragrant flowers in white, pink, and yellow, symbolizing purity and enlightenment.",
            "image": "../Images/Plant/Flower/Lotus.jpg"
        },
        {
            "id": "57",
            "category": "Flower",
            "name": "Petunia",
            "price": "160",
            "description": "A popular bedding plant with vibrant, funnel-shaped flowers that come in a wide range of colors including pink, purple, and white.",
            "image": "../Images/Plant/Flower/Petunia.jpg"
        },
        {
            "id": "58",
            "category": "Pot",
            "name": "Apple Ceramic Pot (6.6 Inch Diameter)",
            "price": "799",
            "description": "A stylish apple-shaped ceramic pot, perfect for small indoor plants. Adds a modern touch to your décor.",
            "image": "../Images/Pot/AppleCeramicPot6_6.jpg"
        },
        {
            "id": "59",
            "category": "Pot",
            "name": "Tulip Fantasy Bowl Ceramic Planter",
            "price": "549",
            "description": "A bowl-shaped ceramic planter featuring a tulip pattern, ideal for succulents or small flowering plants.",
            "image": "../Images/Pot/TulipFantasyBowlCeramicPlanter.jpg"
        },
        {
            "id": "60",
            "category": "Pot",
            "name": "Soothing Rains Ceramic Planters",
            "price": "4499",
            "description": "Elegant ceramic planters with a soothing rain design, perfect for large indoor or outdoor plants.",
            "image": "../Images/Pot/SoothingRainsCeramicPlanters.jpg"
        },
        {
            "id": "61",
            "category": "Pot",
            "name": "Nature's Hum Slim Ceramic Planter",
            "price": "371",
            "description": "A sleek and slim planter with a nature-inspired design, adding a calm aesthetic to your living space.",
            "image": "../Images/Pot/NaturesHumSlimCeramicPlanter.jpg"
        },
        {
            "id": "62",
            "category": "Pot",
            "name": "Tiny Kisses Ceramic Planter",
            "price": "1999",
            "description": "A compact ceramic planter with intricate designs, perfect for brightening up small spaces.",
            "image": "../Images/Pot/TinyKissesCeramicPlanter.jpg"
        },
        {
            "id": "63",
            "category": "Pot",
            "name": "Phoenix Ceramic Planter",
            "price": "1861",
            "description": "A striking ceramic planter with a bold design, ideal for showcasing medium to large plants.",
            "image": "../Images/Pot/PhoenixCeramicPlanter.jpg"
        },
        {
            "id": "64",
            "category": "Pot",
            "name": "Moonlight Drama Ceramic Planter",
            "price": "3699",
            "description": "A dramatic ceramic planter with a moonlight-inspired theme, suitable for indoor plants.",
            "image": "../Images/Pot/MoonlightDramaCeramicPlanter.jpg"
        },
        {
            "id": "65",
            "category": "Pot",
            "name": "Lilac Stories Flat Ceramic Planter",
            "price": "599",
            "description": "A flat ceramic planter with a lilac design, perfect for adding a subtle touch of elegance to your space.",
            "image": "../Images/Pot/LilacStoriesFlatCeramicPlanter.jpg"
        },
        {
            "id": "66",
            "category": "Pot",
            "name": "Frosted Ceramic Pot",
            "price": "557",
            "description": "A frosted ceramic pot with a minimalistic design, suitable for small to medium plants.",
            "image": "../Images/Pot/FrostedCeramicPot.jpg"
        },
        {
            "id": "67",
            "category": "Pot",
            "name": "Grail Ceramic Pot",
            "price": "557",
            "description": "A grail-shaped ceramic pot that adds an antique feel to your plant collection.",
            "image": "../Images/Pot/GrailCeramicPot.jpg"
        },
        {
            "id": "68",
            "category": "Pot",
            "name": "Diamond Ceramic Pot",
            "price": "371",
            "description": "A diamond-patterned ceramic pot that adds a touch of sparkle to your home décor.",
            "image": "../Images/Pot/DiamondCeramicPot.jpg"
        },
        {
            "id": "69",
            "category": "Pot",
            "name": "Spiro Ceramic Pot",
            "price": "371",
            "description": "A ceramic pot with spiral patterns, perfect for adding a dynamic design to your plant setup.",
            "image": "../Images/Pot/SpiroCeramicPot.jpg"
        }
  ]
  
  
  export default products;