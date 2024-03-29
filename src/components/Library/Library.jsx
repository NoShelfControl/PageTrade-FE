/* eslint-disable max-len */
import React, { Component } from 'react';
import styles from './Library.module.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  deleteBook,
  getBooks,
  getSingleUserBooks,
  postAction,
  postUserBook,
  updateTradeable,
} from '../../services/books-api';
import ReactModal from 'react-modal';
import Book from './Book';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {
  move,
  reorder,
  getItemStyle,
  getListStyle,
} from '../../utils/drag-functions';

export default class Library extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      selected: [],
      watchList: [],
      selectedItem: '',
      showModal: false,
      search: '',
      searchResults: [],
      show: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount = async() => {
    this.fetchAndSort();
  };

  fetchAndSort = async() => {
    const userBooks = await getSingleUserBooks();
    const notForTrade = userBooks.filter(
      (x) => x.isTradeable == false && x.isWatched == false
    );
    const forTrade = userBooks.filter((x) => x.isTradeable == true);
    const watched = userBooks.filter((x) => x.isWatched == true);
    this.setState({
      items: notForTrade,
      selected: forTrade,
      watchList: watched,
    });
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSearch = async(e) => {
    e.preventDefault();
    const results = await getBooks(this.state.search);
    this.setState({ results });
  };

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: 'items',
    droppable2: 'selected',
    droppable3: 'watchList',
  };

  getList = (id) => this.state[this.id2List[id]];

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
      if(source.droppableId === 'droppable3') {
        state = { watchList: items };
      }
      this.setState(state, () => this.alertItem(draggableId));
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );
      if(!result.droppable) {
        this.setState(
          {
            selected: result.droppable2,
            watchList: result.droppable3,
          },
          () => this.alertItem(draggableId)
        );
      }
      if(!result.droppable2) {
        this.setState(
          {
            items: result.droppable,
            watchList: result.droppable3,
          },
          () => this.alertItem(draggableId)
        );
      }
      if(!result.droppable3) {
        this.setState(
          {
            items: result.droppable,
            selected: result.droppable2,
          },
          () => this.alertItem(draggableId)
        );
      }
    }
  };

  // Adds book from google API to items list
  addToList = async(book) => {
    const items = this.state.items;
    if(
      book ===
      items.find(
        ((x) => x === book) ||
          this.state.selected.find((x) => x === book) ||
          this.state.watchList.find((x) => x === book)
      )
    ) {
      alert('REPEAT BOOK');
    } else {
      await postUserBook(book);
      await postAction({ actionType: 'ADD', book: book.title });
      await this.fetchAndSort();
      this.handleCloseModal();
    }
  };

  alertItem = async(draggableId) => {
    // Looks for matching ID of item in selected list
    let selectedItem = '';
    // Checks which list is undefined, sets other two lists
    selectedItem = this.state.items.find((x) => x.id === draggableId);
    if(selectedItem) {
      selectedItem.isTradeable = false;
      selectedItem.isWatched = false;
    }
    if(!selectedItem) {
      selectedItem = this.state.selected.find((x) => x.id === draggableId);
      if(selectedItem) {
        selectedItem.isTradeable = true;
        selectedItem.isWatched = false;
        await postAction({ actionType: 'TRADE', book: selectedItem.title });
      }
    }
    if(!selectedItem) {
      selectedItem = this.state.watchList.find((x) => x.id === draggableId);
      if(selectedItem) {
        selectedItem.isTradeable = false;
        selectedItem.isWatched = true;
        await postAction({ actionType: 'WATCH', book: selectedItem.title });
      }
    }
    // PUTs after setting state
    this.setState({ selectedItem }, () => {
      updateTradeable({ ...selectedItem }, selectedItem.id);
    });
  };

  deleteItemsItem = async(index) => {
    const newList = this.state.items;
    const removedElement = newList.splice(index, 1);
    await deleteBook(removedElement[0].googleId);
    this.setState({ items: newList });
  };

  deleteSelectedItem = async(index) => {
    const newList = this.state.selected;
    const removedElement = newList.splice(index, 1);
    await deleteBook(removedElement[0].googleId);
    this.setState({ selected: newList });
  };

  deleteWatchListItem = async(index) => {
    const newList = this.state.watchList;
    const removedElement = newList.splice(index, 1);
    await deleteBook(removedElement[0].googleId);
    this.setState({ watchList: newList });
  };

  render() {
    return (
      <>
        <Header />
        <section id={styles.Library}>
          <button className={styles.addButton} onClick={this.handleOpenModal}>
            SEARCH BOOKS
          </button>
          <div className={styles.container}>
            <ReactModal
              className={styles.modal}
              isOpen={this.state.showModal}
              contentLabel="SearchBox"
              ariaHideApp={false}
            >
              <form
                className={styles.bookSearchForm}
                onSubmit={this.handleSearch}
              >
                <input onChange={this.handleSearchChange} />
                <button>Search</button>
              </form>
              <ul className={styles.resultList}>
                {this.state.results
                  ? this.state.results.map((book) => (
                    <div
                      className={styles.resultItem}
                      onClick={() => this.addToList(book)}
                      key={book.id}
                    >
                      <img src={book.image} />
                      <li>{book.title}</li>
                    </div>
                  ))
                  : null}
              </ul>
              <button id={styles.closebutton} onClick={this.handleCloseModal}>
                X
              </button>
            </ReactModal>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div>
                    <h2>LIBRARY</h2>
                    <div
                      className={styles.shelf}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {this.state.items.length > 0 ? (
                        this.state.items.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Book
                                src={item.image}
                                name={item.title}
                                innerRef={provided.innerRef}
                                provided={provided}
                                handleDelete={() => this.deleteItemsItem(index)}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                              />
                            )}
                          </Draggable>
                        ))
                      ) : (
                        <div className={styles.columntext}>Add A Book!</div>
                      )}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>

              <Droppable droppableId="droppable2">
                {(provided, snapshot) => (
                  <div>
                    <h2>BOOKS FOR TRADE</h2>
                    <div
                      className={styles.shelf}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {this.state.selected.length > 0 ? (
                        this.state.selected.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Book
                                src={item.image}
                                name={item.title}
                                handleDelete={() =>
                                  this.deleteSelectedItem(index)
                                }
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
                      ) : (
                        <div className={styles.columntext}>Add A Book!</div>
                      )}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>

              <Droppable droppableId="droppable3">
                {(provided, snapshot) => (
                  <div>
                    <h2>WATCHLIST</h2>
                    <div
                      className={styles.shelf}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {this.state.watchList.length > 0 ? (
                        this.state.watchList.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Book
                                src={item.image}
                                name={item.title}
                                handleDelete={() =>
                                  this.deleteWatchListItem(index)
                                }
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
                      ) : (
                        <div className={styles.columntext}>Add A Book!</div>
                      )}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <Footer />
        </section>
      </>
    );
  }
}
