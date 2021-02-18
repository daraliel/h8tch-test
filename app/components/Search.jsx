var React = require('react');

var Search = React.createClass({
    filterOut: function (e){
      var filter = this.refs.search.value;
      this.props.onFilter(filter);
    },

    render: function () {
      return (
        <div className="search">
          Search an item
          <input type="input" className="searchBox" ref="search" placeholder="Search" onKeyUp={this.filterOut}></input>
        </div>
      );
    }
});

module.exports = Search;
