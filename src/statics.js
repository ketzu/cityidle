import Vue from 'vue'
export const storagename = 'cidle-v1';

const bbcost = 10;
const costgrowth = 13;

export const bcost = {
  Farm: bbcost,
  Inn: Math.pow(costgrowth,1)*bbcost,
  Store: Math.pow(costgrowth,2)*bbcost,
  Bank: Math.pow(costgrowth,3)*bbcost,
  Datacenter: Math.pow(costgrowth,4)*bbcost,
  Factory: Math.pow(costgrowth,5)*bbcost,
  Energy: Math.pow(costgrowth,6)*bbcost,
  Casino: Math.pow(costgrowth,7)*bbcost
};

const bbgain = 0.1;
const gaingrowth = 8;

export const bgain = {
  Farm: bbgain,
  Inn: Math.pow(gaingrowth,1)*bbgain,
  Store: Math.pow(gaingrowth,2)*bbgain,
  Bank: Math.pow(gaingrowth,3)*bbgain,
  Datacenter: Math.pow(gaingrowth,4)*bbgain,
  Factory: Math.pow(gaingrowth,5)*bbgain,
  Energy: Math.pow(gaingrowth,6)*bbgain,
  Casino: Math.pow(gaingrowth,7)*bbgain
};

export const basebuildings = [
  {name: "Farm", title: "Farm", type: "Generator", icon: "fa-apple-alt", cost: {base: bcost['Farm'], rate: 1.1}, gain: bgain['Farm'], mult: 1.00, iconcolor: "red darken-2"},
  {name: "Inn" , title: "Inn", type: "Generator", icon: "fa-beer", cost: {base: bcost['Inn'], rate: 1.1}, gain: bgain['Inn'], mult: 1.00, iconcolor: "amber"},
  {name: "Store", title: "Store", type: "Generator", icon: "fa-store-alt", cost: {base: bcost['Store'], rate: 1.1}, gain: bgain['Store'], mult: 1.00, iconcolor: "brown darken-3"},
  {name: "Bank", title: "Bank", type: "Generator", icon: "fa-university", cost: {base: bcost['Bank'], rate: 1.1}, gain: bgain['Bank'], mult: 1.00, iconcolor: "grey darken-4"},
  {name: "Datacenter", title: "Datacenter", type: "Generator", icon: "fa-satellite-dish", cost: {base: bcost['Datacenter'], rate: 1.1}, gain: bgain['Datacenter'], mult: 1.00, iconcolor: "blue darken-4"},
  {name: "Factory", title: "Factory", type: "Generator", icon: "fa-industry", cost: {base: bcost['Factory'], rate: 1.1}, gain: bgain['Factory'], mult: 1.00, iconcolor: "teal darken-4"},
  {name: "Energy", title: "Power Plant", type: "Generator", icon: "fa-burn", cost: {base: bcost['Energy'], rate: 1.1}, gain: bgain['Energy'], mult: 1.00, iconcolor: "deep-orange"},
  {name: "Casino", title: "Gambling Den", type: "Generator", icon: "fa-dice", cost: {base: bcost['Casino'], rate: 1.095}, gain: bgain['Casino'], mult: 1.00, iconcolor: "purple darken-2"}
];

export const upgrades = {
  Farm: {
    25: {gain: 3, uname: "Crop Rotation", upgcost: 50},
    50: {gain: 5, uname: "Fertilizer", upgcost: 50},
    100:{gain: 15, uname: "Artificial Irrigation", title: "Advanced Farm", upgcost: 50},
    130: {gain:10, uname: "Plant Crossing", upgcost: 50},
    170: {gain:12, uname: "Mechanized Agriculture", title: "Automated Farm", upgcost: 50},
    200: {gain:18, uname: "Bio Farming", title: "Bio Farm", upgcost: 50}
  },
  Inn:  {
    30: {gain: 3, uname: "Happy Hour", upgcost: 50},
    60: {gain: 3, title: "Hotel", upgcost: 50},
    90: {gain: 12, uname: "Spa", upgcost: 50},
    120:{gain: 15, uname: "Minibar", upgcost: 50},
    150:{gain: 12, uname: "Rebranding", title: "Bar", upgcost: 50}
  },
  Store: {
    15: {gain: 4, uname: "Delivery Service", upgcost: 50},
    40: {gain: 4, title: "Market", upgcost: 50},
    80: {gain: 5, title: "Farmers Market", upgcost: 50},
    140: {gain:11, title: "Mall", uname: "Expansion", upgcost: 50}
  },
  Bank: {
    35: {gain: 5, uname: "Online banking", upgcost: 50},
    70: {gain: 8, title: "Loan Shark", upgcost: 50},
    105: {gain: 4, title: "Investment Bank", upgcost: 50},
    140: {gain: 9, uname: "Highspeed Trading", upgcost: 50},
    180: {gain: 13, uname: "Money Laundering", upgcost: 50}
  },
  Datacenter: {
    40: {gain: 4, title: "Bitcoin Mining", upgcost: 50},
    80: {gain: 7, title: "Social Networks", upgcost: 50},
    120: {gain:5, title: "Ad Tracking", upgcost: 50},
    160: {gain:9, title: "Smart Grid", upgcost: 50}
  },
  Factory: {
    10: {gain: 3, uname: "Outsourcing", upgcost: 50},
    40: {gain: 4, uname: "Automation", title: "Automatic Factory", upgcost: 50},
    80: {gain: 8, uname: "Self Replicating Goods", upgcost: 50}
  },
  Energy: {
    50: {gain: 3, uname: "Nuclear Reactor", upgcost: 50},
    90: {gain: 8, uname: "Renewable Energy", upgcost: 50}
  },
  Casino: {
    75: {gain: 2, title: "Casino", uname: "Gamling License", upgcost: 50},
    150: {gain: 4, title: "Las Vegas", uname: "Gambling Addiction", upgcost: 50}
  },
};

