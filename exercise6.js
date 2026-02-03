const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

//L2
const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

// L3
const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

manager.addTeamMember = function(name) {
    this.team.push(name);
    return `${name} added to ${this.department} team`;
};

manager.listTeam = function() {
    if (this.team.length === 0) return 'No team members';
    return `Team: ${this.team.join(', ')}`;
};


console.log("Properties for Manager");
console.log("department:", manager.department);
console.log("team:", manager.team); 
console.log("hasOwn('department'):", Object.hasOwn(manager, 'department'));
console.log("hasOwn('addTeamMember'):", Object.hasOwn(manager, 'addTeamMember')); 

console.log("\nInherited from employee:");
console.log("company:", manager.company); 
console.log("position:", manager.position);
console.log("hasOwn('company'):", Object.hasOwn(manager, 'company'));
console.log("hasOwn('position'):", Object.hasOwn(manager, 'position'));

console.log("\nInherited from person:");
console.log("species:", manager.species); 
console.log("breathe():", manager.breathe()); 
console.log("hasOwn('species'):", Object.hasOwn(manager, 'species')); 
console.log("hasOwn('breathe'):", Object.hasOwn(manager, 'breathe')); 

console.log("\nTesting thru adding members");
console.log(manager.addTeamMember("Alice"));
console.log(manager.addTeamMember("Bob"));
console.log(manager.addTeamMember("Charlie"));
console.log(manager.listTeam());

console.log("\nEnsuring teh prototype chain is correct");
console.log("manager.__proto__ === employee:", manager.__proto__ === employee);
console.log("employee.__proto__ === person:", employee.__proto__ === person);
console.log("person.__proto__ === Object.prototype:", person.__proto__ === Object.prototype);
console.log("Object.prototype.__proto__:", Object.prototype.__proto__);