import { useFetch } from "../hooks/useFetch"

const Components = (props) => {

  const { data, error, loading } = useFetch("https://rickandmortyapi.com/api/character/")

  const filterResults = () => {
    if (!data) {
      return [];
    }
    return data.results.filter((character) => character.name.toLowerCase().includes(props.searchValue.toLowerCase()))
  }

  return (
    <>
      {loading ? "Loading" :
        (
          <>
            {error ? error.message :
              <ul>
                {filterResults().map((character) => <li key={character.id}>{character.name}</li>)}
              </ul>
            }
          </>
        )
      }
    </>
  )
}

export default Components
