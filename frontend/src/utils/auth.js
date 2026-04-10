const AUTH_STORAGE_KEY = "asiduoAuth";

export const getStoredAuth = () => {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
};

export const setStoredAuth = (authData) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
  window.dispatchEvent(new Event("auth-changed"));
};

export const clearStoredAuth = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  window.dispatchEvent(new Event("auth-changed"));
};

export const getAccessToken = () => getStoredAuth()?.token || "";
