import React, {Component} from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Aux from '../../hoc/Auxiliary';

class Layout extends Component {
	state = {
		showSideDrawer: true
	}

	sideDrawerCloseHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}

	render (){
		return (
			<Aux>
		        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
		        <SideDrawer 
		        	open={this.state.showSideDrawer} 
		        	closed={this.sideDrawerCloseHandler} />
		        <main className={classes.Content}>
		            {this.props.children}
		        </main>
		    </Aux>
		)
	}
};

export default Layout;