export const baseinfrastructure = [
  {name: "Roads", title: "Roads", icon: "fa-road", reqlevel: 1, basemult: 1.015, affected: ['Farm', 'Store', 'Factory'], cost: {base: Math.pow(10,5), rate: 1.1}, iconcolor: "teal darken-4"},
  {name: "Electricity" , title: "Electricity Grid", icon: "fa-plug", reqlevel: 1, basemult: 1.025, affected: ['Energy', 'Datacenter', 'Bank'], cost: {base: Math.pow(10,8), rate: 1.1}, iconcolor: "deep-orange"},
  {name: "Transport", title: "Public Transport", icon: "fa-bus-alt", reqlevel: 1, basemult: 1.04, affected: ['Casino', 'Inn'], cost: {base: Math.pow(10,11), rate: 1.1}, iconcolor: "red darken-4"},
  {name: "Lighting", title: "Lighting", icon: "fa-lightbulb", reqlevel: 2, basemult: 1.04, affected: ['Farm', 'Inn', 'Store'], cost: {base: Math.pow(10,18), rate: 1.1}, iconcolor: "amber"},
  {name: "University", title: "University", icon: "fa-graduation-cap ", reqlevel: 2, basemult: 1.02, affected: ['Factory', 'Datacenter', 'Energy'], cost: {base: Math.pow(10,23), rate: 1.1}, iconcolor: "brown darken-3"},
  {name: "Airport", title: "Airport", icon: "fa-plane-departure ", reqlevel: 3, basemult: 1.02, affected: [], cost: {base: Math.pow(10,30), rate: 1.1}, iconcolor: "purple darken-2"},
  {name: "Internet", title: "Internet", icon: "fa-wifi", reqlevel: 3, basemult: 1.02, affected: [], cost: {base: Math.pow(10,40), rate: 1.1}, iconcolor: "grey darken-4"}
];

