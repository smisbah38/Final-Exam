function process() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let monthlybill = document.getElementById("internetbill").value;
  let yearlyfee = document.getElementById("yearlyfee").value;
  let yearlyInternetBill = 12 * monthlybill;
  //console.log(yearlyInternetBill);
  let total = yearlyInternetBill + yearlyfee;
  let incentive;
  function incentiveCalculation(a, b) {
    if (a > 50 && b > 20000) {
      incentive = total * 0.2;
      return incentive;
    } else if (a > 30 && b > 3000) {
      incentive = total * 0.15;
      return incentive;
    } else {
      incentive = 0;
      return incentive;
    }
  }

  let tax = incentiveCalculation(age, total);

  document.getElementById("name1").innerText = "Name: " + name;
  document.getElementById("age1").innerText = "Age:" + age;
  document.getElementById("internetbill1").innerText =
    "Monthly Internet Bill: " + monthlybill;
  document.getElementById("yearlyfee1").innerText =
    "Yearly Device Maintenance Fee: " + yearlyfee;
  document.getElementById("governmentincentive").innerText =
    "Government Incentive: " + tax;
}
