import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import './Comment.css'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: grey[900],
      backgroundColor: grey[300],
    },
  }));


  const defaultProps = {
    bgColor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
  };

const Comments = (props) => {
    const classes = useStyles();
    const {name, email, body, id} = props.comment;
    
    return (
        <div style={{ width: '100%' }}>
           <Box display="flex" justifyContent="center" ml={20} p={1} bgColor="background.paper">
              <Grid container>
                 <Grid item xs={10}>
                 <Paper className={classes.paper}>

                 {/* picture direct load from random user for comment section */}
                 <img src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt="" id="imageStyle"/>

                <h3>{name}</h3>
                <p>{email}</p>
                <p>{body}</p>
                </Paper>
                </Grid>
                <Box borderBottom={1} {...defaultProps}/>
              </Grid>
           </Box>
        </div>
    );
};

export default Comments;