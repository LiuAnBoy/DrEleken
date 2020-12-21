import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import intro from "../constants/intro"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function SimpleCard() {
  const classes = useStyles()

  return (
    <section className="intro-section">
      <div className="intro-card-group">
        {intro.map(i => {
          const { id, icon, title, text, button } = i
          return (
            <Card className="intro-card" key={id}>
              <CardContent>
                <div className={`intro-icons intro-icons-${id}`}>{icon}</div>
                <div className="intro-title">{title}</div>
                <Typography variant="h6" className="intro-content">
                  {text}
                </Typography>
                <Button size="large" className="intro-btn">{button}</Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
