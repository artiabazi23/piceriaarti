import PizzeriaHero from "@/components/PizzeriaHero";
import PizzeriaAbout from "@/components/PizzeriaAbout";
import PizzeriaMenu from "@/components/PizzeriaMenu";
import PizzeriaContact from "@/components/PizzeriaContact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <PizzeriaHero />
      <PizzeriaAbout />
      <PizzeriaMenu />
      <PizzeriaContact />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Pizzeria Arti</h3>
          <p className="text-background/80 mb-4">Pica të bëra me dorë dhe dashuri, këtu në fshatit Çekez</p>
          <div className="flex justify-center space-x-6 text-sm">
            <span>📞 +389 70 587 141</span>
            <span>📍 Fshatit Çekez, Kumanovë</span>
            <span>⏰ 10:00 - 22:00</span>
          </div>
          <div className="mt-6 pt-6 border-t border-background/20 text-background/60 text-sm">
            <p>&copy; 2024 Pizzeria Arti. Të gjitha të drejtat e rezervuara.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;