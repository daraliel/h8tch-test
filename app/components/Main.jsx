//Responsible for rendering and holding the app itself
var React = require('react');
var Columns = require('./Columns.jsx');
var Controls = require('./Controls.jsx');
var Search = require('./Search.jsx');

var col1 = ["asdfawg","doodood","iten","adshia","aaaaaa"];
var col2 = ["bogodog","ghololo","item"];

require('style!css!sass!./style.scss');

var Main = React.createClass({
    handleFilter: function (filter){
        var updates = {};
        updates.filter = filter;
        this.setState(updates);
    },
    getInitialState: function () {
      return {
          filter: this.props.filter
      };
    },
    handleOnDelete: function (col, row){
        var updates = {};
        var message;

        row = row - 1; //row is index of array, react starts from 1 when using map
        if (col == 1){
          message = col1.splice(row, 1);
          updates.col1 = col1;
        } else if (col == 2) {
          message = col2.splice(row, 1);
          updates.col2 = col2;
        }

        this.setState(updates);
        //alert("row: " + row +  "removed: " + message); //debugging message
    },

    handleNewData: function (updates) {
      var newItem = updates.newItem;
      var columns = updates.columns;

      addItem(newItem, columns);
      //alert ('works!'); //debugging message
      this.setState(updates);
    },
    render: function () {
      var filter = this.state.filter;

      return (
        <div className = "main">
          <h1>Marvelous!</h1>
          <p className ="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          <h2>Add An Item</h2>
          <div className="itemAppCols">
            <div className="controls">
              <Controls onNewData={this.handleNewData} />
              <Search onFilter={this.handleFilter} />
            </div>
            <div className="itemColumns">
              <Columns onDelete={this.handleOnDelete} col1 = {col1} col2 = {col2} filter = {filter} />
            </div>
          </div>
        </div>
      );
    }
});

function addItem (newItem, columns){
  if (columns == 1){
    col1.push(newItem);
  }
  else if (columns == 2){
    col2.push(newItem);
  }
}

module.exports = Main;
