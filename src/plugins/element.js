import vue from "vue"

import {
    Form, Input, Button, Message, Container, Header, Aside, Main,
    Row, Col, Menu, Submenu,
    MenuItemGroup,MenuItem
} from "element-ui"

vue.use(Form)
vue.use(Input)
vue.use(Button)
vue.use(Container)
vue.use(Header)
vue.use(Aside)
vue.use(Main)
vue.use(Row)
vue.use(Col)
vue.use(Menu)
vue.use(Submenu)
vue.use(MenuItemGroup)
vue.use(MenuItem)

vue.prototype.$Message = Message 