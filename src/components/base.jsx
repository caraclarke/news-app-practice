var React = require('react');

var Base = React.createClass({
  var linkStyle = {
    display: inline
  };

  render: function () {
    return (
      <div class="header" style={linkStyle}>
        <h1>Country News</h1>
        <a href="/NewsPage">News</a>
        <a href="/PhotoPage">Phto</a>
      </div>
      {this.props.children}
    );
  }
});

module.exports = Base;
