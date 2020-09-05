import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: grey[900],
      backgroundColor: grey[400],
    },
  }));


  const defaultProps = {
    bgColor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
  };

//post component
const Post = (props) => {
    const classes = useStyles();

    const {title, body, id} = props.post; 
    const history = useHistory();

    const handleClick = (postId) => {
      const path = `/post/${postId}`;
      history.push(path);
    }
    return (
        <div style={{ width: '100%' }}>
          <Box display="flex" justifyContent="center" ml={20} p={1} bgColor="background.paper">
            <Grid container>
              <Grid item xs={10}>
                <Paper className={classes.paper}>
                 <h3>{title}</h3>
                 <p>{body}</p>
                <Button 
                  variant="contained" color="primary"
                  onClick={()=>handleClick(id)}>
                  See more
                </Button>
               </Paper>
              </Grid>
             <Box borderBottom={1} {...defaultProps}/>
           </Grid>
          </Box>
        </div>
    );
};

export default Post;