import IPApiRepository from '@/services/IPApiService/IPApiRepository'
import { IIPApiServiceState } from '@/services/IPApiService/IPApiSupport'

/** This service is responsible for managing IP-API */
export default class IPApiService {
  /**
   * Inject IPApiRepository
   * @returns Class IPApiRepository
   */
  private get gIPApiRepository() {
    return new IPApiRepository()
  }

  public state: IIPApiServiceState = {
    ipAddressData: null,
    isError: false,
  }

  /**
   * Get response from repository and update state.
   * @param ipAddress IP address of user.
   * @returns Change ip address information in state.
   */
  public async getIPAddressData(ipAddress: string): Promise<void> {
    this.state.isError = false

    try {
      const response = await this.gIPApiRepository.getIPAddress(ipAddress)

      if (response) {
        this.state.ipAddressData = response.data
      }
    } catch (error) {
      console.warn(`IPApiService:getIPAddressData: ${error}`)

      this.state.isError = true
    }
  }
}
