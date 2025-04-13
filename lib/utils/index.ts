import { isClient, isMacOS, isServer } from "@/lib/utils/is"
import cn from "./cn"
// import fetcher from "./fetcher"
import nFormatter from "./formatter/number"
import { timeAgo } from "./formatter/time"
import { getOS } from "./os"
import { capitalize, truncate } from "./string"

export { cn, nFormatter, timeAgo, capitalize, truncate, getOS, isClient, isServer, isMacOS } // fetcher,
