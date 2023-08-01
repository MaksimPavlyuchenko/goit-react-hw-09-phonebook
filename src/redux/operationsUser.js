import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  if (token) {
    return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  return (axios.defaults.headers.common.Authorization = `Bearer ${''}`);
};

export const userRegister = createAsyncThunk(
  'user/userRegister',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const userLogIn = createAsyncThunk(
  'user/userLogin',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', { email, password });
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const userLogOut = createAsyncThunk(
  'user/userLogout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');
      setToken('');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const userRefresh = createAsyncThunk(
  'user/userRefresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('NO TOKEN');
    }

    setToken(token);
    try {
      const response = await axios.get('/users/current');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
