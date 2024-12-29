import { useEffect, useState } from "react";
import { Background, Container } from "./styles";
import { getMovieVideos } from "../../services/getData";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      //console.log(await getMovieVideos(movieId));
     setMovie (await getMovieVideos(movieId));
    }
    getMovies();
  }, []);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
          <button>X</button>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
