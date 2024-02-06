export default function bgColor() {
    const bgColor = ['#FF0000', '#1C92FF', '#FE1A1A5', '#BD560B']
    const randomColor = Math.floor(Math.random() * bgColor.length)
    return bgColor[randomColor]
}