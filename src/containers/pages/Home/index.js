import React, { Component } from "react";
import { Main } from "components/atoms";
import { Header, SectionContent, Footer } from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Designspiration | Chilli";
  }

  render() {
    return (
      <>
        <Header />
        <Main>
          <SectionContent />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
