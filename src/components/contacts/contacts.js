import {Button, Grid, makeStyles, TextField} from "@material-ui/core"

export const Contacts = () => {
  const styles = useStyles()

  return (
    <Grid
      container
      className={styles.box}
      direction="column"
      alignItems="center"
    >
      <h1>Контакты</h1>
      <h3 style={{color: 'red', margin: 'auto'}}>
        syrgakravshanbekuulu@gmail.com
      </h3>
      <h3 style={{color: 'red', margin: 'auto'}}>
        +996 202 08-71-74
      </h3>
      <h2>У вас есть вапросы?</h2>
      <form>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={styles.form}
        >
          <TextField variant="filled" label="Your name" />
          <TextField variant="filled" label="Your email" />
          <TextField
            multiline
            placeholder="Your message"
            maxRows={4}
            minRows={4}
            variant="filled"
          />
          <Button color='secondary' variant='contained'>Send</Button>
        </Grid>
      </form>
    </Grid>
  )
}

const useStyles = makeStyles({
  box: {
    margin: '50px',
    paddingBottom: '50px',

    '& > h1': {
      fontSize: '48px',
    },
  },
  form: {
    '& > div': {
      marginTop: '20px',
      width: '400px',
    },
    '& > button': {
      marginTop: '20px',
    },
  },
})
