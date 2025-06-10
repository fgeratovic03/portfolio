document.addEventListener('DOMContentLoaded', () => {
 const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Pokaži dugme kada se skroluje više od 300px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // Klik na dugme vraća na vrh
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Početno stanje: sakrij dugme
  scrollTopBtn.style.display = "none";

 // Objekt sa prevodima
const translations = {
  sr: {
    navbar_brand: "Filip G.",
    nav_about: "O meni",
    nav_projects: "Projekti",
    nav_skills: "Veštine",
    nav_contact: "Kontakt",
    hero_title_prefix: 'Zdravo, ja sam',
    hero_title_name: 'Filip Geratovic',
    hero_subtitle: "Web developer | PHP | JavaScript | MySQL | Bootstrap",
    hero_cta_button: "Kontaktiraj me",
    about_title: "O meni",
    about_text: "Zovem se Filip Geratović i završavam studije Informacionih tehnologija. Tokom studija sam stekao solidna znanja u programiranju, web razvoju i radu sa bazama podataka. Pored toga što uživam u kodiranju, volim da učim nove tehnologije i radim na projektima koji me inspirišu. Verujem da je učenje kontinuirani proces i trudim se da svaki dan budem bolji u onome što radim. Cilj mi je da svoje znanje i strast pretočim u praktična rešenja koja olakšavaju život korisnicima i donose vrednost.",
    projects_title: "Projekti",
    project_1_title: "Inventar Aplikacija",
    project_1_desc: "PHP, MySQL, Bootstrap, PDF eksport",
    project_1_details: "Kompletna aplikacija za upravljanje proizvodima, fakturama i korisnicima. Login sistem, PDF generacija, admin panel.",
    project_2_title: "AI Generator Naslova",
    project_2_desc: "HTML, CSS, JavaScript, Bootstrap",
    project_2_details: "AI Generator Naslova je jednostavan online alat koji pomoću veštačke inteligencije brzo kreira kreativne i privlačne naslove za blogove, članke i marketinške sadržaje. Idealan je za sve koji žele da uštede vreme i dobiju inspiraciju za svoje tekstove.",
    project_3_title: "Task Manager",
    project_3_desc: "PHP, MySQL, Bootstrap",
    project_3_details: "Sistem za upravljanje zadacima sa loginom, statusima, pretragom i korisničkim rolama.",
    project_4_title: "Techup Landing Page",
    project_4_desc: "HTML, CSS, Bootstrap, JS",
    project_4_details: "TechUp je moderan i pregledan portfolio sajt koji prikazuje tehnološke projekte i veštine autora. Dizajniran je da jasno predstavi iskustvo i znanje u razvoju softvera, sa fokusom na jednostavnost i profesionalnost.",
    project_5_title: "Gera Elektro Reklamni sajt",
    project_5_desc: "HTML, CSS, JS, Bootstrap",
    project_5_details: "Gera Elektro je profesionalna prezentaciona web stranica električarske firme koja nudi usluge elektroinstalacija i održavanja. Sa jednostavnim i preglednim dizajnom, sajt jasno ističe ponudu usluga, kontakt informacije i stručnost tima.",
    project_6_title: "Online Pijaca",
    project_6_desc: "HTML, CSS, JS",
    project_6_details: "Online Pijaca je digitalna platforma za kupovinu i prodaju domaćih proizvoda, voća i povrća. Jednostavan i pregledan dizajn omogućava korisnicima brzo pronalaženje i naručivanje svežih namirnica direktno od proizvođača..",
    skills_title: "Veštine",
    contact_title: "Kontakt",
    contact_name_placeholder: "Ime",
    contact_email_placeholder: "Email",
    contact_message_placeholder: "Poruka",
    contact_send_button: "Pošalji",
    success: 'Poruka uspešno poslata!',
    error: 'Greška prilikom slanja. Pokušajte ponovo.',
    footer_text: "© 2025 Filip Geratović. Sva prava zadržana.",
    show_more: "Prikaži više",
    show_less: "Prikaži manje"
  },
  en: {
    navbar_brand: "Filip G.",
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_title_prefix: 'Hi, I\'m',
    hero_title_name: 'Filip Geratovic',
    hero_subtitle: "Web developer | PHP | JavaScript | MySQL | Bootstrap",
    hero_cta_button: "Contact me",
    about_title: "About Me",
    about_text: "My name is Filip Geratović and I am finishing my studies in Information Technology. Throughout my studies, I have gained solid knowledge in programming, web development, and working with databases. Besides enjoying coding, I love learning new technologies and working on inspiring projects. I believe learning is a continuous process and I strive to improve every day. My goal is to turn my knowledge and passion into practical solutions that ease users’ lives and bring value.",
    projects_title: "Projects",
    project_1_title: "Inventory Application",
    project_1_desc: "PHP, MySQL, Bootstrap, PDF export",
    project_1_details: "Complete application for managing products, invoices, and users. Login system, PDF generation, admin panel.",
    project_2_title: "AI Title Generator",
    project_2_desc: "HTML, CSS, JavaScript, Bootstrap",
    project_2_details: "AI Title Generator is a simple online tool that uses artificial intelligence to quickly create creative and attractive titles for blogs, articles, and marketing content. Ideal for anyone who wants to save time and get inspiration for their texts.",
    project_3_title: "Task Manager",
    project_3_desc: "PHP, MySQL, Bootstrap",
    project_3_details: "Task management system with login, statuses, search and user roles.",
    project_4_title: "Techup Landing Page",
    project_4_desc: "HTML, CSS, Bootstrap, JS",
    project_4_details: "TechUp is a modern and clean portfolio site showcasing the author’s technological projects and skills. Designed to clearly present experience and knowledge in software development, focusing on simplicity and professionalism.",
    project_5_title: "Gera Elektro Advertising Site",
    project_5_desc: "HTML, CSS, JS, Bootstrap",
    project_5_details: "Gera Elektro is a professional presentation website for an electrical company offering electrical installation and maintenance services. With a simple and clear design, the site highlights the service offer, contact information, and team expertise.",
    project_6_title: "Online Market",
    project_6_desc: "HTML, CSS, JS",
    project_6_details: "Online Market is a digital platform for buying and selling domestic products, fruits and vegetables. The simple and clear design allows users to quickly find and order fresh groceries directly from producers.",
    skills_title: "Skills",
    contact_title: "Contact",
    contact_name_placeholder: "Name",
    contact_email_placeholder: "Email",
    contact_message_placeholder: "Message",
    contact_send_button: "Send",
    success: 'Message sent successfully!',
    error: 'Error sending message. Please try again.',
    footer_text: "© 2025 Filip Geratović. All rights reserved.",
    show_more: "Show more",
    show_less: "Show less"
  }
};

// Funkcija za prevod cele stranice
function translatePage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if(el.dataset.html === "true"){
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Placeholder atributi
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Dugme za prikaz više / manje na projektima (dynamic)
  document.querySelectorAll('.toggle-details').forEach(btn => {
    if(lang === 'sr'){
      btn.textContent = translations.sr.show_more;
    } else {
      btn.textContent = translations.en.show_more;
    }
  });
}

// Inicijalni jezik sačuvaj u localStorage
let currentLang = localStorage.getItem('lang') || 'sr';
translatePage(currentLang);
document.getElementById('langBtn').textContent = currentLang.toUpperCase();

// Promena jezika preko dropdown menija
document.querySelectorAll('[data-lang]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const selectedLang = el.getAttribute('data-lang');
    currentLang = selectedLang;
    localStorage.setItem('lang', currentLang);
    translatePage(currentLang);

    // Update dugmeta u dropdown-u
    document.getElementById('langBtn').textContent = selectedLang.toUpperCase();
  });
});

