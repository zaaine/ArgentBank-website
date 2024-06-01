import { setUserInfo, setNewUsername } from "../slices/authSlice";

// GET USER INFO

export async function getUserInfo(token, dispatch) {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUserInfo(data.body));
      dispatch(setNewUsername(data.body.userName));
    } else {
      console.error("Profile request error : ", response.status);
    }
  } catch (error) {
    console.error("Request error : ", error);
  }
}

// UPDATE USERNAME

export async function updateUsername(token, newUserName, dispatch) {
  try {
    const requestBody = {
      userName: newUserName,
    };

    const request = await fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await request.json();
    dispatch(setNewUsername(data.body.userName));
  } catch (error) {
    alert("Le nom de l'utilisateur n'a pas pu être modifié");
    console.error("Le Nom de l'utilisateur n'a pas pu être modifié : ", error);
  }
}
