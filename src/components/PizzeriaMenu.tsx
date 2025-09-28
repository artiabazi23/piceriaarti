import { Card, CardContent } from "@/components/ui/card";
import margheritaImage from "@/assets/margherita-pizza.jpg";
import pepperoniImage from "@/assets/pepperoni-pizza.jpg";
import vegetarianImage from "@/assets/vegetarian-pizza.jpg";
import quattroStagioniImage from "@/assets/quattro-stagioni-pizza.jpg";
import prosciuttoImage from "@/assets/prosciutto-pizza.jpg";

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
  { name: "Coca-Cola", price: "50 den" },
  { name: "Fanta", price: "50 den" },
  { name: "Jogurt", price: "40 den" }
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
        <div className="bg-card rounded-3xl p-8 shadow-warm">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Pijet</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {drinks.map((drink, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-xl">
                <span className="font-medium text-foreground">{drink.name}</span>
                <span className="font-bold text-primary text-lg">{drink.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzeriaMenu;