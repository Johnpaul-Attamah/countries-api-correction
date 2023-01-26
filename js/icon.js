// const lightmode =  document.querySelector("toggle-container");
// const darkmode = document.querySelector(".dark-mode");



// const lightMode = document.querySelector(".sun-icon");
// const darkModeContainer = document.querySelector(".toggle-container")



// darkModeContainer.addEventListener("click", (e)=>{
// if( e.target.Matches(".moon-icon") || e.target.parentElement.Matches(".moon-icon")){
// document.body.classList.add("darkmode");
// darkModeContainer.innerHTML ;`
// <span class="moon-icon toggle-box"><i class="fa fa-moon-o"></i><span class="text">dark mode</span> </span>
// `
// }else{

// }


// }) 


const lightMode = document.querySelector(".sun");
const darkMode = document.querySelector(".moon");
const toggleLightMenu = document.querySelector(".darkMode");
   const darkModeContainer = document.querySelector(".dark");
   darkModeContainer.addEventListener("click", (e) => {
    if (e.target.matches(".sun") || e.target.parentElement.matches(".sun")) {
        document.body.classList.add("darkMode")
        darkModeContainer.innerHTML = `
        <span class="moon toggle-icon"><i class="fa fa-moon-o"></i><span class="text">dark mode</span> </span>
        `
    }else {
        document.body.classList.remove("darkMode")
        darkModeContainer.innerHTML = `
        <span class="sun toggle-icon"><i class="fa fa-sun-o"></i><span class="text">light mode</span> </span>
        `
    }
})