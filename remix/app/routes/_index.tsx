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
  return <SplitEditor />
}
