import React, { Component } from 'react';
import Header from './components/Header';
import CVForm from './components/CVForm/CVForm';
import CVPreview from './components/CVPreview/CVPreview';
import Footer from './components/Footer';

class App extends Component {
	state = {
    name: 'Karol'
  };
	render() {
		return (
			<div className='main-container'>
				<Header />

				<div className="cvs">
					<CVForm />
					<CVPreview />
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
