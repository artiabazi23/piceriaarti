import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-pizza.jpg";

const PizzeriaHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fresh artisanal pizza with golden crust and premium ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-pizza-mozzarella mb-6 drop-shadow-2xl">
          Pizzeria Arti
        </h1>
        <p className="text-xl md:text-2xl text-pizza-mozzarella/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Pica artizanale të freskëta me përbërës cilësorë në zemër të lagjes tuaj
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default"
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Porosit Tani
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-pizza-mozzarella text-pizza-mozzarella hover:bg-pizza-mozzarella hover:text-foreground backdrop-blur-sm bg-white/10 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </Button>
        </div>
        
        <div className="mt-12 text-pizza-mozzarella/80 text-lg">
          <p className="drop-shadow-md">⏱️ Gati në 10-15 minuta • 🚶‍♂️ Merr me vete • 🏠 Shpërndarje në lagje</p>
        </div>
      </div>
    </section>
  );
};

export default PizzeriaHero;