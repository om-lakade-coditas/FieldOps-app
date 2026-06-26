const isLoggedIn = () => {
  const token = JSON.parse(localStorage.getItem("accessToken") as string);
  if (!token) return false;
  return true;
};

export default {
  isLoggedIn,
};
