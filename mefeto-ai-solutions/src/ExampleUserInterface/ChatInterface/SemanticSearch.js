import { embed } from "../../GPT/GPT";
import { useEffect } from "react";

const tf = require('@tensorflow/tfjs');

function SemanticSearch() {
    const database = [
        "① 자동차(이륜자동차는 제외한다)의 운전자는 자동차를 운전할 때에는 좌석안전띠를 매어야 하며, 모든 좌석의 동승자에게도 좌석안전띠(영유아인 경우에는 유아보호용 장구를 장착한 후의 좌석안전띠를 말한다. 이하 이 조 및 제160조제2항제2호에서 같다)를 매도록 하여야 한다. 다만, 질병 등으로 인하여 좌석안전띠를 매는 것이 곤란하거나 행정안전부령으로 정하는 사유가 있는 경우에는 그러하지 아니하다. <개정 2013.3.23, 2014.11.19, 2014.12.30, 2017.7.26, 2018.3.27>",
        "② 삭제 <2018.3.27>",
        "③ 이륜자동차와 원동기장치자전거(개인형 이동장치는 제외한다)의 운전자는 행정안전부령으로 정하는 인명보호 장구를 착용하고 운행하여야 하며, 동승자에게도 착용하도록 하여야 한다. <개정 2013.3.23, 2014.11.19, 2017.7.26, 2020.6.9>",
        "⑥ 사업용 승용자동차의 운전자는 합승행위 또는 승차거부를 하거나 신고한 요금을 초과하는 요금을 받아서는 아니 된다.",
        "3. 승차를 거부하는 행위",
        "④ 도로관리청은 개인형 이동장치의 통행 금지 또는 제한 구간의 입구나 그 밖에 필요한 장소에 개인형 이동장치의 통행이 금지되거나 제한된다는 내용을 구체적으로 명시한 안전표지를 설치하여야 한다.",
        "② 자전거등의 운전자가 자전거등을 타고 자전거횡단도가 따로 있는 도로를 횡단할 때에는 자전거횡단도를 이용하여야 한다. <개정 2020.6.9>"
    ];
    const query = [
        "자전거 통행",
        "전동 킥보드",
        "마약"
    ];

    useEffect(() => {

    }, []);

    const getEmbedding = async () => {
        const EmbededDatabase = await embed(database);
        const EmbededQuery = await embed(query);
        const tensorDatabase = tf.tensor2d(EmbededDatabase);
        const tensorQuery = tf.tensor2d(EmbededQuery);
        const cosineSimilarity = tensorQuery.matMul(tensorDatabase, false, true);
        console.log(await cosineSimilarity.array());
        const score = cosineSimilarity.softmax();
        console.log(await score.array());
        const threshold = 0.145;
        const mask = tf.less(score, threshold);
        const result = tf.where(mask, tf.zerosLike(score), tf.onesLike(score));
        console.log(await result.array());
    };

    return <button onClick={getEmbedding}>Embed</button>;
}

export default SemanticSearch;