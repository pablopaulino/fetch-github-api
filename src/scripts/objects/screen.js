const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML  =  `<div class="info">
                                                    <img src="${user.avatarUrl}" alt=""Foto de perfil" />
                                                    <div class="data">
                                                      <h1>${user.name ?? 'Não possue nome cadastrado 😭'}</h1>
                                                      <p>${user.bio ?? 'Não possue bio cadastrada 😭'}</p>
                                                     </div>
                                                </div>`
                                                
        let repositoriesItem = ''
        user.repositories.forEach(repo => repositoriesItem += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section"
                                                <h2>Repositorios</h2>
                                                <ul>${repositoriesItem}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h2>Usuário não encontrado</h2>"
    }
}

export { screen }