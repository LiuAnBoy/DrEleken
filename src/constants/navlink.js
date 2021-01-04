import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  btn: {
    fontFamily: "Roboto, sans-serif",
    color: "#1a1a1a",
    fontSize: "0.9vw",
    fontWeight: 400,
    cursor: "pointer",
    "&:hover": {
      color: "#00b3b3",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1vw",
      textAlign: "center",
      fontSize: 20,
      margin: "15px 0",
    },
  },
  rBtn: {
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    fontSize: "0.9vw",
    fontWeight: 400,
    backgroundColor: "#00cccc",
    borderRadius: "6px",
    cursor: "pointer",
    padding: "10px 20px",
    margin: 0,
    "&:hover": {
      backgroundColor: "#00b3b3",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1vw",
      textAlign: "center",
      fontSize: 18,
      margin: "15px auto",
      width: "60%",
    },
  },
}));

const NavLink = ({ Display, onKeydown, onClick }) => {
  const classes = useStyles();

  const handleClick = (e, index) => {
    const validate = () => {
      if (index === 0) {
        return "About-Us";
      }
      if (index === 1) {
        return "Child-Face-Control";
      }
      if (index === 2) {
        return "Our-Group";
      }
      if (index === 3) {
        return "Assessment-List";
      }
      if (index === 4) {
        return "Contact-Us";
      }
    };

    const anchor = document.getElementById(validate());
    const headerOffset = 90;
    const elementPosition = anchor.offsetTop
    const offsetPosition = elementPosition - headerOffset;

    if (anchor) {
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className={Display} onKeyDown={onKeydown} onClick={onClick}>
      {links.map((link, index) => {
        const { id, text } = link;
        return (
          <div
            key={id}
            className={id === 5 ? classes.rBtn : classes.btn}
            onClick={e => handleClick(e, index)}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};

export const links = [
  {
    id: 1,
    text: "關於肯恩象醫生",
  },
  {
    id: 2,
    text: "兒童顏值管理",
  },
  {
    id: 3,
    text: "我們的團隊",
  },
  {
    id: 4,
    text: "自主檢測",
  },
  {
    id: 5,
    text: "立即預約",
  },
];

export default NavLink;
