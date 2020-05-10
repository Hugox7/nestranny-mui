import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
      maxWidth: 400,
      margin: '2vw',
      '& .MuiCardActions-root': {
          padding: '15px',
      }
    },
    media: {
      height: 200,
    },
  });