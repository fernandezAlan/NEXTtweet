import { auth } from "../firebase/client/auth";
export const addNewUser = ({ currentUserId }) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentUserId }),
    };
    fetch(`http://localhost:3000/api/user/newUser`, config)
      .then(async (response) => {
        if (response.ok) {
          resolve(response);
        } else reject(new Error("server error"));
      })
      .catch((error) => reject(error));
  });
};
export const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    if (!userId) {
      reject(new Error("missing userId"));
    } else {
      const config = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      fetch(`http://localhost:3000/api/user/${userId}`, config)
        .then(async (response) => {
          if (response.ok) {
            const data = await response.json();

            resolve(data);
          } else reject(new Error("server error"));
        })
        .catch((error) => reject(error));
    }
  });
};

export const followUser = async ({ userId }) => {
  const token = await auth.currentUser.getIdToken();
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  };
  return fetch(`http://localhost:3000/api/user/follow`, config);
};

export const unfollowUser = async ({ userId }) => {
  const token = await auth.currentUser.getIdToken();
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  };
  return fetch(`http://localhost:3000/api/user/unfollow`, config);
};

export const createUserInformation = async ({
  userName,
  description,
  displayName,
}) => {
  const token = await auth.currentUser.getIdToken();
  return new Promise((resolve, reject) => {
    const config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, description, displayName }),
    };
    fetch(`http://localhost:3000/api/user/create`, config)
      .then(async (response) => {
        if (response.ok) {
          resolve(response);
        } else reject(response);
      })
      .catch((error) => reject(error));
  });
};

export const deleteUser = async () => {
  const token = await auth.currentUser.getIdToken();
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  return fetch(`http://localhost:3000/api/user/delete`, config);
};
