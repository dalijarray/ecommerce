
export interface ReqRes {
    ourUsers: ourUsers;
    error: string;
    message: string;
    token: string;
    refreshToken: string;
    expirationTime: string;
    email: string;
    role: string ;
    password: string ;
    firstName: string ;
    lastName: string ;
    dateOfBirth: Date ;
    phoneNumber: string ;
    gender: string ;
    address: string ;
  }
  
  export interface ourUsers{
    id: string
    email: string;
    role: string ;
    password: string ;
    firstName: string ;
    lastName: string ;
    dateOfBirth: Date ;
    phoneNumber: string ;
    gender: string ;
    address: string ;
  }