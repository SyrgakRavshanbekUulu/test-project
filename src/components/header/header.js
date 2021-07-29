import {AppBar, makeStyles, Toolbar, Button} from "@material-ui/core"
import {Link} from "react-router-dom"

export const Header = () => {
  const styles = useStyles()

  return (
    <AppBar className={styles.appBar}>
      <Toolbar className={styles.toolBar}>
        <Link to='/' style={{textDecoration: 'none'}}>
          <Button variant="text" size="large">Home</Button>
        </Link>
        <Link to='/about' style={{textDecoration: 'none'}}>
          <Button variant="text" size="large">About</Button>
        </Link>
        <Link to='/projects' style={{textDecoration: 'none'}}>
          <Button variant="text" size="large">Portfilio</Button>
        </Link>
        <Link to='/contacts' style={{textDecoration: 'none'}}>
          <Button variant="text" size="large">Contact</Button>
        </Link>
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
