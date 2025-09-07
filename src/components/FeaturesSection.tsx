import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  BarChart3, 
  GraduationCap,TrendingUp,MessagesSquare,
  Briefcase, 
  ArrowRight,
  Zap,
  Target,
  
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Analyzer",
      description: "Advanced AI analyzes your resume content, structure, and formatting to provide comprehensive insights.",
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
      delay: "0.1s"
      // link: "https://example.com/ai-analyzer"
    },
    {
      icon: BarChart3,
      title: "ATS Score",
      description: "Get your Applicant Tracking System compatibility score and learn how to improve it.",
      color: "text-brand-secondary",
      bgColor: "bg-brand-secondary/10",
      delay: "0.2s"
      // link: "https://example.com/ats-score"
    },
    {
      icon: GraduationCap,
      title: "Skill Update",
      description: "Discover in-demand skills for your role and get personalized learning recommendations.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      delay: "0.2s"
      // link: "https://example.com/skill-update"
    },
    {
      icon: Briefcase,
      title: "Freelancing & Jobs",
      description: "Find relevant job opportunities and freelance projects tailored to your skillset.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      delay: "0.2s"
      // link: "https://example.com/freelancing-jobs"
    },
    {
      icon: TrendingUp,
      title: "Trending Jobs",
      description: "Trending jobs in market",
      color: "text-primary",
      bgColor: "bg-primary/10",
      delay: "0.2s"
      // link: "https://example.com/trending-jobs"
    },
    {
      icon: MessagesSquare,
      title: "Interview Questions",
      description: "Get the interview questions from top product based companies in the market",
      color: "text-primary",
      bgColor: "bg-primary/10",
      delay: "0.2s",
      link: "https://drive.google.com/drive/mobile/folders/1Txer4_U8Q7NOeBCKLZyBLf5rhhwP-lt0?fbclid=PAZnRzaAMpUfZleHRuA2FlbQIxMQABp2vvZbSmwkYmeKE7sBN8XC4eLy8lZqzz2Ta1s2sDc1ib1-A5x6ecqLWDH3TD_aem_mkkZXdZD_m8zykr5jcc0tg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Features to Boost Your Career
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools helps you optimize your resume, 
            track your progress, and find the perfect opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="p-6 shadow-card hover:shadow-xl transition-all duration-200 group animate-slide-up border-0 bg-card hover-lift overflow-hidden"
              style={{ animationDelay: feature.delay }}
              
            >
              <div className={`h-12 w-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
             
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              {feature.link ? (
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-0 h-auto font-medium group-hover:translate-x-2 hover:bg-transparent hover:text-primary transition-all duration-100 text-primary"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-medium group-hover:translate-x-2 hover:bg-transparent hover:text-primary transition-all duration-100"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
              <div className="absolute bottom-0 left-0 w-full">
                <span className="block h-[3px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center justify-center mb-3">
              <Zap className="h-8 w-8 text-brand-primary mr-2" />
              <span className="text-3xl font-bold text-foreground">98%</span>
            </div>
            <p className="text-muted-foreground font-medium">Accuracy Rate</p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="h-8 w-8 text-accent mr-2" />
              <span className="text-3xl font-bold text-foreground">85%</span>
            </div>
            <p className="text-muted-foreground font-medium">Interview Success</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
