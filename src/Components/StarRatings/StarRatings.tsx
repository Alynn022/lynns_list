import * as React from "react";

interface StarRatingProps {
    rating?: number;
    numberOfStars?: number;
    // // changeRating?: (rating: number) => void;
    starRatedColor?: string;
    starEmptyColor?: string;
    // starHoverColor?: string;
    // starDimension?: string;
    // starSpacing?: string;
    // // gradientPathName?: string;
    // ignoreInlineStyles?: boolean;
    // // svgIconPath?: string;
    // // svgIconViewBox?: string;
    // name?: string;
}

// interface StarState {
//   rating: number,
//   numberOfStars: number,
//   starRatedColor: string,
//   starEmptyColor: string,
//   starHoverColor: string,
//   starDimension: string,
//   starSpacing: string,
//   ignoreInlineStyles: boolean,
//   name: string,
// }

class StarRatings extends React.Component<StarRatingProps> {
  // state: StarState = {
  //   rating: 3.5,
  //   numberOfStars: 5,
  //   // changeRating?: (rating: number) => void;
  //   starRatedColor: '#FF7A1F',
  //   starEmptyColor: '#F0CFB9',
  //   starHoverColor: '#B9ECF0',
  //   starDimension: '2em',
  //   starSpacing: '1em',
  //   // gradientPathNam: string,
  //   ignoreInlineStyles: true,
  //   // svgIconPath: string,
  //   // svgIconViewBox: string,
  //   name: 'rating',

  
  render() {
    // console.log(this.state)
    return (
      // <div>
      //   {this.state}
      // </div>
      <StarRatings rating={this.props.rating} numberOfStars={5} starRatedColor='#FF7A1F' starEmptyColor='#F0CFB9'
      />
    )
  }
}

export default StarRatings;