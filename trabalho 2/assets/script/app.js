// Função para obter dados do GitHub
async function fetchGitHubData(username) {
    const userResponse = await fetch(`https://api.github.com/users/mariaoliveira27`);
    const userData = await userResponse.json();
    document.getElementById('perfil-content').innerHTML = `
        <img src="${userData.avatar_url}" alt="${userData.name}" class="img-thumbnail" width="150">
        <h3>${userData.name}</h3>
        <p>${userData.bio}</p>
        <a href="mailto:${userData.email}" class="btn btn-primary">Contato</a>
        <a href="${userData.html_url}" class="btn btn-secondary">GitHub</a>
    `;
    const reposResponse = await fetch(`https://api.github.com/users/mariaoliveira27/repos`);
    const reposData = await reposResponse.json();
    const reposContent = document.getElementById('repositorios-content');
    reposData.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.className = 'col-md-4';
        repoCard.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${repo.name}</h5>
                    <p class="card-text">${repo.description}</p>
                    <a href="${repo.html_url}" class="btn btn-primary">Acessar</a>
                </div>
            </div>
        `;
        reposContent.appendChild(repoCard);
    });
}

   
   

    

// Função para obter dados do JSON Server
async function fetchJSONServerData() {
    const responseContent = await fetch('https://seu-json-server-replit-url.com/albuns');
    const contentData = await responseContent.json();
    const contentCarousel = document.getElementById('conteudo-content');
    contentData.forEach((content, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `
            <img src="${content.coverUrl}" class="d-block w-100" alt="${content.title}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${content.title}</h5>
                <p>${content.description}</p>
            </div>
        `;
        contentCarousel.appendChild(carouselItem);
    });

    const responseColegas = await fetch('https://seu-json-server-replit-url.com/colegas');
    const colegasData = await responseColegas.json();
    const colegasContent = document.getElementById('colegas-content');
    colegasData.forEach(colega => {
        const colegaCard = document.createElement('div');
        colegaCard.className = 'col-md-4';
        colegaCard.innerHTML = `
            <div class="card mb-4">
                <img src="${colega.photoUrl}" class="card-img-top" alt="${colega.name}">
                <div class="card-body">
                    <h5 class="card-title">${colega.name}</h5>
                    <a href="${colega.githubUrl}" class="btn btn-primary">GitHub</a>
                </div>
            </div>
        `;
        colegasContent.appendChild(colegaCard);
    });
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', () => {
    const username = 'seu-username-github'; // Insira seu nome de usuário do GitHub aqui
    fetchGitHubData(username);
    fetchJSONServerData();
});
