import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import SimpleSlider from "./HorizontalSlide";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";
import axios from "axios";
import Navbar from "./Navbar";
import noresults from "../assets/images/noresults.png";

const Exercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState("");
  const [selectedbodypart, setSelectedbodypart] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  let showLoader = false;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (selectedbodypart === "all") {
        exercisesData = await axios.get(
          "https://workout-trainer-api.vercel.app/allexercises",
          {
            headers: {
              "x-token": localStorage.getItem("token"),
            },
          }
        );
      } else {
        exercisesData = await axios.get(
          `https://workout-trainer-api.vercel.app/exercises/${selectedbodypart}`,
          {
            headers: {
              "x-token": localStorage.getItem("token"),
            },
        );
      }

      setExercises(exercisesData.data);
    };

    fetchExercisesData();
  }, [selectedbodypart]);

  const changeShowloader = () => {
    showLoader = true;
  };

  if (!exercises) {
    changeShowloader();
  }

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await axios.get(
        "https://workout-trainer-api.vercel.app/allexercises",
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );

      const searchedExercises = exercisesData.data.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setExercises(searchedExercises);

      setSearch("");
    }
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginatesmall = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 480, behavior: "smooth" });
  };

  const paginatelarge = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 560, behavior: "smooth" });
  };

  const organs = [
    "All",
    "Back",
    "Cardio",
    "Chest",
    "Lower arms",
    "Lower legs",
    "Shoulders",
    "Upper arms",
    "Upper legs",
    "Waist",
  ];
  console.log(showLoader);
  return (
    <Container>
      <Navbar />
      <Searchbar>
        <h1 style={{ marginTop: "30px", marginBottom: "20px" }}>
          Awesome Exercises You Should Know
        </h1>
        <div>
          <input
            type="text"
            placeholder="Search Excercises"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </Searchbar>

      <SimpleSlider
        bodyParts={organs}
        selectedbodypart={selectedbodypart}
        setSelectedbodypart={setSelectedbodypart}
      />
      <div id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
        <h4
          style={{
            fontWeight: "bold",
            marginBottom: "46px",
            marginLeft: "20px",
            fontSize: "26px",
          }}
        >
          Showing Results
        </h4>

        {showLoader ? <Loader /> : null}

        {!currentExercises.length ? null : (
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {currentExercises.map((exercise, idx) => (
              <ExerciseCard key={idx} exercise={exercise} />
            ))}
          </ul>
        )}
        {!currentExercises.length && !showLoader ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "100px",
            }}
          >
            <img
              src={noresults}
              alt="no results"
              style={{ height: "200px", marginBottom: "30px" }}
            />
            <h1 style={{ marginBottom: "30px" }}>No Results Found</h1>
            <p>We can't find any item matching your search</p>
          </div>
        ) : null}
        <Stack
          sx={{ mt: { lg: "114px", xs: "70px" } }}
          mb="50px"
          alignItems="center"
        >
          {exercises.length > 6 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginatelarge}
              size="large"
              className="pagination-large"
            />
          )}
        </Stack>
        <Stack
          sx={{ mt: { lg: "114px", xs: "70px" } }}
          mb="50px"
          alignItems="center"
        >
          {exercises.length > 6 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginatesmall}
              size="small"
              className="pagination-small"
            />
          )}
        </Stack>
      </div>
    </Container>
  );
};

export default Exercises;

const Searchbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 200px;

  input {
    height: 50px;
    width: 500px;
    background-color: "#fff";
    padding: 10px;
    font-weight: 700;
    color: #000;
    border: none;
    outline: none;
  }
  button {
    height: 50px;
    width: 100px;
    border: none;
    background-color: #ff2625;
    color: #fff;
    text-transform: "none";
    right: "0px";
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
    input {
      width: 300px;
    }
    button {
      height: 30px;
      width: 80px;
    }
  }
  @media screen and (max-width: 568px) {
    h1 {
      font-size: 30px;
    }
    input {
      width: 300px;
      height: 30px;
    }
    button {
      height: 30px;
      width: 80px;
    }
  }
`;

const Container = styled.div`
  .pagination-small {
    display: none;
  }
  .pagination-large {
    display: inline;
  }

  @media screen and (max-width: 568px) {
    .pagination-large {
      display: none;
    }
    .pagination-small {
      display: inline;
    }
  }
`;
