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




function App() {
	const navigate = useNavigate();
	const [auth, setAuth] = useState(null);

	useEffect(() => {
		async function getUser() {
		  const user = await authService.getUser();
			if(!user.message){
				setAuth((p) => user)
			}else{
				setAuth((p) => null)
			}
		}
		getUser();
	  }, []);

	const onLoginSubmit = async (data) => {
		const result = await authService.login(data);
		setAuth((p) => result)
	
	}
	
	const onSignupSubmit = async (data) => {
		await authService.signup(data);
	}

	const onLogout = async () => {
		await authService.logout();
		setAuth((p) => null)
	}

	return (
		<AuthContext.Provider value={{onLoginSubmit, onSignupSubmit, onLogout, auth}}>
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<GuestHome />} />
				<Route path='/my-profile' element={<MyProfile />} />
				<Route path='/ads'>
					<Route index element={<Ads />}/>
					<Route path='create' element={<CreateAd />}/>
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</div>
		</AuthContext.Provider>
	);
}

export default App;
