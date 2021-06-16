import { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EditExp from './EditExp';
import '../css/Experience.css'
import AddExpModal from './AddExpModal';


class Experience extends Component {

    state={
        experiences:[]
    }

    img={
        imglogo:["https://media-exp1.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_100_100/0/1595530301220?e=1631750400&v=beta&t=epCwObuNQ7fgzYahnWONi2D1ghbJkdq0i3EBX2oZiTE",
                "https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1631750400&v=beta&t=V4NBm-NohF2bjS1mrIlkZq3-gKb49SpeBtV80UPFSR8",
                "https://media-exp1.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1618231291419?e=1631750400&v=beta&t=BF5HxHU4xDnT0-hGNOzeWTxjcdx8SChkLzYJWfKA2TA",
                "https://media-exp1.licdn.com/dms/image/C560BAQGrV5i4K9YdhQ/company-logo_100_100/0/1621582241755?e=1631750400&v=beta&t=ouxs0fFm2EgInSZZSUXFZlVk6zuidkmNwmG7y6YVuRw"                
                
            ]
        }

        filter = (filterval) =>{
            this.setState({
                experiences:this.state.experiences.filter(exp => exp._id !== filterval)
            })
        }

        editExp =(val)=>{
            console.log('val',val);
            const updatedRef = this.state.experiences
            console.log('ref',updatedRef);
            const toUpdate = updatedRef.map(x => x._id).indexOf(val._id)
            console.log('update',toUpdate);
            updatedRef[toUpdate] = val           
                this.setState({
                    experiences:updatedRef
                })            
              }

    componentDidMount =()=>{
        this.experienceFetch()
    }

      componentDidUpdate =(prevProps, prevState)=>{
        console.log('prevstate',prevState);
        if(prevState.experiences.length !== this.state.experiences.length){
            this.experienceFetch()
        }
        else{
            console.log('error');
        }  
    }  

    experienceFetch = async ()=>{
        const url= 'https://striveschool-api.herokuapp.com/api/profile/60c72233291930001560aba1/experiences'
        const key= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o'
        try {
            const response = await fetch(url, {
                headers:{
                    'Authorization': key
                }
            })

            const experiences = await response.json()
            console.log('data', experiences);
            if(response.ok){
                this.setState({
                    experiences
                })
                console.log('state',this.state.experiences);
            }
            else{
                console.log('error');
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    ageFunc =(dob) =>{
        let today = new Date(dob)
        return today
    }

    render() {

        return (

            <Card className='rounded'>
        
                    <Card.Body>

                        <Row className="justify-content-between">
                            <Col>
                                 <h6>Experience</h6>
                            </Col>
                            <Col className="text-right">
                                <AddExpModal className="m-0 p-0" style={{color:"gray", height:"30px"}}/>
                            </Col>
                        </Row> 

                        <Row className="pl-2">
                        <div className="dash2 d-flex flex-column w-100">
                            {this.state.experiences?
                            this.state.experiences.map((exp,i) => 
                                <Col key={exp._id} className="d-flex p-0 mt-3">
                                    <Col sm={1} className="pr-0 pl-1">
                                        <img src={this.img?.imglogo[i]} alt="logo" className=" img-fluid "/>
                                    </Col> 
                                    <Col className="p-0 ml-4 " style={{borderBottom:'1px solid lightgrey'}}>
                                        <Link to="">
                                            <div className="d-flex flex-row p-0 m-0 justify-content-between">                                         
                                                <h6 className="m-0 p-0 text-dark">{exp.role}</h6>
                                                    <EditExp className="m-0 p-0" filter={this.filter} editExp={this.editExp} data={exp} id={exp._id} />
                                              
                                            </div>
                                            <p className="text-muted m-0">{exp.company}</p>
                                            <p className="light-text  m-0">{exp.startDate}</p>
                                            <p className="light-text  m-0">{exp.area}</p>                                            
                                        </Link>
                                        <p className="mt-1">{exp.description}</p>
                                    </Col>
                                </Col>
                                )
                            :<p>Errror</p>}

                                 {/* <Col className="d-flex p-0 mt-3">
                                    <Col sm={1} className="pr-0 pl-1">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1631750400&v=beta&t=V4NBm-NohF2bjS1mrIlkZq3-gKb49SpeBtV80UPFSR8" alt="logo" className=" img-fluid "/>
                                    </Col> 
                                    <Col className="p-0 ml-4 " style={{borderBottom:'1px solid lightgrey'}}>
                                        <Link>
                                            <div className="d-flex justify-content-between">
                                               <div>
                                                 <h6 className="m-0 text-dark">Role</h6>
                                               </div>
                                               <div className="">
                                                   icon
                                               </div>
                                            </div>
                                            <p className=" text-muted m-0">Company</p>
                                            <p className="light-text  m-0">Start date</p>
                                            <p className="light-text  m-0">area</p>                                            
                                        </Link>
                                        <p className="mt-1">description</p>
                                    </Col>
                                </Col>

                                <Col className="d-flex p-0  mt-3">
                                    <Col sm={1} className="pr-0 pl-1">
                                        <img src="https://media-exp1.licdn.com/dms/image/C560BAQGrV5i4K9YdhQ/company-logo_100_100/0/1621582241755?e=1631750400&v=beta&t=ouxs0fFm2EgInSZZSUXFZlVk6zuidkmNwmG7y6YVuRw" alt="logo" className="img-fluid pt-1 pl-1"/>
                                    </Col> 
                                    <Col  className="p-0 ml-4" style={{borderBottom:'1px solid lightgrey'}}>
                                        <Link>
                                            <h6 className="m-0 text-dark">Role</h6>
                                            <p className=" text-muted m-0">Company</p>
                                            <p className=" light-text  m-0">Start data</p>
                                            <p className=" light-text  m-0">area</p>
                                        </Link>
                                        <p className="mt-1">description</p>
                                    </Col>
                                </Col>

                                <Col className="d-flex p-0  mt-3">
                                    <Col sm={1} className="pr-0 pl-1" >
                                        <img src="https://media-exp1.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_100_100/0/1595530301220?e=1631750400&v=beta&t=epCwObuNQ7fgzYahnWONi2D1ghbJkdq0i3EBX2oZiTE" alt="logo" className="img-fluid"/>
                                    </Col> 
                                    <Col className="p-0 ml-4"  style={{borderBottom:'1px solid lightgrey'}}>
                                        <Link>
                                            <h6 className="m-0 text-dark">Role</h6>
                                            <p className=" text-muted m-0">Company</p>
                                            <p className=" light-text  m-0">Start data</p>
                                            <p className=" light-text  m-0">area</p>
                                        </Link>
                                        <p className="mt-1">description</p>
                                    </Col>
                                </Col> 

                                <Col className="d-flex p-0  mt-3">
                                    <Col sm={1} className="pr-0 pl-1">
                                         <img src="https://media-exp1.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1618231291419?e=1631750400&v=beta&t=BF5HxHU4xDnT0-hGNOzeWTxjcdx8SChkLzYJWfKA2TA" alt="logo" className="img-fluid"/>
                                    </Col> 
                                    <Col  className="p-0 ml-4">
                                        <Link>
                                            <h6 className="m-0 text-dark">Role</h6>
                                            <p className=" text-muted m-0">Company</p>
                                            <p className=" light-text  m-0">Start data</p>
                                            <p className=" light-text  m-0">area</p>
                                        </Link>
                                        <p className="mt-1">description</p>
                                    </Col>
                                </Col>   */}                                
                            </div>

                        </Row> 

                    </Card.Body>
                </Card>
        );
    }
}

export default Experience;