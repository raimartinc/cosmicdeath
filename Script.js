async function getDeath() {
    console.log("Button clicked - starting getDeath!");
    document.getElementById("result").innerHTML = "Calculating your cosmic doom...";

    // Hide all images
    const images = document.querySelectorAll(".death-image");
    images.forEach(img => img.style.display = "none");

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

    // Show the corresponding image
    const imgId = `img-${action.replace(/\s+/g, "-").toLowerCase()}`;
    const deathImage = document.getElementById(imgId);
    if (deathImage) {
        deathImage.style.display = "block";
        console.log(`Action: "${action}", Image displayed: ${deathImage.src}`);
    } else {
        console.error(`Image not found for action: "${action}"`);
    }
}

// No cosmic background yet—add later
window.onload = function() {};