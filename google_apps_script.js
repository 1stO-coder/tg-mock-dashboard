// This script acts as the backend API for the TG Mock Score Dashboard.
// To deploy:
// 1. Open a Google Sheet.
// 2. Click Extensions > Apps Script.
// 3. Delete any default code and paste this code.
// 4. Click the 'Save' icon.
// 5. Click 'Deploy' > 'New deployment'.
// 6. Click the gear icon next to 'Select type' and select 'Web app'.
// 7. Change 'Who has access' to 'Anyone'.
// 8. Click 'Deploy', authorize the permissions, and copy the Web App URL.

function doGet(e) {
  return handleResponse(getData());
}

function doPost(e) {
  try {
    // We send payloads as text/plain from the client to bypass CORS preflight OPTIONS request
    var requestData = JSON.parse(e.postData.contents);
    var action = requestData.action;
    var result;
    
    if (action === "addMock") {
      result = addMock(requestData.mockName, requestData.parts);
    } else if (action === "editMock") {
      result = editMock(requestData.oldMockName, requestData.newMockName, requestData.parts, requestData.partRenames);
    } else if (action === "saveScore") {
      result = saveScore(requestData.mockName, requestData.candidateName, requestData.scores);
    } else if (action === "deleteScore") {
      result = deleteScore(requestData.mockName, requestData.candidateName);
    } else if (action === "deleteMock") {
      result = deleteMock(requestData.mockName);
    } else {
      throw new Error("Unknown action: " + action);
    }
    
    return handleResponse({ success: true, result: result });
  } catch (error) {
    return handleResponse({ success: false, error: error.toString() });
  }
}

// Ensure the sheets exist and return the database state
function getData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var mocksSheet = ss.getSheetByName("Mocks") || createMocksSheet(ss);
  var scoresSheet = ss.getSheetByName("Scores") || createScoresSheet(ss);
  
  var mocksData = mocksSheet.getDataRange().getValues();
  var scoresData = scoresSheet.getDataRange().getValues();
  
  var mocks = {};
  var scores = [];
  
  // Parse Mocks (Columns: Mock Name, Part Name, Max Score, Created At)
  // Skip header (i = 0)
  for (var i = 1; i < mocksData.length; i++) {
    var row = mocksData[i];
    var mockName = row[0];
    var partName = row[1];
    var maxScore = Number(row[2]);
    
    if (!mockName) continue;
    
    if (!mocks[mockName]) {
      mocks[mockName] = {
        name: mockName,
        parts: []
      };
    }
    
    mocks[mockName].parts.push({
      name: partName,
      max: maxScore
    });
  }
  
  // Parse Scores (Columns: Timestamp, Mock Name, Candidate Name, Part Name, Score)
  // Skip header (i = 0)
  // We want to group by mockName + candidateName
  var tempScores = {}; // Key: mockName + "|||" + candidateName
  
  for (var j = 1; j < scoresData.length; j++) {
    var sRow = scoresData[j];
    var timestamp = sRow[0];
    var mockName = sRow[1];
    var candidateName = sRow[2];
    var partName = sRow[3];
    var scoreValue = Number(sRow[4]);
    
    if (!mockName || !candidateName) continue;
    
    var key = mockName + "|||" + candidateName;
    if (!tempScores[key]) {
      tempScores[key] = {
        mockName: mockName,
        candidateName: candidateName,
        scores: {}
      };
    }
    
    tempScores[key].scores[partName] = scoreValue;
  }
  
  // Convert tempScores to array
  for (var key in tempScores) {
    scores.push(tempScores[key]);
  }
  
  return {
    mocks: Object.values(mocks),
    scores: scores
  };
}

function addMock(mockName, parts) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Mocks") || createMocksSheet(ss);
  
  // Remove existing definition for this mock if it exists (redefine)
  deleteRowsByCondition(sheet, function(row) {
    return row[0] === mockName;
  });
  
  // Append new part definitions
  var timestamp = new Date();
  var rowsToAdd = [];
  for (var i = 0; i < parts.length; i++) {
    rowsToAdd.push([mockName, parts[i].name, parts[i].max, timestamp]);
  }
  
  if (rowsToAdd.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, rowsToAdd.length, 4).setValues(rowsToAdd);
  }
  return "Mock '" + mockName + "' added successfully with " + parts.length + " parts.";
}

