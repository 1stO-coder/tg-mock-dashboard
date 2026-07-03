// TG Mock Score Dashboard - Core Logic

// Configuration
let DEFAULT_API_URL = "https://script.google.com/macros/s/AKfycbwWiC1Vagu2V_jMevuA0CZq0PyMIJGRy5EdeypQC3DhaT_O4NJL05g4gfZNGnxSRkdn/exec";
let apiUrl = DEFAULT_API_URL;

const DEFAULT_DB = {
  "mocks": [
    {
      "name": "Mock TG5",
      "parts": [
        {
          "name": "Series pic",
          "max": 22
        },
        {
          "name": "Non-verbal Reasoning",
          "max": 28
        },
        {
          "name": "3D cube",
          "max": 10
        },
        {
          "name": "Perceptual speed",
          "max": 40
        },
        {
          "name": "Estimating",
          "max": 33
        },
        {
          "name": "Shape scanning",
          "max": 52
        },
        {
          "name": "Cube Folding",
          "max": 20
        },
        {
          "name": "Series Number",
          "max": 32
        },
        {
          "name": "Scanning/Comparing",
          "max": 40
        },
        {
          "name": "Pair of scales",
          "max": 20
        },
        {
          "name": "Interruption",
          "max": 25
        },
        {
          "name": "STM",
          "max": 11
        }
      ]
    },
    {
      "name": "Mock TG1",
      "parts": [
        {
          "name": "Series Picture",
          "max": 30
        },
        {
          "name": "2D Puzzle",
          "max": 21
        },
        {
          "name": "Deviation Scanning",
          "max": 30
        },
        {
          "name": "Series Number",
          "max": 33
        },
        {
          "name": "Block Folding",
          "max": 29
        },
        {
          "name": "STM Passage",
          "max": 21
        },
        {
          "name": "Hidden Image",
          "max": 15
        },
        {
          "name": "Aircraft Orientation",
          "max": 20
        },
        {
          "name": "Block Counting",
          "max": 34
        },
        {
          "name": "Key Fitting",
          "max": 8
        },
        {
          "name": "Oblique View",
          "max": 30
        },
        {
          "name": "Shape Scanning",
          "max": 52
        },
        {
          "name": "Approximation",
          "max": 30
        }
      ]
    },
    {
      "name": "Mock TG2",
      "parts": [
        {
          "name": "Abstract Reasoning",
          "max": 24
        },
        {
          "name": "Cube Assembly",
          "max": 20
        },
        {
          "name": "Series Number",
          "max": 15
        },
        {
          "name": "Deviation Scanning",
          "max": 30
        },
        {
          "name": "Box Folding",
          "max": 33
        },
        {
          "name": "STM Grid",
          "max": 28
        },
        {
          "name": "Interruption",
          "max": 45
        },
        {
          "name": "Block Rotation",
          "max": 25
        },
        {
          "name": "Number Scanning",
          "max": 100
        },
        {
          "name": "Oblique View",
          "max": 16
        },
        {
          "name": "Block Counting",
          "max": 30
        },
        {
          "name": "Numerical Estimation",
          "max": 35
        },
        {
          "name": "Spatial Apperception",
          "max": 35
        },
        {
          "name": "Key Fitting",
          "max": 10
        }
      ]
    },
    {
      "name": "Mock TG3",
      "parts": [
        {
          "name": "Visual Logic",
          "max": 39
        },
        {
          "name": "2-D Puzzle",
          "max": 19
        },
        {
          "name": "Computer Checking",
          "max": 40
        },
        {
          "name": "Series Number",
          "max": 23
        },
        {
          "name": "Box Folding",
          "max": 30
        },
        {
          "name": "STM Passage",
          "max": 21
        },
        {
          "name": "Interruption",
          "max": 30
        },
        {
          "name": "Symbol & Condition",
          "max": 60
        },
        {
          "name": "Solid Figure Turning",
          "max": 27
        },
        {
          "name": "Aircraft Rotation",
          "max": 30
        },
        {
          "name": "Numerical Estimation",
          "max": 35
        },
        {
          "name": "Electrical Maze",
          "max": 20
        },
        {
          "name": "Systems",
          "max": 120
        }
      ]
    },
    {
      "name": "Mock TG4",
      "parts": [
        {
          "name": "Logical Reasoning",
          "max": 25
        },
        {
          "name": "Deviation Scanning",
          "max": 30
        },
        {
          "name": "Cube Assembly",
          "max": 20
        },
        {
          "name": "Series Number",
          "max": 19
        },
        {
          "name": "Shape Scanning",
          "max": 52
        },
        {
          "name": "Box Folding",
          "max": 15
        },
        {
          "name": "STM",
          "max": 28
        },
        {
          "name": "Interruption",
          "max": 50
        },
        {
          "name": "Number Skill",
          "max": 40
        },
        {
          "name": "Logic Gates",
          "max": 20
        },
        {
          "name": "Block Rotation",
          "max": 25
        },
        {
          "name": "Cube Turning",
          "max": 18
        },
        {
          "name": "Key Fitting",
          "max": 10
        },
        {
          "name": "Tracing",
          "max": 29
        }
      ]
    }
  ],
  "scores": [
    {
      "mockName": "Mock TG5",
      "candidateName": "FH",
      "scores": {
        "Series pic": 22,
        "Non-verbal Reasoning": 14,
        "3D cube": 8,
        "Perceptual speed": 40,
        "Estimating": 32,
        "Shape scanning": 40,
        "Cube Folding": 18,
        "Series Number": 29,
        "Scanning/Comparing": 38,
        "Pair of scales": 19,
        "Interruption": 15,
        "STM": 9
      }
    },
    {
      "mockName": "Mock TG5",
      "candidateName": "เค้กนมสด",
      "scores": {
        "Series pic": 18,
        "Non-verbal Reasoning": 13,
        "3D cube": 7,
        "Perceptual speed": 40,
        "Estimating": 28,
        "Shape scanning": 34,
        "Cube Folding": 16,
        "Series Number": 28,
        "Scanning/Comparing": 36,
        "Pair of scales": 11,
        "Interruption": 12,
        "STM": 11
      }
    },
    {
      "mockName": "Mock TG5",
      "candidateName": "B",
      "scores": {
        "Series pic": 19,
        "Non-verbal Reasoning": 13,
        "3D cube": 7,
        "Perceptual speed": 40,
        "Estimating": 30,
        "Shape scanning": 31,
        "Cube Folding": 14,
        "Series Number": 24,
        "Scanning/Comparing": 35,
        "Pair of scales": 6,
        "Interruption": 12,
        "STM": 8
      }
    },
    {
      "mockName": "Mock TG5",
      "candidateName": "ATTOS",
      "scores": {
        "Series pic": 18,
        "Non-verbal Reasoning": 15,
        "3D cube": 6,
        "Perceptual speed": 40,
        "Estimating": 30,
        "Shape scanning": 35,
        "Cube Folding": 11,
        "Series Number": 28,
        "Scanning/Comparing": 36,
        "Pair of scales": 12,
        "Interruption": 12,
        "STM": 8
      }
    },
    {
      "mockName": "Mock TG5",
      "candidateName": "ST",
      "scores": {
        "Series pic": 18,
        "Non-verbal Reasoning": 11,
        "3D cube": 5,
        "Perceptual speed": 40,
        "Estimating": 33,
        "Shape scanning": 32,
        "Cube Folding": 11,
        "Series Number": 32,
        "Scanning/Comparing": 34,
        "Pair of scales": 8,
        "Interruption": 17,
        "STM": 9
      }
    },
    {
      "mockName": "Mock TG1",
      "candidateName": "Shabu",
      "scores": {
        "Series Picture": 20,
        "2D Puzzle": 18,
        "Deviation Scanning": 24,
        "Series Number": 30,
        "Block Folding": 28,
        "STM Passage": 21,
        "Hidden Image": 10,
        "Aircraft Orientation": 19,
        "Block Counting": 34,
        "Key Fitting": 3,
        "Oblique View": 28,
        "Shape Scanning": 52,
        "Approximation": 20
      }
    },
    {
      "mockName": "Mock TG1",
      "candidateName": "ST",
      "scores": {
        "Series Picture": 19,
        "2D Puzzle": 15,
        "Deviation Scanning": 19,
        "Series Number": 27,
        "Block Folding": 29,
        "STM Passage": 13,
        "Hidden Image": 6,
        "Aircraft Orientation": 19,
        "Block Counting": 33,
        "Key Fitting": 2,
        "Oblique View": 23,
        "Shape Scanning": 36,
        "Approximation": 24
      }
    },
    {
      "mockName": "Mock TG1",
      "candidateName": "Frame",
      "scores": {
        "Series Picture": 10,
        "2D Puzzle": 18,
        "Deviation Scanning": 14,
        "Series Number": 11,
        "Block Folding": 19,
        "STM Passage": 11,
        "Hidden Image": 4,
        "Aircraft Orientation": 6,
        "Block Counting": 21,
        "Key Fitting": 3,
        "Oblique View": 21,
        "Shape Scanning": 31,
        "Approximation": 19
      }
    },
    {
      "mockName": "Mock TG1",
      "candidateName": "Chanol",
      "scores": {
        "Series Picture": 15,
        "2D Puzzle": 15,
        "Deviation Scanning": 19,
        "Series Number": 26,
        "Block Folding": 29,
        "STM Passage": 15,
        "Hidden Image": 12,
        "Aircraft Orientation": 13,
        "Block Counting": 24,
        "Key Fitting": 3,
        "Oblique View": 23,
        "Shape Scanning": 41,
        "Approximation": 24
      }
    },
    {
      "mockName": "Mock TG1",
      "candidateName": "Holala",
      "scores": {
        "Series Picture": 19,
        "2D Puzzle": 20,
        "Deviation Scanning": 26,
        "Series Number": 27,
        "Block Folding": 28,
        "STM Passage": 12,
        "Hidden Image": 10,
        "Aircraft Orientation": 19,
        "Block Counting": 34,
        "Key Fitting": 3,
        "Oblique View": 28,
        "Shape Scanning": 23,
        "Approximation": 25
      }
    },
    {
      "mockName": "Mock TG1",
      "candidateName": "Allstar",
      "scores": {
        "Series Picture": 17,
        "2D Puzzle": 16,
        "Deviation Scanning": 19,
        "Series Number": 24,
        "Block Folding": 29,
        "STM Passage": 9,
        "Hidden Image": 7,
        "Aircraft Orientation": 10,
        "Block Counting": 30,
        "Key Fitting": 1,
        "Oblique View": 22,
        "Shape Scanning": 25,
        "Approximation": 17
      }
    },
    {
      "mockName": "Mock TG2",
      "candidateName": "FH",
      "scores": {
        "Abstract Reasoning": 11,
        "Cube Assembly": 11,
        "Series Number": 12,
        "Deviation Scanning": 20,
        "Box Folding": 32,
        "STM Grid": 16,
        "Interruption": 33,
        "Block Rotation": 20,
        "Number Scanning": 37,
        "Oblique View": 15,
        "Block Counting": 30,
        "Numerical Estimation": 24,
        "Spatial Apperception": 18,
        "Key Fitting": 4
      }
    },
    {
      "mockName": "Mock TG2",
      "candidateName": "Apo",
      "scores": {
        "Abstract Reasoning": 10,
        "Cube Assembly": 8,
        "Series Number": 13,
        "Deviation Scanning": 15,
        "Box Folding": 32,
        "STM Grid": 16,
        "Interruption": 29,
        "Block Rotation": 25,
        "Number Scanning": 31,
        "Oblique View": 16,
        "Block Counting": 29,
        "Numerical Estimation": 22,
        "Spatial Apperception": 34,
        "Key Fitting": 4
      }
    },
    {
      "mockName": "Mock TG2",
      "candidateName": "Shabu",
      "scores": {
        "Abstract Reasoning": 20,
        "Cube Assembly": 17,
        "Series Number": 12,
        "Deviation Scanning": 25,
        "Box Folding": 33,
        "STM Grid": 25,
        "Interruption": 43,
        "Block Rotation": 25,
        "Number Scanning": 33,
        "Oblique View": 16,
        "Block Counting": 30,
        "Numerical Estimation": 19,
        "Spatial Apperception": 34,
        "Key Fitting": 5
      }
    },
    {
      "mockName": "Mock TG2",
      "candidateName": "Holala",
      "scores": {
        "Abstract Reasoning": 16,
        "Cube Assembly": 9,
        "Series Number": 11,
        "Deviation Scanning": 17,
        "Box Folding": 33,
        "STM Grid": 14,
        "Interruption": 27,
        "Block Rotation": 25,
        "Number Scanning": 16,
        "Oblique View": 16,
        "Block Counting": 29,
        "Numerical Estimation": 19,
        "Spatial Apperception": 33,
        "Key Fitting": 5
      }
    },
    {
      "mockName": "Mock TG2",
      "candidateName": "Ball",
      "scores": {
        "Abstract Reasoning": 13,
        "Cube Assembly": 10,
        "Series Number": 11,
        "Deviation Scanning": 20,
        "Box Folding": 32,
        "STM Grid": 15,
        "Interruption": 24,
        "Block Rotation": 21,
        "Number Scanning": 24,
        "Oblique View": 16,
        "Block Counting": 28,
        "Numerical Estimation": 19,
        "Spatial Apperception": 33,
        "Key Fitting": 6
      }
    },
    {
      "mockName": "Mock TG2",
      "candidateName": "ST",
      "scores": {
        "Abstract Reasoning": 13,
        "Cube Assembly": 13,
        "Series Number": 13,
        "Deviation Scanning": 19,
        "Box Folding": 31,
        "STM Grid": 6,
        "Interruption": 31,
        "Block Rotation": 23,
        "Number Scanning": 21,
        "Oblique View": 10,
        "Block Counting": 30,
        "Numerical Estimation": 30,
        "Spatial Apperception": 24,
        "Key Fitting": 4
      }
    },
    {
      "mockName": "Mock TG3",
      "candidateName": "FH",
      "scores": {
        "Visual Logic": 31,
        "2-D Puzzle": 19,
        "Computer Checking": 27,
        "Series Number": 19,
        "Box Folding": 21,
        "STM Passage": 19,
        "Interruption": 30,
        "Symbol & Condition": 18,
        "Solid Figure Turning": 24,
        "Aircraft Rotation": 30,
        "Numerical Estimation": 29,
        "Electrical Maze": 13,
        "Systems": 120
      }
    },
    {
      "mockName": "Mock TG3",
      "candidateName": "ST",
      "scores": {
        "Visual Logic": 30,
        "2-D Puzzle": 14,
        "Computer Checking": 30,
        "Series Number": 20,
        "Box Folding": 23,
        "STM Passage": 7,
        "Interruption": 30,
        "Symbol & Condition": 31,
        "Solid Figure Turning": 23,
        "Aircraft Rotation": 26,
        "Numerical Estimation": 32,
        "Electrical Maze": 6,
        "Systems": 73
      }
    },
    {
      "mockName": "Mock TG3",
      "candidateName": "Holala",
      "scores": {
        "Visual Logic": 37,
        "2-D Puzzle": 19,
        "Computer Checking": 29,
        "Series Number": 15,
        "Box Folding": 18,
        "STM Passage": 17,
        "Interruption": 29,
        "Symbol & Condition": 31,
        "Solid Figure Turning": 26,
        "Aircraft Rotation": 16,
        "Numerical Estimation": 21,
        "Electrical Maze": 10,
        "Systems": 82
      }
    },
    {
      "mockName": "Mock TG3",
      "candidateName": "Shabu",
      "scores": {
        "Visual Logic": 35,
        "2-D Puzzle": 17,
        "Computer Checking": 34,
        "Series Number": 17,
        "Box Folding": 29,
        "STM Passage": 21,
        "Interruption": 29,
        "Symbol & Condition": 53,
        "Solid Figure Turning": 25,
        "Aircraft Rotation": 30,
        "Numerical Estimation": 18,
        "Electrical Maze": 7,
        "Systems": 88
      }
    },
    {
      "mockName": "Mock TG3",
      "candidateName": "AllStar",
      "scores": {
        "Visual Logic": 27,
        "2-D Puzzle": 16,
        "Computer Checking": 27,
        "Series Number": 14,
        "Box Folding": 23,
        "STM Passage": 10,
        "Interruption": 29,
        "Symbol & Condition": 23,
        "Solid Figure Turning": 26,
        "Aircraft Rotation": 5,
        "Numerical Estimation": 19,
        "Electrical Maze": 6,
        "Systems": 81
      }
    },
    {
      "mockName": "Mock TG3",
      "candidateName": "B",
      "scores": {
        "Visual Logic": 32,
        "2-D Puzzle": 11,
        "Computer Checking": 20,
        "Series Number": 15,
        "Box Folding": 17,
        "STM Passage": 16,
        "Interruption": 27,
        "Symbol & Condition": 23,
        "Solid Figure Turning": 22,
        "Aircraft Rotation": 17,
        "Numerical Estimation": 24,
        "Electrical Maze": 10,
        "Systems": 88
      }
    },
    {
      "mockName": "Mock TG4",
      "candidateName": "Chanol",
      "scores": {
        "Logical Reasoning": 23,
        "Deviation Scanning": 22,
        "Cube Assembly": 14,
        "Series Number": 17,
        "Shape Scanning": 34,
        "Box Folding": 14,
        "STM": 21,
        "Interruption": 49,
        "Number Skill": 36,
        "Logic Gates": 14,
        "Block Rotation": 24,
        "Cube Turning": 9,
        "Key Fitting": 5,
        "Tracing": 21
      }
    },
    {
      "mockName": "Mock TG4",
      "candidateName": "Apo",
      "scores": {
        "Logical Reasoning": 18,
        "Deviation Scanning": 19,
        "Cube Assembly": 14,
        "Series Number": 12,
        "Shape Scanning": 28,
        "Box Folding": 15,
        "STM": 11,
        "Interruption": 50,
        "Number Skill": 31,
        "Logic Gates": 20,
        "Block Rotation": 25,
        "Cube Turning": 11,
        "Key Fitting": 7,
        "Tracing": 25
      }
    },
    {
      "mockName": "Mock TG4",
      "candidateName": "ST",
      "scores": {
        "Logical Reasoning": 18,
        "Deviation Scanning": 20,
        "Cube Assembly": 18,
        "Series Number": 16,
        "Shape Scanning": 32,
        "Box Folding": 14,
        "STM": 9,
        "Interruption": 49,
        "Number Skill": 32,
        "Logic Gates": 16,
        "Block Rotation": 25,
        "Cube Turning": 13,
        "Key Fitting": 4,
        "Tracing": 23
      }
    },
    {
      "mockName": "Mock TG4",
      "candidateName": "Shabu",
      "scores": {
        "Logical Reasoning": 25,
        "Deviation Scanning": 25,
        "Cube Assembly": 18,
        "Series Number": 14,
        "Shape Scanning": 47,
        "Box Folding": 15,
        "STM": 26,
        "Interruption": 40,
        "Number Skill": 31,
        "Logic Gates": 19,
        "Block Rotation": 25,
        "Cube Turning": 15,
        "Key Fitting": 6,
        "Tracing": 18
      }
    },
    {
      "mockName": "Mock TG4",
      "candidateName": "B",
      "scores": {
        "Logical Reasoning": 12,
        "Deviation Scanning": 20,
        "Cube Assembly": 7,
        "Series Number": 12,
        "Shape Scanning": 23,
        "Box Folding": 14,
        "STM": 18,
        "Interruption": 50,
        "Number Skill": 27,
        "Logic Gates": 19,
        "Block Rotation": 16,
        "Cube Turning": 6,
        "Key Fitting": 5,
        "Tracing": 24
      }
    },
    {
      "mockName": "Mock TG4",
      "candidateName": "Holala",
      "scores": {
        "Logical Reasoning": 22,
        "Deviation Scanning": 23,
        "Cube Assembly": 14,
        "Series Number": 13,
        "Shape Scanning": 25,
        "Box Folding": 14,
        "STM": 16,
        "Interruption": 49,
        "Number Skill": 27,
        "Logic Gates": 19,
        "Block Rotation": 23,
        "Cube Turning": 8,
        "Key Fitting": 6,
        "Tracing": 23
      }
    },
    {
      "mockName": "Mock TG4",
      "candidateName": "FH",
      "scores": {
        "Logical Reasoning": 23,
        "Deviation Scanning": 25,
        "Cube Assembly": 17,
        "Series Number": 14,
        "Shape Scanning": 44,
        "Box Folding": 14,
        "STM": 17,
        "Interruption": 50,
        "Number Skill": 29,
        "Logic Gates": 18,
        "Block Rotation": 23,
        "Cube Turning": 15,
        "Key Fitting": 6,
        "Tracing": 21
      }
    },
    {
      "mockName": "Mock TG4",
      "candidateName": "ATTOS",
      "scores": {
        "Logical Reasoning": 17,
        "Deviation Scanning": 22,
        "Cube Assembly": 14,
        "Series Number": 8,
        "Shape Scanning": 33,
        "Box Folding": 11,
        "STM": 15,
        "Interruption": 50,
        "Number Skill": 29,
        "Logic Gates": 20,
        "Block Rotation": 23,
        "Cube Turning": 16,
        "Key Fitting": 5,
        "Tracing": 20
      }
    }
  ]
};


