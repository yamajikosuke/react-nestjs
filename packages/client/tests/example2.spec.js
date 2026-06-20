import { test, expect } from "@playwright/test";

test("リンクをクリック", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  // ページタイトルを取得
  await expect(page).toHaveTitle("React-practice");

  // リンクをクリックする
  await page.getByRole("link", { name: "非同期処理" }).click();

  // 画面遷移してタイトル表示を確認する
  await expect(
    page.getByRole("heading", { name: "AsynchronousProcessing" }),
  ).toBeVisible();
});

test("モーダルの表示確認", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // リンクをクリックする
  await page.getByRole("link", { name: "モーダル" }).click();

  // 画面遷移してタイトル表示を確認する
  await expect(page.getByRole("heading", { name: "ModalTest" })).toBeVisible();

  // リンクをクリックする
  await page.getByRole("link", { name: "モーダルを開く（その１）" }).click();

  // モーダルの内容が表示されることを確認
  await expect(page.getByText("モーダルのコンテンツ（その１）")).toBeVisible();

  // 閉じるボタン（×）をクリック
  await page.getByTestId("modal-close").click();

  // モーダルが閉じたことを確認
  await expect(
    page.getByText("モーダルのコンテンツ（その１）"),
  ).not.toBeVisible();
});
