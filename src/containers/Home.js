import { unsplash } from '../services/unsplash';

const Home = () => {
	const authenticationUrl = unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes",
    ]);
  	window.location.assign('authenticationUrl')
  	return null
}

export default Home