// Helper to determine if a mock supports Accuracy input and calculation
function isAccuracyEnabled(mockName) {
  if (!mockName) return false;
  const nameLower = mockName.toLowerCase().replace(/\s+/g, "");
  // Mocks 1 - 5.2 as listed by user (Mock TG1 to TG5) do not have accuracy data
  const disabledMocks = [
    "mocktg1", "mocktg2", "mocktg3", "mocktg4", "mocktg5",
    "mock1", "mock2", "mock3", "mock4", "mock5", "mock5.1", "mock5.2"
  ];
  if (disabledMocks.includes(nameLower)) {
    return false;
  }
  return true;
}

// State Database
let db = {
  mocks: [],
  scores: []
};

// Application State
let selectedMockName = "";
let selectedCandidateName = "";
let rankingType = "raw"; // "raw" or "weighted"
let targetScores = JSON.parse(localStorage.getItem("tg_mock_targets") || "{}");
let mockFormMode = "create"; // "create" or "edit"
let editingOriginalMockName = "";
let editingOriginalParts = [];

// Chart.js Instances
let barChartInstance = null;
let radarChartInstance = null;
let devChartInstance = null;


// Recommendation tips map for sub-tests (Thai Language)
const STUDY_TIPS = {
  // TG Mock 5
  "Series pic": {
    desc: "โจทย์อนุกรมรูปภาพวัดการหาความสัมพันธ์เชิงมิติสัมพันธ์",
    tip: "ฝึกทักษะการกวาดสายตามองการเปลี่ยนแปลงแบบทีละสเต็ป เช่น การหมุน (Rotation), การสลับสี, การย่อขยายขนาด และความถี่ของรูปทรงในแต่ละช่อง และฝึกทำโจทย์แนวนี้อย่างสม่ำเสมอ"
  },
  "Non-verbal Reasoning": {
    desc: "โจทย์การใช้เหตุผลเชิงรูปภาพและสัญลักษณ์ที่ไม่ใช้ภาษา",
    tip: "ฝึกสรุปกฎเกณฑ์ความสัมพันธ์ระหว่างภาพตั้งต้น โดยเปรียบเทียบในมุมของเงื่อนไข (ถ้า...แล้ว...) หรือหาภาพที่ไม่เข้าพวก ฝึกทำข้อสอบมิติสัมพันธ์บ่อยๆ"
  },
  "3D cube": {
    desc: "โจทย์การนับบล็อกลูกบาศก์ 3 มิติ หรือหมุนรูปทรงสามมิติ",
    tip: "แนะนำให้ใช้แอปพลิเคชันหรือเว็บช่วยจำลองบล็อก 3 มิติ เพื่อฝึกมุมมอง (Perspective) หรือพยายามนับทีละแถว/ทีละชั้นจากฐานขึ้นมาเพื่อลดความผิดพลาดในการมองข้ามช่องที่ถูกบัง"
  },
  "Perceptual speed": {
    desc: "โจทย์ความเร็วในการสังเกต สแกนสัญลักษณ์ หรือการจับคู่รูปทรง",
    tip: "พาร์ทนี้ต้องแข่งกับเวลา ให้เน้นฝึกจับเวลาตอนทำแบบฝึกหัด (เช่น ตั้งเป้าข้อละไม่เกิน 15-20 วินาที) ฝึกสมาธิให้อยู่กับที่และใช้สายตากวาดหาจุดร่วมจุดต่างอย่างว่องไว"
  },
  "Estimating": {
    desc: "โจทย์การประมาณค่าเชิงคำนวณ คณิตศาสตร์ หรือขนาดพื้นที่",
    tip: "ห้ามคำนวณตรงๆ! ให้ฝึกเทคนิคการปัดเศษตัวเลข เช่น 398.7 -> 400 เพื่อคิดเลขในใจได้อย่างรวดเร็ว และจับทริคการตัดช้อยส์ที่ห่างจากความเป็นจริงออกไปก่อน"
  },
  "Shape scanning": {
    desc: "โจทย์ค้นหารูปทรงต้นแบบที่ซ่อนอยู่ในภาพที่ซับซ้อน",
    tip: "ฝึกแยกประสาทตาและจับจุดสังเกตเฉพาะของรูปทรง เช่น มุมแหลม, ด้านยาว, หรือจำนวนเส้นผ่านศูนย์กลาง แล้วสแกนหาจุดอ้างอิงเหล่านั้นในภาพใหญ่เพื่อความเร็ว"
  },
  "Cube Folding": {
    desc: "โจทย์การคลี่และพับกล่องลูกบาศก์ที่มีลายต่างกันแต่ละหน้า",
    tip: "ลองหากระดาษแข็งมาตัดและวาดลายพับกล่องของจริง เพื่อฝึกสมองซีกขวาให้เห็นความสัมพันธ์ระหว่างด้านที่อยู่ติดกันและด้านที่อยู่ตรงข้ามกัน (ด้านตรงข้ามจะไม่มีวันมองเห็นพร้อมกัน)"
  },
  "Series Number": {
    desc: "โจทย์อนุกรมตัวเลขและการวิเคราะห์ลำดับคณิตศาสตร์",
    tip: "ฝึกจำรูปแบบการเปลี่ยนแปลงยอดนิยม: อนุกรม 2 ชั้น, อนุกรมผสม, การคูณ/หารคงที่, เลขยกกำลัง และฝึกทำโจทย์ให้เจอลายแทงตัวเลขบ่อยๆ จนเกิดความคุ้นเคย"
  },
  "Scanning/Comparing": {
    desc: "โจทย์เปรียบเทียบข้อมูลสองฝั่งว่าเหมือนหรือต่างกันอย่างไร",
    tip: "ใช้นิ้วหรือปากกาช่วยชี้เพื่อโฟกัสสายตาเปรียบเทียบทีละ 3-4 ตัวอักษร/ตัวเลข ระวังจุดลวงที่มักจะสลับตำแหน่งหรือเปลี่ยนตัวอักษรที่คล้ายกัน เช่น O กับ 0 หรือ l กับ 1"
  },
  "Pair of scales": {
    desc: "โจทย์ตาชั่งเปรียบเทียบน้ำหนักสิ่งของและแก้สมการรูปภาพ",
    tip: "ใช้วิธีการแทนค่าตัวเลขสมมติ (เช่น ให้รูป A หนัก 10, B หนัก 5) เพื่อคำนวณหาน้ำหนักที่สมดุลได้ง่ายขึ้น หรือใช้วิธีกำจัดตัวแปรที่เหมือนกันออกไปทั้งสองข้างของตาชั่ง"
  },
  "Interruption": {
    desc: "โจทย์วัดสมาธิและการตัดสินใจเมื่อมีตัวรบกวนแทรกเข้ามา",
    tip: "ฝึกสติในการประมวลผลสองอย่างพร้อมกัน หรือการทำงานภายใต้เวลาที่จำกัด ฝึกทำแบบฝึกหัดสไตล์สลับโหมดคำนวณและโหมดเปรียบเทียบข้อมูลสลับไปมาอย่างรวดเร็ว"
  },
  "STM": {
    desc: "โจทย์ทดสอบความจำระยะสั้น (Short-Term Memory)",
    tip: "ฝึกใช้เทคนิคการจับกลุ่มข้อมูล (Chunking) หรือจินตนาการเชื่อมโยงภาพและคำที่ต้องจำให้กลายเป็นเรื่องราสตลกๆ หรือเรื่องเด่นๆ ในหัว จะช่วยดึงข้อมูลกลับมาตอนทำโจทย์ได้ดีมาก"
  },

  // Mock TG1 & Mock TG2 Additional Parts
  "Series Picture": {
    desc: "โจทย์อนุกรมรูปภาพวัดการหาความสัมพันธ์เชิงมิติสัมพันธ์",
    tip: "วิเคราะห์การเปลี่ยนแปลงอย่างเป็นระบบ (เช่น การหมุน รูปแบบความถี่การสลับสี รูปทรง หรือทิศทางที่ซ้ำกัน)"
  },
  "2D Puzzle": {
    desc: "การประกอบชิ้นส่วนภาพ 2 มิติ หรือจับคู่ชิ้นส่วนรูปเรขาคณิต",
    tip: "สังเกตความยาวของด้าน มุม และขอบของตัวเลือกเพื่อนำมาต่อเข้าคู่กัน หลีกเลี่ยงช้อยส์ที่มีสัดส่วนเพี้ยน"
  },
  "Deviation Scanning": {
    desc: "การสแกนหาจุดเบี่ยงเบนหรือภาพแปลกแยกที่ไม่เข้าพวกอย่างรวดเร็ว",
    tip: "จับจุดสังเกตหลัก เช่น ทิศทางหัวลูกศร จำนวนเส้น หรือลายรูป สแกนด้วยสายตาเป็นระบบเพื่อหาภาพที่หมุนทิศต่างจากเพื่อน"
  },
  "Block Folding": {
    desc: "โจทย์การคลี่และพับประกอบกล่องลูกบาศก์มิติสัมพันธ์",
    tip: "พิจารณาความสัมพันธ์ของด้านที่อยู่ติดกันเมื่อพับกล่อง และด้านที่อยู่ตรงข้ามซึ่งจะไม่มีทางเห็นพร้อมกันเด็ดขาด"
  },
  "Box Folding": {
    desc: "โจทย์การคลี่และพับประกอบกล่องลูกบาศก์มิติสัมพันธ์",
    tip: "พิจารณาความสัมพันธ์ของด้านที่อยู่ติดกันเมื่อพับกล่อง และด้านที่อยู่ตรงข้ามซึ่งจะไม่มีทางเห็นพร้อมกันเด็ดขาด"
  },
  "STM Passage": {
    desc: "การทดสอบความจำระยะสั้นจากข้อความหรือใจความสั้นๆ",
    tip: "พยายามสร้างเรื่องราวหรือมโนภาพจำในหัวเป็นฉากๆ เชื่อมโยงคีย์เวิร์ดต่างๆ เข้าด้วยกัน จะช่วยให้ดึงข้อมูลกลับมาง่ายขึ้น"
  },
  "STM Grid": {
    desc: "การทดสอบความจำระยะสั้นจากตารางหรือพิกัดโครงข่ายข้อมูล",
    tip: "ใช้เทคนิคแบ่งกลุ่มพิกัดตารางย่อยๆ (Chunking) หรือสร้างลวดลายการเชื่อมโยงในหัวเพื่อช่วยจดจำสัญลักษณ์"
  },
  "Hidden Image": {
    desc: "การค้นหารูปภาพต้นแบบที่ซ่อนอยู่ภายในลายเส้นซับซ้อน",
    tip: "จับจุดเด่นของรูปทรงเป้าหมาย (เช่น มุมแหลม หรือส่วนโค้ง) แล้วกวาดสายตาคัดกรองลวดลายพื้นหลังที่รบกวนออก"
  },
  "Aircraft Orientation": {
    desc: "การรับรู้ทิศทางและมุมบินของเครื่องบินเทียบกับเข็มทิศมิติสัมพันธ์",
    tip: "จินตนาการตัวเราเป็นนักบินในเครื่องบิน สังเกตหน้าปัดความสูง มุมก้มเงย (Pitch) มุมเอียงปีก (Roll) และเข็มทิศ (Yaw) ให้แม่นยำ"
  },
  "Block Counting": {
    desc: "โจทย์การนับบล็อกลูกบาศก์ 3 มิติ ที่วางซ้อนกันซับซ้อน",
    tip: "แนะนำให้นับไล่ทีละเสาหรือนับตามแนวนอนจากฐานรากขึ้นมาทีละชั้น เพื่อป้องกันการหลงลืมนับกล่องที่โดนกล่องอื่นบดบัง"
  },
  "Key Fitting": {
    desc: "การจับคู่รูปทรงลูกกุญแจกับร่องไขของแม่กุญแจ",
    tip: "เปรียบเทียบจำนวนรอยหยักและความลึก-ตื้นของร่องกุญแจกับร่องไข ระวังจุดลวงที่ทำการกลับซ้ายขวาในคำตอบ"
  },
  "Oblique View": {
    desc: "การวิเคราะห์มิติสัมพันธ์ของรูปทรง 3 มิติจากมุมมองเอียง",
    tip: "คาดคะเนระดับความลึกและสัดส่วนของระนาบด้านเฉียง สังเกตจุดที่เชื่อมต่อกันระหว่างพื้นผิวแต่ละด้าน"
  },
  "Shape Scanning": {
    desc: "การกวาดสายตาเพื่อเปรียบเทียบความเร็วและความถูกต้องของรูปทรง",
    tip: "ฝึกโฟกัสและมีสมาธิกวาดหาเป้าหมายอย่างรวดเร็ว ทำสถิติจับเวลาให้ดีเพื่อเร่งความเร็วในการประมวลผลของสมอง"
  },
  "Approximation": {
    desc: "โจทย์การประมาณค่าเชิงคณิตศาสตร์และคำนวณคาดคะเนตัวเลข",
    tip: "ปัดเศษตัวเลขให้เป็นเลขกลมๆ (เช่น 99 -> 100) เพื่อช่วยให้คำนวณในใจได้อย่างรวดเร็วแทนการทดเลขยาวๆ"
  },
  "Numerical Estimation": {
    desc: "โจทย์การประมาณค่าเชิงคณิตศาสตร์และคำนวณคาดคะเนตัวเลข",
    tip: "ปัดเศษตัวเลขให้เป็นเลขกลมๆ (เช่น 99 -> 100) เพื่อช่วยให้คำนวณในใจได้อย่างรวดเร็วแทนการทดเลขยาวๆ"
  },
  "Abstract Reasoning": {
    desc: "การใช้เหตุผลเชิงนามธรรม ค้นหาแนวคิดตรรกะความสัมพันธ์ของรูปภาพ",
    tip: "ฝึกมองหาระบบการเคลื่อนที่ การเพิ่มขึ้นหรือลดลงของวัตถุ และเงื่อนไขตรรกะรูปทรงที่แปรผันตามกลุ่มลำดับภาพ"
  },
  "Cube Assembly": {
    desc: "การประกอบชิ้นส่วนย่อย 3 มิติ เพื่อรวมเป็นโครงสร้างบล็อกที่กำหนด",
    tip: "วิเคราะห์ด้านที่เว้าแหว่ง มองหาชิ้นส่วนย่อยที่มีรูปทรงตรงกับรอยแหว่งนั้นๆ แล้วนำมาประกอบกันในจินตนาการ"
  },
  "Block Rotation": {
    desc: "การหมุนบล็อกรูปทรง 3 มิติในจินตนาการเพื่อหาคู่ที่สอดคล้องกัน",
    tip: "เลือกปุ่มเด่นหรือแกนบล็อกที่ยื่นยาวที่สุดเป็นแกนกลางหลัก แล้วค่อยๆ จินตนาการหมุนเทียบรอบแกนทีละระนาบ"
  },
  "Number Scanning": {
    desc: "การกวาดสายตาค้นหาตัวเลขหรือคีย์เป้าหมายท่ามกลางตารางตัวเลขซับซ้อน",
    tip: "จ้องจุดเริ่มต้นของเป้าหมาย กวาดสายตาจากซ้ายไปขวาหรือเป็นรูปตัว Z อย่างเป็นระบบ เพื่อช่วยประหยัดเวลาการมองหา"
  },
  "Spatial Apperception": {
    desc: "การรับรู้พื้นที่ทิศทางและมุมมองพิกัดทางภูมิศาสตร์เชิงมิติสัมพันธ์",
    tip: "ตั้งสติกับพิกัดทิศหลัก (เหนือ ใต้ ออก ตก) สังเกตตำแหน่งของวัตถุเทียบเคียงกับกรอบภาพหรือมุมมองของกล้องจำลอง"
  }
};

