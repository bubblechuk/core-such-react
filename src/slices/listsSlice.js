import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feedback: {
    name: "",
    email: "",
    telephone: "",
    theme: "",
    message: "",
    file: null
  },
  newsPerPage: 6
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setName: (state, action) => { state.feedback.name = action.payload },
    setEmail: (state, action) => { state.feedback.email = action.payload },
    setTelephone: (state, action) => { state.feedback.telephone = action.payload },
    setTheme: (state, action) => { state.feedback.theme = action.payload },
    setMessage: (state, action) => { state.feedback.message = action.payload },
    setFile: (state, action) => { state.feedback.file = action.payload }
  },
});
const newsSlice = createSlice({
  name: 'newsperpage',
  initialState,
  reducers: {
    pageChange: (state, action) => {state.newsPerPage = action.payload}
  }})
export const { setName, setEmail, setTelephone, setTheme, setMessage, setFile } = feedbackSlice.actions;
export const {pageChange} = newsSlice.actions;

export const feedbackReducer = feedbackSlice.reducer;
export const newsReducer = newsSlice.reducer;
