import React from 'react';
//Allow to change the browserpage
import { Helmet } from 'react-helmet';  

//Import withAuth function
import withAuth from './../hoc/withAuth';

class QRCode extends React.Component{

	head(){
		return(
			<Helmet>
			<title>QR Code- ENGIFY</title>
			</Helmet>
		)
	}

	render(){

		return(
			<div>

				{this.head()}
				<h1>QR Code</h1>
				<p>My QR code generator</p>

			</div>
		)
	}
}

//Export class QRCode
//Restrict access to this page if not logged in

export default withAuth(session => session && session.getCurrentUser)(QRCode);