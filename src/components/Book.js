const Book = (x) => {
    console.log(x)
    // if (!x.title) return <h3>No information provided</h3>
    const author = x.author || <strong>Pesho</strong>;
    const Author = () => x.author || <strong>Pesho</strong>;
    const selectedObj = Object.assign({},x.stateComp) 
    const selectObj = Object.assign({}, selectedObj[x.id])
    const select = selectObj.isSelected
    console.log(select)
    return (
        <article className={select||x.isSelected ? 'selected-book' : ''} onClick={()=>x.clickHandler(x.id)}>
            <h3 className='book-article' onClick={() => console.log(`${x.title} is clicked!`)}>
                {x.title ? <i>{x.title}</i> : 'No Title Provided'}
            </h3>
            <p>{x.description || 'Default Description'}</p>
            <p><strong>{author}</strong></p>
            <p><strong><Author/></strong></p>
        </article>
    )
};
export default Book;