
import React from 'react';
import 'babel-polyfill';
import './index.css';
import Star from './star';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: 0
    };
  }

  change(starsSelected) {
    console.log(starsSelected);
    this.setState({starsSelected});
  }

  callChange(starsSelected) {
    return () => this.change(starsSelected);
  }

  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;
    return (
      <div>
        <h1>Star Rating Component</h1>
        <div className="star-rating">
          {
            [...Array(totalStars)].map((n, i) =>
              <Star key={i}
                    selected={i < starsSelected}
                    callBack={this.callChange(i + 1)} />
            )
          }
        </div>
      </div>
    );
  }
}

export default StarRating;