import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-cyan-50" id="home">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-scale-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Smart Resume 
                <span className="gradient-brand bg-clip-text text-transparent"> AI </span>
                Reviewer
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Optimize your resume with AI-powered analysis, get ATS scores, 
                and discover opportunities that match your skills perfectly.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                "AI-powered resume analysis",
                "Real-time ATS scoring",
                "Personalized job matching",
                "Skill gap identification"
              ].map((feature, index) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-brand text-white font-medium shadow-brand hover:shadow-lg hover-lift transition-all duration-300 group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-medium group hover:hover-lift text-blue-400 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 text-red-700 transition-transform duration-200" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-3">Trusted by professionals at</p>
              <div className="flex items-center space-x-6 opacity-60">
                <span className="font-semibold text-foreground">Google</span>
                <span className="font-semibold text-foreground">Microsoft</span>
                <span className="font-semibold text-foreground">Amazon</span>
                <span className="font-semibold text-foreground">Meta</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-card p-6 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Resume Analysis</h3>
                  <div className="h-3 w-3 bg-success rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ATS Score</span>
                    <span className="font-semibold text-success">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full w-[92%] transition-all duration-1000"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Skills Match</span>
                    <span className="font-semibold text-brand-secondary">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-brand-secondary h-2 rounded-full w-[85%] transition-all duration-1000 delay-300"></div>
                  </div>
                </div>
              </div>

              {/* Floating Alert */}
              <div className="absolute -top-4 -right-4 bg-brand-primary text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
                <span className="text-sm font-medium">+15% Interview Rate</span>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-8 left-8 w-72 h-72 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
