//* Imports
import React from 'react';
import {Link} from 'react-router-dom';

// Illustrations
import rocket from '../illustrations/deploy-static-website.svg';
import ConvertMdToHtml from '../illustrations/convert-md-to-html.svg';
import BrowseSites from '../illustrations/browse-sites.svg';

/**
 * Home - site main page.
 * @returns JSX template view
 */
export default function Home() {
	return (
		<main>
			<div className='w-auto vh-100 bg-success bg-gradient bg-opacity-10 d-flex flex-column'>
				<div className='container my-auto'>
					<div className='row'>
						<div className='col-12 col-md-4'>
							<img src={rocket} className='App-logo w-100' alt='logo' />
						</div>

						<div className='col-12 col-md-8 d-flex flex-column'>
							<section className='my-auto'>
								<h1>🚀 $0 Static Website Hosting!</h1>

								Deploy your website front-end for free! We host static files for websites free of charge, no account required!

								<ul className='list-group list-group-flush'>
									<li className='list-group-item bg-transparent'>✔ No hosting cost.</li>
									<li className='list-group-item bg-transparent'>✔ No server set up or maintainace.</li>
									<li className='list-group-item bg-transparent'>✔ No account required.</li>
								</ul>

								<br />

								<Link className='btn btn-primary btn-lg' to='/sites/upload'>Upload and Deploy Site 🚀</Link>
							</section>
						</div>
					</div>
				</div>
			</div>

			<div className='w-auto vh-100 bg-opacity-10 d-flex flex-column'>
				<div className='container my-auto'>
					<div className='row'>
						<div className='col-12 col-md-4'>
							<img src={ConvertMdToHtml} className='App-logo w-100' alt='logo' />
						</div>

						<div className='col-12 col-md-8 d-flex flex-column'>
							<section className='my-auto'>
								<h1>⟳ Convert markdown files to html files!</h1>

								Upload markdown files to be converted to html and download them as a zip!

								<ul className='list-group list-group-flush'>
									<li className='list-group-item bg-transparent'>✔ No conversion cost.</li>
									<li className='list-group-item bg-transparent'>✔ No conversion limit.</li>
									<li className='list-group-item bg-transparent'>✔ No account required.</li>
								</ul>

								<br />

								<Link className='btn btn-primary btn-lg' to='/sites/upload'>Upload Files and Convert ⟳</Link>
							</section>
						</div>
					</div>
				</div>
			</div>

			<div className='w-auto vh-100 bg-success bg-gradient bg-opacity-10 d-flex flex-column'>
				<div className='container my-auto'>
					<div className='row'>
						<div className='col-12 col-md-4'>
							<img src={BrowseSites} className='App-logo w-100' alt='logo' />
						</div>

						<div className='col-12 col-md-8 d-flex flex-column'>
							<section className='my-auto'>
								<h1>📁 Browse hosted sites!</h1>

								Browse sites already hosted and download templates.

								<ul className='list-group list-group-flush'>
									<li className='list-group-item bg-transparent'>✔ Free templates.</li>
									<li className='list-group-item bg-transparent'>✔ No download limit.</li>
									<li className='list-group-item bg-transparent'>✔ No account required.</li>
								</ul>

								<br />

								<Link className='btn btn-primary btn-lg' to='/sites/upload'>Browse Sites 📁</Link>
							</section>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
