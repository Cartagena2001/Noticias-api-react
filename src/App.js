import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Select from "./components/Select";

class App extends Component {
  state = {
    noticias: [],
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=55fda23f1fb542e19fda8b4deaf6f20f`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({
      noticias: noticias.articles,
    });
  };

  render() {
    return (
      <Fragment>
        <Header titulo="NOTICIAS REACT API" />
        <Select consultarNoticias={this.consultarNoticias}/>
        <div className="container mx-auto max-w-[60rem] mb-10">
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
