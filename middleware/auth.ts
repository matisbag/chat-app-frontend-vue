export default defineNuxtRouteMiddleware(() => {
  const { isAuth } = useAuth();

  if (!isAuth.value) {
    return navigateTo("/login");
  }
});
