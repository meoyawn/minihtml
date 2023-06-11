import { fromHtml } from "hast-util-from-html"
import { toHtml } from "hast-util-to-html"
import { type Element, type Node } from "hast-util-to-html/lib/types"
/* @ts-ignore no type */
import html2pug from "html2pug"
import { filter } from "unist-util-filter"
import { map } from "unist-util-map"

const toPrune = ({ children, properties, tagName }: Element): boolean => {
  if (properties?.ariaHidden) return true

  if (properties?.role === "img") return true

  if (
    typeof properties?.style === "string" &&
    properties?.style.includes("background-image")
  ) {
    return true
  }

  switch (tagName) {
    case "svg":
    case "source":
      return true

    case "img":
      return !properties?.alt

    case "p":
    case "div":
    case "span":
      return children.length === 0

    default:
      return Object.keys(properties ?? {}).length === 0 && children.length === 0
  }
}

const behavioralAttrs: ReadonlyArray<string> = [
  // "className", added by options by default, but can be turned off
  "tabIndex",
  "src",
  "srcSet",
  "rel",
  "decoding",
  "loading",
  "ariaDisabled",
  "target",
  "ariaKeyShortcuts",
  "age",
  "href",
]

const removeAttrs = (el: Node, opts: Options | undefined): Node => {
  if (el.type !== "element") return el

  const properties = { ...el.properties }
  for (const attr of behavioralAttrs) {
    delete properties[attr]
  }

  if (!opts?.keepClasses) {
    delete properties.className
  }

  return { ...el, properties }
}

const pruneHTML = (fragment: string, opts: Options | undefined): string => {
  const mapped = map(fromHtml(fragment), x => removeAttrs(x, opts))

  const filtered = filter(mapped, { cascade: true }, n => {
    const el = n as Node
    if (el.type !== "element") return true

    return !toPrune(el)
  })

  return filtered ? toHtml(filtered) : ""
}

interface Options {
  keepClasses?: boolean
}

export const pruneHtmlAsPug = (htmlFragment: string, opts?: Options): string =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  html2pug(pruneHTML(htmlFragment, opts), { fragment: true }) as string
