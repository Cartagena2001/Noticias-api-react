import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  state = {
    categoria: 'general',
  };

  cambiarCategoria = (e) => {
    this.setState(
      {
        categoria: e.target.value,
      },
      () => {
        //pasarlo a la pagina principal
        this.props.consultarNoticias(this.state.categoria);
      }
    );
  };

  render() {
    return (
      <div className="mt-5">
        <h1 className="text-white text-center text-xl font-bold">
          Buscar por categoria
        </h1>
        <div className="container mx-auto max-w-[60rem] px-5">
          <form>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Seleciona una categoria
            </label>
            <select
              onChange={this.cambiarCategoria} 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="general">General</option>
              <option value="business">Negocios</option>
              <option value="entertainment">Entrenamiento</option>
              <option value="health">Salud</option>
              <option value="science">Ciencia</option>
              <option value="sports">Deportes</option>
              <option value="technology">Tecnologia</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  consultarNoticias: PropTypes.func.isRequired,
};

export default Select;
