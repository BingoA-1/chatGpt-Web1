import { CommentOutlined, GithubOutlined, PictureOutlined, ShopOutlined } from '@ant-design/icons'

const menuList = [
  {
    path: '/',
    name: '对话',
    icon: <CommentOutlined />,
    message: '与智能AI进行对话交流',
    modes: ['mix','proxy','business']
  },
  {
    path: '/draw',
    name: '绘画',
    icon: <PictureOutlined />,
    message: '利用智能AI绘画出图片',
    modes: ['mix','proxy','business']
  },
  
]
export default menuList
