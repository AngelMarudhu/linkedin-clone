import styled from "styled-components";

const RightSide = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add Your Feed!</h2>
          <img src="/images/feed-icon.svg" alt=""></img>
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommandation>
          View All Your Recommandations
          <img src="/images/right-icon.svg" alt=""></img>
        </Recommandation>
      </FollowCard>
      <BannerCard>
        <img src="/images/Linkedin-Profile.jpg" alt=""></img>
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  padding: 12px;
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 15px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
      border: 2px solid black;
      padding: 16px;
      align-items: center;
      border-radius: 20px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 428px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M0,0v512h512V0H0z M462.452,462.452H49.548V49.548h412.903V462.452z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M371.613,231.226v-49.548h-41.29v-41.29h-49.548v41.29h-49.548v-41.29h-49.548v41.29h-41.29v49.548h41.29v49.548h-41.29 v49.548h41.29v41.29h49.548v-41.29h49.548v41.29h49.548v-41.29h41.29v-49.548h-41.29v-49.548H371.613z M280.774,280.774h-49.548 v-49.548h49.548V280.774z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
  background-size: contain;
  background-position: center;
  width: 48px;
  height: 48px;
  margin-right: 8px;
  border-radius: 50%;
  opacity: 0.7;
`;
const Recommandation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-top: 20px;
`;

const BannerCard = styled(FollowCard)`
  img {
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
`;

export default RightSide;
