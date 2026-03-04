export interface RootState {
    system: {
        appId: string;
        configTheme: {
            colorPrimary: string;
            colorPrimaryBg: string;
        };
        baseUrl: string;
    };
}



export interface Users {
    userId:string;
    userName:string;
    email:string;
    phoneNumber:string;
    dateOfBirth:string;
    gender?:Gender;
    address:string;
}
export type Gender = 'MALE' | 'FEMALE';

