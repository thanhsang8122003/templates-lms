import { Component } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, User } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userData?: User; // Lưu thông tin user để hiển thị

  constructor(private auth: Auth) {}

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);

      // Lưu lại thông tin user
      this.userData = result.user;
      console.log('Login success:', this.userData);

    } catch (error) {
      console.error('Login error:', error);
      alert('Đăng nhập thất bại!');
    }
  }

  logout() {
    this.auth.signOut();
    this.userData = undefined;
  }
}
