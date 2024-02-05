import { LiaPython } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";
import { LiaFigma } from "react-icons/lia";
import { FiDatabase } from "react-icons/fi";
import { LiaGitAlt } from "react-icons/lia";
import { SiAmazondocumentdb } from "react-icons/si";




const skills = [
  {
    title:{
      es:'Python',
      en:'Python'
    },
    subtitle:'Django - Django Rest Framework',
    description:{
      es:'Desarrollo de nuevas funcionalidades y mantenimiento a aplicación backend utilizando Django Rest Framework. Uso de Django para proyectos personales y prácticas.',
      en:'Development of new features and maintenance to backend application using Django Rest Framework. Use of Django for personal projects and practices.'
    },
    component:<LiaPython color='#000' size='2.2em'/>
  },
  {
    title:{
      es:'Javascript',
      en:'Javascript'
    },
    subtitle:'React - React Native - VueJS',
    description:{
      es:`Mantenimiento de aplicación frontend en VueJS2.\nParticipación en proyectos de React Native tanto en área de desarrollo como en testing.`,
      en:'Maintenance of frontend application in VueJS2.\nParticipation in React Native projects both in development and testing areas.'
    },
    component:<IoLogoJavascript color='#000' size='2em'/>
  },
  {
    title:{
      es:'Git',
      en:'Git'
    },
    subtitle:'GitLab - Github - Git Bash',
    description:{
      es:'Como repositorios remotos utilizo Gitlab laboralmente y Github personalmente.\n Manejo de git desde consola para el desarrollo diario de proyectos.',
      en:'I use Gitlab for work and Github for personal projects as remote repositories.\n I use git from the console for daily project development.'
    },
    component: <LiaGitAlt color='#000' size='2em'/>
  },
  {
    title:{
      es:'Bases de datos SQL',
      en:'SQL Databases'
    },
    subtitle:'PostgreSQL - MySQL - Redis',
    description:{
      es:'Modelado y construcción de bases de datos.\n Backup y restauración de las mismas.',
      en:'Modeling and construction of databases.\n Backup and restoration of them.'
    },
    component: <FiDatabase color='#000' size='2em'/>
  },
  {
    title:{
      es:'Bases de datos NOSQL',
      en:'NOSQL Databases'
    },
    subtitle:'Firestore - MongoDB',
    description:{
      es:'Implementación de bases de datos NOSQL para proyectos pequeños de interés personal.',
      en:'Implementation of NOSQL databases for small personal interest projects.'
    },
    component: <SiAmazondocumentdb color='#000' size='1.8em'/>
  },
  {
    title:{
      es:'Figma',
      en:'Figma'
    },
    subtitle:'UX - UI Design',
    description:{
      es:'Creación de interfaces de usuario, prototipos y maquetación de ideas.',
      en:'Creation of user interfaces, prototypes and layout of ideas.'
    },
    component: <LiaFigma color='#000' size='2em'/>
  },
]

export default skills