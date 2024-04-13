import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { List } from 'tdesign-vue-next'

const BaseTag = '/api'
export default [
  // 登录
  {
    url: `${BaseTag}/accounts/login`,
    method: 'post',
    response: () => ({
      code: 200,
      msg: 'ok',
      data: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjp7InVzZXJJZCI6MTU2OTg1Mjg2NzIwOTUyMzIwMiwicm9sZUlkIjoyfSwiZXhwIjoxNjczMzM0MDYzfQ.PvsLpM47UHuIO9imEtkKNRCP16d84KielSrwkl0OzJfyDMfkxbT3hzGgPJbUTszpRc2B1spcOjloAI1lkj_YgUBOS8k64AuW33Gb9oe0HzhAKjqG8ztRj0VGyxS29Y4Ozy90ERqltg69hvIXTlc3OHqwPWDjaiB2VawlAOMi8bQGYBKek4f9ubIuuhEavH9kGzma48A_Tkp4TfV3NMWgiByKE-extIPkMK24Ei9niQMCpf5d865heB7FTCJR8jee5Uu2vKN94AnCb5DyIbvvN5AzTHz0M6KTNywngCbnkf5oEPdcfPO-DGsKNi8avGo2mTsV6WUm2MWxIa3zx8V1Xw',
      requestId: 'ee052dcfeb4a4af3938e155dcfd3821e'
    })
  },
  // 获取用户信息
  {
    url: `${BaseTag}/users/me`,
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        icon: 'https://yjy-oss-videos.oss-accelerate.aliyuncs.com/grzxhz.jpg',
        id: '1569852867209523202',
        name: 'admin',
        roleName: '管理员',
        type: 0,
        msg: 'OK',
        requestId: 'd2701c0a7a7b4703a4b070aa71491e07'
      }
    })
  },

  // 下面是原始数据 暂时不要动 等页面替换的差不多了 直接删掉
  {
    url: `${BaseTag}/get-list`,
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        ...Mock.mock({
          'list|1-1000': [
            {
              'index|+1': 1, // 规则编号
              // 描述
              'description|1': [
                '测试服务测试服务测试服务测试服务测试服务测试服务测试服务测试服务测试服务测试服务',
                '测试服务1',
                '测试服务2',
                '测试服务3',
                '测试服务4',
                '测试服务5'
              ],
              'name|1': '@cname', // 服务名称
              'phoneNumber|1': '@natural(10000000000, 19999999999)', // 服务电话
              // 头像
              'headPortrait|1': [
                'https://yjy-oss-videos.oss-accelerate.aliyuncs.com/grzxhz.jpg'
              ],
              'serviceErrorNumber|1': '@natural(100, 1000)', // 服务调用次数
              'serviceCallNumber|1': '@natural(100, 1000)', // 服务调用次数
              'status|1': '@natural(0, 3)', // 状态
              'updateTime|1': "@datetime('yyyy-MM-dd HH:mm:ss')", // 更新时间。时间戳
              'list|1-10': [
                {
                  'index|1': '@natural(1000, 10000)', // 规则编号
                  // 描述
                  'description|1': [
                    '测试服务测试',
                    '测试服务1',
                    '测试服务2',
                    '测试服务3',
                    '测试服务4',
                    '测试服务5'
                  ],
                  'name|1': '@cname', // 服务名称
                  'phoneNumber|1': '@natural(10000000000, 19999999999)', // 服务电话
                  // 头像
                  'headPortrait|1': ['@/assets/test-img/pic-touxiang.png'],
                  'serviceCallNumber|1': '@natural(100, 1000)', // 服务调用次数
                  'status|1': '@natural(0, 3)', // 状态
                  'updateTime|1': "@datetime('yyyy-MM-dd HH:mm:ss')" // 更新时间。时间戳
                }
              ]
            }
          ]
        })
      }
    })
  },
  // 获取下拉列表数据
  {
    url: `${BaseTag}/get-select`,
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        ...Mock.mock({
          'list|10': [
            {
              'index|+1': 1, // 规则编号
              'total|1': '@natural(100, 999)',
              // 描述
              'description|1': [
                '测试服务测试服务测试服务测试服务测试服务测试服务测试服务测试服务测试服务测试服务',
                '测试服务1',
                '测试服务2',
                '测试服务3',
                '测试服务4',
                '测试服务5'
              ],
              'name|1': '@cname', // 服务名称
              'phoneNumber|1': '@natural(10000000000, 19999999999)', // 服务电话
              // 头像
              'headPortrait|1': ['@/assets/test-img/pic-touxiang.png'],
              'serviceCallNumber|1': '@natural(100, 1000)', // 服务调用次数
              'status|1': '@natural(0, 3)', // 状态
              'updateTime|1': "@datetime('yyyy-MM-dd HH:mm:ss')", // 更新时间。时间戳
              'list|1-10': [
                {
                  'index|+1': 1000, // 规则编号
                  // 描述
                  'description|1': [
                    '测试服务测试',
                    '测试服务1',
                    '测试服务2',
                    '测试服务3',
                    '测试服务4',
                    '测试服务5'
                  ],
                  'name|1': '@cname', // 服务名称
                  'phoneNumber|1': '@natural(10000000000, 19999999999)', // 服务电话
                  // 头像
                  'headPortrait|1': ['@/assets/test-img/pic-touxiang.png'],
                  'serviceCallNumber|1': '@natural(100, 1000)', // 服务调用次数
                  'status|1': '@natural(0, 3)', // 状态
                  'updateTime|1': "@datetime('yyyy-MM-dd HH:mm:ss')" // 更新时间。时间戳
                }
              ]
            }
          ]
        })
      }
    })
  },
  // 带tab的列表
  {
    url: `${BaseTag}/get-tab-list`,
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        ...Mock.mock({
          'list|1-1000': [
            {
              'index|+1': 1, // 规则编号
              // 描述
              'description|1': [
                '测试服务测试服务测试服务测试服务测试服务测试服务测试服务测试服务测试服务测试服务',
                '测试服务1',
                '测试服务2',
                '测试服务3',
                '测试服务4',
                '测试服务5'
              ],
              'name|1': '@cname', // 服务名称
              'phoneNumber|1': '@natural(10000000000, 19999999999)', // 服务电话
              // 头像
              'headPortrait|1': [
                'https://yjy-oss-videos.oss-accelerate.aliyuncs.com/grzxhz.jpg'
              ],
              'serviceCallNumber|1': '@natural(100, 1000)', // 服务调用次数
              'status|1': '@natural(0, 3)', // 状态
              'updateTime|1': "@datetime('yyyy-MM-dd HH:mm:ss')", // 更新时间。时间戳
              'list|1-10': [
                {
                  'index|1': '@natural(1000, 10000)', // 规则编号
                  // 描述
                  'description|1': [
                    '测试服务测试',
                    '测试服务1',
                    '测试服务2',
                    '测试服务3',
                    '测试服务4',
                    '测试服务5'
                  ],
                  'name|1': '@cname', // 服务名称
                  'phoneNumber|1': '@natural(10000000000, 19999999999)', // 服务电话
                  // 头像
                  'headPortrait|1': ['@/assets/test-img/pic-touxiang.png'],
                  'serviceCallNumber|1': '@natural(100, 1000)', // 服务调用次数
                  'status|1': '@natural(0, 3)', // 状态
                  'updateTime|1': "@datetime('yyyy-MM-dd HH:mm:ss')" // 更新时间。时间戳
                }
              ]
            }
          ]
        })
      }
    })
  },
  // 个人信息数据
  {
    url: `${BaseTag}/get-personal`,
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        ...Mock.mock({
          account: 'admin',
          nickname: 'admin',
          description: '这是一个管理员',
          region: '110114',
          address: '西三旗三旗百汇',
          phone: '123456789',
          headPortrait:
            'https://yjy-oss-videos.oss-accelerate.aliyuncs.com/grzxhz.jpg'
        })
      }
    })
  },
  // 修改个人信息
  {
    url: `${BaseTag}/update-personal`,
    method: 'post',
    response: ({ body }) => {
      const {
        account,
        nickname,
        description,
        region,
        address,
        phone,
        headPortrait
      } = body
      return {
        code: 200,
        data: {
          account,
          nickname,
          description,
          region,
          address,
          phone,
          headPortrait
        }
      }
    }
  },
  // 新建和编辑基础列表弹窗，发送的数据
  {
    url: `${BaseTag}list-basic/add`,
    method: 'post',
    // 接收的数据类型
    response: ({ body }) => {
      const { index, description, serviceCallNumber, status, updateTime } = body
      return {
        code: 200,
        data: {
          index,
          description,
          serviceCallNumber,
          status,
          updateTime
        }
      }
    }
  },
  // 删除基础列表的数据
  {
    url: `${BaseTag}list-basic/delete`,
    method: 'post',
    // 接收的数据类型
    response: ({ body }) => {
      const { index } = body
      return {
        code: 200,
        data: {
          index
        }
      }
    }
  },
  {
    url: `${BaseTag}/detail-basic`,
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          name: 'td_20023747',
          loginType: 'Web',
          currentRole: 'Admin',
          rightsList: '通用权限',
          userStatus: '启用',
          language: '简体中文',
          timeZone: '(GMT+08:00)中国时区—北京（Asia/Beijing）'
        })
      }
    })
  },
  // 树形列表的数据
  {
    url: `${BaseTag}/get-tree-list`,
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          ...Mock.mock({
            'list|1': [
              {
                // 取货单号
                'index|+1': '@natural(100000000, 999999999)',
                // 状态
                'status|1': '@natural(0, 3)',
                // 销售单号
                'saleOrderNumber|1': '@natural(10000000000, 19999999999)',
                // 子订单
                'subOrderchildrenNumber|1': '@natural(10000000, 99999999)',
                // 用户姓名
                'userName|1': '@cname',
                // 用户手机号
                'userPhone|1': '@natural(10000000000, 19999999999)',
                // 常用仓库
                'commonWarehouse|1': '菜鸟仓储',
                // 取货地址
                'address|1': '@county(true)'
              }
            ]
          })
        }
      }
    }
  },
  {
    url: `${BaseTag}/get-card-list`,
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        ...Mock.mock({
          'list|48-50': [
            {
              'index|+1': 1,
              'type|1': '@natural(1, 3)',
              'modelNumber|1': 'DXQM_@natural(100000, 999999)',
              'name|1': ['验证码', 'SSL证书', 'CVM', '云数据库', '云防火墙'],
              'createTime|1': "@datetime('yyyy-MM-dd HH:mm:ss')" // 更新时间。时间戳
            }
          ]
        })
      }
    })
  },
  {
    url: `${BaseTag}/get-project-list`,
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|1-50': [
            {
              'index|+1': 1,
              adminPhone: '+86 13587609955',
              updateTime: '2020-05-30 @date("HH:mm:ss")',
              'adminName|1': ['顾娟	', '常刚', '郑洋'],
              'name|1': [
                '沧州市办公用品采购项目',
                '红河哈尼族彝族自治州办公用品采购项目	',
                '铜川市办公用品采购项目',
                '陇南市办公用品采购项目	',
                '六安市办公用品采购项目	 '
              ]
            }
          ]
        })
      }
    })
  },
  {
    url: `${BaseTag}/post`,
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  },
  // 验证密码
  {
    url: `${BaseTag}/validate-password`,
    method: 'post',
    response: ({ body }) => {
      const { password } = body
      if (password === '123456') {
        return {
          code: 200,
          data: {
            name: 'vben'
          }
        }
      }
      return {
        code: 200,
        msg: '密码错误'
      }
    }
  },
  // 分布表单页接受的数据
  {
    url: `${BaseTag}/form/step`,
    method: 'post',
    // 接收的数据类型
    response: ({ body }) => {
      const { name, type, account, payAccount, amount } = body
      return {
        code: 200,
        data: {
          name,
          type,
          account,
          payAccount,
          amount
        }
      }
    }
  },
  // 折叠列表
  {
    url: '/api/get-collapse-list',
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        ...Mock.mock({
          'list|1-3': [
            {
              'index|+1': 1, // 规则编号
              canUpdate: true,
              'name|1': ['第一章	', '第二章', '第三章'],
              maxIndexOnShelf: 0,
              maxSectionIndexOnShelf: 0,
              'id|+1': 1, // 规则编号
              sections: [
                {
                  'id|+1': 1,
                  'index|+1': 1, // 规则编号
                  'subId|+1': 1,
                  canUpdate: true,
                  maxIndexOnShelf: 0,
                  maxSectionIndexOnShelf: 0,
                  'name|1': ['第一小节', '第二小节', '第三小节'],
                  sort: 1
                }
              ]
            }
          ]
        })
      }
    })
  },
  // 穿梭框列表
  {
    url: '/api/get-transfer-list',
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        ...Mock.mock({
          'list|1-5': [
            {
              'name|1': [
                '沧州市办公用品采购项目沧州市办公用品采购项目沧州市办公用品采购项目沧州市办公用品采购项目',
                '红河哈尼族彝族自治州办公用品采购项目	',
                '铜川市办公用品采购项目',
                '陇南市办公用品采购项目	',
                '六安市办公用品采购项目	 '
              ],
              'id|+1': 1 // 规则编号
            }
          ]
        })
      }
    })
  },
  // 卡片列表
  {
    url: `${BaseTag}/get-cardsort-list`,
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        ...Mock.mock({
          'list|1-3': [
            {
              'index|+1': 1,
              isShow: false,
              'name|1': ['顾娟	', '常刚', '郑洋'],
              'photo|1': [
                'https://tdesign.gtimg.com/starter/cloud-db.jpg',
                'https://tdesign.gtimg.com/starter/cloud-server.jpg',
                'https://tdesign.gtimg.com/starter/ssl.jpg',
                'https://tdesign.gtimg.com/starter/t-sec.jpg',
                'https://tdesign.gtimg.com/starter/face-recognition.jpg'
              ],
              'num|1': ['2	', '3', '8'],
              'phone|1': '@natural(10000000000, 19999999999)',
              'introduce|1': [
                '沧州市办公用品采购项目',
                '红河哈尼族彝族自治州办公用品采购项目红河哈尼族彝族自治州办公用品采购项目红河哈尼族彝族自治州办公用品采购项目红河哈尼族彝族自治州办公用品采购项目	',
                '铜川市办公用品采购项目',
                '陇南市办公用品采购项目	',
                '六安市办公用品采购项目	 '
              ]
            }
          ]
        })
      }
    })
  },
  // 列表弹层例表数据
  {
    url: `${BaseTag}/get-dialog-list`,
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        ...Mock.mock({
          'list|1-65': [
            {
              'id|+1': 1,
              isShow: false,
              'name|1': ['顾娟	', '常刚', '郑洋'],
              'photo|1': [
                'https://tdesign.gtimg.com/starter/cloud-db.jpg',
                'https://tdesign.gtimg.com/starter/cloud-server.jpg',
                'https://tdesign.gtimg.com/starter/ssl.jpg',
                'https://tdesign.gtimg.com/starter/t-sec.jpg',
                'https://tdesign.gtimg.com/starter/face-recognition.jpg'
              ],
              'num|1': ['2	', '3', '8'],
              'phone|1': '@natural(10000000000, 19999999999)',
              'introduce|1': [
                '沧州市办公用品采购项目',
                '红河哈尼族彝族自治州办公用品采购项目红河哈尼族彝族自治州办公用品采购项目红河哈尼族彝族自治州办公用品采购项目红河哈尼族彝族自治州办公用品采购项目	',
                '铜川市办公用品采购项目',
                '陇南市办公用品采购项目	',
                '六安市办公用品采购项目	 '
              ]
            }
          ]
        })
      }
    })
  },
  // 数据详情页例表数据
  {
    url: `${BaseTag}/get-detail-list`,
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        ...Mock.mock({
          'list|1-65': [
            {
              'id|+1': 1,
              'index|+1': 1,
              'name|1': [
                '沧州市办公用品采购项目',
                '红河哈尼族彝族自治州办购项目红河哈尼族彝族自目	',
                '铜川市办公用品采购项目',
                '陇南市办公用品采购项目	',
                '六安市办公用品采购项目	 '
              ],
              'pdName|1': ['产品1', '产品2', '产品3'],
              'adminName|1': ['admin1', 'admin2', 'admin3'],
              'purchaseNum|1': ['2	', '3', '8'],
              'pdNum|1': ['2	', '3', '8'],
              'updateTime|1': "@datetime('yyyy-MM-dd HH:mm:ss')" // 更新时间。时间戳
            }
          ]
        })
      }
    })
  }
] as MockMethod[]
