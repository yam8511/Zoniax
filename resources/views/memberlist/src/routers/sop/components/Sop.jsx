import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/moneySwitch';
import { setMask, setRouter } from '../../../actions/common';

class Sop extends Component {
    componentDidMount() {
        const store = this.props;
        store.dispatch(setRouter('sop'));
        store.dispatch(fetchPosts('http://webpack:3000/infe/rest/cash/paycompany/displaypage.json')).then(
            () => {
                store.dispatch(setMask(false));
            }
        );
    }
    componentWillUnmount() {
        const store = this.props;

        store.dispatch(setMask(true));
    }
    render() {
        const store = this.props;

        if (store.isFetching) {
            return null;
        }

        return (
            <div className="step">
                <div className="sop">
                    <div className="step-sop">
                        <h1>极速到帐使用帮助</h1>
                        <span className="body-note" data-reactid=".0.1.0">若无法于1小时内完成汇款，建议使用公司入款，汇款后24小时未入帐请联系线上客服</span>
                        <div className="sop-help">
                            <div className="circle-number">1</div>
                            <div className="step-title">先提交</div>
                            <div className="step-text">先提交你欲提款方式</div>
                            <div className="clearfixed" />
                            <div className="center">
                                <img alt="" src="../../../image/member/arrow.png" />
                                <div className="clearfixed" />
                            </div>
                            <div className="clearfixed" />
                            <div className="circle-number">2</div>
                            <div className="step-title">再匯款</div>
                            <div className="step-text">
                                <div className="center-hr" />
                              取得系統提供之專屬匯款帳號後,於1小時內完成匯款將急速到帳
                            </div>
                        </div>
                    </div>
                    <div className="sop-center" />
                    <div className="step-explanation">
                        <h1>存款方式說明</h1>
                        <div className="explanation-box">
                            <div className="explanation-box-left">
                                <div className="box">
                                    <img alt="" src="../../../image/member/deposit_icon01.png" />
                                    <ul>
                                        <li className="step-title">{'網銀轉帳'}</li>
                                        <li className="step-text">{store.lang_file.S_DAW_LOGIN_WEB_BANK || '登入您的網路銀行完成轉帳。'}</li>
                                    </ul>
                                    <div className="clearfixed" />
                                </div>
                                <div className="box">
                                    <img alt="" src="../../../image/member/deposit_icon02.png" />
                                    <ul>
                                        <li className="step-title">{store.lang_file.S_DAW_PAYWAY_ATM || 'ATM自動櫃員機'}</li>
                                        <li className="step-text">{store.lang_file.S_DAW_GO_NEAREST_ATM || '到你最近的銀行ATM將款項轉到上述銀行帳號'}</li>
                                    </ul>
                                    <div className="clearfixed" />
                                </div>
                                <div className="box">
                                    <img alt="" src="../../../image/member/deposit_icon03.png" />
                                    <ul>
                                        <li className="step-title">{store.lang_file.S_DAW_PAYWAY_ATMCASH || 'ATM現金入款'}</li>
                                        <li className="step-text">{store.lang_file.S_DAW_GO_ATM_BELOW || '到你上述的銀行ATM以現金存入銀行帳號'}</li>
                                    </ul>
                                    <div className="clearfixed" />
                                </div>
                            </div>

                            <div className="explanation-box-right">
                                <div className="box">
                                    <img alt="" src="../../../image/member/deposit_icon04.png" />
                                    <ul>
                                        <li className="step-title">{store.lang_file.S_DAW_BANK_COUNTER_TRANS || '銀行櫃台轉帳'}</li>
                                        <li className="step-text">{store.lang_file.S_DAW_GO_NEAREST_BANK || '到你最近的銀行將款項轉到上述銀行帳號。'}</li>
                                    </ul>
                                    <div className="clearfixed" />
                                </div>
                                <div className="box">
                                    <img alt="" src="../../../image/member/deposit_icon05.png" />
                                    <ul>
                                        <li className="step-title">{store.lang_file.S_DAW_PAYWAY_CELL_PHONE_BANK || '手機銀行轉帳'}</li>
                                        <li className="step-text">{'通過你的手機驗證將款項賺到上述的銀行帳號'}</li>
                                    </ul>
                                    <div className="clearfixed" />
                                </div>
                                <div className="box">
                                    <img alt="" src="../../../image/member/deposit_icon06.png" />
                                    <ul>
                                        <li className="step-title">{store.lang_file.S_DAW_WECHAT_APY || '微信支付'}</li>
                                        <li className="step-text">{'透過手機微信掃一掃QR code完成匯款'}</li>
                                    </ul>
                                    <div className="clearfixed" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const select = (state) => {
    return {
        isFetching: state.moneySwitch.isFetching,
        lang_file: state.common.data.lang_file
    };
};

module.exports = connect(select)(Sop);
