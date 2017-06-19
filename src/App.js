import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Line from './Line';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}
    };
  }

  onAddNew(value){
		let id = uuid();
		let list = this.state.list;
		list[id] = value;
		this.setState({list: list});
	}

  removeItem(id){
		let list = this.state.list;
		delete list[id];
		this.setState({list: list});
	}

  renderItens(){
		var itens = [];
		for(var id in this.state.list){
      if (this.state.list.hasOwnProperty(id)) {
        var value = this.state.list[id];
        itens.push(  (<Line id={id} key={id} value={value} onRemove={this.removeItem.bind(this)}/>) )
      }
		}

		return itens;
	}
  render() {
    let itens = this.renderItens();
    return (
      <div className="container">
        <div className="app">
          <div className="header">
              <div className="meta">
                <h1>TO DO LIST</h1>
                <div className="contador">
                  {itens.length} Linhas
                </div>
              </div>
          </div>
            {itens}
          <Form onAddNew={this.onAddNew.bind(this)}/>
        </div>
      </div>
    );
  }
}

function  uuid() {
	var i, random;
	var uuid = '';
	for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		uuid += (i === 12 ? 4 : (i === 16 ? ((random & 3) | 8) : random))
			.toString(16);
	}
	return uuid;
}
