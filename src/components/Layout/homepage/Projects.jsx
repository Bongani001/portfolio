import React from 'react';
import { projects } from '../../utilities/data';

const Projects = () => {
  return (
    <section className='py-10 mt-4'>
      <h2 className='section-heading text-center'>Projects</h2>
        <div className='grid lg:grid-cols-2 gap-20 mt-10'>
            {projects.map(project => {
                return (
                    <div className='' key={project.id}>
                        <div className=''>
                            <img className='shadow-xl object-cover' src={project.img} alt={project.title} />
                        </div>
                        <div className=''>
                            <h3 className='text-center text-xl text-gray-700 font-bold font-logo mt-5'>{project.title}</h3>
                            <p className='text-center text-gray-700 px-5'>{project.descrition}</p>
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