 document.getElementById('menuToggle').addEventListener('click', function() {
  const navButtons = document.getElementById('navButtons');
        navButtons.classList.toggle('active');
    });
    
    
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                document.getElementById('navButtons').classList.remove('active');
            }
        });
    });

function setActive(button) {
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    button.classList.add('active');
}