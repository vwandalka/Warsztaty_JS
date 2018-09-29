'use strict'; 

//zadanie 1

document.addEventListener('DOMContentLoaded', function() {
     var menuButton = document.querySelector('.for-dropdown');
     var subMenu = document.querySelector('.dropdown');
    
    menuButton.addEventListener('mouseover', function() {
    subMenu.style.display = 'block';
    })
    
    menuButton.addEventListener('mouseout', function() {
    subMenu.style.display = 'none';
    })
    
//zadanie 2
    
    var buttons = document.querySelectorAll('.read-more'); 
    
    function showHide() {
        var textArea = this.previousElementSibling; 
        if (textArea.style.display === 'none' || textArea.style.display === '') {
            textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {
           textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }
    }
    
    for (var i = 0; i <= buttons.length; i++) {
        buttons[i].addEventListener('click', showHide); 

    }
    
});