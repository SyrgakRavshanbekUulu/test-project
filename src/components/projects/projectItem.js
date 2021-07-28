import React, {useEffect, useState} from "react"
import {
  makeStyles,
  Button,
  Modal,
  Slide,
  Paper,
  Grid,
} from "@material-ui/core"

export const ProjectItem = (props) => {
  const styles = useStyles()
  const [state, setState] = useState(false)
  const [styleBox, setStyleBox] = useState()
  const [open, setOpen] = useState(false)
  console.log(open)

  useEffect(() => {
    setStyleBox(!state ? <RenderBox /> : <RenderBoxHover />)
  }, [state, open])

  const RenderBox = () => {
    return (
      <div className={styles.box}>
        <img src={props.img.main} className={styles.img}/>
      </div>
    )
  }

  const RenderBoxHover = () => {
    return (
      <div className={styles.boxHover}>
        <h1>{props.name}</h1>
        <Button
          variant="outlined"
          color='primary'
          onClick={() => setOpen(true)}
        >Подробно</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          BackdropProps={{timeout: 300}}
        >
          <Slide in={open}>
            <Paper elevation={3}
              style={{width: '80%', margin: 'auto', marginTop: '10%'}}>
              <Grid container justifyContent="space-around">
                <Grid item>
                  <img src={props.img.home} className={styles.img}/>
                  <h4>{props.label.home}</h4>
                </Grid>

                <Grid item>
                  <img src={props.img.page1} className={styles.img}/>
                  <h4>{props.label.page1}</h4>
                </Grid>

                <Grid item>
                  <img src={props.img.page2} className={styles.img}/>
                  <h4>{props.label.page2}</h4>
                </Grid>

              </Grid>
            </Paper>
          </Slide>
        </Modal>
      </div>
    )
  }

  return (
    <div
      onMouseEnter={() => {
        setState(true)
      }}
      onMouseLeave={() => {
        setState(false)
      }}
    >
      {styleBox}

    </div>
  )
}

const box = {
  width: '400px',
  height: '400px',
  marginTop: '40px',
  borderRadius: '10px',
  textAlign: 'center',
}
const useStyles = makeStyles({
  box: {
    ...box,
    border: 'solid 2px blue',
    '& > img': {
      paddingTop: '45px',
    },

  },
  boxHover: {
    ...box,
    border: 'solid 2px green',

    '& > h1': {
      paddingTop: '100px',
    },
    "& > button": {
      marginTop: '40px',
    },
  },
  img: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
  },
})
