import {Button, Grid, makeStyles} from "@material-ui/core"
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
          <Button
            variant="outlined"
            color="secondary"
            size="large"
          >
            View my work
          </Button>
        </Grid>
      </Grid>


    </Grid>
  )
}

const useStyles = makeStyles({
  main: {
    alignItems: 'center',
    height: '100vh',
    background: '#2018a8',
  },
  text: {
    marginBottom: '40px',
    textAlign: 'center',
  },
  name: {
    color: 'red',
  },
})
