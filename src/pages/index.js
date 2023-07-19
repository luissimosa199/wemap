import Header from "@/components/header/Header";
import MainLayout from "@/components/layouts/MainLayout";
import Categories from "@/components/categories/categories";

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <Categories />
    </MainLayout>
  );
}
