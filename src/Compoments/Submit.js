import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
// import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimpleTabs from './Tabs';
import ListData from './ListData';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10, 7),
        maxWidth: '900px',
        top: '61px !important',
        margin: '0px 0px 0px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        maxWidth: '900px',
        position: 'relative',
        margin: '60px auto 0 auto',
        marginBottom: '5px',
        border: '5px solid black',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'black',
        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    listContainer :  {

        maxHeight : "412px",
        overflowY: "auto"

    }
}));

window.id = 0;
export default function Submit() {
    const classes = useStyles();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        gender: '',
        qualification: '',
        city: '',
        submit: [],
        allRecords: []
    }
    )


    function myChangeHandler(event) {

        setState({
            ...state,
            [event.target.id]: event.target.value
        });
        //console.log(state, "changing of value in progress")
    }

    function submitRegForm(event) {
        event.preventDefault();

        window.id++;

        setState({
            ...state,
            allRecords: [...state.allRecords,
            {
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                id: window.id

            }
            ]
        });
        console.log(state);
    }

    return (
        <>
            <Grid container component="main" className={classes.todo_time_comp_con}
                justify="center">
            </Grid>

            <Grid container component="main" className={classes.root}
                justify="center">
                <CssBaseline />
                {/* className={classes.image} */}
                <Grid item xs={false} sm={12} md={12}></Grid>
                <Grid item xs={false} sm={4} md={7}>
                     <div className={classes.listContainer}>
                        <ListData state={state} />
                     </div>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <EventNoteIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Registration Form
                           </Typography>
                            <form className={classes.form} onSubmit={submitRegForm}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="standard"
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            onChange={myChangeHandler}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="standard"

                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                            onChange={myChangeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            id="email"
                                            name="email"
                                            label="Email"
                                            autoComplete="email"
                                            onChange={myChangeHandler}
                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <FormControl className={classes.formControl} fullWidth>
                                            <InputLabel>  Gender</InputLabel>
                                            <Select
                                                native
                                                id="gender"
                                                name="gender"
                                                variant="standard"
                                                onChange={myChangeHandler}
                                            >
                                                <option value="" />
                                                <option value='male'>Male</option>
                                                <option value='female'>Female</option>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="I agree to terms and conditions click here"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit} >Submit</Button>
                            </form>
                        </div>
                    </Container >
                </Grid>
            </Grid>
        </>
    );
}