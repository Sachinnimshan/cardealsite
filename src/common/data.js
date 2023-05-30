import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BadgeIcon, FinanceIcon, HandShakeIcon } from "../icons";
import { PRIMARY_ORANGE } from "../themes/common";

export const vehicleBrands = [
  "BMW",
  "Mercedes benz",
  "Lamborghini",
  "Buggati",
  "Toyota",
  "Mazda",
  "Tesla",
  "Nissan",
  "Peugeot",
  "Jaguar",
  "Honda",
  "MG",
  "Land Rover",
  "Mazarati",
  "Lexus",
  "Mustang",
  "Bently",
  "Ferrari",
  "Porche",
];

export const carTypes = ["Sedan", "Coupe", "SUV", "Hatchback", "Convertible"];

export const loginData = ["Log in", "Register"];
export const socialIcons = [
  {
    title: "F",
    icon: <FaFacebook />,
  },
  {
    title: "F",
    icon: <FaTwitter />,
  },
  {
    title: "F",
    icon: <FaInstagram />,
  },
];

export const service = [
  {
    title: "Wide range of brands",
    icon: <BadgeIcon />,
    description:
      "We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.",
    color: PRIMARY_ORANGE,
    bgrColor: "#FFEDE8",
  },
  {
    title: "Trusted by our clients",
    icon: <HandShakeIcon />,
    description:
      "We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.",
    color: "#48DF0C",
    bgrColor: "#EFFFEB",
  },
  {
    title: "Fast & easy financing",
    icon: <FinanceIcon />,
    description:
      "We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.",
    color: "#0675FF",
    bgrColor: "#E8F1FF",
  },
];

export const mobileData = [
  "best deals",
  "sell your car",
  "car book values",
  "car dealers",
  "compare prices",
];

