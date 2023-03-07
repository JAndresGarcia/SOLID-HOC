import { useState } from 'react'

const withSearch = (WrappedComponent) => {
  const WithSearch = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const filterResults = () => {
      if (!props.data) {
        return [];
      }
      return props.data.results.filter((character) => character.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return (
      <>
        <WrappedComponent {...props} filteredResults={filterResults()} />
      </>
    )
  }

  return WithSearch
}

export default withSearch
