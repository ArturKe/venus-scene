interface actionsInterface {
    name: string,
    currentActionNumber: number,
    actions: actionInterface[]
}
interface actionInterface {
  actionName: string,
  iconName: string,
  action: ()=>void
}

// interface classNamesListItem {
//   name: string,
//   action: {
//       name: string
//   }
// }

interface classNamesListItem {
  name: string,
  action: actionsInterface
}