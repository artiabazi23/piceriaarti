import { Card, CardContent } from "@/components/ui/card";
import margheritaImage from "@/assets/margherita-pizza.jpg";
import pepperoniImage from "@/assets/pepperoni-pizza.jpg";
import vegetarianImage from "@/assets/vegetarian-pizza.jpg";
import quattroStagioniImage from "@/assets/quattro-stagioni-pizza.jpg";
import prosciuttoImage from "@/assets/prosciutto-pizza.jpg";
import colaImage from "@/assets/coca-cola.jpg";
import fantaOrangeImage from "@/assets/fanta-orange.jpg";
import fantaExoticImage from "@/assets/fanta-exotic.jpg";
import jogurtImage from "@/assets/jogurt.jpg";

const menuItems = [
  {
    name: "Margherita",
    description: "Salcë domate, kackavall i freskët",
    personalPrice: "220",
    familyPrice: "450",
    image: margheritaImage,
    popular: true
  },
  {
    name: "Kapricoza",
    description: "Salcë domate, kackavall, këpurdha",
    personalPrice: "250",
    familyPrice: "500",
    image: quattroStagioniImage
  },
  {
    name: "Me Suxhuk dhe Këpurdha",
    description: "Salcë domate, kackavall, suxhuk, këpurdha",
    personalPrice: "250",
    familyPrice: "500",
    image: pepperoniImage
  },
  {
    name: "Tuna",
    description: "Salcë domate, kackavall, tuna, qepë",
    personalPrice: "250",
    familyPrice: "500",
    image: vegetarianImage
  },
  {
    name: "Me Proshut",
    description: "Salcë domate, kackavall, proshutë cilësor",
    personalPrice: "270",
    familyPrice: "550",
    image: prosciuttoImage
  },
  {
    name: "Pica Arti",
    description: "Salcë domate, kackavall, suxhuk, sallam, proshutë, këpurdha, ullinj",
    personalPrice: "300",
    familyPrice: "600",
    image: margheritaImage,
    premium: true
  }
];

const drinks = [
  { name: "Coca-Cola", price: "50 den", image: colaImage },
  { name: "Fanta Orange", price: "50 den", image: fantaOrangeImage },
  { name: "Fanta Exotic", price: "50 den", image: fantaExoticImage },
  { name: "Jogurt", price: "40 den", image: jogurtImage }
];

const PizzeriaMenu = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meny:
          </h2>
        </div>

        {/* Pizza Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-pizza transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary/30">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={`${item.name} - fresh artisanal pizza`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Më e kërkuara
                  </div>
                )}
                {item.premium && (
                  <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                  <div className="text-center">
                    <div className="text-xs opacity-90">Personale</div>
                    <div className="font-bold">{item.personalPrice} den</div>
                  </div>
                  <div className="text-center mt-1 pt-1 border-t border-primary-foreground/20">
                    <div className="text-xs opacity-90">Familjare</div>
                    <div className="font-bold">{item.familyPrice} den</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Drinks Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Pijet</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drinks.map((drink, index) => (
              <Card key={index} className="group hover:shadow-pizza transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary/30">
                <div className="relative">
                  <img 
                    src={drink.image} 
                    alt={`${drink.name} - fresh drink`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                    {drink.price}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-lg font-bold text-foreground text-center">{drink.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzeriaMenu;