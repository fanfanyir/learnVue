import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title: '大学读了500多本书，推荐6类书单提高你的六种能力',
  content: '<img src="//upload-images.jianshu.io/upload_images/6869693-d955c3c65cd51f92.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/819/format/webp"/><p><b>锻炼与不锻炼的人，隔一天看，没有任何区别；隔一个月看，差异甚微；但是隔五年十年看，身体和精神状态上就有了巨大差别。读书也是一样的道理，读书与不读书的人，日积月累，终成天渊之别。</b></p><p>锻炼与不锻炼的人，隔一天看，没有任何区别；隔一个月看，差异甚微；但是隔五年十年看，身体和精神状态上就有了巨大差别。读书也是一样的道理，读书与不读书的人，日积月累，终成天渊之别。</p><p>锻炼与不锻炼的人，隔一天看，没有任何区别；隔一个月看，差异甚微；但是隔五年十年看，身体和精神状态上就有了巨大差别。读书也是一样的道理，读书与不读书的人，日积月累，终成天渊之别。</p><p>锻炼与不锻炼的人，隔一天看，没有任何区别；隔一个月看，差异甚微；但是隔五年十年看，身体和精神状态上就有了巨大差别。读书也是一样的道理，读书与不读书的人，日积月累，终成天渊之别。</p><p>锻炼与不锻炼的人，隔一天看，没有任何区别；隔一个月看，差异甚微；但是隔五年十年看，身体和精神状态上就有了巨大差别。读书也是一样的道理，读书与不读书的人，日积月累，终成天渊之别。</p>'
});

export default (state = defaultState, action) => {
  switch(action.type){
    // case :
    //   return;
    default :
      return state
  }
}