// Toggle za "Prikaži više / manje"
document.querySelectorAll('.toggle-details').forEach(btn => {
  btn.addEventListener('click', () => {
    // Pronađi .card-body, pa unutar nje .project-details
    const cardBody = btn.closest('.card-body');
    const details = cardBody.querySelector('.project-details');

    if(details.classList.contains('d-none')){
      details.classList.remove('d-none');
      btn.textContent = (currentLang === 'sr') ? translations.sr.show_less : translations.en.show_less;
    } else {
      details.classList.add('d-none');
      btn.textContent = (currentLang === 'sr') ? translations.sr.show_more : translations.en.show_more;
    }
  });
});

 function showAlert(type) {
  const message = translations[currentLang][type];
  alertBox.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Zatvori"></button>
    </div>
  `;
}

  emailjs.init('vJ6lP2oyfW9XkJIg5'); // npr. ZduY9hd_asdf12345

  const contactForm = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // sprečava refresh

  emailjs.sendForm("service_portfolio","template_jeub7w4", contactForm)
    .then(() => {
      showAlert('success');  // samo tip
      contactForm.reset();
    }, (error) => {
      console.error('EmailJS greška:', error);
      showAlert('error');   // samo tip
    });
})

  // Dodaj klasu scrolled navbar-u kad se skroluje
  const navbar = document.querySelector('nav.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

});


  // Definiši niz slika za svaki projekat
  const projectImages = [
    ["slike/projekat1.1.png", "slike/projekat1.2.png", "slike/projekat1.3.png"],
    ["slike/projekat2.1.png", "slike/projekat2.2.png"],
    ["slike/projekat3.1.png", "slike/projekat3.2.png", "slike/projekat3.3.png"],
    ["slike/projekat4.1.png", "slike/projekat4.2.png", "slike/projekat4.3.png"],
    ["slike/projekat5.1.png", "slike/projekat5.2.png", "slike/projekat5.3.png"],
    ["slike/projekat6.1.png", "slike/projekat6.2.png", "slike/projekat6.3.png"]
  ];

  // Drži trenutni indeks slike za svaki projekat
  const currentIndexes = new Array(projectImages.length).fill(0);

  // Nađi sve dugmadi
  const prevButtons = document.querySelectorAll('.prev-btn');
  const nextButtons = document.querySelectorAll('.next-btn');

  // Dodaj event listener za prethodno dugme
  prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectIndex = parseInt(btn.dataset.projectIndex, 10);
      currentIndexes[projectIndex]--;
      if (currentIndexes[projectIndex] < 0) {
        currentIndexes[projectIndex] = projectImages[projectIndex].length - 1;
      }
      updateImage(projectIndex);
    });
  });

  // Dodaj event listener za sledeće dugme
  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectIndex = parseInt(btn.dataset.projectIndex, 10);
      currentIndexes[projectIndex]++;
      if (currentIndexes[projectIndex] >= projectImages[projectIndex].length) {
        currentIndexes[projectIndex] = 0;
      }
      updateImage(projectIndex);
    });
  });

  // Funkcija koja menja sliku u okviru projekta
  function updateImage(projectIndex) {
    const img = document.querySelector(`.project-img[data-project-index="${projectIndex}"]`);
    img.src = projectImages[projectIndex][currentIndexes[projectIndex]];
  }

  const toggleBtn = document.getElementById('theme-toggle');
  const icon = toggleBtn.querySelector('i');

  function setTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    icon.classList = isDark ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark);
  });

  // Load saved theme
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setTheme(true);
    }
  });




