async function getDeath() {
    console.log("Button clicked - starting getDeath!");
    document.getElementById("result").innerHTML = "Calculating your cosmic doom...";
    const deathImage = document.getElementById("deathImage");
    deathImage.src = ""; // Clear previous image
    deathImage.style.display = "none"; // Hide initially

    const cosmicObjects = [
        "Ceres", "Vesta", "Pallas", "Juno", "Eros", "Psyche", "Apophis",
        "Halley’s Comet", "Hale-Bopp", "Shoemaker-Levy 9", "Swift-Tuttle", "Hyakutake",
        "Andromeda Galaxy", "Milky Way", "Sombrero Galaxy", "Whirlpool Galaxy", "supermassive black hole",
        "Kepler-22b", "Proxima Centauri b", "Eris", "Haumea", "Makemake"
    ];
    const cosmicThing = cosmicObjects[Math.floor(Math.random() * cosmicObjects.length)];

    const actions = [
        "vaporized", "crushed", "eaten", "probed", "flattened", "sucked into", "melted", "zapped",
        "obliterated", "teleported inside", "smothered", "disintegrated", "swallowed whole", "blasted",
        "impaled", "frozen by", "cooked by", "tangled in", "dissolved", "electrocuted", "launched into",
        "shredded", "bamboozled", "squashed", "hypnotized by", "chased down by", "engulfed", "spaghettified", "warped",
        "tickled to death", "photobombed into oblivion", "danced off", "abducted and yeeted",
        "karate-chopped", "moonwalked over", "overdosed on cosmic rays", "pranked into a wormhole",
        "slapped into orbit", "burped into stardust", "noodled", "high-fived to smithereens"
    ];

    const quirks = [
        "disco-dancing", "angry", "glitter-covered", "sneaky", "teleporting", "radioactive", "singing", "haunted",
        "time-warping", "invisible", "gigantic", "tiny-but-furious", "laser-eyed", "bouncy", "hypnotic",
        "chocolate-dripping", "screaming", "polka-dotted", "bubble-blowing", "glow-in-the-dark", "fluffy",
        "ninja-trained", "sparkly", "robotic", "whistling", "two-headed", "gravity-defying", "psychedelic", "cackling",
        "caffeine-addicted", "wearing flip-flops", "overly dramatic", "breakdancing", "sarcastic",
        "covered in space jam", "yodeling", "moonlighting as a DJ", "obsessed with selfies",
        "armed with a kazoo", "riding a unicycle", "drunk on starlight", "bad at parking", "chewing gum loudly"
    ];

    const extras = [
        "while napping", "during a selfie", "in slow motion", "on live TV", "at a cosmic disco", "mid-sneeze",
        "while eating pizza", "during a spacewalk", "in a parallel universe", "at zero gravity", "under a full moon",
        "with an audience of aliens", "in a dream", "while texting", "during a meteor shower", "on a rollercoaster",
        "in hyperspace", "while juggling", "at a galactic barbecue", "during a wormhole trip", "in a spacesuit malfunction",
        "while singing karaoke", "at a supernova party", "during a time loop", "on a hoverboard",
        "while livestreaming to Mars", "with a rubber duck nearby", "during an alien improv show",
        "after forgetting the safe word", "while winning a space lottery", "in a cosmic traffic jam",
        "during a failed moon heist", "with a malfunctioning jetpack", "at an intergalactic bake-off",
        "while dodging space taxes", "midway through a zero-G nap", "with a sentient toaster watching"
    ];

    const action = actions[Math.floor(Math.random() * actions.length)];
    const quirk = quirks[Math.floor(Math.random() * quirks.length)];
    const extra = extras[Math.floor(Math.random() * extras.length)];
    
    const death = action.endsWith("by")
        ? `You’re ${action} a ${quirk} ${cosmicThing === "supermassive black hole" ? cosmicThing : cosmicThing} ${extra}.`
        : `You’re ${action} by a ${quirk} ${cosmicThing === "supermassive black hole" ? cosmicThing : cosmicThing} ${extra}.`;
    console.log("Death generated:", death);
    document.getElementById("result").innerHTML = death;

    const actionImages = {
        "vaporized": "https://i.imgur.com/X8rK5P9.gif",
        "crushed": "https://i.imgur.com/9pN2XvK.gif",
        "eaten": "https://i.imgur.com/YxR9m4T.gif",
        "probed": "https://i.imgur.com/0vTqK0L.gif",
        "flattened": "https://i.imgur.com/9nY8P2M.gif",
        "sucked into": "https://i.imgur.com/8mJ4R9Q.gif",
        "melted": "https://i.imgur.com/7rK5P9X.gif",
        "zapped": "https://i.imgur.com/3vN6R8L.gif",
        "obliterated": "https://i.imgur.com/5H7vL8Q.gif",
        "teleported inside": "https://i.imgur.com/5tR9K7P.gif",
        "smothered": "https://i.imgur.com/7nP8X4V.gif",
        "disintegrated": "https://i.imgur.com/6H7vL8Q.gif",
        "swallowed whole": "https://i.imgur.com/YxR9m4T.gif",
        "blasted": "https://i.imgur.com/5H7vL8Q.gif",
        "impaled": "https://i.imgur.com/8pN2XvK.gif",
        "frozen by": "https://i.imgur.com/4rM9K5Q.gif",
        "cooked by": "https://i.imgur.com/7rK5P9X.gif",
        "tangled in": "https://i.imgur.com/8mJ4R9Q.gif",
        "dissolved": "https://i.imgur.com/7rK5P9X.gif",
        "electrocuted": "https://i.imgur.com/3vN6R8L.gif",
        "launched into": "https://i.imgur.com/0nP5K2X.gif",
        "shredded": "https://i.imgur.com/8pN2XvK.gif",
        "bamboozled": "https://i.imgur.com/5nR8P7K.gif",
        "squashed": "https://i.imgur.com/9pN2XvK.gif",
        "hypnotized by": "https://i.imgur.com/7tN9K3P.gif",
        "chased down by": "https://i.imgur.com/6nY8P2M.gif",
        "engulfed": "https://i.imgur.com/8mJ4R9Q.gif",
        "spaghettified": "https://i.imgur.com/7rK5P9X.gif",
        "warped": "https://i.imgur.com/5tR9K7P.gif",
        "tickled to death": "https://i.imgur.com/3nP9K5X.gif",
        "photobombed into oblivion": "https://i.imgur.com/5nR8P7K.gif",
        "danced off": "https://i.imgur.com/6tN7K9P.gif",
        "abducted and yeeted": "https://i.imgur.com/0vTqK0L.gif",
        "karate-chopped": "https://i.imgur.com/7nP8X4V.gif",
        "moonwalked over": "https://i.imgur.com/5tR9K7P.gif",
        "overdosed on cosmic rays": "https://i.imgur.com/3vN6R8L.gif",
        "pranked into a wormhole": "https://i.imgur.com/8mJ4R9Q.gif",
        "slapped into orbit": "https://i.imgur.com/9nY8P2M.gif",
        "burped into stardust": "https://i.imgur.com/8pN2XvK.gif",
        "noodled": "https://i.imgur.com/7rK5P9X.gif",
        "high-fived to smithereens": "https://i.imgur.com/0nP5K2X.gif"
    };

    if (!deathImage) {
        console.error("Image element not found!");
        return;
    }

    const imgSrc = actionImages[action];
    const fallbackImage = "https://i.imgur.com/5nR8P7K.gif";

    console.log(`Action: "${action}", Attempting to load image: ${imgSrc}`);

    const img = new Image();
    img.src = imgSrc;

    img.onload = () => {
        deathImage.src = img.src;
        deathImage.style.display = "block";
        deathImage.style.width = "300px";
        deathImage.style.height = img.naturalHeight + "px"; // Set explicit height
        deathImage.style.border = "5px solid red"; // Debug border
        // Force reflow
        deathImage.style.display = "none";
        void deathImage.offsetWidth; // Trigger reflow
        deathImage.style.display = "block";
        console.log("Image should be visible now at:", deathImage.getBoundingClientRect());
        console.log(`Action: "${action}", Image loaded successfully: ${deathImage.src}`);
    };
    img.onerror = () => {
        console.error(`Action: "${action}", Image failed to load: ${imgSrc}`);
        deathImage.src = fallbackImage;
        deathImage.style.display = "block";
        deathImage.style.width = "300px";
        deathImage.style.height = "200px"; // Fallback height
        deathImage.style.border = "5px solid red";
        console.log("Image should be visible now at:", deathImage.getBoundingClientRect());
        console.log(`Action: "${action}", Fallback loaded: ${deathImage.src}`);
    };
}

