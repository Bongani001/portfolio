import featherblog from '../../assets/featherblog.png'
import chatUp from '../../assets/chatup.png';
import anglelink from '../../assets/anglelink.png';
import ctnprojects from '../../assets/ctnprojects.png';
// import tesla from '../../assets/tesla.png';
// import googleKeep from '../../assets/google-keep.png';
// import instagram from '../../assets/instagram.png';

export const projects = [
    {
        id: 1,
        title: 'Feather Blog',
        descrition: 'A full-stack blogging platform built with the MERN stack',
        code: 'https://github.com/Bongani001/mern-blog',
        live: 'https://featherblog.netlify.app',
        img: featherblog,
        tools: 'React | TailwindCSS | NodeJS (Express) | MongoDB | Passport.js | JWT | Zustand (State Management)'
    },
    {
        id: 2,
        title: 'CTN Projects (Client website)',
        descrition: 'Air filtration solutions and laboratory equipment serving commercial, industrial, and scientific sectors across South Africa and beyond',
        code: 'https://www.ctnprojects.co.za',
        live: 'https://www.ctnprojects.co.za',
        img: ctnprojects,
        tools: 'React | TailwindCSS | SMTP (Email service)'
    },
    {
        id: 3,
        title: 'Angle Link',
        descrition: 'Provide comprehensive IQ Retail Systems that streamline your business operations, enhance efficiency, and boost profitability',
        code: 'https://angle-link.netlify.app',
        live: 'https://angle-link.netlify.app',
        img: anglelink,
        tools: 'React | TailwindCSS | SMTP (Email service)'
    },
    {
        id: 4,
        title: 'ChatUp',
        descrition: 'A full-stack mobile friendly chatting app similar to desktop WhatsApp',
        code: 'https://github.com/Bongani001/chatup',
        live: 'https://chatupweb.netlify.app',
        img: chatUp,
        tools: 'HTML/CSS | Bootstrap | JavaScript | React | Firebase'
    }
]
