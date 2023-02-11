//* Imports
import React from 'react';

// Illustrations
import UploadIllustration from '../../illustrations/upload-site.svg';

//* Configs
const ApiUrl = process.env.REACT_APP_SERVER_API_URL ?? '';

/**
 * Upload -site  upload page
 * @returns JSX template view
 */
export default function Upload() {
	const [message, setMessage] = React.useState<string>('');
	const [uploadSuccessful, setUploadSuccessful] = React.useState<boolean>(false);

	//* Files input
	const [files, setFiles] = React.useState<FileList>();
	const ref = React.useRef<HTMLInputElement>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFiles(event.target.files ?? undefined);
	};

	const submitForm = (event: React.FormEvent): void => {
		event.preventDefault();
		setMessage('');
		setUploadSuccessful(true);

		if (files) {
			for (let i = 0; i < files.length; i++) {
				const file = files.item(i);
				if (file) {
					uploadFile(file);
				}
			}

			if (uploadSuccessful) {
				setMessage('Upload complete successfully.');
			} else {
				setMessage('Upload error.');
			}
		} else {
			setMessage('No folder selected');
		}
	};

	/**
	 * Function to upload file to server.
	 * @param file File object containing file to be uploaded.
	 */
	const uploadFile = (file: File): void => {
		if (!File) {
			setUploadSuccessful(false);
			return undefined;
		}

		setMessage(`Uploading file: ${file.name}`);

		const formData = new FormData();
		formData.append('file', file);
		formData.append('sourceRelativePath', file.webkitRelativePath);

		fetch(
			ApiUrl + 'sites/upload/',
			{
				method: 'POST',
				body: formData,
				headers: {
				},
			},
		).then(async res => {
			if (res.ok) {
				return res.json();
			}

			throw new Error(`HTTP error, status: ${res.status}`);
		})
			.catch(err => {
				console.error(err);
				setUploadSuccessful(false);
			});
	};

	React.useEffect(() => {
		if (ref.current !== null) {
			ref.current.setAttribute('directory', '');
			ref.current.setAttribute('webkitdirectory', '');
		}
	}, [ref]);

	return (
		<main>
			<div className='w-auto vh-100 bg-success bg-gradient bg-opacity-10 d-flex flex-column'>
				<div className='container my-auto'>
					<div className='row'>
						<div className='col-12 col-md-4'>
							<img src={UploadIllustration} className='App-logo w-100' alt='logo' />
						</div>

						<div className='col-12 col-md-8 d-flex flex-column'>
							<section className='my-auto'>
								<h1>🚀 Deploy your static site!</h1>

								{(message === '') ? '' : <div className='alert alert-primary' role='alert'>
									{message}
								</div>}

								<form onSubmit={submitForm}>

									<div className='mb-3'>
										<label htmlFor='fileList' className='form-label'>
											Select a folder with your static files.
											<br />
											<i>The name of folder will be used for the deployed site.</i>
										</label>

										<input
											className='form-control'
											type='file'
											id='filepicker'
											name='fileList'
											ref={ref}
											multiple
											onChange={handleFileChange} />
									</div>

									<button type='submit' className='btn btn-primary'>Submit</button>
								</form>
							</section>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
