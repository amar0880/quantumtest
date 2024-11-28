    // Smooth scrolling to specific section when button is clicked
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
  // DOM Elements
const circle = document.getElementById("circle");
const contactLinks = document.getElementById("contactLinks");
const chatbotButton = document.getElementById("chatbotButton");
const chatbotWindow = document.getElementById("chatbotWindow");
const chatbotBody = document.getElementById("chatbotBody");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSend = document.getElementById("chatbotSend");
const chatbotClose = document.getElementById("chatbotClose");

// Intents for chatbot responses
const intents = [
  {
    patterns: [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good evening",
      "greetings",
      "what's up",
      "how are you",
      "yo",
    ],
    responses: [
      "Hello! How can I assist you today?",
      "Hi there! Welcome to Quantum Global Networks. How can I help?",
      "Greetings! Let me know how I can make your experience great today.",
      "Good Morning ! How can I assist You Today?"
      
    ],
  },
  {
    patterns: [
      "tell me about your company",
      "what does your company do",
      "about quantum global networks",
      "what is quantum global networks",
      "who are you",
    ],
    responses: [
      "Quantum Global Networks is a technology-driven company offering IT development, digital marketing, import-export consulting, and BPO services. We help businesses grow with tailored solutions.",
      "We specialize in IT, lead generation, digital marketing, B2B import-export services, and e-commerce. Let me know if you'd like to explore more about any of these.",
      "We focus on connecting businesses globally through advanced tech solutions and business services. Want to know more about a specific service?",
    ],
  },
  {
    patterns: [
      "what services do you offer",
      "services",
      "what do you provide",
      "what are your services",
      "list your services",
    ],
    responses: [
      "Our services include:\n1. IT Development (Web, Blockchain, Cloud Computing)\n2. Lead Generation using High-Tech AI\n3. Digital Marketing (SEO, Social Media, Paid Ads)\n4. Import-Export B2B Consulting\n5. BPO Services\n6. E-commerce Solutions\n\nLet me know if you'd like detailed info on any of these.",
      "We offer comprehensive services like IT solutions, digital marketing, lead generation, and BPO. Which area would you like to explore further?",
    ],
  },
  {
    patterns: [
      "how can I contact you",
      "contact information",
      "how to reach you",
      "contact details",
      "support",
      "need help",
    ],
    responses: [
      "You can email us at **support@quantumglobalnetworks.com** or call us at **020-66666016**. Alternatively, use our website's Contact Us page for quick inquiries.",
      "Feel free to contact us via email: **support@quantumglobalnetworks.com** or phone: **020-66666016**. We're here to help!",
    ],
  },
  {
    patterns: [
      "how do you work",
      "what is your work process",
      "how do you manage projects",
      "tell me about your approach",
      "work methodology",
    ],
    responses: [
      "Our work process involves: understanding client needs, creating tailored solutions, executing strategies with expert teams, and delivering measurable results. Let us know your requirements to begin!",
      "We follow a collaborative approach: \n1. Discovery Phase\n2. Customized Planning\n3. Execution with Agile Practices\n4. Feedback and Optimization\n\nHow can we assist you today?",
    ],
  },
  {
    patterns: [
      "what are your prices",
      "pricing details",
      "how much do you charge",
      "packages",
      "cost of services",
    ],
    responses: [
      "Our pricing depends on the scope and type of project. Let us know your requirements, and we'll provide a customized quote.",
      "We offer competitive pricing tailored to your needs. Would you like to share your project details for an estimate?",
    ],
  },
  {
    patterns: [
      "are you hiring",
      "job openings",
      "career opportunities",
      "work with you",
      "how can I apply",
    ],
    responses: [
      "We’re always on the lookout for talented individuals. Check out our Careers page or email your resume to **careers@quantumglobalnetworks.com**.",
      "Interested in joining us? Send your resume to **careers@quantumglobalnetworks.com** or visit our website for open positions.",
    ],
  },
  {
    patterns: [
      "I have an issue",
      "technical problem",
      "need support",
      "help with services",
      "problem with your service",
    ],
    responses: [
      "I’m here to help. Please provide details about the issue, or contact us at **support@quantumglobalnetworks.com**.",
      "Let us resolve this for you. Email us at **support@quantumglobalnetworks.com** or describe your problem here.",
    ],
  },
  {
    patterns: [
      "can you provide custom solutions",
      "customized services",
      "tailored solutions",
      "specific requirements",
    ],
    responses: [
      "Absolutely! We specialize in delivering tailored solutions. Share your requirements, and we'll create a strategy that works for you.",
      "Yes, we provide fully customized services. Let me know what you’re looking for, and we’ll assist you.",
    ],
  },

  {
    patterns: [
      "what industries do you work with",
      "do you work internationally",
      "is your service available globally",
      "who are your clients",
    ],
    responses: [
      "We work across industries like IT, e-commerce, healthcare, and BPO. Our services are available globally, supporting businesses in various sectors.",
      "Yes, we cater to clients worldwide, specializing in industries like IT, healthcare, and e-commerce. How can we help you today?",
    ],
  },
];


// Helper function to get chatbot response
function getChatbotResponse(input) {
  input = input.toLowerCase().trim(); // Normalize input by converting to lowercase and trimming spaces
  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      // Use a more robust matching approach
      const regex = new RegExp(`\\b${pattern}\\b`, "i"); // Match whole words, case-insensitive
      if (regex.test(input)) {
        return intent.responses[
          Math.floor(Math.random() * intent.responses.length)
        ];
      }
    }
  }
  return "I'm sorry, I didn't understand that. Can you rephrase?";
}


// Toggle contact links visibility
circle.addEventListener("click", () => {
  contactLinks.style.display =
    contactLinks.style.display === "flex" ? "none" : "flex";
});

// Open/Close chatbot window
chatbotButton.addEventListener("click", () => {
  if (chatbotWindow.style.display === "flex") {
    chatbotWindow.style.display = "none";
  } else {
    chatbotWindow.style.display = "flex";
    resetChatbot(); // Reset chatbot on open
  }
});

chatbotClose.addEventListener("click", () => {
  chatbotWindow.style.display = "none";
});

// Reset chatbot content
function resetChatbot() {
  chatbotBody.innerHTML = `<p><strong>Quanta:</strong> Hello! How can I assist you today?</p>`;
  chatbotInput.value = "";
}

// Handle sending messages
chatbotSend.addEventListener("click", () => sendMessage());
chatbotInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

// Send user message and get response
function sendMessage() {
  const userMessage = chatbotInput.value.trim();
  if (userMessage) {
    // Display user message
    chatbotBody.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    chatbotInput.value = "";

    // Generate chatbot response
    setTimeout(() => {
      const botResponse = getChatbotResponse(userMessage);
      chatbotBody.innerHTML += `<p><strong>Quanta:</strong> ${botResponse}</p>`;
      chatbotBody.scrollTop = chatbotBody.scrollHeight; // Auto-scroll to bottom
    }, 500);
  }
}
