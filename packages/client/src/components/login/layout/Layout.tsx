import { Header } from "../Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
        {children}
      </main>
    </div>
  );
};
