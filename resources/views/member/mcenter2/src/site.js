export default {
    nav: [{
        type: 'account',
        langKey: 'S_TEST',
        sub: [{
            '': {
                type: 'memberData', // 基本資料
                text: '基本資料',
                langKey: 'S_TEST'
            }
        }, {
            moneySwitch: {
                type: 'moneySwitch', // 額度轉換
                text: '額度轉換',
                langKey: 'S_TEST'
            }
        }, {
            effectiveBetting: {
                type: 'effectiveBetting', // 有效投注額
                text: '有效投注額',
                langKey: 'S_TEST'
            }
        }, {
            betInfo: {
                type: 'betInfo', // 個人遊戲限額
                text: '個人遊戲限額',
                langKey: 'S_TEST'
            }
        }]
    }, {
        type: 'deposit',
        text: '線上存款',
        langKey: 'S_TEST',
        sub: []
    }, {
        type: 'withdraw',
        text: '線上取款',
        langKey: 'S_TEST',
        sub: []
    }, {
        type: 'memberAccount',
        langKey: 'S_TEST',
        sub: []
    }, {
        type: 'message',
        langKey: 'S_TEST',
        sub: []
    }]
};
