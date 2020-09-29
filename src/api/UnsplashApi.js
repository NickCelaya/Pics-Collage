import axios from 'axios';

const unsplashApiBaseUrl = axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID 9bDnVwHCHRLoOVnjHjUK-zKCwiUezalAWvyvQVv94pE',
	},
});

export default unsplashApiBaseUrl;