// Cosmic background setup (unchanged)
function addCosmicStuff() {
    const body = document.body;
    const elements = [];

    const centerSafeZone = {
        x: 50,
        y: 50,
        width: 40,
        height: 60
    };

    function doElementsOverlap(el1, el2) {
        return (
            el1.left < el2.left + el2.width &&
            el1.left + el1.width > el2.left &&
            el1.top < el2.top + el2.height &&
            el1.top + el1.height > el2.top
        );
    }

    function overlapsCenter(el) {
        return (
            el.left < centerSafeZone.x + centerSafeZone.width / 2 &&
            el.left + el.width > centerSafeZone.x - centerSafeZone.width / 2 &&
            el.top < centerSafeZone.y + centerSafeZone.height / 2 &&
            el.top + el1.height > centerSafeZone.y - centerSafeZone.height / 2
        );
    }

    function getValidPosition(width, height) {
        let attempts = 0;
        const maxAttempts = 50;
        let position;
        do {
            position = {
                left: Math.random() * (100 - width),
                top: Math.random() * (100 - height),
                width: width,
                height: height
            };
            attempts++;
        } while (
            (elements.some(el => doElementsOverlap(position, el)) || overlapsCenter(position)) &&
            attempts < maxAttempts
        );
        return position;
    }

    for (let i = 0; i < 50; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        body.appendChild(star);
    }

    const planetStyles = [
        { bg: "radial-gradient(circle, #4A90E2, #1E3A8A)", size: 50 },
        { bg: "radial-gradient(circle, #D97706, #78350F)", size: 40 },
        { bg: "radial-gradient(circle, #8B5CF6, #4C1D95)", size: 55 },
        { bg: "radial-gradient(circle, #EF4444, #991B1B)", size: 45 },
        { bg: "radial-gradient(circle, #10B981, #064E3B)", size: 60 }
    ];
    planetStyles.forEach(p => {
        const planet = document.createElement("div");
        planet.className = "planet";
        planet.style.background = p.bg;
        const sizeInVw = p.size / window.innerWidth * 100;
        const sizeInVh = p.size / window.innerHeight * 100;
        const pos = getValidPosition(sizeInVw, sizeInVh);
        planet.style.width = `${p.size}px`;
        planet.style.height = `${p.size}px`;
        planet.style.left = `${pos.left}vw`;
        planet.style.top = `${pos.top}vh`;
        body.appendChild(planet);
        elements.push({ left: pos.left, top: pos.top, width: sizeInVw, height: sizeInVh });
    });

    const blackhole = document.createElement("div");
    blackhole.className = "blackhole";
    const bhSizeInVw = 200 / window.innerWidth * 100;
    const bhSizeInVh = 200 / window.innerHeight * 100;
    const bhPos = getValidPosition(bhSizeInVw, bhSizeInVh);
    blackhole.style.left = `${bhPos.left}vw`;
    blackhole.style.top = `${bhPos.top}vh`;
    body.appendChild(blackhole);
    elements.push({ left: bhPos.left, top: bhPos.top, width: bhSizeInVw, height: bhSizeInVh });
}

