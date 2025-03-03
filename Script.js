async function getDeath() {
    console.log("Button clicked - starting getDeath!");
    document.getElementById("result").innerHTML = "Calculating your cosmic doom...";
    const container = document.getElementById("deathImageContainer");
    container.innerHTML = ""; // Clear previous image

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

    if (!container) {
        console.error("Image container not found!");
        return;
    }

    const imgSrc = actionImages[action];
    const fallbackImage = "https://i.imgur.com/5nR8P7K.gif";

    console.log(`Action: "${action}", Attempting to load image: ${imgSrc}`);

    const img = new Image();
    img.src = imgSrc;
    img.className = "death-image";
    img.alt = "Cosmic Death Scene";

    img.onload = () => {
        container.appendChild(img);
        console.log(`Action: "${action}", Image loaded successfully: ${img.src}`);
        console.log("Image dimensions:", img.width, img.height);
    };
    img.onerror = () => {
        console.error(`Action: "${action}", Image failed to load: ${imgSrc}`);
        img.src = fallbackImage;
        container.appendChild(img);
        console.log(`Action: "${action}", Fallback loaded: ${img.src}`);
    };
}

// No cosmic background for now—add back once images work
window.onload = function() {};