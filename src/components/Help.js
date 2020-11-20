import React from 'react';
import { Redirect } from 'react-router-dom'

class Help extends React.Component {
  state = {
    subject: '',
    content: '',
    email: '',
  }


  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    alert("Thanks for your question! We'll get back to you ASAP!")
    this.props.history.push("/pets")
  }

  render(){
    console.log(this.props)
    let { subject, content, email } = this.state;
    return (
      <div className="simple-flex-col">
        <h3>Submit a Question</h3>
        <input name="subject" placeholder="Subject" value={subject} onChange={this.handleChange}/>
        <textarea name="content" placeholder="Content" value={content} onChange={this.handleChange}/>
        <input name="email" placeholder="Email" value={email} onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Help;
