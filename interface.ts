interface CoWorkingSpaceItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    picture: string,
    open_close_time:string,
    __v: number,
    id: string
  }
  
  interface CoWorkingSpaceJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CoWorkingSpaceItem[]
  }