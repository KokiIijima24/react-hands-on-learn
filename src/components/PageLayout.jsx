import HeaderMenu from './HeaderMenu'

export const PageLayout = (props) => {

  return (
    <>
      <div className='bg-gray-100 font-sans leading-normal tracking-normal'>
        <HeaderMenu />

        {/* Container */}
        <div className='container w-full md:max-w-3xl mx-auto pt-20'>
          {props.children}
        </div>
      </div>
    </>
  )
}