function addComet1() {
    const body = document.body;
    const comet = document.createElement("div");
    comet.className = "comet comet1";
    comet.style.left = `${Math.random() * 80 + 10}vw`;
    comet.style.top = `${Math.random() * 20}vh`;
    body.appendChild(comet);
    setTimeout(() => comet.remove(), 700);
    setTimeout(addComet1, Math.random() * 2000 + 3000);
}

function addComet2() {
    const body = document.body;
    const comet = document.createElement("div");
    comet.className = "comet comet2";
    comet.style.left = `${Math.random() * 80}vw`;
    comet.style.top = `${Math.random() * 40 + 40}vh`;
    body.appendChild(comet);
    setTimeout(() => comet.remove(), 600);
    setTimeout(addComet2, Math.random() * 2000 + 3000);
}

function addNewComet1() {
    const body = document.body;
    const comet = document.createElement("div");
    comet.className = "new-comet";
    comet.style.width = "10px";
    comet.style.height = "10px";
    comet.style.top = "0vh";
    comet.style.left = "100vw";
    body.appendChild(comet);
}

function addNewComet2() {
    const body = document.body;
    const comet = document.createElement("div");
    comet.className = "new-comet";
    comet.style.width = "15px";
    comet.style.height = "15px";
    comet.style.top = "50vh";
    comet.style.left = "100vw";
    comet.style.animationDelay = "2s";
    body.appendChild(comet);
}

window.onload = function() {
    addCosmicStuff();
    addComet1();
    addComet2();
    addNewComet1();
    addNewComet2();
};