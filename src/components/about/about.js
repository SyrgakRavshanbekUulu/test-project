import {Avatar, Grid, Zoom} from "@material-ui/core"
import {Devices, DynamicFeed, EmojiObjects, Speed} from "@material-ui/icons"
import {SkillsRender} from "./skills-render"
import {useStyles} from "./styles"

import image from '../../image/syrgakImage.jpg'
import {ExcellenceRender} from "./excellence-render"


export const About = () => {
  const styles = useStyles()

  return (
    <div className={styles.box}>
      <h1 className={styles.title}>О Меня</h1>
      <Grid container justifyContent="space-around">
        <ExcellenceRender
          icon={<Speed />}
          title={'Быстрый'}
          text={
            `Моя первоочередная задача - <br />
              быстрая загрузка и <br />
              взаимодействие без задержек`
          }
        />

        <ExcellenceRender
          icon={<Devices />}
          title={'Отзывчивый'}
          text={
            `Мои макеты будут работать<br />
              на любом устройстве, <br />
              большом или маленьком`
          }
        />

        <ExcellenceRender
          icon={<EmojiObjects />}
          title={'Интуитивно понятный'}
          text={
            `Моя первоочередная задача - <br />
              быстрая загрузка и <br />
              взаимодействие без задержек`
          }
        />

        <ExcellenceRender
          icon={<DynamicFeed />}
          title={'Динамический'}
          text={
            `Веб-сайты не обязательно<br />
              должны быть статичными, <br />
              я люблю оживлять страницы.`
          }
        />
        <Zoom in={true}>
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
        </Zoom>


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


