import './App.css';
import GuestHome from './components/common/GuestHome/GuestHome';
import Header from './components/common/Header/Header';
import MyProfile from './components/common/MyProfile/MyProfile';
import { Routes, Route } from 'react-router-dom';
import Ads from './components/Ads/Ads/Ads';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/SignUp/SignUp';
import CreateAd from './components/Ads/CreateAd/CreateAd';

function App() {
	return (
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
	);
}

export default App;
