import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks/redux";
import { setLastFilledForm } from "../../store/reducers/forms.slice";

function ReactHookForm() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLastFilledForm(undefined));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return <form>ReactHookForm</form>;
}

export default ReactHookForm;