// Initial Setup
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupEventListeners();
  loadData();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("tg_mock_theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    document.getElementById("theme-icon").className = "fa-solid fa-moon";
  } else {
    document.getElementById("theme-icon").className = "fa-solid fa-sun";
  }
}

function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    icon.className = "fa-solid fa-sun";
    localStorage.setItem("tg_mock_theme", "dark");
    showToast("เปลี่ยนเป็นโหมดมืดเรียบร้อย", "success");
  } else {
    body.classList.add("light-theme");
    icon.className = "fa-solid fa-moon";
    localStorage.setItem("tg_mock_theme", "light");
    showToast("เปลี่ยนเป็นโหมดสว่างเรียบร้อย", "success");
  }
  // Re-render charts, heatmap, and individual reports to adjust theme colors dynamically
  if (selectedMockName) {
    renderCharts();
    renderHeatmap();
    renderIndividualReport();
  }
}

// Toast Notifications
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "error") icon = "fa-circle-xmark";
  if (type === "warning") icon = "fa-triangle-exclamation";
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add("fade-out");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 3000);
}

// Helper to set button loading states
function setButtonLoading(buttonId, isLoading, loadingText = "กำลังโหลด...") {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  
  if (isLoading) {
    if (!btn.hasAttribute("data-original-html")) {
      btn.setAttribute("data-original-html", btn.innerHTML);
    }
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${loadingText}`;
    btn.style.opacity = "0.7";
    btn.style.cursor = "not-allowed";
  } else {
    const originalHtml = btn.getAttribute("data-original-html");
    if (originalHtml) {
      btn.innerHTML = originalHtml;
    }
    btn.disabled = false;
    btn.style.opacity = "";
    btn.style.cursor = "";
  }
}

// Data Fetching & Sync
function normalizeDbNames() {
  if (!db || !db.scores) return;
  
  const mergedScores = [];
  const scoreMap = {};
  
  db.scores.forEach(s => {
    if (!s.candidateName) return;
    const normName = s.candidateName.trim().toUpperCase();
    const key = s.mockName + "|||" + normName;
    
    if (scoreMap[key]) {
      // Merge scores
      scoreMap[key].scores = { ...scoreMap[key].scores, ...s.scores };
    } else {
      s.candidateName = normName;
      scoreMap[key] = s;
      mergedScores.push(s);
    }
  });
  
  db.scores = mergedScores;
}

async function loadData() {
  const isInitialLoad = (db.mocks.length === 0);
  
  // 1. Render Cache/Local Data Instantly (0-second perceived latency)
  if (isInitialLoad) {
    const cachedDb = localStorage.getItem("tg_mock_db_cache");
    let parsedDb = null;
    if (cachedDb) {
      try {
        parsedDb = JSON.parse(cachedDb);
      } catch (e) {
        parsedDb = null;
      }
    }
    
    if (parsedDb && parsedDb.mocks && parsedDb.mocks.length > 0) {
      db = parsedDb;
      normalizeDbNames();
      setSyncStatus("offline", "โหมดออฟไลน์ (ใช้ข้อมูลในเครื่อง)");
    } else {
      db = JSON.parse(JSON.stringify(DEFAULT_DB));
      normalizeDbNames();
      localStorage.setItem("tg_mock_db_cache", JSON.stringify(db));
      setSyncStatus("offline", "โหลดข้อมูลเริ่มต้นสำเร็จ (ข้อมูลในเครื่อง)");
    }
    initializeMockOptions();
  }
  
  // 2. Background Sync with Google Sheets
  if (apiUrl) {
    setSyncStatus("loading", "กำลังซิงค์ข้อมูลล่าสุด...");
    
    // Execute the fetch asynchronously in the background so it doesn't block the UI
    (async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("HTTP error " + response.status);
        const data = await response.json();
        
        // Compare with current database to see if we need to re-render
        const dataStr = JSON.stringify(data);
        const currentStr = JSON.stringify(db);
        
        if (dataStr !== currentStr) {
          db = data;
          normalizeDbNames();
          localStorage.setItem("tg_mock_db_cache", JSON.stringify(db));
          initializeMockOptions();
          showToast("อัปเดตข้อมูลล่าสุดจาก Google Sheets เรียบร้อย", "success");
        }
        setSyncStatus("online", "ซิงค์กับ Google Sheet แล้ว");
      } catch (error) {
        console.error("Background sync failed:", error);
        setSyncStatus("offline", "โหมดออฟไลน์ (ใช้ข้อมูลในเครื่อง)");
        if (!isInitialLoad) {
          showToast("ไม่สามารถซิงค์ข้อมูลล่าสุดได้ กำลังใช้ข้อมูลในเครื่อง", "warning");
        }
      }
    })();
  } else {
    if (isInitialLoad) {
      showToast("ยังไม่ได้ตั้งค่า API ซิงค์ข้อมูล", "warning");
    }
  }
}

function loadOfflineFallback(warningMsg) {
  const cachedDb = localStorage.getItem("tg_mock_db_cache");
  let parsedDb = null;
  if (cachedDb) {
    try {
      parsedDb = JSON.parse(cachedDb);
    } catch (e) {
      parsedDb = null;
    }
  }
  
  if (parsedDb && parsedDb.mocks && parsedDb.mocks.length > 0) {
    db = parsedDb;
    normalizeDbNames();
    setSyncStatus("offline", "โหมดออฟไลน์ (ใช้ข้อมูลในเครื่อง)");
  } else {
    db = JSON.parse(JSON.stringify(DEFAULT_DB));
    normalizeDbNames();
    localStorage.setItem("tg_mock_db_cache", JSON.stringify(db));
    setSyncStatus("offline", "โหลดข้อมูลเริ่มต้นสำเร็จ (ข้อมูลในเครื่อง)");
  }
  showToast(warningMsg, "warning");
}

function setSyncStatus(status, text) {
  const badge = document.getElementById("sync-status-badge");
  badge.className = `sync-badge ${status}`;
  
  let icon = "fa-cloud";
  if (status === "loading") icon = "fa-spinner fa-spin";
  if (status === "online") icon = "fa-cloud-arrow-up";
  if (status === "offline") icon = "fa-cloud-arrow-down";
  if (status === "error") icon = "fa-triangle-exclamation";
  
  badge.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${text}</span>`;
}

function initializeMockOptions() {
  const select = document.getElementById("mock-selector");
  const manageSelect = document.getElementById("score-mock-select");
  const editSelect = document.getElementById("edit-mock-selector");
  
  select.innerHTML = "";
  manageSelect.innerHTML = "";
  if (editSelect) editSelect.innerHTML = "";
  
  if (db.mocks.length === 0) {
    select.innerHTML = `<option value="">-- ไม่พบข้อมูล Mock --</option>`;
    manageSelect.innerHTML = `<option value="">-- ไม่พบข้อมูล Mock --</option>`;
    if (editSelect) editSelect.innerHTML = `<option value="">-- ไม่พบข้อมูล Mock --</option>`;
    return;
  }
  
  // Sort mocks alphabetically or chronologically
  db.mocks.sort((a, b) => b.name.localeCompare(a.name));
  
  db.mocks.forEach(mock => {
    const opt = document.createElement("option");
    opt.value = mock.name;
    opt.textContent = mock.name;
    select.appendChild(opt);
    
    const optManage = document.createElement("option");
    optManage.value = mock.name;
    optManage.textContent = mock.name;
    manageSelect.appendChild(optManage);
    
    if (editSelect) {
      const optEdit = document.createElement("option");
      optEdit.value = mock.name;
      optEdit.textContent = mock.name;
      editSelect.appendChild(optEdit);
    }
  });
  
  // Select default mock
  if (!selectedMockName || !db.mocks.find(m => m.name === selectedMockName)) {
    selectedMockName = db.mocks[0].name;
  }
  
  select.value = selectedMockName;
  manageSelect.value = selectedMockName;
  
  onMockChanged();
}

function onMockChanged() {
  selectedMockName = document.getElementById("mock-selector").value;
  document.getElementById("score-mock-select").value = selectedMockName;
  
  const currentMock = db.mocks.find(m => m.name === selectedMockName);
  if (!currentMock) return;
  
  // Render Candidate Options for Individual Tab
  const candSelect = document.getElementById("candidate-selector");
  candSelect.innerHTML = "";
  
  const mockScores = db.scores.filter(s => s.mockName === selectedMockName);
  
  if (mockScores.length === 0) {
    candSelect.innerHTML = `<option value="">-- ไม่มีผู้กรอกคะแนน --</option>`;
    selectedCandidateName = "";
  } else {
    mockScores.sort((a, b) => a.candidateName.localeCompare(b.candidateName));
    mockScores.forEach(score => {
      const opt = document.createElement("option");
      opt.value = score.candidateName;
      opt.textContent = score.candidateName;
      candSelect.appendChild(opt);
    });
    
    if (!selectedCandidateName || !mockScores.find(s => s.candidateName === selectedCandidateName)) {
      selectedCandidateName = mockScores[0].candidateName;
    }
    candSelect.value = selectedCandidateName;
  }
  
  // Render Leaderboard & Insights
  calculateAndRenderLeaderboard();
  renderRadarSelector();
  renderHeatmap();
  renderIndividualReport();
  renderCharts();
  renderDevSelector();
  renderDevelopmentChart();
  
  // Dynamic Score Fields in Manage Tab
  generateScoreInputFields();
}

// Mathematical Calculations
function getMockDataForCandidate(mock, candidateScore) {
  let rawTotal = 0;
  let rawMax = 0;
  let weightedTotal = 0;
  let N = mock.parts.length;
  
  mock.parts.forEach(part => {
    let score = candidateScore.scores[part.name];
    if (score === undefined || score === null) {
      score = 0;
    }
    rawTotal += score;
    rawMax += part.max;
    
    // Scale each part to max of 10
    if (part.max > 0) {
      weightedTotal += (score / part.max) * 10;
    }
  });
  
  let rawPercentage = rawMax > 0 ? (rawTotal / rawMax) * 100 : 0;
  let weightedPercentage = N > 0 ? (weightedTotal / (N * 10)) * 100 : 0;
  
  return {
    rawTotal,
    rawMax,
    rawPercentage,
    weightedTotal,
    weightedMax: N * 10,
    weightedPercentage
  };
}

function getAccuracyDataForCandidate(mock, candidateScore) {
  let totalCorrect = 0;
  let totalAttempted = 0;
  
  mock.parts.forEach(part => {
    const correct = candidateScore.scores[part.name] || 0;
    const attempted = candidateScore.scores[part.name + "_attempted"];
    if (attempted !== undefined && attempted !== null) {
      totalCorrect += correct;
      totalAttempted += attempted;
    }
  });
  
  return {
    accuracy: totalAttempted > 0 ? (totalCorrect / totalAttempted) * 100 : 0,
    hasAccuracyData: totalAttempted > 0
  };
}

function compareRankedScores(a, b, type = rankingType) {
  const primaryA = type === "raw" ? a.rawTotal : a.weightedTotal;
  const primaryB = type === "raw" ? b.rawTotal : b.weightedTotal;
  const primaryDiff = primaryB - primaryA;
  if (Math.abs(primaryDiff) > 0.000001) return primaryDiff;
  
  const accuracyDiff = (b.accuracy || 0) - (a.accuracy || 0);
  if (Math.abs(accuracyDiff) > 0.000001) return accuracyDiff;
  
  const pctA = type === "raw" ? a.rawPercentage : a.weightedPercentage;
  const pctB = type === "raw" ? b.rawPercentage : b.weightedPercentage;
  const pctDiff = (pctB || 0) - (pctA || 0);
  if (Math.abs(pctDiff) > 0.000001) return pctDiff;
  
  return (a.candidateName || a.name || "").localeCompare(b.candidateName || b.name || "");
}

function calculateMeanAndSd(values) {
  const numericValues = values.filter(value => typeof value === "number" && Number.isFinite(value));
  const count = numericValues.length;
  if (count === 0) {
    return { count: 0, mean: null, sd: null };
  }
  
  const mean = numericValues.reduce((sum, value) => sum + value, 0) / count;
  const variance = numericValues.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / count;
  
  return {
    count,
    mean,
    sd: Math.sqrt(variance)
  };
}

function calculateAndRenderLeaderboard() {
  const currentMock = db.mocks.find(m => m.name === selectedMockName);
  if (!currentMock) return;
  
  const mockScores = db.scores.filter(s => s.mockName === selectedMockName);
  const accEnabled = isAccuracyEnabled(selectedMockName);
  
  // Dynamic header rendering
  const thead = document.getElementById("leaderboard-thead");
  if (thead) {
    if (accEnabled) {
      thead.innerHTML = `
        <tr>
          <th class="rank-cell">ลำดับ</th>
          <th>ผู้เข้าสอบ</th>
          <th>คะแนนที่ได้ / คะแนนเต็ม</th>
          <th>คิดเป็นร้อยละ</th>
          <th>% Accuracy</th>
          <th class="progress-bar-cell">ความคืบหน้า</th>
        </tr>
      `;
    } else {
      thead.innerHTML = `
        <tr>
          <th class="rank-cell">ลำดับ</th>
          <th>ผู้เข้าสอบ</th>
          <th>คะแนนที่ได้ / คะแนนเต็ม</th>
          <th>คิดเป็นร้อยละ</th>
          <th class="progress-bar-cell">ความคืบหน้า</th>
        </tr>
      `;
    }
  }
  
  const processedScores = mockScores.map(candScore => {
    const stats = getMockDataForCandidate(currentMock, candScore);
    const accuracyData = getAccuracyDataForCandidate(currentMock, candScore);
    
    return {
      candidateName: candScore.candidateName,
      ...stats,
      ...accuracyData
    };
  });
  
  processedScores.sort((a, b) => compareRankedScores(a, b));
  
  // Calculate summary widgets
  renderSummaryWidgets(processedScores, currentMock);
  
  // Render Table
  const tbody = document.getElementById("leaderboard-tbody");
  tbody.innerHTML = "";
  
  if (processedScores.length === 0) {
    const colspanVal = accEnabled ? 6 : 5;
    tbody.innerHTML = `<tr><td colspan="${colspanVal}" style="text-align:center; padding: 2rem; color: var(--text-muted);">ยังไม่มีผู้กรอกคะแนนสำหรับการสอบนี้</td></tr>`;
    return;
  }
  
  processedScores.forEach((row, index) => {
    const rank = index + 1;
    let rankHtml = "";
    if (rank === 1) rankHtml = `<span class="rank-badge rank-1">1</span>`;
    else if (rank === 2) rankHtml = `<span class="rank-badge rank-2">2</span>`;
    else if (rank === 3) rankHtml = `<span class="rank-badge rank-3">3</span>`;
    else rankHtml = rank;
    
    const isSelected = row.candidateName === selectedCandidateName ? "style='background-color: var(--color-primary-glow);'" : "";
    
    const percentage = rankingType === "raw" ? row.rawPercentage : row.weightedPercentage;
    const totalScoreStr = rankingType === "raw" ? `${row.rawTotal} / ${row.rawMax}` : `${row.weightedTotal.toFixed(2)} / ${row.weightedMax}`;
    
    const tr = document.createElement("tr");
    if (isSelected) tr.setAttribute("style", "background-color: rgba(99, 102, 241, 0.1);");
    tr.innerHTML = `
      <td class="rank-cell">${rankHtml}</td>
      <td class="name-cell notranslate" translate="no" spellcheck="false" data-gramm="false" data-enable-grammarly="false" onclick="selectCandidate('${row.candidateName}')">${row.candidateName}</td>
      <td class="score-cell">${totalScoreStr}</td>
      <td class="score-cell">${percentage.toFixed(1)}%</td>
      ${accEnabled ? `<td class="score-cell" style="color: var(--color-primary); font-weight: 600;">${row.hasAccuracyData ? row.accuracy.toFixed(1) + '%' : '-'}</td>` : ""}
      <td class="progress-bar-cell">
        <div class="progress-track">
          <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function selectCandidate(name) {
  selectedCandidateName = name;
  document.getElementById("candidate-selector").value = name;
  
  // Update UI and switch to Tab 3 (Individual View)
  switchTab("individual");
  calculateAndRenderLeaderboard(); // refresh selection highlite
  renderIndividualReport();
}

function renderSummaryWidgets(processedScores, mock) {
  // Total Candidates
  document.getElementById("widget-candidates").textContent = processedScores.length;
  
  // Average Score
  if (processedScores.length > 0) {
    const percentValues = processedScores.map(row => rankingType === "raw" ? row.rawPercentage : row.weightedPercentage);
    const percentStats = calculateMeanAndSd(percentValues);
    document.getElementById("widget-avg-score").innerHTML = `${percentStats.mean.toFixed(1)} <span class="card-value-unit">%</span>`;
    document.getElementById("widget-score-sd").textContent = `SD: ${percentStats.sd.toFixed(1)}%`;
  } else {
    document.getElementById("widget-avg-score").innerHTML = `0.0 <span class="card-value-unit">%</span>`;
    document.getElementById("widget-score-sd").textContent = "SD: -";
  }
  
  // Find Strongest and Weakest Sub-tests based on group average percent
  const mockScores = db.scores.filter(s => s.mockName === selectedMockName);
  if (mockScores.length > 0 && mock.parts.length > 0) {
    const partAverages = mock.parts.map(part => {
      let sum = 0;
      mockScores.forEach(s => {
        sum += (s.scores[part.name] || 0);
      });
      const avg = sum / mockScores.length;
      const pct = part.max > 0 ? (avg / part.max) * 100 : 0;
      return { name: part.name, pct };
    });
    
    partAverages.sort((a, b) => b.pct - a.pct);
    
    const strongest = partAverages[0];
    const weakest = partAverages[partAverages.length - 1];
    
    document.getElementById("widget-strongest").textContent = `${strongest.name} (${strongest.pct.toFixed(0)}%)`;
    document.getElementById("widget-weakest").textContent = `${weakest.name} (${weakest.pct.toFixed(0)}%)`;
  } else {
    document.getElementById("widget-strongest").textContent = "-";
    document.getElementById("widget-weakest").textContent = "-";
  }
}

// Chart Rendering
function renderCharts() {
  renderBarChart();
  renderRadarChart();
}

function renderBarChart() {
  const currentMock = db.mocks.find(m => m.name === selectedMockName);
  if (!currentMock) return;
  
  const mockScores = db.scores.filter(s => s.mockName === selectedMockName);
  const processedScores = mockScores.map(candScore => {
    const stats = getMockDataForCandidate(currentMock, candScore);
    const accuracyData = getAccuracyDataForCandidate(currentMock, candScore);
    return {
      name: candScore.candidateName,
      candidateName: candScore.candidateName,
      val: rankingType === "raw" ? stats.rawPercentage : stats.weightedPercentage,
      displayVal: rankingType === "raw" ? stats.rawTotal : stats.weightedTotal,
      ...stats,
      ...accuracyData
    };
  });
  
  processedScores.sort((a, b) => compareRankedScores(a, b));
  
  const labels = processedScores.map(row => row.name);
  const dataVals = processedScores.map(row => row.val);
  const rawValues = processedScores.map(row => row.displayVal);
  
  const ctx = document.getElementById("barChart").getContext("2d");
  
  if (barChartInstance) {
    barChartInstance.destroy();
  }
  
  const isDark = !document.body.classList.contains("light-theme");
  const textColor = isDark ? "#9ca3af" : "#4b5563";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)";
  
  barChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: `คะแนนเฉลี่ยร้อยละ (${rankingType === "raw" ? "คะแนนดิบ" : "ถ่วงน้ำหนัก"})`,
        data: dataVals,
        backgroundColor: 'rgba(99, 102, 241, 0.65)',
        borderColor: '#6366f1',
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: 'rgba(168, 85, 247, 0.8)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { color: gridColor },
          ticks: {
            color: textColor,
            callback: value => `${value}%`
          }
        },
        x: {
          grid: { display: false },
          ticks: { color: textColor }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              const idx = context.dataIndex;
              const suffix = rankingType === "raw" ? " คะแนนดิบ" : " คะแนนถ่วงน้ำหนัก";
              const rawVal = typeof rawValues[idx] === 'number' ? rawValues[idx].toFixed(1) : rawValues[idx];
              return `ร้อยละ: ${context.parsed.y.toFixed(1)}% (${rawVal}${suffix})`;
            }
          }
        }
      }
    }
  });
}

function renderRadarSelector() {
  const container = document.getElementById("radar-candidates-list");
  if (!container) return;
  
  // Save check states if container already has checkboxes
  const previousChecked = {};
  const inputs = container.querySelectorAll("input[type='checkbox']");
  let hasPrevious = false;
  if (inputs.length > 0) {
    hasPrevious = true;
    inputs.forEach(input => {
      if (input.id === "radar-select-all") return;
      previousChecked[input.value] = input.checked;
    });
  }
  
  container.innerHTML = "";
  
  const mockScores = db.scores.filter(s => s.mockName === selectedMockName);
  if (mockScores.length === 0) return;
  
  // Sort mockScores alphabetically by candidateName
  mockScores.sort((a, b) => a.candidateName.localeCompare(b.candidateName));
  
  // 1. Create "Select All" checkbox
  let isAllChecked = true;
  if (hasPrevious) {
    const activeCands = mockScores.map(s => s.candidateName);
    isAllChecked = activeCands.every(cand => previousChecked[cand] !== false);
  }
  
  const selectAllDiv = document.createElement("div");
  const selectAllActiveClass = isAllChecked ? "active" : "";
  const selectAllCheckedAttr = isAllChecked ? "checked" : "";
  
  selectAllDiv.innerHTML = `
    <label class="checkbox-label ${selectAllActiveClass}" id="lbl-check-all" style="border-style: dashed; font-weight: bold; border-color: var(--color-success-glow);">
      <input type="checkbox" id="radar-select-all" ${selectAllCheckedAttr} onchange="toggleSelectAllRadar()">
      <span class="color-dot" style="background-color: var(--color-success);"></span>
      <span>เลือกทั้งหมด (Select All)</span>
    </label>
  `;
  container.appendChild(selectAllDiv);
  
  // 2. Create individual candidate checkboxes
  mockScores.forEach(s => {
    const cand = s.candidateName;
    const color = getCandidateColor(cand);
    const div = document.createElement("div");
    const isChecked = previousChecked[cand] !== undefined ? previousChecked[cand] : isAllChecked;
    const activeClass = isChecked ? "active" : "";
    const checkedAttr = isChecked ? "checked" : "";
    
    div.innerHTML = `
      <label class="checkbox-label ${activeClass}" id="lbl-check-${cand}">
        <input type="checkbox" class="radar-cand-checkbox" value="${cand}" ${checkedAttr} onchange="updateRadarChartAndLabel('${cand}')">
        <span class="color-dot" style="background-color: ${color};"></span>
        <span>${cand}</span>
      </label>
    `;
    container.appendChild(div);
  });
}

function getCandidateColor(name) {
  const allCandidates = [...new Set(db.scores.map(s => s.candidateName))];
  allCandidates.sort((a, b) => a.localeCompare(b));
  const idx = allCandidates.indexOf(name);
  const colors = [
    '#ff3366', // Coral Pink
    '#2979ff', // Vivid Royal Blue
    '#00e676', // Bright Spring Green
    '#ff9100', // Deep Amber Orange
    '#e040fb', // Vibrant Purple-Magenta
    '#00ffff', // Bright Cyan
    '#ffea00', // Vibrant Lemon Yellow
    '#ff1744', // Vivid Crimson Red
    '#1de9b6', // Neon Turquoise
    '#b366ff', // Lavender Purple
    '#99ff33', // Volt Lime
    '#33ccff', // Light Sky Blue
    '#ff6633', // Neon Salmon Orange
    '#00ffcc', // Electric Teal
    '#ff99e6', // Light Pink
    '#76ff03', // Vibrant Grass Green
    '#d500f9', // Deep Magenta
    '#00b0ff', // Vivid Cyan
    '#ff5050', // Soft Red
    '#33ff77'  // Bright Mint Green
  ];
  if (idx === -1) return '#ffffff';
  return colors[idx % colors.length];
}

function toggleSelectAllRadar() {
  const selectAllChk = document.getElementById("radar-select-all");
  const selectAllLbl = document.getElementById("lbl-check-all");
  if (!selectAllChk || !selectAllLbl) return;
  
  const checked = selectAllChk.checked;
  if (checked) {
    selectAllLbl.classList.add("active");
  } else {
    selectAllLbl.classList.remove("active");
  }
  
  const checkboxes = document.querySelectorAll("#radar-candidates-list .radar-cand-checkbox");
  checkboxes.forEach(cb => {
    cb.checked = checked;
    const lbl = document.getElementById(`lbl-check-${cb.value}`);
    if (lbl) {
      if (checked) {
        lbl.classList.add("active");
      } else {
        lbl.classList.remove("active");
      }
    }
  });
  
  renderRadarChart();
}

function updateRadarChartAndLabel(candName) {
  const lbl = document.getElementById(`lbl-check-${candName}`);
  if (lbl) {
    const chk = lbl.querySelector('input[type="checkbox"]');
    if (chk.checked) {
      lbl.classList.add("active");
    } else {
      lbl.classList.remove("active");
    }
  }
  
  // Sync the Select All checkbox state
  const selectAllChk = document.getElementById("radar-select-all");
  const selectAllLbl = document.getElementById("lbl-check-all");
  if (selectAllChk && selectAllLbl) {
    const totalCands = document.querySelectorAll("#radar-candidates-list .radar-cand-checkbox").length;
    const checkedCands = document.querySelectorAll("#radar-candidates-list .radar-cand-checkbox:checked").length;
    
    selectAllChk.checked = (totalCands === checkedCands);
    if (selectAllChk.checked) {
      selectAllLbl.classList.add("active");
    } else {
      selectAllLbl.classList.remove("active");
    }
  }
  
  renderRadarChart();
}

function renderRadarChart() {
  const currentMock = db.mocks.find(m => m.name === selectedMockName);
  if (!currentMock || currentMock.parts.length === 0) return;
  
  const mockScores = db.scores.filter(s => s.mockName === selectedMockName);
  
  // Find which candidates are checked
  const checkedCandidates = [];
  const checkboxes = document.querySelectorAll("#radar-candidates-list .radar-cand-checkbox");
  checkboxes.forEach(cb => {
    if (cb.checked) checkedCandidates.push(cb.value);
  });
  
  const labels = currentMock.parts.map(p => p.name);
  const datasets = [];
  
  const isDark = !document.body.classList.contains("light-theme");
  const textColor = isDark ? "#9ca3af" : "#4b5563";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)";
  
  // 1. Group Average Dataset (Scaled to 10)
  if (mockScores.length > 0) {
    const avgScores = currentMock.parts.map(part => {
      let sum = 0;
      mockScores.forEach(s => {
        sum += (s.scores[part.name] || 0);
      });
      const avg = sum / mockScores.length;
      return part.max > 0 ? (avg / part.max) * 10 : 0;
    });
    
    datasets.push({
      label: 'ค่าเฉลี่ยกลุ่ม (Group Avg)',
      data: avgScores,
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderColor: isDark ? '#4b5563' : '#9ca3af',
      borderWidth: 2,
      borderDash: [5, 5],
      pointBackgroundColor: isDark ? '#4b5563' : '#9ca3af',
      pointRadius: 2
    });
  }
  
  // 2. Candidate Datasets (Scaled to 10)
  checkedCandidates.forEach(candName => {
    const candScore = mockScores.find(s => s.candidateName === candName);
    if (!candScore) return;
    
    const scaledScores = currentMock.parts.map(part => {
      const val = candScore.scores[part.name] || 0;
      return part.max > 0 ? (val / part.max) * 10 : 0;
    });
    
    const color = getCandidateColor(candName);
    
    datasets.push({
      label: candName,
      data: scaledScores,
      backgroundColor: `${color}1A`, // opacity hex 1A = 10%
      borderColor: color,
      borderWidth: 3,
      pointBackgroundColor: color,
      pointHoverRadius: 6,
      pointRadius: 4
    });
  });
  
  const ctx = document.getElementById("radarChart").getContext("2d");
  if (radarChartInstance) {
    radarChartInstance.destroy();
  }
  
  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            color: textColor,
            backdropColor: 'transparent',
            z: 10
          },
          grid: { color: gridColor },
          angleLines: { color: gridColor },
          pointLabels: {
            color: textColor,
            font: {
              family: varStyle('--font-heading'),
              size: 11,
              weight: '500'
            }
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: textColor, font: { family: varStyle('--font-body') } }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.dataset.label;
              const scoreScale10 = context.parsed.r;
              
              // Find raw score info
              const partName = context.label;
              const part = currentMock.parts.find(p => p.name === partName);
              const maxVal = part ? part.max : 10;
              
              const rawScore = (scoreScale10 / 10) * maxVal;
              return `${label}: ${scoreScale10.toFixed(1)}/10 (${rawScore.toFixed(1)}/${maxVal})`;
            }
          }
        }
      }
    }
  });
}

const rankLabelsPlugin = {
  id: 'rankLabels',
  afterDatasetsDraw(chart, args, options) {
    const { ctx } = chart;
    ctx.save();
    ctx.font = 'bold 10px Inter, Roboto, sans-serif';
    const isDark = !document.body.classList.contains("light-theme");
    ctx.fillStyle = isDark ? "#ffffff" : "#1e293b";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      if (meta.hidden) return;
      
      meta.data.forEach((element, index) => {
        const rank = dataset.ranks && dataset.ranks[index];
        if (rank !== undefined && rank !== null) {
          const x = element.x;
          const y = element.y;
          ctx.fillText(`#${rank}`, x, y - 8);
        }
      });
    });
    ctx.restore();
  }
};

