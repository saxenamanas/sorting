import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';

const arcBlue = '#000000';
const arcOrange = '#E5E5E5';


export default createMuiTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange
          },
          primary: {
            main: arcBlue
          },
          secondary: {
            main: arcOrange
          }
    },
  });

