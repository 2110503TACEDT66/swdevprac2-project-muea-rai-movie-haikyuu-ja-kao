import { ObjectId } from "mongodb"

  export interface CoWorkingSpaceItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    open_close_time:string,
    __v: number,
    picture: string,
  }
  
  export interface CoWorkingSpaceJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CoWorkingSpaceItem[]
  }

//   export interface ReservationItem {
//     _id : string,
//     resDate : string,
//     user: string,
//     coWorkingSpace : string,
// }

export interface ReservationItem {
  _id : ObjectId,
  resDate : string,
  user: ObjectId,
  coWorkingSpace : ObjectId,
}

export interface ReservationJson {
  success: boolean,
    count: number,
    pagination: Object,
    data: ReservationItem[]
}