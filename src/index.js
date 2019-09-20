import React from "react";
import PropTypes from "prop-types";

const DEFAULT_PROPS = {
    headerHeight: "20%",
    actBtnColor: "#000", // 激活状态下按钮默认颜色
    btnColor: "#4c4c4c",  
    cursor: "not-allowed",
    actCursor: "pointer"
}

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
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            boxShadow: "rgba(0,0,0,.8) 0px 0px 10px 0px",
            boxSizing: "border-box",
            position: "relative",
            borderRadius: "8px",
            ...this.props.style
        };
        const headerSty = {
            height: !this.props.headerHeight ? DEFAULT_PROPS.headerHeight : this.props.headerHeight,
            display: "flex",
        }
        const titleSty = {
            width: "80%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "15px",
        }
        const btnWrapSty = {
            width: "20%",
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
        }
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
            color:  currentPage === 1 ? DEFAULT_PROPS.btnColor : DEFAULT_PROPS.actBtnColor ,
            fontWeight:"800",
            cursor: currentPage === 1 ? DEFAULT_PROPS.cursor : DEFAULT_PROPS.actCursor
        }
        const nextSty = {
            fontSize:"40px",
            color: hasMoreItems ? DEFAULT_PROPS.actBtnColor : DEFAULT_PROPS.btnColor,
            fontWeight:"800",
            cursor: hasMoreItems ? DEFAULT_PROPS.actCursor : DEFAULT_PROPS.cursor
        }
        const contentSty = {
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...this.props.contentSty,
        }
        const DEFAULT_HOME = <i className="iconfont icon-zhuye" style={zySty}/>;
        const DEFAULT_PREV = <i className="iconfont icon-icon-test1" style={preSty}/>;
        const DEFAULT_NEXT = <i className="iconfont icon-icon-test2" style={nextSty}/>;
        return (
            <div className="page-toggle-component" style={style}>
                <header style={headerSty}>
                    <section style={titleSty}>
                        {this.props.title}
                    </section>
                    <section style={btnWrapSty}>
                        <div style={btnSty} onClick={this.goHome.bind(this)}>{this.props.homeBtn ? this.props.homeBtn : DEFAULT_HOME}</div>
                        <div style={btnSty} onClick={this.goPrev.bind(this)}>{this.props.prevBtn ? this.props.prevBtn : DEFAULT_PREV}</div>
                        <div style={btnSty} onClick={this.goNext.bind(this)}>{this.props.nextBtn ? this.props.nextBtn : DEFAULT_NEXT}</div>
                    </section>
                </header>
                <section className="page-toggle-component-content" style={contentSty}>
                    {this.props.children}
                </section>
            </div>
        );
    }
}
Page.propTypes = {
    loadData: PropTypes.func.isRequired,  
    length: PropTypes.number.isRequired,  
    currentPage: PropTypes.number.isRequired,  
    hasMoreItems: PropTypes.bool.isRequired,  
    style: PropTypes.object,  
    headerHeight: PropTypes.string,
    contentSty: PropTypes.object,  
    title: PropTypes.object,  
    homeBtn: PropTypes.object,
    prevBtn: PropTypes.object,
    nextBtn: PropTypes.object,
}