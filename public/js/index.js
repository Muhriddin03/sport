window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
let passwords = document.querySelector('.passwords');
let img_eye = document.querySelector('.img_eye');
img_eye.addEventListener('click', () => {
    if (passwords.type === 'password') {
        passwords.type = 'text'
    }else{
        passwords.type = 'password'
    }
})