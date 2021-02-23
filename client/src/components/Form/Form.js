import React ,{useState,useEffect} from 'react';
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import useStyles from "./styles";
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import {createPost,updatePost} from "../../actions/posts";
const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ name: '', caption: '', url: ''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ name: '', caption: '', url: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0 || post==null) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Create'} Meme</Typography>
                {currentId ? <TextField name="name" 
                variant="outlined" 
                label="Name" 
                fullWidth 
                disabled                                         
                value={postData.name} 
                onChange={(e) => setPostData({...postData,name:e.target.value})} /> : <TextField name="name" 
                variant="outlined" 
                label="Name" 
                fullWidth                                          
                value={postData.name} 
                onChange={(e) => setPostData({...postData,name:e.target.value})} />}
            <TextField name="caption" 
                variant="outlined" 
                label="Caption" 
                fullWidth                            
                value={postData.caption} 
                onChange={(e) => setPostData({...postData,caption:e.target.value})} />
            <TextField name="url" 
                variant="outlined" 
                label="ImgUrl" 
                fullWidth                            
                value={postData.url} 
                onChange={(e) => setPostData({...postData,url:e.target.value})} />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                Submit
            </Button>
            <Button  variant="contained" color="secondary" size="small" onClick={clear}  fullWidth>
                Clear
            </Button>
            </form>
        </Paper>
    );
}

export default Form;
