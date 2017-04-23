import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// };
//
// // this^ is a functional component because it makes a function


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''}
  }

  // constructor is basically an initialize function
  // this^ is how we initialize state in a class-based function
  // state is a plain JS object; each new instance of the class-based component
    // gets its own copy of the 'state' object


  render() {
    return (
      <div>
        <input
          value = {this.state.term}
          // controlled components' values are set by state
          onChange={(event) => this.setState({ term: event.target.value })}
          />
      </div>
    );
  }
  // every class-based component must have a render method
}


export default SearchBar;