function calculateAllMocksStats() {
  const stats = {};
  db.mocks.forEach(mock => {
    const mockScores = db.scores.filter(s => s.mockName === mock.name);
    const processed = mockScores.map(cs => {
      const data = getMockDataForCandidate(mock, cs);
      const accuracyData = getAccuracyDataForCandidate(mock, cs);
      return {
        candidateName: cs.candidateName,
        percentage: rankingType === "raw" ? data.rawPercentage : data.weightedPercentage,
        ...data,
        ...accuracyData
      };
    });
    
    processed.sort((a, b) => compareRankedScores(a, b));
    
    stats[mock.name] = {};
    processed.forEach((item, index) => {
      stats[mock.name][item.candidateName] = {
        rank: index + 1,
        totalCount: processed.length,
        percentage: item.percentage,
        rawTotal: item.rawTotal,
        rawMax: item.rawMax
      };
    });
  });
  return stats;
}

function renderDevSelector() {
  const container = document.getElementById("dev-candidates-list");
  if (!container) return;
  
  // Save check states if container already has checkboxes
  const previousChecked = {};
  const inputs = container.querySelectorAll("input[type='checkbox']");
  let hasPrevious = false;
  if (inputs.length > 0) {
    hasPrevious = true;
    inputs.forEach(input => {
      if (input.id === "dev-select-all") return;
      previousChecked[input.value] = input.checked;
    });
  }
  
  container.innerHTML = "";
  const allCandidates = [...new Set(db.scores.map(s => s.candidateName))];
  allCandidates.sort((a, b) => a.localeCompare(b));
  
  if (allCandidates.length === 0) return;
  
  // 1. Create "Select All" checkbox
  let isAllChecked = true;
  if (hasPrevious) {
    isAllChecked = allCandidates.every(cand => previousChecked[cand] !== false);
  }
  
  const selectAllDiv = document.createElement("div");
  const selectAllActiveClass = isAllChecked ? "active" : "";
  const selectAllCheckedAttr = isAllChecked ? "checked" : "";
  
  selectAllDiv.innerHTML = `
    <label class="checkbox-label ${selectAllActiveClass}" id="lbl-check-dev-all" style="border-style: dashed; font-weight: bold; border-color: var(--color-primary-glow);">
      <input type="checkbox" id="dev-select-all" ${selectAllCheckedAttr} onchange="toggleSelectAllDev()">
      <span class="color-dot" style="background-color: var(--color-primary);"></span>
      <span>เลือกทั้งหมด (Select All)</span>
    </label>
  `;
  container.appendChild(selectAllDiv);
  
  // 2. Create individual candidate checkboxes
  allCandidates.forEach(cand => {
    const color = getCandidateColor(cand);
    const div = document.createElement("div");
    const isChecked = previousChecked[cand] !== undefined ? previousChecked[cand] : isAllChecked;
    const activeClass = isChecked ? "active" : "";
    const checkedAttr = isChecked ? "checked" : "";
    
    div.innerHTML = `
      <label class="checkbox-label ${activeClass}" id="lbl-check-dev-${cand}">
        <input type="checkbox" class="dev-cand-checkbox" value="${cand}" ${checkedAttr} onchange="updateDevChartAndLabel('${cand}')">
        <span class="color-dot" style="background-color: ${color};"></span>
        <span>${cand}</span>
      </label>
    `;
    container.appendChild(div);
  });
}

