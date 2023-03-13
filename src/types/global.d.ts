interface actionsInterface {
    name: string,
    currentActionNumber: number,
    actions: actionInterface[]
}
interface actionInterface {
  actionName: string,
  iconName: string,
  action: (object: THREE.Group)=>void
}

interface classNamesList {
  name: string,
  action: {
      name: string
  }
}