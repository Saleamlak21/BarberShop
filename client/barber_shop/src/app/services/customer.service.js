// create a function to get all customers
async function getCustomers() {
    try {
      const response = await fetch(`http://localhost:3001/api/get-users`, {
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

  //export all functions
    export default {
        getCustomers,
    };
  