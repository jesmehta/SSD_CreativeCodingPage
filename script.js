const projects = [
  {
    "order": 3,
    "folder": "Aarya_TOSSBIN",
    "student": "Aarya",
    "project": "TOSSBIN",
    "thumb": "Aarya.png",
    "instructions": "Toss trash into the bin"
  },
  {
    "order": 2,
    "folder": "Dhruvi_Assignment_2",
    "student": "Dhruvi",
    "project": "Assignment 2",
    "thumb": "Dhruvi.png",
    "instructions": "Explore the interactive sketch"
  },
  {
    "order": 2,
    "folder": "Arnav",
    "student": "Arnav",
    "project": "Untitled Project",
    "thumb": "Arnav.png",
    "instructions": "Explore the interactive sketch"
  },
  {
    "order": 1,
    "folder": "Deepika_Pest_Control",
    "student": "Deepika",
    "project": "Pest Control",
    "thumb": "Deepika.png",
    "instructions": "Click pests to catch them"
  },
  {
    "order": 5,
    "folder": "Harshdeep_YE_hai_JURRY_WALLA_copy",
    "student": "Harshdeep",
    "project": "YE hai JURRY WALLA copy",
    "thumb": "Harshdeep.png",
    "instructions": "Let the camera judge you"
  },
  {
    "order": 6,
    "folder": "Ishan",
    "student": "Ishan",
    "project": "Untitled Project",
    "thumb": "Ishan.png",
    "instructions": "Explore the interactive sketch"
  },
  {
    "order": 7,
    "folder": "Jiya_my_name_fliesss",
    "student": "Jiya",
    "project": "my name fliesss",
    "thumb": "Jiya.png",
    "instructions": "Make the letters fly"
  },
  {
    "order": 8,
    "folder": "Kamlesh_guitar_1_final_ver1",
    "student": "Kamlesh",
    "project": "guitar 1 final ver1",
    "thumb": "Kamlesh.png",
    "instructions": "Use mouse to strum guitar"
  },
  {
    "order": 9,
    "folder": "Pushti_DINOEATS",
    "student": "Pushti",
    "project": "DINOEATS",
    "thumb": "Pushti_DinoEats.png",
    "instructions": "Feed the dinosaur to survive"
  },
  {
    "order": 10,
    "folder": "Sharvani_assignment2.v7",
    "student": "Sharvani",
    "project": "assignment2.v7",
    "thumb": "Sharvani.png",
    "instructions": "Explore the interactive sketch"
  },
  {
    "order": 11,
    "folder": "Sharvil_i_like_ball_final_copy",
    "student": "Sharvil",
    "project": "i like ball final copy",
    "thumb": "Sharvil.png",
    "instructions": "Move and bounce the ball"
  },
  {
    "order": 12,
    "folder": "Siah_FINAL_GAME_NEON_JUICE_CENTER",
    "student": "Siah",
    "project": "FINAL GAME NEON JUICE CENTER",
    "thumb": "Siah.png",
    "instructions": "Serve neon juice fast"
  }
];

const grid = document.querySelector("#showcaseGrid");

function cleanTitle(text) {
  return text
    .replaceAll("_", " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Edit the order numbers above to rearrange the landing-page cards.
// Lower numbers appear first. Matching order numbers keep the list's original order.
const orderedProjects = [...projects].sort((a, b) => a.order - b.order);

orderedProjects.forEach((item, index) => {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = `./${item.folder}/`;
  card.style.setProperty("--tilt", `${[-1.5, 1.2, -0.8, 1.8, -1.1, 0.9][index % 6]}deg`);

  card.innerHTML = `
    <div class="thumb">
      <img src="./${item.thumb}" alt="${item.project} by ${item.student}" loading="lazy">
    </div>
    <div class="card-text">
      <h2 class="project-name">${cleanTitle(item.project)}</h2>
      <p class="student-name">${item.student}</p>
      <p class="project-instructions">${item.instructions || "Open the interactive sketch"}</p>
    </div>
  `;

  grid.appendChild(card);
});
