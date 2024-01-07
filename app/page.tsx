import type { Metadata } from "next"
import data from "./../data/data.json"

export const metadata: Metadata = {
  title: "NSW public school canteen income",
  description: "NSW public school canteen income",
}

export default async function Page() {
  if (!data || data.length == 0) return <div className="text-center py-3">Data loading failed</div>

  return (
    <div className="flex items-center justify-center">
      <main className="max-w-xl mb-20 px-2">
        <div className="flex flex-col items-center justify-center py-3">
          <h1 className="font-bold text-xl text-center">NSW public school canteen income (2022)</h1>

          <a
            className=""
            href="https://data.cese.nsw.gov.au/data/dataset/nsw-public-schools-income-from-licensed-canteens"
          >
            source
          </a>
        </div>

        <article>
          <div className="divide-y divide-gray-300">
            {data &&
              data.map((row, index) => (
                <div className="flex items-center justify-between gap-2 py-1" key={index + 1}>
                  <div className="flex items-center justify-center py-3">
                    <div className="font-medium text-center w-10">{index + 1}</div>
                  </div>
                  <div className="flex flex-wrap flex-shrink w-full font-semibold text-left ">{row.name}</div>
                  <div className="text-right font-mono text-sm bg-indigo-100 rounded-md px-2 py-1">
                    {row.income}
                  </div>
                </div>
              ))}
          </div>
        </article>
      </main>
    </div>
  )
}
