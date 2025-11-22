
export interface Notify{
  state: boolean; 
  msg: string; 
  error?:boolean
}



export interface Data {
  [key:string]: string | string [];
}