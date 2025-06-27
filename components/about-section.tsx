export function AboutSection() {
  console.log("AboutSection component rendered");

  return (
    <section className="py-20 bg-portfolio-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-portfolio-white mb-8">
          About <span className="text-portfolio-green font-medium">Me</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-portfolio-gray font-light leading-relaxed">
            UI/UX Designer focused on <span className="text-portfolio-green">layout clarity</span>, 
            responsive UI, and user-first thinking. I use Figma, Adobe XD, and code-ready handoffs 
            via HTML/CSS. I also create visual stories through <span className="text-portfolio-green">video editing</span>.
          </p>
        </div>

        {/* Decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-portfolio-green rounded-full"></div>
        </div>
      </div>
    </section>
  );
}