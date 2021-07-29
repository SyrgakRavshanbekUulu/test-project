import {Zoom} from "@material-ui/core"
import {useStyles} from "./styles"

export const SkillsRender = (props) => {
  const styles = useStyles()
  return (
    <Zoom in={true}>
      <div className={styles.skillBox}>
        <div style={{width: `${props.step}%`, backgroundColor: '#09e126'}}>
          <div className={styles.skillName}>
            <h4>{props.name}</h4>
          </div>
        </div>

        <span className={styles.skillStep}>{props.step}</span>
      </div>
    </Zoom>
  )
}
