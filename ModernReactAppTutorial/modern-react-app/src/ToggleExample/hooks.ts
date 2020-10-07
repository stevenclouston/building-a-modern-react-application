import * as React from "react";

export const useToggle = (initial: boolean): [string, () => void] => {
  const [toggleState, setToggled] = React.useState(initial);

  const toggleStatus: string = toggleState ? "Liked" : "Like";

  return [
    toggleStatus,
    React.useCallback(() => {
      return setToggled((toggleState) => !toggleState);
    }, [toggleState]),
  ];
};
