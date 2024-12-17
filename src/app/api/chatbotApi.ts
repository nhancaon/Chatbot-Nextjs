const fetchResponseFromAPI = async (userMessage: any) => {
  try {
    const userInput = userMessage.userInput || "";
    if (!userInput.trim()) {
      return "Please provide a valid question!";
    }

    const response = await fetch("YOUR_API_URL_HERE", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ question: userInput }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error: ${errorText}`);
      return `HTTP error! status: ${response.status}`;
    }

    const data_options = await response.json();
    return data_options.answer || "Sorry, I couldn't retrieve an answer.";
  } catch (error) {
    console.error("Error fetching data_options:", error);
    return "Sorry, I cannot process your request right now.";
  }
};

export { fetchResponseFromAPI };
