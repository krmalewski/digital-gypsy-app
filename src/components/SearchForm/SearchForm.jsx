import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  render() {

    return (
      <div className="search-container">
        <div id="month-container"><h2>Travel Month?</h2>
          <button value="1" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>January</button>
          <button value="2" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>February</button>
          <button value="3" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>March</button>
          <button value="4" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>April</button>
          <button value="5" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>May</button>
          <button value="6" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>June</button><br />
          <button value="7" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>July</button>
          <button value="8" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>August</button>
          <button value="9" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>September</button>
          <button value="10" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>October</button>
          <button value="11" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>November</button>
          <button value="12" className='' ref={this.props.class} onClick={this.props.handleUpdateMonth}>December</button>
        </div>
        <div id="cost-container"><h2>Budget?</h2>
          <button value="$" onClick={this.props.handleUpdateCost}>$</button>
          <button value="$$" onClick={this.props.handleUpdateCost}>$$</button>
          <button value="$$$" onClick={this.props.handleUpdateCost}>$$$</button>
          <button value="$$$$" onClick={this.props.handleUpdateCost}>$$$$</button>
        </div>
        <div><h2>Go!</h2>
        <button
          id="search-button"
          onClick={() => this.props.searchByParams()}
        >Search</button>
        </div>
      </div>
    );
  }
}

export default SearchForm;
