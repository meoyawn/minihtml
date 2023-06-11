import { html as langHTML } from "@codemirror/lang-html"
import ReactCodeMirror from "@uiw/react-codemirror"
import React, { useEffect, useState, type JSX } from "react"
import { pruneHtmlToPug } from "../../../minihtml/src/index"
import { defaultHTML } from "./defaulthtml"

export function SplitEditor(): JSX.Element {
  const [html, setHTML] = useState(defaultHTML)
  const [pug, setPug] = useState("")

  useEffect(() => {
    try {
      setPug(pruneHtmlToPug(html))
    } catch (e) {
      setPug("")
    }
  }, [html])

  return (
    <div className="flex h-screen w-full flex-row">
      <ReactCodeMirror
        extensions={[langHTML()]}
        minHeight={"200px"}
        className=" w-1/2 overflow-auto"
        value={html}
        onChange={setHTML}
      />
      <ReactCodeMirror
        minHeight={"200px"}
        className=" w-1/2 overflow-auto"
        value={pug}
        readOnly
      />
    </div>
  )
}
