


const toggleButton = document.getElementById('menu-icon');
        const navLinks = document.getElementById('sidebar');

        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('activate');
        })


function fun(){
    var button = document.getElementById('toggle-mode');
    var section = document.getElementById('background');
    if(button.checked){
        section.style.backgroundColor = '#1f242d';
        section.style.color = '#fff';

    }else{
        section.style.backgroundColor = 'white';
        section.style.color = 'white';
    }
    
}


