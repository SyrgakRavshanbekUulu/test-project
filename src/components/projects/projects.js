import {Grid, makeStyles, Button} from "@material-ui/core"
import {ern} from "./project-data"
import {ProjectItem} from './projectItem'

export const Projects = () => {
  const styles = useStyles()

  return (
    <Grid container justifyContent='center' className={styles.box}>
      <h1>Проекты</h1>
      <Grid item xs={12} container justifyContent="space-around">
        <Button variant='contained' color='secondary'>All</Button>
        <Button variant='contained' color='secondary'>React</Button>
        <Button variant='contained' color='secondary'>Javascript</Button>
        <Button variant='contained' color='secondary'>Page making</Button>
      </Grid>
      <Grid>
        <ProjectItem img={ern.image} name={ern.name} label={ern.label}/>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles({
  box: {
    margin: '40px auto',
    '& > h1': {
      fontSize: '48px',
    },
  },
})
