
export interface ReqRes {
    ourUsers: ourUsers;
    error: string;
    message: string;
    token: string;
    refreshToken: string;
    expirationTime: string;
    email: string;
    role: string ;
    firstName: string;
    lastName: string ;
   
    phoneNumber: string ;
    password: string ;
    address: string ;
    gender: string ; // Assuming gender selection is required
    dateOfBirth: Date; // Assuming date of birth collection is required
    
  }
  
  export interface ourUsers{
    id: string
    role: string;
    email: string;
    firstName: string ;
    lastName: string ;
   
    phoneNumber: string ;
    password: string ;
    address: string ;
    gender: string ; // Assuming gender selection is required
    dateOfBirth: Date; // Assuming date of birth collection is required
  
  }