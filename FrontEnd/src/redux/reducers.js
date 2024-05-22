import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

// Actions
import {
    loginRequest,
    loginSuccess,
    loginFailure,
    profileRequest,
    profileSuccess,
    profileFailure,
    saveProfileRequest,
    saveProfileSuccess,
    saveProfileFailure,
    transactionsRequest,
    transactionsSuccess,
    transactionsFailure,
    transactionByIdRequest,
    transactionByIdSuccess,
    transactionByIdFailure,
    updateTransactionRequest,
    updateTransactionSuccess,
    updateTransactionFailure
} from '../utils/actions';

// Définition de l'état initial
const initialState = {
    loading: false,
    data: null,
    error: null,
};

// Création d'un réducteur asynchrone
const createAsyncReducer = (request, success, failure) =>
    createReducer(initialState, (builder) => {
        builder
            .addCase(request, (state) => {
                state.loading = true;
            })
            .addCase(success, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(failure, (state, action) => {
                state.loading = false;
                state.data = null;
                state.error = action.payload;
            });
    });

// Réducteurs
const loginReducer = createAsyncReducer(loginRequest, loginSuccess, loginFailure);
const profileReducer = createAsyncReducer(profileRequest, profileSuccess, profileFailure);
const saveProfileReducer = createAsyncReducer(saveProfileRequest, saveProfileSuccess, saveProfileFailure);
const transactionsReducer = createAsyncReducer(transactionsRequest, transactionsSuccess, transactionsFailure);
const transactionByIdReducer = createAsyncReducer(transactionByIdRequest, transactionByIdSuccess, transactionByIdFailure);
const updateTransactionReducer = createAsyncReducer(updateTransactionRequest, updateTransactionSuccess, updateTransactionFailure);

// Sélecteurs
 const selectFirstName = (state) => state.firstName;
 const selectToken = (state) => state.token;
 const selectLoading = (state) => state.loading;
 const selectError = (state) => state.error;

// Définition des actions
 const setFirstName = createAction('set/firstName');
 const clearToken = createAction('clear/token');
 const clearFirstName = createAction('clear/firstName');
 const clearLastName = createAction('clear/lastName');
 const setError = createAction('set/error');

const rootReducer = {
    login: loginReducer,
    profile: profileReducer,
    saveProfile: saveProfileReducer,
    transactions: transactionsReducer,
    transactionById: transactionByIdReducer,
    updateTransaction: updateTransactionReducer,
	selectFirstName,
    selectToken,
    selectLoading,
    selectError,
    setFirstName,
    clearToken,
    clearFirstName,
    clearLastName,
    setError
};

export {rootReducer};