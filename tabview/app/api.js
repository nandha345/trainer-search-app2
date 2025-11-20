import axios from 'axios';


const BaseURL ="https://tsa-nie-next.vercel.app"


const getTrainings =()=> axios.get('${BaseURL}/api/trainings')

export{getTrainings}