import { SimpleGrid } from '@chakra-ui/react'
import { Children, isValidElement, useMemo } from 'react'

export const ProductGrid = (props) => {
  const columns = useMemo(() => {
    const count = Children.toArray(props.children).filter(isValidElement).length
    return {
      base: Math.min(2, count),
      md: Math.min(3, count),
      lg: Math.min(4, count),
      xl: Math.min(6, count),
      // 2xl: Math.min(5, count),
      
    }
  }, [props.children])

  return (
    <SimpleGrid
    // border={"1px solid red"}
      columns={columns}
      columnGap={{ base: '4', md: '16' }}
      rowGap={{ base: '8', md: '14' }}
      {...props}
    />
  )
}