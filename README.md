### INSTALL
```
npm i -S ds-or
```
### IMPORT
#### all
```
import { Message, Img, Button } from 'ds-rc';
import 'ds-rc/lib/style.css';
```
#### dynamic
```
import Message from 'ds-rc/lib/Button';
import 'ds-rc/lib/Button/style.css';
```

### USEAGE

#### Message
```
Message.open('what');
Message.dark('dark');
Message.info('is');
Message.warn('your');
Message.error('name');
Message.success('?');

# default duration 2s
Message.config({
    duration: 3
})
```

#### Img
图片查看器,
the same as img element, just add click event
![Img](https://cdn.ds-or.com/demo/img.gif)
#### Button
仿material-ui 按钮
![Button](https://cdn.ds-or.com/demo/button.gif)
```
<Button style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
<Button color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
<Button color="secondary" style={{marginRight: 10}} onClick={() => console.log('secondary')}>secondary</Button>
<Button disabled={true} style={{marginRight: 10}} color="secondary" onClick={() => console.log('disabled')}>disabled</Button>
<hr />
<Button variant="outline" style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
<Button variant="outline" color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
<Button variant="outline" style={{marginRight: 10}} color="secondary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
<Button disabled={true} variant="outline" color="secondary" style={{marginRight: 10}} onClick={() => console.log('disabled')}>disabled</Button>
<hr />
<Button variant="text" style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
<Button variant="text" color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
<Button variant="text" color="secondary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
<Button disabled={true} variant="text" color="secondary" style={{marginRight: 10}} onClick={() => console.log('disabled')}>disabled</Button>
<hr />
<Button style={{width: 50, height: 50, borderRadius: '50%'}} color="primary" onClick={() => console.log('secondary')}>+</Button>
```