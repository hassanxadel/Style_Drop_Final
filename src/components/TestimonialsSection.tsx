import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Katelyn Brooks",
    text: "Impressive haul, loved the curation! Fast shipping too. Quality on everything was amazing - it's now my go-to for casual and seasonal picks.",
    rating: 5,
  },
  {
    name: "Ruby Cross",
    text: "DROP changed the game. I no longer need to browse 10+ sites. The app makes everything easy and the selection is incredible.",
    rating: 5,
  },
  {
    name: "Jordan Miles",
    text: "Finally a fashion site that curates for real people. Everything fits true to size and the returns process is seamless.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-14">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="badge-accent mb-2 inline-block">Social proof</span>
            <h2 className="font-display text-4xl md:text-5xl">
              FROM HAPPY<br />SHOPPERS
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-lg p-6 border border-border">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? "fill-accent text-accent" : "text-muted"}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
