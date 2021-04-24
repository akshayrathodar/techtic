import React from 'react';

// Elements 
import {Heading1} from '../Elements/heading1';
import {SimpleCard} from '../Elements/cardui';
import {DatePickers} from '../Elements/date';

// End Elem

//Start Material UI
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
// End Mat

import {getWebSiteData} from '../Apis/callApi';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sitedata:[],
            startdate:'',
            enddate:'',
            filChat:0,
            filMiss:0,
            filTotal:0
        }
        
    }

    componentDidMount() {
        getWebSiteData().then((sitedata) => {
            this.setState({sitedata})
        }).catch((error) => {
            console.log(error);
        })
    }

    // Get Input From Date
    onDateChange = (ev) => {
        this.setState({[ev.target.name]:ev.target.value});
    }

    // To Filter Data on Click
    filterData = (e) => {
        let startDate = new Date(this.state.startdate).getTime();
        let endDate = new Date(this.state.enddate).getTime();
        
        let resultData = [];
        if(this.state.sitedata.length > 0) {
            if(startDate !== "" && endDate !== "" && !isNaN(startDate) && !isNaN(endDate)) {
                let totalofChat = 0;
                let totalofMissChat = 0;
                let filterLength = 0;
                resultData = this.state.sitedata.filter((item) => {
                    let tempTime = new Date(item.date).getTime();
                    totalofChat = totalofChat + item.chats;
                    totalofMissChat = totalofMissChat + item.missedChats;
                    return tempTime >= startDate && tempTime <= endDate;
                })
                filterLength = resultData.length;
                this.setState({sitedata:resultData,filTotal:resultData.length,filChat:totalofChat/filterLength,filMiss:totalofMissChat/filterLength});
            } else {
                alert('Please Select Proper Date Before Click');
            }    
        } else {
            alert('You Dont Have Data To Filter');
        }
    }

    render(){
        console.log(this.state);
        return( 
            <>  
                <Heading1 title="Techtic Demo" />
                <Divider/>
                <Grid container 
  alignItems="center"
  justify="center">
                    <Grid item><DatePickers name="startdate" label="Start" onchangeEvent={this.onDateChange}/></Grid>
                    <Grid item><DatePickers name="enddate" label="End" onchangeEvent={this.onDateChange}/></Grid>
                    <Grid item> <Button variant="contained" color="primary" onClick={this.filterData}>Filter Data</Button></Grid>
                </Grid>
                <Grid container 
                alignItems="center"
                justify="center">
                    <Grid item>{this.state.filChat > 0 && <h2>Avarage Of Filtered Chat is {this.state.filChat}</h2>}</Grid>
                    
                </Grid>
                <Grid container 
                alignItems="center"
                justify="center">
                <Grid item>{this.state.filMiss > 0 && <h2>Avarage Of Filtered Missed Chat is {this.state.filMiss}</h2>}</Grid>
                </Grid>
                <Divider/>
                <h2>Total Records : {this.state.sitedata.length}</h2>
                <Grid container>
                    {this.state.sitedata.map((datas,index) => {
                        
                        return <Grid item><SimpleCard webid={datas.websiteId} date={datas.date} chats={datas.chats}  missed={datas.missedChats} /></Grid>
                    })}
                </Grid>

            </>
        );
    }
}



export default Main;