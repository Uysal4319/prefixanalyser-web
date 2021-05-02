import React, {Component} from 'react';
import Typing from "../component/Typing";
import Item from "../component/Item";
import {withRouter} from "react-router-dom";
import ReactLoading from "react-loading";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '+',
            checkList : [
                {
                    numberInfo :    {
                        carrierName: '',
                        countryName: '',
                        phoneType: ''
                    },
                }
            ],
            loading: false,
        }
        this.getInfo = this.getInfo.bind(this)
    }



    getInfo() {
        this.setState({loading: true})
        const number = this.state.user;
        fetch('https://prefixanalyze.herokuapp.com/number/analyze', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
            },
            body: number
        })
            .then((res) => res.json())
            .then((res) => {

                const array = [];
                array.push(res)
                
                this.setState({loading: false,
                                    checkList: array})

            })
    }

    render() {

        if (!this.state.loading) {
            return (
                <div className={'App-header'}>
                    <label>Enter Number</label>
                    <Typing
                        placeHolder="+"
                        onChangeText={value => {
                            this.setState({user: value.target.value})
                        }}
                        value={this.state.user}
                    />

                    <button className={'login'} onClick={this.getInfo}> Analyze</button>
                 
                        {
                            this.state.checkList.map(item => {
                                    return <Item article={item}/>
                                }
                            )
                        }
              
                </div>

            );

        } else {

            return (
                <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}> 
                    <ReactLoading className={'loading'} type="bars" color="gray"/>

                </div>
            );

        }
    }
}

export default withRouter(HomePage);
