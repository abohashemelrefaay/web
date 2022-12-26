import React, { Component } from 'react';
import axios from 'axios';

import  {Workcomp,Movingcover, Worktitle,Span,Part,Icon,Parttitle,Line,Partdesc,Moveright,Moveleft,Link} from"./style.js"

class Work extends Component {
  state={
    works:[],
    active:"p1"
  }
  componentDidMount(){
   axios.get('js/data.json').then(res=>{this.setState({works: res.data.works})})
  }
  render(){
     
   const {works}=this.state
   const Workslist = works.map((workitem , i)=>{
    return(
      
      <Part first={workitem.id}  key={i}>
      <Icon className={workitem.icon_name}></Icon>
      <Parttitle>{workitem.title}</Parttitle>
      <Line/>
      <Partdesc>
       {workitem.body}
      </Partdesc>
      <Link href={workitem.link}>Open</Link>
  </Part>
  
    )
   })

    return (
   
      <Workcomp>
       <div className="container">
            <Worktitle><Span>My</Span> Work</Worktitle>
            <Movingcover active={this.state.active}>
            {Workslist}
            </Movingcover >
            <Moveright
            onClick={() => {
              this.state.active==="p6"?
              this.setState({active: "p5"}):
              this.state.active==="p5"?
              this.setState({active: "p4"}):
              this.state.active==="p4"?
              this.setState({active: "p3"}):
              this.state.active==="p3"?
              this.setState({active: "p2"}):
              this.state.active==="p2"?
              this.setState({active: "p1"}):
              this.setState({active: "p1"});
            
            }}
            active={this.state.active}
          />
            <Moveleft
        onClick={() => {
          this.state.active==="p1"?
          this.setState({active: "p2"}):
          this.state.active==="p2"?
          this.setState({active: "p3"}):
          this.state.active==="p3"?
          this.setState({active: "p4"}):
          this.state.active==="p4"?
          this.setState({active: "p5"}):
          this.state.active==="p5"?
          this.setState({active: "p6"}):
          this.setState({active: "p6"});
        
        }}
        active={this.state.active}
          />
      
        </div>
      </Workcomp>
    );
  }
}
export default Work;
