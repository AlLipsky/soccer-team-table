// import { React } from "react";
import { Table } from "react-bootstrap";
import { TeamTableRow } from "./TeamTableRow";

export const TeamTable = ({
  teamList,
  addToFavoriteInputHandler,
  favoriteElements,
}) => {
  const teamRowsArray =
    teamList.map((item, index) => {
      return (
        <TeamTableRow
          index={index + 1}
          // team={item}
          crest={item.strTeamBadge}
          // {...item}
          name={item.strTeam}
          founded={item.intFormedYear}
          isChecked={favoriteElements.includes(index + 1)}
          addToFavoriteInputHandler={() => addToFavoriteInputHandler(index + 1)}
        />
      );
    }) || [];
  return (
    <Table
      striped
      bordered
      style={{ fontSize: "2rem", alignContent: "right", margin: "1rem" }}
    >
      <thead>
        <tr>
          <th></th>
          <th>Crest</th>
          <th>Team name</th>
          <th>founded</th>
          <th>Add to favorite</th>
        </tr>
      </thead>
      <tbody>{teamRowsArray}</tbody>
    </Table>
  );
};
