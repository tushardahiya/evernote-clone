import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../helpers";

class SidebarItemComponent extends Component {
  // n is note and i is index
  selectNote = (n, i) => this.props.selectNote(n, i);

  deleteNote = (note) => {
    if (window.confirm(`Are you sure you want to delete : ${note.title}`)) {
      this.props.deleteNote(note);
    }
  };

  render() {
    const { index, note, classes, selectedNoteIndex } = this.props;

    return (
      <div key={index}>
        <ListItem
          className={classes.ListItem}
          selected={selectedNoteIndex === index}
          alignItems="flex-start"
        >
          <div
            className={classes.textSection}
            onClick={() => this.selectNote(note, index)}
          >
            <ListItemText
              primary={note.title}
              secondary={removeHTMLTags(note.body.substring(0, 30)) + "..."}
            ></ListItemText>
          </div>
          <DeleteIcon
            onClick={() => this.deleteNote(note)}
            className={classes.DeleteIcon}
          ></DeleteIcon>
        </ListItem>
      </div>
    );
  }
}

export default withStyles(styles)(SidebarItemComponent);
