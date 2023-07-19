import APIchain from '../../APIchain/APIchain';
import { useReducer } from 'react';
import "./LawSearchInterface.css";
import { AiOutlineFileSearch } from "react-icons/ai";

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
                input: state.input
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
                input: state.input
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error,
                input: state.input
            };
        case 'UPDATE_INPUT':
            return {
                ...state,
                input: action.input
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function LawSearchInterface() {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
        input: ""
    });

    const onChange = (e) => {
        dispatch({ type: 'UPDATE_INPUT', input: e.target.value });
    };

    const getData = async (query) => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await APIchain(query);
            dispatch({ type: 'SUCCESS', data: response });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    const onSearch = () => {
        getData(input);
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    const { loading, data, error, input } = state;
    console.log(data);

    return (
        <div style={{ width: "700px", margin: "0 auto" }}>
            <div className='Title'>
                <h1 className='InputContent'>{input}</h1>
                <h1>관련 대한민국 법률</h1>
            </div>
            <div className='SearchBar'>
                <input
                    className='SearchInput'
                    value={input}
                    placeholder='검색 키워드'
                    onChange={onChange}
                    onKeyDown={onKeyDown} />
                <button className='SearchButton' onClick={onSearch}><AiOutlineFileSearch size="30" /></button>
            </div>
            <div className='SearchResult'>
                {loading && <h3 className='Loading'>국가법령정보 공동활용 서비스를 이용해 검색하는 중...</h3>}
                {error && <h3 className='Error'>검색 중 오류가 발생했습니다. </h3>}
                {data && <div className='SearchInfo'> 총 {data.length}개의 검색 결과</div>}
                {data && (data.length === 0) && <h3 className='NoResults'>{input}에 해당하는 검색 결과가 없습니다. 다른 키워드로 다시 검색해보십시오. </h3>}
                {data &&
                    data.map(
                        law => (
                            (law !== null) &&
                            (<div className='ResultItem'>
                                <h3 className='LawName'>{law.종합법령명}</h3>
                                <div className='LawContentContainer'>
                                    {law.조문내용.map(item => <div className='LawContent'>{item}</div>)}
                                </div>
                            </div>)
                        )
                    )}
            </div>
        </div>
    );
}

export default LawSearchInterface;