import axios from 'axios'

axios.get('https://api.github.com/users/stu-wd')
  .then(response => {

    const githubProfile = response.data
    const card = cardMaker(githubProfile)
    const entry = document.querySelector('.cards')
    entry.appendChild(card)

  })
  .catch(error => {console.log(error)})
  .finally(fin => console.log('fin'))


  const cardMaker = (object) => {
    const card = document.createElement('div')
    card.classList.add('card')
  
    const image = document.createElement('img')
    const imageURL = object.avatar_url
    image.src = imageURL
    card.appendChild(image)
  
    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card-info')
    card.appendChild(cardInfo)
  
    const name = document.createElement('h3')
    name.classList.add('name')
    name.textContent = object.name
    cardInfo.appendChild(name)
  
    const username = document.createElement('p')
    username.classList.add('username')
    username.textContent = object.login
    cardInfo.appendChild(username)
  
    const location = document.createElement('p')
    location.textContent = object.location
    cardInfo.appendChild(location)
  
    const profile = document.createElement('p')
    cardInfo.appendChild(profile)
  
    const profileLink = document.createElement('a')
    const profileURL = object.html_url
    profileLink.href = profileURL
    profile.appendChild(profileLink)
  
    const followers = document.createElement('p')
    followers.textContent = object.followers
    cardInfo.appendChild(followers)
  
    const following = document.createElement('p')
    following.textContent = object.following
    cardInfo.appendChild(following)
  
    const bio = document.createElement('p')
    bio.textContent = object.bio
    cardInfo.appendChild(bio)
  
    return card
  }
  

const followersArray = ['matt22881', "StnsGeneral", 'hanselviva', 'tetondan', 'danieleremchuk']

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then(response => {
      const profile = response.data
      const card = cardMaker(profile)
      const entry = document.querySelector('.cards')
      entry.appendChild(card)
    })
    .catch(error => {console.log(error)})
    .finally(fin => console.log('fin dos'))
})