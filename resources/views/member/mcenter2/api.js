const router = require('express').Router();

router.get('/init.json', (req, res) => {
    setTimeout(() => {
        res.json({
            account: 'php1test',
            bbin_balance: '1,000',
            currency: 'RMB',
            hallid: 6,
            alias: 'esball',
            tpl: 'esball',
            ver: 12,
            language: 'zh-tw',
            lang: {
                S_TEXT: '測試'
            },
            time: 1475215527,
            nav: {
                account: {
                    sub: {
                        memberData: '基本資料',
                        moneySwitch: '額度轉換',
                        effectiveBetting: '有效投注額',
                        betInfo: '個人遊戲限額'
                    }
                },
                deposit: {
                    text: '線上存款',
                    sub: {}
                },
                withdraw: {
                    text: '線上取款',
                    sub: {}
                },
                memberAccount: {
                    text: '往來紀錄',
                    sub: {}
                },
                message: {
                    text: '信息公告',
                    sub: {}
                }
            }
        });
    }, 1000);
});

router.get('/member_data.json', (req, res) => {
    setTimeout(() => {
        res.json({
            name: 'member_data'
        });
    }, 1000);
});

router.get('/money_switch.json', (req, res) => {
    setTimeout(() => {
        res.json({
            name: 'jeff',
            test_count: 0
        });
    }, 1000);
});


module.exports = router;
