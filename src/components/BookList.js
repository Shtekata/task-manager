import { Component } from 'react';
import Book from './Book';

class BookList extends Component {
    constructor(props) {
        super()
        this.state = { compId: {}, isSelected: false }
    }
    bookClicked = (x) => console.log(`The book ${x} has been added to basket!`)
    changeIsSelected = (id) => {
        if (!id) return this.setState(x => ({ isSelected: x.isSelected ? x.isSelected = false : x.isSelected = true }));
        let compId = { ...this.state.compId }
        if (!compId[id]) compId[id] = { isSelected: false }
        compId[id].isSelected ? compId[id].isSelected = false : compId[id].isSelected = true;
        this.setState({ compId })
        console.log(this.state)
    }
    render() {
        let idComp = 0
        return (
            <div>
                <h2>Our Book Collection</h2>
                <ul className="book-list">
                    {
                        this.props.books.map(x =>
                            <li>
                                <Book
                                    id={idComp = idComp + 1}
                                    title={x.title}
                                    description={x.description}
                                    author={x.author}
                                    stateComp={this.state.compId}
                                    clickHandler={(y) => {
                                    this.bookClicked.bind(this, x.title)()
                                    this.changeIsSelected.bind(this, y)()
                                    x.title = 'Pehso'
                                    console.log(y)
                                }} />
                            </li>
                        )
                    }
                    <li><Book
                        title="K'vo stava"
                        description='Ala-Bala'
                        author='Kuku-Muku'
                        isSelected={this.state.isSelected}
                        clickHandler={() => this.changeIsSelected()} />
                    </li>
                </ul>
            </div>
        );
    }
}

export default BookList;