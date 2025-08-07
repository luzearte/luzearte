const emailsPermitidos = [
  "contatocertoouerrado@gmail.com",
  "admin@luzearte.com",
  "equipe@luzearte.com"
];

window.handleCredentialResponse = function(response) {
  const token = response.credential;
  const payload = JSON.parse(atob(token.split('.')[1]));
  const email = payload.email;

  if (emailsPermitidos.includes(email)) {
    console.log("Acesso autorizado:", email);
    localStorage.setItem("loggedIn", "true");
    document.getElementById("authOverlay").style.display = "none";
  } else {
    console.log("Acesso negado:", email);
    alert("Você não tem permissão para acessar este site.");
  }
};



function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

// Sample data structure - you can replace this with your actual data
let allArts = [
    {
        image: "images/1.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://canva.com/edit-link-1"
    },
    {
        image: "images/2.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://canva.com/edit-link-2"
    },
    {
        image: "images/3.png",
        title: "Arte para Culto Dominical",
        editLink: "https://canva.com/edit-link-3"
    },
    {
        image: "images/4.png",
        title: "Template Versículo Bíblico",
        editLink: "https://canva.com/edit-link-4"
    },
    {
        image: "images/5.png",
        title: "Design para Eventos Gospel",
        editLink: "https://canva.com/edit-link-5"
    },
    {
        image: "images/6.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://canva.com/edit-link-6"
    },
    {
        image: "images/7.png",
        title: "Template para Pregação",
        editLink: "https://canva.com/edit-link-7"
    },
    {
        image: "images/8.png",
        title: "Design para Redes Sociais",
        editLink: "https://canva.com/edit-link-8"
    },
    {
        image: "images/9.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://canva.com/edit-link-9"
    },
    {
        image: "images/10.png",
        title: "Template Convite Gospel",
        editLink: "https://canva.com/edit-link-10"
    },
    {
        image: "images/11.png",
        title: "Design para Conferência",
        editLink: "https://canva.com/edit-link-11"
    },
    {
        image: "images/12.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/13.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://canva.com/edit-link-1"
    },
    {
        image: "images/14.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://canva.com/edit-link-2"
    },
    {
        image: "images/15.png",
        title: "Arte para Culto Dominical",
        editLink: "https://canva.com/edit-link-3"
    },
    {
        image: "images/16.png",
        title: "Template Versículo Bíblico",
        editLink: "https://canva.com/edit-link-4"
    },
    {
        image: "images/17.png",
        title: "Design para Eventos Gospel",
        editLink: "https://canva.com/edit-link-5"
    },
    {
        image: "images/18.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://canva.com/edit-link-6"
    },
    {
        image: "images/19.png",
        title: "Template para Pregação",
        editLink: "https://canva.com/edit-link-7"
    },
    {
        image: "images/20.png",
        title: "Design para Redes Sociais",
        editLink: "https://canva.com/edit-link-8"
    },
    {
        image: "images/21.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://canva.com/edit-link-9"
    },
    {
        image: "images/22.png",
        title: "Template Convite Gospel",
        editLink: "https://canva.com/edit-link-10"
    },
    {
        image: "images/23.png",
        title: "Design para Conferência",
        editLink: "https://canva.com/edit-link-11"
    },
    {
        image: "images/24.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/25.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/26.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://canva.com/edit-link-1"
    },
    {
        image: "images/27.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://canva.com/edit-link-2"
    },
    {
        image: "images/28.png",
        title: "Arte para Culto Dominical",
        editLink: "https://canva.com/edit-link-3"
    },
    {
        image: "images/29.png",
        title: "Template Versículo Bíblico",
        editLink: "https://canva.com/edit-link-4"
    },
    {
        image: "images/30.png",
        title: "Design para Eventos Gospel",
        editLink: "https://canva.com/edit-link-5"
    },
    {
        image: "images/31.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://canva.com/edit-link-6"
    },
    {
        image: "images/32.png",
        title: "Template para Pregação",
        editLink: "https://canva.com/edit-link-7"
    },
    {
        image: "images/33.png",
        title: "Design para Redes Sociais",
        editLink: "https://canva.com/edit-link-8"
    },
    {
        image: "images/34.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://canva.com/edit-link-9"
    },
    {
        image: "images/35.png",
        title: "Template Convite Gospel",
        editLink: "https://canva.com/edit-link-10"
    },
    {
        image: "images/36.png",
        title: "Design para Conferência",
        editLink: "https://canva.com/edit-link-11"
    },
    {
        image: "images/37.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/38.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://canva.com/edit-link-1"
    },
    {
        image: "images/39.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://canva.com/edit-link-2"
    },
    {
        image: "images/40.png",
        title: "Arte para Culto Dominical",
        editLink: "https://canva.com/edit-link-3"
    },
    {
        image: "images/41.png",
        title: "Template Versículo Bíblico",
        editLink: "https://canva.com/edit-link-4"
    },
    {
        image: "images/42.png",
        title: "Design para Eventos Gospel",
        editLink: "https://canva.com/edit-link-5"
    },
    {
        image: "images/43.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://canva.com/edit-link-6"
    },
    {
        image: "images/44.png",
        title: "Template para Pregação",
        editLink: "https://canva.com/edit-link-7"
    },
    {
        image: "images/45.png",
        title: "Design para Redes Sociais",
        editLink: "https://canva.com/edit-link-8"
    },
    {
        image: "images/46.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://canva.com/edit-link-9"
    },
    {
        image: "images/47.png",
        title: "Template Convite Gospel",
        editLink: "https://canva.com/edit-link-10"
    },
    {
        image: "images/48.png",
        title: "Design para Conferência",
        editLink: "https://canva.com/edit-link-11"
    },
    {
        image: "images/49.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/50.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/51.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://canva.com/edit-link-1"
    },
    {
        image: "images/52.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://canva.com/edit-link-2"
    },
    {
        image: "images/53.png",
        title: "Arte para Culto Dominical",
        editLink: "https://canva.com/edit-link-3"
    },
    {
        image: "images/54.png",
        title: "Template Versículo Bíblico",
        editLink: "https://canva.com/edit-link-4"
    },
    {
        image: "images/55.png",
        title: "Design para Eventos Gospel",
        editLink: "https://canva.com/edit-link-5"
    },
    {
        image: "images/56.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://canva.com/edit-link-6"
    },
    {
        image: "images/57.png",
        title: "Template para Pregação",
        editLink: "https://canva.com/edit-link-7"
    },
    {
        image: "images/58.png",
        title: "Design para Redes Sociais",
        editLink: "https://canva.com/edit-link-8"
    },
    {
        image: "images/59.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://canva.com/edit-link-9"
    },
    {
        image: "images/60.png",
        title: "Template Convite Gospel",
        editLink: "https://canva.com/edit-link-10"
    },
    {
        image: "images/61.png",
        title: "Design para Conferência",
        editLink: "https://canva.com/edit-link-11"
    },
    {
        image: "images/62.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/63.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://canva.com/edit-link-1"
    },
    {
        image: "images/64.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://canva.com/edit-link-2"
    },
    {
        image: "images/65.png",
        title: "Arte para Culto Dominical",
        editLink: "https://canva.com/edit-link-3"
    },
    {
        image: "images/66.png",
        title: "Template Versículo Bíblico",
        editLink: "https://canva.com/edit-link-4"
    },
    {
        image: "images/67.png",
        title: "Design para Eventos Gospel",
        editLink: "https://canva.com/edit-link-5"
    },
    {
        image: "images/68.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://canva.com/edit-link-6"
    },
    {
        image: "images/69.png",
        title: "Template para Pregação",
        editLink: "https://canva.com/edit-link-7"
    },
    {
        image: "images/70.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://canva.com/edit-link-1"
    },
    {
        image: "images/71.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://canva.com/edit-link-2"
    },
    {
        image: "images/72.png",
        title: "Arte para Culto Dominical",
        editLink: "https://canva.com/edit-link-3"
    },
    {
        image: "images/73.png",
        title: "Template Versículo Bíblico",
        editLink: "https://canva.com/edit-link-4"
    },
    {
        image: "images/74.png",
        title: "Design para Eventos Gospel",
        editLink: "https://canva.com/edit-link-5"
    },
    {
        image: "images/75.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://canva.com/edit-link-6"
    },
    {
        image: "images/76.png",
        title: "Template para Pregação",
        editLink: "https://canva.com/edit-link-7"
    },
    {
        image: "images/77.png",
        title: "Design para Redes Sociais",
        editLink: "https://canva.com/edit-link-8"
    },
    {
        image: "images/78.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://canva.com/edit-link-9"
    },
    {
        image: "images/79.png",
        title: "Template Convite Gospel",
        editLink: "https://canva.com/edit-link-10"
    },
    {
        image: "images/80.png",
        title: "Design para Conferência",
        editLink: "https://canva.com/edit-link-11"
    },
    {
        image: "images/81.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/82.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://canva.com/edit-link-1"
    },
    {
        image: "images/83.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://canva.com/edit-link-2"
    },
    {
        image: "images/84.png",
        title: "Arte para Culto Dominical",
        editLink: "https://canva.com/edit-link-3"
    },
    {
        image: "images/85.png",
        title: "Template Versículo Bíblico",
        editLink: "https://canva.com/edit-link-4"
    },
    {
        image: "images/86.png",
        title: "Design para Eventos Gospel",
        editLink: "https://canva.com/edit-link-5"
    },
    {
        image: "images/87.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://canva.com/edit-link-6"
    },
    {
        image: "images/88.png",
        title: "Template para Pregação",
        editLink: "https://canva.com/edit-link-7"
    },
    {
        image: "images/89.png",
        title: "Design para Redes Sociais",
        editLink: "https://canva.com/edit-link-8"
    },
    {
        image: "images/90.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://canva.com/edit-link-9"
    },
    {
        image: "images/91.png",
        title: "Template Convite Gospel",
        editLink: "https://canva.com/edit-link-10"
    },
    {
        image: "images/92.png",
        title: "Design para Conferência",
        editLink: "https://canva.com/edit-link-11"
    },
    {
        image: "images/93.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/94.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/95.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://canva.com/edit-link-1"
    },
    {
        image: "images/96.png",
        title: "Arte para Culto Dominical",
        editLink: "https://canva.com/edit-link-3"
    },
    {
        image: "images/97.png",
        title: "Template Versículo Bíblico",
        editLink: "https://canva.com/edit-link-4"
    },
    {
        image: "images/98.png",
        title: "Design para Eventos Gospel",
        editLink: "https://canva.com/edit-link-5"
    },
    {
        image: "images/99.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://canva.com/edit-link-6"
    },
    {
        image: "images/100.png",
        title: "Template para Pregação",
        editLink: "https://canva.com/edit-link-7"
    },
    {
        image: "images/101.png",
        title: "Design para Redes Sociais",
        editLink: "https://canva.com/edit-link-8"
    },
    {
        image: "images/102.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://canva.com/edit-link-9"
    },
    {
        image: "images/103.png",
        title: "Template Convite Gospel",
        editLink: "https://canva.com/edit-link-10"
    },
    {
        image: "images/104.png",
        title: "Design para Conferência",
        editLink: "https://canva.com/edit-link-11"
    },
    {
        image: "images/105.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/106.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://canva.com/edit-link-1"
    },
    {
        image: "images/107.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://canva.com/edit-link-2"
    },
    {
        image: "images/108.png",
        title: "Arte para Culto Dominical",
        editLink: "https://canva.com/edit-link-3"
    },
    {
        image: "images/109.png",
        title: "Template Versículo Bíblico",
        editLink: "https://canva.com/edit-link-4"
    },
    {
        image: "images/110.png",
        title: "Design para Eventos Gospel",
        editLink: "https://canva.com/edit-link-5"
    },
    {
        image: "images/111.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://canva.com/edit-link-6"
    },
    {
        image: "images/112.png",
        title: "Template para Pregação",
        editLink: "https://canva.com/edit-link-7"
    },
    {
        image: "images/113.png",
        title: "Design para Redes Sociais",
        editLink: "https://canva.com/edit-link-8"
    },
    {
        image: "images/114.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://canva.com/edit-link-9"
    },
    {
        image: "images/115.png",
        title: "Template Convite Gospel",
        editLink: "https://canva.com/edit-link-10"
    },
    {
        image: "images/116.png",
        title: "Design para Conferência",
        editLink: "https://canva.com/edit-link-11"
    },
    {
        image: "images/117.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/118.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    },
    {
        image: "images/119.png",
        title: "Arte Devocional Diário",
        editLink: "https://canva.com/edit-link-12"
    }

];

let currentIndex = 0;
const artsPerLoad = 9;

// Function to add arts to the data array
function addArt(imageUrl, title, editLink) {
    allArts.push({
        image: imageUrl,
        title: title,
        editLink: editLink
    });
}

// Function to create art card HTML
function createArtCard(art) {
    return `
                <div class="art-card">
                    <img src="${art.image}" alt="${art.title}" class="art-image" 
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBMMTMwIDEzMEg3MEwxMDAgNzBaIiBmaWxsPSIjOUI5QkEwIi8+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjgwIiByPSI4IiBmaWxsPSIjOUI5QkEwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5QkEwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPkltYWdlbSBuw6NvIGVuY29udHJhZGE8L3RleHQ+Cjwvc3ZnPg=='; this.alt='Imagem não encontrada';">
                    <div class="art-info">
                        <h3 class="art-title">${art.title}</h3>
                        <a href="${art.editLink}" target="_blank" class="edit-button">
                            Editar no Canva
                        </a>
                    </div>
                </div>
            `;
}

// Function to load more arts
function loadMoreArts() {
    const loading = document.getElementById('loading');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const galleryGrid = document.getElementById('galleryGrid');

    // Show loading animation
    loading.classList.add('active');
    loadMoreBtn.disabled = true;

    // Simulate loading delay
    setTimeout(() => {
        const endIndex = Math.min(currentIndex + artsPerLoad, allArts.length);

        for (let i = currentIndex; i < endIndex; i++) {
            const artCard = document.createElement('div');
            artCard.innerHTML = createArtCard(allArts[i]);
            galleryGrid.appendChild(artCard.firstElementChild);
        }

        currentIndex = endIndex;

        // Hide loading animation
        loading.classList.remove('active');
        loadMoreBtn.disabled = false;

        // Hide load more button if all arts are loaded
        if (currentIndex >= allArts.length) {
            loadMoreBtn.style.display = 'none';
        }

        // Update button text
        const remaining = allArts.length - currentIndex;
        if (remaining > 0) {
            loadMoreBtn.textContent = `Carregar Mais Artes (${remaining} restantes)`;
        }
    }, 1000);
}

// Function to initialize the gallery
function initializeGallery() {
    if (allArts.length === 0) {
        // Show message when no arts are available
        document.getElementById('galleryGrid').innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #6B7280;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Galeria em Preparação</h3>
                        <p>As artes serão carregadas em breve. Aguarde!</p>
                    </div>
                `;
        document.getElementById('loadMoreBtn').style.display = 'none';
        return;
    }

    // Load first batch of arts
    loadMoreArts();
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    const scrollTop = document.getElementById('scrollTop');
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', initializeGallery);

// Example function to add arts (you can call this to add your arts)
function loadArtsData() {
    // Example of how to add arts - replace with your actual data
    // addArt("https://example.com/image1.jpg", "Arte Gospel 1", "https://canva.com/edit1");
    // addArt("https://example.com/image2.jpg", "Arte Gospel 2", "https://canva.com/edit2");

    // After adding all arts, reinitialize the gallery
    currentIndex = 0;
    document.getElementById('galleryGrid').innerHTML = '';
    document.getElementById('loadMoreBtn').style.display = 'block';
    initializeGallery();
}


