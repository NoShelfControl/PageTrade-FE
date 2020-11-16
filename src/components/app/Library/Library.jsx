/* eslint-disable max-len */
import React, { Component } from 'react';
import styles from './Library.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getBooks, getUserBooks } from '../../../services/books-api';
import ReactModal from 'react-modal';
import Book from './Book';
import { move, reorder, getItemStyle, getListStyle } from '../../../utils/drag-functions';

export default class Library extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      selected: [],
      selectedItem: '',
      showModal: false,
      search: '',
      searchResults: [],
      show: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this); 
  }

  componentDidMount = async() => {
    const userBooks = await getUserBooks(this.props.match.params.id);
    this.setState({ items: userBooks });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }
    
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  }

  handleSearch = async(e) => {
    e.preventDefault();
    const results =  await getBooks(this.state.search);
    this.setState({ results });
  }

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
      droppable: 'items',
      droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = async(result) => {
      const { source, destination } = result;
      const draggableId = result.draggableId;


      // dropped outside the list
      if(!destination) {
        return;
      }

      if(source.droppableId === destination.droppableId) {
        const items = reorder(
          this.getList(source.droppableId),
          source.index,
          destination.index
        );

        let state = { items };

        if(source.droppableId === 'droppable2') {
          state = { selected: items };
        }
        this.setState(state);
      } else {
        const result = move(
          this.getList(source.droppableId),
          this.getList(destination.droppableId),
          source,
          destination
        );
        await this.setState({
          items: result.droppable,
          selected: result.droppable2,
        });
        this.alertItem(draggableId);
      }
    };

    addToList = (book) => {
      const items = this.state.items;
      if(book === items.find(x => x === book) || this.state.selected.find(x => x === book) === book) {
        alert('REPEAT BOOK');
      }
      else {      
        items.push(book);
        this.setState({ items });
        this.handleCloseModal();
      }
    };

    alertItem = (draggableId) => {
      const selectedItem = this.state.selected.find(x => x.id === draggableId);
      selectedItem.isForTrade = true;
      this.setState({ selectedItem });
    }

    render() {
      return (
        <>
          <button className={styles.addButton} onClick={this.handleOpenModal}>ADD</button>
          <div className={styles.container}>
            <ReactModal 
              styles={styles.modal}
              isOpen={this.state.showModal}
              contentLabel="SearchBox"
            >
              <form onSubmit={this.handleSearch}>
                <input onChange={this.handleSearchChange} />
                <button>Search</button>
              </form>
              <ul className={styles.resultList}>
                {this.state.results ? this.state.results.map(book => (
                  <div className={styles.resultItem} onClick={() => this.addToList(book)} key={book.id}>
                    <img src={book.image} />
                    <li>{book.title}</li>
                  </div>
                )
                ) : null}
              </ul>
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div className={styles.leftBox}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {this.state.items.length > 0 ? 
                      this.state.items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}>
                          {(provided, snapshot) => (
                            <Book
                              src={item.image}
                              name={item.title}
                              innerRef={provided.innerRef}
                              provided={provided}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            />
                          )}
                        </Draggable>
                    
                      )) : <div className={styles.addABook}>Add a book!</div>}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className={styles.middleDiv}>
                Drag a book to offer for trade
                <br />
                <img className={styles.arrow} src="src\assets\right-arrow.png" alt="right arrow" />
              </div>
              <Droppable droppableId="droppable2">
                {(provided, snapshot) => (
                  <div
                    className={styles.rightBox}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {this.state.selected.length > 0 ? this.state.selected.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}>
                        {(provided, snapshot) => (
                          <Book
                            src={item.image}
                            name={item.title}
                            innerRef={provided.innerRef}
                            provided={provided}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          />
                        )}
                      </Draggable>
                    )) 
                      : <div className={styles.booksToTrade}>Books to trade</div>}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </>
      );
    }
}
