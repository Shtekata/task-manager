const Button = (x) => (
    <button className="counter" onClick={x.clickHandler}>Click me! I'm counter [{x.clicks}]</button>
)
export default Button;