import data from './data.json'
import {Component} from "react";

export class Example1 extends Component<any, any>{
    render() {
        return (
            <>
                {data.SocialMedias.map(elem =>
                    <div key={elem}>elem</div>)}
            </>
        )
    }
}

export class Example2 extends Component{
    render() {
        return (
            <>
                 {data.Skills.map(elem => {
                   return (
                       <div key={elem.Area}>{elem.Area}
                           {elem.SkillSet.map(skill => <p key={skill.Name}>{skill.Name}</p>
                           )}
                       </div>
                   )
                 }
                 )}
            </>
        )
    }
}



export class Example3 extends Component {
    render() {
        return (
            <>
                {data.Experiences.map(elem => {
                    return (
                        <div key={elem.companyName}>
                            <img src={elem.logo} alt="company logo"/>
                            <a href={elem.url}>{elem.companyName}</a>
                            {elem.roles.map(role => {
                                return (
                                    <div key={role.title}>
                                        <p>{role.title}</p>
                                        <p>{role.startDate}</p>
                                        <span>{role.location}</span>
                                        <p>{role.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </>
        )
    }
}