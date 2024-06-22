import { io } from "socket.io-client"

export default defineNuxtPlugin(() => {
  const { user } = useAuth()
  const config = useRuntimeConfig()
  const socket = io(config.public.apiBase, {
    transports: ["websocket"],
    query: { userId: user.value?.id },
  })

  return {
    provide: {
      socket,
    },
  }
})
