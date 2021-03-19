import "./App.css";
import React, { useState, useEffect } from "react";
import { TeamTable } from "./TeamTable/TeamTable";
import { fetchData } from "./Utils/Functions/fetchDataFunction";

export const AddToFavoriteInputHandlerContext = React.createContext();

const App = () => {
  const [teamList, setTeamList] = useState([]);
  const [favoriteTeamList, setFavoriteTeam] = useState(
    (localStorage.getItem("favoriteTeams") &&
      JSON.parse(localStorage.getItem("favoriteTeams"))) ||
      []
  );
  const favoriteInputHandler = (id) => {
    if (favoriteTeamList.includes(id)) {
      setFavoriteTeam((prevState) => prevState.filter((item) => item !== id));
    } else {
      setFavoriteTeam((prevState) => [...prevState, id]);
    }
  };

  useEffect(() => fetchData(setTeamList), []);

  useEffect(
    () =>
      localStorage.setItem("favoriteTeams", JSON.stringify(favoriteTeamList)),
    [favoriteTeamList]
  );
  return (
    <div className="container">
      <AddToFavoriteInputHandlerContext.Provider value={favoriteInputHandler}>
        <TeamTable
          teamList={teamList}
          favoriteElements={favoriteTeamList}
          addToFavoriteInputHandler={favoriteInputHandler}
        />
      </AddToFavoriteInputHandlerContext.Provider>
    </div>
  );
};
export default App;
