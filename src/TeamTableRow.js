// import { React } from "react";

export const TeamTableRow = (props) => {
  return (
    <tr
      key={props.index}
      style={{
        width: "100%",
        border: "1px solid green",
        fontSize: "2rem",
        textAlign: "center",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <td>{props.index}</td>
      <td>
        <img style={{ width: "20px", height: "20px" }} src={props.crest}></img>
      </td>
      <td>{props.name}</td>
      <td>{props.founded}</td>
      <td>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={props.addToFavoriteInputHandler}
        />
      </td>
    </tr>
  );
};
