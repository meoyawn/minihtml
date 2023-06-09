import { html } from "@codemirror/lang-html"
import ReactCodeMirror from "@uiw/react-codemirror"
import React, { useEffect, useState, type JSX } from "react"
import { pruneHtmlToPug } from "../../../minihtml/src/index"
import { exampleHTML } from "./exampleHTML"

export function SplitEditor(): JSX.Element {
  const [htmlCode, setHtmlCode] = useState(exampleHTML)
  const [pugCode, setPugCode] = useState("")

  useEffect(() => {
    try {
      setPugCode(pruneHtmlToPug(htmlCode))
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      setPugCode("")
    }
  }, [htmlCode])

  return (
    <div className="flex h-[95vh] w-full flex-row">
      <ReactCodeMirror
        extensions={[html()]}
        className="w-1/2 overflow-auto"
        value={htmlCode}
        onChange={setHtmlCode}
      />
      <ReactCodeMirror
        className="w-1/2 overflow-auto"
        value={pugCode}
        readOnly
      />
    </div>
  )
}
