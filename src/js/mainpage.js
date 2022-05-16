/**
 * 
 *  School Works JavaScript
 * 
 *  Copyright: INovomiast® 2022
 * 
 *  Under: MIT License
 * 
 * 
 */

//Redir Function
const login_btn = document.getElementById('background-img-btn');

login_btn.addEventListener('click', () => {
    window.location.href = 'http://schwksapp.000webhostapp.com/';
}); 


//All Icons
const gh_icon = document.getElementById('github_icon');
const dsc_icon = document.getElementById('discord_icon');
const dv_icon = document.getElementById('dev_icon')

gh_icon.addEventListener('click', () => {
   window.location.href = "https://github.com/INovomiast/sch-wks"; 
});

dsc_icon.addEventListener('click', () => {
    window.location.href = "";
});

dv_icon.addEventListener('click', () => {
    
});
