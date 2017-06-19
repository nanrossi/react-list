import React, { Component } from 'react';


export default class Line extends Component{
  constructor(props) {
    super(props);
    this.rows = this.props.value.split(/\n\r?/g);
  }

  remove() {
    this.props.onRemove(this.props.id);
  }

  render(){
    let mappedRows = this.rows.map(function (item) {
       return <span key={item}>{item}<br/></span>;
    });
		return <div className="line">
			<div className="inner">
				<div className="todo-text">
				    {mappedRows}
				</div>
        <div className="remove-item" onClick={this.remove.bind(this)}><span className="xis">X</span></div>
			</div>
		</div>
	}
}
