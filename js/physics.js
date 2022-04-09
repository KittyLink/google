let density=document.querySelector(".button")
density.addEventListener("click" , (e) =>{
    let a= document.querySelector('.weight').value
    let b= document.querySelector('.volume').value
    let c= a/b
    document.querySelector('.powers-answer').textContent= c
})

let pressure=document.querySelector(".button2")
pressure.addEventListener("click" , (e) =>{
    let a= document.querySelector('.force').value
    let b= document.querySelector('.square').value
    let c= a/b
    document.querySelector('.powers-answer2').textContent= c
})

let pressure2=document.querySelector(".button3")
pressure2.addEventListener("click" , (e) =>{
    let a= document.querySelector('.density2').value
    let b= document.querySelector('.g1').value
    let c= document.querySelector('.height').value
    let d= a*b*c
    document.querySelector('.powers-answer3').textContent= d
})
