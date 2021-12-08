import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    const handleImageClick = (e) => {
      const index = e.target.dataset.index;

      this.setState({ active: index });
    };

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />

        <div className="carousel-smaller">
          {images.map((image, index) => {
            return (
              <img
                src={image}
                key={image}
                data-index={index}
                className={index == active ? "active" : ""}
                onClick={handleImageClick}
                alt="animal thumbnail"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
