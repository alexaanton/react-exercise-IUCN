import React from 'react';
import NavBar from "./components/NavBar";
import SpeciesTable  from "./components/SpeciesTable"
import Container from '@material-ui/core/Container';
function App (){
  return (
    <div>
      <NavBar />
      <br />
      <main>
        <Container>
          <SpeciesTable />
        </Container>
      </main>
      <br />
      <br />
      <pre>
      IUCN 2020. IUCN Red List of Threatened Species. Version 2020-1 <a href="https://www.iucnredlist.org">&lt;www.iucnredlist.org&gt;</a>
      </pre>
    </div>
  )
}
export default App;