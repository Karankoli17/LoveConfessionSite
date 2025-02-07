// Show Proposal Screen
function showProposal() {
  document.getElementById('initial-screen').classList.add('hidden');
  document.getElementById('proposal-screen').classList.remove('hidden');
}

// Handle Yes Button
function handleYes() {
  // Hide all screens except the Yes screen
  document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
  document.getElementById('yes-screen').classList.remove('hidden');

  // Trigger confetti effect
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { x: 0.5, y: 0.5 }
  });

  // Wait for the confetti celebration to end, then show the message
  setTimeout(() => {
    showPersonalizedMessage();
  }, 4000); // Adjust the time based on confetti duration
}

// Function to show personalized message with typing effect
function showPersonalizedMessage() {
  // Clear previous content
  document.getElementById('yes-screen').innerHTML = "";

  // Create a container for the message
  const messageContainer = document.createElement('div');
  messageContainer.style.fontFamily = "'Dancing Script', cursive"; // Romantic script font
  messageContainer.style.fontSize = "24px";
  messageContainer.style.color = "#d32f2f"; // Romantic red color
  messageContainer.style.textAlign = "center";
  messageContainer.style.width = "80%";
  messageContainer.style.margin = "auto";
  messageContainer.style.lineHeight = "1.6";
  messageContainer.style.padding = "20px";
  messageContainer.style.borderRadius = "10px";
  messageContainer.style.animation = "fadeIn 1s ease-in-out";

  document.getElementById('yes-screen').appendChild(messageContainer);

  // Message text (split into lines)
  const messageLines = [
    "From the very first moment I saw you,",
    "I knew you were someone truly special.",
    "And today, you've made my heart overflow",
    "with happiness by saying YES! ❤️",
    "This journey with you is the most beautiful chapter",
    "of my life, and I promise to stand by your side,",
    "love you endlessly, and cherish every moment we share.",
    "With you, every day feels magical,",
    "and I can't wait to create a lifetime",
    "of unforgettable memories together.",
    "This is just the beginning of our forever! 💑"
  ];

  // Function to type each line with a delay
  function typeMessage(index, charIndex = 0) {
    if (index < messageLines.length) {
      // If the line doesn't exist yet, create a new <p> element
      if (charIndex === 0) {
        const newLine = document.createElement("p");
        newLine.style.opacity = "1"; // Ensure it's visible
        newLine.style.animation = "fadeIn 0.5s forwards"; // Fade effect
        newLine.dataset.index = index; // Store the index for reference
        messageContainer.appendChild(newLine);
      }
  
      // Get the current line and append one letter at a time
      const currentLine = messageContainer.querySelector(`p[data-index="${index}"]`);
      currentLine.textContent += messageLines[index][charIndex];
  
      // Check if the whole line is typed
      if (charIndex < messageLines[index].length - 1) {
        setTimeout(() => typeMessage(index, charIndex + 1), 50); // Letter delay
      } else {
        setTimeout(() => typeMessage(index + 1, 0), 400); // Delay before the next line
      }
    }
  }

  // Start typing the message
  typeMessage(0);
}

// CSS Animation (Add this to your CSS file)
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);


// Handle No Button
function handleNo() {
  // Move to the No screen
  document.getElementById('proposal-screen').classList.add('hidden');
  document.getElementById('no-screen').classList.remove('hidden');
}

// Handle No Again Button
function handleNoAgain() {
  // Move to the Convince screen
  document.getElementById('no-screen').classList.add('hidden');
  document.getElementById('convince-screen').classList.remove('hidden');
}

// Move Runaway Button
function moveButton() {
  const button = document.getElementById('runaway-btn');
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();

  // Calculate new position
  let newX = Math.random() * (window.innerWidth - button.offsetWidth);
  let newY = Math.random() * (window.innerHeight - button.offsetHeight);

  // Ensure the button stays within the visible screen area
  newX = Math.max(0, Math.min(newX, window.innerWidth - button.offsetWidth));
  newY = Math.max(0, Math.min(newY, window.innerHeight - button.offsetHeight));

  // Ensure the button doesn't overlap with the container
  if (
    newX + button.offsetWidth > containerRect.left &&
    newX < containerRect.right &&
    newY + button.offsetHeight > containerRect.top &&
    newY < containerRect.bottom
  ) {
    newX = containerRect.right + 20; // Move it outside the container
  }

  button.style.position = 'fixed';
  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
}

// Create Flying Hearts
function createFlyingHearts() {
  const heartContainer = document.createElement('div');
  heartContainer.classList.add('heart-background');
  document.body.appendChild(heartContainer);

  setInterval(() => {
    const heart = document.createElement('span');
    heart.innerHTML = '💗';
    heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    heart.style.fontSize = `${Math.random() * 40 + 30}px`; // Bigger hearts (30px to 70px)
    heart.style.color = '#ff7eb9'; // Soft pastel pink color for hearts
    heart.style.position = 'absolute'; // Ensure hearts are positioned absolutely
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed (5s to 10s)
    heartContainer.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
      heart.remove();
    }, 10000); // 10 seconds
  }, 500); // Create a new heart every 500ms
}

// Start Flying Hearts Effect
createFlyingHearts();