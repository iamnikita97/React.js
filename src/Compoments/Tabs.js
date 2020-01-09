import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import { Scrollbars } from 'react-custom-scrollbars';
// import NotificationBadge from 'react-notification-badge';
// import { Effect } from 'react-notification-badge';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root_left_side: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: '452px',
    },

}));

export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const state = props.state;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
                      state.allRecords.map( (item, index) =>
                        <p key= {index.toString()}> {item.id} {item.firstName} {item.lastName} </p>
                    )     

       
    );
}
