import boldo02 from '../../public/assets/boldo02.png'
import presto from '../../public/assets/presto.png'
import feature01 from '../../public/assets/feature01.png'
import feature02 from '../../public/assets/feature02.png'
import feature03 from '../../public/assets/feature03.png'
import user01 from '../../public/assets/user01.png'
import user02 from '../../public/assets/user02.png'
import user03 from '../../public/assets/user03.png'
import blog01 from '../../public/assets/blog01.png'
import blog02 from '../../public/assets/blog02.png'
import blog03 from '../../public/assets/blog03.png'
import author01 from '../../public/assets/author01.png'
import author02 from '../../public/assets/author02.png'
import author03 from '../../public/assets/author03.png'
import leaf from '../../public/assets/leaf.svg'
import eye from '../../public/assets/eye.svg'
import sun from '../../public/assets/sun.svg'



export const navLinks = [
  {
    id: "product",
    title: "Product",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "login",
    title: "Log in",
  },
];

export const heroButtons = [
  {
    id: "buy-template",
    title: "Buy template",
  },
  {
    id: "explore",
    title: "Explore",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: boldo02,
  },
  {
    id: "client-2",
    logo: presto,
  },
  {
    id: "client-3",
    logo: boldo02,
  },
  {
    id: "client-4",
    logo: presto,
  },
  {
    id: "client-5",
    logo: boldo02,
  },
  {
    id: "client-6",
    logo: presto,
  },
];

export const features = [
  {
    id: "feature-1",
    image: feature01,
    title: "Cool feature title",
    content: "Learning curve network effects return on investment.",
  },
  {
    id: "feature-2",
    image: feature02,
    title: "Even cooler feature",
    content: "Learning curve network effects return on investment.",
  },
  {
    id: "feature-3",
    image: feature03,
    title: "Cool feature title",
    content: "Learning curve network effects return on investment.",
  },
];

export const service1 = [
  {
    id: 1,
    content: "We connect our customers with the best.",
  },
  {
    id: 2,
    content: "Advisor success customer launch party.",
  },
  {
    id: 3,
    content: "Business-to-consumer long tail.",
  },
];
export const service2 = [
  {
    icon: leaf,
    id: "service-1",
    content: "We connect our customers with the best.",
  },
  {
    icon: eye,
    id: "service-2",
    content: "Advisor success customer launch party.",
  },
  {
    icon: sun,
    id: "service-3",
    content: "Business-to-consumer long tail.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    name: "Albus Dumbledore",
    title: "Manager @ Howarts",
    img: user01,
  },
  {
    id: "feedback-2",
    content:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    name: "Severus Snape",
    title: "Manager @ Slytherin",
    img: user02,
  },
  {
    id: "feedback-3",
    content:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    name: "Harry Potter",
    title: "Team Leader @ Gryffindor",
    img: user03,
  },
];


export const FAQ =[
  {id: "1", faq1: 'We connect our customers with the best?'},
  {id: "2", faq1: 'Android research & development rockstar? '}
]

export const blogs = [
  {
    id: "blog-1",
    date: "November 22,2021",
    authorImg: author01,
    blogImg: blog01,
    author: "Chandler Bing",
    content: "Pitch termsheet backing validation focus release.",
  },
  {
    id: "blog-2",
    date: "November 23,2021",
    authorImg: author02,
    blogImg: blog02,
    author: "Rachel Green",
    content:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
  },
  {
    id: "blog-3",
    date: "November 24,2021",
    authorImg: author03,
    blogImg: blog03,
    author: "Monica Geller",
    content:
      "Beta prototype sales iPad gen-z marketing network effects value proposition.",
  },
];

export const footerLinks = [
  {
    key:'1',
    title: "Landings",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Products",
        link: "/",
      },
      {
        name: "Services",
        link: "/",
      },
    ],
  },
  {
    key:'2',
    title: "Company",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Careers",
        link: "/",
      },
      {
        name: "Services",
        link: "/",
      },
    ],
  },
  {
    key:'3',
    title: "Resources",
    links: [
      {
        name: "Blog",
        link: "/",
      },
      {
        name: "Products",
        link: "/",
      },
      {
        name: "Services",
        link: "/",
      },
    ],
  },
];
