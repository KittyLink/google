// let red = 0
// let green = 0
// let blue = 0
// setInterval(() => {
//     if (red == 0) {
//         // console.log(new Date().getMilliseconds())
//         for (let i = 0; i < 256; i++) {
//             // console.log(1)
//             setInterval(() => {
//                 red++
//                 document.querySelector('html').style.background = `rgb(${red},${green},${blue})`
//             }, i * 100);
//         }
//         // console.log(new Date().getMilliseconds())

//     }
//     else if (red >= 255){
//         for (let i = 0; i < 256; i++) {
//             // console.log(2)
//             setInterval(() => {
//                 red--
//                 document.querySelector('html').style.background = `rgb(${red},${green},${blue})`
//             }, i * 100);
//         }
//     }

// }, 3500)
let df = document.querySelector(".button1")
df.addEventListener("click", (e) =>{

    let a= document.querySelector('.power-a').value
    let b= document.querySelector('.power-b').value
    let c = a**b
    document.querySelector('.powers-answer').textContent = c
})
let s=document.querySelector(".button2")
s.addEventListener("click" , (e) =>{
    let a= document.querySelector('.a2').value
    let b= document.querySelector('.b2').value
    let c= a*b
    document.querySelector('.powers-answer2').textContent =c

})
let k=document.querySelector(".button3")
k.addEventListener("click" , (e) =>{
    let x= document.querySelector('.d').value
    let d= Math.PI*x
    document.querySelector('.powers-answer3').textContent =d
})

