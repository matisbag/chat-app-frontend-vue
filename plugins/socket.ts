import { io } from "socket.io-client"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const socket = io(config.public.apiBase, {
    transports: ["websocket"],
  })

  return {
    provide: {
      socket,
    },
  }
})
