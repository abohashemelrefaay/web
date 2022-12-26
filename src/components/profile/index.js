import React, { Component } from 'react';
import axion from 'axios';
import{Profileskills,Profilesection,Profilelist,Profileitem,Span
  ,Skills,Skillsdesc,Bar,Title,Perc,Parent,Parentspan,Profiletitle,Skillstitle,Profiletitlespan,Skillstitlespan}from './style.js'

class  Profile extends Component {
  state={
    profile:[],
    skills:[]
  }
  componentDidMount(){
    axion.get("js/profiledata.json").then(file=>{this.setState({profile : file.data.profile})})
    axion.get("js/profiledata.json").then(file=>{this.setState({skills : file.data.skills})})
  }
  render(){
    const {profile}=this.state
    const {skills}=this.state
    const profilelist = profile.map((profileitem)=>{
      return(
    
        <Profileitem number={profileitem.id} key={profileitem.id}>
        <Span>{profileitem.name}</Span>
        {profileitem.namevalue}<a></a>
       </Profileitem>
        
    
      )
    })
    const skillslist= skills.map((skillitem)=>{
      return(
        <Bar key={skillitem.id}>
            <Title>{skillitem.cours}</Title>
            <Perc>{skillitem.Percentage}</Perc>
            <Parent >
            <Parentspan number={skillitem.id}></Parentspan>
            </Parent>
        </Bar>
      )
    })
  return (
    
    <Profileskills>
        <div className="container">
            <Profilesection>
                <Profiletitle><Profiletitlespan>My </Profiletitlespan>Profile</Profiletitle>
                <Profilelist>
                    {profilelist}
                    <Profileitem>
        <Span>Email</Span>
        <a href="mailto: abohashemelrefaay@gmail.com">Send Email</a>
       </Profileitem>
                    <Profileitem>
        <Span>Website</Span>
        <a href="https://web-blush-theta.vercel.app/">my Website</a>
       </Profileitem>
                </Profilelist>
            </Profilesection>
            
            <Skills>
                <Skillstitle>Some <Skillstitlespan>skills</Skillstitlespan></Skillstitle>
                <Skillsdesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </Skillsdesc>
               {skillslist}
            </Skills>
        </div>
    </Profileskills>
  );
  }
}


export default Profile;
