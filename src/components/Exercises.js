import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [exercisePerPage] = useState(6);
    useEffect(() => {
        const fetchExercisesData = async () => {
            let exerciseData = [];
            if (bodyPart === "all") {
                exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            } else {
                exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
            }
            setExercises(exerciseData)
        }
        fetchExercisesData()
    }, [bodyPart])
    const indexOfLastExercise = currentPage * exercisePerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisePerPage
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({ top: 1800, behavior: "smooth" })
    }
    return (
        <Box id="exercises"
            sx={{ mt: { lg: "110px" } }}
            mt="50px"
            p="20px"
        >
            <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>

            <Stack direction="row" sx={{ gap: { lg: "107px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercises.map((exercise, index) => (

                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                {exercises.length > 9 && (
                    <Pagination color="standard" shape='rounded' defaultPage={1} count={Math.ceil(exercises.length / exercisePerPage)} page={currentPage} onChange={paginate} size="large" />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises