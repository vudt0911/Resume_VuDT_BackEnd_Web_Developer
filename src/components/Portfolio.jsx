import React from "react";
import ecommerce from "../assets/portfolio/ecommerceAPI.png";
import caculator from "../assets/portfolio/caculator.png";
import studentManager from "../assets/portfolio/studentManager.png";
import todoList from "../assets/portfolio/todoList.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce,
      link: 'http://3.38.92.188/',
      repo: 'https://github.com/vudt0911/E-Commerce-API'
    },
    {
      id: 2,
      src: caculator,
      link: 'https://vudt0911.github.io/RandomCaculator/index.html',
      repo: 'https://github.com/vudt0911/RandomCaculator'
    },
    {
      id: 3,
      src: studentManager,
      link: 'https://student-api-vudt.herokuapp.com/',
      repo: 'https://github.com/vudt0911/Student-API'
    },
    {
      id: 4,
      src: todoList,
      link: 'http://todolist-vudt.herokuapp.com/',
      repo: 'https://github.com/vudt0911/todolist'
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full portfolio relative"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
