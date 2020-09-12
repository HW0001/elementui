import vue from "vue"

import {
    Form, Input, Button, Message, Container, Header, Aside, Main,
    Row, Col, Menu, Submenu,
    MenuItemGroup,MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    FormItem,
    Table,
    TableColumn,
    Switch,
    Pagination,
    Dialog
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
vue.use(Breadcrumb)
vue.use(BreadcrumbItem)
vue.use(Card) 
vue.use(FormItem) 
vue.use(Table) 
vue.use(TableColumn) 
vue.use(Switch) 
vue.use(Pagination) 
vue.use(Dialog) 

vue.prototype.$Message = Message 