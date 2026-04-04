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

function login(email, password) {
    if (!email.trim() || !password.trim()) return false;
    const name = email.split('@')[0];
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
    return str.replace(/[^a-zA-Z].*/, '').slice(0, 2).toUpperCase() || 'KT';
}

function setupNavbar() {
    const avatar = document.getElementById('nav-avatar');
    if (!avatar) return;
    if (isLoggedIn()) {
        const user = getUser();
        const iniciais = getInitials(user.name || user.email);
        avatar.querySelector('.avatar-iniciais').textContent = iniciais;
        avatar.removeAttribute('hidden');
    }
}

document.addEventListener('DOMContentLoaded', setupNavbar);
