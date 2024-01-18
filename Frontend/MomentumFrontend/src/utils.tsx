

const baseUrl = "http://localhost:5086/Momentum/api/";
export const getAllWorkouts = async () => {
    const res = await fetch(baseUrl + "getAllWorkouts");
    const data = await res.json();
    return await data;
    };