window.onload = function() {
    alert("Welcome to my Fun Portfolio!");
}

const toggleButton = document.createElement('button');
toggleButton.innerText = "Toggle Dark Mode";
document.body.insertBefore(toggleButton, document.body.firstChild);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


const darkModeStyles = document.createElement('style');
darkModeStyles.innerHTML = `
    .dark-mode {
      background-color: #333;
      color: white;
    }
    .dark-mode header, .dark-mode footer {
      background-color: #555;
    }
    .dark-mode #about-me, .dark-mode #projects, .dark-mode #contact {
      background-color: #444;
    }
  `;
document.head.appendChild(darkModeStyles);