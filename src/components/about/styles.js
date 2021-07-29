import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
  box: {
    margin: '50px 0',
  },
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
