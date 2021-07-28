import {AppBar, makeStyles, Toolbar, Button} from "@material-ui/core"

export const Header = () => {
  const styles = useStyles()

  return (
    <AppBar className={styles.appBar}>
      <Toolbar className={styles.toolBar}>
        <Button variant="text">Home</Button>
        <Button variant="text">About</Button>
        <Button variant="text">Portfilio</Button>
        <Button variant="text">Contact</Button>
        <Button variant="text">Resume</Button>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles({
  appBar: {
    position: 'static',
  },
  toolBar: {
    justifyContent: 'space-evenly',
  },
})
