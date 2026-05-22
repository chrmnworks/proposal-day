// config.js

// ══════════════════════════════════════════════════
// SCENARIO SETTINGS
// ══════════════════════════════════════════════════
// config.js

// ══════════════════════════════════════════════════
// SCENARIO SETTINGS
// ══════════════════════════════════════════════════
const CONFIG = {
    // Set to 1 for Scenario 1, or 2 for Scenario 2
    activeRoute: 1, 
    
    // Set to 'trummelbach' or 'staubbach'
    waterfallPreference: 'trummelbach',
    
    // Set to true to show the debug buttons, or false to hide them
    showDebugMenu: true 
};

// ... [Keep the rest of your LOCATIONS, CHAPTERS, and getItinerary() code here] ...

// ══════════════════════════════════════════════════
// GPS COORDINATES
// ══════════════════════════════════════════════════
const LOCATIONS = {
    energieWarme: { lat: 46.595086, lon: 7.907575, radius: 500 },
    trummelbach:  { lat: 46.569663, lon: 7.914125, radius: 1000 },
    staubbach:    { lat: 46.589985, lon: 7.905271, radius: 1000 }, // Viewpoint alt: 46.595287, 7.908129
    northFace:    { lat: 46.553952, lon: 7.886537, radius: 1000 },
    allmendhubel: { lat: 46.564198, lon: 7.889062, radius: 1000 },
    proposal:     { lat: 46.599000, lon: 7.908000, radius: 500 },  
    coffee:       { lat: 46.624592, lon: 8.043381, radius: 500 }   // Placeholder: Update with your coffee spot
};

// ══════════════════════════════════════════════════
// STORY CHAPTERS (Content stays in the same order)
// ══════════════════════════════════════════════════
const CHAPTERS = [
    {
        title: "When we met",
        message: "I was instantly attracted to your warm and welcoming energy. You have such a genuine kindness that I continue to fall in love with more every day. Our 3AM talks in your suite are one of my favorite memories of us.",
        photo: "cat_sweaters.jpg"
    },
    {
        title: "When I knew",
        message: "The time I remember falling hard for you was the first summer you visited me in Petaluma. I loved driving you around my hometown and getting to know you deeper. Driving up to Sonoma Mountain together felt like being with someone I had already known my whole life.",
        photo: "formal.jpg"
    },
    {
        title: "What I love about you",
        message: "You're my best friend. You're the funniest, most beautiful, strongest person I know. I love how you care so much for animals. I love that we can be weird together and completely ourselves. I love that we can have deep talks about life together. Above all of that, I'm in love with your kind heart.",
        photo: "love.jpg"
    },
    {
        title: "What my life looks like with you",
        message: "When I think about our life together, I get excited for the adventures to other countries, the fun date nights, and sharing meals together! I'm also so excited to go through the boring moments together. I'm excited to watch shows together every night and fill out paperwork and go to vet appointments. Even the hard moments are something that I couldn't image going through with anyone else. I feel honored that you've trusted me to go through the highs and lows of life together, and I want nothing more than to do that with you for the rest of my life.",
        photo: "future.jpg"
    },
    {
        title: "Forever",
        message: "We made it to our final stop! Ready for our next adventure?",
        photo: "forever.JPG"
    }
];

// ══════════════════════════════════════════════════
// ROUTE GENERATOR
// ══════════════════════════════════════════════════
function getItinerary() {
    let selectedWaterfall = CONFIG.waterfallPreference === 'staubbach' 
        ? LOCATIONS.staubbach 
        : LOCATIONS.trummelbach;
    
    let routeNodes = [];

    if (CONFIG.activeRoute === 1) {
        // Scenario 1: Energie Warme -> Waterfall -> North Face -> Allmendhubel -> Proposal
        routeNodes = [
            LOCATIONS.energieWarme,
            selectedWaterfall,
            LOCATIONS.northFace,
            LOCATIONS.allmendhubel,
            LOCATIONS.proposal
        ];
    } else if (CONFIG.activeRoute === 2) {
        // Scenario 2: Coffee -> North Face -> Allmendhubel -> Waterfall -> Proposal
        routeNodes = [
            LOCATIONS.coffee,
            LOCATIONS.northFace,
            LOCATIONS.allmendhubel,
            selectedWaterfall,
            LOCATIONS.proposal
        ];
    }

    // Map the selected route to the chronological story chapters
    return routeNodes.map((node, index) => {
        return {
            step: index + 1,
            lat: node.lat,
            lon: node.lon,
            radius: node.radius || 500,
            title: CHAPTERS[index].title,
            message: CHAPTERS[index].message,
            photo: CHAPTERS[index].photo
        };
    });
}

// Generate the final itinerary variable used by index.html
const itinerary = getItinerary();