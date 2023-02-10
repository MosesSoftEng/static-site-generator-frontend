/*
 *  Main app Component.
 */
//* Imports
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// Pages
import NoPage from './pages/NoPage';
import HomePage from './pages/home';
import SiteUploadPage from './pages/sites/upload';
import SitesPage from './pages/sites/sites';

function App() {
	return (
		<>
			<BrowserRouter>
				<nav className='navbar sticky-top navbar-expand-md shadow-sm'>
					<div className='container-fluid'>
						<a className='navbar-brand' href='#'>hostMe</a>
						<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon'></span>
						</button>

						<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
							<div className='navbar-nav'>
								<Link className='nav-link active' aria-current='page' to='/'>Home</Link>
								<Link className='nav-link' to='/sites/upload'>Upload Site</Link>
								<Link className='nav-link' to='/sites'>Browse Sites</Link>
							</div>
						</div>
					</div>
				</nav>

				<Routes>
					<Route index element={<HomePage />} />
					<Route path='/sites/upload' element={<SiteUploadPage />} />
					<Route path='/sites' element={<SitesPage />} />
					<Route path='*' element={<NoPage />} />
				</Routes>

				<footer className='text-bg-primary text-center'>
					<div className='container p-4'>
						<div className='row'>
							<div className='col-md-12'>
								<h2>hostMe.com</h2>

								<Link className='nav-link active' aria-current='page' to='/'>Home</Link>
								<Link className='nav-link' to='/sites/upload'>Upload Site</Link>
								<Link className='nav-link' to='/sites'>Browse Sites</Link>
							</div>
						</div>
					</div>

					Copyright ©2023 hostMe.com
				</footer>
			</BrowserRouter>
		</>
	);
}

export default App;
