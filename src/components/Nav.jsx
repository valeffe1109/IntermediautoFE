import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/auth.js';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = ({ auth: { isAuthenticated, loading }, logout }) => {
	const adminNav = (
		<Navbar className="mb-5" collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: '#FFFFFF' }}>
			<Navbar.Brand href="/">INTERMEDIAUTO.IT</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">
						<FontAwesomeIcon icon={faHome} /> Home
					</Nav.Link>
					<Nav.Link href="/Contatti">
						<FontAwesomeIcon icon={faAddressCard} /> Contatti
					</Nav.Link>
					<Nav.Link href="/ParcoAuto">
						<FontAwesomeIcon icon={faCar} /> Parco Auto
					</Nav.Link>
					<Nav.Link href="/Admin">
						<FontAwesomeIcon icon={faPlus} /> Aggiungi Auto
					</Nav.Link>
				</Nav>
				<Nav>
					<Button onClick={logout} variant="outline-danger">
						LOGOUT
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);

	const guestNav = (
		<Navbar className="mb-5" collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: '#FFFFFF' }}>
			<Navbar.Brand href="/">INTERMEDIAUTO.IT</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">
						<FontAwesomeIcon icon={faHome} /> Home
					</Nav.Link>
					<Nav.Link href="/Contatti">
						<FontAwesomeIcon icon={faAddressCard} /> Contatti
					</Nav.Link>
					<Nav.Link href="/ParcoAuto">
						<FontAwesomeIcon icon={faCar} /> Parco Auto
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link eventKey={2} href="/AdminLogin">
						Login <FontAwesomeIcon icon={faUser} />
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
	if (isAuthenticated) {
		return adminNav;
	} else {
		return guestNav;
	}
};
Menu.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Menu);
