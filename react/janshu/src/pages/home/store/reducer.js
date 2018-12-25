import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl:'//upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },{
    id: 2,
    title: '社会热点',
    imgUrl:'//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },{
    id: 3,
    title: '社会热点',
    imgUrl:'//upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }],
  articleList:  [{
    id: 1,
    title: '大学读了500多本书，推荐6类书单提高你的六种能力',
    desc:'锻炼与不锻炼的人，隔一天看，没有任何区别；隔一个月看，差异甚微；但是隔五年十年看，身体和精神状态上就有了巨大差别。读书也是一样的道理，读书与不读书的人，日积月累，终成天渊之别。',
    imgUrl: '//upload-images.jianshu.io/upload_images/6869693-d955c3c65cd51f92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '大学读了500多本书，推荐6类书单提高你的六种能力',
    desc:'锻炼与不锻炼的人，隔一天看，没有任何区别；隔一个月看，差异甚微；但是隔五年十年看，身体和精神状态上就有了巨大差别。读书也是一样的道理，读书与不读书的人，日积月累，终成天渊之别。',
    imgUrl: '//upload-images.jianshu.io/upload_images/6869693-d955c3c65cd51f92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '大学读了500多本书，推荐6类书单提高你的六种能力',
    desc:'锻炼与不锻炼的人，隔一天看，没有任何区别；隔一个月看，差异甚微；但是隔五年十年看，身体和精神状态上就有了巨大差别。读书也是一样的道理，读书与不读书的人，日积月累，终成天渊之别。',
    imgUrl: '//upload-images.jianshu.io/upload_images/6869693-d955c3c65cd51f92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch(action.type){
      default :
        return state;
  }
}