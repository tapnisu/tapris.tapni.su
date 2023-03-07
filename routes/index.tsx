import BasePageLayout from "../components/BasePageLayout.tsx";

export default function Home() {
  return (
    <>
      <BasePageLayout
        title="Tapris"
        description="Lightweight discord bot written in Typescript (using deno) by tapnisu!"
      >
        <div>
          <h1>Tapris</h1>
        </div>
      </BasePageLayout>
    </>
  );
}
