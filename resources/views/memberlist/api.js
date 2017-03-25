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

router.get('/infe/rest/cash/payfast/displaypage.json', (req, res) => {
    setTimeout(() => {
        res.json({
            status: 'Y'
        });
    }, 1000);
});

router.get('/infe/rest/cash/paycompany/displaypage.json', (req, res) => {
    res.json({
        status: 'Y',
        data: {
            hall_id: 6,
            currency: 'RMB',
            u_id: 'l52e3250z3n4a159z69pez6ja5z0041',
            language: 'zh-tw',
            site_name: 'esball',
            tpl_name: 'esball',
            tpl_ver: 'ver12',
            real_abandon_sp: 'Y',
            lang_file: {
                S_OPTION_SCAN_ATTENTION: '親愛的貴賓請注意\\n公司銀行帳號不定期更換\\n請每次存款前，務必先至[公司入款] 查看帳號\\n入款至已過期帳號，公司無法查收，恕不負責!',
                S_CHECK_CODE: '驗證碼',
                S_DAW_DEPOSIT_USE_WAY: '請輸入欲使用存款方式',
                S_RELOAD_PIC: '( 點選此處產生新驗證碼 )',
                S_MSG_PLEASE_ENTER_CHECK_CODE: '請輸入驗證碼!!',
                S_DAW_CANT_RECEIVE: '%s\u7121\u6cd5\u67e5\u6536\uff0c\u6055\u4e0d\u8ca0\u8cac\uff01',
                S_DAW_PROMO_PER_DAY: '\u55ae\u65e5\u3010\u516c\u53f8\u532f\u6b3e\u512a\u60e0\u3011\u70ba\u3010%s\u5143\u3011',
                S_DAW_WAIT_FOR_ADD: '\u7b49\u5019\u7cfb\u7d71\u52a0\u6b3e',
                S_DAW_ORDER_ERROR: '\u8a02\u55ae\u865f\u932f\u8aa4',
                S_DAW_BRANCH_NAME: '\u5206\u884c\u540d\u7a31',
                S_DAW_PROMO_MSG: '\u611f\u8b1d\u60a8\u9078\u64c7%s\uff01\u606d\u559c\u60a8\u53ef\u7372\u5f97%s%\u5b58\u6b3e\u512a\u60e0\uff0c\u6700\u9ad8%s\uff0c%s\u9054\u5230\u6709\u6548\u6295\u6ce8%s\u500d\u5373\u53ef\u63d0\u6b3e\uff01(\u6d3b\u52d5\u8a73\u60c5\u8acb\u53c3\u95b1\u512a\u60e0\u6d3b\u52d5)',
                S_DAW_GO_PAYCOMPANY_PLAT: '\u9032\u5165\u516c\u53f8\u5165\u6b3e\u5e73\u81fa\u9801\u9762',
                S_DAW_HELLOW: '\u60a8\u597d',
                S_DAW_HAVE_NO_AUDIT: '\u60a8\u5c1a\u672a\u7b26\u5408\u6e05\u9664\u7a3d\u6838\u9ede\u7684\u689d\u4ef6\uff0c\u56e0\u6b64\u7121\u6cd5\u6e05\u9664\u7a3d\u6838\u9ede\uff0c\u82e5\u76f4\u63a5\u5165\u6b3e\u6703\u8b93\u7a3d\u6838\u9ede\u7d2f\u7a4d\u3002',
                S_DAW_GO_LOGIN_BANK: '\u524d\u5f80\u7db2\u9280\u767b\u5165\u9801\u9762',
                S_DAW_GO_BANK: '\u524d\u5f80\u9280\u884c',
                S_DAW_SELECT_BANK_RECOMMEND: '\u8acb\u9ede\u9078\u60a8\u6240\u8981\u4f7f\u7528\u7684\u9280\u884c\uff0c\u540c\u9280\u884c\u9593\u8f49\u5e33\u53ef\u4ee5\u7acb\u5373\u5230\u5e33\uff0c\u82e5\u662f\u8de8\u884c\u8f49\u5e33\u5247\u6709\u53ef\u80fd\u8f03\u665a\u5230\u5e33\u3002',
                S_DAW_IF_CONTINUED: '\u8acb\u554f\u662f\u5426\u7e7c\u7e8c\u5165\u6b3e\uff1f',
                S_DAW_SELECT_DESPOIT_WAY: '\u8acb\u9078\u64c7\u5b58\u6b3e\u65b9\u5f0f\u5b8c\u6210\u8f49\u5e33',
                S_DAW_SELECT_ACC: '\u8acb\u9078\u64c7\u60a8\u6b32\u8f49\u5165\u7684\u9280\u884c\u5e33\u865f',
                S_DAW_DESPOIT_DONE: '\u5165\u6b3e\u5b8c\u6210',
                S_DAW_IF_GIVE_UP_PROMO: '\u662f\u5426\u653e\u68c4\u5b58\u6b3e\u512a\u60e0',
                S_DAW_PAYWAY_CELL_PHONE: '\u624b\u6a5f\u8f49\u5e33',
                S_DAW_SUBMIT_SUCCESS: '\u63d0\u4ea4\u7533\u8acb\u6210\u529f\uff0c\u8ca1\u52d9\u5c07\u5728%s\u5206\u9418\u5167\u70ba\u60a8\u52a0\u5165\u984d\u5ea6\uff0c\u8b1d\u8b1d\u60a8\uff01',
                S_DAW_TRANS_BY_CELL_PHONE_VALID: '\u901a\u904e\u60a8\u7684\u624b\u6a5f\u9a57\u8b49\u5c07\u6b3e\u9805\u8f49\u5230\u4e0a\u8ff0\u7684\u9280\u884c\u5e33\u865f\u3002',
                S_DAW_WECHAT_APY: '\u5fae\u4fe1\u652f\u4ed8',
                S_DAW_WARN_ACC_FOR_THISTIME: '\u4ee5\u4e0a\u9280\u884c\u5e33\u865f\u9650\u672c\u6b21\u5b58\u6b3e\u7528\uff0c\u5e33\u865f\u4e0d\u5b9a\u671f\u66f4\u63db\uff01\u6bcf\u6b21\u5b58\u6b3e\u524d\u8acb\u4f9d\u7167\u672c\u9801\u6240\u986f\u793a\u7684\u9280\u884c\u5e33\u865f\u5165\u6b3e\u3002\u5982\u5165\u6b3e\u81f3\u5df2\u904e\u671f\u5e33\u865f\uff0c%s\u7121\u6cd5\u67e5\u6536\uff0c\u6055\u4e0d\u8ca0\u8cac\uff01',
                S_DAW_CLICK_SOMEWHERE: '\u5728%s\u9996\u9801\u4e0a\u65b9\u9ede\u64ca[\u7dda\u4e0a\u5b58\u6b3e]\uff0c\u9ede\u64ca[\u516c\u53f8\u5165\u6b3e]\u3002',
                S_DAW_TRANS_CHECK: '\u652f\u7968\u5b58\u6b3e',
                S_DAW_TRANS_ATM: 'ATM\u8f49\u5e33',
                S_DAW_PROVINCE: '\u7701\u4efd',
                S_DAW_GO_NEAREST_ATM: '\u5230\u60a8\u6700\u8fd1\u7684ATM\u5c07\u6b3e\u9805\u8f49\u5230\u4e0a\u8ff0\u9280\u884c\u5e33\u865f\u3002',
                S_DAW_MEMO: '\u5099\u8a3b',
                S_DAW_SHOW_ACCS: '\u672c\u9801\u5c07\u986f\u793a\u60a8\u53ef\u4ee5\u5b58\u5165\u7684\u9280\u884c\u5e33\u865f\uff0c\u5e33\u865f\u4e0d\u5b9a\u671f\u66f4\u63db\uff0c\u8acb\u52d9\u5fc5\u6bcf\u6b21\u67e5\u770b\uff01',
                S_DAW_CHK_SUCCESS: '\u67e5\u770b\u9280\u884c\u5e33\u865f \/ \u5b8c\u6210\u8f49\u5e33',
                S_DAW_COPY_ENV: '\u6b64\u8907\u88fd\u529f\u80fd\u53ea\u652f\u63f4IE\uff01\uff01',
                S_DAW_DESPOIT_WAY: '\u5b58\u6b3e\u65b9\u5f0f',
                S_DAW_DESPOIT_NAME: '\u5b58\u6b3e\u4eba\u59d3\u540d',
                S_DAW_DESPOIT_AMOUNT: '\u5b58\u5165\u91d1\u984d',
                S_DAW_DESPOIT_TIME: '\u5b58\u5165\u6642\u9593',
                S_DAW_DESPOIT_MIN: '\u55ae\u7b46\u6700\u4f4e\u5b58\u6b3e\u91d1\u984d %s \u5143\u4ee5\u4e0a\u3002',
                S_DAW_DESPOIT_MAX: '\u55ae\u7b46\u6700\u9ad8\u5b58\u6b3e\u91d1\u984d %s \u5143\u4ee5\u4e0b\u3002',
                S_DAW_GO_NEAREST_BANK: '\u5230\u60a8\u6700\u8fd1\u7684\u9280\u884c\u5c07\u6b3e\u9805\u8f49\u5230\u4e0a\u8ff0\u9280\u884c\u5e33\u865f\u3002',
                S_DAW_GO_ATM_BELOW: '\u5230\u4e0a\u8ff0\u9280\u884cATM\u4ee5\u73fe\u91d1\u5b58\u5165\u9280\u884c\u5e33\u865f\u3002',
                S_DAW_LOGIN_WEB_BANK: '\u767b\u5165\u60a8\u7684\u7db2\u8def\u9280\u884c\u5b8c\u6210\u8f49\u5e33\u3002',
                S_DAW_CLICK_SUBMIT: '\u9ede\u64ca\u63d0\u4ea4\u7533\u8acb\u3002',
                S_DAW_ORDER_NUM: '\u8a02\u55ae\u865f',
                S_DAW_ORDER_COPIED: '\u8a02\u55ae\u865f\u5df2\u8907\u88fd',
                S_DAW_CARD_NUM: '\u4ed8\u6b3e\u4eba\u5361\u865f',
                S_DAW_COPY: '\u8907\u88fd',
                S_DAW_DESPOIT_SOP: '\u516c\u53f8\u5165\u6b3e\u6d41\u7a0b\u89e3\u8aaa',
                S_DAW_TRANS_BY_BANK: '\u516c\u53f8\u5165\u6b3e\u662f\u5229\u7528\u9280\u884c\u8f49\u5e33\u7684\u65b9\u5f0f\u5b58\u6b3e\u3002',
                S_DAW_WARN_CHANGE_ACC: '\u516c\u53f8\u9280\u884c\u5e33\u865f\u96a8\u6642\u66f4\u63db\uff01\u8acb\u6bcf\u6b21\u5b58\u6b3e\u90fd\u81f3[\u516c\u53f8\u5165\u6b3e]\u9032\u884c\u64cd\u4f5c\u3002\u5165\u6b3e\u81f3\u5df2\u904e\u671f\u5e33\u865f\uff0c\u516c\u53f8\u7121\u6cd5\u67e5\u6536\uff0c\u6055\u4e0d\u8ca0\u8cac\uff01',
                S_DAW_CHECK_SUBMIT: '\u6838\u5c0d\u63d0\u4ea4\u8cc7\u6599 \/ \u63d0\u4ea4\u7533\u8acb',
                S_DAW_DEPOSIT_OVER_MAX: '\u532f\u6b3e\u91d1\u984d\u8d85\u904e\u4e0a\u9650',
                S_DAW_DEPOSIT_BELOW_MIN: '\u532f\u6b3e\u91d1\u984d\u4f4e\u65bc\u4e0b\u9650',
                S_DAW_WARN_MONEY: '\u532f\u6b3e\u91d1\u984d\u683c\u5f0f\u932f\u8aa4\uff01\uff01',
                S_DAW_WARN_MONEY_DECIMAL: '\u532f\u6b3e\u91d1\u984d\u683c\u5f0f\u932f\u8aa4(\u5c0f\u6578\u6700\u591a\u53ea\u80fd\u6578\u5165\u81f3\u7b2c\u4e8c\u4f4d)\uff01\uff01',
                S_DAW_TRANS_FORM_TO: '\u6703\u54e1\u5fc5\u9808\u5c07\u6b3e\u9805\u5f9e\u81ea\u5df1\u7684\u9280\u884c\u5e33\u6236\u4e2d\u8f49\u5230%s\u6240\u6307\u5b9a\u7684\u9280\u884c\u5e33\u865f\u4e2d\u3002',
                S_DAW_TRANS_NUM: '\u4ea4\u6613\u6d41\u6c34\u865f',
                S_DAW_BANK_OUTLETS: '\u958b\u6236\u884c\u7db2\u9ede',
                S_DAW_BRANCH_COPIED: '\u958b\u6236\u884c\u7db2\u9ede\u5df2\u8907\u88fd',
                S_DAW_CHOICE_YOUR_TRANS_WAY: '\u53ef\u81ea\u884c\u9078\u64c7\u5229\u7528\u7db2\u8def\u9280\u884c\uff0cATM\u6ac3\u54e1\u200b\u200b\u6a5f\uff0c\u6216\u5230\u9280\u884c\u8f49\u5e33\u532f\u6b3e\u7b49\u65b9\u6cd5\u8f49\u5e33\u3002',
                S_DAW_BACS: '\u8de8\u884c\u8f49\u5e33',
                S_DAW_WARN_NO_EMPTY: '\u6b04\u4f4d\u4e0d\u80fd\u70ba\u7a7a',
                S_DAW_SUBMIT_PER_TRANS: '\u6bcf\u7b46\u8f49\u5e33\u8acb\u63d0\u4ea4\u4e00\u6b21\u3002',
                S_DAW_UPDATE: '\u76ee\u524d\u7531\u65bc\u5728\u7dda\u9280\u884c\u6280\u8853\u5347\u7d1a\u4e2d\u8acb\u7a0d\u4faf\uff01\uff01',
                S_DAW_LOGOUTED: '\u4f60\u88ab\u767b\u51fa\uff01\uff01',
                S_DAW_DESPOIT_SUCCESS: '\u60a8\u7684\u5b58\u6b3e\u7533\u8acb\u5df2\u6210\u529f\u63d0\u4ea4\uff01',
                S_DAW_BACKUP_ORDER_NUM: '\u8acb\u5099\u4efd\u8a02\u55ae\u865f\uff0c\u4e26\u8907\u88fd\u9032\u60a8\u7684\u5de5\u4f5c\u532f\u6b3e\u5099\u8a3b\u6b04\u3002',
                S_DAW_CORRECT_AMOUNT_AND_TIME: '\u8acb\u78ba\u5be6\u586b\u5beb\u8f49\u5e33\u91d1\u984d\u8207\u6642\u9593\u3002',
                S_DAW_WARN_DESPOSIT: '\u8acb\u8f38\u5165\u532f\u6b3e\u91d1\u984d\uff01\uff01',
                S_DAW_CHECK_INPUT: '\u8acb\u8f38\u5165\u6b63\u78ba\u8cc7\u8a0a',
                S_DAW_FILL_YOUR_DATA: '\u8acb\u586b\u5beb\u60a8\u7684\u8f49\u5e33\u8cc7\u6599',
                S_DAW_NO_INTEGET_AMOUNT: '\u8acb\u52ff\u5b58\u5165\u6574\u6578\u91d1\u984d\uff0c\u4ee5\u514d\u5ef6\u8aa4\u8ca1\u52d9\u67e5\u6536\u3002',
                S_DAW_WARN_NO_SPECIAL_CHAR: '\u8acb\u52ff\u8f38\u5165\u7279\u6b8a\u5b57\u5143',
                S_DAW_DEPOSIT_WAY: '\u8acb\u9078\u64c7\u5b58\u6b3e\u65b9\u5f0f',
                S_DAW_WARN_SELECT_ACC: '\u8acb\u9078\u64c7\u532f\u6b3e\u5e33\u865f',
                S_DAW_SELECT_BANK: '\u8acb\u9078\u64c7\u60a8\u6240\u4f7f\u7528\u7684\u9280\u884c',
                S_DAW_WARN_SELECT_BANK: '\u8acb\u9078\u64c7\u9280\u884c',
                S_DAW_CONFIRM_AGAIN: '\u8acb\u518d\u6b21\u78ba\u8a8d\u63d0\u4ea4\u8cc7\u8a0a\uff01',
                S_DAW_ATM_FOR_FASTER_WAY: '\u82e5\u60a8\u4f7f\u7528ATM\u5b58\u6b3e\uff0c\u8acb\u586b\u5bebATM\u6240\u5c6c\u5206\u884c\uff0c\u6703\u52a0\u5feb\u60a8\u7684\u6b3e\u9805\u5230\u5e33\u6642\u9593\u3002',
                S_DAW_PREV_STEP: '\u4e0a\u4e00\u6b65',
                S_DAW_ID: '\u8eab\u5206\u8b49\u865f\u78bc',
                S_DAW_CITY: '\u5e02',
                S_DAW_CONFIRM: '\u662f\u5426\u78ba\u5b9a\u5beb\u5165',
                S_DAW_PAYEE: '\u6536\u6b3e\u4eba',
                S_DAW_PAYEE_COPIED: '\u6536\u6b3e\u4eba\u5df2\u8907\u88fd',
                S_DAW_CELL_PHONE_NUM: '\u624b\u6a5f\u865f\u78bc',
                S_DAW_PAYWAY_CELL_PHONE_BANK: '\u624b\u6a5f\u9280\u884c\u8f49\u5e33',
                S_DAW_SUBMIT_SUCCESS_TYPE01: '\u63d0\u4ea4\u7533\u8acb\u6210\u529f\uff0c\u8acb\u806f\u7e6b\u5ba2\u670d\u70ba\u60a8\u6dfb\u52a0\uff0c\u8b1d\u8b1d\u914d\u5408\u3002',
                S_DAW_SUBMIT_SUCCESS_TYPE02: '\u63d0\u4ea4\u7533\u8acb\u6210\u529f\uff0c\u8acb\u60a8\u544a\u77e5\u7dda\u4e0a\u5ba2\u670d\uff0c\u8ca1\u52d9\u5c07\u572830\u5206\u9418\u4e4b\u5167\u70ba\u60a8\u52a0\u5165\u984d\u5ea6\uff0c\u8b1d\u8b1d\u60a8\uff01',
                S_DAW_WARN_SUBMIT_FAILED: '\u63d0\u4ea4\u7533\u8acb\u5931\u6557\uff0c\u8acb\u78ba\u8a8d\u8f38\u5165\u7684\u8cc7\u8a0a\u662f\u5426\u6b63\u78ba',
                S_DAW_RECOMMEND: '\u63d0\u9192\u60a8',
                S_DAW_PEER_TRANS: '\u540c\u884c\u8f49\u5e33',
                S_DAW_RECOMMEND_TRANS_NOW: '\u540c\u9280\u884c\u8f49\u5e33\u624d\u80fd\u7acb\u5373\u5230\u5e33\u5594\uff01',
                S_DAW_CHECK_ACC_IN_MINUTES: '\u5b8c\u6210\u8f49\u5e33\u5f8c\u8acb\u65bc30\u5206\u9418\u5167\u67e5\u6536\u60a8\u7684\u6703\u54e1\u5e33\u865f\u9918\u984d\uff0c\u5982\u672a\u52a0\u4e0a\u8acb\u806f\u7e6b\u7dda\u4e0a\u5ba2\u670d\u3002',
                S_DAW_PAYWAY_WEB_BANK: '\u7db2\u8def\u9280\u884c\u8f49\u5e33',
                S_DAW_SUBMIT_AFTER_TRANS: '\u70ba\u4e86\u52a0\u5feb\u5165\u6b3e\u901f\u5ea6\uff0c\u8acb\u52d9\u5fc5\u65bc\u8f49\u5e33\u5f8c\u518d\u63d0\u4ea4\u8cc7\u6599\uff01',
                S_DAW_GIVE_UP_PROMO: '\u6211\u8981\u653e\u68c4\u5b58\u6b3e\u512a\u60e0',
                S_DAW_GET_PROMO: '\u6211\u8981\u7372\u53d6\u5b58\u6b3e\u512a\u60e0',
                S_DAW_SYSTEM_BUSY: '\u7cfb\u7d71\u7e41\u5fd9\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66',
                S_DAW_MERGE_AOMUNT_AND_TIME: '\u7cfb\u7d71\u5728\u6536\u5230\u6b3e\u9805\u5f8c\u6703\u9032\u884c\u6bd4\u5c0d\uff0c\u5982\u679c\u5b58\u6b3e\u91d1\u984d\uff0c\u6642\u9593\u76f8\u7b26\u548c\uff0c\u5247\u6703\u5c07\u6b3e\u9805\u52a0\u5230\u60a8\u7684\u904a\u6232\u5e33\u865f\u4e2d\u3002\u8655\u7406\u6642\u9593\u901a\u5e38\u70ba5-30\u5206\u9418\u3002(\u8de8\u884c\u8f49\u5e33\u6642\u9593\u53ef\u80fd\u6703\u8d85\u904e30\u5206)',
                S_DAW_NEXT_STEP: '\u4e0b\u4e00\u6b65',
                S_DAW_COUNTRY: '\u7e23',
                S_DAW_PAYWAY_CREDIT: '\u4fe1\u7528\u5361',
                S_DAW_KEEP_SESPOIT_DATA: '\u4ee5\u4e0b\u662f\u60a8\u7684\u5b58\u6b3e\u8cc7\u6599\uff0c\u8acb\u59a5\u5584\u4fdd\u5b58\u3002',
                S_DAW_SHOW_BANK_ACCS: '\u4ee5\u4e0b\u662f\u60a8\u6b32\u8f49\u5e33\u7684\u9280\u884c\u5e33\u6236\u8cc7\u6599',
                S_DAW_BANK: '\u9280\u884c',
                S_DAW_NO_PROMISE: '\u9280\u884c\u4e0d\u627f\u8afe\u8de8\u884c\u532f\u6b3e\u5230\u5e33\u6642\u9593\uff0c\u5982\u60a8\u7684\u6b3e\u9805\u572824\u5c0f\u6642\u5167\u672a\u52a0\u4e0a\uff0c\u7169\u8acb\u60a8\u806f\u7e6b\u7dda\u4e0a\u5ba2\u670d\u70ba\u60a8\u63d0\u4f9b\u5e6b\u52a9\u3002',
                S_DAW_BANK_COUNTER: '\u9280\u884c\u6ac3\u6aaf',
                S_DAW_BRANCH: '\u9280\u884c\u6ac3\u6aaf\u5206\u884c',
                S_DAW_BANK_COPIED: '\u9280\u884c\u5df2\u8907\u88fd',
                S_DAW_PAYWAY_VOICE: '\u8a9e\u97f3\u8f49\u5e33',
                S_DAW_ACC: '\u5e33\u865f',
                S_DAW_ACC_COPIED: '\u5e33\u865f\u5df2\u8907\u88fd',
                S_DAW_ONLY_NUM: '\u53ea\u80fd\u8f38\u5165\u6578\u5b57',
                S_DAW_TRANS_CODE: '\u8f49\u5e33\u4ea4\u6613\u4ee3\u78bc',
                S_DAW_KEEP_RECEIPT: '\u8f49\u5e33\u5b8c\u6210\u5f8c\u8acb\u4fdd\u7559\u55ae\u64da\u4f5c\u70ba\u6838\u5c0d\u8b49\u660e\u3002',
                S_DAW_ATM_BRANCH: 'ATM \u6240\u5c6c\u5206\u884c',
                S_DAW_ATM_CODE: 'ATM\u7de8\u78bc',
                S_DAW_ATM_CASH: 'ATM\u73fe\u5b58',
                S_DAW_PAYWAY_ATMCASH: 'ATM\u73fe\u91d1\u5165\u6b3e',
                S_DAW_PAYWAY_ATM: 'ATM\u81ea\u52d5\u6ac3\u54e1\u6a5f',
                S_DAW_YES: '\u662f',
                S_DAW_NO: '\u5426',
                S_DAW_SEND: '\u9001\u51fa',
                S_DAW_QUIT: '\u5b8c\u6210\u96e2\u958b',
                S_DAW_CONTINUE: '\u7e7c\u7e8c',
                S_DAW_CLOSE: '\u95dc\u9589',
                S_DAW_SUBMIT: '\u78ba\u8a8d',
                S_DAW_PAY_TIME_OUT: '\u5f88\u62b1\u6b49!\u60a8\u64cd\u4f5c\u6642\u9593\u8d85\u904e\u4e865\u5206\u9418,\u8acb\u91cd\u65b0\u78ba\u8a8d\u6700\u65b0\u7684\u9280\u884c\u8cc7\u8a0a!'
            },
            website_title: 'e\u4e16\u535a',
            deposit_notice: '\u003Cdiv id=\u0022notices\u0022\u003E\u003Cdiv\u003E\u003Cp\u003Ehihi\u0026nbsp;daiffy test\u0026nbsp;\u003C\/p\u003E\u003C\/div\u003E\u003C\/div\u003E',
            order_number: '2016030382442393',
            pay_fields: {
                order_number: 2,
                amount: 2,
                deposit_time: 2,
                real_name: 2,
                method: 2,
                id_number: 0,
                cellphone: 0,
                transfer_code: 0,
                atm_code: 0,
                trade_number: 0,
                card_number: 0,
                memo: 2
            },
            pay_method: {
                1: '\u7db2\u9280\u8f49\u5e33',
                2: 'ATM\u81ea\u52d5\u6ac3\u54e1\u6a5f',
                3: 'ATM\u73fe\u91d1\u5165\u6b3e',
                4: '\u9280\u884c\u6ac3\u6aaf\u8f49\u5e33',
                8: '\u624b\u6a5f\u9280\u884c\u8f49\u5e33',
                9: '\u5fae\u4fe1\u652f\u4ed8'
            },
            bank_list: {
                1: {
                    id: 1,
                    name: '\u5de5\u5546\u94f6\u884c',
                    url: 'http:\/\/www.icbc.com.cn\/'
                },
                2: {
                    id: 2,
                    name: '\u4ea4\u901a\u94f6\u884c',
                    url: 'http:\/\/www.bankcomm.com\/'
                },
                3: {
                    id: 3,
                    name: '\u519c\u4e1a\u94f6\u884c',
                    url: 'http:\/\/www.abchina.com\/'
                },
                4: {
                    id: 4,
                    name: '\u5efa\u8bbe\u94f6\u884c',
                    url: 'http:\/\/www.ccb.com\/'
                },
                5: {
                    id: 5,
                    name: '\u62db\u5546\u94f6\u884c',
                    url: 'http:\/\/www.cmbchina.com\/'
                },
                6: {
                    id: 6,
                    name: '\u6c11\u751f\u94f6\u884c\u603b\u884c',
                    url: 'http:\/\/www.cmbc.com.cn'
                },
                7: {
                    id: 7,
                    name: '\u6df1\u5733\u53d1\u5c55\u94f6\u884c',
                    url: 'http:\/\/www.sdb.com.cn'
                },
                8: {
                    id: 8,
                    name: '\u4e0a\u6d77\u6d66\u4e1c\u53d1\u5c55\u94f6\u884c',
                    url: 'http:\/\/ebank.spdb.com.cn\/'
                },
                9: {
                    id: 9,
                    name: '\u5317\u4eac\u94f6\u884c',
                    url: 'http:\/\/www.bankofbeijing.com.cn'
                },
                10: {
                    id: 10,
                    name: '\u5174\u4e1a\u94f6\u884c',
                    url: 'http:\/\/www.cib.com.cn'
                },
                11: {
                    id: 11,
                    name: '\u4e2d\u4fe1\u94f6\u884c',
                    url: 'http:\/\/bank.ecitic.com\/'
                },
                12: {
                    id: 12,
                    name: '\u5149\u5927\u94f6\u884c',
                    url: 'http:\/\/www.cebbank.com'
                },
                13: {
                    id: 13,
                    name: '\u534e\u590f\u94f6\u884c',
                    url: 'http:\/\/www.hxb.com.cn\/'
                },
                14: {
                    id: 14,
                    name: '\u5e7f\u4e1c\u53d1\u5c55\u94f6\u884c',
                    url: 'http:\/\/www.gdb.com.cn\/'
                },
                15: {
                    id: 15,
                    name: '\u6df1\u5733\u5e73\u5b89\u94f6\u884c',
                    url: 'http:\/\/bank.pingan.com\/index.shtml'
                },
                16: {
                    id: 16,
                    name: '\u4e2d\u56fd\u90ae\u653f',
                    url: 'http:\/\/www.chinapost.com.cn'
                },
                17: {
                    id: 17,
                    name: '\u4e2d\u56fd\u94f6\u884c',
                    url: 'http:\/\/www.boc.cn\/'
                },
                19: {
                    id: 19,
                    name: '\u4e0a\u6d77\u94f6\u884c',
                    url: 'http:\/\/www.bankofshanghai.com'
                },
                217: {
                    id: 217,
                    name: '\u6e24\u6d77\u94f6\u884c',
                    url: 'http:\/\/www.cbhb.com.cn\/'
                },
                218: {
                    id: 218,
                    name: '\u4e1c\u839e\u94f6\u884c',
                    url: 'http:\/\/www.dongguanbank.cn'
                },
                219: {
                    id: 219,
                    name: '\u5e7f\u5dde\u94f6\u884c',
                    url: 'http:\/\/www.gzcb.com.cn'
                },
                220: {
                    id: 220,
                    name: '\u676d\u5dde\u94f6\u884c',
                    url: 'http:\/\/www.hccb.com.cn\/'
                },
                221: {
                    id: 221,
                    name: '\u6d59\u5546\u94f6\u884c',
                    url: 'http:\/\/www.czbank.com\/czbank\/'
                },
                222: {
                    id: 222,
                    name: '\u5b81\u6ce2\u94f6\u884c',
                    url: 'http:\/\/www.nbcb.com.cn\/'
                },
                223: {
                    id: 223,
                    name: '\u4e1c\u4e9a\u94f6\u884c',
                    url: 'http:\/\/www.hkbea.com\/hk\/index_tc.htm'
                },
                224: {
                    id: 224,
                    name: '\u6e29\u5dde\u94f6\u884c',
                    url: 'http:\/\/www.wzcb.com.cn'
                },
                225: {
                    id: 225,
                    name: '\u664b\u5546\u94f6\u884c',
                    url: 'http:\/\/www.jshbank.com\/'
                },
                226: {
                    id: 226,
                    name: '\u5357\u4eac\u94f6\u884c',
                    url: 'http:\/\/www.njcb.com.cn\/'
                },
                227: {
                    id: 227,
                    name: '\u5e7f\u5dde\u5e02\u519c\u6751\u4fe1\u7528\u5408\u4f5c\u793e',
                    url: 'http:\/\/www.grcbank.com'
                },
                228: {
                    id: 228,
                    name: '\u4e0a\u6d77\u5e02\u519c\u6751\u5546\u4e1a\u94f6\u884c',
                    url: 'http:\/\/www.shrcb.com'
                },
                229: {
                    id: 229,
                    name: '\u6c49\u53e3\u94f6\u884c',
                    url: 'http:\/\/www.hkbchina.com'
                },
                230: {
                    id: 230,
                    name: '\u73e0\u6d77\u5e02\u519c\u6751\u4fe1\u7528\u5408\u4f5c\u8054',
                    url: 'http:\/\/2154778.atobo.com.cn\/'
                },
                231: {
                    id: 231,
                    name: '\u987a\u5fb7\u519c\u4fe1\u793e',
                    url: 'http:\/\/www.sdebank.com\/'
                },
                233: {
                    id: 233,
                    name: '\u6d59\u6c5f\u7a20\u5dde\u5546\u4e1a\u94f6\u884c',
                    url: 'http:\/\/www.czcb.com.cn\/'
                },
                234: {
                    id: 234,
                    name: '\u5317\u4eac\u519c\u5546\u884c',
                    url: 'http:\/\/www.bjrcb.com\/'
                },
                280: {
                    id: 280,
                    name: '\u81ea\u8d21\u5e02\u5546\u4e1a\u94f6\u884c',
                    url: 'http:\/\/www.zgbank.com.cn\/'
                },
                281: {
                    id: 281,
                    name: '\u652f\u4ed8\u5b9d',
                    url: 'https:\/\/my.alipay.com\/'
                },
                276: {
                    id: 276,
                    name: '\u4e1c\u839e\u519c\u6751\u5546\u4e1a\u94f6\u884c',
                    url: 'http:\/\/www.drcbank.com\/'
                },
                277: {
                    id: 277,
                    name: '\u7518\u8083\u94f6\u884c',
                    url: 'http:\/\/www.gsbankchina.com\/'
                },
                297: {
                    id: 297,
                    name: '\u8d22\u4ed8\u901a',
                    url: 'https:\/\/www.tenpay.com\/v2\/'
                },
                296: {
                    id: 296,
                    name: '\u5fae\u4fe1\u652f\u4ed8__\u4e8c\u7dad',
                    url: 'http:\/\/weixin.qq.com\/'
                },
                302: {
                    id: 302,
                    name: '\u8d35\u9633\u94f6\u884c',
                    url: 'http:\/\/www.gyccb.cn\/portal\/zh_CN\/home\/index.html'
                },
                303: {
                    id: 303,
                    name: '\u9f99\u6c5f\u94f6\u884c',
                    url: 'http:\/\/ebank.lj-bank.com\/'
                },
                304: {
                    id: 304,
                    name: '\u6cc9\u5dde\u94f6\u884c',
                    url: 'http:\/\/www.qzccbank.com\/'
                },
                305: {
                    id: 305,
                    name: '\u6842\u6797\u94f6\u884c',
                    url: 'http:\/\/www.guilinbank.com.cn\/'
                },
                306: {
                    id: 306,
                    name: '\u9526\u5dde\u94f6\u884c',
                    url: 'http:\/\/www.jinzhoubank.com'
                },
                307: {
                    id: 307,
                    name: '\u5927\u8fde\u94f6\u884c',
                    url: 'https:\/\/ibank.bankofdl.com\/perbank\/'
                },
                308: {
                    id: 308,
                    name: '\u5fbd\u5546\u94f6\u884c',
                    url: 'http:\/\/www.hsbank.com.cn\/'
                },
                309: {
                    id: 309,
                    name: '\u6c5f\u82cf\u94f6\u884c',
                    url: 'http:\/\/www.jsbchina.cn\/'
                },
                310: {
                    id: 310,
                    name: '\u5185\u8499\u53e4\u94f6\u884c',
                    url: 'http:\/\/www.boimc.com.cn\/'
                },
                311: {
                    id: 311,
                    name: '\u6052\u4e30\u94f6\u884c',
                    url: 'http:\/\/www.egbank.com.cn\/'
                },
                312: {
                    id: 312,
                    name: '\u6210\u90fd\u94f6\u884c',
                    url: 'http:\/\/www.bocd.com.cn\/'
                },
                313: {
                    id: 313,
                    name: '\u5fae\u4fe1\u652f\u4ed8__\u5e33\u865f',
                    url: 'http:\/\/weixin.qq.com\/'
                }
            },
            remit_list: {
                25427: {
                    id: 25427,
                    bank_id: 1,
                    payee: 'dream\u6536\u6b3e\uff08dreamtest)',
                    message: 'msg-25427',
                    qr_code: 'Y'
                },
                25429: {
                    id: 25429,
                    bank_id: 2,
                    payee: 'daiffytest',
                    message: 'msg-25429',
                    qr_code: 'Y'
                },
                25430: {
                    id: 25430,
                    bank_id: 3,
                    payee: 'daiffytest1',
                    message: '',
                    qr_code: 'N'
                }
            },
            discount_amount: 8,
            discount_percent: 20,
            discount_limit: '\u221e',
            audit_credits: 4,
            audit_name: '\u7403\u985e',
            daily_discount_limit: '',
            deposit_max: 501.8,
            deposit_min: 5.2,
            other_discount_amount: 0,
            other_discount_percent: 0,
            other_discount_limit: 5,
            pay_date: '2016-03-03',
            discount_give_up: 'Y',
            audit_point: {
                check_status: 'X',
                deposit_time: '',
                message: '\u60a8\u597d\u003Cbr\u003E\u60a8\u7684\u6709\u6548\u6253\u78bc\u91cf\ufe5d\u5c1a\u672a\ufe5e\u7b26\u5408\u6e05\u9664\u7a3d\u6838\u9ede\u7684\u689d\u4ef6\u003Cbr\u003E\u82e5\u76f4\u63a5\u5165\u6b3e\uff0c\u4e4b\u524d\u7684\u7a3d\u6838\u9ede\u5c07\u6703\u7d2f\u7a4d\u003Cbr\u003E\u8acb\u554f\u662f\u5426\u7e7c\u7e8c\u5165\u6b3e'
            }
        },
        message: '',
        code: ''
    });
});

module.exports = router;
