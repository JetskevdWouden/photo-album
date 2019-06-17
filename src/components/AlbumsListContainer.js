// import { addAlbum } from '../actions/albums'
// import { setAlbums } from '../actions/albums'
import { getAlbums } from '../actions/albums'
import * as React from 'react'
// import * as request from 'superagent'
import AlbumsList from   './AlbumsList'
import { connect } from 'react-redux';

class AlbumsListContainer extends React.Component{

    componentDidMount() {
        // request('https://jsonplaceholder.typicode.com/albums')
        //     .then(response => this.props.setAlbums(response.body))
        this.props.getAlbums();                                                     //via connect & mapStateToProps --> getalbums now prop of reduxState
      }

    render() {
        if(!this.props.albums) return 'Loading...'
        // {console.log("STATE OF ALBUMS", this.props.albums)}
        return <AlbumsList albums={this.props.albums} />                            //this.props ==> redux state
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums                                                        //state ==> redux state
    }
} 

export default connect(mapStateToProps, { getAlbums })(AlbumsListContainer)


//NOTES AND PREVIOUS STEPS OF EXERCISE

    // state = {}

    // componentDidMount() {
    //     request('https://jsonplaceholder.typicode.com/albums')
    //     .then(response => this.setState({ albums: response.body }))

    //     this.props.addAlbum(5, 'Enjoying sunshine')
    //     this.props.addAlbum(10, 'Having fun in the US')

    //     sleep(2000)
    //         .then(message => this.props.addAlbum(1, message))

    //     sleep(3000)
    //         .then(message => this.props.addAlbum(2, message))
    // }

    // sleep(2000)
    //       .then(message => this.props.setAlbums([
    //         {
    //           id: 1,
    //           title: message
    //         },
    //         {
    //           id: 2,
    //           title: 'This is the second album'
    //         },
    //         {
    //           id: 3,
    //           title: 'The last album'
    //         }
    //       ]))
    //   }

    // const sleep = time => new Promise(
    //     resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
    //   )