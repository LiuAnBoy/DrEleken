import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ClearIcon from "@material-ui/icons/Clear";
import NavLink from "../constants/navlink";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
  icon: {
    fontSize: "38px",
  },
  listicon: {
    margin: "5px 0px 0 155px",
  },
  text: {
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    "&:hover": {
      color: "#00b3b3",
    },
  },
  reservationBtn: {
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    fontSize: "0.9vw",
    fontWeight: 400,
    backgroundColor: "#00cccc",
    borderRadius: "6px",
    cursor: "pointer",
    padding: "10px 20px",
    margin: 0,
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#00b3b3",
    },
  },
});

const Sidelink = ({ handleOpen, open }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Drawer anchor="right" open={open} onClose={handleOpen}>
        <div onClick={handleOpen} className={classes.listicon}>
          <ClearIcon className={classes.icon} />
        </div>
        <NavLink onKeydown={handleOpen} onClick={handleOpen}/>
      </Drawer>
    </Fragment>
  );
};

export default Sidelink;
