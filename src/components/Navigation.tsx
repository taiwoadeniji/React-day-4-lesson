import React from 'react';

interface INavigationProps {
}

interface INavigationState {
    updated: boolean,
    show: boolean
}

export default class Navigation extends React.Component<INavigationProps, INavigationState> {
    constructor ( props: string )
    {
        super( props );
        this.state = {
            updated: true,
            show: true
        }
        console.log( 'Constructor ran.' );
    }
    componentDidMount ()
    {
        // This means our component was successfully constructed and rendered.
        console.log( '"componentDidMount()" ran.' );
    }
    componentDidUpdate ()
    {
        console.log( '"componentDidUpdate()" ran.' );
    }
    componentWillUnmount ()
    {
        console.log( '"componentWillUnmount()" ran.' );
    }
    testUpdate = () => {
        // setState will trigger: componentDidUpdate() !!!
        this.setState( {updated: !this.state.updated} );
    }
    removeMe = () => {
        this.setState( {show: false} );
    }
    render ()
    {
        console.log( 'Render ran.' );
        if ( this.state.show === true )
            return (
                <nav id="navigation">
                    <h2>Website Navigation</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#" onClick={this.testUpdate}>About</a></li>
                        <li><a href="#" onClick={this.removeMe}>Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            );
        else
            return null;
    }
}