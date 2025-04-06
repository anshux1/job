export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-wrapper flex h-full w-full items-start justify-start gap-4 rounded-md border">
      <div className="border-grid h-full w-[280px] border-r bg-red-50">
        <h2 className="text-muted-foreground text-xs">EMPLOYER DASHBOARD</h2>
      </div>

      {children}
    </div>
  )
}