function toggleSelectAllDev() {
  const selectAllChk = document.getElementById("dev-select-all");
  const selectAllLbl = document.getElementById("lbl-check-dev-all");
  if (!selectAllChk || !selectAllLbl) return;
  
  const checked = selectAllChk.checked;
  if (checked) {
    selectAllLbl.classList.add("active");
  } else {
    selectAllLbl.classList.remove("active");
  }
  
  const checkboxes = document.querySelectorAll("#dev-candidates-list .dev-cand-checkbox");
  checkboxes.forEach(cb => {
    cb.checked = checked;
    const lbl = document.getElementById(`lbl-check-dev-${cb.value}`);
    if (lbl) {
      if (checked) {
        lbl.classList.add("active");
      } else {
        lbl.classList.remove("active");
      }
    }
  });
  
  updateDevChart();
}

function updateDevChartAndLabel(candName) {
  const lbl = document.getElementById(`lbl-check-dev-${candName}`);
  if (lbl) {
    const chk = lbl.querySelector('input[type="checkbox"]');
    if (chk.checked) {
      lbl.classList.add("active");
    } else {
      lbl.classList.remove("active");
    }
  }
  
  // Sync "Select All" checkbox state
  const selectAllChk = document.getElementById("dev-select-all");
  const selectAllLbl = document.getElementById("lbl-check-dev-all");
  if (selectAllChk && selectAllLbl) {
    const totalCands = document.querySelectorAll("#dev-candidates-list .dev-cand-checkbox").length;
    const checkedCands = document.querySelectorAll("#dev-candidates-list .dev-cand-checkbox:checked").length;
    
    selectAllChk.checked = (totalCands === checkedCands);
    if (selectAllChk.checked) {
      selectAllLbl.classList.add("active");
    } else {
      selectAllLbl.classList.remove("active");
    }
  }
  
  updateDevChart();
}

function updateDevChart() {
  renderDevelopmentChart();
}

function renderDevelopmentChart() {
  const ctx = document.getElementById("devChart");
  if (!ctx) return;
  
  // Sort mocks chronologically / numerically
  const sortedMocks = [...db.mocks].sort((a, b) => {
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
  });
  
  if (sortedMocks.length === 0) {
    if (devChartInstance) {
      devChartInstance.destroy();
      devChartInstance = null;
    }
    return;
  }
  
  const checkedBoxes = document.querySelectorAll("#dev-candidates-list input[type='checkbox']:checked");
  const selectedCandidates = Array.from(checkedBoxes).map(cb => cb.value);
  const stats = calculateAllMocksStats();
  const labels = sortedMocks.map(m => m.name);
  const datasets = [];
  
  selectedCandidates.forEach(cand => {
    const color = getCandidateColor(cand);
    const dataPoints = [];
    const ranks = [];
    const totalCounts = [];
    
    sortedMocks.forEach(mock => {
      const mockStats = stats[mock.name] && stats[mock.name][cand];
      if (mockStats) {
        dataPoints.push(parseFloat(mockStats.percentage.toFixed(1)));
        ranks.push(mockStats.rank);
        totalCounts.push(mockStats.totalCount);
      } else {
        dataPoints.push(null);
        ranks.push(null);
        totalCounts.push(null);
      }
    });
    
    datasets.push({
      label: cand,
      data: dataPoints,
      ranks: ranks,
      totalCounts: totalCounts,
      borderColor: color,
      backgroundColor: color + "1a", // 10% opacity
      borderWidth: 3,
      pointBackgroundColor: color,
      pointBorderColor: "#ffffff",
      pointBorderWidth: 1.5,
      pointRadius: 6,
      pointHoverRadius: 8,
      tension: 0.15,
      spanGaps: true
    });
  });
  
  // Calculate group mean dataset
  const meanDataPoints = [];
  const sdDataPoints = [];
  const meanRanks = [];
  const meanTotalCounts = [];
  
  sortedMocks.forEach(mock => {
    const mockStatsObj = stats[mock.name];
    const percentValues = [];
    if (mockStatsObj) {
      for (const candName in mockStatsObj) {
        percentValues.push(mockStatsObj[candName].percentage);
      }
    }
    const groupStats = calculateMeanAndSd(percentValues);
    const mean = groupStats.mean !== null ? parseFloat(groupStats.mean.toFixed(1)) : null;
    const sd = groupStats.sd !== null ? parseFloat(groupStats.sd.toFixed(1)) : null;
    meanDataPoints.push(mean);
    sdDataPoints.push(sd);
    meanRanks.push(null);
    meanTotalCounts.push(groupStats.count || null);
  });
  
  const isDark = !document.body.classList.contains("light-theme");
  const meanColor = isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(31, 41, 55, 0.85)"; // White in dark theme, dark gray/black in light theme
  
  // Push group mean line if there is any mock data
  datasets.push({
    label: 'ค่าเฉลี่ยกลุ่ม (Mean)',
    data: meanDataPoints,
    sds: sdDataPoints,
    ranks: meanRanks,
    totalCounts: meanTotalCounts,
    borderColor: meanColor,
    backgroundColor: 'transparent',
    borderWidth: 2.5,
    borderDash: [6, 4],
    pointBackgroundColor: meanColor,
    pointBorderColor: "#ffffff",
    pointBorderWidth: 1,
    pointRadius: 4,
    pointHoverRadius: 6,
    tension: 0.15,
    spanGaps: true
  });
  
  // Calculate dynamic minimum score for Y-axis to highlight the gap
  let minScore = 100;
  selectedCandidates.forEach(cand => {
    sortedMocks.forEach(mock => {
      const mockStats = stats[mock.name] && stats[mock.name][cand];
      if (mockStats) {
        if (mockStats.percentage < minScore) {
          minScore = mockStats.percentage;
        }
      }
    });
  });
  
  // Factor in Mean line scores
  meanDataPoints.forEach(val => {
    if (val !== null && val < minScore) {
      minScore = val;
    }
  });
  
  const yMin = (selectedCandidates.length > 0 || meanDataPoints.some(v => v !== null)) && minScore < 100 
    ? Math.max(0, Math.floor((minScore - 5) / 5) * 5) 
    : 0;
  
  const textColor = isDark ? "#9ca3af" : "#4b5563";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)";
  
  if (devChartInstance) {
    devChartInstance.destroy();
  }
  
  devChartInstance = new Chart(ctx.getContext("2d"), {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: yMin,
          max: 100,
          grid: { color: gridColor },
          ticks: {
            color: textColor,
            callback: value => `${value}%`
          }
        },
        x: {
          grid: { color: gridColor },
          ticks: { color: textColor }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: textColor,
            font: { family: 'Inter, Roboto, sans-serif' }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.dataset.label;
              const percentage = context.parsed.y;
              const idx = context.dataIndex;
              const rank = context.dataset.ranks[idx];
              const totalCount = context.dataset.totalCounts[idx];
              const sd = context.dataset.sds && context.dataset.sds[idx];
              if (sd !== undefined && sd !== null) {
                return `${label}: ${percentage.toFixed(1)}% (SD ${sd.toFixed(1)}%, n=${totalCount || 0})`;
              }
              if (rank) {
                return `${label}: ${percentage.toFixed(1)}% (อันดับที่ ${rank} / ${totalCount})`;
              }
              return `${label}: ${percentage.toFixed(1)}%`;
            }
          }
        }
      }
    },
    plugins: [rankLabelsPlugin]
  });
}

