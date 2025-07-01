export function Textarea({ref, placeholder}:{ref?:any ; placeholder: string}){
    return (<div>
        <textarea ref={ref} placeholder={placeholder} className='px-4 py-2 ml-2 mt-2 border-black border-2 rounded-lg max-w-full'>

        </textarea>
    </div>)
}

