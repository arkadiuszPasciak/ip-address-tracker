export interface IIPAddressData {
  query: string
  status: string
  region: string
  city: string
  lat: string
  lon: string
  isp: string
}

export interface IIPApiServiceState {
  ipAddressData: IIPAddressData | null
}

export interface IIPAddressRequest {
  data: IIPAddressData
  status: number
}
