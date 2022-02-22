import * as React from "react";

interface StarRatingProps {
    rating?: number;
    numberOfStars?: number;
    changeRating?: (rating: number) => void;
    starRatedColor?: string;
    starEmptyColor?: string;
    starHoverColor?: string;
    starDimension?: string;
    starSpacing?: string;
    gradientPathName?: string;
    ignoreInlineStyles?: boolean;
    svgIconPath?: string;
    svgIconViewBox?: string;
    name?: string;
}

class StarRatings extends React.Component<StarRatingProps> {
  state: StarRatingProps = {
    rating = 3.5,
    numberOfStars = 5,
    // changeRating = (rating: number) => void,
    starRatedColor = '#FF7A1F',
    starEmptyColor = '#F0CFB9',
    starHoverColor = '#B9ECF0',
    starDimension = '2em',
    starSpacing = '1em',
    // gradientPathName = string,
    ignoreInlineStyles = true,
    // svgIconPath = string,
    // svgIconViewBox = string,
    name = 'rating',
  }
  
  render(): () => any {
    console.log(this.state)
    return (
      <div>
        {this.state}
      </div>
    )
  }
}

export default StarRatings;