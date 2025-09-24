import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Me Dashuri të Madhe",
    description: "Çdo picë përgatitet me pasion dhe kujdes për detajet më të vogla"
  },
  {
    icon: Award,
    title: "Përbërës Cilësorë",
    description: "Përdorim vetëm përbërës të freskët dhe cilësorë nga furnitorë lokalë"
  },
  {
    icon: Clock,
    title: "E Freskët Gjithmonë",
    description: "Nga furra në tavolinën tuaj në vetëm 10-15 minuta"
  },
  {
    icon: MapPin,
    title: "Në Lagjen Tuaj",
    description: "Shërbim të shpejtë me vete dhe shpërndarje në lagje"
  }
];

const PizzeriaAbout = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pse Pizzeria Arti?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ne besojmë se pica e mirë nuk është vetëm ushqim - është një përvojë. 
            Në Pizzeria Arti, krijojmë pica artizanale që sjellin shijen autentike 
            italiane në zemër të lagjes tuaj.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Misioni Ynë
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Të sjellim në lagjen tuaj përvojën e një pizzerie autentike italiane, 
            ku çdo picë përgatitet me përbërës të freskët cilësorë dhe me pasionin 
            për artizanatin e vërtetë. Ne testojmë tregun me një qasje të thjeshtë 
            por cilësore, duke ndërtuar një komunitet që vlerëson ushqimin e mirë.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PizzeriaAbout;