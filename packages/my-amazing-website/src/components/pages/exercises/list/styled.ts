import styled from 'styled-components'

export const ExercisesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-top: 24px;
  overflow-y: auto;
  padding: 10px;
  width: 100%;
`

// grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
export const ListWrapper = styled.div`
  display: grid;
  column-gap: 12px;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(250px , 500px);
  row-gap: 12px;
  width: 100%;

  @media ${props => props.theme.devices.laptopMax} {
    grid-template-columns: 1fr;
  }
`

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  float: left;
  height: 100%;
  overflow-y: auto;
  padding: 12px;
  width: 100%;
}
`
