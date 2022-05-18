import { useState } from "react";
import ComendIcon from "../Icon/comendIcon";
import LikeIcon from "../Icon/likeIcon";
import ShareIcon from "../Icon/shareIcon";
import { colors } from "../../styles/theme";
export default function IconsContainer() {
  const STATES = {
    DESACTIVE: false,
    ACTIVE: true,
  };

  const [likes, setLikes] = useState({ count: 0, state: STATES.DESACTIVE });
  const [share, setShare] = useState({ count: 0, state: STATES.DESACTIVE });
  const [comends, setComends] = useState({ count: 0, state: STATES.DESACTIVE });

  const handleCount = (state, changeState) => {
    if (state.state === STATES.ACTIVE) {
      changeState({ count: state.count - 1, state: STATES.DESACTIVE });
    } else {
      changeState({ count: state.count + 1, state: STATES.ACTIVE });
    }
  };
  return (
    <>
      <section>
        <div onClick={() => handleCount(comends, setComends)}>
          <ComendIcon fill={comends.state ? colors.comend : colors.gray} />
          <span className={comends.state ? "active_comend" : "desactive"}>
            {comends.count}
          </span>
        </div>
        <div onClick={() => handleCount(share, setShare)}>
          <ShareIcon fill={share.state ? colors.share : colors.gray} />
          <span className={share.state ? "active_share" : "desactive"}>
            {share.count}
          </span>
        </div>
        <div onClick={() => handleCount(likes, setLikes)}>
          <LikeIcon fill={likes.state ? colors.like : colors.gray} />
          <span className={likes.state ? "active_like" : "desactive"}>
            {likes.count}
          </span>
        </div>
      </section>
      <style jsx>{`
        section {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 15px;
        }
        div {
          width: 20%;
          display: flex;
          justify-content: space-evenly;
          cursor: pointer;
        }
        .desactive {
          color: ${colors.gray};
        }
        .active_share {
          color: ${colors.share};
        }
        .active_like {
          color: ${colors.like};
        }
        .active_comend {
          color: ${colors.comend};
        }
      `}</style>
    </>
  );
}
