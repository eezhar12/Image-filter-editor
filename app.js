let filters ={
    brightness: {
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    contrast : {
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    saturation: {
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    hueRotation: {
        value:0,
        min:0,
        max:360,
        unit:"deg"
    },
    blur: {
        value:0,
        min:0,
        max:20,
        unit:"px"
    },
    grayscale:{
        value:0,
        min:0,
        max:100,
        unit:"%"
    },
    sepia:{
        value:0,
        min:0,
        max:100,
        unit:"%"
    },
    opacity:{
        value:100,
        min:0,
        max:100,
        unit:"%"
    },
    invert: {
        value:0,
        min:0,
        max:100,
        unit:"%"
    },
}

const filterContainer = document.querySelector(".filterz")
const canvasImg       = document.getElementById("img-canvas")
const inputImg        = document.getElementById("input-img")
const canvasCTX       = canvasImg.getContext("2d")

const resetBtn        = document.getElementById("reset-btn")
const downloadBtn     = document.getElementById("download-btn")
const presetContainer = document.querySelector(".preset")

let file = null
let image = null

function createFilterElemnent(name,unit="%",value, min, max){
    const div= document.createElement("div")
    div.classList.add("filter")
    
    const input = document.createElement("input")
    input.type="range"
    input.min =min
    input.max =max
    input.value =value
    input.id = name

    const p = document.createElement("p")
    p.innerText= name
    div.appendChild(p)
    div.appendChild(input)

    input.addEventListener("input", (event)=>{
        filters[name].value = input.value
        applyfilter()

    })

    return div

}
function CreateFiltr(){
Object.keys(filters).forEach(key =>{
    const filterElement = createFilterElemnent(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max)
    filterContainer.appendChild(filterElement)

})  
}
CreateFiltr()


inputImg.addEventListener("change" , (event)=>{
     file = event.target.files[0]
     canvasImg.style.display = "block"
    
    const imgPlaceHolder = document.querySelector(".plce-img")
    imgPlaceHolder.style.display= "none"

    const img = new Image()
    img.src= URL.createObjectURL(file)
    img.onload= () =>{

        image= img
        canvasImg.width = img.width
        canvasImg.height = img.height
        canvasCTX.drawImage(img,0,0)
    }

})

function applyfilter(){
    canvasCTX.clearRect(0, 0, canvasImg.width , canvasImg.height)

    canvasCTX.filter = `
    brightness(${filters.brightness.value}${filters.brightness.unit})
        contrast(${filters.contrast.value}${filters.contrast.unit})
        saturate(${filters.saturation.value}${filters.saturation.unit})
        hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
        blur(${filters.blur.value}${filters.blur.unit})
        grayscale(${filters.grayscale.value}${filters.grayscale.unit})
        sepia(${filters.sepia.value}${filters.sepia.unit})
        opacity(${filters.opacity.value}${filters.opacity.unit})
        invert(${filters.invert.value}${filters.invert.unit})
    `.trim();
    canvasCTX.drawImage(image,0,0)
}

resetBtn.addEventListener("click", () =>{
    filters ={
    brightness: {
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    contrast : {
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    saturation: {
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    hueRotation: {
        value:0,
        min:0,
        max:360,
        unit:"deg"
    },
    blur: {
        value:0,
        min:0,
        max:20,
        unit:"px"
    },
    grayscale:{
        value:0,
        min:0,
        max:100,
        unit:"%"
    },
    sepia:{
        value:0,
        min:0,
        max:100,
        unit:"%"
    },
    opacity:{
        value:100,
        min:0,
        max:100,
        unit:"%"
    },
    invert: {
        value:0,
        min:0,
        max:100,
        unit:"%"
    },
}
applyfilter()
filterContainer.innerHTML = ""
CreateFiltr()
})

downloadBtn.addEventListener("click", () => {
const link = document.createElement("a")
link.download = "created-image.png"
link.href   = canvasImg.toDataURL()
link.click() 
})

const presets = {
    original: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    vintage: {
        brightness: 110,
        contrast: 120,
        saturation: 80,
        hueRotation: 10,
        blur: 0,
        grayscale: 10,
        sepia: 40,
        opacity: 100,
        invert: 0
    },

    noir: {
        brightness: 100,
        contrast: 140,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    warm: {
        brightness: 110,
        contrast: 110,
        saturation: 130,
        hueRotation: 15,
        blur: 0,
        grayscale: 0,
        sepia: 15,
        opacity: 100,
        invert: 0
    },

    cool: {
        brightness: 100,
        contrast: 110,
        saturation: 120,
        hueRotation: 180,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    dreamy: {
        brightness: 120,
        contrast: 90,
        saturation: 140,
        hueRotation: 20,
        blur: 3,
        grayscale: 0,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    dramatic: {
        brightness: 90,
        contrast: 170,
        saturation: 130,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    inverted: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 100
    }
};

Object.keys(presets).forEach(presetName =>{
    const presetBtn = document.createElement("button")
    presetBtn.classList.add("btn")
    presetBtn.innerText= presetName
    presetContainer.appendChild(presetBtn)

    presetBtn.addEventListener("click", ()=>{
        const preset = presets[presetName]

        Object.keys(preset).forEach(filterName =>{
            filters[filterName].value = preset [filterName]
        })
        applyfilter()
        filterContainer.innerHTML = ""
        CreateFiltr()
    })
})