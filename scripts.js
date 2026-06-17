const departments = [
  {
    name: "Deli",
    composite: "94%",
    positive: "Freshness compliance up 8%",
    mission: "Complete hot holding temperature walk and coach new associate through Fresh Start task.",
    order: "Review grab-and-go, chicken, cheese, and party tray demand before finalizing order.",
    temperature: "Complete hot holding, cold case, and walk-in temperature checks.",
    production: "Adjust production based on lunch rush, rotisserie demand, and shrink risk.",
    replenishment: "Refill service case, grab-and-go, and high-volume meal solution areas.",
    freshStart: "Guide associate through deli food safety and temperature Fresh Start.",
    training: "Train new associate on hot holding logs and safe food handling.",
    alerts: "Alert: Hot case check due in 15 minutes.",
    departmentLeader: "Department Leader View: Composite 94%. Focus: food safety, production planning, and associate coaching.",
    storeLeader: "Store Leader View: Deli is positive. Monitor labor alignment, freshness, and shrink performance."
  },
  {
    name: "Meat",
    composite: "92%",
    positive: "Shrink improved by 6%",
    mission: "Validate meat case fullness and complete markdown review before peak traffic.",
    order: "Check ad items, service case demand, and weekend protein movement.",
    temperature: "Complete meat case, seafood case, and cutting room temperature checks.",
    production: "Balance grind log, fresh cuts, and service case needs.",
    replenishment: "Refill chicken, ground beef, steaks, and seafood displays.",
    freshStart: "Guide associate through meat safety and case rotation Fresh Start.",
    training: "Train associate on proper rotation, markdowns, and grind log basics.",
    alerts: "Alert: Seafood case needs replenishment.",
    departmentLeader: "Department Leader View: Composite 92%. Focus: shrink, rotation, case condition, and production accuracy.",
    storeLeader: "Store Leader View: Meat is trending positive. Watch shrink, service levels, and ad execution."
  },
  {
    name: "Produce",
    composite: "96%",
    positive: "Replenishment accuracy up 9%",
    mission: "Replenish wet rack and inspect high-volume fruit displays.",
    order: "Review banana, berry, salad, and wet rack demand before ordering.",
    temperature: "Check cut fruit, cooler, and wet rack temperature zones.",
    production: "Adjust cut fruit production based on sales and freshness windows.",
    replenishment: "Refill wet rack, bananas, berries, salads, and promo displays.",
    freshStart: "Guide associate through produce freshness and rotation Fresh Start.",
    training: "Train associate on wet rack standards and culling process.",
    alerts: "Alert: Berry display needs attention.",
    departmentLeader: "Department Leader View: Composite 96%. Focus: culling, freshness, wet rack, and display execution.",
    storeLeader: "Store Leader View: Produce is strong. Maintain freshness, high-impact displays, and labor timing."
  },
  {
    name: "Bakery",
    composite: "93%",
    positive: "Production planning up 7%",
    mission: "Review production plan and complete bread wall replenishment.",
    order: "Review cake supplies, bread demand, and seasonal bakery items.",
    temperature: "Check freezer, cooler, and thawing process temperatures.",
    production: "Update production for bread, cookies, donuts, and cakes.",
    replenishment: "Refill bread wall, tables, cake case, and seasonal displays.",
    freshStart: "Guide associate through bakery freshness and packaging Fresh Start.",
    training: "Train associate on production timing and quality checks.",
    alerts: "Alert: Bread wall below standard.",
    departmentLeader: "Department Leader View: Composite 93%. Focus: production timing, freshness, and display condition.",
    storeLeader: "Store Leader View: Bakery is positive. Watch production accuracy and late-day in-stock levels."
  },
  {
    name: "Grocery",
    composite: "91%",
    positive: "In-stock improved by 5%",
    mission: "Complete top out-of-stock scan and prioritize high-velocity aisles.",
    order: "Review top movers, ad items, and backroom inventory before ordering.",
    temperature: "Check dairy, frozen, and refrigerated endcap temperatures.",
    production: "No production required. Focus shifted to stocking execution.",
    replenishment: "Replenish top sellers, ad displays, dairy, and frozen.",
    freshStart: "Guide associate through grocery conditioning and scan Fresh Start.",
    training: "Train associate on top stock, backroom pull, and conditioning.",
    alerts: "Alert: Aisle 8 has multiple out-of-stock risks.",
    departmentLeader: "Department Leader View: Composite 91%. Focus: in-stock, conditioning, backroom pull, and ad execution.",
    storeLeader: "Store Leader View: Grocery is improving. Monitor in-stock, labor, and display execution."
  },
  {
    name: "Front End",
    composite: "90%",
    positive: "Wait time reduced by 4%",
    mission: "Open one additional lane and support self-checkout traffic flow.",
    order: "Supply check: bags, receipt paper, register tape, and front-end essentials.",
    temperature: "No temperature task required. Redirecting to customer wait-time priority.",
    production: "No production required. Focus is customer flow.",
    replenishment: "Replenish bags, impulse items, and checkout supplies.",
    freshStart: "Guide associate through customer service Fresh Start.",
    training: "Train associate on service recovery and checkout engagement.",
    alerts: "Alert: Checkout wait time approaching threshold.",
    departmentLeader: "Department Leader View: Composite 90%. Focus: wait time, service, lane coverage, and associate support.",
    storeLeader: "Store Leader View: Front End stable. Watch customer flow and staffing alignment."
  },
  {
    name: "Pickup",
    composite: "97%",
    positive: "Order accuracy up 10%",
    mission: "Prioritize next pickup wave and verify substitution quality.",
    order: "Review staging supplies, bags, totes, and high-demand pickup items.",
    temperature: "Check refrigerated and frozen staging zones.",
    production: "No production required. Focus is pick accuracy and staging.",
    replenishment: "Coordinate with grocery, produce, meat, and deli for unavailable items.",
    freshStart: "Guide associate through pickup accuracy Fresh Start.",
    training: "Train associate on substitutions, staging, and customer handoff.",
    alerts: "Alert: Next pickup wave begins in 20 minutes.",
    departmentLeader: "Department Leader View: Composite 97%. Focus: accuracy, staging, substitutions, and on-time delivery.",
    storeLeader: "Store Leader View: Pickup is excellent. Maintain accuracy, speed, and cross-department communication."
  }
];

