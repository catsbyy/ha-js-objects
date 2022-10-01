
document.getElementById("main-form").addEventListener("submit", addNewWorker);
document.getElementById("find-worker-button").addEventListener("submit", getTheHighestPremium);

var company = {
    companyName: "УкрКосмос",
    activity: "Космонавтика",
    address: "місто Київ, проспект Володимира Маяковського, 24"
};

var workers = [];

document.getElementById("company-name").innerHTML = company.companyName;
document.getElementById("company-activity").innerHTML = company.activity;
document.getElementById("company-address").innerHTML = company.address;
document.getElementById("company-workers").innerHTML = workers.length;

function Employee(pName, pPosition, pEducation, pDegree, pSalary) {
    this.name = pName;
    this.position = pPosition;
    this.education = pEducation;
    this.degree = pDegree;
    this.salary = pSalary;
    if (this.degree.length == 0) { this.premium = 0;} else {this.premium = (0.3 * this.salary)} ;

    this.fullInfo = (`${this.name}; ${this.position}; ${this.education}; ${this.degree};  ${this.salary}; премія: ${this.premium}.`);
    
}

function addNewWorker (e) {
    e.preventDefault();
    var el = document.getElementById("main-form");

    var error = false;
  
    var salary = Number(el.elements["salary"].value);
    if (salary == 0) {
      error = true;
      document.getElementById("salary-label").style.color = "red";
    }
    else {
      document.getElementById("salary-label").style.color = "#648cf4";
    }
  
    var name = el.elements["name"].value;
    if (name == 0) {
      error = true;
      document.getElementById("name-label").style.color = "red";
    }
    else {
      document.getElementById("name-label").style.color = "#648cf4";
    }
  
    var position = el.elements["position"].value;
    if (position.length === 0) {
      error = true;
      document.getElementById("position-label").style.color = "red";
    }
    else {
      document.getElementById("position-label").style.color = "#648cf4";
    }

    var education = el.elements["education"].value;
    if (education.length === 0) {
      error = true;
      document.getElementById("education-label").style.color = "red";
    }
    else {
      document.getElementById("education-label").style.color = "#648cf4";
    }

    var degree = el.elements["degree"].value;
  
    if (error == false) {
        var newWorker = new Employee(name, position, education, degree, salary);
        newWorker.__proto__ = company;
        workers.push(newWorker);
        document.getElementById("workers-info").innerHTML += newWorker.fullInfo + "<br>";
        document.getElementById("company-workers").innerHTML = workers.length;
    } 

}

function getTheHighestPremium(e) {
    e.preventDefault();
    
    if (workers.length==0) {
        document.getElementById("result-worker").innerHTML = "немає співробітників";
    }
    else {
        var maxPremiumWorker = workers.reduce((prev, curr) => prev.premium > curr.premium ? prev : curr);
        document.getElementById("result-worker").innerHTML = (`${maxPremiumWorker.name}; ${maxPremiumWorker.companyName}; ${maxPremiumWorker.address}; ${maxPremiumWorker.position}; ${maxPremiumWorker.salary}; ${maxPremiumWorker.premium}.`);
    }
    
}