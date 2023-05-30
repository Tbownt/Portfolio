export const projectsData = () => {
  const projectsEN = [
    {
      title: "HeroesApp",
      description:
        "HeroesApp is a pure React Application inspired by heroes from Marvel and Dc comics showing a limit quantity of heroes who has his own page, url and search method.",
      link: "https://tbowntheroesapp.netlify.app/",
      repository:
        "https://github.com/Tbownt/React-Notes/tree/main/07-Heroes-SPA",
      image: "/images/heroesapp.png",
    },
    {
      title: "JournalApp",
      description:
        "JournalApp is an application for uploading notes to Firebase with status management in Redux toolkit as well as uploading files to Cloudinary.",
      link: "https://tbowntjournalapp.netlify.app/",
      repository:
        "https://github.com/Tbownt/React-Notes/tree/main/08-JournalApp/journal-app",
      image: "/images/journalapp.png",
    },
    {
      title: "BuddyONG",
      description:
        "BuddyONG is a fullstack application made with TypeScript for the server and JavaScript in the Frontend, also with state management with traditional Redux as well as ORMs like Sequelize, PostgreSQL database, geolocation, file upload, authentication with Auth0 and more! dedicated to help homeless pets.",
      link: "https://buddyong.vercel.app/",
      repository: "https://github.com/Tbownt/Front-Animals",
      image: "/images/buddyong.png",
    },
    {
      title: "CalendarApp",
      description:
        "CalendarApp is an application made in React and Redux based in a basic clone of Google Calendar with authentication made with JWT where you can create and save your own events in a database made with MongoDB, the server is made with Node.js and Express.js and uploaded in Railway",
      link: "https://tbowntcalendarapp.netlify.app/",
      repository:
        "https://github.com/Tbownt/React-Notes/tree/main/10-calendar-front",
      image: "/images/calendarapp.png",
    },
  ];
  const projectsES = [
    {
      title: "HeroesApp",
      description:
        "HeroesApp es una aplicación de React inspirada en los héroes de Marvel y DC comics que muestra una cantidad limitada de héroes que contienen su propia página, url y método de búsqueda.",
      link: "https://tbowntheroesapp.netlify.app/",
      repository:
        "https://github.com/Tbownt/React-Notes/tree/main/07-Heroes-SPA",
      image: "/images/heroesapp.png",
    },
    {
      title: "JournalApp",
      description:
        "JournalApp es una aplicación para subir notas a Firebase con gestión de estado en Redux toolkit así como subir archivos a Cloudinary.",
      link: "https://tbowntjournalapp.netlify.app/",
      repository:
        "https://github.com/Tbownt/React-Notes/tree/main/08-JournalApp/journal-app",
      image: "/images/journalapp.png",
    },
    {
      title: "BuddyONG",
      description:
        "BuddyONG es una aplicación fullstack hecha con TypeScript para el servidor y JavaScript en el Frontend, también con gestión de estados con Redux tradicional así como ORMs como Sequelize, base de datos PostgreSQL, geolocalización, subida de archivos, autenticación con Auth0 ¡y mucho más! dedicada a ayudar a mascotas sin hogar.",
      link: "https://buddyong.vercel.app/",
      repository: "https://github.com/Tbownt/Front-Animals",
      image: "/images/buddyong.png",
    },
    {
      title: "CalendarApp",
      description:
        "CalendarApp es una aplicación hecha en React y Redux basada en un clon básico de Google Calendar con autenticación hecha con JWT donde puedes crear y guardar tus propios eventos en una base de datos hecha con MongoDB, el servidor está hecho con Node.js y Express.js y subido en Railway",
      link: "https://tbowntcalendarapp.netlify.app/",
      repository:
        "https://github.com/Tbownt/React-Notes/tree/main/10-calendar-front",
      image: "/images/calendarapp.png",
    },
  ];
  return {
    projectsEN,
    projectsES,
  };
};
