Ext.define('wzqr.store.CountryStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.Field'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
                storeId: 'CountryStore',
                data: [
                    {
                        text: '中国',
                        entext: 'China'
                    },
                    {
                        text: '安道尔',
                        entext: 'Andorra'
                    },
                    {
                        text: '奥地利',
                        entext: 'Austria'
                    },
                    {
                        text: '阿尔巴尼亚',
                        entext: 'Albania'
                    },
                    {
                        text: '爱尔兰',
                        entext: 'Ireland'
                    },
                    {
                        text: '爱沙尼亚',
                        entext: 'Estonia'
                    },
                    {
                        text: '冰岛',
                        entext: 'Iceland'
                    },
                    {
                        text: '白俄罗斯',
                        entext: 'Belarus'
                    },
                    {
                        text: '保加利亚',
                        entext: 'Bulgaria'
                    },
                    {
                        text: '波兰',
                        entext: 'Poland'
                    },
                    {
                        text: '波斯尼亚和黑塞哥维那',
                        entext: 'Bosnia'
                    },
                    {
                        text: '比利时',
                        entext: 'Belgium'
                    },
                    {
                        text: '德国',
                        entext: 'Germany'
                    },
                    {
                        text: '丹麦',
                        entext: 'Denmark'
                    },
                    {
                        text: '俄罗斯联邦',
                        entext: 'Russia'
                    },
                    {
                        text: '法国',
                        entext: 'France'
                    },
                    {
                        text: '芬兰',
                        entext: 'Finland'
                    },
                    {
                        text: '荷兰',
                        entext: 'Holland'
                    },
                    {
                        text: '捷克',
                        entext: 'Czech'
                    },
                    {
                        text: '克罗地亚',
                        entext: 'Croatia'
                    },
                    {
                        text: '拉脱维亚',
                        entext: 'Latvia'
                    },
                    {
                        text: '立陶宛',
                        entext: 'Lithuania'
                    },
                    {
                        text: '列支敦士登',
                        entext: 'Liechtenstein'
                    },
                    {
                        text: '罗马尼亚',
                        entext: 'Romania'
                    },
                    {
                        text: '马其顿',
                        entext: 'Macedonia'
                    },
                    {
                        text: '马耳他',
                        entext: 'Malta'
                    },
                    {
                        text: '卢森堡',
                        entext: 'Luxembourg'
                    },
                    {
                        text: '摩纳哥',
                        entext: 'Monaco'
                    },
                    {
                        text: '摩尔多瓦',
                        entext: 'Moldova'
                    },
                    {
                        text: '挪威',
                        entext: 'Norway'
                    },
                    {
                        text: '塞尔维亚和黑山共和',
                        entext: 'Serbia'
                    },
                    {
                        text: '葡萄牙',
                        entext: 'Portugal'
                    },
                    {
                        text: '瑞典',
                        entext: 'Sweden'
                    },
                    {
                        text: '瑞士',
                        entext: 'Switzerland'
                    },
                    {
                        text: '斯洛伐克',
                        entext: 'Slovak'
                    },
                    {
                        text: '斯洛文尼亚',
                        entext: 'Slovenia'
                    },
                    {
                        text: '圣马力诺',
                        entext: 'SanMarino'
                    },
                    {
                        text: '乌克兰',
                        entext: 'Ukraine'
                    },
                    {
                        text: '西班牙',
                        entext: 'Spain'
                    },
                    {
                        text: '希腊',
                        entext: 'Greece'
                    },
                    {
                        text: '匈牙利',
                        entext: 'Hungary'
                    },
                    {
                        text: '意大利',
                        entext: 'Italy'
                    },
                    {
                        text: '英国',
                        entext: 'England'
                    },
                    {
                        text: '阿富汗',
                        entext: 'Afghanistan'
                    },
                    {
                        text: '阿拉伯联合酋长',
                        entext: 'Arab'
                    },
                    {
                        text: '阿曼',
                        entext: 'Oman'
                    },
                    {
                        text: '阿塞拜疆共和国',
                        entext: 'Azerbaijan'
                    },
                    {
                        text: '巴基斯坦',
                        entext: 'Pakistan'
                    },
                    {
                        text: '巴勒斯坦',
                        entext: 'Palestine'
                    },
                    {
                        text: '巴林',
                        entext: 'Bahrain'
                    },
                    {
                        text: '不丹',
                        entext: 'Bhutan'
                    },
                    {
                        text: '朝鲜',
                        entext: 'North-Korea'
                    },
                    {
                        text: '东帝汶',
                        entext: 'Timor'
                    },
                    {
                        text: '菲律宾',
                        entext: 'Philippines'
                    },
                    {
                        text: '格鲁吉亚',
                        entext: 'Georgia'
                    },
                    {
                        text: '哈萨克斯坦',
                        entext: 'Kazakhstan'
                    },
                    {
                        text: '韩国',
                        entext: 'Korea'
                    },
                    {
                        text: '吉尔吉斯共和国',
                        entext: 'Kirgizstan'
                    },
                    {
                        text: '卡塔尔',
                        entext: 'Qatar'
                    },
                    {
                        text: '科威特',
                        entext: 'Kuwait'
                    },
                    {
                        text: '老挝',
                        entext: 'Laos'
                    },
                    {
                        text: '黎巴嫩',
                        entext: 'Lebanon'
                    },
                    {
                        text: '马尔代夫',
                        entext: 'Maldives'
                    },
                    {
                        text: '马来西亚',
                        entext: 'Malaysia'
                    },
                    {
                        text: '蒙古',
                        entext: 'Mongolia'
                    },
                    {
                        text: '孟加拉国',
                        entext: 'Bangladesh'
                    },
                    {
                        text: '缅甸',
                        entext: 'Myanmar'
                    },
                    {
                        text: '尼泊尔',
                        entext: 'Nepal'
                    },
                    {
                        text: '塞浦路斯',
                        entext: 'Cyprus'
                    },
                    {
                        text: '沙特阿拉伯',
                        entext: 'Saudi-Arabia'
                    },
                    {
                        text: '斯里兰卡',
                        entext: 'SriLanka'
                    },
                    {
                        text: '塔吉克斯坦',
                        entext: 'Tajikistan'
                    },
                    {
                        text: '泰国',
                        entext: 'Thailand'
                    },
                    {
                        text: '土耳其',
                        entext: 'Turkey'
                    },
                    {
                        text: '土库曼斯坦',
                        entext: 'Turkmenistan'
                    },
                    {
                        text: '文莱',
                        entext: 'Brunei'
                    },
                    {
                        text: '乌兹别克斯坦',
                        entext: 'Uzbekistan'
                    },
                    {
                        text: '新加坡',
                        entext: 'Singapore'
                    },
                    {
                        text: '叙利亚',
                        entext: 'Syria'
                    },
                    {
                        text: '亚美尼亚共和国',
                        entext: 'Armenia'
                    },
                    {
                        text: '也门',
                        entext: 'Yemen'
                    },
                    {
                        text: '伊朗',
                        entext: 'Iran'
                    },
                    {
                        text: '伊拉克',
                        entext: 'Iraq'
                    },
                    {
                        text: '以色列',
                        entext: 'Israel'
                    },
                    {
                        text: '印度',
                        entext: 'India'
                    },
                    {
                        text: '印度尼西亚',
                        entext: 'Indonesia'
                    },
                    {
                        text: '约旦',
                        entext: 'Jordan'
                    },
                    {
                        text: '越南',
                        entext: 'Vietnam'
                    },
                    {
                        text: '阿根廷',
                        entext: 'Argentina'
                    },
                    {
                        text: '安提瓜和巴布达',
                        entext: 'Antigua-Barbuda'
                    },
                    {
                        text: '巴巴多斯',
                        entext: 'Barbados'
                    },
                    {
                        text: '玻利维亚',
                        entext: 'Bolivia'
                    },
                    {
                        text: '巴西',
                        entext: 'Brazil'
                    },
                    {
                        text: '多米尼克',
                        entext: 'Dominica'
                    },
                    {
                        text: '厄瓜多尔',
                        entext: 'Ecuador'
                    },
                    {
                        text: '古巴共和国',
                        entext: 'Cuba'
                    },
                    {
                        text: '哥伦比亚',
                        entext: 'Colombia'
                    },
                    {
                        text: '格林纳达',
                        entext: 'Grenada'
                    },
                    {
                        text: '圭亚那',
                        entext: 'Guyana'
                    },
                    {
                        text: '加拿大',
                        entext: 'Canada'
                    },
                    {
                        text: '秘鲁',
                        entext: 'Peru'
                    },
                    {
                        text: '美国',
                        entext: 'America'
                    },
                    {
                        text: '墨西哥',
                        entext: 'Mexico'
                    },
                    {
                        text: '苏里南',
                        entext: 'Surinam'
                    },
                    {
                        text: '圣卢西亚',
                        entext: 'Saint-Lucia'
                    },
                    {
                        text: '特立尼达和多巴哥',
                        entext: 'Trinidad-and-Tobago'
                    },
                    {
                        text: '乌拉圭',
                        entext: 'Uruguay'
                    },
                    {
                        text: '委内瑞拉',
                        entext: 'Venezuela'
                    },
                    {
                        text: '牙买加',
                        entext: 'Jamaica'
                    },
                    {
                        text: '智利',
                        entext: 'Chile'
                    },
                    {
                        text: '巴哈马',
                        entext: 'Bahamas'
                    },
                    {
                        text: '阿尔及利亚',
                        entext: 'Algeria'
                    },
                    {
                        text: '埃及',
                        entext: 'Egypt'
                    },
                    {
                        text: '埃塞俄比亚',
                        entext: 'Ethiopia'
                    },
                    {
                        text: '安哥拉',
                        entext: 'Angola'
                    },
                    {
                        text: '贝宁',
                        entext: 'Benin'
                    },
                    {
                        text: '博茨瓦纳',
                        entext: 'Botswana'
                    },
                    {
                        text: '布基纳法索',
                        entext: 'Burkina-Faso'
                    },
                    {
                        text: '布隆迪',
                        entext: 'Burundi'
                    },
                    {
                        text: '赤道几内亚',
                        entext: 'Equatorial-guinea'
                    },
                    {
                        text: '多哥',
                        entext: 'Togo'
                    },
                    {
                        text: '厄立特里亚',
                        entext: 'Eritrea'
                    },
                    {
                        text: '佛得角',
                        entext: 'Verde'
                    },
                    {
                        text: '冈比亚',
                        entext: 'Gambia'
                    },
                    {
                        text: '刚果（布）',
                        entext: 'Congo'
                    },
                    {
                        text: '刚果（金）',
                        entext: 'Congo-Kinshasa'
                    },
                    {
                        text: '吉布提',
                        entext: 'Djibouti'
                    },
                    {
                        text: '几内亚',
                        entext: 'Guinea'
                    },
                    {
                        text: '几内亚比绍',
                        entext: 'Guinea-Bissau'
                    },
                    {
                        text: '加蓬',
                        entext: 'Gabon'
                    },
                    {
                        text: '加纳',
                        entext: 'Ghana'
                    },
                    {
                        text: '津巴布韦',
                        entext: 'Zimbabwe'
                    },
                    {
                        text: '喀麦隆',
                        entext: 'Cameroon'
                    },
                    {
                        text: '科摩罗',
                        entext: 'Comoros'
                    },
                    {
                        text: '科特迪瓦',
                        entext: 'cote-d-lvoire'
                    },
                    {
                        text: '肯尼亚',
                        entext: 'Kenya'
                    },
                    {
                        text: '莱索托',
                        entext: 'Lesotho'
                    },
                    {
                        text: '利比里亚',
                        entext: 'Liberia'
                    },
                    {
                        text: '利比亚',
                        entext: 'Libya'
                    },
                    {
                        text: '卢旺达',
                        entext: 'Rwanda'
                    },
                    {
                        text: '马达加斯加',
                        entext: 'Madagascar'
                    },
                    {
                        text: '马里',
                        entext: 'Mali'
                    },
                    {
                        text: '毛里求斯',
                        entext: 'Mauritius'
                    },
                    {
                        text: '毛里塔尼亚',
                        entext: 'Mauritania'
                    },
                    {
                        text: '摩洛哥',
                        entext: 'Morocco'
                    },
                    {
                        text: '莫桑比克',
                        entext: 'Mozambique'
                    },
                    {
                        text: '纳米比亚',
                        entext: 'Namibia'
                    },
                    {
                        text: '南非',
                        entext: 'South-Africa'
                    },
                    {
                        text: '尼日尔',
                        entext: 'Niger'
                    },
                    {
                        text: '尼日利亚',
                        entext: 'Nigeria'
                    },
                    {
                        text: '塞拉利昂',
                        entext: 'Sierra-Leone'
                    },
                    {
                        text: '塞内加尔',
                        entext: 'Senegal'
                    },
                    {
                        text: '塞舌尔',
                        entext: 'Seychelles'
                    },
                    {
                        text: '圣多美和普林西比',
                        entext: 'Sao-Tome-Principe'
                    },
                    {
                        text: '苏丹',
                        entext: 'Sudan'
                    },
                    {
                        text: '索马里',
                        entext: 'Somali'
                    },
                    {
                        text: '坦桑尼亚',
                        entext: 'Tanzania'
                    },
                    {
                        text: '突尼斯',
                        entext: 'Tunisia'
                    },
                    {
                        text: '乌干达',
                        entext: 'Uganda'
                    },
                    {
                        text: '赞比亚',
                        entext: 'Zambia'
                    },
                    {
                        text: '乍得',
                        entext: 'Chad'
                    },
                    {
                        text: '中非',
                        entext: 'Central-Africa'
                    },
                    {
                        text: '澳大利亚',
                        entext: 'Australia'
                    },
                    {
                        text: '巴布亚新几内亚',
                        entext: 'Papua-New-Guinea'
                    },
                    {
                        text: '斐济',
                        entext: 'Fiji'
                    },
                    {
                        text: '库克群岛',
                        entext: 'Cook'
                    },
                    {
                        text: '美属萨摩亚',
                        entext: 'Samoa'
                    },
                    {
                        text: '密克罗尼西亚联邦',
                        entext: 'Micronesia'
                    },
                    {
                        text: '瑙鲁',
                        entext: 'Nauru'
                    },
                    {
                        text: '汤加',
                        entext: 'Tonga'
                    },
                    {
                        text: '瓦努阿图',
                        entext: 'Vanuatu'
                    },
                    {
                        text: '新西兰',
                        entext: 'New-Zealand'
                    }
                ],
                fields: [
                    {
                        name: 'text'
                    },
                    {
                        name: 'entext'
                    }
                ]
            }, cfg)]);
    }
});