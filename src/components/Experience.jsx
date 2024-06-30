import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/reactImage.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import laravel from '../assets/laravel.png'

const experiences = [
  {
    date: 'January 2023 – Present',
    title: 'Software Developer Intern, Strathmore University',
    description: `Working here as a software developer where so far; I have worked on projects individually and in a team as well. One of the projects I worked on was an existing system which was developed using Laravel and I was therefore given the task of working on the front end of the system. Whereas for the second system I was responsible for developing the whole system by myself from the front end to deploying it on the test servers so that the users of the system could test it.`,
  },
  {
    date: 'January 2023 – April 2023',
    title: 'Software Developer Intern, Bluelight Systems',
    description: `Worked at this company remotely as an intern and got vast knowledge and experience in solving complicated problems. During my internship period I was also able to gain experience working on an existing system that used CodeIgniter framework and I was able also to improve my skills in PHP, ReactJS and JavaScript by doing the tasks which I was assigned. Overall, it was a great working experience as the organization helped me to realize the importance of working in a team.`,
  },
  {
    date: 'February 2022 – March 2022',
    title: 'Service based learning, Young Men Christian Association, Nairobi',
    description: `Voluntary Service – 225 hours`,
  },
];

const educations = [
  {
    date: 'July 2020 – July 2023',
    title: 'Bachelors in business information and technology, Strathmore University',
    description: 'Mean Grade B',
  },
  {
    date: 'September 2018 – January 2020',
    title: 'Diploma in Business Information Technology, Strathmore University',
    description: 'Mean Grade B',
  },
  {
    date: 'Sep 2016 – June 2017',
    title: '‘O’ Levels, Nairobi South Nursery Primary Secondary School, Nairobi',
    description: 'Mean Grade B',
  },
];
    const images = [
        {
            id:1,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id:3,
            src:javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id:4,
            src:reactImage,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id:5,
            src:tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
        {
            id:6,
            src:github,
            title: 'Github',
            style: 'shadow-gray-400',
        },
        {
            id:7,
            src:laravel,
            title: 'Laravel',
            style: 'shadow-red-500',
        },
        {
            id:8,
            src:bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500',
        }
    ]

const Experience = () => {
  return (
    <div name='experience' className="p-4 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-8 ">Experience</h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            contentStyle={{ background: '#1f2937', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
            iconStyle={{ background: '#4b5563', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title font-bold">{exp.title}</h3>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      
      <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
      <VerticalTimeline>
        {educations.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            date={edu.date}
            contentStyle={{ background: '#1f2937', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
            iconStyle={{ background: '#4b5563', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title font-bold">{edu.title}</h3>
            <p>{edu.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>
                    Skills 
                </p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px:0'>
                {images.map(({id,src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="html" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>  
                ))}
            </div>
        </div>
    </div>
  );
};

export default Experience;
