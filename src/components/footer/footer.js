import {Grid, IconButton, Link, makeStyles} from "@material-ui/core"
import {Copyright, GitHub, Instagram, LinkedIn} from "@material-ui/icons"

export const Footer = () => {
  const styles = useStyles()

  return (
    <Grid
      container
      justifyContent='center'
      className={styles.box}
    >
      <Link href='https://www.linkedin.com/in/syrgak-ravshanbek-uulu-bb43821ab/'>
        <IconButton >
          <LinkedIn fontSize="large"/>
        </IconButton>
      </Link>

      <Link href='https://www.instagram.com/s_yrga_k/'>
        <IconButton>
          <Instagram fontSize="large"/>
        </IconButton>
      </Link>

      <Link href='https://github.com/SyrgakRavshanbekUulu'>
        <IconButton>
          <GitHub fontSize="large"/>
        </IconButton>
      </Link>

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
