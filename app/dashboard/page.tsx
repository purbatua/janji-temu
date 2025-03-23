import { ChartAreaInteractive } from "@/app/dashboard/components/chart-area-interactive"
import { DataTable } from "@/app/dashboard/components/data-table"
import { SectionCards } from "@/app/dashboard/components/section-cards"
import data from "@/app/dashboard/data.json"

// import { ChartDemo } from "@/app/dashboard/components/final/chart-demo"
// import { ComponentWrapper } from "@/components/component-wrapper"

export default function Page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        {/* <ComponentWrapper name="chart" className="w-full">
          <ChartDemo />
        </ComponentWrapper> */}
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <DataTable data={data} />
        {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
      </div>
    </div>
  )
}
