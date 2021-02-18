var React = require('react');

var Controls = React.createClass({
    onFormSubmit: function (e) {
      e.preventDefault();
      //alert('works'); //debugging message
      var updates = {};
      var newItem = this.refs.newItem.value;
      var columns = this.refs.columns.value;

      if (newItem.length > 0) {
        this.refs.newItem.value = '';
        updates.newItem = newItem;
      }
      else{
        alert ("Must enter item name!");
        return false;
      }

      updates.columns = columns;

      this.props.onNewData(updates);
    },

    render: function () {
      return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input ref='newItem' type="text" placeholder="Enter item" />
            <select ref="columns">
              <option value="1">Column 1</option>
              <option value="2">Column 2</option>
            </select>
            <button>ADD ITEM</button>
          </form>

        </div>
      );
    }
});

module.exports = Controls;
