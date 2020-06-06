import React from 'react';
import Grid from '@material-ui/core/Grid';

const Bar = (props)=>{
    const val = props.height+'em';
    return(
        <Grid style={{marginLeft:'0.1em',width:"0.1em",height:val,backgroundColor:"#14213d"}} item>

        </Grid>
    )
}

export default Bar;