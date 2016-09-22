const React = require('react')

class Spaceship extends React.Component {


    render() {

        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.speed}</p>
                <p>{this.props.hasRockets}</p>
                <p>{this.props.colors}</p>
            </div>
        )

    }


}

Spaceship.defaultProps = {

    speed: 10,
    hasRockets: false,
    colors: ['black', 'red']

}
module.exports = Spaceship
