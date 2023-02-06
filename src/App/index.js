import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { ChangeAlert } from '../ChangeAlert';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error} // render prop -> accende desde TodoList como props.error
        loading={loading} // render prop -> accende desde TodoList como props.loading
        totalTodos={totalTodos} // render prop -> accende desde TodoList como props.totalTodos
        searchedTodos={searchedTodos} // render prop -> accende desde TodoList como props.searchedTodos
        searchText={searchValue} // render prop -> accende desde TodoList como props.searchText
        onError={() => <TodosError />} // render prop -> accende desde TodoList como props.onError()
        onLoading={() => <TodosLoading />} // render prop -> accende desde TodoList como props.onLoading()
        onEmptyTodos={() => <EmptyTodos />} // render prop -> accende desde TodoList como props.onEmptyTodos()
        onEmptySearchResults={ // render prop -> accende desde TodoList como props.onEmptySearchResults(props.searchText)
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
      >
        {todo => (
          // render function -> en el componente TodoList se debe llamar
          // como props.children si queremos renderizar una render function
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;
