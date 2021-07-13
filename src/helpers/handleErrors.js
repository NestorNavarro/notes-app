import { addRemoveClassName } from "./addRemoveClass";

export const handleErrors = (flag, input, setError) => {
    if(flag){
        addRemoveClassName(input, 'auth__input', 'auth__input-alert-error');
        setError(flag);
    } else {
        addRemoveClassName(input,'auth__input-alert-error', 'auth__input');
        setError(flag);
    }
}