interface IScrollData {
  scrollTop: number,
  scrollSize: number,
  offset: number, // 0.0 -> 1.0
}

const scrollData: IScrollData = {
  scrollTop: 0,
  scrollSize: 0,
  offset: 0
}

export const useScrollData = () => {
  return scrollData;
}
