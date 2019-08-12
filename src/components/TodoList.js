import React from 'react';
import style from './TodoList.css';

const TodoList = props =>(
	props.items.map(item =>
		<div className={style.list}>
			<div className={style.oneTask} key={item.id} onClick = {()=>props.remove(item.id)}>{item.text}</div>
		</div>
	)
);
export default TodoList;