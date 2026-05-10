function doPost(e) {
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    // Dynamically create the sheet name for today (e.g., "2026-05-11")
    const today = new Date();
    const dailySheetName = Utilities.formatDate(today, Session.getScriptTimeZone(), "yyyy-MM-dd");
    
    let dailySheet = doc.getSheetByName(dailySheetName);
    
    // Create the daily sheet if it doesn't exist for this day
    if (!dailySheet) {
      dailySheet = doc.insertSheet(dailySheetName);
      dailySheet.appendRow(["Timestamp", "Rating", "Stars", "Query", "Suggestion"]);
      dailySheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#f3f4f6");
    }

    let data = {};
    if (e.postData && e.postData.type === "application/json") {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }

    const timestamp = data.timestamp || new Date().toLocaleString();
    const rating = parseInt(data.rating) || 0;
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    const query = data.query || "";
    const suggestion = data.suggestion || "";

    // Save ONLY to the daily sheet
    const rowData = [timestamp, rating, stars, query, suggestion];
    dailySheet.appendRow(rowData);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Feedback submitted successfully"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Enable CORS for preflight requests if needed (though text/plain often bypasses it)
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON);
}