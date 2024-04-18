import Navbar from "../componentes/Navbar";
import CardsList from "../componentes/CardsList";
import logo from "../img/logoRectangular.png";

function Home () {

  const cardData = [
    {title:"Pizza indivual", image:"dionisio_01.jpg", description: "Pizza Margarita individual elaborada con una base de salsa de tomate, mozzarella y albahaca fresca."},
    {title:"Pizza Margarita", image:"dionisio_01.jpg", description: "Pizza Margarita elaborada con una base de salsa de tomate, mozzarella y albahaca fresca."},
    {title:"Pizza Calabresa", image:"dionisio_01.jpg", description: "Pizza Calabresa elaborada con una base de salsa de tomate, cubierta con generosas porciones de queso mozzarella fundido y lonchas de longaniza."},
    {title:"Hambuerguesa doble con papas", image:"dionisio_01.jpg", description: "Hamburguesa con doble medallon de carne, cebolla morada, pepinillos en rodajas, cheddar y bacon más porción de papas fritas."},,
    {title:"Combo Dionisio", image:"dionisio_01.jpg", description: "Hamburguesa doble con cheddar + papas fritas + nuggets de pollo"},
    {title:"Sandwich Vegano", image:"dionisio_01.jpg", description: "Sandwich elaborado con tiras de champignion rebozado y frito con jarabe de agave con chile."},
    {title:"Roll de Vegetales", image:"dionisio_01.jpg", description: "El Roll de Vegetales está relleno de una variedad de vegetales frescos y crujientes, como pepino, zanahoria, aguacate y hojas verdes."},
    {title:"Aros de Cebolla", image:"dionisio_01.jpg", description: "Aros de Cebolla rebozados con una capa dorada y crujiente."},
    {title:"Papas fritas", image:"dionisio_01.jpg", description: "Doradas y crujientes, nuestras papas fritas son el acompañamiento perfecto para cualquier comida. Un clásico imprescindible que nunca decepciona."},
    {title:"Nuggets de Pollo", image:"dionisio_01.jpg", description: "Trozos de pollo empanizados, crujientes por fuera y tiernos por dentro."}
  ]
  return (
    <>
    <Navbar logo={logo}/>
    <CardsList cards={cardData}/>
    </>
  )
}

export default Home