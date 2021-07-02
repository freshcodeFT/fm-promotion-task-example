import cx from 'classnames';
import CONSTANTS from 'constants/index.js';
import useTheme from 'hooks/useTheme';
import { CurrentUserContext, UsersListContext, TasksContext } from 'contexts';
import './App.sass';
import { useReducerLoader } from 'hooks';
import { userReducer, usersListReducer, taskReducer } from 'reducers';

function App () {
  const themeState = useTheme();
  const usersListState = useReducerLoader(usersListReducer, {
    link: '/users.json',
  });
  const currentUserState = useReducerLoader(userReducer, {
    link: '/users.json',
    payLoad: { userId: 2 },
  });
  const tasksState = useReducerLoader(taskReducer, {
    link: '/tasks.json',
  });
  console.group(1);
  console.log(usersListState);
  console.log(currentUserState);
  console.log(tasksState);
  console.groupEnd();
  return (
    <UsersListContext.Provider value={usersListState}>
      <CurrentUserContext.Provider value={currentUserState}>
        <TasksContext.Provider value={tasksState}>
          <div
            className={cx('mainWrapper', {
              ['lightTheme']: themeState.theme === CONSTANTS.THEMES.LIGHT,
              ['darkTheme']: themeState.theme === CONSTANTS.THEMES.DARK,
            })}
          >
            <button onClick={themeState.toggleTheme}>Change Theme</button>
            <h1 className='pageHeading'>Main page</h1>
            <p className='content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut
              nam aliquid dignissimos veritatis eligendi quis unde labore
              voluptatem aperiam voluptatum ullam, iusto placeat? Nesciunt at
              temporibus est aperiam molestiae illum! Fugit excepturi quia,
              officia quasi illo tempore earum molestiae culpa, corporis nisi ea
              eius inventore aut itaque, accusantium quis sequi nulla sit. Quo
              cupiditate nesciunt veritatis voluptatibus nulla labore aspernatur
              reprehenderit tempore iusto natus dignissimos incidunt, omnis
              recusandae accusamus dolorum laborum deleniti aliquam provident
              inventore eligendi debitis est amet! Rerum aliquam hic culpa
              consequatur sit expedita suscipit, dignissimos maiores distinctio
              nihil pariatur, aliquid quis id ratione nostrum at possimus.
            </p>
          </div>
        </TasksContext.Provider>
      </CurrentUserContext.Provider>
    </UsersListContext.Provider>
  );
}

export default App;
