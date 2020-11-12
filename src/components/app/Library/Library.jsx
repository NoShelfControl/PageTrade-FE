/* eslint-disable max-len */
import React, { Component } from 'react';
import styles from './Library.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getBooks } from '../../../services/books-api';
import ReactModal from 'react-modal';
import Book from './Book';


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

/*
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);
  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

export default class Library extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      selected: [],
      selectedItem: '',
      showModal: false,
      search: '',
      searchResults: []
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  handleSearch = async() => {
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
      items.push(book);
      this.setState({ items });
    }

    alertItem = (draggableId) => {
      const selectedItem = this.state.selected.find(x => x.id === draggableId);
      selectedItem.isForTrade = true;
      this.setState({ selectedItem });
    }

    render() {
      return (
        <div className={styles.container}>
          <button onClick={this.handleOpenModal}>ADD</button>
          <ReactModal 
            styles={customStyles}
            isOpen={this.state.showModal}
            contentLabel="SearchBox"
          >
            <input onChange={this.handleSearchChange} />
            <button onClick={this.handleSearch}>Search</button>
            <ul>
              {this.state.results ? this.state.results.map(book => (
                <li key={book.id} onClick={() => this.addToList(book)}>{book.title}</li>
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
            <Droppable droppableId="droppable2">
              {(provided, snapshot) => (
                <div
                  className={styles.rightBox}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}>
                  {this.state.selected.map((item, index) => (
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
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      );
    }
}