export const carData = [
  {
    title: "Mercedez Benz AMG GT 2 door coupe yellow",
    price: 45000,
    year: "2023",
    model: "couple",
    color: "yellow",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "500km",
    images: [
      "/images/car1.jpg",
      "/images/car1.1.jpg",
      "/images/car1.2.jpg",
      "/images/car1.3.jpg",
      "/images/car1.4.jpg",
      "/images/car1.5.jpg",
      "/images/car1.6.jpg",
    ],
    id: "C001",
    description:
      "How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.",
    keySpecs: {
      make: "Mercedez Benz",
      model: "Couple",
      color: "Yellow",
      Drivetype: "Front Wheel Drive",
      transmission: "Automatic",
      condition: "New",
      year: "2023",
      Fueltype: "Diesel",
      Enginesize: "4.8L",
      Doors: "2-door",
      Cylinders: "6",
      Color: "Blue",
      VIN: "1C4TJPBA1CD851233",
    },
    techSpecs: [
      "Backup camera",
      "Brake assist",
      "Parking assist systems",
      "Pedestrian detection",
      "Sideview camera",
      "Blind spot alert",
      "Bluetooth",
      "Heated seats",
      "Leather seats",
      "Navigation System",
      "Side airbags",
    ],
    featured: false,
  },
  {
    title: "Porsche Macan 5-door SUV blue",
    price: 25000,
    year: "2023",
    model: "couple",
    color: "Blue",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "500km",
    images: [
      "/images/car2.jpg",
      "/images/car2.1.jpg",
      "/images/car2.2.jpg",
      "/images/car2.3.jpg",
      "/images/car2.4.jpg",
      "/images/car2.5.jpg",
    ],
    id: "C002",
    description:
      "How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.",
    keySpecs: {
      make: "Mercedez Benz",
      model: "Couple",
      color: "Yellow",
      Drivetype: "Front Wheel Drive",
      transmission: "Automatic",
      condition: "New",
      year: "2023",
      Fueltype: "Diesel",
      Enginesize: "4.8L",
      Doors: "2-door",
      Cylinders: "6",
      Color: "Blue",
      VIN: "1C4TJPBA1CD851233",
    },
    techSpecs: [
      "Backup camera",
      "Brake assist",
      "Parking assist systems",
      "Pedestrian detection",
      "Sideview camera",
      "Blind spot alert",
      "Bluetooth",
      "Heated seats",
      "Leather seats",
      "Navigation System",
      "Side airbags",
    ],
    featured: true,
  },
  {
    title: "Audi A4 4-door sedan blue",
    price: 500000,
    year: "2023",
    model: "couple",
    color: "yellow",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "500km",
    images: [
      "/images/car3.jpg",
      "/images/car3.1.jpg",
      "/images/car3.2.jpg",
      "/images/car3.3.jpg",
      "/images/car3.4.jpg",
    ],
    id: "C003",
    description:
      "How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.",
    keySpecs: {
      make: "Mercedez Benz",
      model: "Couple",
      color: "Yellow",
      Drivetype: "Front Wheel Drive",
      transmission: "Automatic",
      condition: "New",
      year: "2023",
      Fueltype: "Diesel",
      Enginesize: "4.8L",
      Doors: "2-door",
      Cylinders: "6",
      Color: "Blue",
      VIN: "1C4TJPBA1CD851233",
    },
    techSpecs: [
      "Backup camera",
      "Brake assist",
      "Parking assist systems",
      "Pedestrian detection",
      "Sideview camera",
      "Blind spot alert",
      "Bluetooth",
      "Heated seats",
      "Leather seats",
      "Navigation System",
      "Side airbags",
    ],
    featured: false,
  },
  {
    title: "Audi A8 4-door sedan blue",
    price: 15000,
    year: "2023",
    model: "couple",
    color: "yellow",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "500km",
    images: [
      "/images/car4.jpg",
      "/images/car4.1.jpg",
      "/images/car4.2.jpg",
      "/images/car4.3.jpg",
      "/images/car4.4.jpg",
    ],
    id: "C004",
    description:
      "How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.",
    keySpecs: {
      make: "Mercedez Benz",
      model: "Couple",
      color: "Yellow",
      Drivetype: "Front Wheel Drive",
      transmission: "Automatic",
      condition: "New",
      year: "2023",
      Fueltype: "Diesel",
      Enginesize: "4.8L",
      Doors: "2-door",
      Cylinders: "6",
      Color: "Blue",
      VIN: "1C4TJPBA1CD851233",
    },
    techSpecs: [
      "Backup camera",
      "Brake assist",
      "Parking assist systems",
      "Pedestrian detection",
      "Sideview camera",
      "Blind spot alert",
      "Bluetooth",
      "Heated seats",
      "Leather seats",
      "Navigation System",
      "Side airbags",
    ],
    featured: true,
  },
  {
    title: "Audi A8 4-door sedan silver",
    price: 200000,
    year: "2023",
    model: "couple",
    color: "Silver",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "500km",
    images: [
      "/images/car5.jpg",
      "/images/car5.1.jpg",
      "/images/car5.2.jpg",
      "/images/car5.3.jpg",
      "/images/car5.4.jpg",
    ],
    id: "C005",
    description:
      "How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.",
    keySpecs: {
      make: "Mercedez Benz",
      model: "Couple",
      color: "Yellow",
      Drivetype: "Front Wheel Drive",
      transmission: "Automatic",
      condition: "New",
      year: "2023",
      Fueltype: "Diesel",
      Enginesize: "4.8L",
      Doors: "2-door",
      Cylinders: "6",
      Color: "Blue",
      VIN: "1C4TJPBA1CD851233",
    },
    techSpecs: [
      "Backup camera",
      "Brake assist",
      "Parking assist systems",
      "Pedestrian detection",
      "Sideview camera",
      "Blind spot alert",
      "Bluetooth",
      "Heated seats",
      "Leather seats",
      "Navigation System",
      "Side airbags",
    ],
    featured: false,
  },
  {
    title: "Ferrari LaFerrari 2-door coupe red",
    price: 30000,
    year: "2023",
    model: "couple",
    color: "Red",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "500km",
    images: [
      "/images/car6.jpg",
      "/images/car6.1.jpg",
      "/images/car6.2.jpg",
      "/images/car6.3.jpg",
      "/images/car6.4.jpg",
    ],
    id: "C006",
    description:
      "How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.",
    keySpecs: {
      make: "Mercedez Benz",
      model: "Couple",
      color: "Yellow",
      Drivetype: "Front Wheel Drive",
      transmission: "Automatic",
      condition: "New",
      year: "2023",
      Fueltype: "Diesel",
      Enginesize: "4.8L",
      Doors: "2-door",
      Cylinders: "6",
      Color: "Blue",
      VIN: "1C4TJPBA1CD851233",
    },
    techSpecs: [
      "Backup camera",
      "Brake assist",
      "Parking assist systems",
      "Pedestrian detection",
      "Sideview camera",
      "Blind spot alert",
      "Bluetooth",
      "Heated seats",
      "Leather seats",
      "Navigation System",
      "Side airbags",
    ],
    featured: true,
  },
  {
    title: "Ferrari Portofino 2-door convertible white",
    price: 45000,
    year: "2023",
    model: "couple",
    color: "Red",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "500km",
    images: [
      "/images/car7.jpg",
      "/images/car7.1.jpg",
      "/images/car7.2.jpg",
      "/images/car7.3.jpg",
      "/images/car7.4.jpg",
      "/images/car7.5.jpg",
    ],
    id: "C007",
    description:
      "How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.",
    keySpecs: {
      make: "Mercedez Benz",
      model: "Couple",
      color: "Yellow",
      Drivetype: "Front Wheel Drive",
      transmission: "Automatic",
      condition: "New",
      year: "2023",
      Fueltype: "Diesel",
      Enginesize: "4.8L",
      Doors: "2-door",
      Cylinders: "6",
      Color: "Blue",
      VIN: "1C4TJPBA1CD851233",
    },
    techSpecs: [
      "Backup camera",
      "Brake assist",
      "Parking assist systems",
      "Pedestrian detection",
      "Sideview camera",
      "Blind spot alert",
      "Bluetooth",
      "Heated seats",
      "Leather seats",
      "Navigation System",
      "Side airbags",
    ],
    featured: false,
  },
  {
    title: "Mercedez Benz AMG GT 2 door coupe yellow",
    price: 22000,
    year: "2023",
    model: "couple",
    color: "yellow",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "500km",
    images: ["/images/car8.jpg"],
    id: "C008",
    description:
      "How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.",
    keySpecs: {
      make: "Mercedez Benz",
      model: "Couple",
      color: "Yellow",
      Drivetype: "Front Wheel Drive",
      transmission: "Automatic",
      condition: "New",
      year: "2023",
      Fueltype: "Diesel",
      Enginesize: "4.8L",
      Doors: "2-door",
      Cylinders: "6",
      Color: "Blue",
      VIN: "1C4TJPBA1CD851233",
    },
    techSpecs: [
      "Backup camera",
      "Brake assist",
      "Parking assist systems",
      "Pedestrian detection",
      "Sideview camera",
      "Blind spot alert",
      "Bluetooth",
      "Heated seats",
      "Leather seats",
      "Navigation System",
      "Side airbags",
    ],
    featured: true,
  },
  {
    title: "Audi A7 Sportback 5-door hatchback silver",
    price: 18000,
    year: "2023",
    model: "couple",
    color: "Green",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "500km",
    images: ["/images/car9.jpg"],
    id: "C009",
    description:
      "How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.",
    keySpecs: {
      make: "Mercedez Benz",
      model: "Couple",
      color: "Yellow",
      Drivetype: "Front Wheel Drive",
      transmission: "Automatic",
      condition: "New",
      year: "2023",
      Fueltype: "Diesel",
      Enginesize: "4.8L",
      Doors: "2-door",
      Cylinders: "6",
      Color: "Blue",
      VIN: "1C4TJPBA1CD851233",
    },

    techSpecs: [
      "Backup camera",
      "Brake assist",
      "Parking assist systems",
      "Pedestrian detection",
      "Sideview camera",
      "Blind spot alert",
      "Bluetooth",
      "Heated seats",
      "Leather seats",
      "Navigation System",
      "Side airbags",
    ],
    featured: false,
  },
];

export const conditionTabs = ["All, New", "Used"];

export const searchCriterias = [
  "Most Relevant",
  "Date Listed: Newest",
  "Price: Lowest",
  "Price: Highest",
  "Mileage: Lowest",
  "Mileage: Highest",
];
