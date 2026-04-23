export const site = {
  name: "Vitor Atair",
  tagline: "Software developer",
  email: "vitor.ruts@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/pub/vitor-atair/49/606/572",
    facebook: "https://www.facebook.com/vitor.atair",
    resume:
      "https://drive.google.com/file/d/0B64fnH-n5_qpTF8zOEVfQTQ5Z3M/view?usp=sharing",
    workedin: "http://www.workedin.com.br",
  },
} as const;

export const about = {
  intro:
    "My name is Vitor, I'm software developer since 2012, I'm always looking for new challenges to test and improve my knowledge and skills.",
  columns: [
    {
      title: "What I do",
      body: "Web software using languages like, python, php, ruby, etc. I have also work with languages like C, to develop embedded software based on GNU/Linux.",
    },
    {
      title: "What Am I doing",
      body: "I'm using Django framework to develop a software for Intelbras, the company where I'm currently work.",
    },
    {
      title: "What Am I want",
      body: "I'm specializing in mobile and web software development, always looking for new knowledges in this field to make better softwares.",
    },
  ],
} as const;

export const skillsIntro =
  "These are some skills and technologies that I like to work with...";

export const skills = [
  {
    title: "Python & Django",
    body: "These are my favorites tools, python it's a powerful and addictive language and django is a high-level web framework, they're simply amazing.",
  },
  {
    title: "GIT & GitHub",
    body: "With these technologies it's possible to do the code versioning and working at the same time with any others developer.",
  },
  {
    title: "HTML5 & CSS3",
    body: "With these technologies it's possible to create beautiful and intuitive softwares, making the user's and developer's life easier",
  },
  {
    title: "OSX & GNU/Linux",
    body: "Despite having already used FreeBSD and GNU/Linux as desktop system, nowadays I love using the OSX system, keeping FreeBSD only as a server.",
  },
] as const;

export const coursesIntro =
  "Here I got some of my most important courses, not all of them are about software development, but somehow these courses helped me into my job and into my personal projects.";

export const courses = ["Clean Code", "Django", "Canvas", "CCNA"] as const;

export type TimelineEntry = {
  role: string;
  org: string;
  date: string;
  paragraphs: string[];
  link?: { href: string; label: string };
};

export const timeline: TimelineEntry[] = [
  {
    role: "Founder and Software developer",
    org: "Workedin",
    date: "December, 2014",
    paragraphs: [
      "At december 2014, I with more 4 friends started a startup together, It was and still is a great experience in work together. In less than 2 months we developed all software, business strategies and we opened our own company. It was my moment, because it wasn't the first company that I tried to open, but the first that I really did.",
    ],
    link: { href: site.links.workedin, label: "www.workedin.com.br" },
  },
  {
    role: "Software developer",
    org: "Intelbras - R&D Wireless Indoor",
    date: "January, 2014",
    paragraphs: [
      "My current job, after learning a lot about networks, programming, operating system and just as important as, the users needs, agile development methodologies and startup's culture. I was prepared to work with software development, and to my happiness, a new department was created and I was invited to work with them. So, I have been working with a django platform to develop a wireless control management, this software has tested me a lot, because I need to use all my knowledge at Linux system and networks protocols, besides back-end and front-end programming. I'm happy here, but I'm always looking for new challenges to increase my knowledge.",
    ],
  },
  {
    role: "Product developer",
    org: "Intelbras - R&D Wired Network",
    date: "July, 2013",
    paragraphs: [
      "At this point I understood what is a product, what is important to think when a product it's in development. Some of my main functions was to help marketing guys specifying a new product, talking to clients to understand a little bit more about market and why this product should be developed. I always brought something to think about, be it with canvas, design thinks, scrum or anything else to help us understand our client's needs, thus making our team more productive. At this point I started thinking more about the user, and not just develop something that anybody would like to enjoy or use. This knowledge was very important to my whole life, influencing all my work and study so far.",
    ],
  },
  {
    role: "Product validator",
    org: "Intelbras - R&D INET",
    date: "November 2012",
    paragraphs: [
      "I was finishing my Technical course in networks and was trying to learn more about this through a job, and I found a perfect one. The main function of a Product validator is test all features in many scenarios to approve or not the product. At this time I was learning a lot about GNU/Linux and FreeBSD system to improve my tests and also making some scripts in bash or perl. It was a great time and I learned a lot about network and its protocols. Nowadays I use this knowledge to make better softwares.",
    ],
  },
  {
    role: "Trainee",
    org: "Intelbras - R&D ICON",
    date: "November 2011",
    paragraphs: [
      "This internship was great to me, I learned from some great guys. My main function was validation of a DECT platform into the telephone TS60, it was my first contact with software development, even not doing any kind of development, I thought... I really like it and some day I'm gonna develop like this guys. So, I went to a library, took the C completo e total book and started learning C programming.",
    ],
  },
  {
    role: "Looking for a career",
    org: "",
    date: "February, 2009 to October, 2011",
    paragraphs: [
      "I was 16 when a got my first job, I was a teacher's assistant on many courses, like excel, fireworks, corelDRAW, photoshop. At this jobs I learned a lot and met important people to my career. I kept this job for about 7 month, until I started a course about computer maintenance. At this course my teacher invited me to work in his computer store, I stayed there for about 6 month and realized that computer maintenance isn't my bussines. After that, my friend's brother in law, heard that I worked with photoshop and coreldraw, he has a design company and invited me to work with him, I liked it a lot and my corelDRAW's skills got much better.",
    ],
  },
];

export const resume = {
  fullName: "Vitor Atair da Silva",
  blurb:
    "Take a look at my complete resume, including all my courses and jobs descriptions, if you want, please add me in linkedin or send-me an email to talk about software development, or ride a bicycle together someday.",
};

export const hobbies = {
  title: "Time to relax",
  body: "In my free time, I like to play the guitar, sometimes play soccer with friends and enjoy their company drinking some beer, but, what I really like, it's to ride my bicycle in some new places, looking for a mountain or a beautiful road.",
};

export const contact = {
  title: "Keep in Touch",
  intro:
    "If you want keep touch, I would like to talk about software development, agile development, any kind of technology or ride bicycle together some day.",
};
