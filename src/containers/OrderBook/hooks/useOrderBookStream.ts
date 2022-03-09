/* eslint-disable react-hooks/exhaustive-deps */
import faker from 'faker'
import { useEffect } from 'react'

import { TOrder, TOrderBookFunction, TOrderBookStream, TSide } from '../../../types/orderBook'

const useOrderBookStream = () => {
  let intervalId: number
  let subscribers: TOrderBookFunction[] = []
  const intervalRate = 2000
  let currentData: TOrderBookStream
  let userOrder: TOrderBookStream = {
    buy: [],
    sell: [],
  }

  const addOrder = (side: TSide, order: TOrder) => {
    userOrder[side].push(order)
  }

  const unSubscribe = (unSubscribeIndex: number) => {
    subscribers = subscribers.filter((_, index) => index !== unSubscribeIndex)
  }

  const destroy = () => {
    window.clearInterval(intervalId)
    subscribers = []
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
    callback(currentData)
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
  }, [])

  return { destroy, unSubscribe, subscribe, addOrder, produceData }
}

export default useOrderBookStream
