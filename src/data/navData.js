// src/components/Nav.data.js

// ------------------- New + Bestsellers -------------------
import new01 from "../img/nav/new/new01.jpg";
import new01h from "../img/nav/new/new01_h.jpg";
import new02 from "../img/nav/new/new02.jpg";
import new02h from "../img/nav/new/new02_h.jpg";
import new03 from "../img/nav/new/new03.jpg";
import new03h from "../img/nav/new/new03_h.jpg";
import new04 from "../img/nav/new/new04.jpg";
import new04h from "../img/nav/new/new04_h.jpg";

// ------------------- Makeup -------------------
import makeup01 from "../img/nav/makeup/makeup01.jpg";
import makeup02 from "../img/nav/makeup/makeup02.jpg";
import makeup02h from "../img/nav/makeup/makeup02_h.jpg";
import makeup03 from "../img/nav/makeup/makeup03.jpg";
import makeup03h from "../img/nav/makeup/makeup03_h.jpg";
import makeup04 from "../img/nav/makeup/makeup04.jpg";
import makeup04h from "../img/nav/makeup/makeup04_h.jpg";
import makeupBadge from "../img/nav/makeup/m.png";

// ------------------- Skincare -------------------
import skin01 from "../img/nav/skin/skin01.jpg";
import skin02 from "../img/nav/skin/skin02.jpg";
import skin02h from "../img/nav/skin/skin02_h.jpg";
import skin03 from "../img/nav/skin/skin03.jpg";
import skin03h from "../img/nav/skin/skin03_h.jpg";
import skin04 from "../img/nav/skin/skin04.jpg";
import skin04h from "../img/nav/skin/skin04_h.jpg";

// ------------------- Hair -------------------
import hair01 from "../img/nav/hair/hair01.jpg";
import hair02 from "../img/nav/hair/hair02.jpg";
import hair02h from "../img/nav/hair/hair02_h.jpg";
import hair03 from "../img/nav/hair/hair03.jpg";
import hair03h from "../img/nav/hair/hair03_h.jpg";
import hair04 from "../img/nav/hair/hair04.jpg";
import hair04h from "../img/nav/hair/hair04_h.jpg";
import hairBadge from "../img/nav/hair/r.png";

// ------------------- Fragrance -------------------
import frag01 from "../img/nav/frag/frag01.jpg";
import frag02 from "../img/nav/frag/frag02.jpg";
import frag02h from "../img/nav/frag/frag02_h.jpg";
import frag03 from "../img/nav/frag/frag03.jpg";
import frag03h from "../img/nav/frag/frag03_h.jpg";
import frag04 from "../img/nav/frag/frag04.jpg";
import frag04h from "../img/nav/frag/frag04_h.jpg";
import fragBadge from "../img/nav/frag/m.png";

// ------------------- Rihanna -------------------
import rihanna01 from "../img/nav/rihanna/rihanna01.jpg";
import rihanna02 from "../img/nav/rihanna/rihanna02.jpg";
import rihanna02h from "../img/nav/rihanna/rihanna02_h.jpg";
import rihanna03 from "../img/nav/rihanna/rihanna03.jpg";
import rihanna03h from "../img/nav/rihanna/rihanna03_h.jpg";
import rihannaBadge from "../img/nav/rihanna/m.png";

// ------------------- Virtual Services -------------------
import virtual01 from "../img/nav/virtual/virtual01.png";
import virtual02 from "../img/nav/virtual/virtual02.png";

// ------------------- Replen + Save -------------------
import replen01 from "../img/nav/replen/replen01.jpg";
import replen02 from "../img/nav/replen/replen02.jpg";
import replen02h from "../img/nav/replen/replen02_h.jpg";
import replen03 from "../img/nav/replen/replen03.jpg";
import replen03h from "../img/nav/replen/replen03_h.jpg";
import replenBadge from "../img/nav/replen/r.png";

// ------------------- Discover -------------------
import discover01 from "../img/nav/discover/discover01.jpg";
import discover02 from "../img/nav/discover/discover02.jpg";

