import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
	winter: 'winter',
	sunset: 'sunset',
};

const getThemeFromLocalStorage = () => {
	const theme = localStorage.getItem('comfy-store: theme') || themes.winter;
	document.documentElement.setAttribute('data-theme', theme);
	return theme;
};

const initialState = {
	user: {
		username: 'Rizal',
	},
	theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			console.log('User login');
		},
		logoutUser: (state) => {
			state.user = null;
			localStorage.removeItem('comfy-store: user');
			toast.success('Logged out successfully!');
		},
		toggleTheme: (state) => {
			const { winter, sunset } = themes;
			state.theme = state.theme === sunset ? winter : sunset;
			document.documentElement.setAttribute('data-theme', state.theme);
			localStorage.setItem('comfy-store: theme', state.theme);
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
