import { Component } from "react";
import { withRouter } from "react-router-dom";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();
    console.log(json);

    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => {
    this.setState((state) => {
      return { showModal: !state.showModal };
    });
  };

  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    const { name, animal, breed, city, state, description, images, showModal } =
      this.state;

    if (this.state.loading) {
      return <div className="lds-dual-ring"></div>;
    }

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => {
              return (
                <button
                  style={{ backgroundColor: theme }}
                  onClick={this.toggleModal}
                >
                  Adopt {name}
                </button>
              );
            }}
          </ThemeContext.Consumer>
          <p>{description}</p>

          {showModal ? (
            <Modal>
              <>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <ThemeContext.Consumer>
                    {([theme]) => {
                      return (
                        <button
                          onClick={this.adopt}
                          style={{ backgroundColor: theme }}
                        >
                          Yes
                        </button>
                      );
                    }}
                  </ThemeContext.Consumer>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
