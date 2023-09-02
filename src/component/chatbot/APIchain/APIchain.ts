import fetchFromAPI from "./fetchFromAPI";

async function APIchain(query: string) {
  const totalResponse = await fetchFromAPI(
    "법령정보지식베이스 일상용어 조회 API",
    {
      query: query,
      display: "10",
    }
  )
    .then((data) => {
      if (data.dlytrmSearch.검색결과개수._text === 0) return null;
      return [data.dlytrmSearch.일상용어]
        .flat()
        .map((word) => word.용어간관계링크._cdata.match(/(?<=(MST=))\d+/g)[0]);
    })
    .then(async (MSTs) => {
      if (MSTs === null) return null;
      return await Promise.all(
        MSTs.map(
          async (MST) =>
            await fetchFromAPI(
              "법령정보지식베이스 일상용어-법령용어 연계 API",
              {
                MST: MST,
              }
            )
        )
      );
    })
    .then(async (data) => {
      if (data === null) return null;
      return await Promise.all(
        data
          .flat()
          .map((data1) => data1.dlytrmRltService.일상용어.연계용어)
          .flat()
          .map(
            (data1) => data1.조문간관계링크._cdata.match(/(?<=(MST=))\d+/g)[0]
          )
          .map(
            async (MST) =>
              await fetchFromAPI("법령정보지식베이스 법령용어-조문 연계 API", {
                MST: MST,
              })
          )
      );
    })
    .then((data) => {
      if (data === null) return [];
      return data
        .map((data1) => {
          if (data1["lstrmRltJoService"] === undefined) return null;
          return data1.lstrmRltJoService.법령용어.연계법령;
        })
        .flat()
        .map((law) => {
          if (law === null) return null;
          return {
            조번호: law.조번호._text,
            조가지번호: law.조가지번호._text,
            법령명: law.법령명._cdata,
            조문내용: law.조문내용._cdata,
          };
        })
        .map((law) => {
          if (law === null) return null;
          try {
            return {
              종합법령명:
                `${law.법령명} 제${law.조번호}조` +
                (law.조가지번호 === 0 ? "" : `의${law.조가지번호}`) +
                law.조문내용.match(/\((.*?)\)/)[0],
              조문내용: (
                " " + law.조문내용.substring(law.조문내용.indexOf("①") - 1)
              )
                .split("\n")
                .filter((str) => str.trim() !== ""),
            };
          } catch (e) {
            return null;
          }
        });
    });

  return totalResponse;
}

export default APIchain;
