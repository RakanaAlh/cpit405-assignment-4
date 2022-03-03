console.log("im connected")
let images = [
  { name: 'frog', likes: 150, url: 'https://a-z-animals.com/media/2021/01/Golden-eyed-leaf-frog-400x300.jpg' },
  { name: 'bird', likes: 60, url: 'https://a-z-animals.com/media/2021/01/spring-colored-birds-flirting-400x300.jpg' },
  { name: 'lizard', likes: 120, url: 'https://a-z-animals.com/media/2021/01/Wild-Chameleon-Reptile-With-Beautiful-Colors-400x300.jpg' },
  { name: 'jelly', likes: 3000, url: 'https://a-z-animals.com/media/2021/01/Jellyfish-with-neon-glow-light-effect-in-sea-aquarium-in-Sentosa-Singapore-400x300.jpg' },
  { name: 'butterfly', likes: 650, url: '"https://a-z-animals.com/media/2021/01/Queen-butterfly-danaus-gilippus-on-blue-hydrangea-flowers-400x300.jpg' },
  { name: 'animals', likes: 20, url: 'https://a-z-animals.com/media/2021/01/mammals-400x300.jpg' }
]




images.sort(compare);

function compare(x, y) {
  if (x.likes < y.likes) {
    return -1;
  } else if (x.likes > y.likes) {
    return 1;
  }
  return 0;
}

for (imagelist of images) {
  let imgObj = document.createElement("img");
  imgObj.src = imgObj.url;
  document.body.append(imgObj);
}

//---------------------------------
var sortType = document.getElementById("sortType")
sortType.onchange = function () {

  window.onload = function () {
    if (document.cookie != undefined && document.cookie.index0f ('sortType') != -1) {
        document.body.setAttribute("class", document.cookie.split('=') [1])
    }
  }
function sortType (element) {
    var expirationTime = new Date()
    expirationTime.setMinutes (expirationTime.getMinutes () + 2)
    document.cookie = 'sortType=' + element.value + '; expires=' + expirationTime.toUTCString;
    document.body.setAttribute("class", element.value)
}
}