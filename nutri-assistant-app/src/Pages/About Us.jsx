import React from 'react';

function About() {
  return (
    <div className="px-4 md:px-12 lg:px-32 py-10 bg-gray-50 text-gray-800 space-y-12 min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/gold.jpg')"}}>
      
      {/* Intro */}
      <div className="text-center space-y-4 border border-gray-300 shadow-md rounded-md p-3 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-primary text-blue-500">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to <strong>Healthy Life</strong> – your trusted companion in personal nutrition and wellness.
        </p>
      </div>

      {/* Mission */}
      <div className="space-y-3 border border-gray-300 shadow-md rounded-md p-3 bg-white">
        <h2 className="text-2xl font-semibold text-indigo-700">Our Mission</h2>
        <p>
          At Healthy-Life, our mission is to make evidence-based nutrition guidance accessible and actionable for everyone. We are committed to helping individuals understand their nutritional status, make informed dietary choices, and take meaningful steps toward better health.
        </p>
      </div>

      {/* Vision */}
      <div className="space-y-3 border border-gray-300 shadow-md rounded-md p-3 bg-white">
        <h2 className="text-2xl font-semibold text-indigo-700">Our Vision</h2>
        <p>
          We envision a world where everyone, regardless of location or background, has access to the tools they need to live healthier lives. Through continuous innovation and a commitment to quality, we strive to support individuals and communities in achieving better nutrition and lasting well-being.
        </p>
      </div>

      {/* Core Values */}
      <div className="space-y-3 border border-gray-300 shadow-md rounded-md p-3 bg-white">
        <h2 className="text-2xl font-semibold text-indigo-700">Core Values</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Quality</li>
          <li>Innovation</li>
          <li>Empowerment</li>
          <li>Compassion</li>
          <li>Empathy</li>
        </ul>
      </div>

      {/* What Makes Us Different */}
      <div className="space-y-3 border border-gray-300 shadow-md rounded-md p-3 bg-white">
        <h2 className="text-2xl font-semibold text-indigo-700">What Makes Us Different</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Built by a certified nutritionist with real-world experience in addressing health and nutrition challenges.</li>
          <li>Focused on delivering scientifically accurate insights and personalized recommendations.</li>
          <li>Designed with user-friendliness in mind, ensuring people of all backgrounds can use and benefit from the app.</li>
          <li>Offers clear assessments such as Body Mass Index (BMI), Waist-Hip Ratio (WHR), and practical meal suggestions aligned with health goals.</li>
        </ul>
      </div>

      {/* Meet the Creator */}
      <div className="space-y-5 md:flex md:items-center md:gap-8 border border-gray-300 shadow-md rounded-md p-3 bg-white">
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold text-indigo-700">Meet the Creator</h2>
          <p>
            Healthy-Life was developed by <strong>Wilfred Osozi</strong>, a registered nutritionist and front-end developer passionate about leveraging technology to improve lives. With a background in nutrition and a deep commitment to public health, Wilfred brings both expertise and empathy to every aspect of the app.
          </p>
          <div className='mt-6'>
          <img 
          src="/images/sozi.jpg"
          alt="Wilfred Osozi"
          className="w-[180px] h-[120px] rounded-md shadow-md object-cover mt-4 md:mt-0"
         />
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default About;
