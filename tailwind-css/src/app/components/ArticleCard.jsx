// components/ArticleCard.js
import React from 'react';

const ArticleCard = ({ imgSrc, subject, title, text }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded bg-white shadow-lg">
      <div className="h-52">
        <img
          className="h-full w-full object-cover object-center"
          src={imgSrc}
          alt="Desarrollo de una API con React!"
        />
      </div>
      <div className="flex-1 space-y-3 p-5">
        <h3 className="text-sm font-semibold text-sky-600">{subject}</h3>
        <h2 className="text-xl font-semibold leading-tight text-slate-800">
          {title}
        </h2>
        <p className="hidden text-slate-500 md:block">
          {text}
        </p>
      </div>
      <div className="flex space-x-2 p-5">
        <img
          className="h-10 w-10 rounded-full"
          src="https://ui-avatars.com/api?name=Marlon+Sánchez"
          alt="Marlon Sánchez"
        />
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold text-slate-600 leading-4">
            Marlon Sánchez
          </span>
          <span className="text-sm text-slate-500">Oct 21, 2023</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

