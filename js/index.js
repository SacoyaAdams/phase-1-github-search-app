document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.search.value)
    fetch(`https://api.github.com/search/users?q= ${e.target.search.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('user-list').innerHTML =`
        <img src="${data.avatar_url}"</img>
        <p>${data.login})</p>
        `
        
    })
})



