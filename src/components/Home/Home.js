import React, { Component } from 'react'

import Button from '../Button/Button'

class Home extends Component {

    handleNextPage = () => {
        let path = `/sign-up`;
        this.props.history.push(path); 
    }

    render() {
        return (
            <div className="mwg-wrap home">
                <h2>Welcome</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla orci nec mi commodo, non euismod dui commodo. Fusce rhoncus tellus nec sollicitudin euismod. Donec scelerisque faucibus erat, a ullamcorper orci posuere nec. Aenean in ligula ut augue dignissim viverra non quis est. Mauris accumsan sagittis lectus, quis eleifend ante efficitur quis.</p>
                
                <p>Duis laoreet quam ut ex ullamcorper, ac sollicitudin tortor laoreet. Quisque vulputate iaculis lorem, non laoreet justo eleifend sit amet. Maecenas consectetur, nisl et tempus posuere, neque turpis pellentesque magna, mollis euismod dui turpis sit amet nulla. Vestibulum nec lectus a lacus laoreet pharetra. Maecenas vel dignissim turpis, eget blandit diam. Nam ex ligula, dictum nec erat ut, ultrices lobortis enim.</p>

                <Button 
                    buttonType="white"
                    onClick={this.handleNextPage}
                    text="Next"/>

            </div>
        );
    }
}

export default Home;