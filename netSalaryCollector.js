//Challenge that calculates net salary taking into account nhif, nssf add other deductions
function calculateNetPay(){
    const prompt = require("prompt-sync")()
    let basicSalary = prompt("Enter Basic Pay: "); 
    let benefits = prompt("Enter benefits amount:") 
    let grossSalary = basicSalary + benefits; 
        
    
    //PAYE CALCULATIONS
        let paye = 0;
    if (grossSalary <= 24000) {
        paye = (24000 * 0.1);
    } else if(grossSalary > 24000 && grossSalary <= 32333){
        paye = (24000 * 0.1) + ((grossSalary-24000) * 0.25);
    } else if(grossSalary > 32333){
        paye = (24000 * 0.1) + ((32333-24000) * 0.25) + ((grossSalary-32333) * 0.3);
    }else{    
    }
    
    //NHIF
    let nhif = 0;
    
    if (grossSalary <= 5900) {
        nhif = 150;
    } else if (grossSalary>6000 && grossSalary<=7999){
        nhif = 300;
    } else if (grossSalary>8000 && basicSalary<=11999){
        nhif = 400;
    }else if (grossSalary>12000 && basicSalary<=14999){
        nhif = 500;    
    } else if (grossSalary>15000 && basicSalary<=19999){
        nhif = 600;
    } else if (grossSalary>20000 && basicSalary<=24999){
        nhif = 750;
    }else if (grossSalary>12000 && basicSalary<=29999){
        nhif = 850;
    }else if (grossSalary>12000 && basicSalary<=34999){
        nhif = 900;
    }else if (grossSalary>12000 && basicSalary<=39999){
        nhif = 950;
    }else if (grossSalary>12000 && basicSalary<=44999){
        nhif = 1000;
    }else if (grossSalary>12000 && basicSalary<=49999){
        nhif = 1100;
    }else if (grossSalary>12000 && basicSalary<=59999){
        nhif = 1200;
    }else if (grossSalary>12000 && basicSalary<=69999){
        nhif = 1300;
    }else if (grossSalary>12000 && basicSalary<=79999){
        nhif = 1400;
    }else if (grossSalary>12000 && basicSalary<=89999){
        nhif = 1500;
    }else if (grossSalary>12000 && basicSalary<=99999){
        nhif = 1600;
    }else if (grossSalary>100000){
        nhif = 1700;
    }
    
    
    // nssf
    let nssf = 0;
    
    if (grossSalary < 18000) {
        nssf =  (grossSalary) * 0.06; // this is the 6% charge by nhif
    } else if(grossSalary>18000) {
        nssf = (18000 * 0.06);
    } else if(grossSalary <= 0){
        console.log("Invalid input. Salary must be greater than 0.");
    } 
    
    let netDeductions = nhif + nssf + paye;
    let netSalary = (grossSalary - netDeductions)
    
    let personalTaxRelief = 2400;
    if (grossSalary<24000){
        personalTaxRelief = (grossSalary * 0.1)
    }else {
        netSalary = (grossSalary + personalTaxRelief) - netDeductions;
        console.log(netSalary);
        
    };
    
    
    }calculateNetPay()