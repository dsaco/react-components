# ds-rc

### Install
```
npm i -S ds-or
```
- todo 分页器(Pagination)
- 如果有人用的话,我会加上自定义样式等继续完善下去
- 有任何问题请提issue
- 暂时没有适配移动端

> 如果想全部引入,或者不需要按需加载,可以如下
```
import { Img, Button, Message, Progress } from 'ds-rc';
import 'ds-rc/lib/style.css';
```

### Img
类似知乎网页端的图片查看效果,仅添加了一个点击事件,其他和普通img标签没有区别
![Img](https://cdn.ds-or.com/demo/img.gif)
```
import Img from 'ds-rc/lib/Img';
import 'ds-rc/lib/Img/style.css';

<Img style={{width: 300, height: 400}} src="whatever" />
```


### Button
仿material-ui 水涟漪效果按钮
![Button](https://cdn.ds-or.com/demo/button.gif)
```
# color: ['primary', 'secondary', ''] default is ''
# variant: ['outline', 'text', 'default'] default is default
# disabled: Boolean  default is false

import Message from 'ds-rc/lib/Button';
import 'ds-rc/lib/Button/style.css';

<Button color="" variant="default" disabled={false} onClick={() => console.log('default')}>default</Button>
```

### Message (API)
仿ant-design message toast
![Message](https://cdn.ds-or.com/demo/message.gif)
```
import Message from 'ds-rc/lib/Message';
import 'ds-rc/lib/Message/style.css';

Message.dark('dark');
Message.open('what');
Message.info('is');
Message.warn('your');
Message.error('name');
Message.success('?');

// default duration 2s;
Message.config({
    duration: 3
})
```

### Progress (API)
仿nprogress 
![Message](https://cdn.ds-or.com/demo/progress.gif)
```
import Progress from 'ds-rc/lib/Progress';
import 'ds-rc/lib/Progress/style.css';

Progress.start();
Progress.done();

```