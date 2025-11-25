import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/api/todos";

// GET TODOS
export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const res = await axios.get(API);
  return res.data;
});

// ADD TODO
export const addTodo = createAsyncThunk("todos/add", async (text) => {
  const res = await axios.post(API, { text });
  return res.data;
});

// TOGGLE COMPLETE
export const toggleTodo = createAsyncThunk("todos/toggle", async (todo) => {
  const res = await axios.put(`${API}/${todo._id}`, {
    completed: !todo.completed,
  });
  return res.data;
});

// DELETE TODO
export const deleteTodo = createAsyncThunk("todos/delete", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: { list: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.list.findIndex(t => t._id === action.payload._id);
        state.list[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter(t => t._id !== action.payload);
      });
  }
});

export default todoSlice.reducer;
