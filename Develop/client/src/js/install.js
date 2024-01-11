const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    //store events
    window.deferredPrompt = event;
    //show button by removing class 'hidden'
    butInstall.classList.toggle('hidden', false);
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }
    //shows  prompt
    promptEvent.prompt();
    //resets deferredPrompt
    window.deferredPrompt = null;
    //hides button again
    butInstall.classList.toggle('hidden', true);

});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
