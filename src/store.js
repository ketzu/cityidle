import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const eventBus = new Vue();

const storagename = 'cidle-v1';

const bbcost = 10;
const costgrowth = 13;

const bcost = {
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

const bgain = {
  Farm: bbgain,
  Inn: Math.pow(gaingrowth,1)*bbgain,
  Store: Math.pow(gaingrowth,2)*bbgain,
  Bank: Math.pow(gaingrowth,3)*bbgain,
  Datacenter: Math.pow(gaingrowth,4)*bbgain,
  Factory: Math.pow(gaingrowth,5)*bbgain,
  Energy: Math.pow(gaingrowth,6)*bbgain,
  Casino: Math.pow(gaingrowth,7)*bbgain
};

const basebuildings = [
  {name: "Farm", title: "Farm", type: "Generator", icon: "fa-apple-alt", cost: {base: bcost['Farm'], rate: 1.1}, gain: bgain['Farm'], mult: 1.00, iconcolor: "red darken-2"},
  {name: "Inn" , title: "Inn", type: "Generator", icon: "fa-beer", cost: {base: bcost['Inn'], rate: 1.1}, gain: bgain['Inn'], mult: 1.00, iconcolor: "amber"},
  {name: "Store", title: "Store", type: "Generator", icon: "fa-store-alt", cost: {base: bcost['Store'], rate: 1.1}, gain: bgain['Store'], mult: 1.00, iconcolor: "brown darken-3"},
  {name: "Bank", title: "Bank", type: "Generator", icon: "fa-university", cost: {base: bcost['Bank'], rate: 1.1}, gain: bgain['Bank'], mult: 1.00, iconcolor: "grey darken-4"},
  {name: "Datacenter", title: "Datacenter", type: "Generator", icon: "fa-satellite-dish", cost: {base: bcost['Datacenter'], rate: 1.1}, gain: bgain['Datacenter'], mult: 1.00, iconcolor: "blue darken-4"},
  {name: "Factory", title: "Factory", type: "Generator", icon: "fa-industry", cost: {base: bcost['Factory'], rate: 1.1}, gain: bgain['Factory'], mult: 1.00, iconcolor: "teal darken-4"},
  {name: "Energy", title: "Power Plant", type: "Generator", icon: "fa-burn", cost: {base: bcost['Energy'], rate: 1.1}, gain: bgain['Energy'], mult: 1.00, iconcolor: "deep-orange"},
  {name: "Casino", title: "Gambling Den", type: "Generator", icon: "fa-dice", cost: {base: bcost['Casino'], rate: 1.095}, gain: bgain['Casino'], mult: 1.00, iconcolor: "purple darken-2"}
];

const upgrades = {
  Farm: {
    25: {gain: 3, uname: "Crop Rotation"},
    50: {gain: 5, uname: "Fertilizer"},
    100:{gain: 15, uname: "Artificial Irrigation", title: "Advanced Farm"},
    130: {gain:10, uname: "Plant Crossing"},
    170: {gain:12, uname: "Mechanized Agriculture", title: "Automated Farm"},
    200: {gain:18, uname: "Bio Farming", title: "Bio Farm"}
    },
  Inn:  {
    30: {gain: 3, uname: "Happy Hour"},
    60: {gain: 3, title: "Hotel"},
    90: {gain: 12, uname: "Spa"},
    120:{gain: 15, uname: "Minibar"},
    150:{gain: 12, uname: "Rebranding", title: "Bar"}
    },
  Store: {
    15: {gain: 4, uname: "Delivery Service"},
    40: {gain: 4, title: "Market"},
    80: {gain: 5, title: "Farmers Market"},
    140: {gain:11, title: "Mall", uname: "Expansion"}
    },
  Bank: {
    35: {gain: 5, uname: "Online banking"},
    70: {gain: 8, title: "Loan Shark"},
    105: {gain: 4, title: "Investment Bank"},
    140: {gain: 9, uname: "Highspeed Trading"},
    180: {gain: 13, uname: "Money Laundering"}
    },
  Datacenter: {
    40: {gain: 4, title: "Bitcoin Mining"},
    80: {gain: 7, title: "Social Networks"},
    120: {gain:5, title: "Ad Tracking"},
    160: {gain:9, title: "Smart Grid"}
    },
  Factory: {
    10: {gain: 3, uname: "Outsourcing"},
    40: {gain: 4, uname: "Automation", title: "Automatic Factory"},
    80: {gain: 8, uname: "Self Replicating Goods"}
    },
  Energy: {
    50: {gain: 3, uname: "Nuclear Reactor"},
    90: {gain: 8, uname: "Renewable Energy"}
    },
  Casino: {
    75: {gain: 2, title: "Casino", uname: "Gamling License"},
    150: {gain: 4, title: "Las Vegas", uname: "Gambling Addiction"}
    },
};

const baseinfrastructure = [
  {name: "Roads", title: "Roads", icon: "fa-road", reqlevel: 1, basemult: 1.015, affected: ['Farm', 'Store', 'Factory'], cost: {base: Math.pow(10,5), rate: 1.1}, iconcolor: "teal darken-4"},
  {name: "Electricity" , title: "Electricity Grid", icon: "fa-plug", reqlevel: 1, basemult: 1.025, affected: ['Energy', 'Datacenter', 'Bank'], cost: {base: Math.pow(10,8), rate: 1.1}, iconcolor: "deep-orange"},
  {name: "Transport", title: "Public Transport", icon: "fa-bus-alt", reqlevel: 1, basemult: 1.04, affected: ['Casino', 'Inn'], cost: {base: Math.pow(10,11), rate: 1.1}, iconcolor: "red darken-4"},
  {name: "Lighting", title: "Lighting", icon: "fa-lightbulb", reqlevel: 2, basemult: 1.04, affected: ['Farm', 'Inn', 'Store'], cost: {base: Math.pow(10,18), rate: 1.1}, iconcolor: "amber"},
  {name: "University", title: "University", icon: "fa-graduation-cap ", reqlevel: 2, basemult: 1.02, affected: ['Factory', 'Datacenter', 'Energy'], cost: {base: Math.pow(10,23), rate: 1.1}, iconcolor: "brown darken-3"},
  {name: "Airport", title: "Airport", icon: "fa-plane-departure ", reqlevel: 3, basemult: 1.02, affected: [], cost: {base: Math.pow(10,30), rate: 1.1}, iconcolor: "purple darken-2"},
  {name: "Internet", title: "Internet", icon: "fa-wifi", reqlevel: 3, basemult: 1.02, affected: [], cost: {base: Math.pow(10,40), rate: 1.1}, iconcolor: "grey darken-4"}
];

const research = [
  {citylevel: 2, title: "Material Science", cost: 1000, options: [
      {name: "Better Roads", icon: "cat ", iconcolor: "red darken-3", modification: () => { infrastructure[0].basemult=1.025 }, desc: "Increase the multiplier of roads to 2.5% (from 1.5%)."},
      {name: "Roads to more Buildings", icon: "cat ", iconcolor: "blue darken-3", modification: () => { infrastructure[0].affected = ['Farm', 'Store', 'Factory', 'Inn', 'Casino', 'Bank'] }, desc: "Make roads affect all buildings, besides power plants and datacenters."},
      {name: "Cheaper Roads", icon: "cat ", iconcolor: "green darken-3", modification: () => { infrastructure[0].cost.rate=1.09 }, desc: "Reduce cost increase of roads from 10% to 9%."}
    ]},
  {citylevel: 2, title: "Electrical Engineering", cost: 50000, options: [
      {name: "Improved Grid", icon: "cat ", iconcolor: "red darken-3", modification: () => { infrastructure[1].basemult=1.035 }, desc: "Increase the multiplier of electricity to 3.5% (from 2.5%)."},
      {name: "Overclock Buildings", icon: "cat ", iconcolor: "blue darken-3", modification: () => { buildings = buildings.map(build => {build.mult=1.01; return build; })}, desc: "Improve production of all buildings."},
      {name: "Outsource Grid Maintenance", icon: "cat ", iconcolor: "green darken-3", modification: () => { infrastructure[1].cost.rate=1.09 }, desc: "Reduce cost increase of electricity from 10% to 9%."}
    ]},
  {citylevel: 2, title: "Psychology", cost: 200000, options: [
      {name: "Motivational Speeches", icon: "cat ", iconcolor: "red darken-3", modification: () => { infrastructure[2].basemult=1.045 }, desc: "Increase the multiplier of transport to 4.5% (from 4%)."},
      {name: "Peace of Mind", icon: "cat ", iconcolor: "blue darken-3", modification: () => { }, desc: "Everything is the same."},
      {name: "Layoff Coaching", icon: "cat ", iconcolor: "green darken-3", modification: () => { infrastructure[2].cost.rate=1.09 }, desc: "Reduce cost increase of transport from 10% to 9%."}
    ]},
  {citylevel: 2, title: "Civil Engineering", cost: 500000, options: [
      {name: "Add Street Lamps", icon: "cat ", iconcolor: "red darken-3", modification: () => { infrastructure[3].basemult=1.045 }, desc: "Increase the multiplier of lighting to 4.5% (from 4%)."},
      {name: "Nothing", icon: "cat ", iconcolor: "blue darken-3", modification: () => { }, desc: ""},
      {name: "Remove Street Lamps", icon: "cat ", iconcolor: "green darken-3", modification: () => { infrastructure[3].cost.rate=1.09 }, desc: "Reduce cost increase of lighting from 10% to 9%."}
    ]},
  {citylevel: 2, title: "Educational Science", cost: 1000000, options: [
      {name: "Pay Teachers more", icon: "cat ", iconcolor: "red darken-3", modification: () => { infrastructure[4].basemult=1.03 }, desc: "Increase the multiplier of university to 3% (from 2%)."},
      {name: "Nothing", icon: "cat ", iconcolor: "blue darken-3", modification: () => {  }, desc: ""},
      {name: "Prohibit Strikes", icon: "cat ", iconcolor: "green darken-3", modification: () => { infrastructure[4].cost.rate=1.09 }, desc: "Reduce cost increase of university from 10% to 9%."}
    ]}
];

const maxreached = (building, level) => {
  for (var key in upgrades[building]) {
    // check if the property/key is defined in the object itself, not in parent
    if (upgrades[building].hasOwnProperty(key)) {
      if (level < key) {
        return false;
      }
    }
  }
  return true;
};

const upgrade = (buildingid, level) => {
  if(upgrades[buildingid] === undefined)
    return false;
  if(upgrades[buildingid][level] === undefined)
    return false;
  let index = buildings.findIndex(element => element.name === buildingid);
  if(index === undefined)
    return false;
  let tempgain = buildings[index].gain * upgrades[buildingid][level].gain;
  Vue.set(buildings,index,{...buildings[index], ...upgrades[buildingid][level], gain: tempgain});
  if(maxreached(buildingid, level)){
    eventBus.$emit('maxupgrade', {building: buildingid, upgrade: upgrades[buildingid][level]});
  }else{
    eventBus.$emit('upgrade', {building: buildingid, upgrade: upgrades[buildingid][level]});
  }
  return true;
};

const allupgrades = (buildingid, level) => {
  for(let i = 0; i <= level; i++) {
    upgrade(buildingid, i);
  }
};

const affecting = (building, inflevels) => {
  let mult = 1;
  for(let infra of infrastructure.filter(inf => inf.affected.includes(building.name))) {
    if(inflevels[infra.name] !== undefined)
      mult *= Math.pow(infra.basemult, inflevels[infra.name]);
  }
  return mult;
};

const resourcegain = (state) => {
  // base generation
  let gain = 0.1;
  let multiplier = 1+expmult(state);
  for(let current of buildings) {
    let level = state.buildings[current['name']];
    if(level === undefined)
      continue;
    gain += current.gain * level * affecting(current, state.infrastructure) * (current.mult*level-1);
  }
  return [gain,multiplier];
};

const updateresources = (state, gain) => {
  state.resource += gain;
  state.resetresource += gain;
  state.alltime += gain;
};

const resettable = (state) => {
  if(state.buildings['Casino'] >= 100)
    return true;
  return false;
};

const expgain = (state) => {
  return Math.sqrt(state.resetresource/(2*Math.pow(10,10)));
};
const expmult = (state) => {
  return 0.04*(state.experience-state.lockedexp);
};

const citynames = [
  "village",
  "city",
  "large city",
  "metropolis"
];

const cityupgradeable = (state) => {
  if(state.citylevel === 0 && state.experience+expgain(state) >= 1000) {
    return true;
  }
  if(state.citylevel === 1 && state.experience+expgain(state) >= 100000) {
    return true;
  }
  return false;
};

let mainloop = undefined;
const startsim = (state) => {
  clearInterval(mainloop);
  mainloop = setInterval(() => {
    const gain = resourcegain(state).reduce((a,b) => a*b);
    updateresources(state, gain);
  }, state.tickrate);
};

const stopsim = () => {
  clearInterval(mainloop);
};

let visible = true;
let lastActive = undefined;
let infrastructure;
let buildings;

export default new Vuex.Store({
  state: {
    settings: {
      currency: "₡",
      numbersplitsymbol: " x10^",
      numberview: 1,
      cityname: "Shitty Idle"
    },
    startofgamedialog: true,
    version: "0.8.6",
    resets: 0,
    resetresource: 0,
    experience: 0,
    lockedexp: 0,
    resource: 0,
    alltime: 0,
    tickrate: 100,
    title: "mayor",
    citylevel: 0,
    buildings: {},
    infrastructure: {},
    research: {}
  },
  getters: {
    settings(state) { return state.settings; },
    upgrades(state) { return upgrades; },
    research(state) { return research.filter(obj => obj.citylevel <= state.citylevel); },
    researchselection(state) { return state.research; },
    startofgamedialog(state) { return state.startofgamedialog; },
    cityname(state) { return state.settings.cityname; },
    resource(state) { return state.resource; },
    basegain(state) { return bgain; },
    expgain(state) { return expgain(state); },
    expmult(state) { return expmult(state); },
    alltime(state) { return state.alltime; },
    resetresource(state) { return state.resetresource; },
    experience(state) { return state.experience-state.lockedexp; },
    resets(state) { return state.resets; },
    infrastructure(state) { return infrastructure.filter(obj => obj.reqlevel <= state.citylevel)},
    infrastructurelevels(state) { return state.infrastructure; },
    buildinglevels(state) { return state.buildings; },
    tickrate(state) { return state.tickrate; },
    towntype(state) { return citynames[state.citylevel]; },
    nexttowntype(state) { return citynames[state.citylevel+1]; },
    cityupgradeable(state) { return cityupgradeable(state); },
    citylevel(state) { return state.citylevel; },
    currency(state) { return state.settings.currency; },
    resettable(state) { return resettable(state); },
    title(state) { return state.title; },
    multiplier(state) {
      return resourcegain(state)[1];
    },
    resourcegain(state) {
      return resourcegain(state).reduce((a,b) => a*b);
    }
  },
  mutations: {
    initstore(state, vm) {
      vm._infrastructure = JSON.parse(JSON.stringify(baseinfrastructure));
      vm._buildings = JSON.parse(JSON.stringify(basebuildings));
      buildings = vm._buildings;
      infrastructure = vm._infrastructure;

      // Check if the ID exists
      console.log(localStorage.getItem(storagename));
      if (localStorage.getItem(storagename)) {
        let deserialize = JSON.parse(localStorage.getItem(storagename));
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, deserialize)
        );

        // reapply upgrades
        for (let [key, value] of Object.entries(state.buildings)) {
          if (state.buildings.hasOwnProperty(key)) {
            allupgrades(key, value);
          }
        }

        // reapply researches
        for (let [key, value] of Object.entries(state.research)) {
          if (state.research.hasOwnProperty(key) && value !== undefined) {
            research[key].options[value].modification(state);
          }
        }

        // offline ticks
        if(deserialize["time"] !== undefined) {
          // at most 25920000 ticks = 30 Days worth of offline time
          let ticks = Math.min(((new Date()).getTime()-deserialize["time"])/state.tickrate,25920000);
          const gain = resourcegain(state).reduce((a,b) => a*b);
          updateresources(state,ticks*gain);
          setTimeout(()=>{ eventBus.$emit('offlineincome', gain)}, 2500);
        }
      }
    },
    startgame(state) {
      startsim(state);
      // handle being put in the background
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          stopsim();
          visible = false;
          lastActive = (new Date()).getTime();
        } else  {
          if(visible == false) {
            visible = true;
            let timePassed = (new Date()).getTime()-lastActive;

            let ticks = Math.min(timePassed/state.tickrate,25920000);
            const gain = resourcegain(state).reduce((a,b) => a*b);
            updateresources(state,ticks*gain);
            startsim(state);
          }
        }
      }, false);
    },
    updateresource(state, payload) {
      state.resource = payload.value;
    },
    spendresource(state, payload) {
      state.resource -= payload.value;
    },
    settownspecs(state, {title, towntype}) {
      state.towntype = towntype;
      state.title = title;
    },
    softreset(state, {upgrade}) {
      if(resettable(state)){
        state.resets += 1;
        state.experience += expgain(state);

        // Reset run specific stats
        state.buildings = {};
        state.infrastructure = {};
        state.research ={};

        state.lockedexp = 0;
        state.resource = 0;
        state.resetresource = 0;

        // Reset buildings array
        Object.assign(buildings, JSON.parse(JSON.stringify(basebuildings)));
      }
      if(upgrade && cityupgradeable(state)){
        state.experience = 0;
        state.citylevel += 1;
      }
    },
    buybuilding(state, {building, count}) {
      if(state.buildings[building.name] === undefined)
        Vue.set(state.buildings, building.name, 0);
      for(let i=0;i<count;i++){
        const cost = building.cost.base*Math.pow(building.cost.rate,state.buildings[building.name]);
        if(cost < state.resource) {
          state.resource -= cost;
          state.buildings[building.name] += 1;
          upgrade(building.name, state.buildings[building.name]);
        }
      }
    },
    buyinfrastrucutre(state, {building, count}) {
      if(state.infrastructure[building.name] === undefined)
        Vue.set(state.infrastructure, building.name, 0);
      for(let i=0;i<count;i++){
        const cost = building.cost.base*Math.pow(building.cost.rate,state.infrastructure[building.name]);
        if(cost < state.resource) {
          state.resource -= cost;
          state.infrastructure[building.name] += 1;
        }
      }
    },
    selectresearch(state, {level, selection}) {
      if(state.experience-state.lockedexp < research[level].cost)
        return;
      state.lockedexp += research[level].cost;
      if(state.research[level] === undefined)
        Vue.set(state.research, level, selection);
      else {
        if(state.research[level]>3 || state.research[level]<0)
          state.research[level] = selection;
      }
      research[level].options[selection].modification(state);
    },
    hardreset(state) {
      // Hard Reset: Delete State
      localStorage.removeItem(storagename);
      // Reload page
      location.reload();
    },
    changecityname(state, name) {
      state.settings.cityname=name;
    },
    updatesettings(state, settings) {
      state.settings = settings;
    },
    startGame(state) {
      state.startofgamedialog = false;
    },
    restartsim(state) {
      startsim(state);
    }
  },
  actions: {
    spendresource({commit}, payload) {
      commit('spendresource', payload);
    },
    settownspecs({commit}, payload) {
      commit('settownspecs', payload);
    },
    buybuilding({commit}, payload) {
      commit('buybuilding', payload);
    },
    buyinfrastructure({commit}, payload) {
      commit('buyinfrastrucutre', payload);
    },
    selectresearch({commit}, payload) {
      commit('selectresearch', payload);
    },
    softreset({commit}, payload) {
      commit('softreset', payload);
    },
    changecityname({commit}, name) {
      commit('changecityname', name);
    },
    updatesettings({commit}, settings) {
      commit('updatesettings', settings);
    },
    startGame({commit}) {
      commit('startGame');
    },
    restartsim({commit}) {
      commit('restartsim');
    }
  }
})
