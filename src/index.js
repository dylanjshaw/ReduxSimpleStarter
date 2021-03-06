import _ from 'lodash';
import React from 'react';
//fetch react library (deals with components)
import ReactDOM from 'react-dom';
//fetch reactDOM library (renders compontents as DOM elements)
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyBWPrqU7RGkDaS4G-EpCGJosqTmrFdQ7lk';




// JSX is used to make our components a lot more legible
// than they would be if they were written in plain javascript

// the browswer can't read our components, they must be transpiled
// and translated by Babel and webpack

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos : [],
      selectedVideo: null
     };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term)=> {this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
