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

export default function BlogItem({ blogContent }) {

  const [expanded, setExpanded] = React.useState(true);
  const [direction, setDirection] = React.useState("rotate(0deg)");

  const handleExpandClick = () => {
    if (expanded === true)
      setDirection("rotate(0deg)")
    else setDirection("rotate(180deg)")
    console.log(expanded, direction);
    setExpanded(true);
  };

  return (
    <Card sx={{ maxWidth: '70%', marginBottom: '20px', marginLeft: '100px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* {blog.group.coach.userName.toUpperCase()[0]} */}{"G"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={"AI technologies "}
        subheader="AUG 22, 2022"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          AI (Artificial Intelligence) technologies are computer programs and algorithms that simulate human intelligence and can perform tasks that typically require human cognition, such as learning, problem-solving, perception, and decision-making. Some of the popular AI technologies are:

          Machine Learning: It is a subset of AI that uses statistical methods and algorithms to allow computer systems to automatically improve their performance with experience.

          Natural Language Processing (NLP): It involves processing and analyzing human language, allowing computers to understand, interpret, and generate natural language.

          Computer Vision: It uses algorithms to analyze and understand digital images and videos, allowing machines to see and recognize objects, patterns, and visual cues.

          Deep Learning: It is a type of machine learning that uses neural networks to learn and improve from data, allowing computers to recognize complex patterns and make decisions based on them.
        </Typography>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* {blogContent.map((bc) => (<div>{bc.content}</div>))} */}
        </CardContent>
      </Collapse>
    </Card>
  );
}