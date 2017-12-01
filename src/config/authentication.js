export const checkForSessionToken = () => {
  return new Promise((resolve, reject) => {
    const session_token = localStorage.getItem('session_token');
    resolve(session_token);
  });
};
