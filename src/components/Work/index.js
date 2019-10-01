import React , {Component} from 'react'
import './style.css'
import axios from 'axios'


class Work extends Component{

    state = {
        works: []
    }


    componentDidMount(){
        axios.get("js/Data.json").then(res => { this.setState ({ works : res.data.works })})
    }


    render(){

        const {works} = this.state;
        const workList = works.map( (workItem) => {

            return(
                
                <div className="part" id={workItem.className} key={workItem.id}>
                    <i className={workItem.icon_name}></i>
                    <h4 className="part-title">{workItem.title}</h4>
                    <hr className="line"/>
                    <p className="part-desc">{workItem.body}</p>
                </div>
                   
            )
         })

         return(
            <div className="work" id="work">
                <div className="container">
                    <h2 className="work-title"><span>My</span> Work</h2>
                    {workList}
                </div>
            </div>
         )
    }
}

export default Work;