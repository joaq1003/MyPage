function toggleSocialMenu(element) {
    var socialSubMenu = document.getElementById("social-menu");
    var contactSubMenu = document.getElementById("contact-menu");

    // Ocultar el otro submenú si está desplegado
    if (contactSubMenu.classList.contains("highlight")) {
        toggleContact();
    }

    // Mostrar u ocultar el menú de redes sociales
    socialSubMenu.classList.toggle("highlight");
    socialSubMenu.style.display = socialSubMenu.classList.contains("highlight") ? "block" : "none";
}

function toggleContact(element) {
    var contactSubMenu = document.getElementById("contact-menu");
    var socialSubMenu = document.getElementById("social-menu");

    // Ocultar el otro submenú si está desplegado
    if (socialSubMenu.classList.contains("highlight")) {
        toggleSocialMenu();
    }

    // Mostrar u ocultar el menú de contacto
    contactSubMenu.classList.toggle("highlight");
    contactSubMenu.style.display = contactSubMenu.classList.contains("highlight") ? "block" : "none";
}

