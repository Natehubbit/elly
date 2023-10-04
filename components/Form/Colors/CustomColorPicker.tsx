import colorWheel from '@/assets/colorWheel.png'
import { Icon } from '@/components/Icon'
import { useOtsideClick } from '@/hooks/useOtsideClick'
import { CustomColorPickerMethods, CustomColorPickerProps } from '@/types/components/FormDTO.ts/ColorsDTO'
import { debounce } from '@/utils/helpers'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { ColorChangeHandler, SketchPicker } from 'react-color'
import ColorBtn from './ColorBtn'


const CustomColorPicker = forwardRef<CustomColorPickerMethods,CustomColorPickerProps>(({onSelect, onDelete},ref) => {
  const [show, setShow] = useState(false)
  const [color, setColor] = useState<string>()

  const picker = useRef<any>()

  const onDeleteColor = () => {
    console.log('DELETED',color)
    onDelete && onDelete(color)
    setColor(undefined)
  }

  const onToggle = () => {
    setShow(val=>!val)
  }

  const onHide = () => {
    setShow(false)
  }

  const onColorChange:ColorChangeHandler = (event) => {
    console.log('slesdsf',event.hex)
    setColor(event.hex)
    onHide()
  }

  const debounceClose = () => {

    console.log('debouncing')
    const debounceCb = debounce(onHide,100)
    debounceCb()
  }
  
  useOtsideClick<HTMLDivElement>(picker,debounceClose,show)

  useEffect(() => {
    onSelect && color && onSelect(color)
  }, [color])

  useImperativeHandle(
    ref,
    () => ({
      delete:onDeleteColor
    }),
    [],
  )

  return (
    <div className='relative'>
      <button type='button' onClick={onToggle} className='relative'>
        <Image src={colorWheel} height={50} width={50} alt='color picker' />
        <Icon svgProps={{className:'absolute bottom-0 left-[35px]', size:20}} color='primary' name='Edit2' />
      </button>
      <AnimatePresence>
        {show && <motion.div ref={picker} exit={{scale:0}}  className='left-[60px] bottom-[100%] absolute z-50' initial={{scale:0}} animate={{scale:1}}>
          <SketchPicker onChangeComplete={onColorChange} className='absolute' />
        </motion.div>}
        {color &&
          <div className='ml-[15px] inline-flex items-baseline'>
            <motion.button type='button' exit={{scale:0}} onClick={onDeleteColor} className='cursor-pointer absolute bg-white rounded-full -right-[100%] -top-1 z-20'>
              <Icon name='XCircle' svgProps={{size:20}} color='primary' />
            </motion.button>
            <div className='absolute -top-1'>
              <ColorBtn onDelete={onDeleteColor} closeable active={true} color={color} />
            </div>
          </div>
        }
      </AnimatePresence>
    </div>
  )
})

export default CustomColorPicker