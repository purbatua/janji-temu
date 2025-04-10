import { createAuthClient } from "better-auth/react"
import { toast } from "sonner";

export const client = createAuthClient({
  /** the base url of the server (optional if you're using the same domain) */
  // baseURL: "http://localhost:3000",
  fetchOptions: {
    onError(e) {
      if (e.error.status === 429) {
        toast.error("Too many requests. Please try again later.");
      }
    },
	},
})

export const {
	signUp,
	signIn,
	signOut,
	useSession,
} = client;

client.$store.listen("$sessionSignal", async () => {});