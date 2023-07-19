import APIchain from "../APIchain/APIchain";

export const functions = {
    get_related_laws: async (keyword) => {
        console.log(keyword);
        const result = await APIchain(keyword).then(
            data => {
                console.log(data);
                if (data.length === 0) return "No search results.";
                else return JSON.stringify(data[0]); // TODO: Currently just selecting the first result. A way to intelligently select useful information is needed. 
            }
        );
        return result;
    },
};

export const functionsDescription = [
    {
        name: "get_related_laws",
        description: "keyword에 대한 대한민국 관련법을 찾는다.",
        parameters: {
            type: "object",
            properties: {
                keyword: {
                    type: "string",
                    description: "관련법을 찾고자 하는 keyword (짧은 일상 용어)"
                }
            },
            required: ["keyword"]
        }
    }
];