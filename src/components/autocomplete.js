import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

import {
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const AutoComplete = ({
  items,
  filterItem,
  selectItem,
  displayItem,
  clearItem
}) => {
  const classes = useStyles();
  const [term, setTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const handleChange = e => {
    e.preventDefault();
    setTerm(e.target.value);
    clearItem();
  };
  const handleClick = itemId => {
    // setTerm("");
    setFilteredItems([]);
    selectItem(itemId);
  };
  useEffect(() => {
    if (term.length > 0) {
      const values = [];
      items.forEach((v, k, map) => values.push(v));
      const filteredResults = values
        .filter(item => filterItem(item, term.toLowerCase()))
        .map(item => {
          return { key: item.id, value: displayItem(item) };
        });
      setFilteredItems(filteredResults);
    } else {
      setFilteredItems([]);
    }
  }, [term]);

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={12} md={12} item >
          <TextField
            autoFocus
            name="term"
            value={term}
            placeholder="Enter search term"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid xs={12} md={12} item >
          <List className={classes.root} style={{ overflow: "scroll" }}>
            {filteredItems.length > 0 && filteredItems.map((item, idx) => {
              return (
                <ListItem
                  key={item.key}
                  divider={idx !== filteredItems.length - 1}
                  onClick={() => handleClick(item.key)}
                >
                  <ListItemText primary={item.value}/>
                </ListItem>
              );
              })
            }
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AutoComplete;
