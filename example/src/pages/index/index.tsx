import { Component, PropsWithChildren } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button type='primary'>点击</Button>
        <Image
          mode='aspectFill'
          className='image-custom'
          src='https://b.bdstatic.com/searchbox/icms/searchbox/img/image-gif.gif'
        />
      </View>
    )
  }
}
