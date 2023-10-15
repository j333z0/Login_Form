const eyeOpen = document.getElementById('btn-open');
const eyeClosed = document.getElementById('btn-close');
const light = document.getElementById('light');
const pass = document.getElementById('password');
eyeClosed.addEventListener('click', () => {
    if(pass.value !== '') {
        if (pass.type === 'password') {
            pass.type = 'text'
            light.style.opacity = 1
            // btn.src = 'assets/images/eyeClosed.png'
            // btn.style.transform = 'scaleY(-1)'
            eyeOpen.style.opacity = 0
            eyeClosed.style.opacity = 1
        }
        else {
            pass.type = 'password'
            light.style.opacity = 0
            // btn.src = 'assets/images/eye.png'
            // btn.style.transform = 'scaleY(1)'
            eyeOpen.style.opacity = 1
            eyeClosed.style.opacity = 0
        }
    }
});