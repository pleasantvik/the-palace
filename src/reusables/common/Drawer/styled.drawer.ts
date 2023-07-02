import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {},
  header: {
    padding: '11px 24px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    marginBotton: '12em',
    position: 'sticky',
    top: 0,
    zIndex: 4,
    background: 'white',
    '& .MuiGrid-item': {
      paddingTop: '0px !important',
    },
  },
  btn: {
    padding: '1em 40px',
    position: 'sticky',
    bottom: 0,
    background: '#F5F7FA',
    zIndex: 4,
    '& .MuiButton-text': {
      color: '#0050C8',
      background: '#F0F5FF',
      '&:hover': {
        background: '#B3CDFF',
      },
    },
    '& .MuiGrid-item': {
      paddingTop: '0px !important',
    },
  },
  drawer: {
    '& .MuiPaper-root': {
      width: '500px',
    },
  },
  progressWrapper: {
    width: '100%',
    padding: '.1em 2em',
    alignItems: 'center',
    display: 'flex',
  },
  formWrapper: {
    marginTop: '2.5em',
  },
})

export default useStyles
