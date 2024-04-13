import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
	winter: 'winter',
	sunset: 'sunset',
};

const getUserFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('comfy-store: user') || null);
};

const getThemeFromLocalStorage = () => {
	const theme = localStorage.getItem('comfy-store: theme') || themes.winter;
	document.documentElement.setAttribute('data-theme', theme);
	return theme;
};

const getIcoFromLocalStorage = () => {
	const ico = localStorage.getItem('comfy-store: ico') || null;
	document.querySelector('link').href;
	console.log(ico);
	return ico;
};

const initialState = {
	user: getUserFromLocalStorage(),
	theme: getThemeFromLocalStorage(),
	ico: getIcoFromLocalStorage(),
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const user = { ...action.payload.user, token: action.payload.jwt };
			state.user = user;
			localStorage.setItem('comfy-store: user', JSON.stringify(user));
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

			let ico = document.querySelector('link');
			state.ico =
				state.theme === winter
					? (ico.href = 'Comfy-Store-Icon.png')
					: (ico.href = 'Comfy-Store-Icon-2.png');

			localStorage.setItem('comfy-store: ico', ico.href);
			localStorage.setItem('comfy-store: theme', state.theme);
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
