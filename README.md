# NeuroVision

## Introduction
NeuroVision is an AI-powered brain tumor type classification system developed during the On Orbit 2.0 Hackathon 2023, organized at Sagarmatha Engineering College. This project addresses the critical challenge of early and accurate brain tumor detection by utilizing machine learning algorithms to classify tumor types based on CT/MRI scan images.

---

## Problem Statement
Brain tumors are life-threatening conditions that require early diagnosis and treatment. However, accurate tumor type classification is a complex task that demands specialized expertise and resources. NeuroVision aims to provide a cost-effective, automated solution to classify brain tumor types, assisting medical professionals in diagnosis and treatment planning.

---

## Key Features
- **AI-Powered Classification:** Classifies tumor types such as Glioma, Meningioma, Pituitary Tumor, and others.
- **User-Friendly Interface:** Real-time classification results with detailed reports.
- **Freemium Model:**
  - **Free Tier:** Classifies six tumor types and provides basic insights (e.g., symptoms, age group).
  - **Premium Tier:** Offers advanced features such as classification of rare tumor types, comparisons between similar-looking tumors, and higher accuracy with additional well-trained models.

---

## Technology Stack
- **Programming Language:** Python
- **Machine Learning Framework:** TensorFlow/Keras
- **Dataset:** Publicly available datasets (e.g., Kaggle) and curated datasets with CT/MRI images
- **Tools:** Jupyter Notebook, Google Colab

---

## Methodology
### 1. **Data Collection and Preprocessing**
   - Acquired labeled CT/MRI scan images from open medical image repositories.
   - Preprocessed the dataset by normalizing images and augmenting data to enhance diversity.

### 2. **Model Development**
   - Designed a Convolutional Neural Network (CNN) for image classification.
   - Fine-tuned hyperparameters to optimize model performance.

### 3. **System Development**
   - Integrated the trained model into a web-based platform for real-time user interaction.
   - Implemented a freemium-based access control mechanism for feature differentiation.

### 4. **Testing and Evaluation**
   - Evaluated the model using accuracy, precision, recall, and F1-score metrics.
   - Conducted user testing to ensure seamless interaction and reliability.

---

## Challenges Faced
1. **Dataset Challenges:**
   - Difficulty in acquiring high-quality labeled medical datasets.
   - Resolved through extensive research and collaboration with medical professionals.

2. **Time Constraints:**
   - Limited time to implement premium-tier features.
   - Focused on core functionalities for the hackathon demo.

3. **Complexity of Medical Data:**
   - Overcoming challenges in understanding tumor types and their characteristics.
   - Collaborated with a neuro-oncologist for domain expertise.

---

## Results
- Achieved an **88% classification accuracy** on the test set.
- Delivered a live demonstration showcasing tumor type classification.
- Won the award for **"Most Outstanding Presentation"** at the hackathon.

---

## Future Enhancements
- **Improved Accuracy:** Train with larger datasets including rare tumor types.
- **Advanced Analytics:** Provide detailed insights such as tumor growth predictions.
- **Mobile Application:** Develop a mobile app for remote access.
- **Clinical Trials:** Validate the system in real-world medical settings.

---

## Acknowledgments
We thank the organizers of On Orbit 2.0 Hackathon 2023, held at Sagarmatha Engineering College, for providing this platform, and our mentors for their invaluable guidance. Special thanks to the team members for their dedication and teamwork.

---

## Team Members
1. **[Ankit Mahato]** - Team lead/ Project Manager/ ML developer
2. **[Rohan Koirala]** - fullstack Developer
3. **[Unika Ghimire]** - Research Expert
4. **[Shreya Bhatta]** - Domain Expert

---

## Contact Information
For inquiries or collaboration opportunities, please contact us:
- **Email:** chaudhryankit848@gmail.com

---

## Demo
Check out our live demo on [LinkedIn Post][https://linkedin.com](https://www.linkedin.com/posts/mahatoankit_machinelearning-artificialintelligence-aiinhealthcare-activity-7269332653932195840-St6m?utm_source=share&utm_medium=member_desktop).

---
