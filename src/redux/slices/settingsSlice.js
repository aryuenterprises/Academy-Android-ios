import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  attendance_options: '',
  isLoading: false,
  error: null,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    clearSettings: (state) => {
      state.data = { attendance_options: '' };
    },
    updateSettings: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    setSettingsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSettingsError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setSettings,
  clearSettings,
  updateSettings,
  setSettingsLoading,
  setSettingsError,
} = settingsSlice.actions;

export default settingsSlice.reducer;