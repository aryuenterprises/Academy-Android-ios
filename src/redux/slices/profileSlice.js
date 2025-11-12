// store/slices/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    studentProfile: null,
    isLoading: false,
    error: null,
    globalCourseId: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setStudentProfile: (state, action) => {
            state.studentProfile = action.payload;
            state.error = null;
        },
        clearStudentProfile: (state) => {
            state.studentProfile = null;
        },
        updateStudentProfile: (state, action) => {
            if (state.studentProfile) {
                state.studentProfile = { ...state.studentProfile, ...action.payload };
            }
        },
        setProfileLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setProfileError: (state, action) => {
            state.error = action.payload;
        },
        setGlobalCourseId: (state, action) => {
            state.globalCourseId = action.payload;
        },
        clearGlobalCourseId: (state) => {
            state.globalCourseId = null;
        },
    },
});

export const {
    setStudentProfile,
    clearStudentProfile,
    updateStudentProfile,
    setProfileLoading,
    setProfileError,
    setGlobalCourseId,
    clearGlobalCourseId,
} = profileSlice.actions;

export default profileSlice.reducer;