const projects = [
  {
    "folder": "Aarya_TOSSBIN",
    "student": "Aarya",
    "project": "TOSSBIN",
    "thumb": "Aarya.png"
  },
  {
    "folder": "Arnav",
    "student": "Arnav",
    "project": "Untitled Project",
    "thumb": "Arnav.png"
  },
  {
    "folder": "Deepika_Pest_Control",
    "student": "Deepika",
    "project": "Pest Control",
    "thumb": "Deepika.png"
  },
  {
    "folder": "Dhruvi_Assignment_2",
    "student": "Dhruvi",
    "project": "Assignment 2",
    "thumb": "Dhruvi.png"
  },
  {
    "folder": "Harshdeep_YE_hai_JURRY_WALLA_copy",
    "student": "Harshdeep",
    "project": "YE hai JURRY WALLA copy",
    "thumb": "Harshdeep.png"
  },
  {
    "folder": "Ishan",
    "student": "Ishan",
    "project": "Untitled Project",
    "thumb": "Ishan.png"
  },
  {
    "folder": "Jiya_my_name_fliesss",
    "student": "Jiya",
    "project": "my name fliesss",
    "thumb": "Jiya.png"
  },
  {
    "folder": "Kamlesh_guitar_1_final_ver1",
    "student": "Kamlesh",
    "project": "guitar 1 final ver1",
    "thumb": "Kamlesh.png"
  },
  {
    "folder": "Pushti_DINOEATS",
    "student": "Pushti",
    "project": "DINOEATS",
    "thumb": "Pushti_DinoEats.png"
  },
  {
    "folder": "Sharvani_assignment2.v7",
    "student": "Sharvani",
    "project": "assignment2.v7",
    "thumb": "Sharvani.png"
  },
  {
    "folder": "Sharvil_i_like_ball_final_copy",
    "student": "Sharvil",
    "project": "i like ball final copy",
    "thumb": "Sharvil.png"
  },
  {
    "folder": "Siah_FINAL_GAME_NEON_JUICE_CENTER",
    "student": "Siah",
    "project": "FINAL GAME NEON JUICE CENTER",
    "thumb": "Siah.png"
  }
];

const grid = document.querySelector("#showcaseGrid");

function cleanTitle(text) {
  return text
    .replaceAll("_", " ")
    .replace(/\s+/g, " ")
    .trim();
}

projects.forEach((item, index) => {
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
    </div>
  `;

  grid.appendChild(card);
});
