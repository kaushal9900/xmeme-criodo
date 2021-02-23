import React from 'react';
import useStyles from "./styles";
import moment from "moment";
import {Avtar, Divider, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from "@material-ui/core/Grid";
import {useDispatch} from "react-redux";
import {deletePost,likePost} from "../../../actions/posts";
const Post = ({post,setCurrentId}) => {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        
            <Card className={classes.card}>
            <img src={post.url} className={classes.img} />
           
            
            <div className={classes.overlay2}>
                <Button style={{color:'violet'}} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
            <Typography variant="h6" color="textPrimary" component="p">{post.caption}</Typography>                     
            <Typography variant="body2" color="textSecondary">{moment(post.createdAt).fromNow()}</Typography>  
            
            </div>
            <CardContent>
            <Typography variant="body2" color="textSecondary">Creator : {post.name}</Typography> 
            </CardContent>
      
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
        
       
       
    );
}
export default Post;