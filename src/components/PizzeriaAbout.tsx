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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pse Piceria Arti?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed py-0 px-0 my-0 font-semibold text-left mx-[280px]">Na pëlqen të bëjmë pica të shijshme me kackavall të freskët dhe përbërës të mirë. Në Piceria Arti</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return <Card key={index} className="text-center group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-normal">{feature.description}</p>
                </CardContent>
              </Card>;
        })}
        </div>

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