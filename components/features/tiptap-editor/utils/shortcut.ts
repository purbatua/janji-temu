import { isMacOS } from "@tiptap/react"

type ShortcutKeyResult = {
  symbol: string
  readable: string
}

const SHORTCUT_KEY_MAP: Record<string, ShortcutKeyResult> = {
  mod: isMacOS()
    ? { symbol: "⌘", readable: "Command" }
    : { symbol: "Ctrl", readable: "Control" },
  alt: isMacOS()
    ? { symbol: "⌥", readable: "Option" }
    : { symbol: "Alt", readable: "Alt" },
  shift: { symbol: "⇧", readable: "Shift" },
}

export const getShortcutKey = (key: string): ShortcutKeyResult => {
  return SHORTCUT_KEY_MAP[key.toLocaleLowerCase()] || { symbol: key, readable: key };
}

export const getShortcutKeys = (keys: string[]): ShortcutKeyResult[] => {
  return keys.map(getShortcutKey);
}