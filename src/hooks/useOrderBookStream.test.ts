import { renderHook } from '@testing-library/react-hooks'
import useOrderBookStream from './useOrderBookStream'

describe('useOrderBookStream', () => {
  it('should return initial currentData value from useOrderBookStream', async () => {
    const { result } = renderHook(() => useOrderBookStream())

    expect(result.current).toBeTruthy()
  })

  // Todo: add more unit test to cover all case
})
