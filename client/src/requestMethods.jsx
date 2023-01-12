import axios from "axios"

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTI3OGEyMTU1MWEzY2MwYTQ2MjllMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTYyODgzOSwiZXhwIjoxNjU5ODg4MDM5fQ.VwTZmBj9fLtqYPQE-rinsl-AuqK1QHqbsb4qJXaNfg4"

export const publicRequest = axios.create({
    baseURL:BASE_URL
})


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
    headers: { token: `Bearer ${TOKEN}` },
    header: { Authorization: `Bearer ${TOKEN}` },
  });