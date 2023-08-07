import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Welcome to my portfolio website! I am a passionate and driven 2nd year Computer Science student at Texas A&M University with a keen interest in the fascinating world of machine learning. My journey in this field began with curiosity, but it has now evolved into a genuine passion for exploring the limitless potential of artificial intelligence and its applications.

My primary focus lies in the future of machine learning and its transformative impact on the financial sector and various other industries. I believe that machine learning holds the key to unlocking hidden patterns in vast datasets, enabling better decision-making and driving innovation. I am enthusiastic about applying my technical expertise and problem-solving skills to develop cutting-edge algorithms that can revolutionize financial modeling, risk assessment, fraud detection, and trading strategies, among other areas. My coursework and projects at Texas A&M have laid a strong foundation in data analysis, programming, and statistics, which have further ignited my enthusiasm to delve deeper into the intricacies of machine learning
        </p>

        <br />

        <p className="text-xl">
        Through my portfolio, I aim to showcase my academic achievements, personal projects, and professional growth as I venture into the world of machine learning. As I explore diverse datasets and collaborate with industry professionals, I am eager to contribute to the development of efficient and ethical AI solutions that will shape the future of finance and other industries. Join me on this exciting journey as I embark on a quest to bridge the gap between theory and real-world applications in machine learning. Together, let's harness the power of AI to create a brighter and more data-driven future.
        </p>
      </div>
    </div>
  );
};

export default About;
