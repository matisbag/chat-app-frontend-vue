import type { User, UserLoginResponse, UserWithoutPassword } from "~/types/user"

export const useAuth = () => {
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
    const { $api } = useNuxtApp()

    try {
      const data: UserLoginResponse = await $api<UserLoginResponse>(
        "/auth/login",
        {
          method: "POST",
          body: {
            email,
            password,
          },
        },
      )

      setUser(data.user)
      setToken(data.token.token)
      await navigateTo("/c")
    } catch (err) {}
  }

  const me = async () => {
    return await useAPI<UserWithoutPassword>("/auth/me", {
      method: "GET",
      onResponse(_ctx) {
        setUser(_ctx.response._data)
      },
      onResponseError() {
        setUser(null)
        setToken(null)
      },
    })
  }

  // dev logout
  const logout = async () => {
    const { $api } = useNuxtApp()

    await $api("/auth/logout", { method: "POST" })

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
