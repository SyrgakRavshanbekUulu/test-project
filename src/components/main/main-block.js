import {Button, Grid, makeStyles} from "@material-ui/core"
import {Link} from "react-router-dom"
export const MainBlock = () => {
  const styles = useStyles()

  return (
    <Grid className={styles.main} container justifyContent="center">

      <Grid item container xs={12} justifyContent="center">
        <h1 className={styles.text}>
          Hello, I am
          <span className={styles.name}> Syrgak Ravshanbek uulu</span>.<br />
          I am Frontend React Js/Typecsript developer.
        </h1><br />
        <Grid item container xs={12} justifyContent="center">
          <Link to='/projects' style={{textDecoration: 'none'}}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
            >
              View my work
            </Button>
          </Link>

        </Grid>
      </Grid>


    </Grid>
  )
}

const useStyles = makeStyles({
  '@keyframes bgcolor': {
    '0%': {
      backgroundColor: '#2018a8',
    },
    '50%': {
      backgroundColor: '#47E42F',
    },
    '100%': {
      backgroundColor: '#E1E42F',
    },
  },
  main: {
    alignItems: 'center',
    height: '100vh',
    background: '#2018a8',
    animation: '$bgcolor 4s infinite',
  },
  text: {
    marginBottom: '40px',
    textAlign: 'center',
  },
  name: {
    color: 'red',
  },
})
