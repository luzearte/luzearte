const emailsPermitidos = [
  "contatocertoouerrado@gmail.com",
  "alinerocha10203040@gmail.com",
  "equipe@luzearte.com"
];

window.handleCredentialResponse = function(response) {
  const token = response.credential;
  const payload = JSON.parse(atob(token.split('.')[1]));
  const email = payload.email;

/*  if (emailsPermitidos.includes(email)) {
    console.log("Acesso autorizado:", email);
    localStorage.setItem("loggedIn", "true");
    document.getElementById("authOverlay").style.display = "none";
  } else {
    console.log("Acesso negado:", email);
    alert("Você não tem permissão para acessar este site.");
  }*/
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
        image: "images/1.webp", // Caminho relativo para sua imagem
        title: "Arte Gospel - Congresso de Mulheres",
    },
    {
        image: "images/2.webp",
        title: "Arte Gospel - Culto de Oração",
    },
    {
        image: "images/3.webp",
        title: "Arte Gospel - Culto Jovem",
    },
    {
        image: "images/4.webp",
        title: "Arte Gospel - Culto da Família",
    },
    {
        image: "images/5.webp",
        title: "Arte Gospel - Culto Domingo",
    },
    {
        image: "images/6.webp",
        title: "Arte Gospel - Culto Segunda",
    },
    {
        image: "images/7.webp",
        title: "Arte Gospel - Batismo",
    },
    {
        image: "images/8.webp",
        title: "Arte Gospel - Conferência Jovem",
    },
    {
        image: "images/9.webp",
        title: "Arte Gospel - Culto da Vitória",
    },
    {
        image: "images/10.webp",
        title: "Arte Gospel - Culto de Ensino",
    },
    {
        image: "images/11.webp",
        title: "Arte Gospel - Culto FÉ",
    },
    {
        image: "images/12.webp",
        title: "Arte Gospel - Culto Domingo",
    },
    {
        image: "images/13.webp", // Caminho relativo para sua imagem
        title: "Arte Gospel - Culto Domingo",
    },
    {
        image: "images/14.webp",
        title: "Arte Gospel - Culto Jejum e Oração",
    },
    {
        image: "images/15.webp",
        title: "Arte Gospel - Culto de Santa Ceia",
    },
    {
        image: "images/16.webp",
        title: "Arte Gospel - Culto de Santa Ceia",
    },
    {
        image: "images/17.webp",
        title: "Arte Gospel - Culto Domingo",
    },
    {
        image: "images/18.webp",
        title: "Arte Gospel - Culto Jovem",
    },
    {
        image: "images/19.webp",
        title: "Arte Gospel - Culto de Mulheres",
    },
    {
        image: "images/20.webp",
        title: "Arte Gospel - Culto de Missões",
    },
    {
        image: "images/21.webp",
        title: "Arte Gospel - Culto de Ensino",
    },
    {
        image: "images/22.webp",
        title: "Arte Gospel - Aniversário do Pastor",
    },
    {
        image: "images/23.webp",
        title: "Arte Gospel - Culto de Oração",
    },
    {
        image: "images/24.webp",
        title: "Arte Gospel - Culto de Mulheres",
    },
    {
        image: "images/25.webp",
        title: "Arte Gospel - EBD",
    },
    {
        image: "images/26.webp", // Caminho relativo para sua imagem
        title: "Arte Gospel - Culto da Família",
    },
    {
        image: "images/27.webp",
        title: "Arte Gospel - Culto de Celebração",
    },
    {
        image: "images/28.webp",
        title: "Arte Gospel - Culto Domingo",
    },
    {
        image: "images/29.webp",
        title: "Arte Gospel - Culto Domingo",
    },
    {
        image: "images/30.webp",
        title: "Arte Gospel - Culto da Palavra",
    },
    {
        image: "images/31.webp",
        title: "Arte Gospel - Culto de Campanha",
    },
    {
        image: "images/32.webp",
        title: "Arte Gospel - Culto de Ensino",
    },
    {
        image: "images/33.webp",
        title: "Arte Gospel - Culto das Mulheres",
    },
    {
        image: "images/34.webp",
        title: "Arte Gospel - Agenda Ministerial",
    },
    {
        image: "images/35.webp",
        title: "Arte Gospel - Agenda Ministerial",
    },
    {
        image: "images/36.webp",
        title: "Arte Gospel - Culto Domingo",
    },
    {
        image: "images/37.webp",
        title: "Arte Gospel - Culto de Mulheres",
    },
    {
        image: "images/38.webp", // Caminho relativo para sua imagem
        title: "Arte Gospel - Culto de Mulheres",
    },
    {
        image: "images/39.webp",
        title: "Arte Gospel - Culto de Santa Ceia",
    },
    {
        image: "images/40.webp",
        title: "Arte Gospel - Culto de Domingo",
    },
    {
        image: "images/41.webp",
        title: "Arte Gospel - EBD",
    },
    {
        image: "images/42.webp",
        title: "Arte Gospel - Conferência",
    },
    {
        image: "images/43.webp",
        title: "Arte Gospel - Culto de Jovem",
    },
    {
        image: "images/44.webp",
        title: "Arte Gospel - Agenda Ministerial",
    },
    {
        image: "images/45.webp",
        title: "Arte Gospel - Culto de Adolescente",
    },
    {
        image: "images/46.webp",
        title: "Arte Gospel - Culto de Santa Ceia",
    },
    {
        image: "images/47.webp",
        title: "Arte Gospel - Agenda Ministerial",
    },
    {
        image: "images/48.webp",
        title: "Arte Gospel - Agenda Ministerial",
    },
    {
        image: "images/49.webp",
        title: "Arte Gospel - Culto da Família",
    },
    {
        image: "images/50.webp",
        title: "Arte Gospel - Batismo",
    },
    {
        image: "images/51.webp", // Caminho relativo para sua imagem
        title: "Arte Gospel - Culto de Santa Ceia",
    },
    {
        image: "images/52.webp",
        title: "Arte Gospel - Festividade",
    },
    {
        image: "images/53.webp",
        title: "Arte Gospel - Culto de Jovens",
    },
    {
        image: "images/54.webp",
        title: "Arte Gospel - Culto de Ensino da Palavra",
    },
    {
        image: "images/55.webp",
        title: "Arte Gospel - Culto de Gratidão",
    },
    {
        image: "images/56.webp",
        title: "Arte Gospel - Culto de Domingo",
    },
    {
        image: "images/57.webp",
        title: "Arte Gospel - Culto de Jovem",
    },
    {
        image: "images/58.webp",
        title: "Arte Gospel - Culto de Domingo",
    },
    {
        image: "images/59.webp",
        title: "Arte Gospel - Culto de Domingo",
    },
    {
        image: "images/60.webp",
        title: "Arte Gospel - Encontro de Casais",
    },
    {
        image: "images/61.webp",
        title: "Arte Gospel - Culto de Mulheres",
    },
    {
        image: "images/62.webp",
        title: "Arte Gospel - Culto de Campanha",
    },
    {
        image: "images/63.webp", // Caminho relativo para sua imagem
        title: "Arte Gospel - Culto de Campanha",
    },
    {
        image: "images/64.webp",
        title: "Arte Gospel - Culto de Campanha",
    },
    {
        image: "images/65.webp",
        title: "Arte Gospel - Culto Final de Ano",
    },
    {
        image: "images/66.webp",
        title: "Arte Gospel - Culto de Ação de Graças",
    },
    {
        image: "images/67.webp",
        title: "Arte Gospel - Culto da Família",
    },
    {
        image: "images/68.webp",
        title: "Arte Gospel - Agenda Ministerial",
    },
    {
        image: "images/69.webp",
        title: "Arte Gospel - Culto de Jovem",
    },
    {
        image: "images/70.webp", // Caminho relativo para sua imagem
        title: "Arte Gospel - Culto de Ensino",
    },
    {
        image: "images/71.webp",
        title: "Arte Gospel - Culto de Celebração",
    },
    {
        image: "images/72.webp",
        title: "Arte Gospel - Culto de Domingo",
    },
    {
        image: "images/73.webp",
        title: "Arte Gospel - Culto de Jovem",
    },
    {
        image: "images/74.webp",
        title: "Arte Gospel - Culto de Ensino",
    },
    {
        image: "images/75.webp",
        title: "Arte Gospel - Festividade",
    },
    {
        image: "images/76.webp",
        title: "Arte Gospel - Culto de Santa Ceia",
    },
    {
        image: "images/77.webp",
        title: "Arte Gospel - Agenda Ministerial",
    },
    {
        image: "images/78.webp",
        title: "Arte Gospel - Culto de Domingo",
    },
    {
        image: "images/79.webp",
        title: "Arte Gospel - Culto de Domingo",
    },
    {
        image: "images/80.webp",
        title: "Arte Gospel - Culto da Vitória",
    },
    {
        image: "images/81.webp",
        title: "Arte Gospel - Culto de Jovem",
    },
    {
        image: "images/82.webp", // Caminho relativo para sua imagem
        title: "Arte Gospel - Culto de Mulheres",
    },
    {
        image: "images/83.webp",
        title: "Arte Gospel - Batismo",
    },
    {
        image: "images/84.webp",
        title: "Arte Gospel - Culto de Jovem",
    },
    {
        image: "images/85.webp",
        title: "Arte Gospel - Culto de Oração",
    },
    {
        image: "images/86.webp",
        title: "Arte Gospel - Culto de Família",
    },
    {
        image: "images/87.webp",
        title: "Arte Gospel - Culto de Mulheres",
    },
    {
        image: "images/88.webp",
        title: "Arte Gospel - Culto de Santa Ceia",
    },
    {
        image: "images/89.webp",
        title: "Arte Gospel - Agenda Ministerial",
    },
    {
        image: "images/90.webp",
        title: "Arte Gospel - Culto de Adolescentes",
    },
    {
        image: "images/91.webp",
        title: "Arte Gospel - Culto de Santa Ceia",
    },
    {
        image: "images/92.webp",
        title: "Arte Gospel - Agenda Ministerial",
    },
    {
        image: "images/93.webp", // Caminho relativo para sua imagem
        title: "Arte Gospel - Culto de Campanha",
    },
    {
        image: "images/94.webp",
        title: "Arte Gospel - Culto de Domingo",
    },
    {
        image: "images/95.webp",
        title: "Arte Gospel - Festividade",
    },
    {
        image: "images/96.webp",
        title: "Arte Gospel - Culto de Campanha",
    },
    {
        image: "images/97.webp",
        title: "Arte Gospel - Culto de Campanha",
    },
    {
        image: "images/98.webp",
        title: "Arte Gospel - Festividade",
    },
    {
        image: "images/99.webp",
        title: "Arte Gospel - Agenda Ministerial",
    },
    {
        image: "images/100.webp",
        title: "Arte Gospel - Culto de Campanha",
    },
    {
        image: "images/101.webp",
        title: "Arte Gospel - Conferência",
    },
    {
        image: "images/102.webp",
        title: "Arte Gospel - Vigília",
    },
    {
        image: "images/103.webp",
        title: "Arte Gospel - Culto de Missões",
    },
    {
        image: "images/104.webp",
        title: "Arte Gospel - Culto de Campanha",
    },
    {
        image: "images/105.webp",
        title: "Arte Gospel - Culto de Missões",
    },
    {
        image: "images/106.webp",
        title: "Arte Gospel - Culto de Santa Ceia",
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
                    <img src="${art.image}" alt="${art.title}" class="art-image" loading="lazy"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBMMTMwIDEzMEg3MEwxMDAgNzBaIiBmaWxsPSIjOUI5QkEwIi8+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjgwIiByPSI4IiBmaWxsPSIjOUI5QkEwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5QkEwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPkltYWdlbSBuw6NvIGVuY29udHJhZGE8L3RleHQ+Cjwvc3ZnPg=='; this.alt='Imagem não encontrada';">
                    <div class="art-info">
                        <h3 class="art-title">${art.title}</h3>
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

function scrollToOffer() {
            document.getElementById('offer').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        function purchase() {
            // Simulação de processo de compra
            alert('🎉 Redirecionando para o checkout seguro...\n\nVocê está adquirindo:\n✅ Curso Completo de Edição de Imagens\n💰 Valor: R$ 19,99\n🔒 Pagamento 100% Seguro\n⚡ Acesso Imediato');
            
            // Aqui você integraria com sua plataforma de pagamento real
            // window.location.href = 'https://checkout.suaplataforma.com/curso-edicao';
        }

        // Sistema de notificações de vendas
        const customers = [
            { name: "Maria Silva", city: "São Paulo, SP" },
            { name: "João Santos", city: "Rio de Janeiro, RJ" },
            { name: "Ana Costa", city: "Belo Horizonte, MG" },
            { name: "Pedro Lima", city: "Salvador, BA" },
            { name: "Carla Oliveira", city: "Brasília, DF" },
            { name: "Lucas Ferreira", city: "Curitiba, PR" },
            { name: "Juliana Rocha", city: "Fortaleza, CE" },
            { name: "Rafael Alves", city: "Porto Alegre, RS" },
            { name: "Fernanda Dias", city: "Recife, PE" },
            { name: "Bruno Martins", city: "Goiânia, GO" }
        ];

        function showNotification() {
            const customer = customers[Math.floor(Math.random() * customers.length)];
            const timeAgo = Math.floor(Math.random() * 10) + 1;
            
            const notification = document.createElement('div');
            notification.className = 'bg-green-500 text-white p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-500 max-w-sm';
            notification.innerHTML = `
                <div class="flex items-center space-x-3">
                    <div class="bg-white rounded-full p-1">
                        <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <div class="font-semibold text-sm">${customer.name}</div>
                        <div class="text-xs opacity-90">${customer.city}</div>
                        <div class="text-xs opacity-75">Comprou há ${timeAgo} min</div>
                    </div>
                </div>
            `;
            
            document.getElementById('notification-container').appendChild(notification);
            
            // Animar entrada
            setTimeout(() => {
                notification.classList.remove('translate-x-full');
            }, 100);
            
            // Remover após 4 segundos
            setTimeout(() => {
                notification.classList.add('translate-x-full');
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 4000);
        }

        // Mostrar primeira notificação após 3 segundos
        setTimeout(showNotification, 3000);
        
        // Continuar mostrando notificações a cada 8-15 segundos
        setInterval(() => {
            showNotification();
        }, Math.random() * 7000 + 8000);

        // Animação de contagem regressiva (simulada)
        function updateCountdown() {
            const now = new Date().getTime();
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);
            
            const distance = tomorrow.getTime() - now;
            
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Você pode adicionar um elemento de countdown se desejar
        }

        // Efeito de scroll suave
        document.addEventListener('DOMContentLoaded', function() {
            // Adiciona efeito de fade-in aos elementos quando aparecem na tela
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observa elementos para animação
            document.querySelectorAll('section').forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96bf477fc6116f85',t:'MTc1NDY1ODg5My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
