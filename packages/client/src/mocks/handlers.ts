import { http, HttpResponse } from "msw";

// 現在有効な refreshToken を保存する（ユーザーごと）
const validRefreshTokens: Record<string, string> = {};

type User = {
  userId: string;
  name: string;
};

const users: Record<string, User> = {
  "token-user01": { userId: "user01", name: "山田太郎" },
  "token-user02": { userId: "user02", name: "佐藤花子" },
};

export const handlers = [
  // ログイン API
  http.post("/api/login", async ({ request }) => {
    const body = (await request.json()) as {
      loginId: string;
      password: string;
    } | null;

    if (!body) {
      return HttpResponse.json(
        { message: "リクエストボディが空です" },
        { status: 400 },
      );
    }
    if (body.loginId === "serverError") {
      return HttpResponse.json(
        { message: "サーバー内部エラーが発生しました" },
        { status: 500 },
      );
    }

    if (body.loginId === "user01" && body.password === "pass123") {
      const now = Math.floor(Date.now() / 1000);
      const refreshExp = now + 30;
      const accessExp = now + 10;

      const refreshToken = `refresh.user01.exp${refreshExp}`;
      const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.user01.exp${accessExp}`;

      validRefreshTokens["user01"] = refreshToken;

      return HttpResponse.json(
        {
          authResult: true,
          accessToken,
          refreshToken,
        },
        { status: 200 },
      );
    }

    if (body.loginId === "user02" && body.password === "pass456") {
      const now = Math.floor(Date.now() / 1000);
      const refreshExp = now + 30;
      const accessExp = now + 10;

      const refreshToken = `refresh.user02.exp${refreshExp}`;
      const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.user02.exp${accessExp}`;

      validRefreshTokens["user02"] = refreshToken;

      return HttpResponse.json(
        {
          authResult: true,
          accessToken,
          refreshToken,
        },
        { status: 200 },
      );
    }

    return HttpResponse.json(
      { authResult: false, message: "ID またはパスワードが違います" },
      { status: 401 },
    );
  }),

  // ログアウト API
  http.post("/api/logout", () => {
    return HttpResponse.json({ success: true }, { status: 200 });
  }),

  // Refresh Token API（JSON 方式のままで OK）
  http.post("/api/refresh", async ({ request }) => {
    const body = (await request.json()) as { refreshToken: string } | null;

    if (!body || !body.refreshToken) {
      return HttpResponse.json(
        { message: "Refresh Token がありません" },
        { status: 400 },
      );
    }

    const token = body.refreshToken;
    const parts = token.split(".");

    if (parts.length < 3) {
      return HttpResponse.json(
        { message: "Refresh Token が無効です（形式不正）" },
        { status: 401 },
      );
    }

    const userId = parts[1];
    const expStr = parts[2].replace("exp", "");
    const exp = Number(expStr);

    if (validRefreshTokens[userId] !== token) {
      return HttpResponse.json(
        { message: "Refresh Token が無効です（古いトークン）" },
        { status: 401 },
      );
    }

    if (Number.isNaN(exp)) {
      return HttpResponse.json(
        { message: "Refresh Token が無効です（exp 不正）" },
        { status: 401 },
      );
    }

    const now = Math.floor(Date.now() / 1000);
    if (now > exp) {
      return HttpResponse.json(
        { message: "Refresh Token が期限切れです" },
        { status: 401 },
      );
    }

    const newRefreshExp = now + 30;
    const newRefreshToken = `refresh.${userId}.exp${newRefreshExp}`;
    validRefreshTokens[userId] = newRefreshToken;

    const newAccessExp = now + 10;
    const newAccessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${userId}.exp${newAccessExp}`;

    return HttpResponse.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  }),

  // /api/me（Authorization ヘッダ方式に変更）
  http.get("/api/me", ({ request }) => {
    const auth = request.headers.get("Authorization");
    if (!auth) {
      return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = auth.replace("Bearer ", "");
    const parts = token.split(".");
    if (parts.length < 3) {
      return HttpResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const payload = parts[1];
    const [userId, expStr] = payload.split(".exp");
    const exp = Number(expStr);

    const now = Math.floor(Date.now() / 1000);
    if (now > exp) {
      return HttpResponse.json(
        { message: "Access Token が期限切れです" },
        { status: 401 },
      );
    }

    const user = users[`token-${userId}`];
    if (!user) {
      return HttpResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    return HttpResponse.json(user);
  }),
];
