import React from "react";
import PropTypes from 'prop-types'

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description } = noticia;

  //condicion para que no muestre la imagen si no hay
  const imagen = (urlToImage) ?
    <img
          className="w-full h-[15rem] object-cover"
          src={urlToImage}
          alt={title}
        />
  : null;

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500">
        {imagen}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{title}</div>
          <p className="text-white text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 mb-4">
          <a href={url} target="_blank" rel="noreferrer" className="text-white font-bold hover:text-gray-500">Ver noticia</a>
        </div>
      </div>
    </div>
  );
};

Noticia.prototype = {
    noticia: PropTypes.object.isRequired,
}

export default Noticia;
