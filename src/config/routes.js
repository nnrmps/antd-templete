
import Test from '../pages/Test'

import {
    ShopOutlined,
    GiftOutlined,
    TagsOutlined,
    UserOutlined
} from '@ant-design/icons'

const routes = [
    //example Type manu
    {
        path: '/test',
        name: 'Test',
        type: 'menu',
        menu: { icon: <TagsOutlined />, render: <>Test</> },
        route: { component: (props) => (<Test {...props} />) }
    },
    {
        path: '/testt',
        name: 'Test',
        type: 'menu',
        menu: { icon: <TagsOutlined />, render: <>Test</> },
        route: { component: (props) => (<Test {...props} />) }
    },
    // {
    //     path: '/privilege',
    //     name: 'Privilege',
    //     pageCode: "PRIVL",
    //     type: 'menu',
    //     menu: { icon: <GiftOutlined />, render: <>Privilege</> },
    //     route: { component: (props) => (<Privilege {...props} pageCode="PRIVL" />) },
    // },

    // {
    //     key: 'e-coupon',
    //     type: 'subMenu',
    //     menu: { icon: <ShopOutlined />, render: <>E-Coupon</> },
    //     children: [{
    //         type: 'menu',
    //         path: '/e-coupon/discount',
    //         pageCode: "DISC",
    //         menu: { render: <>Discount</ > },
    //         route: { component: (props) => (<Discount {...props} pageCode="DISC" />) },
    //     }
    //         ,
    //     {
    //         type: 'menu',
    //         path: '/e-coupon/transactionList',
    //         pageCode: "TRANT",
    //         menu: { render: <>Transaction List</ > },
    //         route: { component: (props) => (<Transaction {...props} pageCode="TRANT" />) },
    //     }
    //         ,
    //     {
    //         type: 'menu',
    //         path: '/e-coupon/check-coupon',
    //         pageCode: "CCO",
    //         menu: { render: <>Check Coupon</ > },
    //         route: { component: (props) => (<CheckCoupon {...props} pageCode="CCO" />) },
    //     }
    //         ,
    //     {
    //         type: 'menu',
    //         path: '/e-coupon/assign-coupon',
    //         pageCode: "ASSC",
    //         menu: { render: <>Assign Coupon</ > },
    //         route: { component: (props) => (<AssignCoupon {...props} pageCode="ASSC" />) },
    //     },
    //     {
    //         type: 'menu',
    //         path: '/e-coupon/simulate',
    //         pageCode: "SIMUL",
    //         menu: { render: <>Simulate Coupon</ > },
    //         route: { component: (props) => (<Simulate {...props} pageCode="SIMUL" />) },
    //     }

    //     ]
    // }, {
    //     path: '/customer',
    //     name: 'Customer',
    //     pageCode: "CUSTO",
    //     type: 'menu',
    //     menu: { icon: <UserOutlined />, render: <>Customer</> },
    //     route: { component: (props: object) => (<Customer {...props} pageCode="CUSTO" />) }
    // },
    // {
    //     path: '/partner-campaign',
    //     name: 'Partner Campaign',
    //     pageCode: "PRTCP",
    //     type: 'menu',
    //     menu: { icon: <GiftOutlined />, render: <>Partner Campaign</> },
    //     route: { component: (props) => (<PartnerCampaign {...props} pageCode="PRTCP" />) },
    // },
    // {
    //     path: '/promotion/:promotionId',
    //     name: 'Promotion Detail',
    //     type: 'route',
    //     route: { component: (props) => (<PromotionDetail {...props} pageCode="PROMT" />) },
    // },
    // {
    //     path: '/privilege/:privilegeId',
    //     name: 'Privilege Detail',
    //     type: 'route',
    //     route: { component: (props) => (<PrivilegeDetail {...props} pageCode="PRIVL" />) },
    // }, {
    //     path: '/e-coupon/discount/:discountId',
    //     name: 'Discount Detail',
    //     type: 'route',
    //     route: { component: (props) => (<DiscountDetail {...props} pageCode="DISC" />) },
    // }, {
    //     path: '/e-coupon/assign-coupon/create',
    //     name: 'Assign Coupon',
    //     type: 'route',
    //     route: { component: (props) => (<AssignCouponCreate {...props} pageCode="ASSC" />) },
    // }, {
    //     path: '/partner-campaign/:partnerKey',
    //     name: 'Partner Campaign',
    //     type: 'route',
    //     route: { component: (props) => (<PartnerCampaignCreate {...props} pageCode="PRTCP" />) },
    // },
    //example Type subMenu
    // {
    //     key: 'management',
    //     type: 'subMenu',
    //     menu: { icon: <SettingOutlined />, render: <>Management</> },
    //     children: [{
    //         type: 'menu',
    //         path: '/management/user',
    //         menu: { icon: <UserSwitchOutlined />, render: <>User</ > },
    //         route: { component: () => (<Dashbaord />) },
    //     }
    //         ,
    //     {
    //         type: 'menu',
    //         path: '/management/user',
    //         menu: { icon: <UserSwitchOutlined />, render: <>User</ > },
    //         route: { component: () => (<Dashbaord />) },
    //     }]
    // },
]

export default routes