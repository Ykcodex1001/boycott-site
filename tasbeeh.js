function showRandomTasbeeh() {
    const tasbeehat = [
        { message: "سبحان الله", icon: "fas fa-star" },
        { message: "الحمد لله", icon: "fas fa-hands-praying" },
        { message: "الله أكبر", icon: "fas fa-mosque" },
        { message: "لا إله إلا الله", icon: "fas fa-shield-alt" },
        { message: "لا حول ولا قوة إلا بالله", icon: "fas fa-hand-holding-heart" },
        { message: "اللهم صلّ على نبيك محمد", icon: "fas fa-pray" }
    ];
    
    const toastContainer = document.getElementById('toastContainer');
    
    
    const randomIndex = Math.floor(Math.random() * tasbeehat.length);
    const tasbeeh = tasbeehat[randomIndex];
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML =` 
        <i class="${tasbeeh.icon}"></i>
        <div class="toast-content">
            <div class="toast-message">${tasbeeh.message}</div>
        </div>
        `

    
    toastContainer.appendChild(toast);
    
       
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
   
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 5000);
}

window.addEventListener('load', () => {
    showRandomTasbeeh();
    
   
    setInterval(() => {
        showRandomTasbeeh();
    }, Math.random() * 20000 + 10000); 
});