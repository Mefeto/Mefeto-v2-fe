import { parliamentList } from "@/lib/const/parliament-list";

export const getSNSInfo = (id: string) => {
  return parliamentList.find((element) => element.MONA_CD === id);
};
