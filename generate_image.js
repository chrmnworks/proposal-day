const fs = require('fs');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="1440" height="320">
    <rect width="1440" height="320" fill="#fcf9f8"/>
    <!-- Back layer -->
    <path fill="#e8ece4" d="M0,320 L0,180 L150,50 L250,180 L400,20 L600,250 L750,80 L900,220 L1100,30 L1250,180 L1440,100 L1440,320 Z"/>
    <!-- Middle layer -->
    <path fill="#d1dbca" d="M0,320 L0,220 L200,100 L350,260 L550,60 L750,250 L950,100 L1150,280 L1350,120 L1440,200 L1440,320 Z"/>
    <!-- Front layer -->
    <path fill="#baccb0" d="M0,320 L0,270 L250,150 L450,300 L700,150 L950,300 L1200,180 L1440,250 L1440,320 Z"/>
</svg>
`;

fs.writeFileSync('mountains.svg', svg);
