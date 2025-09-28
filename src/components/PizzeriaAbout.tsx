import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Heart, Award } from "lucide-react";
const features = [{
  icon: Heart,
  title: "Me Kujdes të Madh",
  description: "Çdo pica e bëjmë me zemër dhe duart tona"
}, {
  icon: Award,
  title: "Përbërës të Mirë",
  description: "Kackavall i freskët, mish cilësor dhe perime të mira"
}, {
  icon: Clock,
  title: "E Nxehtë Gjithmonë",
  description: "Nga furra tek ju vetëm në 10-15 minuta"
}, {
  icon: MapPin,
  title: "Këtu në Çekez",
  description: "Merr me vete ose të sjellim në shtëpi"
}];
const PizzeriaAbout = () => {
  return <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        

        

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Misioni Ynë
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">Duam që klientët të jenë të kënaqur. Çdo pica e bëjmë me kujdes, me kackavall të freskët dhe mish cilësor. </p>
        </div>
      </div>
    </section>;
};
export default PizzeriaAbout;