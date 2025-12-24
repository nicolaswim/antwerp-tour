// SVG Map Asset - Refactored for "The Drama of the Flesh"
// Route: Rubenshuis -> Cathedral -> Vlaeykensgang -> St. Pauls -> KMSKA

const mapSVG = `
<svg id="map-svg" viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <defs>
        <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>

    <!-- The River Scheldt (West) -->
    <path d="M50,1000 C50,1000 0,600 150,400 C300,200 100,0 100,0" stroke="#101419" stroke-width="150" fill="none" opacity="0.5"/>
    
    <!-- City Blocks (Abstract - Darker) -->
    <g id="city-blocks" fill="#0D1014" stroke="#1A1F26" stroke-width="1">
        <rect x="250" y="100" width="100" height="150" ry="2" />
        <rect x="400" y="120" width="150" height="100" ry="2" /> <!-- St Pauls Area -->
        <rect x="550" y="300" width="150" height="150" ry="2" /> <!-- Rubenshuis Area (Wapper) -->
        <rect x="250" y="300" width="100" height="100" ry="2" /> <!-- Cathedral Area -->
        <rect x="400" y="500" width="200" height="150" ry="2" />
        <rect x="200" y="500" width="150" height="300" ry="2" /> <!-- KMSKA closer to South -->
        <rect x="450" y="800" width="150" height="100" ry="2" /> <!-- South -->
    </g>

    <!-- The Golden Route (Animated) 
         Start: Rubenshuis (East-Central)
         Cathedral (Central) (Stops 2,3,4)
         Vlaeykensgang (Central - hidden alley)
         St. Paul's (North)
         KMSKA (South)
    -->
    <path id="route-path" class="map-path" 
          d="M625,375 L450,375 L300,350 L275,325 L250,350 L350,200 L350,150 L350,600 L350,850" 
          stroke="#C5A065" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>

    <!-- Map Pins -->
    
    <!-- Stop 1: Rubenshuis (Wapper) -->
    <g class="map-pin" id="pin-1" style="transform-origin: 625px 375px;">
        <circle cx="625" cy="375" r="8" fill="#0D1014" stroke="#C5A065" stroke-width="2"/>
        <text x="640" y="380" fill="#F4F1EA" font-family="serif" font-size="20" opacity="0.6">Rubenshuis</text>
    </g>

    <!-- Stop 2-4: Cathedral (Cluster) -->
    <g class="map-pin" id="pin-2" style="transform-origin: 300px 350px;">
        <circle cx="300" cy="350" r="15" fill="#0D1014" stroke="#C5A065" stroke-width="1" stroke-dasharray="4 2"/>
        <text x="280" y="390" fill="#F4F1EA" font-family="serif" font-size="18" text-anchor="middle" opacity="0.6">Cathedral</text>
    </g>
    <!-- We reuse pin-2 for stops 2,3,4 visually or just pulse it -->
    <!-- Helper invisible pins for logic if needed, but we can reuse pin-2 in logic -->

    <!-- Stop 5: Vlaeykensgang (Alley) -->
    <g class="map-pin" id="pin-5" style="transform-origin: 275px 325px;">
        <circle cx="275" cy="325" r="5" fill="#C5A065"/>
    </g>

    <!-- Stop 6: St. Paul's (North) -->
    <g class="map-pin" id="pin-6" style="transform-origin: 350px 150px;">
         <circle cx="350" cy="150" r="8" fill="#0D1014" stroke="#C5A065" stroke-width="2"/>
         <text x="370" y="155" fill="#F4F1EA" font-family="serif" font-size="18" opacity="0.6">St. Paul's</text>
    </g>

    <!-- Stop 7: KMSKA (South) -->
    <g class="map-pin" id="pin-7" style="transform-origin: 350px 850px;">
        <circle cx="350" cy="850" r="10" fill="#C5A065" stroke="#F4F1EA" stroke-width="2"/>
        <text x="350" y="880" fill="#F4F1EA" font-family="serif" font-size="24" text-anchor="middle" font-weight="bold">KMSKA</text>
    </g>

</svg>`;

document.getElementById('map-container').innerHTML = mapSVG;
