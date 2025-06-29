/* 주어진 날짜로부터 현재까지의 경과 시간을 사람이 읽기 좋은 문자열로 반환하는 함수 */
export default function calculateTimeDifference(
  createdAt: string | number,
): string {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);

  const timeDifference = currentDate.getTime() - createdDate.getTime();
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (minutes < 1) {
    return '방금';
  } else if (minutes <= 59) {
    return `${minutes}분 전`;
  } else if (hours <= 23) {
    return `${hours}시간 전`;
  } else if (days <= 30) {
    return `${days}일 전`;
  } else if (months <= 11) {
    return `${months}달 전`;
  } else {
    return `${years}년 전`;
  }
}
