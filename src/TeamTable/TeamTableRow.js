import "./TeamTableRow.css";
import { useContext } from "react";
import { AddToFavoriteInputHandlerContext } from "../App";

export const TeamTableRow = (team) => {
  const addToFavoriteInputHandlerContext = useContext(
    AddToFavoriteInputHandlerContext
  );
  return (
    <tr>
      <td>{team.index}</td>
      <td>
        <img
          className="crestImage"
          src={team.strTeamBadge}
          alt="team logo"
        ></img>
      </td>
      <td>{team.strTeam}</td>
      <td>{team.intFormedYear}</td>
      <td>
        <input
          type="checkbox"
          checked={team.isChecked}
          onChange={() => addToFavoriteInputHandlerContext(team.index)}
        />
      </td>
    </tr>
  );
};
