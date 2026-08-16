
export class AccountDet{
   
    private addBalance:number | undefined;


    // constructor(amount:number){
    //   this.addBalance =amount


    // }






   public setBalance(amount:number){
      this.addBalance =amount;  
     

    }


    public showBalance():number|undefined{
       return this.addBalance;

    }
}

