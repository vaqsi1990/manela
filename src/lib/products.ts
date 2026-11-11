import type { CatalogId } from "@/lib/catalog";

export type Product = {
  id: string;
  category: CatalogId;
  price: number;
  name: { ka: string; en: string };
  detail: { ka: string; en: string };
};

export const products: Product[] = [
  {
    id: "lock",
    category: "security",
    price: 890,
    name: { ka: "MANELA Lock", en: "MANELA Lock" },
    detail: {
      ka: "კარის ჭკვიანი საკეტი კლავიატურით და აპლიკაციიდან გაღებით.",
      en: "Front-door smart lock with a keypad and app unlock.",
    },
  },
  {
    id: "keypad",
    category: "security",
    price: 240,
    name: { ka: "გარე კლავიატურა", en: "Outdoor keypad" },
    detail: {
      ka: "კოდით შესვლა კარის გარედან, ღამის განათებით.",
      en: "Code entry from outside the door, with a night light.",
    },
  },
  {
    id: "doorbell",
    category: "security",
    price: 420,
    name: { ka: "ვიდეო ზარი", en: "Video doorbell" },
    detail: {
      ka: "კამერა, ზარი და საუბარი ტელეფონიდან.",
      en: "Camera, chime, and two-way talk from the phone.",
    },
  },
  {
    id: "reader",
    category: "security",
    price: 180,
    name: { ka: "ბარათის წამკითხველი", en: "Card reader" },
    detail: {
      ka: "ოფისის კარი იღება ბარათით ან ტელეფონით.",
      en: "Office door opens with a card or a phone.",
    },
  },
  {
    id: "door-sensor",
    category: "sensors",
    price: 45,
    name: { ka: "კარ-ფანჯრის სენსორი", en: "Door and window sensor" },
    detail: {
      ka: "შეტყობინება, როცა კარი ან ფანჯარა იღება.",
      en: "Alerts when a door or window opens.",
    },
  },
  {
    id: "motion",
    category: "sensors",
    price: 65,
    name: { ka: "მოძრაობის სენსორი", en: "Motion sensor" },
    detail: {
      ka: "ამოცნობს მოძრაობას ოთახში და დერეფანში.",
      en: "Detects movement in a room or hallway.",
    },
  },
  {
    id: "leak",
    category: "sensors",
    price: 55,
    name: { ka: "გაჟონვის სენსორი", en: "Leak sensor" },
    detail: {
      ka: "წყალს ამჩნევს იატაკზე, ნიჟარასთან ან ქვაბთან.",
      en: "Notices water on the floor, by a sink, or a boiler.",
    },
  },
  {
    id: "smoke",
    category: "sensors",
    price: 75,
    name: { ka: "კვამლის სენსორი", en: "Smoke sensor" },
    detail: {
      ka: "კვამლზე რეაგირებს და შეტყობინებას აგზავნის.",
      en: "Reacts to smoke and sends an alert.",
    },
  },
  {
    id: "bulb",
    category: "lighting",
    price: 35,
    name: { ka: "ჭკვიანი ნათურა", en: "Smart bulb" },
    detail: {
      ka: "სიკაშკაშე და ფერი იცვლება აპლიკაციიდან.",
      en: "Brightness and color change from the app.",
    },
  },
  {
    id: "strip",
    category: "lighting",
    price: 80,
    name: { ka: "LED ზოლი", en: "LED strip" },
    detail: {
      ka: "2 მეტრი ზოლი თაროს, ჭერის ან ავეჯისთვის.",
      en: "Two-meter strip for a shelf, ceiling, or cabinet.",
    },
  },
  {
    id: "panel",
    category: "lighting",
    price: 120,
    name: { ka: "ჭერის სანათი", en: "Ceiling light" },
    detail: {
      ka: "ბრტყელი პანელი ოფისისა და ოთახისთვის.",
      en: "Flat panel for an office or a room.",
    },
  },
  {
    id: "flood",
    category: "lighting",
    price: 150,
    name: { ka: "გარე პროჟექტორი", en: "Outdoor floodlight" },
    detail: {
      ka: "ეზოს განათება, რომელიც მოძრაობაზე ინთება.",
      en: "Yard light that turns on when someone moves.",
    },
  },
  {
    id: "hub",
    category: "hubs",
    price: 320,
    name: { ka: "MANELA Hub", en: "MANELA Hub" },
    detail: {
      ka: "ერთი ჰაბი საკეტის, სენსორების და განათებისთვის.",
      en: "One hub for the lock, sensors, and lights.",
    },
  },
  {
    id: "switch",
    category: "hubs",
    price: 70,
    name: { ka: "ჭკვიანი ჩამრთველი", en: "Smart switch" },
    detail: {
      ka: "კედლის ჩამრთველი, რომელიც სანათს მართავს.",
      en: "Wall switch that controls a light.",
    },
  },
  {
    id: "relay",
    category: "hubs",
    price: 60,
    name: { ka: "რელე მოდული", en: "Relay module" },
    detail: {
      ka: "არსებული ხაზის ჩართვა და გამორთვა აპლიკაციიდან.",
      en: "Turns an existing circuit on and off from the app.",
    },
  },
  {
    id: "remote",
    category: "hubs",
    price: 40,
    name: { ka: "სცენების პულტი", en: "Scene remote" },
    detail: {
      ka: "ოთხი ღილაკი სახლის სცენებისთვის.",
      en: "Four buttons for home scenes.",
    },
  },
  {
    id: "router",
    category: "network",
    price: 260,
    name: { ka: "Wi-Fi როუტერი", en: "Wi-Fi router" },
    detail: {
      ka: "სახლის მთავარი როუტერი სტაბილური დაფარვით.",
      en: "Main home router with steady coverage.",
    },
  },
  {
    id: "mesh",
    category: "network",
    price: 180,
    name: { ka: "Mesh წერტილი", en: "Mesh node" },
    detail: {
      ka: "აფართოებს ქსელს იქ, სადაც სიგნალი სუსტდება.",
      en: "Extends the network where the signal drops.",
    },
  },
  {
    id: "poe",
    category: "network",
    price: 340,
    name: { ka: "PoE სვიჩი", en: "PoE switch" },
    detail: {
      ka: "8 პორტი კამერისა და წვდომის წერტილისთვის.",
      en: "Eight ports for cameras and access points.",
    },
  },
  {
    id: "ap",
    category: "network",
    price: 210,
    name: { ka: "წვდომის წერტილი", en: "Access point" },
    detail: {
      ka: "ოფისის Wi-Fi ჭერზე ან კედელზე.",
      en: "Office Wi-Fi for a ceiling or a wall.",
    },
  },
  {
    id: "mini-pc",
    category: "it",
    price: 980,
    name: { ka: "მინი კომპიუტერი", en: "Mini computer" },
    detail: {
      ka: "პატარა კომპიუტერი მაგიდაზე ან კარადაში.",
      en: "Small computer for a desk or a cabinet.",
    },
  },
  {
    id: "monitor",
    category: "it",
    price: 450,
    name: { ka: "მონიტორი 27\"", en: "27\" monitor" },
    detail: {
      ka: "სამუშაო ეკრანი მკაფიო ტექსტით.",
      en: "Work display with clear text.",
    },
  },
  {
    id: "nas",
    category: "it",
    price: 720,
    name: { ka: "NAS საცავი", en: "NAS storage" },
    detail: {
      ka: "ფაილები და კამერის ჩანაწერი ერთ საცავში.",
      en: "Files and camera recordings in one store.",
    },
  },
  {
    id: "dock",
    category: "it",
    price: 190,
    name: { ka: "დოკ-სადგური", en: "Docking station" },
    detail: {
      ka: "ლეპტოპს აერთებს ეკრანთან, ქსელთან და კვებასთან.",
      en: "Connects a laptop to a display, network, and power.",
    },
  },
];

export function productsIn(category: CatalogId) {
  return products.filter((product) => product.category === category);
}