export const research = [
  {citylevel: 2, title: "Material Science", cost: 1000, options: [
      {name: "Better Roads", icon: "cat ", iconcolor: "red darken-3", modification: (state,root) => { root.store_infrastructure[0].basemult=1.025 }, desc: "Increase the multiplier of roads to 2.5% (from 1.5%)."},
      {name: "Roads to more Buildings", icon: "cat ", iconcolor: "blue darken-3", modification: (state,root) => { root.store_infrastructure[0].affected = ['Farm', 'Store', 'Factory', 'Inn', 'Casino', 'Bank'] }, desc: "Make roads affect all buildings, besides power plants and datacenters."},
      {name: "Cheaper Roads", icon: "cat ", iconcolor: "green darken-3", modification: (state,root) => { root.store_infrastructure[0].cost.rate=1.09 }, desc: "Reduce cost increase of roads from 10% to 9%."}
    ]},
  {citylevel: 2, title: "Electrical Engineering", cost: 50000, options: [
      {name: "Improved Grid", icon: "cat ", iconcolor: "red darken-3", modification: (state,root) => { root.store_infrastructure[1].basemult=1.035 }, desc: "Increase the multiplier of electricity to 3.5% (from 2.5%)."},
      {name: "Overclock Buildings", icon: "cat ", iconcolor: "blue darken-3", modification: (state,root) => { Vue.set(root,'store_buildings',root.store_buildings.map(building => { return ({ ...building, mult:1.001});})); }, desc: "Improve production of all buildings."},
      {name: "Outsource Grid Maintenance", icon: "cat ", iconcolor: "green darken-3", modification: (state,root) => { root.store_infrastructure[1].cost.rate=1.09 }, desc: "Reduce cost increase of electricity from 10% to 9%."}
    ]},
  {citylevel: 2, title: "Psychology", cost: 200000, options: [
      {name: "Motivational Speeches", icon: "cat ", iconcolor: "red darken-3", modification: (state,root) => { root.store_infrastructure[2].basemult=1.045 }, desc: "Increase the multiplier of transport to 4.5% (from 4%)."},
      {name: "Peace of Mind", icon: "cat ", iconcolor: "blue darken-3", modification: (state,root) => { Vue.set(root,'store_buildings',root.store_buildings.map(building => { return {name: building.name, title: "The same", icon: "fa-cat", cost: {base: bcost['Farm'], rate: 1.1}, gain: bgain['Casino'], mult: building.mult, iconcolor: building.iconcolor} })); }, desc: "Everything is the same."},
      {name: "Layoff Coaching", icon: "cat ", iconcolor: "green darken-3", modification: (state,root) => { root.store_infrastructure[2].cost.rate=1.09 }, desc: "Reduce cost increase of transport from 10% to 9%."}
    ]},
  {citylevel: 2, title: "Civil Engineering", cost: 500000, options: [
      {name: "Add Street Lamps", icon: "cat ", iconcolor: "red darken-3", modification: (state,root) => { root.store_infrastructure[3].basemult=1.045 }, desc: "Increase the multiplier of lighting to 4.5% (from 4%)."},
      {name: "Gambling Addiction", icon: "cat ", iconcolor: "blue darken-3", modification: (state,root) => { if(!state.buildingboni.some(boni => boni!==0)) Vue.set(state,'buildingboni', state.buildingboni.map(boni => (Math.min(-Math.log(Math.random())*6,1000)+4))) }, desc: "Improve your buildings by a random factor until you change your job."},
      {name: "Remove Street Lamps", icon: "cat ", iconcolor: "green darken-3", modification: (state,root) => { root.store_infrastructure[3].cost.rate=1.09 }, desc: "Reduce cost increase of lighting from 10% to 9%."}
    ]},
  {citylevel: 2, title: "Educational Science", cost: 1000000, options: [
      {name: "Pay Teachers more", icon: "cat ", iconcolor: "red darken-3", modification: (state,root) => { root.store_infrastructure[4].basemult=1.04 }, desc: "Increase the multiplier of university to 4% (from 2%)."},
      {name: "Resumé Course", icon: "cat ", iconcolor: "blue darken-3", modification: (state,root) => { state.expchange = 1;}, desc: "Increase experience boost."},
      {name: "Prohibit Strikes", icon: "cat ", iconcolor: "green darken-3", modification: (state,root) => { root.store_infrastructure[4].cost.rate=1.09 }, desc: "Reduce cost increase of university from 10% to 9%."}
    ]}
];

export const zones = [
  {name: 'Free', color: 'green darken-4', icons: ['']},
  {name: 'Comercial', color: 'blue darken-4', icons: ['fas fa-glass-martini ','fas fa-beer','fas fa-hotel'], strong: "Stores and Banks", weak :"Inn and Powerplant."},
  {name: 'Residential', color: 'light-green darken-2', icons: ['fas fa-home', 'fas fa-building', 'fas fa-place-of-worship'], strong: "Inn and Casino", weak: "Store and Factory."},
  {name: 'Industrial', color: 'yellow accent-4', icons: ['fas fa-industry', 'fas fa-warehouse'], strong: "Factory and Energy", weak: "Bank and Casino."}
];

export const achievements = {
  beginner: {desc: "Change your job once.", title: "Beginner", icon: "fas fa-cat", iconcolor: "orange accent-4", mult: 0.05},
  advancer: {desc: "Get promoted.", title: "Advancer", icon: "fas fa-cat", iconcolor: "blue-grey lighten-2", mult: 0.05},
  prof: {desc: "Get another promotion.", title: "Professional", icon: "fas fa-cat", iconcolor: "amber", mult: 0.05},
  workfun: {desc: "Get a new job with only Farms and Casinos.", title: "Work hard and play hard", icon: "fas fa-dice", iconcolor: "red darken-2", mult: 0.1},
  upgrades: {desc: "Get a new job without buying any building upgrades.", title: "Nerfs make for good achievements", icon: "fas fa-upload", iconcolor: "light-blue darken-3", boni: "Autoupgrades unlocked.", mult: 0},
  zone: {desc: "Reach a zoning value of over 500 for one type.", title: "In the zone", icon: "fas fa-object-group", iconcolor: "purple darken-4", mult: 0.5},
  zone2: {desc: "Reach a zoning value of over 2399 for one type.", title: "Twilight zone", icon: "fas fa-object-group", iconcolor: "green accent-4", mult: 1}
};