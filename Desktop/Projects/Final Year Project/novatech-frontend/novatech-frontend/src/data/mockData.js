export const mockUsers = [
  {
    id: "EMP001",
    email: "employee@novatech.com",
    password: "employee123",
    name: "Ananya Rao",
    role: "Employee",
    department: "Engineering",
    location: "India",
    joiningDate: "2025-07-15",
  },

  {
    id: "HR001",
    email: "hr@novatech.com",
    password: "hr123",
    name: "Priya Sharma",
    role: "HR",
    department: "Human Resources",
    location: "India",
    joiningDate: "2022-03-10",
  },

  {
    id: "ADMIN001",
    email: "admin@novatech.com",
    password: "admin123",
    name: "System Administrator",
    role: "System_Admin",
    department: "IT",
    location: "India",
    joiningDate: "2021-01-05",
  },
];

export const quickQuestions = [
  "How do I apply for leave?",
  "What is the WFH policy?",
  "What is the travel allowance?",
  "How do I raise an IT support ticket?",
];

export const recentUpdates = [
  {
    title: "Work From Home Policy Updated",
    date: "September 28, 2026",
    category: "HR",
  },
  {
    title: "Travel Expense Policy Updated",
    date: "September 24, 2026",
    category: "Finance",
  },
  {
    title: "Information Security Guidelines",
    date: "September 20, 2026",
    category: "Security",
  },
];

export const adminStats = {
  users: 500,
  documents: 593,
  accessRules: 7,
  auditEvents: 12480,
};

export const mockAuditLogs = [
  {
    user: "EMP001",
    action: "Login",
    result: "Success",
    time: "10:32 AM",
  },
  {
    user: "EMP001",
    action: "Search Leave Policy",
    result: "Allowed",
    time: "10:35 AM",
  },
  {
    user: "EMP002",
    action: "View Finance SOP",
    result: "Denied",
    time: "10:41 AM",
  },
  {
    user: "HR001",
    action: "Upload HR Policy",
    result: "Allowed",
    time: "11:05 AM",
  },
];