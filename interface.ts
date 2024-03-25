interface CoWorkingSpaceItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    open_close_time:string,
    __v: number,
    picture: string,
  }
  
  interface CoWorkingSpaceJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CoWorkingSpaceItem[]
  }