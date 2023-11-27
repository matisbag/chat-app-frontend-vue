import type { User, UserLoginResponse } from "~/types/user";

// TODO: gérer les erreurs
// ? utiliser le hook useFetch ?

export const useAuth = () => {
  const config = useRuntimeConfig();
  const token = useCookie<string | null>("token");
  const user = useState<User | null>("user", () => null);
  const isAuth = computed<boolean>(() => !!user.value);

  const setUser = (u: User | null) => {
    user.value = u;
  };

  const setToken = (t: string | null) => {
    token.value = t;
  };

  const login = async (email: string, password: string) => {
    const data = await $fetch<UserLoginResponse>(
      config.public.apiBase + "/auth/login",
      {
        method: "POST",
        body: {
          email,
          password,
        },
      },
    );

    setUser(data.user);
    setToken(data.token);

    return user.value;
  };

  const me = async () => {
    if (token.value) {
      try {
        const data = await $fetch<User>(config.public.apiBase + "/auth/me", {
          headers: { Authorization: `Bearer ${token.value}` },
        });

        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }

    return user.value;
  };

  return {
    login,
    me,
    user,
    isAuth,
  };
};
