export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  image: string
  problem: string
  approach: string[]
  results: string[]
  learnings: string[]
  github?: string
  gradient: string
}

export const projects: Project[] = [
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction Using Machine Learning",
    description: "A comprehensive ML solution comparing Logistic Regression and Random Forest algorithms to predict diabetes with 87% accuracy.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    gradient: "from-purple-500 to-pink-500",
    problem: "Diabetes is a chronic disease affecting millions worldwide. Early detection is crucial for effective treatment and prevention of complications. Traditional diagnostic methods can be time-consuming and expensive. This project aims to create an accurate, efficient, and cost-effective solution for early diabetes detection using machine learning.",
    approach: [
      "Data Collection: Gathered comprehensive dataset with medical indicators including glucose levels, BMI, age, and family history",
      "Exploratory Data Analysis: Analyzed feature distributions, correlations, and identified key predictive indicators",
      "Data Preprocessing: Handled missing values, outliers, and normalized features for optimal model performance",
      "Feature Engineering: Created new features and selected the most important predictors using statistical methods",
      "Model Development: Implemented and compared Logistic Regression and Random Forest classifiers",
      "Hyperparameter Tuning: Used GridSearchCV to optimize model parameters for best performance",
      "Model Evaluation: Assessed models using accuracy, precision, recall, F1-score, and ROC-AUC metrics",
      "Cross-Validation: Implemented k-fold cross-validation to ensure model generalization"
    ],
    results: [
      "Achieved 87% accuracy in predicting diabetes cases",
      "Random Forest model showed superior performance with better recall for positive cases",
      "Identified glucose level, BMI, and age as the strongest predictors",
      "Reduced false negatives by 15% compared to baseline models",
      "Model processing time: <100ms per prediction, suitable for real-time applications",
      "Successfully validated on holdout test set with consistent performance"
    ],
    learnings: [
      "Importance of thorough data preprocessing in medical datasets",
      "Ensemble methods like Random Forest handle non-linear relationships better",
      "Feature importance analysis provides valuable insights for medical professionals",
      "Cross-validation is crucial for reliable model evaluation in healthcare applications",
      "Balance between precision and recall is critical in medical diagnosis",
      "Model interpretability matters as much as accuracy in healthcare"
    ],
    github: "https://github.com/AbhijeetJadhav72"
  },
  {
    id: "skin-disease-detection",
    title: "Skin Disease Detection Using Deep Learning",
    description: "Advanced CNN-based system for automated skin disease classification using deep learning techniques with data augmentation.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "NumPy"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
    gradient: "from-blue-500 to-cyan-500",
    problem: "Skin diseases affect millions of people globally, and accurate diagnosis often requires specialist dermatologists who may not be readily available, especially in rural areas. Misdiagnosis can lead to ineffective treatment and worsening conditions. This project develops an AI-powered system to assist in early and accurate skin disease detection, making dermatological expertise more accessible.",
    approach: [
      "Dataset Preparation: Compiled and curated a diverse dataset of skin disease images across multiple categories",
      "Image Preprocessing: Standardized image sizes, normalized pixel values, and applied color space transformations",
      "Data Augmentation: Implemented rotation, flipping, zooming, and brightness adjustments to increase dataset diversity",
      "CNN Architecture Design: Built a custom convolutional neural network with multiple convolutional and pooling layers",
      "Transfer Learning: Experimented with pre-trained models (VGG16, ResNet50) for feature extraction",
      "Training Strategy: Used early stopping and model checkpointing to prevent overfitting",
      "Regularization: Applied dropout layers and L2 regularization for better generalization",
      "Performance Optimization: Fine-tuned learning rate, batch size, and optimizer parameters"
    ],
    results: [
      "Achieved 92% classification accuracy across multiple skin disease categories",
      "Successfully classified 7 different types of skin conditions",
      "Reduced misclassification rate by 25% through data augmentation",
      "Model convergence achieved in 50 epochs with early stopping",
      "Inference time: <200ms per image on standard hardware",
      "Validated on diverse skin tones and image qualities with consistent performance"
    ],
    learnings: [
      "Data augmentation significantly improves model robustness in medical imaging",
      "Transfer learning accelerates training and improves accuracy with limited data",
      "Early stopping prevents overfitting and saves computational resources",
      "Proper image preprocessing is critical for consistent model performance",
      "Class imbalance requires careful handling in medical classification tasks",
      "Model visualization techniques help understand CNN decision-making process"
    ],
    github: "https://github.com/AbhijeetJadhav72"
  },
  {
    id: "insurance-cost-prediction",
    title: "Insurance Cost Prediction",
    description: "Regression-based solution for predicting insurance costs using multiple algorithms with hyperparameter optimization.",
    tech: ["Python", "Scikit-learn", "Pandas", "Linear Regression", "GridSearchCV"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    gradient: "from-green-500 to-emerald-500",
    problem: "Insurance companies need accurate cost predictions to set appropriate premiums and remain competitive while maintaining profitability. Manual estimation is time-consuming and prone to errors. This project creates a data-driven solution to predict insurance costs based on customer characteristics, enabling fair pricing and better risk assessment.",
    approach: [
      "Data Analysis: Examined relationships between features like age, BMI, smoking status, and insurance costs",
      "Feature Engineering: Created interaction features and polynomial features to capture complex relationships",
      "Data Preprocessing: Handled categorical variables using one-hot encoding and scaled numerical features",
      "Model Selection: Compared Linear Regression, Ridge, Lasso, and Polynomial Regression models",
      "Hyperparameter Tuning: Implemented GridSearchCV to find optimal alpha values for regularization",
      "Model Validation: Used cross-validation to assess model stability and generalization",
      "Performance Metrics: Evaluated models using RMSE, MAE, and R² score",
      "Residual Analysis: Examined prediction errors to ensure model assumptions are met"
    ],
    results: [
      "Improved RMSE by 30% through GridSearchCV hyperparameter optimization",
      "Achieved R² score of 0.85, explaining 85% of variance in insurance costs",
      "Identified smoking status and BMI as strongest predictors of insurance costs",
      "Ridge regression provided best balance between bias and variance",
      "Reduced prediction error to within $1,500 for 90% of cases",
      "Model provides interpretable coefficients for business insights"
    ],
    learnings: [
      "Feature engineering dramatically improves regression model performance",
      "Regularization techniques help prevent overfitting in linear models",
      "GridSearchCV automates hyperparameter tuning process efficiently",
      "Interaction features capture important relationships between variables",
      "Residual analysis is essential for validating regression assumptions",
      "Model interpretability is valuable for stakeholder trust and adoption"
    ],
    github: "https://github.com/AbhijeetJadhav72"
  },
  {
    id: "earthquake-damage-prediction",
    title: "Earthquake Damage Prediction",
    description: "Multi-class classification system comparing Random Forest, Gradient Boosting, and XGBoost for earthquake damage assessment.",
    tech: ["Python", "Random Forest", "Gradient Boosting", "XGBoost", "Pandas"],
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
    gradient: "from-orange-500 to-red-500",
    problem: "Earthquakes cause devastating damage to buildings and infrastructure, and rapid damage assessment is crucial for emergency response and resource allocation. Manual inspection is slow and dangerous. This project develops a machine learning system to predict building damage levels based on structural characteristics and earthquake parameters, enabling faster response and better resource planning.",
    approach: [
      "Dataset Understanding: Analyzed building features, geological factors, and damage grades",
      "Feature Selection: Identified key predictors including building age, foundation type, and ground conditions",
      "Data Preprocessing: Handled missing values, encoded categorical variables, and normalized features",
      "Class Balancing: Addressed imbalanced damage categories using SMOTE and class weighting",
      "Model Development: Implemented Random Forest, Gradient Boosting, and XGBoost classifiers",
      "Ensemble Methods: Combined predictions from multiple models for improved accuracy",
      "Hyperparameter Optimization: Tuned tree depth, learning rate, and number of estimators",
      "Feature Importance Analysis: Identified most critical factors in damage prediction"
    ],
    results: [
      "XGBoost achieved highest accuracy of 84% in damage classification",
      "Successfully classified buildings into 5 damage categories",
      "Identified foundation type and building age as top predictive features",
      "Ensemble approach improved prediction stability by 12%",
      "Model can process 10,000 buildings in under 5 seconds",
      "Feature importance insights help prioritize building reinforcement efforts"
    ],
    learnings: [
      "Gradient boosting methods excel at handling complex non-linear relationships",
      "Feature engineering from domain knowledge significantly improves model performance",
      "Class imbalance handling is crucial for fair multi-class classification",
      "XGBoost's regularization helps prevent overfitting in tree-based models",
      "Ensemble methods provide more robust predictions than single models",
      "Feature importance analysis provides actionable insights for disaster preparedness"
    ],
    github: "https://github.com/AbhijeetJadhav72"
  },
  {
    id: "credit-score-prediction",
    title: "Credit Score Prediction",
    description: "Sophisticated classification system for predicting credit scores with advanced cross-validation techniques.",
    tech: ["Python", "Scikit-learn", "Cross-Validation", "Classification", "Pandas"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    gradient: "from-indigo-500 to-purple-500",
    problem: "Financial institutions need reliable methods to assess creditworthiness and make informed lending decisions. Traditional credit scoring methods may miss important patterns and relationships in customer data. This project creates an ML-based credit scoring system that provides accurate, fair, and interpretable credit assessments while reducing default risk.",
    approach: [
      "Data Collection: Gathered comprehensive financial history including payment records, debt ratios, and credit utilization",
      "Exploratory Analysis: Examined distributions and correlations of financial indicators",
      "Feature Engineering: Created derived features like debt-to-income ratio and payment consistency metrics",
      "Data Preprocessing: Handled missing values, outliers, and scaled features appropriately",
      "Model Selection: Compared Logistic Regression, Random Forest, and Gradient Boosting classifiers",
      "Cross-Validation: Implemented stratified k-fold cross-validation for robust evaluation",
      "Threshold Optimization: Adjusted classification thresholds for optimal business outcomes",
      "Bias Detection: Analyzed model fairness across different demographic groups"
    ],
    results: [
      "Achieved 88% accuracy in credit score classification",
      "Reduced default prediction error by 22% compared to traditional methods",
      "Cross-validation showed consistent performance across all folds (±2% variance)",
      "Identified payment history and credit utilization as strongest predictors",
      "Model provides probability scores for risk-based decision making",
      "Successfully validated model fairness across different customer segments"
    ],
    learnings: [
      "Cross-validation is essential for reliable model evaluation in financial applications",
      "Feature engineering from domain expertise improves predictive power significantly",
      "Probability calibration helps provide more accurate confidence scores",
      "Model interpretability is crucial for regulatory compliance in finance",
      "Fairness metrics should be monitored to prevent discriminatory predictions",
      "Threshold optimization balances business objectives with model performance"
    ],
    github: "https://github.com/AbhijeetJadhav72"
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}
