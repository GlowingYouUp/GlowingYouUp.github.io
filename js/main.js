const menuButton = document.getElementById('menuButton');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', ()=>{
    nav.classList.toggle('show');
})

const openWindow = (elem, url)=>{
    elem.addEventListener('click',()=> {
        location.href = url;
    })
}
// Asignar enlace a los elementos de imagen personal
const appearanceKeyArea= document.getElementById('PIAppearanceKeyArea');
if(appearanceKeyArea) openWindow(appearanceKeyArea,'appearance/index.html');
const bodyLanguageKeyArea= document.getElementById('PIBodyLanguageKeyArea');
if(bodyLanguageKeyArea) openWindow(bodyLanguageKeyArea,'body-language/index.html');
const communicationSkillsKeyArea= document.getElementById('PICommunicationSkillsKeyArea');
if(communicationSkillsKeyArea) openWindow(communicationSkillsKeyArea,'communication-skills/index.html');
const onlinePresenceKeyArea= document.getElementById('PIOnlinePresenceKeyArea');
if(onlinePresenceKeyArea) openWindow(onlinePresenceKeyArea,'online-presence/index.html');

// blog-container-menu

const buttonGuides = document.getElementById('buttonGuides');
const buttonProducts = document.getElementById('buttonProducts');
const guidesSection = document.getElementById('guidesSection');
const productsSection = document.getElementById('productsSection');


const changeBlogContainerMenuButtonIClass = (button,otherButton,section,otherSection)=>{
    if(button.firstElementChild.classList == 'fas fa-caret-down'){
        button.firstElementChild.classList.remove('fa-caret-down');
        button.firstElementChild.classList.add('fa-caret-right');
        section.classList.add('hidden');
        if(otherButton.firstElementChild.classList == 'fas fa-caret-right'){
            otherButton.firstElementChild.classList.remove('fa-caret-right');
            otherButton.firstElementChild.classList.add('fa-caret-down');
            otherSection.classList.remove('hidden');
        }
        
    }else{
        button.firstElementChild.classList.add('fa-caret-down');
        button.firstElementChild.classList.remove('fa-caret-right')
        section.classList.remove('hidden');

    }
}
buttonGuides.addEventListener('click',()=>{
    changeBlogContainerMenuButtonIClass(buttonGuides,buttonProducts,guidesSection,productsSection)
})
buttonProducts.addEventListener('click',()=>{
    changeBlogContainerMenuButtonIClass(buttonProducts,buttonGuides,productsSection,guidesSection);
})