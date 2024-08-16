import pizzaData from "../data";

import Pizza from "./Pizza";

function PizzaMenu() {
  const pizzas = pizzaData;

  return (
    <main className="pizzaMenu">
      <h2>OUR MENU</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

export default PizzaMenu;
