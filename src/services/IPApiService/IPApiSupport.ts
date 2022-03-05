export interface IIPAddressData {
  query: string
  status: string
  city: string
  lat: string
  lon: string
  isp: string
  country: string
  timezone: string
}

export interface IIPApiServiceState {
  ipAddressData: IIPAddressData | null
  isError: boolean
}

export interface IIPAddressRequest {
  data: IIPAddressData
  status: number
}

export enum IPApiStatusType {
  SUCCESS = 'success',
}
