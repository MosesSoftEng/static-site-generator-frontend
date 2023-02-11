import React from 'react';

import BrowseSites from '../../illustrations/browse-sites.svg';

//* Configs
const ApiUrl = process.env.REACT_APP_SERVER_API_URL ?? '';

/**
 * Sites - page to show uploaded sites.
 * @returns JSX template view
 */
export default function Sites() {
	const [sites, setSites] = React.useState<string[]>([]);

	const getSites = () => {
		fetch(
			ApiUrl + 'sites/',
			{
				method: 'GET',
			},
		)
			.then(async response => {
				if (response.ok) {
					return response.json();
				}

				throw new Error(`HTTP error, status: ${response.status}`);
			})
			.then(data => {
				setSites(data.data);
			}).catch(err => {
				console.error(err);
			});
	};

	React.useEffect(() => {
		getSites();
	}, []);

	return (
		<main>
			<div className='w-auto min-vh-100 bg-success bg-gradient bg-opacity-10 d-flex flex-column'>
				<div className='container'>
					<br />
					<br />
					<div className='row'>
						<div className='col-12 col-md-4'>
							<img src={BrowseSites} className='App-logo w-100' alt='logo' />
						</div>

						<div className='col-12 col-md-8 d-flex flex-column'>
							<section className='my-auto'>
								<h1>🚀 List of deployed sites!</h1>

								<ul className='list-group list-group-flush'>
									{sites.map((site, index) => (
										<a key={index} href={`${ApiUrl}sites/${site}`} className='list-group-item list-group-item-action bg-transparent' target='_blank' rel='noreferrer'>↗ {site}</a>
									))}
								</ul>
							</section>
						</div>
					</div>

				</div>
			</div>
		</main>
	);
}
