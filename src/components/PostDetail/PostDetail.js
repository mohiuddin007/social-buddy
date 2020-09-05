import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Comments from '../Comments/Comments';


// Material UI style functions
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: grey[900],
      backgroundColor: grey[300],
    },
  }));


  const defaultProps = {
    bgColor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
  };

//PostDetail component
const PostDetail = () => {
    const classes = useStyles();

    //load specific post data by route parameter
    const {postId} = useParams();
    const [postDetail, setPostDetail] = useState([])
    const {title, body} = postDetail;

    useEffect(() =>{
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(postUrl)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    },[])
    
    //load comment data
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        const commentUrl = `https://jsonplaceholder.typicode.com/comments`;
        fetch(commentUrl)
        .then(res => res.json())
        .then(data => setComments(data.slice(0, 10)))
    },[])

  
   

    return (
        <div style={{ width: '100%' }}>
          <Box display="flex" justifyContent="center" ml={20} p={1} bgColor="background.paper">
           <Grid container>
            <Grid item xs={10}>
              <Paper className={classes.paper}>
              <h3>{title}</h3>
              <p>{body}</p>
              </Paper>
            </Grid>
            <Box borderLeft={2} {...defaultProps}/>
           </Grid>
          </Box>

          <div>
              <Grid container>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <h1>Comments:</h1>
                    </Paper>
                </Grid>
              </Grid>
               {
                 comments.map(comment => <Comments comment={comment} />)
               }
          </div>
        </div>
    );
};

export default PostDetail;