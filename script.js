// JavaScript for Fish Pop-ups
function showFishPopUp() {
  const popupContainer = document.getElementById('popupContainer');
  
  // Random fish emojis to cycle through
  const fishEmojis = ["🐠", "🐟", "🐡", "🦈", "🐬", "🐳", "🐋", "🦀"];
  
  // Create a new popup
  const popupMessage = document.createElement('div');
  popupMessage.classList.add('popup-message');

  // Randomly select a fish emoji
  const randomFish = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];

  // Create span for the fish
  const fishSpan = document.createElement('span');
  fishSpan.textContent = randomFish;

  // Create a close button
  const closeButton = document.createElement('span');
  closeButton.textContent = 'x';
  closeButton.style.fontWeight = 'bold';
  closeButton.onclick = () => {
    popupContainer.removeChild(popupMessage);
  };

  // Add fishSpan and closeButton to popupMessage
  popupMessage.appendChild(fishSpan);
  popupMessage.appendChild(closeButton);

  // Add popupMessage to popupContainer
  popupContainer.appendChild(popupMessage);
}
