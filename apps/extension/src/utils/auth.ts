const auth = () => {
  const handleLogin = () => {
    window.open("https://seampass-fe.up.railway.app/", "_blank");
  };

  const handleCreateAccount = () => {
    window.open("https://seampass-fe.up.railway.app/create-account", "_blank");
  };

  return { handleLogin, handleCreateAccount };
};

export default auth;
