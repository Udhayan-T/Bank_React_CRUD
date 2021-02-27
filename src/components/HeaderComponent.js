import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center">
                        <div><a href="#" className="navbar-brand">Bank Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
