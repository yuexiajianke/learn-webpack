import React from 'react'
import ReactDOM from 'react-dom'
//ts 的本质是类型校验
interface IProps {
    num: number
}

let initState = { count: 0}
type State = Readonly<typeof initState> 

class Counter extends React.Component<IProps, State> {
    state: State = initState
    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }
    render() {
        return <div>
                {this.state.count}
                <button onClick={this.handleClick}>点击</button>
             </div>
    }

}

ReactDOM.render(<Counter num={1}></Counter>, document.getElementById('root'))

//使用ts 有两种方案
//1）使用ts-loader专门处理ts文件 但是ts-loader必须配合typescript一起用
//2）babel7 因为ts-loader跟babel没关系了，为了方便babel7自己写了个包专门解析ts语法, 这个包叫@babel/preset-typescript
//这个包跟typescript没有任何关系就是一个转换ts的库