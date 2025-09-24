import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Instagram, Facebook, MapPin, Clock } from "lucide-react";

const PizzeriaContact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Porosit Tani
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pica e freskët artizanale, gati në 10-15 minuta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Options */}
          <div className="space-y-6">
            <Card className="group hover:shadow-warm transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Telefon</h3>
                    <p className="text-muted-foreground">Më i shpejtë për porosi</p>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm text-lg py-6 rounded-xl transition-all duration-300 hover:scale-105">
                  <Phone className="mr-2 h-5 w-5" />
                  +389 70 XXX XXX
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-warm transition-all duration-300 border-2 hover:border-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">Mesazh i shpejtë</p>
                  </div>
                </div>
                <Button variant="secondary" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6 rounded-xl transition-all duration-300 hover:scale-105">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Dërgo Mesazh
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="group hover:shadow-warm transition-all duration-300 border-2 hover:border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Instagram className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Instagram</h4>
                  <p className="text-sm text-muted-foreground">@pizzeria.arti</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-warm transition-all duration-300 border-2 hover:border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Facebook className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Facebook</h4>
                  <p className="text-sm text-muted-foreground">Pizzeria Arti</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Lokacioni</h3>
                    <p className="text-muted-foreground">Në zemër të lagjes</p>
                  </div>
                </div>
                <div className="text-foreground space-y-2">
                  <p>📍 Çekez, Kumanovë</p>
                  <p>🏢 Qendra e Kumanovës</p>
                  <p>🅿️ Parking i disponueshëm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Orari</h3>
                    <p className="text-muted-foreground">I hapur çdo ditë</p>
                  </div>
                </div>
                <div className="text-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>E Hënë - E Shtunë</span>
                    <span className="font-semibold">11:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>E Diel</span>
                    <span className="font-semibold">12:00 - 22:00</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                    <p className="text-sm text-primary font-medium">⚡ Përgatitja: 10-15 minuta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
              <h4 className="text-lg font-bold text-foreground mb-2">
                🏠 Shpërndarje Falas në Lagje
              </h4>
              <p className="text-muted-foreground">
                Shpërndajmë falas brenda një rrezeje 2km
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzeriaContact;