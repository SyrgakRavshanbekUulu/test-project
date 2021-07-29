import {IconButton, Grid} from "@material-ui/core"
import {useStyles} from "./styles"

export const ExcellenceRender = (props) => {
  const styles = useStyles()
  return (
    <Grid item xs={3}>
      <div className={styles.iconBox}>
        <IconButton className={styles.buttons} color="inherit">
          {props.icon}
        </IconButton>
      </div>
      <div className={styles.text}>
        <h3>{props.title}</h3>
        {props.text}
      </div>
    </Grid>
  )
}
