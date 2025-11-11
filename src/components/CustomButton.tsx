
interface styling{
    bg:string
    text:string
    padding?: string,
}



const CustomButton =(props:styling)=>{
    return (
        <button style={{
            backgroundColor:props.bg,
            padding: props.padding,
        }}
        
        >{props.text}</button>
    )
}

export default CustomButton



