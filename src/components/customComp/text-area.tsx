export function Textarea({onChange, placeholder}:{onChange?:()=> void; placeholder: string}){
    return (<div>
        <textarea placeholder={placeholder} onChange={onChange} className='px-4 py-2 ml-2 mt-2 border-black border-2 rounded-lg max-w-full'>

        </textarea>
    </div>)
}

