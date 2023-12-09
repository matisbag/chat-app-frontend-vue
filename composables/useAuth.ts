import type { User, UserLoginResponse } from "~/types/user"

export const useAuth = () => {
  const config = useRuntimeConfig()
  const token = useCookie<string | null>("token")
  const user = useState<User | null>("user", () => null)
  const isAuth = computed<boolean>(() => !!user.value)

  const setUser = (u: User | null) => {
    user.value = u
  }

  const setToken = (t: string | null) => {
    token.value = t
  }

  const login = async (email: string, password: string) => {
    const router = useRouter()
    const toast = useToast()

    return await useFetchApi<UserLoginResponse>("/auth/login", {
      method: "POST",
      body: {
        email,
        password,
      },
      onResponse(_ctx) {
        setUser(_ctx.response._data.user)
        setToken(_ctx.response._data.token)
        router.push("/c")
      },
      onResponseError(_ctx) {
        toast.add({ title: _ctx.response._data.message, color: "red" })
      },
    })
  }

  const me = async () => {
    if (token.value) {
      try {
        const data = await $fetch<User>(config.public.apiBase + "/auth/me", {
          headers: { Authorization: `Bearer ${token.value}` },
        })

        setUser(data)
      } catch (error) {
        console.log(error)
      }
    }

    return user.value
  }

  // dev logout
  const logout = () => {
    setUser(null)
    setToken(null)
    reloadNuxtApp()
  }

  return {
    login,
    me,
    logout,
    user,
    isAuth,
  }
}
