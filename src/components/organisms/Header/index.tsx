import React, {FC, useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

// Components
import clsx from 'clsx';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import {userDataType} from "../../../types/actions/user";
import {userDataInitial} from "../../../redux/reducers/user";
import {user} from "../../../actions/user";
import {toastr} from "react-redux-toastr";

// imgs
import Logo from '../../../assets/svg/github.svg'
import Bell from '../../../assets/svg/bell.svg'
import Plus from '../../../assets/svg/plus.svg'

// Styles
import "./style.scss";



const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
    }),
);

const HeaderContainer: FC = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [userData, setUserData] = useState<[userDataType]>([userDataInitial]);

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const response = await user.getUserData();
        if (response && response.status === 200) {
            setUserData(response.data);
        } else {
            toastr.error("Error", response.statusText);
        }
    }
    const handleDrawerOpen = () => {
        open ? setOpen(false) : setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div id="header-wrapper">
            <div className={classes.root}>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar className="flex-wrapper">
                        <Link to="/">
                            <img className="logo" src={Logo} alt="logo"/>
                        </Link>
                        <div className="left-panel">
                            <IconButton
                                id="burger"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx( open && classes.hide)}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <List className="list-desktop">
                                <ListItem>
                                    <TextField
                                        placeholder="Search or jump to..."
                                        className="input-desktop"/>
                                        <div className="slesh">/</div>
                                </ListItem>
                                <ListItem>
                                    Pull requests
                                </ListItem>
                                <ListItem>
                                    Issues
                                </ListItem>
                                <ListItem>
                                    Marketplace
                                </ListItem>
                                <ListItem>
                                    Explore
                                </ListItem>
                            </List>
                        </div>
                        <div className="right-panel">
                            <Link to="/">
                                <img src={Bell} alt="bell"/>
                            </Link>
                            <Link to="/">
                                <img src={Plus} alt="plus"/>
                            </Link>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Open Menu
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <List className="list-items">
                        <ListItem>
                            <TextField label="Search or jump to..."/>
                        </ListItem>
                        <Divider className="divider"/>
                        <ListItem>
                            Pull requests
                        </ListItem>
                        <Divider className="divider"/>
                        <ListItem>
                            Issues
                        </ListItem>
                        <Divider className="divider"/>
                        <ListItem>
                            Marketplace
                        </ListItem>
                        <Divider className="divider"/>
                        <ListItem>
                            Explore
                        </ListItem>
                        <Divider className="divider"/>
                        <ListItem>
                            Settings
                        </ListItem>
                        <Divider className="divider"/>
                        <ListItem>
                            UserName
                        </ListItem>
                        <Divider className="divider"/>
                        <ListItem>
                            Sign out
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </div>
    );
};

const mapStateToProps = function (state: any) {
    return {
        app: state.app,
        user: state.user
    };
};

export default connect(mapStateToProps)(withRouter(HeaderContainer));
