const AUTH_KEY = 'knowtor_user';

function getUser() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_KEY));
    } catch {
        return null;
    }
}

function isLoggedIn() {
    const user = getUser();
    return !!(user && user.loggedIn === true);
}

function formatName(str) {
    return str
        .replace(/[._\-+]+/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
        .trim();
}

function login(email, password) {
    if (!email.trim() || !password.trim()) return false;
    const raw = email.split('@')[0];
    const name = formatName(raw);
    localStorage.setItem(AUTH_KEY, JSON.stringify({ email, name, loggedIn: true }));
    return true;
}

function logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = './login.html';
}

function requireAuth() {
    if (!isLoggedIn()) {
        window.location.replace('./login.html');
    }
}

function redirectIfLoggedIn() {
    if (isLoggedIn()) {
        window.location.replace('./index.html');
    }
}

function getInitials(str) {
    const words = str.trim().split(/\s+/);
    if (words.length >= 2) {
        return (words[0][0] + words[1][0]).toUpperCase();
    }
    return str.slice(0, 2).toUpperCase() || 'KT';
}

function setupNavbar() {
    const avatar = document.getElementById('nav-avatar');
    if (!avatar) return;
    if (isLoggedIn()) {
        const user = getUser();
        const iniciais = getInitials(user.name || user.email);
        avatar.querySelector('.avatar-iniciais').textContent = iniciais;
        avatar.removeAttribute('hidden');
        avatar.addEventListener('click', () => {
            window.location.href = './perfil.html';
        });
    }
}

document.addEventListener('DOMContentLoaded', setupNavbar);
