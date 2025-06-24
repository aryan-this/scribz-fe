export function Input({onChange, placeholder}: {onChange: () => void; placeholder: string }) {
    return(<div>
        <input className='px-4 py-2 ml-2 mt-2 border-black border-2 rounded-lg' placeholder={placeholder} type='text'  onChange={onChange}></input>
        
    </div>)
    
}