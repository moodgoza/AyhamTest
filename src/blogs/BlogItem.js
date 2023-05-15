import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AddIcCall, KeyboardArrowDown, KeyboardArrowUp, UpcomingOutlined } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";

export default function BlogItem({ blog }) {

  const [expanded, setExpanded] = React.useState(true);
  const [direction, setDirection] = React.useState("rotate(0deg)");

 
  const [votes, setVotes] = React.useState(blog.votes);

  const onUpVoteHandler = () => {
    setVotes((prevState) => {
      return ++prevState;
    })
  }

  const onDownVoteHandler = () => {
    setVotes((prevState) => {
      return --prevState;
    })
  }

  return (
    <Card className="border" sx={{ maxWidth: '80%', marginBottom: '20px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {blog.user.toUpperCase()[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={blog.title}
        subheader={blog.date}
      />
      <hr/>
      <CardContent>
        <Typography variant="body2" color="text.primary" fontFamily="Monospace" fontSize="18px">
          {blog.content}
        </Typography>
      </CardContent>

      
      <CardContent className="d-flex flex-row-reverse justify-content-start"  >
      <Tooltip style={{marginLeft:"5px", backgroundColor: "#FF6C33"}} title="Down Vote">
        <Fab  variant='extended' onClick={onDownVoteHandler}>
          <KeyboardArrowDown/>
        </Fab>
        </Tooltip>
        <strong>{votes}</strong>
        <Tooltip style={{backgroundColor:"#19E474"}} title="Up Vote">
        <Fab variant='extended' onClick={onUpVoteHandler}>
          <KeyboardArrowUp/>
        </Fab>
        </Tooltip>
      </CardContent>
    </Card>
  );
}