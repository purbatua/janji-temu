import { getOS } from "@/lib/utils";

export const isClient = (): boolean => typeof window !== "undefined"

export const isServer = (): boolean => !isClient()

export const isMacOS = (): boolean => {
  return isClient() && getOS() === "macos"
}