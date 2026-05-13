// =====================
// SMOOTH SCROLL
// =====================
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// =====================
// ACTIVE NAV HIGHLIGHT
// =====================
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', function() {
  var current = '';
  sections.forEach(function(sec) {
    if (window.scrollY >= sec.offsetTop - 140) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(function(a) {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });


// =====================
// JOURNAL ARTICLES
// =====================
var publications = [
  {
    title: 'Zhou, C. & S. Hamann. A revised multi-modal formal account for orthography-induced sound patterns.',
    journal: 'Linguistic Inquiry',
    year: 'In press',
    doi: '10.1017/S136672892510011x'
  },
  {
    title: 'Zhou, C. & J. Ver\u00EDssimo. L2 difficulties in the perception of Mandarin tones: Phonological universals or domain-general aptitude?',
    journal: 'Bilingualism: Language and Cognition',
    year: 2025,
    doi: '10.1017/S1366728925100114'
  },
  {
    title: 'Zhou, C. & M. J. Freitas. Modelling the developmental path in the acquisition of /l/-final irregular plurals by Portuguese children.',
    journal: 'Language Acquisition',
    year: 2024,
    doi: '10.1080/10489223.2024.2314029'
  },
  {
    title: 'Zhou, C. & S. Hamann. Modelling the acquisition of the Portuguese tap by L1-Mandarin learners: A BiPhon-HG account for individual differences, syllable-position effects and orthographic influences in L2 speech.',
    journal: 'Glossa: a journal of general linguistics',
    year: 2024,
    doi: '10.16995/glossa.9692'
  },
  {
    title: 'Zhou, C. & A. Rato. Syllable position effects in the perception of L2 Portuguese /l/ and /\u027E/ by L1-Mandarin learners.',
    journal: 'Second Language Research',
    year: 2023,
    doi: '10.1177/02676583221137713'
  },
  {
    title: 'Flores, C., C. Zhou & C. Eira. \u201CI no longer count in German\u201D. On dominance shift in returnee heritage speakers.',
    journal: 'Applied Psycholinguistics',
    year: 2022,
    doi: '10.1017/S0142716422000261'
  },
  {
    title: 'Zhou, C. & X. Li. LextPT: A reliable and efficient vocabulary size test for L2 Portuguese proficiency.',
    journal: 'Behavior Research Methods',
    year: 2021,
    doi: '10.3758/s13428-021-01731-1'
  },
  {
    title: 'Zhou, C. Dissertation Notice: L2 speech learning of European Portuguese /l/ and /\u027E/ by L1-Mandarin learners: Experimental evidence and theoretical modelling.',
    journal: 'Language Acquisition',
    year: 2021,
    doi: '10.1080/10489223.2021.1952591'
  },
  {
    title: 'Zhou, C., M. Cruz & S. Frota. O ritmo da interl\u00EDngua na produ\u00E7\u00E3o do Portugu\u00EAs Europeu por falantes nativos de Chin\u00EAs Mandarim.',
    journal: 'Revista da Associa\u00E7\u00E3o Portuguesa de Lingu\u00EDstica',
    year: 2017,
    doi: '10.26334/2183-9077/rapln3ano2017a22'
  }
];

// =====================
// RENDER JOURNAL ARTICLES
// =====================
var pubContainer = document.getElementById('pub-container');

if (pubContainer) {
  publications.forEach(function(pub) {
    var div = document.createElement('div');
    div.className = 'pub';
    div.innerHTML =
      '<span class="year">' + pub.year + '</span>' +
      '<div class="pub-body">' +
        '<span class="pub-title">' + pub.title + '</span>' +
        '<em class="journal">' + pub.journal + '</em>' +
        (pub.doi
          ? '<div class="meta"><a href="https://doi.org/' + pub.doi + '" target="_blank" rel="noopener">DOI \u2197</a></div>'
          : '') +
      '</div>';
    pubContainer.appendChild(div);
  });
}


// =====================
// BOOK CHAPTERS & PROCEEDINGS
// =====================
var proceedings = [
  {
    authors: 'Matzenauer, C., Freitas, M. J. & C. Zhou.',
    title: 'Theoretical models for phonological development.',
    book: 'Trends in the Acquisition of Portuguese Phonology',
    year: 2026,
    link: 'https://www.routledge.com/Trends-in-the-Acquisition-of-Portuguese-Phonology/Matzenauer-Lazzarotto-Volcao-Freitas/p/book/9781032846989',
    linkLabel: 'Link'
  },
  {
    authors: 'Alves, U., Castelo, A., Rato, A. & C. Zhou.',
    title: 'Portuguese L2 Phonology.',
    book: 'Trends in the Acquisition of Portuguese Phonology',
    year: 2026,
    link: 'https://www.routledge.com/Trends-in-the-Acquisition-of-Portuguese-Phonology/Matzenauer-Lazzarotto-Volcao-Freitas/p/book/9781032846989',
    linkLabel: 'Link'
  },
  {
    authors: 'Berti, L. & C. Zhou.',
    title: 'Rela\u00E7\u00E3o entre produ\u00E7\u00E3o e percep\u00E7\u00E3o das l\u00EDquidas no Portugu\u00EAs: Dados de aquisi\u00E7\u00E3o de L1 e L2.',
    book: 'Fonologia do Portugu\u00EAs e Interfaces: Fen\u00F4menos da Aquisi\u00E7\u00E3o e da Varia\u00E7\u00E3o',
    year: 2023,
    link: 'https://doi.org/10.4324/9781003294344-7',
    linkLabel: 'DOI'
  },
  {
    authors: 'Cao, Y., C. Zhou & G. Hristovsky.',
    title: 'Exploring the Phonetic Context Effects on the Production of Portuguese /\u027E/ by L1-Mandarin Learners.',
    book: 'Proceedings of 20th International Congress of Phonetic Sciences (ICPhS)',
    year: 2023,
    link: 'https://www.researchgate.net/publication/370230928',
    linkLabel: 'Preprint'
  },
  {
    authors: 'Zhou, C.',
    title: 'O contraste lateral-r\u00F3tico do portugu\u00EAs europeu e do chin\u00EAs mandarim: an\u00E1lise comparativa e estudos de PLE.',
    book: 'Lingu\u00EDstica Contrastiva: Estudos Portugu\u00EAs \u2013 Chin\u00EAs. Zhang, J. & Grosso, M. (eds.), University of Macau',
    year: 2023,
    link: 'https://www.researchgate.net/publication/368983650',
    linkLabel: 'Preprint'
  },
  {
    authors: 'Zhou, C. & A. Jesus.',
    title: 'Portuguese Has Two Underlying Rhotics: Evidence from Lisbon and Carioca Varieties.',
    book: 'Supplemental Proceedings of the 2021 Annual Meeting on Phonology',
    year: 2022,
    link: 'https://doi.org/10.3765/amp.v9i0.5167',
    linkLabel: 'DOI'
  },
  {
    authors: 'Zhou, C. & M. J. Freitas.',
    title: 'A ordem da aquisi\u00E7\u00E3o dos plurais com lateral final do PE: uma an\u00E1lise \u00E0 luz da Teoria da Otimidade.',
    book: 'Atas do I PhonOshuttle Opo \u2013 Ponte A\u00E9rea de Fonologia',
    year: 2022,
    link: 'https://ler.letras.up.pt/uploads/ficheiros/19217.pdf',
    linkLabel: 'Link'
  },
  {
    authors: 'Zhou, C., M. J. Freitas & A. Castelo.',
    title: 'On the Acquisition of European Portuguese Liquid Consonants by L1-Mandarin Learners.',
    book: 'Multilingualism and Third Language Acquisition: Learning and Teaching Trends. Pinto, J. & Alexandre, N. (eds.), Language Science Press',
    year: 2021,
    link: 'https://langsci-press.org/catalog/book/290',
    linkLabel: 'DOI'
  },
  {
    authors: 'Zhou, C. & S. Hamann.',
    title: 'Cross-linguistic interaction between phonological categorization and orthography predicts prosodic effects in the acquisition of Portuguese liquids by L1-Mandarin learners.',
    book: 'Proceedings of Interspeech 2020',
    year: 2020,
    link: 'http://doi.org/10.21437/interspeech.2020-2689',
    linkLabel: 'DOI'
  }
];

// =====================
// RENDER PROCEEDINGS
// =====================
var procContainer = document.getElementById('proc-container');

if (procContainer) {
  proceedings.forEach(function(pub) {
    var div = document.createElement('div');
    div.className = 'pub';
    div.innerHTML =
      '<span class="year">' + pub.year + '</span>' +
      '<div class="pub-body">' +
        '<span class="pub-authors">' + pub.authors + '</span>' +
        '<span class="pub-title">' + pub.title + '</span>' +
        '<em class="journal">' + pub.book + '</em>' +
        (pub.link
          ? '<div class="meta"><a href="' + pub.link + '" target="_blank" rel="noopener">' + pub.linkLabel + ' \u2197</a></div>'
          : '') +
      '</div>';
    procContainer.appendChild(div);
  });
}
