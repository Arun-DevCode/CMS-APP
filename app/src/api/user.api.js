export async function getUserProfile() {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) throw new Error("failed to fetch token!");

    const res = await fetch("http://localhost:5000/api/auth/get-profile", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    // Parse JSON response into a unique variable name 'result'
    const result = await res.json();

    if (!res.ok) {
      throw new Error("failed to fetch user profile!");
    }

    return result; // {}
  } catch (error) {
    alert(error.message);
    console.error(error.message);
  }
}
