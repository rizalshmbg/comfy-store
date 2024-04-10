import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
	user: {
		username: 'Rizal',
	},
	theme: 'winter',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			console.log('User login');
		},
		logoutUser: (state) => {
			console.log('User logout');
		},
		toggleTheme: (state) => {
			console.log('Toggle theme');
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
