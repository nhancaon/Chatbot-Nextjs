import { fetchResponseFromAPI } from "./../api/chatbotApi";
import data_options from "./../constants/options";

const linkMap = new Map();
[...data_options.marketplace, ...data_options.categories, ...data_options.solutions, ...data_options.model, ...data_options.business].forEach(item => {
  if (item.link) {
    linkMap.set(item.name, item.link);
  }
});

const flow = {
  start: {
    message: "Hello, I am Bam 👋!",
    transition: { duration: 1000 },
    path: "go",
  },
  go: {
    message: "How can I help you😊?",
    transition: { duration: 1000 },
    path: "show_options",
  },
  show_options: {
    options: data_options.marketplace.map((item) => item.name),
    path: "process_options",
  },
  prompt_again: {
    message: "Do you need any other help?",
    options: ["Yes", "No"],
    path: "process_options",
  },
  process_options: {
    transition: { duration: 0 },
    chatDisabled: true,
    path: async (params: any) => {
      if (params.userInput === "Yes") {
        return "go";
      } else if (params.userInput === "No") {
        return "model";
      } else if (params.userInput === "Categories") {
        return "categories";
      } else if (params.userInput === "Solution") {
        return "solutions";
      } else if (params.userInput === "Potential collaboraion model") {
        return "model";
      } else if (params.userInput === "Business problems") {
        return "business";
      } else if (linkMap.has(params.userInput)) {
        const link = linkMap.get(params.userInput);
        await params.injectMessage("Redirecting you to the page...");
        setTimeout(() => {
          window.open(link, "_blank");
        }, 1000);
        return "prompt_again";
      } else return "user_input"
    }
  },
  categories: {
    options: data_options.categories.map((item) => item.name),
    path: "process_options",
  },
  solution: {
    options: data_options.solutions.map((item) => item.name),
    path: "process_options",
  },
  model: {
    options: data_options.model.map((item) => item.name),
    path: "process_options",
  },
  business: {
    options: data_options.business.map((item) => item.name),
    path: "process_options",
  },
  user_input: {
    message: async (userMessage: any, params: any) => {
      const replyFromAPI = await fetchResponseFromAPI(userMessage);
      return replyFromAPI;
    },
  },
};

export default flow;
