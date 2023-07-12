import Header from "@/components/header/Header";
import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <h2>Hola team!</h2>

      <p>☝🏻 es un H2, 'estilado en scss/utils/_baserules' ☝🏻</p>

    </MainLayout>
  );
}