// ------------------- Sale -------------------
import saleLeft01 from "../img/nav/sale/sale_left01.jpg";
import saleLeft02 from "../img/nav/sale/sale_left02.jpg";
import sale01 from "../img/nav/sale/sale01.jpg";
import sale01h from "../img/nav/sale/sale01_h.jpg";
import sale02 from "../img/nav/sale/sale02.jpg";
import sale02h from "../img/nav/sale/sale02_h.jpg";
import sale03 from "../img/nav/sale/sale03.jpg";
import sale03h from "../img/nav/sale/sale03_h.jpg";
import sale04 from "../img/nav/sale/sale04.jpg";
import sale04h from "../img/nav/sale/sale04_h.jpg";
import saleBadge from "../img/nav/sale/r.png";

// ------------------- navData -------------------
const navData = [
  {
    id: 1,
    title: "New + Bestsellers",
    leftMenu: [
      "Bestsellers",
      "New Arrivals",
      "The Summer Hotlist",
      "Limited Edition",
      "Fenty Beauty Exclusives",
      "Fenty Skin Start'rs",
      "Fenty Hair Bundles",
      "Gloss Bomb Lip Gloss",
      "Butta Drop",
      "Fenty Exclusive Sets + <br/>Bundles",
      "Fenty Minis",
      "Shop All",
    ],
    products: [
      { name: "Dew N Plump Hydrating Nectar Glow Serum", price: "₩71,400", img: new01, hoverImg: new01h, cta: "ADD TO BAG", ctaType: "black" },
      { name: "Diamond Bomb All-Over Diamond Veil", shades: "5 shades", price: "₩80,800", img: new02, hoverImg: new02h, cta: "QUICK SHOP", ctaType: "white" },
      { name: "Grip Trip Mattifying + Blurring Primer", price: "₩69,600", img: new03, hoverImg: new03h, cta: "ADD TO BAG", ctaType: "black" },
      { name: "Grip Trip Hydrating + Plumping Primer", price: "₩69,600", img: new04, hoverImg: new04h, cta: "ADD TO BAG", ctaType: "black" }
    ]
  },
  {
    id: 2,
    title: "Makeup",
    leftMenu: [
      "Makeup","Explore Fenty Beauty","Lip Gloss","Lipstick + Lip Stain","Lip Liner","Foundation","Concealer + Corrector",
      "Blush + Highlighter","Contour + Bronzer","Blush + Highlighter","Eye Makeup","Prime + Set","Makeup Minis",
      "Brushes + Tools","Exclusive Beauty Sets + <br/>Bundles","Body Makeup","Shop All Makeup"
    ],
    products: [
      { type: "banner", img: makeup01 },
      { name: "Soft'lit Naturally Luminous Longwear Foundation", shades: "50 shades", price: "₩79,000", img: makeup02, hoverImg: makeup02h, cta: "QUICK SHOP", ctaType: "white", badgeImg: makeupBadge },
      { name: "Bright Fix Instant Brightening + Blurring Powder", shades: "6 shades", price: "₩71,400", img: makeup03, hoverImg: makeup03h, cta: "QUICK SHOP", ctaType: "white" },
      { name: "Gloss Bomb Stix High-Shine Gloss Stick", shades: "18 shades", price: "₩48,900", img: makeup04, hoverImg: makeup04h, cta: "QUICK SHOP", ctaType: "white" }
    ]
  },
  {
    id: 3,
    title: "Skincare",
    leftMenu: [
      "Skincare","Explore Fenty Skin","Fenty Skin Start'r Bundles","Face Moisturizer + SPF","Serum","Body","Lip Care",
      "Masks + Treatments","Cleanser","Toner","Eye Care","Exclusive Skincare Sets + Bundles","Makeup Minis",
      "Brushes + Tools","Exclusive Beauty Sets + <br/>Bundles","Refillable","FSA + HSA Eligible <br/>Products",
      "Skincare Minis","Shop All Skincare"
    ],
    products: [
      { type: "banner", img: skin01 },
      { name: "Dew N Plump Hydrating Nectar Glow Serum", price: "₩71,400", img: skin02, hoverImg: skin02h, cta: "ADD TO BAG", ctaType: "black" },
      { name: "Fenty Skin Start’rs Full-Size Bundle", price: "₩174,800", extraText: "₩212,500 VALUE", img: skin03, hoverImg: skin03h, cta: "SHOP NOW", ctaType: "white" },
      { name: "Butta Drop Whipped Oil Body Cream with Tropical Oils + Shea Butter", shades: "5 shades", price: "₩84,600", img: skin04, hoverImg: skin04h, cta: "NOTIFY ME", ctaType: "white" }
    ]
  },
  {
    id: 4,
    title: "Hair",
    leftMenu: ["Hair","Explore Fenty Hair","Shop All Hair","Fenty Hair Bundles","Hair Minis","Shampoo","Condition","Treat","Cleanser","Toner","Style","Tools","Behind the Brand","Hair Lookbook","Meet the Stylists","Virtual Services","The Science of <br/>Replenicore-5"],
    products: [
      { type: "banner", img: hair01 },
      { name: "The Water Boi Reparative Leave-In Detangling Conditioner Spray", size: "2 sizes", price: "₩60,200", img: hair02, hoverImg: hair02h, cta: "QUICK SHOP", ctaType: "white", badgeImg: hairBadge },
      { name: "The Homecurl Curl-Defining Cream", size: "2 sizes", price: "₩58,300", img: hair03, hoverImg: hair03h, cta: "QUICK SHOP", ctaType: "white", badgeImg: hairBadge },
      { name: "Moisture Repair the Maintenance Crew Full-Size Bundle", size: "2 sizes", price: "₩249,900", salePrice: "₩227,400", img: hair04, hoverImg: hair04h, cta: "ADD TO BAG", ctaType: "black", badgeImg: hairBadge }
    ]
  },
  {
    id: 5,
    title: "Fragrance",
    leftMenu: ["Fragrance","Explore Fenty Eau de <br/>Parfum","NEW! Fenty Parfum Hair + <br/>Body Mist","Shop all Fragrance","Fenty Parfum Body Creme","Exclusive Fragrance Sets","Fragrance Minis"],
    products: [
      { type: "banner", img: frag01 },
      { name: "Fenty Eau de Parfum", size: "3 sizes", price: "₩263,100", img: frag02, hoverImg: frag02h, cta: "QUICK SHOP", ctaType: "white" },
      { name: "Fenty Parfum Hair + Body Mist", price: "₩99,600", img: frag03, hoverImg: frag03h, cta: "ADD TO BAG", ctaType: "black" },
      { name: "Fenty Parfum Body Crème", price: "₩249,900", img: frag04, hoverImg: frag04h, cta: "ADD TO BAG", ctaType: "black", badgeImg: fragBadge }
    ]
  },
  {
    id: 6,
    title: "Rihanna",
    leftMenu: ["Rihanna's Looks","Rihanna's Videos","Shop Rihanna's Faves"],
    banner: { img: rihanna01, title: "RIHANNA’S MAJOR MAKEUP MOMENTS", desc: "No matter how booked + busy Rihanna is, you can bet she’s pullin’ up in a breathtaking look. Catch all the details on her latest looks here.", btnText: "LEARN MORE", btnLink: "#" },
    products: [
      { name: "Soft’lit Naturally Luminous Longwear Foundation", shades: "50 shades", price: "₩79,000", img: rihanna02, hoverImg: rihanna02h, cta: "QUICK SHOP", ctaType: "white", badgeImg: rihannaBadge },
      { name: "Fenty Cheeks Suede Powder Blush", shades: "14 shades", price: "₩52,700", img: rihanna03, hoverImg: rihanna03h, cta: "QUICK SHOP", ctaType: "white" }
    ]
  },
  {
    id: 7,
    title: "Virtual Services",
    leftMenu: ["Virtual Shade Finder","Find Your Foundation","Virtual Try On","Support Squad","Virtual Consultation","See All Virtual Services"],
    banners: [
      { img: virtual01, subtitle: "Virtual Services", title: "FIND YOUR SHADE", desc: "Find your perfect shade with a quick selfie, we’ll do the rest.", btnText: "FIND YOUR SHADE", btnLink: "#" },
      { img: virtual02, subtitle: "Virtual Services", title: "VIRTUAL CONSULTATION", desc: "Make an appointment and get your shade matched, live, personalized beauty essentials.", btnText: "BOOK APPOINTMENT", btnLink: "#" }
    ],
    products: []
  },
  {
    id: 8,
    title: "Replen + Save",
    leftMenu: ["Replen + Save"],
    banner: { img: replen01, title: "GET YOUR HAIR REPAIR ON REPEAT", desc: "Don’t get caught slippin’ on wash day. Save 10% on auto-replenish orders + stay stunnin’ your strong hair. Change or cancel anytime. U.S. only.", btnText: "EXPLORE NOW", btnLink: "#", btnType: "black" },
    products: [
      { name: "The Rich One Moisture Repair Shampoo", sizes: "2 sizes", price: "₩45,600", img: replen02, hoverImg: replen02h, cta: "QUICK SHOP", ctaType: "white", badgeImg: replenBadge },
      { name: "Hydra Vizor Broad Spectrum Mineral SPF 30 Sunscreen Moisturizer Refill", price: "₩75,200", img: replen03, hoverImg: replen03h, cta: "ADD TO BAG", ctaType: "black" }
    ]
  },
  {
    id: 9,
    title: "Discover",
    leftMenu: ["Award Winners","Coming Soon! Salted Caramel Collection","The Smurfette Collection","Rihanna's Looks","The Gloss Shop","The Fenty Blog","Lip Library","As Seen On TikTok","Fenty Artistry Tips","Gifts","Accessories","Fenty Minis","Clara Lionel Foundation","Videos","Discover All"],
    banners: [
      { img: discover01, title: "PREP, COVER + SET", desc: "Look like you just did your makeup, all day long.", btnText: "SHOP NOW", btnLink: "#", btnType: "white" },
      { img: discover02, title: "RIHANNA’S GO-TO ROUTINE FOR A REASON", desc: "You’re just four steps away from creating your best look yet.", btnText: "THE FENTY FACE", btnLink: "#", btnType: "white" }
    ],
    products: []
  },
  {
    id: 10,
    title: "Sale",
    leftMenu: ["Sale","Offer Details"],
    leftSwiper: [
      { img: saleLeft01, title: "SNATCH YOUR SMURF’TASTIC GIFT", desc: "USE CODE: SMURFGIFT Get a free 'Friend of Mine' CD with a $65+ Smurfs Crew collection purchase.", btnText: "SHOP NOW", btnLink: "#" },
      { img: saleLeft02, title: "LIMITED TIME OFFER", desc: "Get exclusive discounts on bundles and sets. Don’t miss out!", btnText: "SHOP NOW", btnLink: "#" }
    ],
    products: [
      { name: "The Comeback Kid Instant Damage Repair Treatment Bond Builder", sizes: "2 sizes", price: "₩71,400", img: sale01, hoverImg: sale01h, badgeImg: saleBadge },
      { name: "Fenty Skin Start’rs Full-Size Bundle", price: "₩174,800", extraText: "₩212,500 VALUE", img: sale02, hoverImg: sale02h },
      { name: "Deep Moisture Repair The Maintenance Crew Full-Size Bundle", price: "₩249,900", salePrice: "₩227,400", img: sale03, hoverImg: sale03h, badgeImg: saleBadge },
      { name: "Build Your Own Fenty Face 4-Piece Bundle", desc: "Choose your base, sculpt your face, add highlight + set your look to save.", extraText: "FROM ₩199,000", img: sale04, hoverImg: sale04h }
    ]
  }
];

export default navData;
