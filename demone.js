
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';
const FormItem = Form.Item;

const columns = [{
    title: 'First Name',
    dataIndex: 'firstName',
    sorter: (a, b) => a.firstName.length - b.firstName.length
}, {
    title: 'Last Name',
    dataIndex: 'lastName',
    sorter: (a, b) => a.lastName.lenght - b.lastName.length
}, {
    title: 'SendMarketingMessage',
    dataIndex: 'sendMarketingMessage'
},
    {
        title: 'Auto Pay',
        dataIndex: 'autoPay'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.length - b.email.length,
    }];

const data = [{
    firstName: 'Preetham',
    lastName: "Derangula",
    sendMarketingMessage: "false",
    autoPay: "false",
    email: "test@test.com"
},{
    firstName: 'Nazir',
    lastName: "Nazir",
    sendMarketingMessage: "true",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "True",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: 'Preetham',
    lastName: "Preetham",
    sendMarketingMessage: "false",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: 'Zub',
    lastName: "Baig",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "False",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Ishan",
    lastName: "Ishan",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Aarya",
    lastName: "Stark",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Andrew",
    lastName: "Carrington",
    sendMarketingMessage: "False",
    autoPay: "False",
    email: "test@test.com"
},    {
    firstName: "Tester 02",
    lastName: "Tester 02",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},    {
        firstName: "Nazir",
        lastName: "Nazir",
        sendMarketingMessage: "True",
        autoPay: "False",
        email: "test@test.com"
    },    {
        firstName: "Anudeep",
        lastName: "Anudeep",
        sendMarketingMessage: "True",
        autoPay: "False",
        email: "test@test.com"
    },    {
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
    },{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Testing",
    lastName: "Tester",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Rob",
    lastName: "Stark",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Anudeep",
    lastName: "Anudeep",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Mirza",
    lastName: "Mirza",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "John",
    lastName: "John",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "John",
    lastName: "John",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Anudeep",
    lastName: "Anudeep",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "tester 01",
    lastName: "tester 01",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Bart",
    lastName: "F",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Denise",
    lastName: "Denise",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Anudeep",
    lastName: "Anudeep",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Nazir",
    lastName: "Nazir",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
},{
    firstName: "Test1",
    lastName: "Test1",
    sendMarketingMessage: "True",
    autoPay: "False",
    email: "test@test.com"
}
];
function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}
class Demone extends React.Component {

    state = {
        sendMarketingMessage : this.data,
    }
    handleToggle = (prop) => {
                return (sendMarkentingMessage) => {
            this.setState({ [prop]: sendMarkentingMessage });
        };
    }

    handleToggle2 = (prop) => {
        return (enable) => {
            this.setState({ [prop]: enable });
        };
    }
    render() {
        const state = this.state;
              return (
            <div>
                <div className="components-table-demo-control-bar">
                    <Form layout="inline">
                        <FormItem label="Send Marketing Message">
                            <Switch checked={state.sendMarketingMessage} onChange={this.handleToggle('sendMarketingMessage')}/>
                        </FormItem>
                    </Form>
                    <Form layout="inline">
                        <FormItem label="Auto Pay">
                            <Switch checked={state.bordered} onChange={this.handleToggle2('bordered')}/>
                        </FormItem>
                    </Form>
                </div>
                <Table {...this.state} columns={columns} dataSource={data} onChange={onChange}/>
            </div>
        );
    }
}

export default Demone;