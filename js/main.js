/* Boton Ver más */
var verMasBTN = document.getElementById('ver-mas')
var compañerosVerMas = document.getElementById('compañeros-ver-mas')

var carImg =  document.getElementsByClassName('car-img')

var arrowR = document.getElementById('next')
var arrowL = document.getElementById('previous')


console.log(carImg)

verMasBTN.addEventListener('click', function test() { 
  compañerosVerMas.style.display = 'block'
})

arrowL.addEventListener('click', previous)
arrowR.addEventListener('click', next)


/* Carousel */
var arrImg = [
  'carousel-1.jpg',
  'carousel-2.jpg',
  'carousel-3.jpg',
  'carousel-4.jpg',
]

var arrImgLen = arrImg.length

console.log(arrImg)

function next() {
  var aux = arrImg[arrImgLen-1]

  for (var i = 0; i < arrImgLen-1; i++) { // i < 4
    arrImg[arrImgLen - (i+1)] = arrImg[arrImgLen - (i+2)] // i = 3
  }
  arrImg[0] = aux

  carImg[0].src = 'img/' + arrImg[0]
  carImg[1].src = 'img/' + arrImg[1]
  carImg[2].src = 'img/' + arrImg[2]

  console.log(arrImg)
}

function previous() {
  var aux = arrImg[0]

  for (var j = 0; j < arrImgLen-1; j++) {
    arrImg[j] = arrImg[j+1]
  }

  arrImg[arrImgLen-1] = aux

  carImg[0].src = 'img/' + arrImg[0]
  carImg[1].src = 'img/' + arrImg[1]
  carImg[2].src = 'img/' + arrImg[2]
  
  console.log(arrImg)
}