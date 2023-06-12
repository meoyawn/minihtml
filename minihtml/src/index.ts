import { fromHtml } from "hast-util-from-html"
import { toHtml } from "hast-util-to-html"
import { type Element, type Node } from "hast-util-to-html/lib/types"
import { filter } from "unist-util-filter"
import { map } from "unist-util-map"
import { convert } from "xhtml2pug"

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
    case "script":
    case "link":
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

const commonAttrs: ReadonlyArray<string> = [
  // "className", see Options.keepClasses
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
  "width",
  "height",
  // "href",
]

const attrsByTag: Partial<Record<string, ReadonlyArray<string>>> = {
  time: ["title"],
}

const remove = (
  properties: Record<string, unknown>,
  attrs: ReadonlyArray<string>,
): void => {
  for (const attr of attrs) {
    delete properties[attr]
  }
}

const removeAttrs = (el: Node, opts: Options | undefined): Node => {
  if (el.type !== "element") return el

  const properties = { ...el.properties }
  remove(properties, commonAttrs)
  const forTag = attrsByTag[el.tagName]
  if (forTag) {
    remove(properties, forTag)
  }

  if (!opts?.keepClasses) {
    delete properties.className
  }

  return { ...el, properties }
}

const pruneHTML = (html: string, opts: Options | undefined): string => {
  const mapped = map(fromHtml(html, { fragment: !html.includes("<html") }), x =>
    removeAttrs(x, opts),
  )

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

export const pruneHtmlToPug = (html: string, pruneOpts?: Options): string =>
  convert(pruneHTML(html, pruneOpts), { parser: "html", bodyLess: true })
