import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signup, login, fetchUserProfile, updateUserProfile } from "../api";

// Création d'une action asynchrone "signupUser" pour l'inscription de l'utilisateur
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, thunkAPI) => {
    try {
      const user = await signup(userData); // Appel à la fonction "signup" pour l'inscription
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // En cas d'erreur, renvoie l'erreur avec des données de réponse
    }
  }
);

// Création d'une action asynchrone "loginUser" pour la connexion de l'utilisateur
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const token = await login(credentials); // Appel à la fonction "login" pour la connexion
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // En cas d'erreur, renvoie l'erreur avec des données de réponse
    }
  }
);

// Création d'une action asynchrone "fetchUserProfileAsync" pour récupérer le profil de l'utilisateur
export const fetchUserProfileAsync = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const userProfile = await fetchUserProfile(token); // Appel à la fonction "fetchUserProfile" pour récupérer le profil
      return userProfile;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // En cas d'erreur, renvoie l'erreur avec des données de réponse
    }
  }
);

// Création d'une action asynchrone "updateUserProfileAsync" pour mettre à jour le profil de l'utilisateur
export const updateUserProfileAsync = createAsyncThunk(
  "auth/updateUserProfile",
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const updatedUser = await updateUserProfile(userData, token); // Appel à la fonction "updateUserProfile" pour mettre à jour le profil
      return updatedUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // En cas d'erreur, renvoie l'erreur avec des données de réponse
    }
  }
);

// État initial du slice auth
const initialState = {
  token: null,
  status: "idle",
  error: null,
  user: null,
};

// Création du slice auth
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action pour restaurer la session en fournissant un jeton
    restoreSession: (state, action) => {
      state.token = action.payload;
    },
    // Action pour déconnecter l'utilisateur
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Gestion des actions asynchrones et de leurs états
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchUserProfileAsync.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUserProfileAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfileAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateUserProfileAsync.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

// Export des actions du slice
export const { restoreSession, logout } = authSlice.actions;

// Export du réducteur du slice
export default authSlice.reducer;
