function getDeath() {
    console.log("Button clicked - starting getDeath!");
    const result = document.getElementById("result");
    const deathImage = document.getElementById("deathImage");
    result.innerHTML = "Calculating your cosmic doom...";

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
    result.innerHTML = death;

    const actionImages = {
        "vaporized": "images/vaporized.gif",
        "crushed": "images/crushed.gif",
        "eaten": "images/eaten.gif",
        "probed": "images/probed.gif",
        "flattened": "images/flattened.gif",
        "sucked into": "images/sucked into.gif",
        "melted": "images/melted.gif",
        "zapped": "images/zapped.gif",
        "obliterated": "images/obliterated.gif",
        "teleported inside": "images/teleported inside.gif",
        "smothered": "images/smothered.gif",
        "disintegrated": "images/disintegrated.gif",
        "swallowed whole": "images/swallowed whole.gif",
        "blasted": "images/blasted.gif",
        "impaled": "images/impaled.gif",
        "frozen by": "images/frozen by.gif",
        "cooked by": "images/cooked by.gif",
        "tangled in": "images/tangled in.gif",
        "dissolved": "images/dissolved.gif",
        "electrocuted": "images/electrocuted.gif",
        "launched into": "images/launched into.gif",
        "shredded": "images/shredded.gif",
        "bamboozled": "images/bamboozled.gif",
        "squashed": "images/squashed.gif",
        "hypnotized by": "images/hypnotized by.gif",
        "chased down by": "images/chased down by.gif",
        "engulfed": "images/engulfed.gif",
        "spaghettified": "images/spaghettified.gif",
        "warped": "images/warped.gif",
        "tickled to death": "images/tickled to death.gif",
        "photobombed into oblivion": "images/photobombed into oblivion.gif",
        "danced off": "images/danced off.gif",
        "abducted and yeeted": "images/abducted and yeeted.gif",
        "karate-chopped": "images/karate-chopped.gif",
        "moonwalked over": "images/moonwalked over.gif",
        "overdosed on cosmic rays": "images/overdosed on cosmic rays.gif",
        "pranked into a wormhole": "images/pranked into a wormhole.gif",
        "slapped into orbit": "images/slapped into orbit.gif",
        "burped into stardust": "images/burped into stardust.gif",
        "noodled": "images/noodled.gif",
        "high-fived to smithereens": "images/high-fived to smithereens.gif"
    };

    const imgSrc = actionImages[action] || "images/probed.gif"; // Default to probed
    console.log(`Action: "${action}", Setting image source: ${imgSrc}`);

    deathImage.style.display = "none"; // Hide briefly
    deathImage.src = imgSrc;
    setTimeout(() => {
        deathImage.style.display = "block"; // Show after src swap
        console.log(`Action: "${action}", Image source set and displayed: ${deathImage.src}`);
    }, 50); // Small delay to ensure load
}