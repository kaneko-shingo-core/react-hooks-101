// action = {
//   type : 'CREATE_EVENT',
//   titile: '2020東京オリンピックのお知らせ',
//   body: '2020年に東京でオリンピックを開催します！つきましては・・・'
// }

// # before
// state = []
// # after 
// state = [
//   { 
//   id: 1, 
//   title: 'タイトル１',
//   body: "ボディ１"
//   }
// ]


// # before
// state = [
// { id: 1, title: 'タイトル１', body: "ボディ１"}
// { id: 2, title: 'タイトル２', body: "ボディ２"}
// { id: 3, title: 'タイトル３', body: "ボディ３"}
// ]
// # after 
// state = [
//   { id: 1, title: 'タイトル１', body: "ボディ１"}
//   { id: 2, title: 'タイトル２', body: "ボディ２"}
//   { id: 3, title: 'タイトル３', body: "ボディ３"}
//   {
//     id: 4,
//     titile: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては・・・'
//   }
// ]


const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body:action.body }  
      const length = state.length
      const id = length === 0 ?  1 : state[length-1].id + 1 
      return [...state, { id, ...event}]
    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id)
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
    }
}
export default events