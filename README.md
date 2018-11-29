# ds-rc

### Install
```
npm i -S ds-or
```

- [x] [Img](#Img)
- [x] [Button](#Button)
- [x] [Message](#Message)
- [x] [Progress](#Progress)
- [x] [Pagination](#Pagination)
- [ ] Select
- [ ] Input
- [ ] tagsInput
- [ ] Autocomplete
- [ ] Upload
- [ ] Tooltip

- [ ] 代码规范化eslint
- [ ] 代码优化
- [ ] 适配移动端

> 想从react-spring改为react-motion,但是不太合适,暂时放弃了
> 有任何问题请提issue

> 如果想全部引入,或者不需要按需加载,可以如下
```
import { Img, Button, Message, Progress } from 'ds-rc';
import 'ds-rc/lib/style.css';
```

### Img
[codesandbox](https://codesandbox.io/s/ojxq05ywx9)

类似知乎网页端的图片查看效果,仅添加了一个点击事件,其他和普通img标签没有区别

![Img](https://cdn.ds-or.com/demo/img.gif)
```
import Img from 'ds-rc/lib/Img';
import 'ds-rc/lib/Img/style.css';

<Img style={{width: 300, height: 400}} src="whatever" />
```


### Button
[codesandbox](https://codesandbox.io/s/qv08q61939)

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
[codesandbox](https://codesandbox.io/s/l935lryr2m)

仿ant-design message

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

Message.error('errormsg', {duration: 5});

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

### Pagination
仿ant-design pagination

![Pagination](https://cdn.ds-or.com/demo/pagination.gif)
| propName | desc | default |
|:---:|:---:|:---:|
|total|总条数|required(必填)|
|defaultCurrent|默认索引|1|
|pageSize|每一页条数|15|
|onChange|回调函数|noop|

```
import Pagination from 'ds-rc/lib/Pagination';
import 'ds-rc/lib/Pagination/style.css';

<Pagination defaultCurrent={3} pageSize={10} onChange={(current) => console.log(current)} total={200} />
```