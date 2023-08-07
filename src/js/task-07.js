const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text")
fontSizeControl.addEventListener("input", (event)=>{
   const fontSizeNum = event.currentTarget.value;
text.style.fontSize = `${fontSizeNum}px`
})