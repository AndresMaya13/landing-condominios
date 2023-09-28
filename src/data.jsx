// import heroImage from "../src/assets/img/hero/mainImage.jpg";
//https://storyset.com/illustration/mobile-testing/pana#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit
import heroImage from "../src/assets/img/hero/hero-v2.png";
import logoImage from "../src/assets/header/logo2.png";
//https://storyset.com/illustration/social-life/amico
import sectionOneImage from "../src/assets/about-us/sectionOne/good-team.png";
//https://storyset.com/illustration/manage-money/pana#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit
import sectionSecondImage from "../src/assets/about-us/sectionTwo/financial.png";
// import footerContactImage from "../src/assets/footer/contact.jpg";
//https://storyset.com/illustration/email-campaign/amico#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit
// OPTIONAL https://www.freepik.es/vector-gratis/ilustracion-concepto-mensajero_6199003.htm#query=contact%20ilustration&position=42&from_view=search&track=ais
import footerContactImage from "../src/assets/footer/contact-v2.png";
import facebook from "../src/assets/footer/facebook.png";
import instagram from "../src/assets/footer/instagram.png";
import whatsapp from "../src/assets/footer/whatsapp.png";

//FUNCTIONALITIES
//https://storyset.com/illustration/two-factor-authentication/pana#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit
import accessImage from "../src/assets/functionalities/access.png";
//https://storyset.com/illustration/refer-a-friend/pana
import comunicationsImage from "../src/assets/functionalities/comunications.png";
//https://storyset.com/illustration/finance-app/pana#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit
import financeImage from "../src/assets/functionalities/finance.png";
//https://storyset.com/illustration/messenger/pana#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit
import deliveryImage from "../src/assets/functionalities/delivery.png";
//https://storyset.com/illustration/jumping-into-the-pool/pana#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit
import poolImage from "../src/assets/functionalities/pool.svg";

export const header = {
  logo: logoImage,
  btnText: "Iniciar sesión",
};

export const nav = [
  { name: "Inicio", href: "#header" },
  { name: "¿Quiénes somos?", href: "#sectionOne" },
  { name: "Funcionalidades", href: "#functionalities" },
  { name: "Precios", href: "#pricing" },
  { name: "Contacto", href: "#contact" },
];

export const hero = {
  title: "Disfruta de más tiempo libre",
  subtitle: "Dile adiós a las tareas difíciles y repetitivas en tu condominio.",
  btnFirstModule: "Ir a funcionalidades",
  image: heroImage,
};

export const sections = {
  sectionOne: {
    pretitle: "Innovación y crecimiento",
    title: "Condominios para ti",
    subtitle:
      "Somos una empresa dedicada a implementar soluciones de software que minimicen el esfuerzo en las tareas tediosas y recurrentes.",
    btnLink: "Saber más",
    image: sectionOneImage,
  },
  sectionTwo: {
    pretitle: "Información principal",
    title: "Espacio para título",
    subtitle:
      "Espacio para agregar una descripción más detallada asociada a la sección",
    btnLink: "Saber más",
    image: sectionSecondImage,
  },
};

export const functionalities = {
  cards: [
    {
      title: "Invitaciones",
      subtitle:
        "Gestiona el acceso de los invitados. Habilita los ingresos a través de QRs.",
      image: accessImage,
    },
    {
      title: "Comunicados",
      subtitle:
        "Crea difusiones fácil y rápido, para mantener al día a tus inquilinos.",
      image: comunicationsImage,
    },
    {
      title: "Pagos",
      subtitle:
        "Centraliza tus métodos de pago y ahorra dolores de cabeza o estados financieros con desfases.",
      image: financeImage,
    },
    {
      title: "Paquetes",
      subtitle:
        "¿Tienes una entrega pendiente? Tranquilo, nosotros te avisamos cuando llegue. ",
      image: deliveryImage,
    },
    {
      title: "Zonas comunes",
      subtitle:
        "Reservar espacios y aumentar la felicidad de tus inquilinos nunca fue tan sencillo. ",
      image: poolImage,
    },
  ],
};

export const pricing = {
  title: "Planes y detalles",
  cards: [
    {
      title: "Básico",
      services: [
        { name: "Almacenamiento financiero" },
        { name: "Seguimiento a bitácora" },
        { name: "Acceso y control de invitados" },
      ],
      price: "$9.99",
      btnText: "Consultar precio",
      delay: 300,
    },
    {
      title: "Estándar",
      services: [
        { name: "Almacenamiento financiero" },
        { name: "Seguimiento a bitácora" },
        { name: "Acceso y control de invitados" },
      ],
      price: "$19.99",
      btnText: "Consultar precio",
      delay: 600,
    },
    {
      title: "Premium",
      services: [
        { name: "Almacenamiento financiero" },
        { name: "Seguimiento a bitácora" },
        { name: "Acceso y control de invitados" },
      ],
      price: "$29.99",
      btnText: "Consultar precio",
      delay: 900,
    },
  ],
};

export const footer = {
  title: "A la distancia de un clic",
  subtitle: "Puedes encontrarnos a través de nuestras redes sociales:",
  image: footerContactImage,
  social: [
    { icon: facebook, href: "/" },
    { icon: instagram, href: "/" },
    { icon: whatsapp, href: "/" },
  ],
};
