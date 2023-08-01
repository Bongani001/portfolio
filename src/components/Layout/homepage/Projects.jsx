import React from 'react';
import { projects } from '../../utilities/data';

const Projects = () => {
  return (
    <section id='projects' className='py-10 mt-4'>
      <h2 className='section-heading text-center'>Projects</h2>
        <div className=' mt-10'>
            {projects.map(project => {
                return (
                    <div className='lg:grid lg:grid-cols-3 gap-40 place-items-center mb-10' key={project.id}>
                        <div className={` col-span-2 ${project.id % 2 != 0 ? "lg:order-1" : ""}`}>
                            <img className='shadow-xl rounded mx-auto' src={project.img} alt={project.title} />
                        </div>
                        <div className=''>
                            <h3 className='text-center text-xl text-gray-700 font-bold font-logo mt-5'>{project.title}</h3>
                            <p className='text-center text-sm text-gray-500 italic'>{project.tools}</p>
                            <p className='text-center text-gray-700 px-5 sm:p-0'>{project.descrition}</p>
                            <div className='text-center mt-4'>
                                <button className='btn border-none mr-10 bg-gradient-to-l from-cyan-200'>
                                    <a href={project.code} target='_blank'>Code</a>
                                </button>
                                <button className='btn border-none mr-10 bg-gradient-to-l from-cyan-200'>
                                    <a href={project.live} target='_blank'>View</a>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects