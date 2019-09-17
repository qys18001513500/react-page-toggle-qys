import React from "react";

export default class Page extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }


    /****** 返回首页 *******/
    goHome() {
        this.props.loadData(0);
    }

    /****** 上一页 *******/
    goPrev() {
        if(this.props.currentPage > 1) {
            let startIndex = (this.props.currentPage - 1 - this.props.length) * this.props.length;
            this.props.loadData(startIndex);
        }
    }

    /****** 下一页 *******/
    goNext() {
        if(this.props.hasMoreItems) {
            let startIndex = (this.props.currentPage + 1 - this.props.length) * this.props.length;
            this.props.loadData(startIndex);
        }
    }

    render() {
        const { currentPage, hasMoreItems } = this.props;
        const style = {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            ...this.props.style
        };
        const btnSty = {
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
        const zySty = {
            fontSize:"30px",
            color:"#000",
            fontWeight:"800",
            cursor:"pointer"
        }
        const preSty = {
            fontSize:"40px",
            color:  currentPage === 1 ? "#4c4c4c" : "#000" ,
            fontWeight:"800",
            cursor: currentPage === 1 ? "not-allowed" : "pointer" 
        }
        const nextSty = {
            fontSize:"40px",
            color: hasMoreItems ? "#000" : "#4c4c4c",
            fontWeight:"800",
            cursor: hasMoreItems ? "pointer" : "not-allowed"
        }
        const DEFAULT_HOME = <i className="iconfont icon-zhuye" style={zySty}/>;
        const DEFAULT_PREV = <i className="iconfont icon-icon-test1" style={preSty}/>;
        const DEFAULT_NEXT = <i className="iconfont icon-icon-test2" style={nextSty}/>;
        return (
            <div className="page-toggle-component" style={style}>
                <div style={btnSty} onClick={this.goHome.bind(this)}>{this.props.homeBtn ? this.props.homeBtn : DEFAULT_HOME}</div>
                <div style={btnSty} onClick={this.goPrev.bind(this)}>{this.props.prevBtn ? this.props.prevBtn : DEFAULT_PREV}</div>
                <div style={btnSty} onClick={this.goNext.bind(this)}>{this.props.nextBtn ? this.props.nextBtn : DEFAULT_NEXT}</div>
            </div>
        );
    }
}
