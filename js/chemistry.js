let amOfSub=document.querySelector(".button")
amOfSub.addEventListener("click" , (e) =>{
    let a= document.querySelector('.m2').value
    let b= document.querySelector('.molar-m').value
    let c=a/b
    document.querySelector('.powers-answer1').textContent =c
})

let subM=document.querySelector(".button2")
subM.addEventListener("click" , (e) =>{
    let a= document.querySelector('.V').value
    let b= document.querySelector('.density3').value
    let c=a*b
    document.querySelector('.powers-answer2').textContent =c
})

