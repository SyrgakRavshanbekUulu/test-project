import {Grid, IconButton, makeStyles} from "@material-ui/core"
import {Copyright, GitHub, Instagram, LinkedIn} from "@material-ui/icons"

export const Footer = () => {
  const styles = useStyles()

  return (
    <Grid
      container
      justifyContent='center'
      className={styles.box}
    >
      <IconButton >
        <LinkedIn fontSize="large"/>
      </IconButton>

      <IconButton>
        <Instagram fontSize="large"/>
      </IconButton>

      <IconButton>
        <GitHub fontSize="large"/>
      </IconButton>
      <Grid item xs={12}>
        <h2 style={{textAlign: 'center'}}>
          Syrgak Ravshanbek uulu &nbsp;
          <span>
            <Copyright />2021
          </span>
        </h2>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles({
  box: {
    backgroundColor: '#071345',
    padding: '50px 0',
  },
})
