import React, { Component } from 'react';
import {Redirect } from 'react-router-dom'
import {getDateString} from '../utils/general.js'

class AddPresentation extends Component {
    state = {
        redirect: false,
        data : {
            presenter:'',
            evaluater:'',
            topic: '',
            articles: [],
            date: getDateString(new Date()),
            keywords: [],
            summary: ''
        }
    }

   
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    save = (event) => {
        event.preventDefault();
        const data = this.state.data;
        this.props.addPresentation(data);
        this.setRedirect();
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/presentations' />
        }
    }

    handleChange = (event) => {
        switch(event.target.name) {
            case 'presenter':
              this.setState({data: {...this.state.data,presenter: event.target.value}});
              break;
            case 'evaluater':
              this.setState({data: {...this.state.data,evaluater: event.target.value}});
              break;
            case 'topic':
              this.setState({data: {...this.state.data,topic: event.target.value}});
              break;
            case 'articles':
              this.setState({data: {...this.state.data,articles: event.target.value}});
              break;
            case 'date':
              this.setState({data: {...this.state.data,date: event.target.value}});
              break;
            case 'keywords':
              this.setState({data: {...this.state.data,keywords: event.target.value}});
              break;
            case 'summary':
              this.setState({data: {...this.state.data,summary: event.target.value}});
              break;
            default:
              
          }
        
    }

  render() {
    return (
        <div className="formContainer">
            {this.renderRedirect()}
            <form  onSubmit={this.save}>
                <div className="inputWrapper">
                    <label className="inputLabel">Presenter:</label>
                    <input name="presenter" className="inputField" type="text" value={this.state.data.presenter} onChange={this.handleChange} />
                </div>
                <div className="inputWrapper">
                    <label className="inputLabel">Evaluater:</label>
                    <input name="evaluater" className="inputField" type="text" value={this.state.data.evaluater} onChange={this.handleChange} />
                </div> 
                <div className="inputWrapper">
                    <label className="inputLabel">Topic:</label>
                    <input name="topic" className="inputField" type="text" value={this.state.data.topic} onChange={this.handleChange} />
                </div>  
                <div className="inputWrapper">
                    <label className="inputLabel">Articles:</label>
                    <input name="articles" className="inputField" type="text" value={this.state.articles} onChange={this.handleChange} />
                </div>  
                <div className="inputWrapper">
                    <label className="inputLabel">Date:</label>
                    <input name="date" className="inputField" type="date" value={this.state.data.date} onChange={this.handleChange} />
                </div>  
                <div className="inputWrapper">
                    <label className="inputLabel">keywords:</label>
                    <input name="keywords" className="inputField" type="text" value={this.state.data.keywords} onChange={this.handleChange} />
                </div>  
                <label >Summary:</label>
                <textarea name="summary"value={this.state.data.summary} onChange={this.handleChange} rows="5"/>
                <div className="button-wrapper">
                    <button  type="submit" className="whiteFont blueBackground">Save</button>
                    <button type="button" onClick={this.setRedirect} className="whiteFont blueBackground">Cancel</button>
                </div>               
            </form>
        </div>        
    );
  }
}

export default AddPresentation;
