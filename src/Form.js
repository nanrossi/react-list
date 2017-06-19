import React, { Component } from 'react';


export default class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      content : '',
      isBlank : true
    };
  }

  addItem(){
		if(this.state.content.length){
			var value = this.state.content.trim();
			this.props.onAddNew(value);
			this.setState({content: '', isBlank: true});
		}
		return;
	}

  syncContent(e){
		var value = e.target.value;
		this.setState({content: value, isBlank: (value.length === 0)});
	}

  enterPressed(e){
		if (e.which === 13 && !e.shiftKey) {
			e.nativeEvent.preventDefault();
			this.addItem();
		}
	}

  render(){
		return <div className="form">
					<textarea type="text"
          placeholder="Add new item"
          value={this.state.content}
          onKeyDown={this.enterPressed.bind(this)}
          onChange={this.syncContent.bind(this)}></textarea>
					<button className="name-input " onClick={this.addItem.bind(this)}>+</button>
			</div>
	}
}
