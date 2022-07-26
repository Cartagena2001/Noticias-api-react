import React from "react";
import Noticia from "./Noticia";
import PropTypes from "prop-types";

const ListaNoticias = ({noticias}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mt-10">
    {noticias.map(noticia => (
      <Noticia key={noticia.url} noticia={noticia} />
    ))}
  </div>
);

ListaNoticias.propTypes = {
    noticias: PropTypes.array.isRequired,

  }

export default ListaNoticias;
