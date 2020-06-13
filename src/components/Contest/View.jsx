import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";

import { blue } from "@material-ui/core/colors";

import {
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  story: {
    color: blue
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ContestView() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        Конкурс матерных частушек
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Модератор:{" "}
        <Link href="#" onClick={preventDefault}>
          <PersonIcon fontSize="small" />
          Бутербродъ
        </Link>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Самый народный конкурс портала
      </Typography>
      <List>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Рассказ о кукушках" classame={classes.story} />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Шизовый уклад един" classame={classes.story} />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Целковый" classame={classes.story} />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Петрушка" classame={classes.story} />
        </ListItemLink>
      </List>
    </div>
  );
}
