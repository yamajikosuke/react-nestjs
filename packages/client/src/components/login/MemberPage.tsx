import { Layout } from "./layout/Layout";
import { useEffect, useState } from "react";
import { api } from "../../api/axios";

type MeResponse = {
  userId: string;
  name: string;
};

export const MemberPage = () => {
  const [me, setMe] = useState<MeResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get<MeResponse>("/me");
        setMe(res.data);
      } catch {
        setError("ユーザー情報の取得に失敗しました");
        setMe(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">メンバーページ</h2>

      {loading && <p className="text-gray-600">読み込み中...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {me && (
        <div className="space-y-2">
          <p>
            <span className="font-semibold">ユーザーID:</span> {me.userId}
          </p>
          <p>
            <span className="font-semibold">名前:</span> {me.name}
          </p>
        </div>
      )}
    </Layout>
  );
};
