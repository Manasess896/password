// Generate a password when the page loads
function regeneratepassword(){
    generatePassword();
    swal.fire({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 2000,
        icon: 'success',
        title: 'Password Regenerated',
        background: 'green',
        color: 'white',
        padding: '1rem',
        iconColor: 'white',
    })
    const icon = document.getElementById('icon');
    const style = document.createElement('style');
    style.textContent = '@keyframes spin { 0% { transform: rotate(0deg); } 25%{transorm:rotate(90deg);} 50% { transform: rotate(180deg); } 75%{transorm:rotate(270deg);} 100% { transform: rotate(360deg); } }';
    document.head.appendChild(style);
    
    // Force reflow by removing the animation
    icon.style.animation = 'none';
    // Trigger reflow
    void icon.offsetWidth;
    // Add the animation back
    icon.style.animation = 'spin 1s linear';
}