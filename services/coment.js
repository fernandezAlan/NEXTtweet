export const addNewComent = (data) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:3000/api/coment", config)
      .then((response) => {
        if (response.ok) resolve(response);
        else reject(new Error("server error"));
      })
      .catch((error) => reject(error));
  });
};
