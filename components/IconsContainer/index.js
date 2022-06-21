import { useState, useEffect } from "react";
import ComendIcon from "../Icon/comendIcon";
import LikeIcon from "../Icon/likeIcon";
import ShareIcon from "../Icon/shareIcon";
import { colors } from "../../styles/theme";
import { useRouter } from "next/router";
import { getUserActivity } from "../../firebase/client/query/userActivityQuery";
import { addNewActivity } from "../../services/userActivity";
import useUser from "../../hooks/useUser";
import { addShareTweet, unshareTweet } from "../../services/tweets";
import { getSharedTweetId } from "../../firebase/client/query/tweetsQuerys";
export default function IconsContainer({
  tweetId,
  comentCounts = 0,
  likeCounts = 0,
  shareCounts = 0,
  userId,
}) {
  const STATES = {
    DESACTIVE: false,
    ACTIVE: true,
  };
  const { user: currentUser } = useUser();
  const [likes, setLikes] = useState({
    count: likeCounts,
    state: STATES.DESACTIVE,
  });
  const [share, setShare] = useState({
    count: shareCounts,
    state: STATES.DESACTIVE,
  });
  const [coments, setComents] = useState({
    count: comentCounts,
    state: STATES.DESACTIVE,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (currentUser) {
      getUserActivity({ currentUserId: currentUser.uid }).then((activity) => {
        const activityBetweenUsers = activity[`user-id-${userId}`];
        if (activityBetweenUsers) {
          const selectedTweet = activityBetweenUsers.tweets.find(
            (tw) => tw.tweetId === tweetId
          );
          if (selectedTweet) {
            selectedTweet.comentStatus &&
              setComents({ count: comentCounts, state: STATES.ACTIVE });
            // --------------------------------------------------
            selectedTweet.likeStatus &&
              setLikes({ count: likeCounts, state: STATES.ACTIVE });
            // ---------------------------------------------------
            selectedTweet.shareStatus &&
              setShare({ count: shareCounts, state: STATES.ACTIVE });
          }
        }
        setLoading(false);
      });
    }
  }, [currentUser]);
  const router = useRouter();

  const handleCount = (state, changeState, type) => {
    if (state.state === STATES.ACTIVE) {
      changeState({ count: state.count - 1, state: STATES.DESACTIVE });
    } else {
      changeState({ count: state.count + 1, state: STATES.ACTIVE });
    }
    addNewActivity({ type, tweetId, targetUserId: userId });
  };

  if (loading) return <></>;
  if (currentUser)
    return (
      <>
        <section>
          <div
            onClick={() => {
              router.push(`/compose/tweet/${tweetId}`);
            }}
          >
            <ComendIcon fill={coments.state ? colors.comend : colors.gray} />
            <span className={coments.state ? "active_comend" : "desactive"}>
              {coments.count}
            </span>
          </div>
          <div
            onClick={async () => {
              if (share.state === STATES.DESACTIVE) {
                addShareTweet({ tweetId });
                handleCount(share, setShare, "share");
              } else if (share.state === STATES.ACTIVE) {
                // buscamos el nuevo tweet que se creo al momento de compartir este tweet
                const tweetSharedId = await getSharedTweetId({
                  originalTweetId: tweetId,
                });
                // borramos el tweet que que se creo al momento que el usuario compartió
                unshareTweet({ tweetId: tweetSharedId });
                handleCount(share, setShare, "unShare");
              }
            }}
          >
            <ShareIcon fill={share.state ? colors.share : colors.gray} />
            <span className={share.state ? "active_share" : "desactive"}>
              {share.count}
            </span>
          </div>
          <div
            onClick={() => {
              const type = likes.state === STATES.ACTIVE ? "dislike" : "like";
              handleCount(likes, setLikes, type);
            }}
          >
            <LikeIcon
              fill={likes.state ? colors.like : colors.gray}
              state={likes.state}
            />
            <span className={likes.state ? "active_like" : "desactive"}>
              {likes.count}
            </span>
          </div>
        </section>
        <style jsx>{`
          section {
            display: flex;
            width: 100%;
            justify-content: space-around;
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
