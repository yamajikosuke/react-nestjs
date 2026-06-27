import { http, HttpResponse } from "msw";

/**
 * MSW のハンドラを作成（mockLogin を API 化）
 * ポイント
 * http.post("/api/login") で API をモック
 * HttpResponse.json() でレスポンスを返す
 * 成功/失敗のレスポンスを本番 API と同じ形にしておく
 */
export const handlers = [
  // ログイン API
  http.post("/api/login", async ({ request }) => {
    const body = (await request.json()) as {
      loginId: string;
      password: string;
    };

    // ★ 500 エラーを返す条件（例）
    if (body.loginId === "serverError") {
      return HttpResponse.json(
        {
          message: "サーバー内部エラーが発生しました",
        },
        { status: 500 },
      );
    }

    if (body.loginId === "user01" && body.password === "pass123") {
      return HttpResponse.json({
        authResult: true,
        accessToken: "mock-access-token",
        refreshToken: "valid-refresh-token",
      });
    }

    return HttpResponse.json(
      {
        authResult: false,
        message: "ID またはパスワードが違います",
      },
      { status: 401 },
    );
  }),

  // ログアウト API
  http.post("/api/logout", () => {
    return HttpResponse.json({ success: true }, { status: 200 });
  }),

  // Refresh Token API
  http.post("/api/refresh", async ({ request }) => {
    const body = (await request.json()) as { refreshToken: string };

    if (body.refreshToken === "valid-refresh-token") {
      return HttpResponse.json({
        accessToken: "new-access-token",
      });
    }

    return HttpResponse.json(
      { message: "Refresh Token が無効です" },
      { status: 401 },
    );
  }),
];
