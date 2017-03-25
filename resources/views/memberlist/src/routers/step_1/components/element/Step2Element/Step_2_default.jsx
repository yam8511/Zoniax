import React, { Component } from 'react';
import { connect } from 'react-redux';

class Default extends Component {
    render() {
        const store = this.props;
        if (store.isFetching) {
            return null;
        }
        // 清空預選
        if (store.depositway.ID === 6) {
            return (<div className="wechat">
                <ul>
                    <li className="order-number">
                        <p>訂單號</p>
                        <span>201160000000</span>
                    </li>
                    <li>
                        <p>轉入銀行</p>
                        <span>{'微信支付 二維'}</span>
                    </li>
                    <li>
                        <p>收款人</p>
                        <span>還豬格歌</span>
                    </li>
                </ul>
                <div className="step-2-note">
                    <p>1.請列印或截圖保留此匯款資料</p>
                    <p>2.轉帳完成後請保留此單據作為核對證明</p>
                    <p>3.24小時內未到帳,聯繫再線客服</p>
                </div>
                <a rel="noopener noreferrer" target="_blank" href={store.bankstate.URL}>
                    <div className="go-bank">GO!前往微信支付</div>
                </a>
            </div>
          );
        }
        return (
            <div className="default">
                <ul>
                    <li className="order-number">
                        <p>訂單號</p>
                        <span>201160000000
                            <div className="order-note">重要！請將此訂單填寫智匯款附言</div>
                        </span>
                        <span className="copy">
                            <a className="bank-step-copy" >Copy</a>
                        </span>
                    </li>
                    <li>
                        <p>轉入銀行</p>
                        <span>工商銀行</span>
                        <span className="copy">
                            <a className="bank-step-copy" >Copy</a>
                        </span>
                    </li>
                    <li>
                        <p>匯款資料</p>
                        <span>123456789012345678</span>
                        <span className="copy">
                            <a className="bank-step-copy" >Copy</a>
                        </span>
                    </li>
                    <li>
                        <p>收款人</p>
                        <span>還豬格歌</span>
                        <span className="copy">
                            <a className="bank-step-copy" >Copy</a>
                        </span>
                    </li>
                </ul>
                <div className="step-2-note">
                    <p>1.請列印或截圖保留此匯款資料</p>
                    <p>2.轉帳完成後請保留此單據作為核對證明</p>
                    <p>3.24小時內未到帳,聯繫再線客服</p>
                </div>
                <a rel="noopener noreferrer" target="_blank" href={store.bankstate.URL}>
                    <div className="go-bank">GO!前往銀行網銀匯款</div>
                </a>
            </div>
        );
    }
}
const select = (state) => {
    return {
        lang_file: state.common.data.lang_file,
        memberData: state.memberData.data,
        depositway: state.DepositWay.depositway,
        bankstate: state.BankSelect.selectBankState
    };
};

module.exports = connect(select)(Default);
