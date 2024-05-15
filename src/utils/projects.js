import ras from "../assets/images/ras.webp";
import joke from "../assets/images/joke.webp";
import lofi from "../assets/images/lofi.webp";
import blog from "../assets/images/blog.webp";
import FloridaCats from "../assets/images/floridacats.webp";
import Carhub from "../assets/images/carhub.webp";
import AlqueriaVillacarmen from "../assets/images/villacarmendoble.webp";
import Portfolio from "../assets/images/portfolioweb.webp"
import GuillermoFernandezNutricion from "../assets/images/guillermofernandeznutricion.webp"
const data = [
    {
        name: "Guillermo Fernandez Nutrición",
        type: "Página Web + Email",
        url: "https://guillermofernandeznutricion.es/",
        github: "https://github.com/jaivial/astrowebsite.git",
        image: GuillermoFernandezNutricion,
        slug: "guillermo-fernandez-nutricion",
        description: "Página web para anunciar los servicios de consulta nutricional y aumentar la captación de clientes. Permite que los clientes realicen una primera consulta por un formulario de contacto. Diseño responsivo adaptable a tamaños de escritorio, tablet y móviles. Desarrollado con Astro para el front end y PHP para el backend del formulario de contacto. Las fotos y el contenido creativo fue elaborado por mi.",
        tech: ['HTML', 'Javascript', 'Css', 'Astro', 'PHP', 'NodeJS']
        
    },
    {
        name: "Alqueria Villa Carmen",
        type: "Página Web + Gestor de Reservas + Back Office",
        url: "https://alqueriavillacarmen.com/",
        github: "https://github.com/jaivial/villacarmen.git",
        image: AlqueriaVillacarmen,
        slug: "alqueria-villacarmen",
        description: "Creación de página web para promocionar Alqueria Villa Carmen, un restaurante y salón de eventos. Destaca por mostrar los Menús del Día, de Fin de Semana y la carta de vinos, además de permitir reservas online. Incluye un gestor de reservas con funciones como límite diario de reservas, confirmación por correo electrónico y administración de reservas. La reserva online aumenta en un 300% la clientela. Además, las cartas son editables en tiempo real y desde dispositivos móviles, permitiendo cambios en fotos, descripciones y platos.",
        tech: ['PHP', 'HTML', 'Javascript', 'Css', 'MySQL',]

    },
    {
        name: "Car Hub",
        type: "Página Web",
        url: "https://carhubpi.000webhostapp.com/index.php",
        github: "/",
        image: Carhub,
        slug: "car-hub",
        description: "Descubre nuestro sitio web dedicado a presentar el software Car Hub, un portal de compra y venta de coches. Se destacan las funcionalidades del software, resaltando sus virtudes y su utilidad para nuestros clientes. Desarrollada con las últimas tecnologías en HTML y PHP, ofrece un diseño responsive que se adapta a cualquier dispositivo. Además, facilitamos la comunicación mediante un formulario de contacto vía email con nuestro equipo de desarrolladores.",
        tech: ['HTML', 'Javascript', 'Css', 'PHP']
    },
    {
        name: "Florida Cats",
        type: "Tienda Online",
        url: "https://floridacats.000webhostapp.com/",
        github: '/',
        image: FloridaCats,
        slug: "florida-cats",
        description: "Prototipo de tienda online con acceso de usuario y contraseña y registro de nuevos usuarios. Almacenamiento de datos de sesión en cookies. Es una tienda online en la que se pueden añadir gatos al carrito. Permite aplicar filtros de orden por precio, nombre y antiguedad. Cada usuario tiene un carrito y un historial de pedidos independiente. Permite la adición o eliminación de gatos cuando inicias sesión como administrador en el área de administrador.",
        tech: ['HTML', 'Javascript', 'CSS', 'PHP', 'MySQL']
    },
    {
        name: "Portfolio Web",
        type: "Pagina Web",
        url: "https://www.jaimedigitalstudios.com/",
        github: "https://github.com/jaivial/astroportfolio.git",
        image: Portfolio,
        slug: "portfolio",
        description: "Portfolio web para mostrar mi perfil, mi carrera académica y profesional, mis proyectos y contactar conmigo mediante un formulario. Desarrollado con Astro, es un diseño elegante, minimal y con un rendimiento veloz. Permite el filtrado de datos para mostrar los últimos projecots mediante recogida de datos. 100% responsivo, se adapta a formatos de escritorio, tablets y móviles.",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Markdown']
    },
]

export function getData(){
    return data;
}