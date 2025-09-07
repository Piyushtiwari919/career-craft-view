import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Upload, FileText, DollarSign, Building, Briefcase } from "lucide-react";

const UploadSection = () => {
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // 🔹 New states
  const [jobRole, setJobRole] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  // 🔹 API call to backend
  const handleAnalyze = async () => {
    if (!uploadedFile) {
      alert("Please upload a resume file first");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("resume", uploadedFile);
    formData.append("jobRole", jobRole);
    formData.append("salaryRange", salaryRange);
    formData.append("company", company);

    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Error analyzing resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4" id="upload">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-scale-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Analyze Your Resume with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your resume and let our AI provide detailed analysis, ATS scoring, and personalized recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="bg-[#003049] p-8 shadow-card animate-slide-up hover-lift">
            <div className="mb-6">
              <h3 className="text-2xl text-white bg-transparent font-semibold text-foreground mb-2">Upload Resume</h3>
              <p className="text-muted-foreground text-white">
                Drag and drop your resume or click to browse
              </p>
            </div>

            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                dragOver
                  ? "border-accent bg-accent/10"
                  : uploadedFile
                  ? "border-success bg-success/10"
                  : "border-border hover:border-accent"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {uploadedFile ? (
                <div className="space-y-3">
                  <FileText className="h-12 w-12 text-success mx-auto" />
                  <div>
                    <p className="font-medium text-foreground">{uploadedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setUploadedFile(null)}
                    className="mt-3"
                  >
                    Remove File
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 text-white text-muted-foreground mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-white text-foreground mb-2">
                      Drop your resume here
                    </p>
                    <p className="text-muted-foreground text-white mb-4">
                      Supports PDF, DOC, DOCX files up to 10MB
                    </p>
                    <label htmlFor="resume-upload">
                      <Button asChild className="cursor-pointer">
                        <span>Browse Files</span>
                      </Button>
                    </label>
                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Job Details Section */}
          <Card className="p-8 shadow-card animate-slide-up hover-lift" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Job Details</h3>
              <p className="text-muted-foreground">
                Enter details about your target position
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="job-role" className="text-foreground font-medium">
                  Job Role
                </Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="job-role"
                    placeholder="e.g., Software Engineer, Data Scientist"
                    className="pl-10 smooth-focus"
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary-range" className="text-foreground font-medium">
                  Salary Range
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="salary-range"
                    placeholder="e.g., $80,000 - $120,000"
                    className="pl-10 smooth-focus"
                    value={salaryRange}
                    onChange={(e) => setSalaryRange(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground font-medium">
                  Target Company
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="company"
                    placeholder="e.g., Google, Microsoft, Startup"
                    className="pl-10 smooth-focus"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>

              <Button 
                onClick={handleAnalyze}
                disabled={loading}
                className="w-full gradient-brand text-white font-medium shadow-brand hover:shadow-lg hover-lift transition-all duration-300"
                size="lg"
              >
                {loading ? "Analyzing..." : "Analyze Resume"}
              </Button>

              {result && (
                <div className="mt-6 p-4 border rounded">
                  <h3 className="font-bold text-lg">ATS Score: {result.score}/100</h3>
                  <p className="mt-2 text-muted-foreground">{result.feedback}</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
