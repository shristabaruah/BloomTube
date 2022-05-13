import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { empty } from "../../Assets";
import { CardWrapper, HorizontalCard, PageInfo } from "../../components";
import { useAuth, useHistory } from "../../Contexts";
import styles from "./history.module.css";
import { getHistory } from "../../utils/history";

const HistoryPage = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    historyState: { history },
    historyDispatch,
  } = useHistory();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getHistory(token, historyDispatch);
    }
  });
  return (
    <div className={styles.container}>
      {history.length > 0 ? (
        <div className={`body_style ${styles.history_container}`}>
          <PageInfo
            pg={"History"}
            length={history.length}
            video={history.length ? history[0] : null}
          />
          <CardWrapper>
            {history.map((historyVideo) => (
              <div key={historyVideo._id}>
                <HorizontalCard {...historyVideo} />
              </div>
            ))}
          </CardWrapper>
        </div>
      ) : (
        <div className={`body_style ${styles.empty}`}>
          <img
            src={empty}
            alt="empty"
            className={`responsive-img ${styles.empty_img}`}
          />
          <h1>No History</h1>
          <button
            className={` btn primary-solid ${styles.btn}`}
            onClick={() => navigate("/")}
          >
            Watch Some videos
          </button>
        </div>
      )}
    </div>
  );
};
export { HistoryPage };
