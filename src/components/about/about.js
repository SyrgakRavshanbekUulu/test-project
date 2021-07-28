import {Avatar, Grid, IconButton, makeStyles} from "@material-ui/core"
import {Devices, DynamicFeed, EmojiObjects, Speed} from "@material-ui/icons"

import image from '../../image/syrgakImage.jpg'

export const About = () => {
  const styles = useStyles()

  const SkillsRender = (props) => {
    return (
      <div className={styles.skillBox}>
        <div style={{width: `${props.step}%`, backgroundColor: '#09e126'}}>
          <div className={styles.skillName}>
            <h4>{props.name}</h4>
          </div>
        </div>

        <span className={styles.skillStep}>{props.step}</span>
      </div>
    )
  }

  return (
    <div>
      <h1 className={styles.title}>ABOUT</h1>
      <Grid container justifyContent="space-around">
        <Grid item xs={3}>
          <div className={styles.iconBox}>
            <IconButton className={styles.buttons} color="inherit">
              <Speed />
            </IconButton>
          </div>
          <div className={styles.text}>
            <h3>Быстрый</h3>
            Моя первоочередная задача - <br />
            быстрая загрузка и <br />
            взаимодействие без задержек
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={styles.iconBox}>
            <IconButton className={styles.buttons} color="inherit">
              <Devices />
            </IconButton>
          </div>
          <div className={styles.text}>
            <h3>Отзывчивый</h3>
            Мои макеты будут работать<br />
             на любом устройстве, <br />
             большом или маленьком
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={styles.iconBox}>
            <IconButton className={styles.buttons} color="inherit">
              <EmojiObjects />
            </IconButton>
          </div>
          <div className={styles.text}>
            <h3>Интуитивно понятный</h3>
            Моя первоочередная задача - <br />
            быстрая загрузка и <br />
            взаимодействие без задержек
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={styles.iconBox}>
            <IconButton className={styles.buttons} color="inherit">
              <DynamicFeed />
            </IconButton>
          </div>
          <div className={styles.text}>
            <h3>Динамический</h3>
            Веб-сайты не обязательно<br />
             должны быть статичными, <br />
             я люблю оживлять страницы.
          </div>
        </Grid>
        <Grid item xs={6} style={{marginTop: '60px'}}>
          <Avatar alt="syrgak" src={image} className={styles.avatar}/>
          <div className={styles.text}>
            <h3>Кто это чел?</h3>
            Я Фронтенд React(js/typecript) разработчик.<br />
            Я закончила университет Манас. <br />
            Для UI элементов часто
             использую Material-ui.
          </div>
        </Grid>

        <Grid item xs={6} style={{marginTop: '60px'}}>
          <SkillsRender name="React" step={80} />
          <SkillsRender name="Javascript" step={80} />
          <SkillsRender name="Typescritp" step={70} />
          <SkillsRender name="CSS" step={60} />
          <SkillsRender name="Html" step={60} />
          <SkillsRender name="C++/C#" step={80} />
        </Grid>
      </Grid>
    </div>

  )
}

const useStyles = makeStyles({
  iconBox: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    textAlign: 'center',
    backgroundColor: '#22EC14',
    margin: 'auto',
    marginBottom: '10px',
  },
  title: {
    textDecoration: 'underline',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '48px',
    marginBottom: '100px',
  },
  buttons: {
    transform: 'scale(2)',
    paddingTop: '30%',
  },
  text: {
    fontSize: '20px',
    textAlign: 'center',
    color: '#294B2E',
    '& > h3': {
      margin: '10px 0',
    },
  },
  avatar: {
    margin: 'auto',
    marginTop: '40px',
    width: '200px',
    height: '200px',
  },
  skillBox: {
    width: '80%',
    height: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#d8d8d8',
    color: '#032507',
    marginTop: '30px',
  },
  skillName: {
    width: '80px',
    height: '100%',
    backgroundColor: '#0C821B',
    textAlign: 'center',
    '& > h4': {
      margin: '0',
      paddingTop: '7px',
    },
  },
  skillStep: {
    paddingTop: '7px',
    paddingRight: '3px',
  },
})
