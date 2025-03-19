function setupClippy() { 
  const clippyBubble = document.getElementById("clippy-bubble");
  const clippy = document.getElementById("clippy");
   
  const insults = [
    "Oh, you’re lost ? Maybe if you used a simpler framework instead of React, you wouldn’t be.",
    "You look like someone who enjoys debugging Webpack errors.",
    "Let me guess, you’re about to install another npm package ?",
    "Oh, you're surprised this works ? Yeah, not everything needs to be a component.",
    "Look at that! JavaScript works fine without a build tool. Shocking.",
    "A single HTML page ? No React dependencies ? Unthinkable!",
    "Wow, no npm install needed. What a concept!",
    "Need help ? Too bad, I was retired in 2007.",
    "I see you’re writing JavaScript. Have you considered a real language ?",
    "Oh, you’re using JavaScript ? Should I just throw some random undefined errors now ?",
    "You must be a backend dev… because this UI is hideous.",
    "Oh, you need help ? I bet you didn’t even read the error message.",
    "What’s the matter ? Forgot to close a tag again ?",
    "You’re not debugging, you’re just adding print statements and hoping for the best.",
    "Stack Overflow is down. Guess you're gonna have to actually code now.",
    "Wow, you really think AI is going to fix your spaghetti code ?",
    "You installed Lodash for this ? I hope your node_modules folder enjoys its new 500MB friend.",
    "Your site looks fine… unless I resize the window. Oops.",
    "JavaScript is just duct tape holding the web together. And you’re holding the duct tape.",
    "Frontend devs when JavaScript is disabled: 😭",
    "C++ devs when they forget a semicolon: 💀",
    "Oh, you wrote this in Python ? I bet it runs great… in three minutes.",
    "C++: where memory leaks are a feature, not a bug.",
    "You like C ? Then you must love writing for loops manually for everything.",
    "Wow, a C programmer ? Good luck explaining pointers to your friends.",
    "Hey, did you hear about the C++ dev who forgot to delete his pointer? Neither did his OS.",
    "Oh, you’re building an AI ? Let me guess, it’s just an OpenAI API wrapper ?",
    "You code in Python? Let me know when you’re done importing random libraries for everything.",
    "Oh, you love Python because it’s 'readable' ? Then why is your script 500 lines long ?",
    "What’s harder: configuring Kubernetes or explaining why you need Kubernetes ?",
    "Wait, you call yourself an AI engineer ? You just install pre-trained models and pretend you understand them.",
    "Your ‘cloud-based micro services’ are just 20 API calls to different Google services."
  ];

  const clippyBaseUrl = "https://storage.googleapis.com/theflyoccultist/clippy_gifs/clippy-white";

  // Function to get a random Clippy GIF URL
  function getRandomClippyGif() {
    const randomNumber = Math.floor(Math.random() * 23) + 1; // Random number between 1-23
    return `${clippyBaseUrl}-${randomNumber}.gif`;
  }

  // Click event to change Clippy's GIF and roast the user
  clippy.addEventListener("click", () => {
    const insult = insults[Math.floor(Math.random() * insults.length)];
    clippyBubble.innerText = insult;

    // Change Clippy's GIF
    clippy.src = getRandomClippyGif();
  });
}

document.addEventListener("DOMContentLoaded", setupClippy);