function varStyle(varName) {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

// Heatmap Breakdown Rendering & Color Interpolator
function getHeatmapColor(pct, meanPct) {
  if (meanPct === undefined) meanPct = 50;
  const isLight = document.body.classList.contains("light-theme");
  
  const diff = pct - meanPct;
  const maxDiff = 30; // Max difference threshold for full color saturation
  
  let h;
  if (diff < 0) {
    // Underperforming: interpolate from Yellow/Orange (Hue 50) down to Red (Hue 0)
    const ratio = Math.min(1, Math.abs(diff) / maxDiff);
    h = 50 - ratio * 50;
  } else {
    // Outperforming: interpolate from Yellow/Orange (Hue 50) up to Green (Hue 140)
    const ratio = Math.min(1, diff / maxDiff);
    h = 50 + ratio * 90;
  }
  
  let bg, text;
  if (isLight) {
    // Light theme: blends with light background (clean pastel overlay)
    bg = `hsla(${h}, 90%, 55%, 0.18)`;
    text = `hsl(${h}, 90%, 28%)`;
  } else {
    // Dark theme: blends with dark background (glowing pastel overlay, never muddy!)
    bg = `hsla(${h}, 90%, 65%, 0.25)`;
    text = `hsl(${h}, 95%, 82%)`;
  }
  
  return { bg, text };
}

function renderHeatmap() {
  const currentMock = db.mocks.find(m => m.name === selectedMockName);
  if (!currentMock) return;
  
  const mockScores = db.scores.filter(s => s.mockName === selectedMockName);
  
  // Header row
  const table = document.getElementById("heatmap-table");
  table.innerHTML = "";
  
  const thead = document.createElement("thead");
  const headerTr = document.createElement("tr");
  headerTr.innerHTML = `<th>ผู้สอบ</th>`;
  currentMock.parts.forEach(part => {
    headerTr.innerHTML += `<th>${part.name}<br><small style="color:var(--text-muted);font-weight:normal;">เต็ม ${part.max}</small></th>`;
  });
  thead.appendChild(headerTr);
  table.appendChild(thead);
  
  // Rows for candidates
  const tbody = document.createElement("tbody");
  
  if (mockScores.length === 0) {
    const emptyTr = document.createElement("tr");
    emptyTr.innerHTML = `<td colspan="${currentMock.parts.length + 1}" style="text-align:center; padding: 2rem; color: var(--text-muted);">ยังไม่มีผู้สอบ</td>`;
    tbody.appendChild(emptyTr);
    table.appendChild(tbody);
    return;
  }
  
  // Calculate part averages (Means) for comparison
  const partMeans = {};
  currentMock.parts.forEach(part => {
    let sum = 0;
    let count = 0;
    mockScores.forEach(s => {
      const val = s.scores[part.name];
      if (val !== undefined && val !== null) {
        sum += val;
        count++;
      }
    });
    const meanScore = count > 0 ? sum / count : 0;
    const meanPct = part.max > 0 ? (meanScore / part.max) * 100 : 0;
    partMeans[part.name] = {
      meanScore: meanScore,
      meanPct: meanPct
    };
  });
  
  // Sort candidates by Rank (rank 1 to last)
  const processedMockScores = mockScores.map(s => {
    const data = getMockDataForCandidate(currentMock, s);
    const accuracyData = getAccuracyDataForCandidate(currentMock, s);
    return {
      scoreObj: s,
      candidateName: s.candidateName,
      ...data,
      ...accuracyData
    };
  });
  
  processedMockScores.sort((a, b) => compareRankedScores(a, b));
  
  const sortedMockScores = processedMockScores.map(x => x.scoreObj);
  
  sortedMockScores.forEach(s => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="name-cell notranslate" translate="no" spellcheck="false" data-gramm="false" data-enable-grammarly="false" onclick="selectCandidate('${s.candidateName}')">${s.candidateName}</td>`;
    
    currentMock.parts.forEach(part => {
      const scoreVal = s.scores[part.name] || 0;
      const pct = part.max > 0 ? (scoreVal / part.max) * 100 : 0;
      
      const partMean = partMeans[part.name] || { meanScore: 0, meanPct: 50 };
      const colors = getHeatmapColor(pct, partMean.meanPct);
      
      const diff = pct - partMean.meanPct;
      const diffSign = diff >= 0 ? "+" : "";
      
      const tooltip = `คะแนน: ${scoreVal}/${part.max} (${pct.toFixed(1)}%)\nค่าเฉลี่ยกลุ่ม: ${partMean.meanScore.toFixed(1)}/${part.max} (${partMean.meanPct.toFixed(1)}%)\nส่วนต่างกลุ่ม: ${diffSign}${diff.toFixed(1)}%`;
      
      tr.innerHTML += `<td class="heatmap-cell" style="background-color: ${colors.bg} !important; color: ${colors.text} !important;" title="${tooltip}">${scoreVal}</td>`;
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

// Individual Analytics Report (Tab 3)
function renderIndividualReport() {
  const currentMock = db.mocks.find(m => m.name === selectedMockName);
  const indPanel = document.getElementById("individual-analytics-panel");
  const noIndPanel = document.getElementById("no-individual-panel");
  
  if (!currentMock || !selectedCandidateName) {
    indPanel.style.display = "none";
    noIndPanel.style.display = "block";
    return;
  }
  
  indPanel.style.display = "grid";
  noIndPanel.style.display = "none";
  
  const mockScores = db.scores.filter(s => s.mockName === selectedMockName);
  const candScore = mockScores.find(s => s.candidateName === selectedCandidateName);
  
  if (!candScore) {
    indPanel.style.display = "none";
    noIndPanel.style.display = "block";
    return;
  }
  
  // Calculate rankings to show candidate position
  const rankingList = mockScores.map(cs => {
    const stats = getMockDataForCandidate(currentMock, cs);
    const accuracyData = getAccuracyDataForCandidate(currentMock, cs);
    return {
      candidateName: cs.candidateName,
      ...stats,
      ...accuracyData
    };
  });
  
  rankingList.sort((a, b) => compareRankedScores(a, b, "raw"));
  const rankRaw = rankingList.findIndex(r => r.candidateName === selectedCandidateName) + 1;
  
  rankingList.sort((a, b) => compareRankedScores(a, b, "weighted"));
  const rankWeighted = rankingList.findIndex(r => r.candidateName === selectedCandidateName) + 1;
  
  const stats = getMockDataForCandidate(currentMock, candScore);
  
  // Candidate Header Details
  document.getElementById("ind-name").textContent = selectedCandidateName;
  document.getElementById("ind-avatar").textContent = selectedCandidateName.charAt(0).toUpperCase();
  document.getElementById("ind-mock-title").textContent = selectedMockName;
  
  document.getElementById("ind-rank").innerHTML = `${rankingType === "raw" ? rankRaw : rankWeighted} <span class="card-value-unit">/ ${mockScores.length}</span>`;
  document.getElementById("ind-raw").innerHTML = `${stats.rawTotal} <span class="card-value-unit">/ ${stats.rawMax}</span>`;
  document.getElementById("ind-weighted").innerHTML = `${stats.weightedTotal.toFixed(1)} <span class="card-value-unit">/ ${stats.weightedMax}</span>`;
  document.getElementById("ind-avg").innerHTML = `${(rankingType === "raw" ? stats.rawPercentage : stats.weightedPercentage).toFixed(1)}%`;
  
  // Strengths & Weaknesses (Top 3, Bottom 3) with Peer Comparison
  const accEnabled = isAccuracyEnabled(selectedMockName);
  
  const partPerformance = currentMock.parts.map(part => {
    const val = candScore.scores[part.name] || 0;
    const pct = part.max > 0 ? (val / part.max) * 100 : 0;
    
    // Find best score and candidate(s) for this part
    let bestScore = 0;
    let bestCandidates = "-";
    if (mockScores.length > 0) {
      bestScore = Math.max(...mockScores.map(s => s.scores[part.name] || 0));
      const bestCandsList = mockScores
        .filter(s => (s.scores[part.name] || 0) === bestScore)
        .map(s => s.candidateName);
      bestCandidates = bestCandsList.join(", ");
    }
    
    // Find average score for this part
    const sum = mockScores.reduce((acc, s) => acc + (s.scores[part.name] || 0), 0);
    const average = mockScores.length > 0 ? sum / mockScores.length : 0;
    
    // Calculate part accuracy
    const attempted = candScore.scores[part.name + "_attempted"];
    const hasAccuracy = attempted !== undefined && attempted !== null && attempted > 0;
    const accuracy = hasAccuracy ? (val / attempted) * 100 : 0;
    
    // Calculate difference compared to group average percentage
    const avgPct = part.max > 0 ? (average / part.max) * 100 : 0;
    const diff = pct - avgPct;
    
    return { 
      name: part.name, 
      score: val, 
      max: part.max, 
      pct,
      bestScore,
      bestCandidates,
      average,
      attempted,
      hasAccuracy,
      accuracy,
      diff
    };
  });
  
  // Sort parts by performance difference compared to the average (descending)
  partPerformance.sort((a, b) => b.diff - a.diff);
  
  // Rendering strengths (Top 3 - highest difference from average)
  const strengthsContainer = document.getElementById("strengths-list");
  strengthsContainer.innerHTML = "";
  const strengths = partPerformance.slice(0, 3);
  strengths.forEach(st => {
    const div = document.createElement("div");
    div.className = "insight-item";
    
    const diffLabel = st.diff < 0 
      ? `ต่ำกว่าเฉลี่ย ${Math.abs(st.diff).toFixed(1)}%` 
      : `สูงกว่าเฉลี่ย +${st.diff.toFixed(1)}%`;
    const diffColor = st.diff >= 0 ? "var(--color-success)" : "var(--color-danger)";
    
    div.innerHTML = `
      <div class="insight-icon strength-icon"><i class="fa-solid fa-circle-arrow-up"></i></div>
      <div class="insight-details">
        <h4>${st.name} <small style="color:var(--color-success); font-weight:bold;">${st.pct.toFixed(0)}%</small> <span style="font-size: 0.8rem; font-weight: normal; color: ${diffColor}; margin-left: 0.3rem;">(${diffLabel})</span></h4>
        <p>ทำได้ ${st.score} / ${st.max} คะแนน${accEnabled && st.hasAccuracy ? ` | ความแม่นยำ: <strong style="color: var(--color-primary);">${st.accuracy.toFixed(1)}%</strong>` : ""}</p>
        <p class="comparison-text" style="font-size:0.8rem; color:var(--text-muted); margin-top:0.2rem;">
          <i class="fa-solid fa-scale-balanced"></i> ค่าเฉลี่ย: <strong>${st.average.toFixed(1)}</strong> | สูงสุด: <strong>${st.bestScore}</strong> (${st.bestCandidates})
        </p>
      </div>
    `;
    strengthsContainer.appendChild(div);
  });
  
  // Rendering weaknesses (Bottom 3 - lowest difference from average)
  const weaknessesContainer = document.getElementById("weaknesses-list");
  weaknessesContainer.innerHTML = "";
  // Weaknesses should be taken from the bottom, so reverse slice
  const weaknesses = partPerformance.slice(-3).reverse(); // Reverse so worst score is first
  weaknesses.forEach(wk => {
    const div = document.createElement("div");
    div.className = "insight-item";
    
    const diffLabel = wk.diff < 0 
      ? `ต่ำกว่าเฉลี่ย ${Math.abs(wk.diff).toFixed(1)}%` 
      : `สูงกว่าเฉลี่ย +${wk.diff.toFixed(1)}%`;
    const diffColor = wk.diff >= 0 ? "var(--color-success)" : "var(--color-danger)";
    
    div.innerHTML = `
      <div class="insight-icon weakness-icon"><i class="fa-solid fa-circle-arrow-down"></i></div>
      <div class="insight-details">
        <h4>${wk.name} <small style="color:var(--color-danger); font-weight:bold;">${wk.pct.toFixed(0)}%</small> <span style="font-size: 0.8rem; font-weight: normal; color: ${diffColor}; margin-left: 0.3rem;">(${diffLabel})</span></h4>
        <p>ทำได้ ${wk.score} / ${wk.max} คะแนน${accEnabled && wk.hasAccuracy ? ` | ความแม่นยำ: <strong style="color: var(--color-danger);">${wk.accuracy.toFixed(1)}%</strong>` : ""}</p>
        <p class="comparison-text" style="font-size:0.8rem; color:var(--text-muted); margin-top:0.2rem;">
          <i class="fa-solid fa-scale-balanced"></i> ค่าเฉลี่ย: <strong>${wk.average.toFixed(1)}</strong> | สูงสุด: <strong>${wk.bestScore}</strong> (${wk.bestCandidates})
        </p>
      </div>
    `;
    weaknessesContainer.appendChild(div);
  });
  
  // Render Score Breakdown & Self-Evaluation Table
  const breakdownTbody = document.getElementById("ind-score-breakdown-tbody");
  
  // Render dynamic headers for individual scorecard
  const breakdownThead = document.getElementById("individual-scorecard-thead");
  if (breakdownThead) {
    if (accEnabled) {
      breakdownThead.innerHTML = `
        <tr>
          <th>หัวข้อสอบ (พาร์ท)</th>
          <th>คะแนนของฉัน</th>
          <th>คะแนนเต็ม</th>
          <th>คิดเป็นร้อยละ</th>
          <th>ข้อที่ทำ</th>
          <th>% Accuracy</th>
          <th>ค่าเฉลี่ยกลุ่ม</th>
          <th>ส่วนต่างจากเฉลี่ย</th>
          <th>คะแนนสูงสุด</th>
          <th>อันดับในพาร์ท</th>
          <th>ระดับการประเมิน</th>
        </tr>
      `;
    } else {
      breakdownThead.innerHTML = `
        <tr>
          <th>หัวข้อสอบ (พาร์ท)</th>
          <th>คะแนนของฉัน</th>
          <th>คะแนนเต็ม</th>
          <th>คิดเป็นร้อยละ</th>
          <th>ค่าเฉลี่ยกลุ่ม</th>
          <th>ส่วนต่างจากเฉลี่ย</th>
          <th>คะแนนสูงสุด</th>
          <th>อันดับในพาร์ท</th>
          <th>ระดับการประเมิน</th>
        </tr>
      `;
    }
  }
  
  if (breakdownTbody) {
    breakdownTbody.innerHTML = "";
    
    currentMock.parts.forEach(part => {
      const scoreVal = candScore.scores[part.name] || 0;
      const pct = part.max > 0 ? (scoreVal / part.max) * 100 : 0;
      
      // Calculate group average
      const sum = mockScores.reduce((acc, s) => acc + (s.scores[part.name] || 0), 0);
      const average = mockScores.length > 0 ? sum / mockScores.length : 0;
      
      // Calculate max score for this part
      const maxScore = mockScores.length > 0 ? Math.max(...mockScores.map(s => s.scores[part.name] || 0)) : 0;
      
      // Calculate part rank
      const allScoresInPart = mockScores.map(s => s.scores[part.name] || 0);
      allScoresInPart.sort((a, b) => b - a);
      const partRank = allScoresInPart.indexOf(scoreVal) + 1;
      
      // Calculate part accuracy
      const attempted = candScore.scores[part.name + "_attempted"];
      const partAcc = (attempted !== undefined && attempted !== null && attempted > 0) ? (scoreVal / attempted) * 100 : null;
      
      // Calculate diff from average
      const diff = scoreVal - average;
      const diffSign = diff >= 0 ? `+${diff.toFixed(1)}` : `${diff.toFixed(1)}`;
      const diffClass = diff >= 0 ? "style='color: var(--color-success); font-weight: bold;'" : "style='color: var(--color-danger); font-weight: bold;'";
      
      // Performance Level
      let perfLevel = "ต้องปรับปรุง";
      let perfClass = "style='color: var(--color-danger); font-weight: bold;'";
      if (pct >= 80) {
        perfLevel = "ดีเยี่ยม";
        perfClass = "style='color: var(--color-success); font-weight: bold;'";
      } else if (pct >= 65) {
        perfLevel = "ดี";
        perfClass = "style='color: #3b82f6; font-weight: bold;'";
      } else if (pct >= 50) {
        perfLevel = "ผ่านเกณฑ์";
        perfClass = "style='color: var(--color-warning); font-weight: bold;'";
      }
      
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="font-weight: 600;">${part.name}</td>
        <td class="score-cell" style="font-weight: 600;">${scoreVal}</td>
        <td style="color: var(--text-muted);">${part.max}</td>
        <td class="score-cell" style="font-weight: 600;">${pct.toFixed(0)}%</td>
        ${accEnabled ? `
          <td style="font-weight: 500;">${attempted !== undefined && attempted !== null ? attempted : '-'}</td>
          <td class="score-cell" style="color: var(--color-primary); font-weight: 600;">${partAcc !== null ? partAcc.toFixed(1) + '%' : '-'}</td>
        ` : ""}
        <td style="font-weight: 500;">${average.toFixed(1)}</td>
        <td ${diffClass}>${diffSign}</td>
        <td style="font-weight: 500;">${maxScore}</td>
        <td style="font-weight: 500;">${partRank} <span style="font-size: 0.75rem; color: var(--text-muted);">/ ${mockScores.length}</span></td>
        <td ${perfClass}>${perfLevel}</td>
      `;
      breakdownTbody.appendChild(tr);
    });
  }
}

