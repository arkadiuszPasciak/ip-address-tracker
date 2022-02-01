import axios from 'axios'
import {
  IIPAddressRequest,
  IPApiStatusType,
} from '@/services/IPApiService/IPApiSupport'

/** This repository is responsible for connect with IP-API */
export default class IPApiRepository {
  /**
   * Get data from ip user
   * @param ipAddress IP address of user
   * @returns User data from ip address or null
   */
  public async getIPAddress(
    ipAddress: string
  ): Promise<IIPAddressRequest | null> {
    try {
      const response = await axios.get(`http://ip-api.com/json/${ipAddress}`)
      const status = response.data.status

      if (status !== IPApiStatusType.SUCCESS) {
        throw new Error(`IPApiRepository:getIPAddress: status is ${status}`)
      }

      return response
    } catch (error) {
      throw new Error(`IPApiRepository:getIPAddress: ${error}`)
    }
  }
}
