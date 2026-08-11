const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

/**
 * Submit feedback to Google Sheets via Apps Script.
 * @param {{ rating: number, query: string, suggestion: string }} data
 * @returns {Promise<{ status: string, message: string }>}
 */
export async function submitFeedback(data) {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === "YOUR_APPS_SCRIPT_URL_HERE") {
    throw new Error("Apps Script URL not configured. Check your .env file.");
  }

  const payload = {
    timestamp:  new Date().toISOString(),
    name:       (data.name || "").trim(),
    regdNumber: (data.regdNumber || "").trim(),
    rating:     data.rating,
    query:      data.query.trim(),
    suggestion: (data.suggestion || "").trim(),
  };

  try {
    const formData = new URLSearchParams();
    formData.append("timestamp", payload.timestamp);
    formData.append("name", payload.name);
    formData.append("regdNumber", payload.regdNumber);
    formData.append("rating", payload.rating);
    formData.append("query", payload.query);
    formData.append("suggestion", payload.suggestion);

    await fetch(APPS_SCRIPT_URL, {
      method:  "POST",
      mode:    "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:    formData,
    });
    
    // In "no-cors" mode, the response is opaque and we cannot read it.
    // If the fetch didn't throw a network error, we assume it succeeded.
    return { status: "success", message: "Feedback submitted successfully." };
  } catch (error) {
    throw new Error("Failed to submit feedback. Please check your connection.");
  }
}