function printReport() {
  window.print();
}

// Data Entry: Dynamically Populate Input Fields
function generateScoreInputFields() {
  const selectMock = document.getElementById("score-mock-select").value;
  const container = document.getElementById("dynamic-score-inputs");
  container.innerHTML = "";
  
  if (!selectMock) return;
  const mock = db.mocks.find(m => m.name === selectMock);
  if (!mock) return;
  
  const accEnabled = isAccuracyEnabled(selectMock);
  
  mock.parts.forEach(part => {
    const div = document.createElement("div");
    div.className = "form-group";
    
    if (accEnabled) {
      div.innerHTML = `
        <label style="font-weight: 600;">${part.name} (คะแนนเต็ม ${part.max})</label>
        <div style="display: flex; gap: 0.8rem; margin-top: 0.2rem;">
          <div style="flex: 1;">
            <span style="font-size: 0.75rem; color: var(--text-muted);">จำนวนข้อที่ทำ</span>
            <input type="number" class="form-control score-part-attempted-input" data-part="${part.name}" min="0" placeholder="ข้อที่ทำ">
          </div>
          <div style="flex: 1;">
            <span style="font-size: 0.75rem; color: var(--text-muted);">จำนวนข้อที่ถูก (คะแนน)</span>
            <input type="number" class="form-control score-part-input" data-part="${part.name}" max="${part.max}" min="0" placeholder="คะแนนที่ได้">
          </div>
        </div>
      `;
    } else {
      div.innerHTML = `
        <label>${part.name} (คะแนนเต็ม ${part.max})</label>
        <input type="number" class="form-control score-part-input" data-part="${part.name}" max="${part.max}" min="0" placeholder="กรอกคะแนนที่ได้">
      `;
    }
    container.appendChild(div);
  });
  
  // If we already have scores for the selected candidate + mock, prefill!
  fillCandidateScoresToForm();
}

function fillCandidateScoresToForm() {
  const selectMock = document.getElementById("score-mock-select").value;
  const candidateName = document.getElementById("score-candidate-input").value.trim().toUpperCase();
  const deleteBtn = document.getElementById("btn-delete-score");
  
  if (!selectMock || !candidateName) {
    if (deleteBtn) deleteBtn.style.display = "none";
    const inputs = document.querySelectorAll(".score-part-input");
    inputs.forEach(input => {
      input.value = "";
    });
    const attemptedInputs = document.querySelectorAll(".score-part-attempted-input");
    attemptedInputs.forEach(input => {
      input.value = "";
    });
    return;
  }
  
  const existingScore = db.scores.find(s => s.mockName === selectMock && s.candidateName === candidateName);
  const inputs = document.querySelectorAll(".score-part-input");
  const attemptedInputs = document.querySelectorAll(".score-part-attempted-input");
  
  inputs.forEach(input => {
    const partName = input.getAttribute("data-part");
    if (existingScore && existingScore.scores[partName] !== undefined) {
      input.value = existingScore.scores[partName];
    } else {
      input.value = "";
    }
  });
  
  attemptedInputs.forEach(input => {
    const partName = input.getAttribute("data-part");
    const attemptedKey = partName + "_attempted";
    if (existingScore && existingScore.scores[attemptedKey] !== undefined) {
      input.value = existingScore.scores[attemptedKey];
    } else {
      input.value = "";
    }
  });
  
  if (deleteBtn) {
    if (existingScore) {
      deleteBtn.style.display = "inline-flex";
    } else {
      deleteBtn.style.display = "none";
    }
  }
}

// CRUD Operations in Frontend/API
async function submitNewMock(event) {
  event.preventDefault();
  
  const mockName = document.getElementById("new-mock-name").value.trim();
  if (!mockName) {
    showToast("กรุณาระบุชื่อการสอบ Mock", "error");
    return;
  }
  
  const rows = document.querySelectorAll("#parts-list-container .dynamic-row");
  const parts = [];
  let hasError = false;
  
  rows.forEach(row => {
    const nameInput = row.querySelector(".part-name-input").value.trim();
    const maxInput = parseInt(row.querySelector(".part-max-input").value) || 0;
    
    if (nameInput) {
      if (maxInput <= 0) {
        showToast("คะแนนเต็มต้องมีค่ามากกว่า 0", "error");
        hasError = true;
      }
      parts.push({ name: nameInput, max: maxInput });
    }
  });
  
  if (hasError) return;
  
  if (parts.length === 0) {
    showToast("กรุณาเพิ่มหัวข้อสอบอย่างน้อย 1 หัวข้อ", "error");
    return;
  }
  
  setButtonLoading("btn-submit-mock", true, "กำลังบันทึก...");
  setButtonLoading("btn-delete-mock", true, "กำลังบันทึก...");
  setSyncStatus("loading", "กำลังบันทึก Mock...");
  
  if (mockFormMode === "edit") {
    // Calculate renamed parts by index mapping
    let partRenames = {};
    for (let i = 0; i < Math.min(editingOriginalParts.length, parts.length); i++) {
      if (editingOriginalParts[i].name !== parts[i].name) {
        partRenames[editingOriginalParts[i].name] = parts[i].name;
      }
    }
    
    const payload = {
      action: "editMock",
      oldMockName: editingOriginalMockName,
      newMockName: mockName,
      parts: parts,
      partRenames: partRenames
    };
    
    if (apiUrl) {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "text/plain" }
        });
        const res = await response.json();
        if (!res.success) throw new Error(res.error);
        showToast(`อัปเดตแก้ไข Mock ${mockName} สำเร็จ`, "success");
      } catch (err) {
        console.error(err);
        showToast("บันทึกออนไลน์ไม่สำเร็จ! กรุณาตรวจสอบว่าได้อัปเดตสคริปต์ Google Apps Script เป็นเวอร์ชันล่าสุดใน Google Sheet แล้ว", "error");
        setSyncStatus("error", "บันทึกออนไลน์ไม่สำเร็จ");
        setButtonLoading("btn-submit-mock", false);
        setButtonLoading("btn-delete-mock", false);
        return; // Stop execution to prevent overwriting local storage with old data
      }
    } else {
      editMockLocally(editingOriginalMockName, mockName, parts, partRenames);
      showToast(`อัปเดต Mock ${mockName} ลงเครื่องแล้ว (โหมดออฟไลน์)`, "success");
    }
  } else {
    // Create Mode (Add Mock)
    const payload = {
      action: "addMock",
      mockName,
      parts
    };
    
    if (apiUrl) {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "text/plain" }
        });
        const res = await response.json();
        if (!res.success) throw new Error(res.error);
        showToast(`สร้าง Mock ${mockName} เรียบร้อย`, "success");
      } catch (err) {
        console.error(err);
        showToast("สร้าง Mock ออนไลน์ไม่สำเร็จ! กรุณาตรวจสอบว่าได้อัปเดตสคริปต์ Google Apps Script เป็นเวอร์ชันล่าสุดใน Google Sheet แล้ว", "error");
        setSyncStatus("error", "สร้าง Mock ออนไลน์ไม่สำเร็จ");
        setButtonLoading("btn-submit-mock", false);
        setButtonLoading("btn-delete-mock", false);
        return; // Stop execution to prevent overwriting local storage with old data
      }
    } else {
      saveMockLocally(mockName, parts);
      showToast(`สร้าง Mock ${mockName} ลงเครื่องแล้ว (โหมดออฟไลน์)`, "success");
    }
  }
  
  // Reset and return to create mode
  setMockFormMode("create");
  
  // Reload Data
  await loadData();
  
  setButtonLoading("btn-submit-mock", false);
  setButtonLoading("btn-delete-mock", false);
}

// Mode toggler for Mock creation / editing form
function setMockFormMode(mode) {
  mockFormMode = mode;
  
  const createBtn = document.getElementById("mode-create-btn");
  const editBtn = document.getElementById("mode-edit-btn");
  const editGroup = document.getElementById("edit-mock-select-group");
  const mockHeader = document.getElementById("mock-form-header");
  const nameLabel = document.getElementById("mock-name-label");
  const nameInput = document.getElementById("new-mock-name");
  const submitBtn = document.getElementById("btn-submit-mock") || document.querySelector("#create-mock-form button[type='submit']");
  const deleteMockBtn = document.getElementById("btn-delete-mock");
  
  if (mode === "create") {
    createBtn.classList.add("active");
    editBtn.classList.remove("active");
    if (editGroup) editGroup.style.display = "none";
    if (deleteMockBtn) deleteMockBtn.style.display = "none";
    mockHeader.innerHTML = `<i class="fa-solid fa-folder-plus" style="color:var(--color-primary);"></i> 1. สร้างการสอบ Mock ใหม่`;
    nameLabel.textContent = "ชื่อชุดข้อสอบ Mock";
    nameInput.placeholder = "เช่น Mock TG5, TCAS 69";
    submitBtn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> บันทึกข้อมูลข้อสอบ`;
    
    // Reset Form
    nameInput.value = "";
    document.getElementById("parts-list-container").innerHTML = "";
    addPartRow();
    editingOriginalMockName = "";
    editingOriginalParts = [];
  } else {
    createBtn.classList.remove("active");
    editBtn.classList.add("active");
    if (editGroup) editGroup.style.display = "block";
    mockHeader.innerHTML = `<i class="fa-solid fa-file-pen" style="color:var(--color-primary);"></i> 1. แก้ไขข้อมูลชุดข้อสอบ Mock`;
    nameLabel.textContent = "ชื่อชุดข้อสอบ Mock (ใหม่)";
    submitBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> บันทึกการแก้ไขข้อสอบ`;
    
    loadMockToEdit();
  }
}

function loadMockToEdit() {
  const selector = document.getElementById("edit-mock-selector");
  if (!selector) return;
  const mockName = selector.value;
  if (!mockName) return;
  
  const mock = db.mocks.find(m => m.name === mockName);
  if (!mock) return;
  
  editingOriginalMockName = mock.name;
  editingOriginalParts = JSON.parse(JSON.stringify(mock.parts)); // Deep copy
  
  document.getElementById("new-mock-name").value = mock.name;
  
  const container = document.getElementById("parts-list-container");
  container.innerHTML = "";
  mock.parts.forEach(part => {
    addPartRow(part.name, part.max);
  });
  
  // Design mock deletion button visibility: show if no scores exist for this mock
  const hasScores = db.scores.some(s => s.mockName === mockName);
  const deleteMockBtn = document.getElementById("btn-delete-mock");
  if (deleteMockBtn) {
    if (mockFormMode === "edit" && !hasScores) {
      deleteMockBtn.style.display = "inline-flex";
    } else {
      deleteMockBtn.style.display = "none";
    }
  }
}

