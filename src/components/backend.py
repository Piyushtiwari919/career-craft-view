from flask import Flask, request, jsonify
from pdfminer.high_level import extract_text
from docx import Document
import os
from flask_cors import CORS

#file add
app = Flask(__name__)
CORS(app)

def extract_resume_text(file_path):
    if file_path.endswith(".pdf"):
        return extract_text(file_path)
    elif file_path.endswith(".docx"):
        doc = Document(file_path)
        return " ".join([para.text for para in doc.paragraphs])
    return ""

@app.route("/analyze", methods=["POST"])
def analyze_resume():
    file = request.files["resume"]
    job_role = request.form.get("jobRole")
    salary_range = request.form.get("salaryRange")
    company = request.form.get("company")

    file_path = os.path.join("uploads", file.filename)
    file.save(file_path)

    resume_text = extract_resume_text(file_path)

    # Simple ATS scoring logic
    score = 50
    if "skills" in resume_text.lower():
        score += 20
    if company.lower() in resume_text.lower():
        score += 10
    if job_role.lower() in resume_text.lower():
        score += 20

    feedback = f"Resume analyzed for role {job_role} at {company}. Salary range {salary_range}."
    return jsonify({"score": score, "feedback": feedback})

if __name__ == "__main__":
    os.makedirs("uploads", exist_ok=True)
    app.run(debug=True)
