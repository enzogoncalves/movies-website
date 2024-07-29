import { Crew } from "../../../interfaces/Crew";
import { Genre } from "../../../interfaces/Movie";

export function formatGenres(genres: Genre[]) {
  let genreString = '';
  genres.forEach((genre, index) => {
    if (index == genres.length - 1) {
      genreString += `${genre.name}`
    } else {
      genreString += `${genre.name}, `
    }
  })

  return genreString;
}

export function formatCredits(crew: Crew[]) {
  let formatedCrew: { crew: Array<{name: string; jobs: Array<string>}>} = { crew: [] };

  for (let i = 0; i < crew.length; i++) {
    let crewIndex;
    const found = formatedCrew.crew.find((element, index) => {
      crewIndex = index;
      return element.name == crew[i].name
    });
    if (!found) {
      formatedCrew.crew = [...formatedCrew.crew, { name: crew[i].name, jobs: [crew[i].job] }]
    } else {
      formatedCrew.crew[crewIndex!].jobs.push(crew[i].job)
    }
  }

  formatedCrew.crew = formatedCrew.crew.sort((a, b) => b.jobs.length - a.jobs.length).slice(0, 6)

  return formatedCrew.crew
}

export function formatDate(releaseDate: string) {
  let dateData;
  if (releaseDate.length == 10) {
    dateData = {
      year: releaseDate.split('-')[0],
      date: `${releaseDate.split('-')[1]}-${releaseDate.split('-')[2]}-${releaseDate.split('-')[0]}`
    }
  } else {
    let date = releaseDate.slice(0, releaseDate.indexOf('T')).split('-')
    const day = Number(date[2])
    let month = Number(date[1])
    const year = Number(date[0])
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    month = Number(months[month - 1]);

    dateData = {
      date: `${month} ${day}, ${year}`
    }
  }

  return dateData;
}

export function formatMediaDuration(runtime: number) {
	console.log(runtime)

  let hours = Math.floor(runtime / 60);
  let minutes = runtime - (hours * 60);
  if (minutes === 0) {
    return `${hours}h`;
  } else if (hours === 0) {
    return `${minutes}m`;
  } else {
    return `${hours}h ${minutes}m`;
  }
}