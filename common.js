const Wines = [
    {
        id: "1",
        name: "Villa Diana",
        winery: "Feudo Antico",
        grapes: "Trebbiano Abruzzese",
        country: "Włochy, Abruzja",
        countryCode: "it",
        year: 2022,
        price: 45,
        link: "https://modernwineclub.pl/produkt/villa-diana-trebbiano-dabruzzo-doc/"
    },
    {
        id: "2",
        name: "Oveja Blanca",
        winery: "Bodegas Fontana",
        grapes: "Muscat Blanc",
        country: "Hiszpania, Kastylia-La Mancha",
        countryCode: "es",
        year: 2022,
        price: 48,
        link: "https://modernwineclub.pl/produkt/bodegas-fontana-oveja-blanca-moscatel/"
    },
    {
        id: "3",
        name: "Blanc Mariner",
        winery: "Joan Sardà",
        grapes: "Xarel·lo + Chardonnay",
        country: "Hiszpania, Katalonia",
        countryCode: "es",
        year: 2022,
        price: 39,
        link: "https://modernwineclub.pl/produkt/blanc-mariner/"
    },
    {
        id: "4",
        name: "Willowglen",
        winery: "De Bortoli",
        grapes: "Gewürztraminer + Riesling",
        country: "Australia, Nowa Południowa Walia",
        countryCode: "au",
        year: 2022,
        price: 40,
        link: "https://modernwineclub.pl/produkt/willowglen-gewurztraminer-riesling/"
    },
    {
        id: "5",
        name: "Riesling",
        winery: "Eymann",
        grapes: "Riesling",
        country: "Niemcy, Nadrenia-Palatynat",
        countryCode: "de",
        year: 2022,
        price: 69,
        link: "https://modernwineclub.pl/produkt/eymann-riesling/"
    },
    {
        id: "6",
        name: "Chardonnay",
        winery: "Aves del Sur",
        grapes: "Chardonnay",
        country: "Chile, Dolina Środkowochilijska",
        countryCode: "cl",
        year: 2022,
        price: 36,
        link: "https://modernwineclub.pl/produkt/aves-del-sur-chardonnay/"
    },
    {
        id: "7",
        name: "Bianco Biologico",
        winery: "Fabrizio Vella",
        grapes: "Catarratto",
        country: "Włochy, Sycylia",
        countryCode: "it",
        year: 2022,
        price: 45,
        link: "https://modernwineclub.pl/produkt/fabrizio-vella-bianco-biologico/"
    },
    {
        id: "8",
        name: "Lumari Lucido Inzolia",
        winery: "Cantina Colomba Bianca",
        grapes: "Inzolia",
        country: "Włochy, Sycylia",
        countryCode: "it",
        year: 2022,
        price: 40,
        link: "https://modernwineclub.pl/produkt/cantina-colomba-bianca-lumari-lucido-inzolia/"
    },
];

const Judges = [
    { 
        name: "MONI", 
        initials: "Mo",
        votes: [
            { left: "2", right: "1", winner: "2" },
            { left: "3", right: "8", winner: "8" },
            { left: "4", right: "7", winner: "4", leftNote: "TOPKA!" },
            { left: "5", right: "6", winner: "5" },
        ],
    },
    { 
        name: "DŻOANKA", 
        initials: "DŻ",
        votes: [
            { left: "3", right: "4", winner: "4" },
            { left: "1", right: "7", winner: "1" },
            { left: "8", right: "6", winner: "8" },
            { left: "2", right: "5", winner: "2" },
        ],
    },
    { 
        name: "ADAM",
        initials: "A",
        votes: [
            { left: "6", right: "2", winner: "6" },
            { left: "7", right: "8", winner: "8" },
            { left: "4", right: "1", winner: "1" },
            { left: "5", right: "3", winner: "5" },
        ],
    },
    { 
        name: "5", 
        initials: "5",
        votes: [
            { left: "7", right: "5", winner: "7", note: "2 zapach 1\n2 smak 2\n2 posmak 1\n6 - 4" },
            { left: "8", right: "4", winner: "4", note: "3 zapach 2\n2 smak 3\n2 posmak 3\n7 - 8" },
            { left: "2", right: "3", winner: "2", note: "2 zapach 2\n2 smak 2\n3 posmak 3" },
            { left: "6", right: "1", winner: "6", note: "3 zapach 2\n2 smak 3\n2 posmak 2" },
        ],
    },
    { 
        name: "Pyś",
        initials: "Pś",
        votes: [
            { left: "5", right: "8", winner: "5" },
            { left: "1", right: "3", winner: "3", note: "ciężka decyzja" },
            { left: "6", right: "7", winner: "7" },
            { left: "4", right: "2", winner: "2", leftNote: "bardzo słodkie!" },
        ],
    },
    { 
        name: "B̴̝́a̸͝ͅr̸̦̈́t̸̯͒o̸͈͝s̶̞͊ẑ̷̠",
        initials: "B̴̝́",
        votes: [
            { left: "3", right: "6", winner: "3" },
            { left: "2", right: "7", winner: "2" },
            { left: "4", right: "5", winner: "4" },
            { left: "8", right: "1", winner: "8" },
        ],
    },
    { 
        name: "MAJKA ♥",
        initials: "Ma",
        votes: [
            { left: "1", right: "5", winner: "1" },
            { left: "6", right: "4", winner: "4" },
            { left: "8", right: "2", winner: "2", rightNote: "♥" },
            { left: "7", right: "3", winner: "3" },
        ],
    },
];