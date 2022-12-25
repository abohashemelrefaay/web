import React, { Component } from 'react';
import axios from 'axios';

import  {Workcomp, Worktitle,Span,Part,Icon,Parttitle,Line,Partdesc} from"./style.js"

class Work extends Component {
  state={
    works:[]
  }
  componentDidMount(){
   axios.get('js/data.json').then(res=>{this.setState({works: res.data.works})})
  }
  render(){
     
   const {works}=this.state
   const Workslist = works.map((workitem)=>{
    return(
      <Part first={workitem.id}  key={workitem.id}>
      <Icon className={workitem.icon_name}></Icon>
      <Parttitle>{workitem.title}</Parttitle>
      <Line/>
      <Partdesc>
       {workitem.body}
      </Partdesc>
  </Part>
    )
   })

    return (
   
      <Workcomp>
       <div className="container">
            <Worktitle><Span>My</Span> Work</Worktitle>
            {Workslist}
        </div>
      </Workcomp>
    );
  }
}
export default Work;
