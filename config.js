// config.js

// ═════════════════════════════════════════════════════════════════════════════
// SCENARIO SETTINGS
// ═════════════════════════════════════════════════════════════════════════════
const CONFIG = {
  // Set to 1 for Scenario 1, or 2 for Scenario 2
  activeRoute: 1,

  // Set to 'trummelbach' or 'staubbach'
  waterfallPreference: 'trummelbach',

  // Set to true to show the debug buttons, or false to hide them
  showDebugMenu: false
};

const LOCATIONS = {
  energieWarme: { lat: 46.595086, lon: 7.907575, radius: 500 },
  trummelbach: { lat: 46.569663, lon: 7.914125, radius: 1000 },
  staubbach: { lat: 46.589985, lon: 7.905271, radius: 1000 },
  northFace: { lat: 46.553952, lon: 7.886537, radius: 1000 },
  allmendhubel: { lat: 46.564198, lon: 7.889062, radius: 1000 },
  proposal: { lat: 46.599000, lon: 7.908000, radius: 500 },
  coffee: { lat: 46.624592, lon: 8.043381, radius: 500 } // Placeholder: Update with your coffee spot
};

const CHAPTERS = [
  {
    title: "When we met",
    message:
      "I was instantly attracted to your warm and welcoming energy. You have such a genuine kindness that I continue to fall in love with more every day. Our 3AM talks in your suite are one of my favorite memories.",
    photo: "cat_sweaters.jpg"
  },

  {
    title: "When I knew",
    message:
      "The time I remember falling hard for you was the first summer you visited me in Petaluma. I loved driving you around my hometown and getting to know you deeper. Driving up to Sonoma Mountain and seeing the hilltops over the fog was unforgettable.",
    photo: "sonoma_mountain.jpg"
  },

  {
    title: "What I love about you",
    message:
      "You're my best friend. You're the funniest, most beautiful, strongest person I know. I love how you care so much for animals. I love that we can be weird together and completely ourselves without even a second thought.",
    photo: "lunch_date.jpg"
  },

  {
    title: "What my life looks like with you",
    message:
      "When I think about our life together, I get excited for the adventures to other countries, the fun date nights, and sharing meals together! I'm also so excited to go through the boring moments with you like grocery shopping and talking about our days—because it means we're building a life, together.",
    photo: "waterfall_date.jpg"
  },

  {
    title: "Forever",
    message: "We made it to our final stop! Ready for our next adventure?",
    photo: "engagement_ring.jpg"
  }
];

function getItinerary() {
  const selectedWaterfall =
    CONFIG.waterfallPreference === "staubbach"
      ? LOCATIONS.staubbach
      : LOCATIONS.trummelbach;

  const routeNodes =
    CONFIG.activeRoute === 1
      ? [
          LOCATIONS.energieWarme,
          selectedWaterfall,
          LOCATIONS.northFace,
          LOCATIONS.allmendhubel,
          LOCATIONS.proposal
        ]
      : [
          LOCATIONS.coffee,
          LOCATIONS.northFace,
          LOCATIONS.allmendhubel,
          selectedWaterfall,
          LOCATIONS.proposal
        ];

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

const itinerary = getItinerary();