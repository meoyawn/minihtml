import { type V2_MetaFunction } from "@remix-run/cloudflare"
import React, { type JSX } from "react"
import { SplitEditor } from "../app/SplitEditor"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index(): JSX.Element {
  return (
    <div>
      <a
        className="flex h-[5vh] w-full flex-shrink-0 items-center px-8 text-lg font-medium text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/meoyawn/minihtml"
      >
        Compress HTML for LLMs
      </a>

      <SplitEditor />
    </div>
  )
}
