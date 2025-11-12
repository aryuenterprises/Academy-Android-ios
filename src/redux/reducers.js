import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import settingsReducer from './slices/settingsSlice';
import themeReducer from './slices/themeSlice';
import footerReducer from './slices/footerSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    settings: settingsReducer,
    theme: themeReducer,
    footer: footerReducer,
});

export default rootReducer;