let currentDepartment = 0;

const departmentName = document.getElementById("departmentName");
const compositeScore = document.getElementById("compositeScore");
const positiveResult = document.getElementById("positiveResult");
const topMission = document.getElementById("topMission");
const leaderOptions = document.getElementById("leaderOptions");

document.getElementById("departmentToggle").addEventListener("click", () => {
  currentDepartment = (currentDepartment + 1) % departments.length;
  updateMainScreen();
});

function updateMainScreen() {
  const dept = departments[currentDepartment];

  leaderOptions.classList.add("hidden");

  departmentName.textContent = dept.name;
  compositeScore.textContent = `Composite: ${dept.composite}`;
  positiveResult.textContent = dept.positive;
  topMission.textContent = dept.mission;
}

function showAction(action) {
  const dept = departments[currentDepartment];

  leaderOptions.classList.add("hidden");

  departmentName.textContent = dept.name;
  compositeScore.textContent = actionLabel(action);
  positiveResult.textContent = dept.positive;
  topMission.textContent = dept[action];
}

function showLeaderOptions() {
  leaderOptions.classList.remove("hidden");

  departmentName.textContent = "Leader";
  compositeScore.textContent = "Choose View";
  positiveResult.textContent = "Department Leader or Store Leader";
  topMission.textContent = "Select a leadership view to receive composite metrics, guidance, and next best actions.";
}

function showLeaderView(type) {
  const dept = departments[currentDepartment];

  leaderOptions.classList.add("hidden");

  if (type === "department") {
    departmentName.textContent = dept.name;
    compositeScore.textContent = "Department Leader";
    positiveResult.textContent = `Composite: ${dept.composite}`;
    topMission.textContent = dept.departmentLeader;
  }

  if (type === "store") {
    departmentName.textContent = "Store Leader";
    compositeScore.textContent = `${dept.name} Overview`;
    positiveResult.textContent = `Composite: ${dept.composite}`;
    topMission.textContent = dept.storeLeader;
  }
}

function actionLabel(action) {
  const labels = {
    order: "Order Guidance",
    temperature: "Temperature Guidance",
    production: "Production Guidance",
    replenishment: "Replenishment Guidance",
    freshStart: "Fresh Start Guidance",
    training: "Training Guidance",
    alerts: "Active Alerts",
    mission: "Guided Mission"
  };

  return labels[action] || "Guidance";
}

updateMainScreen();