import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="w-full flex-1 flex flex-col min-h-screen m-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
