import styles from './todo.module.scss';
import { TodoItem } from '../../UI/TodoItem';
import { Button } from '../../UI/Buttons/Button';

// const colors = [{
//   id: 1,
//   color: 'blue',
// },{
//   id: 2,
//   color: 'tomato',
// },{
//   id: 3,
//   color: 'green',
// },{
//   id: 4,
//   color: 'violet',
// },{
//   id: 5,
//   color: 'meadowlark',
// },{
//   id: 6,
//   color: 'green',
// }]

const todoItems = [
  {
    title: 'Создать CRM',
    colorId: 1,
    isActive: false,
    id: 1,
  },
  {
    title: 'Создать Todolist',
    colorId: 2,
    isActive: true,
    id: 2,
  },
  {
    title: 'Создать Календарь',
    colorId: 3,
    isActive: true,
    id: 3,
  },
]

export function Todo() {
  return (
    <>
    <ul className={styles.list}>
    {todoItems && (
        todoItems.map(item => <TodoItem title={item.title} colorId={item.colorId} isActive={item.isActive} key={item.id} />)
      )}
    </ul>

      <div className={styles.btns}>
        <Button text={'Добавить'}/>
        <Button color={'danger'} text={'Удалить'}/>
      </div>
    </>
    
  );
}
