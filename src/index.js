import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './scenes/App';
import SphereWithSkyboxScene from './scenes/SphereWithSkyboxScene';
//import CameraTestScene from './scenes/CameraTestScene';
import Text3dScene from './scenes/Text3dScene';
import ImageWallScene from './scenes/ImageWallScene';
import GravityScene from './scenes/GravityScene';
import GravityTextScene from './scenes/GravityTextScene';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GravityTextScene />
	</React.StrictMode>
);