import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

/**
 * MSW のワーカーを作成(MSW のサーバー起動設定)
 * ポイント
 * setupWorker(...handlers) でハンドラを登録
 */
export const worker = setupWorker(...handlers);
