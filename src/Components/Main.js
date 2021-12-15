import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt=""></img>
          <button>Share A Post</button>
        </div>
        <div>
          <button>
            <img src="/images/nav-home.svg" alt=""></img>
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/nav-home.svg" alt=""></img>
            <span>Video</span>
          </button>
          <button>
            <img src="/images/nav-home.svg" alt=""></img>
            <span>Event</span>
          </button>
          <button>
            <img src="/images/nav-home.svg" alt=""></img>
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt=""></img>
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/down-icon.svg" alt=""></img>
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImage>
            <img src="/images/linkedin-shared.jpg" alt=""></img>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/plus-icon.svg" alt=""></img>
                <img src="/images/plus-icon.svg" alt=""></img>
                <span>99</span>
              </button>
            </li>
            <li>
              <a>9 Comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/nav-notifications.svg" alt=""></img>
              <span>Like</span>
            </button>
            <button>
              <img src="/images/nav-notifications.svg" alt=""></img>
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/nav-notifications.svg" alt=""></img>
              <span>Share</span>
            </button>
            <button>
              <img src="/images/nav-notifications.svg" alt=""></img>
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  padding-top: 5px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        border: 1px solid #0a66c2;
        border-radius: 35px;
        padding-left: 16px;
        flex-grow: 1;
        background: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 8px;

      button {
        img {
          margin-right: 5px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  display: flex;
  a {
    margin-right: 8px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration-skip: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 13px;
          font-weight: 600;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 14px;
    color: #0a66c2;
    button {
      display: flex;
      background-color: lightgreen;
      border: none;
      border-radius: 25px;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 48px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;
export default Main;
