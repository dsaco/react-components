### INSTALL
#### all
```
import { Message, Img, Button } from 'ds-rc';
import 'ds-rc/style.css';
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
the same as img element, just add click event

#### Button
```
<Button style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
<Button color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
<Button color="secondary" onClick={() => console.log('secondary')}>secondary</Button>
<hr />
<Button variant="outline" style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
<Button variant="outline" color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
<Button variant="outline" color="secondary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
<hr />
<Button variant="text" style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
<Button variant="text" color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
<Button variant="text" color="secondary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
<hr />
<Button style={{width: 50, height: 50, borderRadius: '50%'}} color="primary" onClick={() => console.log('secondary')}>+</Button>
```