function editMockLocally(oldName, newName, parts, renames) {
  // 1. Update mock name in local scores
  if (oldName !== newName) {
    db.scores.forEach(s => {
      if (s.mockName === oldName) {
        s.mockName = newName;
      }
    });
  }
  
  // 2. Update part renames in local scores
  if (renames && Object.keys(renames).length > 0) {
    db.scores.forEach(s => {
      if (s.mockName === newName) {
        let updatedScores = {};
        for (let partName in s.scores) {
          let newPartName = partName;
          if (partName.endsWith("_attempted")) {
            const baseName = partName.substring(0, partName.length - 10);
            if (renames[baseName] !== undefined) {
              newPartName = renames[baseName] + "_attempted";
            }
          } else {
            if (renames[partName] !== undefined) {
              newPartName = renames[partName];
            }
          }
          updatedScores[newPartName] = s.scores[partName];
        }
        s.scores = updatedScores;
      }
    });
  }
  
  // 3. Delete old mock and insert new
  db.mocks = db.mocks.filter(m => m.name !== oldName);
  db.mocks.push({ name: newName, parts });
  
  // 4. Remove scores of deleted parts
  let partNamesList = parts.map(p => p.name);
  db.scores.forEach(s => {
    if (s.mockName === newName) {
      let cleanedScores = {};
      for (let partName in s.scores) {
        if (partName.endsWith("_attempted")) {
          const baseName = partName.substring(0, partName.length - 10);
          if (partNamesList.includes(baseName)) {
            cleanedScores[partName] = s.scores[partName];
          }
        } else {
          if (partNamesList.includes(partName)) {
            cleanedScores[partName] = s.scores[partName];
          }
        }
      }
      s.scores = cleanedScores;
    }
  });
  
  localStorage.setItem("tg_mock_db_cache", JSON.stringify(db));
}

function saveMockLocally(mockName, parts) {
  // Overwrite existing locally
  db.mocks = db.mocks.filter(m => m.name !== mockName);
  db.mocks.push({ name: mockName, parts });
  localStorage.setItem("tg_mock_db_cache", JSON.stringify(db));
}

async function submitScore(event) {
  event.preventDefault();
  
  const mockName = document.getElementById("score-mock-select").value;
  const candidateName = document.getElementById("score-candidate-input").value.trim().toUpperCase();
  
  if (!mockName || !candidateName) {
    showToast("กรุณาระบุชื่อการสอบและชื่อผู้สอบ", "error");
    return;
  }
  
  const inputs = document.querySelectorAll(".score-part-input");
  const attemptedInputs = document.querySelectorAll(".score-part-attempted-input");
  const scores = {};
  let valid = true;
  
  // Create a map for quick attempted input lookup by part name
  const attemptedMap = {};
  attemptedInputs.forEach(input => {
    const partName = input.getAttribute("data-part");
    attemptedMap[partName] = input;
  });
  
  const accEnabled = isAccuracyEnabled(mockName);
  
  inputs.forEach(input => {
    const partName = input.getAttribute("data-part");
    const val = parseInt(input.value);
    const maxVal = parseInt(input.getAttribute("max"));
    
    if (isNaN(val)) {
      showToast(`กรุณากรอกคะแนนในส่วน ${partName}`, "error");
      valid = false;
      return;
    }
    if (val < 0 || val > maxVal) {
      showToast(`คะแนนส่วน ${partName} ต้องอยู่ระหว่าง 0 ถึง ${maxVal}`, "error");
      valid = false;
      return;
    }
    
    scores[partName] = val;
    
    if (accEnabled) {
      const attInput = attemptedMap[partName];
      if (attInput) {
        const attVal = parseInt(attInput.value);
        if (isNaN(attVal)) {
          showToast(`กรุณากรอกจำนวนข้อที่ทำในส่วน ${partName}`, "error");
          valid = false;
          return;
        }
        if (attVal < 0) {
          showToast(`จำนวนข้อที่ทำในส่วน ${partName} ต้องไม่น้อยกว่า 0`, "error");
          valid = false;
          return;
        }
        if (attVal < val) {
          showToast(`จำนวนข้อที่ทำในส่วน ${partName} (${attVal}) ต้องไม่น้อยกว่าจำนวนข้อที่ถูก (${val})`, "error");
          valid = false;
          return;
        }
        scores[partName + "_attempted"] = attVal;
      }
    }
  });
  
  if (!valid) return;
  
  setButtonLoading("btn-submit-score", true, "กำลังบันทึก...");
  setButtonLoading("btn-delete-score", true, "กำลังรอ...");
  setSyncStatus("loading", "กำลังบันทึกคะแนน...");
  
  const payload = {
    action: "saveScore",
    mockName,
    candidateName,
    scores
  };
  
  if (apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "text/plain" }
      });
      const res = await response.json();
      if (!res.success) throw new Error(res.error);
      showToast(`บันทึกคะแนนของ ${candidateName} สำเร็จ`, "success");
    } catch (err) {
      console.error(err);
      showToast("บันทึกออนไลน์ไม่สำเร็จ! กรุณาตรวจสอบว่าได้อัปเดตสคริปต์ Google Apps Script เป็นเวอร์ชันล่าสุดใน Google Sheet แล้ว", "error");
      setSyncStatus("error", "บันทึกออนไลน์ไม่สำเร็จ");
      setButtonLoading("btn-submit-score", false);
      setButtonLoading("btn-delete-score", false);
      return; // Stop here so it doesn't overwrite
    }
  } else {
    saveScoreLocally(mockName, candidateName, scores);
    showToast(`บันทึกคะแนนของ ${candidateName} ลงเครื่องแล้ว (โหมดออฟไลน์)`, "success");
  }
  
  selectedCandidateName = candidateName; // Focus on this candidate
  await loadData();
  
  setButtonLoading("btn-submit-score", false);
  setButtonLoading("btn-delete-score", false);
}

function saveScoreLocally(mockName, candidateName, scores) {
  db.scores = db.scores.filter(s => !(s.mockName === mockName && s.candidateName === candidateName));
  db.scores.push({ mockName, candidateName, scores });
  localStorage.setItem("tg_mock_db_cache", JSON.stringify(db));
}

let deleteCandidateRef = "";
let deleteMockRef = "";

function confirmDeleteScore(candidateName, mockName) {
  const normName = candidateName.trim().toUpperCase();
  deleteCandidateRef = normName;
  deleteMockRef = mockName || selectedMockName;
  document.getElementById("delete-candidate-name-span").textContent = `${normName} (${deleteMockRef})`;
  document.getElementById("delete-modal").classList.add("active");
}

function deleteScoreFromForm() {
  const selectMock = document.getElementById("score-mock-select").value;
  const candidateName = document.getElementById("score-candidate-input").value.trim().toUpperCase();
  if (selectMock && candidateName) {
    confirmDeleteScore(candidateName, selectMock);
  }
}

async function executeDeleteScore() {
  if (!deleteCandidateRef || !deleteMockRef) return;
  
  setSyncStatus("loading", "กำลังลบคะแนน...");
  const payload = {
    action: "deleteScore",
    mockName: deleteMockRef,
    candidateName: deleteCandidateRef
  };
  
  setButtonLoading("btn-confirm-delete-score", true, "กำลังลบ...");
  setButtonLoading("btn-delete-score", true, "กำลังลบ...");
  setButtonLoading("btn-submit-score", true, "กำลังรอ...");
  
  if (apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "text/plain" }
      });
      const res = await response.json();
      if (!res.success) throw new Error(res.error);
      showToast("ลบคะแนนสำเร็จ", "success");
    } catch (err) {
      console.error(err);
      showToast("ลบคะแนนออนไลน์ไม่สำเร็จ! กรุณาตรวจสอบว่าได้อัปเดตสคริปต์ Google Apps Script เป็นเวอร์ชันล่าสุดใน Google Sheet แล้ว", "error");
      setSyncStatus("error", "ลบคะแนนออนไลน์ไม่สำเร็จ");
      setButtonLoading("btn-confirm-delete-score", false);
      setButtonLoading("btn-delete-score", false);
      setButtonLoading("btn-submit-score", false);
      return; // Stop here so it doesn't overwrite
    }
  } else {
    deleteScoreLocally(deleteMockRef, deleteCandidateRef);
    showToast("ลบคะแนนในเครื่องสำเร็จ (โหมดออฟไลน์)", "success");
  }
  
  if (selectedCandidateName === deleteCandidateRef) {
    selectedCandidateName = "";
  }
  
  // Clear form if the deleted score matches the currently inputted candidate in form
  const currentFormCandidate = document.getElementById("score-candidate-input").value.trim().toUpperCase();
  const currentFormMock = document.getElementById("score-mock-select").value;
  if (currentFormCandidate === deleteCandidateRef && currentFormMock === deleteMockRef) {
    document.getElementById("score-candidate-input").value = "";
    generateScoreInputFields(); // resets fields and toggles delete button to hidden
  }
  
  deleteCandidateRef = "";
  deleteMockRef = "";
  closeModals();
  await loadData();
  
  setButtonLoading("btn-confirm-delete-score", false);
  setButtonLoading("btn-delete-score", false);
  setButtonLoading("btn-submit-score", false);
}

function deleteScoreLocally(mockName, candidateName) {
  db.scores = db.scores.filter(s => !(s.mockName === mockName && s.candidateName === candidateName));
  localStorage.setItem("tg_mock_db_cache", JSON.stringify(db));
}

function deleteMockFromForm() {
  const selector = document.getElementById("edit-mock-selector");
  if (!selector) return;
  const mockName = selector.value;
  if (!mockName) return;
  
  const hasScores = db.scores.some(s => s.mockName === mockName);
  if (hasScores) {
    showToast("ไม่สามารถลบ Mock นี้ได้ เนื่องจากมีผู้กรอกคะแนนแล้ว", "error");
    return;
  }
  
  if (confirm(`คุณแน่ใจหรือไม่ที่จะลบชุดข้อสอบ ${mockName}?`)) {
    executeDeleteMock(mockName);
  }
}

async function executeDeleteMock(mockName) {
  setSyncStatus("loading", "กำลังลบ Mock...");
  const payload = {
    action: "deleteMock",
    mockName: mockName
  };
  
  setButtonLoading("btn-delete-mock", true, "กำลังลบ...");
  setButtonLoading("btn-submit-mock", true, "กำลังรอ...");
  
  if (apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "text/plain" }
      });
      const res = await response.json();
      if (!res.success) throw new Error(res.error);
      showToast(`ลบชุดข้อสอบ ${mockName} สำเร็จ`, "success");
    } catch (err) {
      console.error(err);
      showToast("ลบชุดข้อสอบออนไลน์ไม่สำเร็จ! กรุณาตรวจสอบว่าได้อัปเดตสคริปต์ Google Apps Script เป็นเวอร์ชันล่าสุดใน Google Sheet แล้ว", "error");
      setSyncStatus("error", "ลบข้อสอบออนไลน์ไม่สำเร็จ");
      setButtonLoading("btn-delete-mock", false);
      setButtonLoading("btn-submit-mock", false);
      return;
    }
  } else {
    deleteMockLocally(mockName);
    showToast(`ลบชุดข้อสอบ ${mockName} ในเครื่องสำเร็จ (โหมดออฟไลน์)`, "success");
  }
  
  if (selectedMockName === mockName) {
    selectedMockName = "";
  }
  
  setMockFormMode("create");
  await loadData();
  
  setButtonLoading("btn-delete-mock", false);
  setButtonLoading("btn-submit-mock", false);
}

function deleteMockLocally(mockName) {
  db.mocks = db.mocks.filter(m => m.name !== mockName);
  db.scores = db.scores.filter(s => s.mockName !== mockName);
  localStorage.setItem("tg_mock_db_cache", JSON.stringify(db));
}



// Offline Export/Import
function exportDataJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "data.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("ดาวน์โหลดไฟล์ data.json เรียบร้อย", "success");
}

function importDataJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedDb = JSON.parse(e.target.result);
      if (importedDb.mocks && importedDb.scores) {
        db = importedDb;
        localStorage.setItem("tg_mock_db_cache", JSON.stringify(db));
        showToast("นำเข้าข้อมูลเสร็จสิ้น", "success");
        initializeMockOptions();
      } else {
        showToast("โครงสร้างไฟล์ JSON ไม่ถูกต้อง", "error");
      }
    } catch (err) {
      showToast("อ่านไฟล์ล้มเหลว ตรวจสอบรูปแบบ JSON", "error");
    }
  };
  reader.readAsText(file);
}

// UI Event Handling & Tab switching
function setupEventListeners() {
  // Mock Exam Selector
  document.getElementById("mock-selector").addEventListener("change", onMockChanged);
  
  // Theme Toggle Button
  document.getElementById("btn-theme-toggle").addEventListener("click", toggleTheme);
  

  
  // Modal Close buttons
  const closes = document.querySelectorAll(".modal-close, .btn-close-modal");
  closes.forEach(c => {
    c.addEventListener("click", closeModals);
  });
  
  // Leaderboard type Toggle (Raw vs Weighted)
  const toggles = document.querySelectorAll(".view-toggle .toggle-opt");
  toggles.forEach(tog => {
    tog.addEventListener("click", (e) => {
      toggles.forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      rankingType = e.target.getAttribute("data-type");
      calculateAndRenderLeaderboard();
      renderIndividualReport();
      renderCharts();
      renderDevelopmentChart();
    });
  });
  
  // Individual Selector
  document.getElementById("candidate-selector").addEventListener("change", (e) => {
    selectedCandidateName = e.target.value;
    calculateAndRenderLeaderboard(); // refresh selection color
    renderIndividualReport();
    renderRadarChart();
  });
  
  // Score Input: Prefill scores when candidate name is typed/selected in form
  document.getElementById("score-candidate-input").addEventListener("input", fillCandidateScoresToForm);
  document.getElementById("score-mock-select").addEventListener("change", generateScoreInputFields);
  
  // Tab Switch Buttons
  const tabButtons = document.querySelectorAll(".tabs-navigation .tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });
  
  // Add part row to manage panel mock creation
  document.getElementById("btn-add-part").addEventListener("click", () => addPartRow());
  
  // Pre-add one part row initially
  addPartRow();
}

function switchTab(tabId) {
  const tabButtons = document.querySelectorAll(".tabs-navigation .tab-btn");
  const contents = document.querySelectorAll(".tab-content");
  
  tabButtons.forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  
  contents.forEach(c => {
    if (c.id === tabId) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });

  const activeTabButton = document.querySelector(`.tabs-navigation .tab-btn[data-tab="${tabId}"]`);
  if (activeTabButton && window.matchMedia("(max-width: 600px)").matches) {
    activeTabButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
  
  // Specific tab load adjustments
  if (tabId === "radar") {
    // Re-render radar to solve width sizing issues
    setTimeout(renderRadarChart, 50);
  }
  if (tabId === "leaderboard") {
    setTimeout(renderBarChart, 50);
  }
  if (tabId === "development") {
    setTimeout(() => {
      renderDevSelector();
      renderDevelopmentChart();
    }, 50);
  }
}

function closeModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => {
    m.classList.remove("active");
  });
}

function addPartRow(name = "", max = "") {
  const container = document.getElementById("parts-list-container");
  const div = document.createElement("div");
  div.className = "dynamic-row";
  div.innerHTML = `
    <input type="text" class="form-control part-name-input" value="${name}" placeholder="ชื่อหัวข้อ (เช่น 3D Cube)">
    <input type="number" class="form-control part-max-input" style="width:100px;" value="${max}" placeholder="คะแนนเต็ม">
    <button type="button" class="btn btn-icon btn-danger-light" onclick="this.parentElement.remove()" title="ลบหัวข้อ"><i class="fa-solid fa-xmark"></i></button>
  `;
  container.appendChild(div);
  // Auto scroll down list
  container.scrollTop = container.scrollHeight;
}
