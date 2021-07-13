import React from "react";

// Here the ...props means, spread all of the passed props onto this element
// That way we don't have to define them all separately

function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
