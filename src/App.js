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
import { useState, useEffect } from 'react';
import AdDetails from './components/Ads/AdDetails/AdDetails';
import EditAd from './components/Ads/EditAd/EditAd'
import PrivateRoute from './utils/PrivateRoute';
import NotFound from './components/common/NotFound/NotFound';




function App() {
	const [auth, setAuth] = useState(null);
	const navigate = useNavigate();

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

	const onLogout = async () => {
		await authService.logout();
		setAuth((p) => null)
		navigate('/', {replace: true})
	}

	return (
		<AuthContext.Provider value={{ onLogout, auth, setAuth }}>
			<div className="App">
				<Header />
				<Routes>
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
					<Route element={<PrivateRoute path={'/ads'} isAuthenticated={auth === null} />} >
						<Route path="/" element={<GuestHome />} />
						<Route path='/login' element={<Login />} />
						<Route path='/sign-up' element={<SignUp />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
