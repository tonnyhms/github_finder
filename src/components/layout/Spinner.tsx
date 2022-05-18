import spinnerGif from './spinner.gif'

export function Spinner (){
    return (
        <>
            <img src={spinnerGif} alt="Loading..." className='w-48 m-auto block' />
        </>

    )
}