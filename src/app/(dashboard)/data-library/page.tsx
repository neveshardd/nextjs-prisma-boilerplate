import { DataTable } from "@/components/data-table";
import { SiteHeader } from "@/components/site-header";

import data from "./data.json";

export default function DataLibraryPage() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <h1 className="text-2xl font-bold">Data Library</h1>
              <p className="text-muted-foreground">
                Gerencie seus dados, relatórios e documentos
              </p>
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
