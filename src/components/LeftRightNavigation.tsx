import React, { useState, forwardRef, useImperativeHandle } from 'react'
import type { ForwardRefRenderFunction, ReactNode, MutableRefObject } from 'react'
import { Platform, StyleSheet, Animated, FlatList, View } from 'react-native'
import { usePanResponder } from '../hooks'

export type LeftRightNavigationMethods = {
  resetOffset: () => void
}

export type LeftRightNavigationProps = {
  onRightToLeft?: () => void
  onLeftToRight?: () => void
  distance: number
  children?: ReactNode
  flatListRef?: MutableRefObject<FlatList | null>
}

const _LeftRigthNavigation: ForwardRefRenderFunction<LeftRightNavigationMethods, LeftRightNavigationProps> = (
  { distance, children, onRightToLeft, onLeftToRight, flatListRef }, ref) => {
  const [offset, setOffset] = useState<number>(0)

  useImperativeHandle(ref, () => ({
    resetOffset() {
      setOffset(0)
    }
  }), [])

  const panResponder = usePanResponder({
    onPanResponderMove(e, s) {
      const { dx, dy } = s

      if (flatListRef) {
        flatListRef.current?.scrollToOffset({
          offset: offset - dy,
          animated: false
        })
        setOffset((offset) => offset - dy)
      }

      if (Math.abs(dy) < 30) {
        if (dx > distance) {
          onLeftToRight && onLeftToRight()
        } else if (dx < -distance) {
          onRightToLeft && onRightToLeft()
        }
      }
    }
  }, [])

  return (
    <Animated.View style={[styles.view]} {...panResponder.panHandlers}>
      {children}
    </Animated.View>
  )
}

export const LeftRightNavigation = forwardRef(_LeftRigthNavigation)

const styles = StyleSheet.create({
  view: {width: '100%', flex: 1, backgroundColor: 'transparent'}
})