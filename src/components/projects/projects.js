import {Grid, makeStyles, Button} from "@material-ui/core"
import {useState} from "react"
import {ern, floristman, stadion} from "./project-data"
import {ProjectItem} from './projectItem'

export const Projects = () => {
  const styles = useStyles()
  const projects = [ern, floristman, stadion]
  const [proj, setProj] = useState(projects)
  const hundleClick = (str = 'all') => {
    if (str === 'all') {
      setProj(projects)
    } else {
      setProj(projects.filter((el) => {
        return el.keys.includes(str)
      }))
    }
  }

  return (
    <Grid container justifyContent='center' className={styles.box}>
      <h1>Проекты</h1>
      <Grid
        item
        xs={12}
        container
        justifyContent="center"
        className={styles.buttons}
      >
        <Button
          variant='contained'
          color='secondary'
          onClick={() => hundleClick()}
        >All</Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => hundleClick('react')}
        >React</Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => hundleClick('javascript')}
        >Javascript</Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => hundleClick('page-making')}
        >Page making</Button>
      </Grid>
      <Grid container justifyContent="center">
        {proj.map((project) => {
          return (
            <ProjectItem
              key={project.name}
              img={project.image}
              name={project.name}
              label={project.label}
            />
          )
        })}
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
  buttons: {
    '& > button': {
      marginRight: '40px',
    },
  },
})
