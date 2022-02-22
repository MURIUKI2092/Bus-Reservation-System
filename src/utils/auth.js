import instance from "./axios";

export const getUser = () =>
  window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {};

const setUser = (user) =>
  window.localStorage.setItem("user", JSON.stringify(user));

export const handleRegistration = (
  { email, password, first_name, last_name },
  navigate
) => {
  console.log(email, password, first_name, last_name);
  if (email && password && first_name && last_name) {
    const axios = instance();
    axios
      .post(`users/signup/`, {
        email,
        password,
        first_name,
        last_name,
      })
      .then((res) => {
        setUser(res.data);

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return false;
};

export const handleLogin = ({ email, password }, navigate) => {
  if (email && password) {
    const axios = instance();

    axios
      .post(`users/login/`, {
        email,
        password,
      })
      .then((res) => {
        setUser(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const handleLogout = (navigate) => {
    const axios = instance();

    axios
    .post(`rest-auth/logout/`)
    .then(res => {
        setUser({})
        navigate(`/`)
    })
}

export const isLoggedIn = () => {
  const user = getUser();
  return !!user.token;
};
