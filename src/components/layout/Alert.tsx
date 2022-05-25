import { Info } from 'phosphor-react'


interface alertProps {
    alert: null | {
        msg: string,
        type: string,
    }
}

export function Alert({ alert }: alertProps){
    return (
        alert !== null ? (
            <div className={`flex items-center gap-2 w-full justify-center p-3 my-4 opacity-90 bg-[${alert.type}] text-dark`}>
                <Info />
                <span>{alert.msg}</span>
            </div>
        ): null
    )
}