Basic Nutrition Assistant App with Recipe Finder

Project Overview
The Basic Nutrition Assistant App with Recipe Finder is a web application designed to assess an individual's nutritional status based on key anthropometric measurements and provide personalized dietary recommendations. The app calculates BMI (Body Mass Index) and Waist-Hip Ratio (WHR) to classify users into different health risk categories and suggest meal plans accordingly. Additionally, it integrates a Recipe Finder to help users discover healthy recipes tailored to their specific nutritional needs.

Features
1. User Input Form
Users will enter:
•	Age
•	Weight
•	Height
•	Physical Activity Level
•	Waist Circumference
•	Hip Circumference

2. Nutritional Assessment & Classification
•	BMI Calculation & Classification:
o	Underweight
o	Normal weight
o	Overweight
o	Obese
•	Waist-Hip Ratio Calculation & Health Risk Assessment

3. Meal & Recipe Suggestions
•	Personalized Meal Plans based on BMI and WHR classification.
•	Recipe Finder: Users can search for recipes based on their dietary needs.
•	Healthy Recipe Suggestions fetched from an API (e.g., Edamam API) for:
o	High-protein meals for underweight individuals
o	Low-calorie meals for obese individuals
o	Balanced meals for those with normal weight

Technologies Used
•	Frontend: React, Tailwind CSS
•	State Management: Zustand
•	APIs Used:
o	Nutritionix API (Nutrient breakdown)
o	CalorieNinjas API (Caloric information)
o	Edamam API (Recipe fetching based on dietary needs)
o	Hardcoded meal suggestions for quick recommendations

Project Structure
nutrition-assistant/
│── public/               
│── src/
│   ├── components/           
│   │   ├── Form.js           
│   │   ├── BMIResult.js      
│   │   ├── MealSuggestions.js  
│   │   ├── RecipeFinder.js    # Fetches and displays recipes
│   │   ├── Header.js         
│   │   ├── Footer.js        
│   ├── pages/               
│   │   ├── Home.js          
│   │   ├── Profile.js       
│   ├── api/                 
│   │   ├── mealApi.js       
│   │   ├── recipeApi.js     # API handler for fetching recipes
│   ├── App.js               
│   ├── index.js             
│   ├── styles/              
│── package.json             
│── README.md   


Installation & Setup
1.	Clone the repository:
git clone https://github.com/your-username/nutrition-assistant.git
2.	Navigate into the project folder:
cd nutrition-assistant
3.	Install dependencies:
npm install
4.	Start the development server:
npm start


Usage
1.	Enter your details in the input form.
2.	Receive an assessment of your BMI and Waist-Hip Ratio.
3.	Get personalized meal recommendations based on your health status.
4.	Use the Recipe Finder to discover healthy meal ideas based on your dietary needs.

Deployment
The app can be deployed using:
•	Netlify
•	Vercel
•	GitHub Pages (for static frontend hosting)

To deploy on Netlify, follow these steps:
1.	Push your code to GitHub.
2.	Log in to Netlify and connect your repository.
3.	Configure the build settings (npm run build).
4.	Deploy the project.

Contributing
Contributions are welcome! If you’d like to contribute:
1.	Fork the repository
2.	Create a feature branch: git checkout -b feature-branch
3.	Commit your changes: git commit -m "Added new feature"
4.	Push to the branch: git push origin feature-branch
5.	Create a Pull Request

License
This project is licensed under the MIT License.

Contact
For any inquiries or feedback, feel free to reach out:
•	Email: wilfred.osozi@gmail.com
•	GitHub: https://github.com/Sozi-source
