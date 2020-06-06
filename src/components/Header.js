import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { Toolbar, Divider } from '@material-ui/core';
import {ThemeProvider,makeStyles} from '@material-ui/core/styles';
import theme from '../Theme';
import Grid from '@material-ui/core/Grid';
import Bar from './Bar';

const n = 400;

const useStyles = makeStyles(theme=>({
    cushion:{
        ...theme.mixins.toolbar,
    }
}));

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

const generateArray = () => {
    var i;
    const arr = [];
    for (i=0;i<n;i++){
        arr.push(Math.floor(getRandomArbitrary(10,50)));
    }
    return arr;
}


const Header = () => {
    const classes = useStyles();
    const [arrayList,setArrayList] = useState(generateArray());

    const startSort = () =>{
        var i,j;
        const arr = arrayList;
        for(i=0;i<n;i++){
            for(j=0;j<n-1-i;j++){
                if(arr[j]>arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    setArrayList(arr);
                }
            }
        }
        console.log('setting');
    }


    const newArray = () => {
        setArrayList(generateArray());
    }
    return(
        <React.Fragment>
            <ThemeProvider theme={theme}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Tab label="Create a new array" onClick={()=>newArray()}/>
                    <Tab style={{marginLeft:"auto"}} label="Bubble Sort"/>
                    <Tab label="Selection Sort"/>
                    <Tab label="Start Sort" onClick={()=>startSort()}/>
                </Toolbar>
            </AppBar>
            <div style={{marginTop:"5em"}}/>
            <Grid container justify="center">
            {arrayList.map((num,index)=>{
                return <Bar key={index} height={num}/>
            })}
            </Grid>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default Header;