import styled from 'styled-components';

const ContainerButtons = styled.div `
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    height: 50vh;
@media(max-width: 670px ){
    justify-content: space-between;
    flex-direction: row;
}

`
export {ContainerButtons}
