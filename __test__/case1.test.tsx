import '@testing-library/jest-dom'
import getCoWorkingSpace from '@/libs/getCoWorkingSpace'

describe('Get Coworkingspace by ID', () => {
  var coworkingspaceByIdPromise:Promise<Object>
  var coworkingspaceJsonResult:Object
  beforeEach(async () => {
    coworkingspaceByIdPromise = getCoWorkingSpace('65e5b2e608d01a23ecda3bb2')
    coworkingspaceJsonResult = await coworkingspaceByIdPromise
  })

  it('getcoworkingspace must return correct result', () => {
    const resultData = coworkingspaceJsonResult.data
    expect(resultData.name).toMatch(/Samyan Co-op/i)
    expect(resultData.address).toMatch(/281, 19-23 Silom 1 Alley, Samyan, Bang Rak, Bangkok 10500/i)
    expect(resultData.tel).toMatch(/02-631-1669/i)
    expect(resultData.open_close_time).toMatch(/1 AM - 8 AM/i)
  })
})