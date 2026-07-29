(function () {
  const PASSWORD = "tutorials2026";
  const AUTH_KEY = "all-tutorials-authenticated";
  const OVERLAY_ID = "password-gate";
  const LOGOUT_ID = "password-gate-logout";

  function isAuthenticated() {
    return sessionStorage.getItem(AUTH_KEY) === "true";
  }

  function unlock() {
    sessionStorage.setItem(AUTH_KEY, "true");
    document.documentElement.classList.remove("password-gate-locked");
    document.getElementById(OVERLAY_ID)?.remove();
    showLogoutButton();
  }

  function logout() {
    sessionStorage.removeItem(AUTH_KEY);
    document.getElementById(LOGOUT_ID)?.remove();
    showGate();
  }

  function addStyles() {
    if (document.getElementById("password-gate-styles")) {
      return;
    }

    const styles = document.createElement("style");
    styles.id = "password-gate-styles";
    styles.textContent = `
      html.password-gate-locked body {
        overflow: hidden;
      }

      #${OVERLAY_ID} {
        position: fixed;
        inset: 0;
        z-index: 2147483647;
        display: grid;
        place-items: center;
        padding: 1.5rem;
        background: #ffffff;
        color: #1f2937;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      #${OVERLAY_ID} form {
        width: min(100%, 24rem);
        padding: 1.5rem 1.5rem 1.35rem;
        border-radius: 0.4rem;
        background: #ffffff;
        box-shadow: 0 0.5rem 1.5rem rgba(15, 23, 42, 0.12);
      }

      #${OVERLAY_ID} h1 {
        margin: 0 0 1.25rem;
        color: #111827;
        font-size: 1.5rem;
        line-height: 1.2;
        text-align: center;
      }

      #${OVERLAY_ID} label {
        display: block;
        margin: 0 0 0.45rem;
        color: #1f2937;
        font-size: 1rem;
        font-weight: 500;
      }

      #${OVERLAY_ID} input,
      #${OVERLAY_ID} button {
        width: 100%;
        min-height: 2.9rem;
        border-radius: 0.35rem;
        font: inherit;
      }

      #${OVERLAY_ID} input {
        box-sizing: border-box;
        margin-bottom: 1rem;
        border: 1px solid #d1d5db;
        padding: 0 1rem;
        background: #ffffff;
        color: #1f2937;
        font-size: 1rem;
      }

      #${OVERLAY_ID} input:focus {
        border-color: #93c5fd;
        box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.28);
        outline: 0;
      }

      #${OVERLAY_ID} button {
        border: 0;
        background: #1a73e8;
        color: #ffffff;
        font-size: 1.1rem;
        font-weight: 500;
        cursor: pointer;
      }

      #${OVERLAY_ID} [data-password-error] {
        min-height: 1.25rem;
        margin-top: 0.85rem;
        color: #dc2626;
        font-size: 0.9rem;
      }

      #${LOGOUT_ID} {
    position: fixed;
    right: 1rem;
    top: 0.5rem;
    z-index: 2147483000;
    border-radius: 0.4rem;
    font: inherit;
    font-size: 0.7rem;
    line-height: 1;
    transition: background-color 125ms, color 125ms, border-color 125ms;
    cursor: pointer;
    background: var(--md-accent-fg-color--transparent);
    color: var(--md-accent-fg-color);
        padding: 5px 10px;
      }

      #${LOGOUT_ID}:hover,
      #${LOGOUT_ID}:focus {
        background: var(--md-accent-fg-color, #526cfe);
        color:#fff;
        outline: 0;
      }
    `;
    document.head.appendChild(styles);
  }

  function showLogoutButton() {
    if (!isAuthenticated() || document.getElementById(LOGOUT_ID)) {
      return;
    }

    addStyles();

    const button = document.createElement("button");
    button.id = LOGOUT_ID;
    button.type = "button";
    button.textContent = "Logout";
    button.addEventListener("click", logout);
    document.body.appendChild(button);
  }

  function showGate() {
    if (isAuthenticated()) {
      showLogoutButton();
      return;
    }

    if (document.getElementById(OVERLAY_ID)) {
      return;
    }

    document.documentElement.classList.add("password-gate-locked");
    addStyles();

    const overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML = `
      <form>
        <h1>Login</h1>
        <label for="password-gate-password">Password</label>
        <input id="password-gate-password" type="password" autocomplete="current-password" placeholder="Password" autofocus />
        <button type="submit">Login</button>
        <div data-password-error aria-live="polite"></div>
      </form>
    `;

    overlay.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();

      const input = overlay.querySelector("#password-gate-password");
      const error = overlay.querySelector("[data-password-error]");

      if (input.value === PASSWORD) {
        unlock();
        return;
      }

      input.value = "";
      input.focus();
      error.textContent = "Incorrect password.";
    });

    document.body.appendChild(overlay);
    overlay.querySelector("#password-gate-password").focus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showGate, { once: true });
  } else {
    showGate();
  }

  if (window.document$?.subscribe) {
    window.document$.subscribe(function () {
      showGate();
      showLogoutButton();
    });
  }
})();