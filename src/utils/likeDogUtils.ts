import { DogsData } from './../type/dog';

/**
 * 좋아요 강아지 데이터
 * @param {string} id 
 * @returns {object | null} - like dogs data
 */
export const getLikeDog = () => {
  const likeData = localStorage.getItem("likeDogs");
  if (likeData) {
    return JSON.parse(likeData);
  }
  return [];
}

/**
 * 좋아요 체크
 * @param {string} id
 * @returns {boolean} 좋아요 T/F
 */
export const checkLikeDog = (id: string) => {
  const likeDogs: DogsData[] = getLikeDog();
  if (likeDogs) {
    return likeDogs.findIndex(item => item.id === id) !== -1 ? true : false;
  }
  return false;
}

/**
 * 좋아요 설정/해제
 * @param {string} id
 * @param {string} url
 * @param {number} width
 * @returns 없음
 */
export const dogLikeToggle = ({ id, url, width }: DogsData, doLike: boolean) => {
  const likeDogs: DogsData[] = getLikeDog();

  if (doLike) {
    const addLikeDogs = [
      ...likeDogs, {
        id, url, width
      }
    ];
    localStorage.setItem("likeDogs", JSON.stringify(addLikeDogs));
  } else {
    const delLikeDogs = likeDogs.filter(item => item.id !== id);
    localStorage.setItem("likeDogs", JSON.stringify(delLikeDogs));
  }
}
