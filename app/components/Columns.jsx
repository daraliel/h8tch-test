var React = require('react');

var Columns = React.createClass({

    deleteRow: function  (col, row, e){
      //var message ="works " + col + ", row" + row;
      //alert (message);
      this.props.onDelete(col, row);
    },

    getDefaultProps: function () {
      return {
        filter: ''
      };
    },

    getInitialState: function () {
      return {
          col1: this.props.col1,
          col2: this.props.col2,
          filter: this.props.filter
      };
    },

    render: function () {
      var col1 = this.state.col1;
      var col2 = this.state.col2;
      var filter = this.props.filter;

      //if anything is in the search bar, only show items with matching text
      if (filter.length > 0){
        col1 = filterArray(col1, filter);
        col2 = filterArray(col2, filter);
      }

      return (
        <div >

          <div className="column">
              <div className="rowHeader">Column 1</div>
              {col1.map((row, index) => (
                <div className="row">
                    <span key={index}>{row} <button className="delButton" onClick={(e) => this.deleteRow(1, row, e)}>×</button></span>
                  </div>
              ))}
          </div>
          <div className="column">
              <div className="rowHeader">Column 2</div>
              {col2.map((row, index) => (
                <div className="row">
                    <span key={index}>{row} <button className="delButton" onClick={(e) => this.deleteRow(2, row, e)}>×</button></span>
                </div>
              ))}
          </div>
        </div>
      );
    }
});

function filterArray (arr, filter){
  var i;
  var temp = [];
  filter = filter.toLowerCase(); //necessary to make search not case sensitive

  for (i = 0; i < arr.length; i++){
    var colItem = arr[i];
    var colLower = colItem.toLowerCase(); //necessary to make search not case sensitive
    if (colLower.includes(filter) == true){
      temp[i] = colItem;
    }
  }
  return temp;
}

module.exports = Columns;
