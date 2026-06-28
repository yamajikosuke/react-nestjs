export type LogoutResponse = {
  success: true;
};

export type LoginSuccess = {
  authResult: true;
  accessToken: string;
  refreshToken: string;
};

export type LoginFailure = {
  authResult: false;
  message: string;
};

export type LoginResponse = LoginSuccess | LoginFailure;

export type RefreshResponse = {
  accessToken: string;
};

export type MeResponse = {
  userId: string;
  name: string;
};
