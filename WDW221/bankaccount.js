//this class will contain and proccess a bank acount 
class BankAccount{
    // this class will contain account information with a focus oon proscessing deposits
    //and withdrawls from the account
    //created 11/9/2022 unit 11 javaScritpr Object Oriented Programming 
    // used: Assignment 11-1 create BankAcount 

    //properties
    //default values
    bankAccountName="";
    bankAcountNumber=0;
    bankAccountBalance=0;

    //contructor
    constructor(inBalance,inAccountNumber,inAccountName){
        this.bankAccountBalance = inBalance;
        this.bankAccountName = inAccountName;
        this.bankAcountNumber = inAccountNumber;

    }

    //setters and getters
    setbankAccountNumber(inAccountNumber){
        this.bankAcountNumber = inAccountNumber;
    }

    getAccountNumber(){
        return this.bankAcountNumber;
    }

    setBalance(inBalance){
        this.bankAccountBalance=inBalance.toLocaleString("en-US", {style:"currency", currency:"USD"});
    }

    getBalance(){
        return this.bankAccountBalance.toLocaleString("en-US", {style:"currency", currency:"USD"});
    }

   
    setAccountName(inAccountName){
        this.bankAccountName=inAccountName;
    }

    getAccountName(){
        return this.bankAccountName;
    }

    AccountInfo(){
        return  [' Account Name ' + this.bankAccountName,
         ' Account Number ' + this.bankAcountNumber,
         ' Account Balance ' + this.bankAccountBalance];
    }

    //proccessing methods 

    depositFunds(inAmount){
        this.bankAccountBalance += inAmount;
    }

    widthdrawFunds(outAmount){
        this.bankAccountBalance -= outAmount;
    }
    
}

