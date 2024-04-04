const HEAD = (
  <div className='w-[50px] h-[50px] rounded-full border-[5px] border-red-600 absolute top-[50px] right-[-20px]' />
)

const BODY = (
  <div className='w-[5px] h-[100px]  bg-red-600 absolute top-[100px] right-0' />
)
const RIGHT_ARM = (
  <div className='w-[100px] h-[5px] bg-red-600 absolute top-[127px] right-[-100px] rotate-[-45deg] origin-bottom-left' />
)

const LEFT_ARM = (
  <div className='w-[100px] h-[5px] bg-red-600 absolute top-[127px] right-[6px] rotate-[36deg] origin-bottom-right' />
)

const LEFT_LEG = (
  <div className='w-[100px] h-[5px] bg-red-600 absolute top-[195px] right-[6px] rotate-[-36deg] origin-top-right' />
)
const RIGHT_LEG = (
  <div className='w-[100px] h-[5px] bg-red-600 absolute top-[195px] right-[-100px] rotate-[36deg] origin-top-left' />
)

const BASE = <div className='w-[250px] bg-red-600 h-[10px] ' />
const POLE = <div className='h-[400px] w-[10px] bg-red-600 ml-[120px]' />
const HangmanSketch = () => {
  return (
    <div className='relative'>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className='h-[50px] w-[10px] bg-red-600 absolute top-0 right-0' />
      <div className='h-[10px] w-[200px] bg-red-600 ml-[120px]' />
      {POLE}
      {BASE}
    </div>
  )
}

export default HangmanSketch
