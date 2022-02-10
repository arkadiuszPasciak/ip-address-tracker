import IPApiService from '@/services/IPApiService/IPApiService'
import { IPApiStatusType } from '@/services/IPApiService/IPApiSupport'

const gIPApiService = new IPApiService()

const ipAddress = {
  berlin: '83.97.23.105',
  london: '193.62.157.66',
  paris: '146.112.128.150',
}

describe('[IPApiService]: getIPAddressData', () => {
  it('should get ip address data', async () => {
    await gIPApiService.getIPAddressData(ipAddress.berlin)

    expect(gIPApiService.state.ipAddressData?.status).toEqual(
      IPApiStatusType.SUCCESS
    )

    await gIPApiService.getIPAddressData(ipAddress.london)

    expect(gIPApiService.state.ipAddressData?.status).toEqual(
      IPApiStatusType.SUCCESS
    )

    await gIPApiService.getIPAddressData(ipAddress.paris)

    expect(gIPApiService.state.ipAddressData?.status).toEqual(
      IPApiStatusType.SUCCESS
    )
  })

  it('should not get ip address data', async () => {
    await gIPApiService.getIPAddressData('abcdefgh')

    expect(gIPApiService.state.isError).toEqual(true)

    await gIPApiService.getIPAddressData('!@#$%%^&*()')

    expect(gIPApiService.state.isError).toEqual(true)

    await gIPApiService.getIPAddressData('')

    expect(gIPApiService.state.isError).toEqual(true)
  })
})
