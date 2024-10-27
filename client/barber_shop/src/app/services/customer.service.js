// create a function to get all customers
async function getCustomers() {
  try {
    const response = await fetch(`http://localhost:3001/api/get-trades`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch customers");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error; // Re-throw the error to let the caller handle it
  }
}

// creat a function to post a trade image
async function postTradeImage(formData) {
    try {
      const response = await fetch(`http://localhost:3001/api/post-trade-image`, {
        method: "POST",
        // Don't set Content-Type; let the browser set it for multipart/form-data
        body: formData, // Use the FormData instance directly
      });
  
      if (!response.ok) {
        throw new Error("Failed to post trade image");
      }
  
      return await response.json(); // Parse the JSON response
    } catch (error) {
      console.error("Error posting trade image:", error);
      throw error; // Re-throw the error to let the caller handle it
    }
  }
  

//export all functions
export default {
  getCustomers,
  postTradeImage,
};
