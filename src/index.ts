import * as Vue from "vue";

import {
    Alert,
    Autocomplete,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Card,
    Carousel,
    CarouselItem,
    Cascader,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    CollapseItem,
    ColorPicker,
    DatePicker,
    Dialog,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Form,
    FormItem,
    Icon,
    Input,
    InputNumber,
    Loading,
    Menu,
    MenuItem,
    MenuItemGroup,
    Message,
    MessageBox,
    Notification,
    Option,
    OptionGroup,
    Pagination,
    Popover,
    Progress,
    Radio,
    RadioButton,
    RadioGroup,
    Rate,
    Row,
    Scrollbar,
    Select,
    Slider,
    Spinner,
    Step,
    Steps,
    Submenu,
    Switch,
    Table,
    TableColumn,
    TabPane,
    Tabs,
    Tag,
    TimePicker,
    TimeSelect,
    Tooltip,
    Tree,
    Upload,
} from "element-ui";
import "element-ui/lib/theme-default/index.css";

import * as App from "./App.vue";
import "./main.scss";

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(Scrollbar);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

const app = new Vue({
    el: "#app",
    render: (h) => h(App),
});
