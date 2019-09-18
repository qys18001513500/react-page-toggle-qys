import React from "react";
import axios from "axios";
import Page from "./index";
import "./test.scss";

export default class Test extends React.Component {
    constructor(props) {
        super();
        this.state = {
            dataList: [],
            length:1,
            currentPage: 1, // 当前页
            pageCount: null, // 总页数
            hasMoreItems: false,
        };
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData(startIndex=0) {
        const { length } = this.state;
        let params = {
            project_id: '0162b7e72c2a00152c922ae162b7e58e',
            params: 'activity1',
            startIndex: startIndex,
            length: length,
        }
        axios.post('http://api.chinawaytek.com/show/currency_data', params).then((res) => { 
            console.log(res.data);
            // console.log(res.data.items);
            let newDataList = [];
            res.data.items.forEach(element => {
                let obj = {};
                let arr = JSON.parse(element.param_json);
                arr.forEach(elem => {
                    obj[elem.fieldNameMark] = elem.fieldContent;
                });
                newDataList.push(obj);
            });
            this.setState({
                dataList: newDataList,
                currentPage: res.data.currPage,
                pageCount: res.data.pageCount,
                hasMoreItems: res.data.currPage >= res.data.pageCount ? false : true,
            });
        });
    }


    render() {
        let {dataList, length, currentPage, hasMoreItems} = this.state;
        console.log(dataList, length, currentPage, hasMoreItems)
        let items = [];
        items = dataList.map((item, index) => {
            return (
                <div key={index} className="info-wrap" >
                    <div className="left"><img src={`${item.picture.split(';')[0]}?x-oss-process=image/resize,h_100`} /></div>
                    <div className="right">
                        <div className="text richCont" dangerouslySetInnerHTML={{ __html: item.word }}></div>
                        <div className="info">
                            <div className="name">{item.name}</div>
                            <p className="time">2019-05-20 12:30:21</p>
                        </div>
                    </div>
              </div>
            )
        });
      
        const title = (
            <div style={{display:"flex", color:"#9b040c", fontSize:"20px"}}>
                <div style={{height:"30px"}}><img style={{height:"100%"}} src="./src/images/1.png"/></div>
                <span>优秀志愿者</span>
            </div>
        );
        return (
            <section className="test">
               <Page 
                    loadData={this.loadData}
                    length={length}
                    currentPage={currentPage}
                    hasMoreItems={hasMoreItems}
                    title={title}
                >
                   {items}
               </Page>
            </section>
        );
    }
}
