function showPopUpMenu(){
    document.getElementById('popUp').style.display='block';
    document.getElementById('mainContainer').style.filter= 'blur(8px)';
}

function ClosePopUpScreen(){
    document.getElementById('popUp').style.display='none';
    document.getElementById('mainContainer').style.filter= 'blur(0px)';
}