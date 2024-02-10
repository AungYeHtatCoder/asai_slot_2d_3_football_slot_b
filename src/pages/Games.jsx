import React from 'react'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL'

export default function Games() {
    let providerId = localStorage.getItem("provider_id");
    let gameTypeId = localStorage.getItem("gameType_id");
    
    const {data:games, loading, error} = useFetch(BASE_URL + "/gamedetail/" + providerId + "/game_type/" + gameTypeId);
    console.log(games);
  return (
    <>
        
    </>
  )
}
