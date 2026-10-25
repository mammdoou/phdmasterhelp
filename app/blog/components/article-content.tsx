import type { ReactNode } from "react"

/** Renders "**bold**" segments inside a line as <strong>, everything else as plain text. */
function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-gray-900 font-bold">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

/** Minimal markdown renderer for the article content stored in lib/articles.ts */
export function ArticleContent({ content }: { content: string }) {
  const lines = content.split(/\r?\n/)
  const blocks: ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const trimmed = lines[i].trim()

    if (!trimmed) {
      i++
      continue
    }

    // Tables: collect consecutive lines starting with "|"
    if (trimmed.startsWith("|")) {
      const rows: string[][] = []
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const row = lines[i].trim()
        if (!/^\|[-\s|]+\|$/.test(row)) {
          rows.push(row.split("|").map((c) => c.trim()).filter(Boolean))
        }
        i++
      }
      const [head, ...body] = rows
      blocks.push(
        <div key={`t${i}`} className="my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-right text-base">
            <thead className="bg-gradient-to-l from-blue-50 to-indigo-50">
              <tr>
                {head?.map((cell, j) => (
                  <th key={j} className="px-5 py-3 font-bold text-gray-900 border-b border-gray-200">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, r) => (
                <tr key={r} className="even:bg-gray-50 hover:bg-blue-50/50 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="px-5 py-3 border-b border-gray-100 text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    }

    if (trimmed.startsWith("#### ")) {
      blocks.push(
        <h4 key={i} className="text-lg font-bold text-gray-800 mt-6 mb-2">
          {trimmed.slice(5)}
        </h4>
      )
    } else if (trimmed.startsWith("### ")) {
      blocks.push(
        <h3 key={i} className="text-xl font-bold text-gray-800 mt-8 mb-3">
          {trimmed.slice(4)}
        </h3>
      )
    } else if (trimmed.startsWith("## ")) {
      blocks.push(
        <h2
          key={i}
          className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b-2 border-blue-100"
        >
          {trimmed.slice(3)}
        </h2>
      )
    } else if (trimmed.startsWith("- ")) {
      const nested = /^\s{2,}-\s/.test(lines[i])
      blocks.push(
        <div key={i} className={`flex gap-2 mb-2 ${nested ? "mr-10" : "mr-4"}`}>
          <span className="text-blue-500 mt-1 shrink-0">•</span>
          <p>{renderInline(trimmed.slice(2))}</p>
        </div>
      )
    } else if (/^\d+\.\s/.test(trimmed)) {
      const num = trimmed.match(/^(\d+)\./)?.[1]
      blocks.push(
        <div key={i} className="flex gap-3 mb-2 mr-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
            {num}
          </span>
          <p>{renderInline(trimmed.replace(/^\d+\.\s/, ""))}</p>
        </div>
      )
    } else if (trimmed.startsWith("✅") || trimmed.startsWith("❌")) {
      const ok = trimmed.startsWith("✅")
      blocks.push(
        <p
          key={i}
          className={`mb-2 mr-4 rounded-lg px-4 py-2 ${ok ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"}`}
        >
          {renderInline(trimmed)}
        </p>
      )
    } else {
      blocks.push(
        <p key={i} className="mb-4">
          {renderInline(trimmed)}
        </p>
      )
    }
    i++
  }

  return <div className="article-content text-gray-700 leading-loose text-lg">{blocks}</div>
}
