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
  title: "Somos Condominios",
  subtitle: "Un software de administración de propiedad raíz, enfocado en la automatización de procesos y en la digitalicación de los pagos. Permitimos una gestión y seguimiento de las visitas, paquetes y comunicados desde portería hacia todos los inquilinos. Para administradores, guardas de seguridad e inquilinos",
  btnFirstModule: "Ir a funcionalidades",
  image: heroImage,
};

export const sections = {
  sectionOne: {
    // pretitle: "Beneficios y ventajas",
    title: "Beneficios y ventajas",
    subtitle:
      "Los administradores podrán usar menos horas de su tiempo gestionando sus conjuntos.\n Los guardas dejarán de usar sus cuadernos para registrar las novedades de portería. Y los inquilinos tendrán a la mano la gestión de sus pagos, visitas, paquetes y muchas funcionalidades que les permitirán tener una mejor experiencia en su conjunto. Se tendrá trazabilidad de todo lo que sucede en el conjunto, y mucho más.",
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
        { name: "Administración de 1 conjunto" },

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
        { name: "Pagos digitales" },
        { name: "Administración de hasta 3 conjuntos" },
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
        { name: "Pagos digitales" },
        { name: "Número de conjuntos ilimitados" },
        { name: "Módulo de asambleas" },
        { name: "Módulo de votaciones" },
        { name: "Rondas de guardas" },
      ],
      price: "$29.99",
      btnText: "Consultar precio",
      delay: 900,
    },
  ],
};

export const footer = {
  title: "Contáctanos y prueba un demo",
  subtitle: "Sin importar si eres un guarda, un inquilino o un administrador, Puedes contactarnos y nosotros nos encargaremos de llegar hasta tu conjunto para que puedas hacer parte de nuestra comunidad. Déjanos un mensaje por cualquiera de nuestras redes sociales y te contactaremos lo más pronto posible.",
  image: footerContactImage,
  social: [
    { icon: instagram, href: "https://www.instagram.com/condominios_emp/" },
    { icon: whatsapp, href: "https://wa.me/573136962979?text=Hola estoy interesado en saber más de condominios" },
  ],
};
