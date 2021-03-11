import "./App.css";
import { React, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { TeamTable } from "./TeamTable";

const fetchData = async (callback) => {
  try {
    const { data } = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    );
    const teams = data.teams.map((team) => ({ ...team, isChecked: false }));
    callback(teams);
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [teamList, setTeamList] = useState([]);
  const [favoriteTeamInputChecked, setFavoriteTeam] = useState(
    (localStorage.getItem("favoriteTeams") &&
      JSON.parse(localStorage.getItem("favoriteTeams"))) ||
      []
  );

  const favoriteInputHandler = useCallback(
    (id) => {
      if (favoriteTeamInputChecked.includes(id)) {
        setFavoriteTeam((prevState) => prevState.filter((item) => item !== id));
      } else {
        setFavoriteTeam((prevState) => [...prevState, id]);
      }
    },
    [favoriteTeamInputChecked, setFavoriteTeam]
  );

  useEffect(() => fetchData(setTeamList), []);

  useEffect(
    () =>
      localStorage.setItem(
        "favoriteTeams",
        JSON.stringify(favoriteTeamInputChecked)
      ),
    [favoriteTeamInputChecked]
  );

  return (
    <div className="container">
      <TeamTable
        teamList={teamList}
        favoriteElements={favoriteTeamInputChecked}
        addToFavoriteInputHandler={favoriteInputHandler}
      />
    </div>
  );
}
export default App;
