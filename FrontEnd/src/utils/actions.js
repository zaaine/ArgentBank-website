import { createAction } from '@reduxjs/toolkit';
import PropTypes from "prop-types";

const BASE_URL = "http://localhost:3001/api/v1/";
const ERROR_MESSAGE = "Error. Please retry later.";

// Actions
export const clearToken = createAction('clear/token');
export const clearFirstName = createAction('clear/firstName');
export const clearLastName = createAction('clear/lastName');

// Login actions
export const loginRequest = createAction('login/request');
export const loginSuccess = createAction('login/success');
export const loginFailure = createAction('login/failure');

// Profile actions
export const profileRequest = createAction('profile/request');
export const profileSuccess = createAction('profile/success');
export const profileFailure = createAction('profile/failure');

// Save profile actions
export const saveProfileRequest = createAction('saveProfile/request');
export const saveProfileSuccess = createAction('saveProfile/success');
export const saveProfileFailure = createAction('saveProfile/failure');

// Transactions actions
export const transactionsRequest = createAction('transactions/request');
export const transactionsSuccess = createAction('transactions/success');
export const transactionsFailure = createAction('transactions/failure');

// Transaction by ID actions
export const transactionByIdRequest = createAction('transactionById/request');
export const transactionByIdSuccess = createAction('transactionById/success');
export const transactionByIdFailure = createAction('transactionById/failure');

// Update transaction actions
export const updateTransactionRequest = createAction('updateTransaction/request');
export const updateTransactionSuccess = createAction('updateTransaction/success');
export const updateTransactionFailure = createAction('updateTransaction/failure');

// Async actions
export const getLogin = (credentials) => async (dispatch) => {
    dispatch(loginRequest());
    const API_URL = `${BASE_URL}user/login`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        if (response.ok) {
            dispatch(loginSuccess(getLoginData(data)));
        } else {
            dispatch(loginFailure(data.message));
        }
    } catch (error) {
        dispatch(loginFailure(ERROR_MESSAGE));
    }
};

export const getProfile = (token) => async (dispatch) => {
    dispatch(profileRequest());
    const API_URL = `${BASE_URL}user/profile`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (response.ok) {
            dispatch(profileSuccess(getLoginFetchData(data)));
        } else {
            dispatch(profileFailure(data.message));
        }
    } catch (error) {
        dispatch(profileFailure(ERROR_MESSAGE));
    }
};

export const saveUserProfile = (token, userProfile) => async (dispatch) => {
    dispatch(saveProfileRequest());
    const API_URL = `${BASE_URL}user/profile`;

    try {
        const response = await fetch(API_URL, {
            method: "PUT",
            body: JSON.stringify(userProfile),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (response.ok) {
            dispatch(saveProfileSuccess(saveUserProfileData(data)));
        } else {
            dispatch(saveProfileFailure(data.message));
        }
    } catch (error) {
        dispatch(saveProfileFailure(ERROR_MESSAGE));
    }
};

export const getTransactions = (token, accountId, month) => async (dispatch) => {
    dispatch(transactionsRequest());
    const API_URL = `${BASE_URL}user/profile/${accountId}/transactions${month ? `?month=${month}` : ''}`;

    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (response.ok) {
            dispatch(transactionsSuccess(getTransactionsData(data)));
        } else {
            dispatch(transactionsFailure(data.message));
        }
    } catch (error) {
        dispatch(transactionsFailure(ERROR_MESSAGE));
    }
};

export const getTransactionById = (token, accountId, transactionId) => async (dispatch) => {
    dispatch(transactionByIdRequest());
    const API_URL = `${BASE_URL}user/profile/${accountId}/transactions/${transactionId}`;

    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (response.ok) {
            dispatch(transactionByIdSuccess(getTransactionByIdData(data)));
        } else {
            dispatch(transactionByIdFailure(data.message));
        }
    } catch (error) {
        dispatch(transactionByIdFailure(ERROR_MESSAGE));
    }
};

export const updateTransaction = (token, accountId, transactionId, transactionDetails) => async (dispatch) => {
    dispatch(updateTransactionRequest());
    const API_URL = `${BASE_URL}user/profile/${accountId}/transactions/${transactionId}`;

    try {
        const response = await fetch(API_URL, {
            method: "PUT",
            body: JSON.stringify(transactionDetails),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (response.ok) {
            dispatch(updateTransactionSuccess(updateTransactionData(data)));
        } else {
            dispatch(updateTransactionFailure(data.message));
        }
    } catch (error) {
        dispatch(updateTransactionFailure(ERROR_MESSAGE));
    }
};

// Fonctions pour gérer les données
export function getLoginData(data) {
    if (data) {
        if (data.status !== 400 && data.status !== 401 && data.status !== 500) {
            return {
                status: data.status,
                message: data.message,
                token: data.body.token,
            };
        } else {
            return {
                status: data.status,
                message: data.message,
            };
        }
    }
}

getLoginData.propTypes = {
    data: PropTypes.object.isRequired,
};

export function getLoginFetchData(data) {
    if (data) {
        if (data.body !== undefined) {
            return {
                id: data.body.id,
                status: data.status,
                email: data.body.email,
                firstName: data.body.firstName,
                lastName: data.body.lastName,
            };
        } else {
            return {
                id: null,
                status: 0,
                email: "",
                firstName: "",
                lastName: "",
            };
        }
    }
}

getLoginFetchData.propTypes = {
    data: PropTypes.object.isRequired,
};

export function saveUserProfileData(data) {
    if (data) {
        return {
            status: data.status,
            message: data.message,
        };
    }
}

saveUserProfileData.propTypes = {
    data: PropTypes.object.isRequired,
};

export function getTransactionsData(data) {
    if (data) {
        if (data.body !== undefined) {
            return {
                transactions: data.body.transactions,
                status: data.status,
                message: data.message,
            };
        } else {
            return {
                transactions: [],
                status: 0,
                message: "No transactions found",
            };
        }
    }
}

getTransactionsData.propTypes = {
    data: PropTypes.object.isRequired,
};

export function getTransactionByIdData(data) {
    if (data) {
        if (data.body !== undefined) {
            return {
                transaction: data.body,
                status: data.status,
                message: data.message,
            };
        } else {
            return {
                transaction: null,
                status: 0,
                message: "Transaction not found",
            };
        }
    }
}

getTransactionByIdData.propTypes = {
    data: PropTypes.object.isRequired,
};

export function updateTransactionData(data) {
    if (data) {
        return {
            status: data.status,
            message: data.message,
        };
    }
}

updateTransactionData.propTypes = {
    data: PropTypes.object.isRequired,
};
