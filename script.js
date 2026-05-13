// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// active section highlight
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = sec.offsetTop;
    if (scrollY >= top - 120) {
      current = sec.getAttribute("id");
    }
  });

  links.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

const publications = [

{
  title: "Zhou, C. & J. Veríssimo. L2 difficulties in the perception of Mandarin tones: Phonological universals or domain-general aptitude?",
  journal: "Bilingualism: Language and Cognition",
  year: 2025,
  doi: "10.1017/S1366728925100114"
},

{
  title: "Modelling the acquisition of the Portuguese tap",
  journal: "Glossa",
  year: 2024,
  doi: "10.16995/glossa.9692"
}

];

const container = document.getElementById("pub-container");

publications.forEach(pub => {

  const div = document.createElement("div");

  div.className = "pub";

  div.innerHTML = `
    <span class="year">${pub.year}</span>

    <div>
      ${pub.title}<br>
      <i>${pub.journal}</i>

      <div class="meta">
        <a href="https://doi.org/${pub.doi}" target="_blank">
          DOI: ${pub.doi}
        </a>
      </div>
    </div>
  `;

  container.appendChild(div);

});
