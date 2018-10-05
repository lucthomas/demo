import React from 'react';
//Allow to change the browserpage
import { Helmet } from 'react-helmet';  

//Import withAuth function
import withAuth from './../hoc/withAuth';

import QRCode from 'qrcode-react';

class QRCodeViewer extends React.Component{
	
	constructor(props) {
        super(props);
        this.state = { text: "https://engify.network" };
    }

    _onChange(event) {
        this.setState({ text: event.target.value });
	}
	
	head(){
		return(
			<Helmet>
			<title>QR Code - ENGIFY</title>
			</Helmet>
		)
	}

	render(){

		return(
			<div>

				{this.head()}
				<h1>QR Code</h1>
				<p>My QR code generator</p>
				<div className="application">
				<input type="text" 
				className="qrcode-input" 
				onChange={this._onChange.bind(this)}
				value={this.state.text}
				placeholder= "input string" /><br /><br />
				<QRCode className="qrcode" 
				value= {this.state.text}
				size={250} fgColor="black" 
				bgColor="white" 
				logo="https://media.licdn.com/dms/image/C560BAQEvDLztsYOa8A/company-logo_200_200/0?e=2159024400&v=beta&t=DYueWAhZIaWlLnPjFvRCecCQXh-LC3WmPkIPj3cNhAQ" />
				</div>

			</div>
		)
	}
}

//Export class QRCodeViewer
//Restrict access to this page if not logged in

export default withAuth(session => session && session.getCurrentUser)(QRCodeViewer);