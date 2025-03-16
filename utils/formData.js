export const formFields = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Enter your full name",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter your address",
  },
  {
    name: "phone",
    label: "Mobile Number",
    placeholder: "Enter your Mobile number",
    type: "tel",
    validation: {
      required: "Mobile number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Invalid phone number",
      },
    },
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email address",
    type: "email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email address",
      },
    },
  },
];

export const courses = [
  {
    id: 77,
    name: "Graphic Design (Photoshop)",
    price: 999,
    seat: 55,
    classGroups: [
      {
        id: 149,
        time: "8:00 PM - 9:30 PM",
        date: "March 23, 2025",
      },
    ],
  },
  {
    id: 50,
    name: "UI/UX Certification",
    price: 999,
    seat: 33,
    classGroups: [
      {
        id: 150,
        time: "8:00pm -9:30pm",
        date: "March 28, 2025",
      },
    ],
  },
];

export const enquiryForm = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Enter your full name",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter your address",
  },
  {
    name: "phone",
    label: "Mobile Number",
    placeholder: "Enter your Mobile number",
    type: "tel",
    validation: {
      required: "Mobile number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Invalid phone number",
      },
    },
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email address",
    type: "email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email address",
      },
    },
  },
];

export const materials = [
  "Free Certificate",
  "Life time video access",
  "Future Support",
  "Live sessions on Google Meet",
];

export const requirements = [
  "Basic computer knowledge",
  "Laptop with internet",
  "Dedication to learn",
];

export const syllabus = [
  {
    title: "Introduction",
    items: [
      "Welcome & Curriculum Overview",
      "A First Taste of HTML & CSS",
      "How The Web Works",
      // ... other items
    ],
  },
  {
    title: "Details",
    items: [
      "Welcome & Curriculum Overview",
      "A First Taste of HTML & CSS",
      "How The Web Works",
      // ... other items
    ],
  },
  {
    title: "Introduction",
    items: [
      "Welcome & Curriculum Overview",
      "A First Taste of HTML & CSS",
      "How The Web Works",
      // ... other items
    ],
  },
];
