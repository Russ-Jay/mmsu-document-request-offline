const ADMIN_EMAIL = 'admin@mmsu.edu.ph';
const ADMIN_PASSWORD = 'Admin123!';
const STORAGE_KEYS = {
  adminSession: 'mmsu_admin_session',
};

const elements = {
  form: document.getElementById('adminLoginForm'),
  email: document.getElementById('adminEmail'),
  password: document.getElementById('adminPassword'),
  togglePasswordButton: document.getElementById('togglePasswordButton'),
  messageContainer: document.getElementById('messageContainer'),
  loginButton: document.getElementById('loginButton'),
};

function setMessage(type, text) {
  elements.messageContainer.innerHTML = `<div class="system-message ${type}">${text}</div>`;
}

function redirectToDashboard() {
  window.location.href = 'admin-dashboard.html';
}

function checkExistingSession() {
  const session = localStorage.getItem(STORAGE_KEYS.adminSession);
  if (session === 'active') {
    redirectToDashboard();
  }
}

function handleLogin(event) {
  event.preventDefault();
  const email = elements.email.value.trim();
  const password = elements.password.value;

  if (!email || !password) {
    setMessage('error-message', 'Please enter both email and password.');
    return;
  }

  elements.loginButton.disabled = true;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem(STORAGE_KEYS.adminSession, 'active');
    setMessage('success-message', 'Login successful. Redirecting...');
    setTimeout(redirectToDashboard, 600);
    return;
  }

  elements.loginButton.disabled = false;
  setMessage('error-message', 'Invalid email or password. Use the administrator account details.');
}

function togglePasswordVisibility() {
  const isPassword = elements.password.type === 'password';
  elements.password.type = isPassword ? 'text' : 'password';
  elements.togglePasswordButton.textContent = isPassword ? 'Hide' : 'Show';
  elements.togglePasswordButton.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
}

function initAdminLogin() {
  checkExistingSession();
  elements.form.addEventListener('submit', handleLogin);
  elements.togglePasswordButton.addEventListener('click', togglePasswordVisibility);
}

initAdminLogin();











