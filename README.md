### 默认配置
- 样式预编译使用scss，打包时单独打包
- babel
    - @babel/plugin-proposal-decorators 修饰器
    - @babel/plugin-syntax-dynamic-import 动态加载
    - @babel/plugin-proposal-class-properties 类字段和静态属性
```
class Test extends Component {
    static defaultProps = {
        name: 'defaultName',
    }
    state = {
        age: 9,
    }
    // 不需要绑定this
    onChange = (age) => this.setState({age})
    render() {
        <input value={this.state.age} onChange={this.onChnage} />
    }
}

```
- react-router默认哈希路由