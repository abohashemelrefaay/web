import React, { Component } from 'react';
import axios from 'axios';
import './porgak.css'
class Porgak extends Component {

  state={
    c:"",
    infoaprag:[],
    porgak:"",
    convertdate:[],
    aprag:"empty"
  }
  componentDidMount(){
    axios.get("js/profiledata.json").then(file=>this.setState({infoaprag:file.data.infaprag}));
  }

  handelarray=(e)=>{
    this.setState({convertdate:e.target.value.split('-')});
  
    };
  handclick=(e)=>{
    e.preventDefault();
    
    if( +this.state.convertdate[2]>=21 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 3 ){
    this.setState({aprag:"الحمل",c:this.state.infoaprag[0].elhamel})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=20 && +this.state.convertdate[1]=== 4 ){
      this.setState({aprag:"الحمل",c:this.state.infoaprag[0].elhamel})
    }

    else if( +this.state.convertdate[2]>=21 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 4 ){
    this.setState({aprag:"الثور",c:this.state.infoaprag[0].allthoor})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=21 && +this.state.convertdate[1]=== 5 ){
      this.setState({aprag:"الثور",c:this.state.infoaprag[0].allthoor})
    }
    
    else if( +this.state.convertdate[2]>=22 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 5 ){
    this.setState({aprag:"الجوزاء",c:this.state.infoaprag[0].elgawzaa})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=21 && +this.state.convertdate[1]=== 6 ){
      this.setState({aprag:"الجوزاء",c:this.state.infoaprag[0].elgawzaa})
    }
    
    else if( +this.state.convertdate[2]>=22 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 6 ){
    this.setState({aprag:"السرطان",c:this.state.infoaprag[0].elsaratan})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=22 && +this.state.convertdate[1]=== 7 ){
      this.setState({aprag:"السرطان",c:this.state.infoaprag[0].elsaratan})
    }

    else if( +this.state.convertdate[2]>=23 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 7 ){
    this.setState({aprag:"الاسد",c:this.state.infoaprag[0].elasad})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=22 && +this.state.convertdate[1]=== 8 ){
      this.setState({aprag:"الاسد",c:this.state.infoaprag[0].elasad})
    }
    
    else if( +this.state.convertdate[2]>=23 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 8 ){
    this.setState({aprag:"العذراء",c:this.state.infoaprag[0].elazraa})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=22 && +this.state.convertdate[1]=== 9 ){
      this.setState({aprag:"العذراء",c:this.state.infoaprag[0].elazraa})
    }

    else if( +this.state.convertdate[2]>=23 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 9 ){
    this.setState({aprag:"الميزان",c:this.state.infoaprag[0].elmezan})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=22 && +this.state.convertdate[1]=== 10 ){
      this.setState({aprag:"الميزان",c:this.state.infoaprag[0].elmezan})
    }
    
    else if( +this.state.convertdate[2]>=23 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 10 ){
    this.setState({aprag:"العقرب",c:this.state.infoaprag[0].elaaqrap})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=21 && +this.state.convertdate[1]=== 11 ){
      this.setState({aprag:"العقرب",c:this.state.infoaprag[0].elaaqrap})
    }

    else if( +this.state.convertdate[2]>=22 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 11 ){
    this.setState({aprag:"القوس",c:this.state.infoaprag[0].elqous})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=21 && +this.state.convertdate[1]=== 12 ){
      this.setState({aprag:"القوس",c:this.state.infoaprag[0].elqous})
    }

    else if( +this.state.convertdate[2]>=22 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 12 ){
    this.setState({aprag:"الجدي",c:this.state.infoaprag[0].elgady})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=20 && +this.state.convertdate[1]=== 1 ){
      this.setState({aprag:"الجدي",c:this.state.infoaprag[0].elgady})
    }

    else if( +this.state.convertdate[2]>=21 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 1){
    this.setState({aprag:"الدلو",c:this.state.infoaprag[0].eldalo})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=19 && +this.state.convertdate[1]=== 2 ){
      this.setState({aprag:"الدلو",c:this.state.infoaprag[0].eldalo})
    }

    else if( +this.state.convertdate[2]>=20 && +this.state.convertdate[2]<=31 && +this.state.convertdate[1]=== 2 ){
    this.setState({aprag:"الحوت",c:this.state.infoaprag[0].elhout})
    }else if( +this.state.convertdate[2]>=1 && +this.state.convertdate[2]<=20 && +this.state.convertdate[1]=== 3 ){
      this.setState({aprag:"الحوت",c:this.state.infoaprag[0].elhout})
    }
    
    
  
    
  
    
    }

  render(){

  
  return (
    <div className='porgak'>
      <h2>اعرف برجك</h2>
      <div className="cover">
    <form action="">
       <input type="date" id="birthday" name="birthday" className='date' onChange={this.handelarray} />
      <input type="submit" value="search" className="submit" onClick={this.handclick}/>
      </form>
      
      <div className="result">
      <span className="porgname">{this.state.aprag}</span>
      <p className='info' >{this.state.c}</p>
      </div>
      </div>
      </div>
  );
}
}

export default Porgak;
