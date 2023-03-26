import { IUser } from ".";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest extends ILoginRequest {
  username: string;
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
  user: IUser;
}

export interface IRefreshTokenRequest {
  refreshToken: string;
}

export interface I2FASecret {
  ascii: string;
  hex: string;
  base32: string;
  qr_code_ascii: string;
  qr_code_hex: string;
  qr_code_base32: string;
  google_auth_qr: string;
  otpauth_url: string;
}

export interface ITotpTokenRequest {
  userToken: string;
}

export interface RecoverPwdRequest {
  email: string;
}

export interface VerifyEmail {
  code: string;
}

export interface ChangePwdRequest {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}
