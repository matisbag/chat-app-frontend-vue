export default defineNuxtPlugin(() => {
  const token = useCookie("token")
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      if (token.value) {
        const headers = (options.headers ||= {})
        if (Array.isArray(headers)) {
          headers.push(["Authorization", `Bearer ${token.value}`])
        } else if (headers instanceof Headers) {
          headers.set("Authorization", `Bearer ${token.value}`)
        } else {
          headers.Authorization = `Bearer ${token.value}`
        }
      }
    },
    async onResponseError({ response }) {
      const toast = useToast()
      const errorMessage = getErrorMessage(response)

      toast.add({ title: "Error", description: errorMessage, color: "red" })

      if (response.status === 401) {
        await navigateTo("/login")
      }
    },
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  }
})

function getErrorMessage(response: any) {
  let errorMessage = "Une erreur est survenue"

  if (response && response._data) {
    if (response._data.message) {
      errorMessage = response._data.message
    } else if (response._data.errors && Array.isArray(response._data.errors)) {
      errorMessage = response._data.errors
        .map((err: { message: any }) => err.message)
        .join(", ")
    }
  }

  return errorMessage
}
