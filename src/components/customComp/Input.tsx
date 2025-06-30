export function Input({ref, placeholder}: { placeholder: string; ref?: any }) {
    return(<div>
        <input ref={ref} className='px-4 py-2 ml-2 mt-2 border-black border-2 rounded-lg w-50' placeholder={placeholder} type='text' ></input>
        
    </div>)
    
}