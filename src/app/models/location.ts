export interface Location {
    id: number,
    name: string,
    zoneCount: number,
    camps: Camp[]
  }
  
  export interface Camp {
    id: number,
    name: string,
    zone: number
  }