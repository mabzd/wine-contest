Data.push({
    datasetName: 'ger-white',
    eventName: 'Białe wina niemieckie',
    eventDate: new Date(Date.parse('2024-03-23')),
    judgeCount: 6,
    variant: [
        "2-4", "3-5", "4-6", "2-4", "4-5", "1-3",
        "1-5", "1-6", "3-6", "1-5", "1-6", "3-6",
        "5-6", "2-3", "2-5", "1-2", "2-3", "2-5",
        "3-4", "2-6", "1-4", "3-4", "2-6", "1-4",
        "1-2", "4-5", "1-3", "5-6", "3-5", "4-6",
    ],
    wines: [
        {
            id: "1",
            name: "Grauer Burgunder",
            winery: "Bernhard Huber",
            grapes: "Pinot Gris",
            country: "Badenia",
            color: "#FBC300",
            countryCode: "de",
            year: 2020,
            price: 20,
            currency: 'EUR',
            link: "https://en.weine.de/huber-grauer-burgunder-trocken.html"
        },
        {
            id: "2",
            name: "Silvaner Escherndorfer Lump 1G",
            winery: "Horst Sauer",
            grapes: "Silvaner",
            country: "Frankonia",
            color: "#009696",
            countryCode: "de",
            year: 2022,
            price: 15.50,
            currency: 'EUR',
            link: "https://en.weine.de/horst-sauer-silvaner-s.html"
        },
        {
            id: "3",
            name: "Weisser Burgunder 'Schweigen'",
            winery: "Friedrich Becker",
            grapes: "Pinot Blanc",
            country: "Palatynat",
            color: "#8EBD2B",
            countryCode: "de",
            year: 2019,
            price: 22,
            currency: 'EUR',
            link: "https://en.weine.de/becker-weisser-burgunder-schweigen-trocken.html"
        },
        {
            id: "4",
            name: "Riesling Zeltinger Himmelreich Kabinett",
            winery: "Selbach-Oster",
            grapes: "Riesling",
            country: "Region Mozeli",
            color:  "#E1A90E",
            countryCode: "de",
            year: 2021,
            price: 12.50,
            currency: 'EUR',
            link: "https://en.weine.de/selbach-oster-riesling-zeltinger-sonnenuhr-kabinett-halbtrocken.html"
        },
        {
            id: "5",
            name: "Riesling Kreuznacher Kahlenberg 1G",
            winery: "Dönnhoff",
            grapes: "Riesling",
            country: "Region Nahe",
            color: "#009CDB",
            countryCode: "de",
            year: 2022,
            price: 22.50,
            currency: 'EUR',
            link: "https://en.weine.de/doennhoff-riesling-kahlenberg-erste-lage-trocken.html"
        },
        {
            id: "6",
            name: "Riesling 'Aus Den Lagen' Organic",
            winery: "Christmann",
            grapes: "Riesling",
            country: "Palatynat",
            color: "#8EBD2B",
            countryCode: "de",
            year: 2021,
            price: 18.80,
            currency: 'EUR',
            link: "https://en.weine.de/christmann-riesling-aus-den-lagen-trocken-bio.html"
        }
    ],
    judges: [
        {
            name: "Gochna", 
            initials: "G",
            votes: [
                { left: "2", right: "4", winner: "4" },
                { left: "1", right: "5", winner: "5", leftNote: "gorzkość czuję..." },
                { left: "5", right: "6", winner: "6", leftNote: "bardzo konkurencyjny", rightNote: "przyjemny aromat" },
                { left: "3", right: "4", winner: "4" },
                { left: "1", right: "2", winner: "2", leftNote: "po orzeszkach lepsze" },
            ],
        },
        {
            name: "majajajka ♡", 
            initials: "M",
            votes: [
                { left: "3", right: "5", winner: "3" },
                { left: "1", right: "6", winner: "1", note: "mocno się waham i trochę obrażam się na organica za gnój" },
                { left: "2", right: "3", winner: "2", leftNote: "z dwojga złego", note: "oba są FUJ" },
                { left: "2", right: "6", winner: "2" },
                { left: "4", right: "5", winner: "4" },
            ],
        },
        {
            name: "B̴̝́a̸͝ͅr̸̦̈́t̸̯͒o̸͈͝s̶̞͊ẑ̷̠", 
            initials: "B̴̝́",
            votes: [
                { left: "4", right: "6", winner: "4" },
                { left: "3", right: "6", winner: "3" },
                { left: "2", right: "5", winner: "5" },
                { left: "1", right: "4", winner: "4" },
                { left: "1", right: "3", winner: "3" },
            ],
        },
        {
            name: "P", 
            initials: "P",
            votes: [
                { left: "2", right: "4", winner: "4" },
                { left: "1", right: "5", winner: "5", note: "chuj wie\nale faktycznie inne" },
                { left: "1", right: "2", winner: "2", note: "to jest tak że to po prostu są inne wina.\nto nie jest tak że jedne są lepsze a inne gorsze" },
                { left: "3", right: "4", winner: "4" },
                { left: "5", right: "6", winner: "6" },
            ],
        },
        {
            name: "Pyś", 
            initials: "Pś",
            votes: [
                { left: "4", right: "5", winner: "4", note: "ciężka decyzja" },
                { left: "1", right: "6", winner: "6" },
                { left: "2", right: "3", winner: "2" },
                { left: "2", right: "6", winner: "2" },
                { left: "3", right: "5", winner: "5" },
            ],
        },
        {
            name: "Julia", 
            initials: "J",
            votes: [
                { left: "1", right: "3", winner: "3" },
                { left: "3", right: "6", winner: "6" },
                { left: "2", right: "5", winner: "2" },
                { left: "1", right: "4", winner: "4", rightNote: "w pojedynku zdecydowane zwycięstwo!" },
                { left: "4", right: "6", winner: "4" },
            ],
        }
    ]
});