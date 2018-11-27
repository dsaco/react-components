# ds-rc

### Install
```
npm i -S ds-or
```

### Img
类似知乎网页端的图片查看效果,仅添加了一个点击事件,其他和普通img标签没有区别
```
import Img from 'ds-rc/lib/Img';
<Img style={{width: 300, height: 400}} src="whatever" />
```
![Img](https://cdn.ds-or.com/demo/img.gif)

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