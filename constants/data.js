// cars.js
import images from "./images"; // Adjust path
import icons from "./icons"; // Assuming you have an icons file
export const cards = [
  {
    id: "1",
    title: "Tesla Model 3",
    make: "Tesla",
    model: "Model 3",
    year: 2020,
    price: "$40,000",
    rating: 4.9,
    fueltype: "Electric",
    vehicletype: "Sedan",
    image: images.TeslaModel,
    horsepower: "283",
    seatcapacity: "5", // Changed from seatCapacity
    range: "263",
    topspeed: "140", // Changed from "top speed"
    mph: "5.3", // Changed from "0-60 mph"
    description:
      "The 2020 Tesla Model 3 is an electric sedan with impressive range, cutting-edge tech, and exhilarating performance.",
  },
];

export const featuredCards = [
  { ...cards.find((c) => c.title === "Tesla Model 3") },
  { ...cards.find((c) => c.title === "Porsche Taycan") },
  { ...cards.find((c) => c.title === "Ford F-150") },
  { ...cards.find((c) => c.title === "BMW i7") },
  { ...cards.find((c) => c.title === "Toyota RAV4 Hybrid") },
  { ...cards.find((c) => c.title === "Lucid Air") },
  { ...cards.find((c) => c.title === "Rivian R1T") },
  { ...cards.find((c) => c.title === "Tesla Cybertruck") },
  { ...cards.find((c) => c.title === "Ford Mustang") },
  { ...cards.find((c) => c.title === "Chevrolet Silverado") },
];

// Categories based on fueltype and  vehicletype
export const categories = [
  { title: "All", category: "All" },
  { title: "Gasoline", category: "Gasoline" }, // Fuel Type
  { title: "Electric", category: "Electric" }, // Fuel Type
  { title: "Hybrid", category: "Hybrid" }, // Fuel Type
  { title: "Sedans", category: "Sedan" }, // Vehicle Type
  { title: "Trucks", category: "Truck" }, // Vehicle Type
  { title: "SUVs", category: "SUV" }, // Vehicle Type
  { title: "Coupes", category: "Coupe" }, // Vehicle Type
  { title: "Hatchbacks", category: "Hatchback" }, // Vehicle Type
];

// Facilities for efficiency/performance
export const facilities = [
  {
    title: "Fuel Type",
    icon: icons.range, // Clock or speed icon
  },
  {
    title: "Year",
    icon: icons.year, // Clock or speed icon
  },
  {
    title: "Horsepower",
    icon: icons.horsepower, // Add to icons.js (e.g., a horsepower symbol)
  },
  {
    title: "Seat Capacity",
    icon: icons.capacity, // Gas pump or efficiency icon
  },
  {
    title: "Range",
    icon: icons.Range1, // Battery icon for EVs
  },
  {
    title: "Top Speed",
    icon: icons.speed, // Speedometer icon
  },
  {
    title: "MPH",
    icon: icons.acceleration, // Clock or speed icon
  },

  {
    title: "Vehicle Type",
    icon: icons.VehiclesType, // Clock or speed icon
  },
];

// Settings (unchanged but car-themed)
export const settings = [
  {
    title: "Your Profile",
    icon: icons.profile,
  },
  {
    title: "My BookMark",
    icon: icons.bookmarkPage,
  },
  {
    title: "Dark Mode",
    icon: icons.checkBox,
  },
  {
    title: "Google Map ",
    icon: icons.Google,
  },
  {
    title: "Payments",
    icon: icons.Payments,
  },
  {
    title: "Notifications",
    icon: icons.bell,
  },
  {
    title: "Security",
    icon: icons.Security,
  },
];
