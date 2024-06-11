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
        setToken(_ctx.response._data.token.token)
        router.push("/c")
      },
      onResponseError(_ctx) {
        toast.add({ title: _ctx.response._data.message, color: "red" })
      },
    })
  }

  const me = async () => {
    return await useFetchApi<UserWithoutPassword>("/auth/me", {
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
    await useFetchApi("/auth/logout", {
      method: "POST",
      onResponse() {
        setUser(null)
        setToken(null)
        reloadNuxtApp()
      },
    })
  }

  return {
    login,
    me,
    logout,
    user,
    isAuth,
  }
}
