/* eslint-disable react-hooks/exhaustive-deps */
import faker from 'faker'
import { useEffect, useState } from 'react'

import { TOrder, TOrderBookFunction, TOrderBookStream, TSide } from '../types/orderBook'

const useOrderBookStream = () => {
  const intervalRate = 5000 // change interval to 5s
  let intervalId: number
  let currentData: TOrderBookStream
  const initialOrderBookStream = {
    buy: [],
    sell: [],
  }
  const [subscribers, setSubscribers] = useState<TOrderBookFunction[]>([])
  const [userOrder, setUserOrder] = useState<TOrderBookStream>(initialOrderBookStream)

  const addOrder = (side: TSide, order: TOrder) => {
    setUserOrder({
      ...userOrder,
      [side]: [...userOrder[side], order],
    })
  }

  const unSubscribe = (unSubscribeIndex: number) => {
    setSubscribers(subscribers.filter((_, index) => index !== unSubscribeIndex))
  }

  const destroy = () => {
    window.clearInterval(intervalId)
    setSubscribers([])
  }

  const produceData = () => {
    const buy: TOrder[] = Array.from({ length: 10 }, () => {
      return {
        price: faker.commerce.price(undefined, 499),
        amount: faker.finance.amount(undefined, 100),
      }
    })

    const sell: TOrder[] = Array.from({ length: 10 }, () => {
      return {
        price: faker.commerce.price(500),
        amount: faker.finance.amount(undefined, 100),
      }
    })

    return {
      buy: buy.concat(userOrder.buy),
      sell: sell.concat(userOrder.sell),
    }
  }

  const subscribe = (callback: TOrderBookFunction) => {
    subscribers.push(callback)
    callback(currentData || initialOrderBookStream)
    return () => {
      const index = subscribers.findIndex((subscriber: TOrderBookFunction) => {
        return subscriber === callback
      })
      unSubscribe(index)
    }
  }

  useEffect(() => {
    currentData = produceData()
    intervalId = window.setInterval(() => {
      subscribers.forEach(callback => {
        currentData = produceData()
        callback(currentData)
      })
    }, intervalRate)
  }, [userOrder])

  return {
    destroy,
    unSubscribe,
    subscribe,
    addOrder,
    produceData,
  }
}

export default useOrderBookStream