function editMock(oldMockName, newMockName, parts, partRenames) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var mocksSheet = ss.getSheetByName("Mocks") || createMocksSheet(ss);
  var scoresSheet = ss.getSheetByName("Scores") || createScoresSheet(ss);
  
  // 1. Update mock name in Scores sheet if renamed
  if (oldMockName !== newMockName) {
    var lastRowS = scoresSheet.getLastRow();
    if (lastRowS > 1) {
      var sRange = scoresSheet.getRange(2, 2, lastRowS - 1, 1); // Mock Name column
      var sValues = sRange.getValues();
      for (var i = 0; i < sValues.length; i++) {
        if (sValues[i][0] === oldMockName) {
          sValues[i][0] = newMockName;
        }
      }
      sRange.setValues(sValues);
    }
  }
  
  // 2. Update part names in Scores sheet based on partRenames mapping
  if (partRenames && Object.keys(partRenames).length > 0) {
    var lastRowS = scoresSheet.getLastRow();
    if (lastRowS > 1) {
      var sRangeParts = scoresSheet.getRange(2, 2, lastRowS - 1, 3); // Columns: Mock Name, Candidate Name, Part Name
      var sValuesParts = sRangeParts.getValues();
      var changed = false;
      for (var i = 0; i < sValuesParts.length; i++) {
        var rowMock = sValuesParts[i][0];
        var rowPart = sValuesParts[i][2];
        if (rowMock === newMockName && partRenames[rowPart] !== undefined) {
          sValuesParts[i][2] = partRenames[rowPart];
          changed = true;
        }
      }
      if (changed) {
        sRangeParts.setValues(sValuesParts);
      }
    }
  }
  
  // 3. Delete old mock definition in Mocks sheet
  deleteRowsByCondition(mocksSheet, function(row) {
    return row[0] === oldMockName;
  });
  
  // 4. Add new mock definitions
  var timestamp = new Date();
  var rowsToAdd = [];
  for (var i = 0; i < parts.length; i++) {
    rowsToAdd.push([newMockName, parts[i].name, parts[i].max, timestamp]);
  }
  if (rowsToAdd.length > 0) {
    mocksSheet.getRange(mocksSheet.getLastRow() + 1, 1, rowsToAdd.length, 4).setValues(rowsToAdd);
  }
  
  // 5. Delete score entries for parts that were removed in the edit
  var partNamesList = parts.map(function(p) { return p.name; });
  deleteRowsByCondition(scoresSheet, function(row) {
    return row[1] === newMockName && partNamesList.indexOf(row[3]) === -1;
  });
  
  return "Mock '" + oldMockName + "' successfully updated/renamed to '" + newMockName + "'";
}

function saveScore(mockName, candidateName, scores) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Scores") || createScoresSheet(ss);
  
  // Remove existing scores for this candidate under this mock
  deleteRowsByCondition(sheet, function(row) {
    return row[1] === mockName && row[2] === candidateName;
  });
  
  // Append new scores
  var timestamp = new Date();
  var rowsToAdd = [];
  for (var partName in scores) {
    rowsToAdd.push([timestamp, mockName, candidateName, partName, scores[partName]]);
  }
  
  if (rowsToAdd.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, rowsToAdd.length, 5).setValues(rowsToAdd);
  }
  return "Scores for candidate '" + candidateName + "' in mock '" + mockName + "' saved successfully.";
}

function deleteScore(mockName, candidateName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Scores") || createScoresSheet(ss);
  
  deleteRowsByCondition(sheet, function(row) {
    return row[1] === mockName && row[2] === candidateName;
  });
  return "Scores for candidate '" + candidateName + "' in mock '" + mockName + "' deleted.";
}

function deleteMock(mockName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var mocksSheet = ss.getSheetByName("Mocks") || createMocksSheet(ss);
  var scoresSheet = ss.getSheetByName("Scores") || createScoresSheet(ss);
  
  deleteRowsByCondition(mocksSheet, function(row) {
    return row[0] === mockName;
  });
  
  deleteRowsByCondition(scoresSheet, function(row) {
    return row[1] === mockName;
  });
  
  return "Mock '" + mockName + "' and all associated scores deleted.";
}

// Helper to delete rows by condition from bottom to top to preserve index safety
function deleteRowsByCondition(sheet, conditionFn) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return; // Only header exists or empty
  
  var range = sheet.getRange(1, 1, lastRow, sheet.getLastColumn());
  var values = range.getValues();
  
  // Loop backwards from bottom
  for (var i = lastRow - 1; i >= 1; i--) {
    if (conditionFn(values[i])) {
      sheet.deleteRow(i + 1);
    }
  }
}

// Initialization helpers
function createMocksSheet(ss) {
  var sheet = ss.insertSheet("Mocks");
  sheet.appendRow(["Mock Name", "Part Name", "Max Score", "Created At"]);
  sheet.getRange("A1:D1").setFontWeight("bold").setBackground("#e0f2fe");
  sheet.setFrozenRows(1);
  return sheet;
}

function createScoresSheet(ss) {
  var sheet = ss.insertSheet("Scores");
  sheet.appendRow(["Timestamp", "Mock Name", "Candidate Name", "Part Name", "Score"]);
  sheet.getRange("A1:E1").setFontWeight("bold").setBackground("#dcfce7");
  sheet.setFrozenRows(1);
  return sheet;
}

// JSON CORS responder
function handleResponse(data) {
  var json = JSON.stringify(data);
  return ContentService.createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}
