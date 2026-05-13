// =====================
// SMOOTH SCROLL
// =====================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// =====================
// ACTIVE NAV HIGHLIGHT
// =====================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 140) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}, { passive: true });


// =====================
// PUBLICATIONS DATA
// =====================
const publications = [
  {
    title: "Zhou, C. & S. Hamann. A revised multi-modal formal account for orthography-induced sound patterns.",
    journal: "Linguistic Inquiry",
    year: "In press",
    doi: "10.1017/S136672892510011x"
  },
  {
    title: "Zhou, C. & J. Veríssimo. L2 difficulties in the perception of Mandarin tones: Phonological universals or domain-general aptitude?",
    journal: "Bilingualism: Language and Cognition",
    year: 2025,
    doi: "10.1017/S1366728925100114"
  },
  {
    title: "Zhou, C. & M. J. Freitas. Modelling the developmental path in the acquisition of /l/-final irregular plurals by Portuguese children.",
    journal: "Language Acquisition",
    year: 2024,
    doi: "10.1080/10489223.2024.2314029"
  },
  {
    title: "Zhou, C. & S. Hamann. Modelling the acquisition of the Portuguese tap by L1-Mandarin learners: A BiPhon-HG account for individual differences, syllable-position effects and orthographic influences in L2 speech.",
    journal: "Glossa: a journal of general linguistics",
    year: 2024,
    doi: "10.16995/glossa.9692"
  },
  {
    title: "Zhou, C. & A. Rato. Syllable position effects in the perception of L2 Portuguese /l/ and /ɾ/ by L1-Mandarin learners.",
    journal: "Second Language Research",
    year: 2023,
    doi: "10.1177/02676583221137713"
  },
  {
    title: "Flores, C., C. Zhou & C. Eira. "I no longer count in German". On dominance shift in returnee heritage speakers.",
    journal: "Applied Psycholinguistics",
    year: 2022,
    doi: "10.1017/S0142716422000261"
  },
  {
    title: "Zhou, C. & X. Li. LextPT: A reliable and efficient vocabulary size test for L2 Portuguese proficiency.",
    journal: "Behavior Research Methods",
    year: 2021,
    doi: "10.3758/s13428-021-01731-1"
  },
  {
    title: "Zhou, C. Dissertation Notice: L2 speech learning of European Portuguese /l/ and /ɾ/ by L1-Mandarin learners: Experimental evidence and theoretical modelling.",
    journal: "Language Acquisition",
    year: 2021,
    doi: "10.1080/10489223.2021.1952591"
  },
  {
    title: "Zhou, C., M. Cruz & S. Frota. O ritmo da interlíngua na produção do Português Europeu por falantes nativos de Chinês Mandarim.",
    journal: "Revista da Associação Portuguesa de Linguística",
    year: 2017,
    doi: "10.26334/2183-9077/rapln3ano2017a22"
  }
];


// =====================
// RENDER PUBLICATIONS
// =====================
const container = document.getElementById("pub-container");

if (container) {
  publications.forEach(pub => {
    const div = document.createElement("div");
    div.className = "pub";

    div.innerHTML = `
      <span class="year">${pub.year}</span>
      <div class="pub-body">
        <span class="pub-title">${pub.title}</span>
        <em class="journal">${pub.journal}</em>
        ${pub.doi ? `
          <div class="meta">
            <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener">DOI ↗</a>
          </div>` : ""}
      </div>
    `;

    container.appendChild(div);
  });
}
