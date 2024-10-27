import ticTacToe from '/public/image/ticTacToe.jpg';
import dnaCompression from '/public/image/dnaCompression.jpg';
import cyberIncidentFeed from '/public/image/cyberIncidentFeed.jpg';
import foodOrderingSystem from '/public/image/foodOrderingSystem.jpg';
import generativeAIProject from '/public/image/generativeAIProject.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Next-Generation DNA Sequence Compression',
        description: "A project focusing on DNA sequence data compression using TensorFlow and neural networks. I am currently working on optimizing the model with CNNs to better handle non-sequential data, aiming to achieve efficient data compression with high accuracy.",
        tools: ['TensorFlow', 'Python', 'RandomForestRegressor', 'CNN'],
        role: 'Machine Learning Engineer',
        code: '',
        demo: '',
        image: dnaCompression,
    },
    {
        id: 2,
        name: 'MERN Full Stack Enterprise Food Ordering System',
        description: "A full-stack food ordering application developed using the MERN stack, providing a seamless user experience for food selection, cart functionality, and order placement. Focused on implementing scalable, secure, and efficient backend services for real-time data handling.",
        tools: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: foodOrderingSystem,
    },
    {
        id: 3,
        name: 'Real-Time Tic Tac Toe',
        description: "Built a real-time multiplayer Tic Tac Toe game using Node.js, implementing game mechanics and real-time synchronization to provide users with an interactive and competitive gameplay experience.",
        tools: ['Node.js', 'JavaScript', 'Socket.IO'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ticTacToe,
    },
    {
        id: 4,
        name: 'Cyber-Incident Feed Scraper',
        description: "Part of the Smart India Hackathon, this tool provides real-time feeds on cyber incidents specific to Indian cyberspace. Developed using Selenium and MongoDB for data collection, I also created JSON feeds in Python and a dynamic front-end in React with infinite scroll.",
        tools: ['Selenium', 'MongoDB', 'Python', 'React', 'JavaScript'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: cyberIncidentFeed,
    },
    {
        id: 5,
        name: 'Generative AI Project - Accenture Innovation Hackathon',
        description: "Developed as part of the Accenture Innovation Challenge, this generative AI project focuses on data processing and decision-making. Leveraging text generation and image generation APIs to create a robust and intuitive UI using Tailwind CSS, with options for user inputs and file uploads.",
        tools: ['Hugging Face API', 'React', 'Tailwind CSS', 'JavaScript'],
        role: 'AI/ML Developer',
        code: '',
        demo: '',
        image: generativeAIProject,
    }
];
