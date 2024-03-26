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

  export interface ReservationItem {
    coworkingId : string
    coworkingname : string
    numOfhours : number
    reserDate : string
    intime : number
    outtime : number
}