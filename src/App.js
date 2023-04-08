import './App.css';
import GuestHome from './components/common/GuestHome/GuestHome';
import Header from './components/common/Header/Header';
import MyProfile from './components/common/MyProfile/MyProfile';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Ads from './components/Ads/Ads/Ads';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/SignUp/SignUp';
import CreateAd from './components/Ads/CreateAd/CreateAd';
import { AuthContext } from './contexts/AuthContext';
import * as authService from './services/authService';
import * as adService from './services/adService'
import { useState, useEffect } from 'react';
import AdDetails from './components/Ads/AdDetails/AdDetails';
import EditAd from './components/Ads/EditAd/EditAd'
import PrivateRoute from './utils/PrivateRoute';




function App() {
	const navigate = useNavigate();
	const [auth, setAuth] = useState(null);

	useEffect(() => {
		async function getUser() {
			const user = await authService.getUser();
			if (!user.message) {
				setAuth((p) => user)
			} else {
				setAuth((p) => null)
			}
		}
		getUser();
	}, []);

	

	const onSignupSubmit = async (data) => {
		await authService.signup(data);
	}


	const onLogout = async () => {
		await authService.logout();
		setAuth((p) => null)
	}

	return (
		<AuthContext.Provider value={{ onSignupSubmit, onLogout, auth, setAuth }}>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<GuestHome />} />
					<Route element={<PrivateRoute path={'/login'} isAuthenticated={auth !== null} />} >
						<Route path='/my-profile' element={<MyProfile />} />
					</Route>
					<Route path='/ads'>
						<Route index element={<Ads />} />
						<Route element={<PrivateRoute path={'/login'} isAuthenticated={auth !== null} />} >
							<Route path='create' element={<CreateAd />} />
							<Route path=':id' element={<AdDetails />} />
							<Route path='edit/:id' element={<EditAd />} />
						</Route>
					</Route>
					<Route element={<PrivateRoute path={'/'} isAuthenticated={auth === null} />} >
						<Route path='/login' element={<Login />} />
						<Route path='/sign-up' element={<SignUp />} />
					</Route>
				</Routes>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
