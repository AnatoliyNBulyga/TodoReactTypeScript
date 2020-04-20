import React, {useRef} from "react";

interface TodoFormProp {
    onAdd(title: string) :void
}

const TodoForm: React.FC<TodoFormProp> = ({onAdd}) => {
    const ref = useRef<HTMLInputElement>(null);
   /* const [title, setTitle] = useState<string>('');
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
       setTitle(event.target.value)
    }*/
    const keyPressHandler = (event: React.KeyboardEvent) => {
       if (event.key === 'Enter') {
           onAdd(ref.current!.value);
           ref.current!.value = '';
           /*console.log(title);
           setTitle('');*/
       }

    }
    return (
        <div className="imput-field mt2">
            <input
                ref={ref}
                /*onChange={changeHandler}*/
                onKeyPress={keyPressHandler}
                /*value={title}*/
                type="text"
                id="title"
                placeholder="Введите название заметки"/>
        </div>
    );
}
export default TodoForm;