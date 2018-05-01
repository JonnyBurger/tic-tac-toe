import React, {Component} from 'react';
import styled from 'styled-components';
import ButtonLink from './Link';
import MetaMaskLogo from './MetamaskLogo';

const ParentContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -8em;
`;
const LobbyContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 500px;
  border-radius: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ButtonContainer = styled.div``;

const UserProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 4em;
  margin-top: 2em;
`;

const Button = styled.button`
  width: 250px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 3em;
`;

const UserIcon = styled.svg`
  fill: #e4751b;
  width: 60px;
  height: 60px;
  border: 3px solid #e4751b;
  padding: 5px;
  border-radius: 50%;
`;

const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;
`;

const YourGames = styled.div``;

class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      ids: [],
      username: localStorage.getItem('username')
    };
  }
  componentDidMount() {
    let event = this.props.contract.events.Joined();
    console.log(event);
    // event.watch((err, res) => {
    //   console.log(err);
    //   console.log(res);
    // });
  }

  render(props) {
    return (
      <div>
        <ParentContainer>
          <UserProfileContainer>
            <Profile>
              <UserIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0c88.366 0 160 71.634 160 160s-71.634 160-160 160S96 248.366 96 160 167.634 0 256 0zm183.283 333.821l-71.313-17.828c-74.923 53.89-165.738 41.864-223.94 0l-71.313 17.828C29.981 344.505 0 382.903 0 426.955V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-37.045c0-44.052-29.981-82.45-72.717-93.134z" />
              </UserIcon>
              <UserName>{this.state.username}</UserName>
            </Profile>
          </UserProfileContainer>
          <div style={{marginTop: -110, marginBottom: 122}}>
            <MetaMaskLogo />
          </div>
          <Container>
            <h1>Lobby</h1>
            <p style={{fontSize: 22, marginTop: 0, marginBottom: 10}}>
              Please select an option
            </p>
            <LobbyContainer>
              <ButtonsContainer>
                <ButtonContainer>
                  <ButtonLink
                    width={250}
                    location={'mygames'}
                  >
                    My Games
                  </ButtonLink>
                </ButtonContainer>
                <ButtonContainer>
                  <ButtonLink
                    width={250}
                    location={'games/' + this.props.account.ethAddress}
                  >
                    Create Game
                  </ButtonLink>
                </ButtonContainer>
                <ButtonContainer>
                  <ButtonLink width={250} location={'games'}>
                    Join Game
                  </ButtonLink>
                </ButtonContainer>
                <ButtonContainer>
                  <Button>Make Bet</Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button>Join Bet</Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button>Rules</Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button>Log-Out</Button>
                </ButtonContainer>
              </ButtonsContainer>
            </LobbyContainer>
          </Container>
        </ParentContainer>
      </div>
    );
  }
}

export default Lobby;
