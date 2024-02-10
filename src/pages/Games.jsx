import React from 'react'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL'

export default function Games() {
    let providerId = localStorage.getItem("provider_id");
    let gameTypeId = localStorage.getItem("gameType_id");
    let auth = localStorage.getItem("authToken");
    let gameTitle = localStorage.getItem("title");
    
    const {data:games, loading, error} = useFetch(BASE_URL + "/gamedetail/" + providerId + "/game_type/" + gameTypeId);
    // console.log(games);
  return (
    <>
    <div className="container-fluid my-5">
        <h3 className='text-center mb-5 fw-bold'>{gameTitle}</h3>
        <div className="row">
          {games &&
            games.map((game, index) => (
              <div
                className="col-lg-2 col-md-3 col-4 mb-4 text-center"
                key={index}
              >
                {auth && (
                  <>
                    <div
                      onClick={() => launchGame(game.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={game.image}
                        className="img-fluid rounded shadow"
                        alt=""
                      />
                      <p className="text-white mt-3">{game.name_en}</p>
                    </div>
                  </>
                )}
                {!auth && (
                  <Link className="text-decoration-none" to={"/login"}>
                    <img
                      src={game.image}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                    <p className="text-white mt-3">{game.name_en}</p>
                  </Link>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
