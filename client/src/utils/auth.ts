import { jwtDecode, JwtPayload } from 'jwt-decode';

class AuthService {
  private tokenKey = 'id_token';

  getProfile() {
    const token = this.getToken();
    try {
      return token ? jwtDecode<JwtPayload>(token) : null;
    } catch (err) {
      console.warn("Failed to decode JWT:", err);
      return null;
    }
  }

  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload & { exp?: number }>(token);
      if (decoded.exp) {
        return decoded.exp * 1000 < Date.now(); // `exp` is in seconds
      }
      return true; // if there's no exp, treat it as expired
    } catch (err) {
      console.warn("Invalid token:", err);
      return true; // fail safe
    }
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  login(idToken: string): void {
    localStorage.setItem(this.tokenKey, idToken);
    window.location.assign('/'); // redirect to home after login
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    window.location.assign('/login'); // redirect to login after logout
  }
}

export default new AuthService();
