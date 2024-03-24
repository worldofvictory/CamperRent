 import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { gerAllSearchParams } from "../../components/helpers/gerAllSearchParams";


axios.defaults.baseURL = "https://65faca563909a9a65b1b8aba.mockapi.io";


export const getAllAdverts = createAsyncThunk(
  "adverts/getAll",
    async ({ page, limit, searchParams }, thunkAPI) => {
      const axiosParams = {
      page,
      limit,
        };
        gerAllSearchParams(searchParams, axiosParams);
    try {
      const { data } = await axios.get('/adverts', { params: axiosParams,
      });
      return data;
    } catch (error) {
        
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTotal = createAsyncThunk(
  "adverts/getTotal",
  async (_, thunkAPI) => {
    

  

    try {
      const { data } = await axios.get('/adverts');

      return data;
    } catch (error) {
      
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);