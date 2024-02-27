import Filters from "./components/Filters";

export default async function Home() {
  return (
    <main>
      <h1 className="text-3xl text-center font-bold py-5">Ciudades peru</h1>
      <p className="text-center">
        En esta API encontrarás los departamentos, provincias y departamentos
        del Perú
      </p>

      <Filters/>

    </main>
  );
}
