export default function getStyle(type , message , style){
    let output = style.replace(/%type%/g , type);
    output = output.replace(/%message%/g , message.trim());
    return output;
}