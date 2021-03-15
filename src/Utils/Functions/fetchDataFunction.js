import axios from "axios";

export const fetchData = async (callback) => {
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
