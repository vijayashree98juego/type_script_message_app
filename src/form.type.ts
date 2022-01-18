export type componentProps ={
    setComponent:(value:JSX.Element)=>void
}

export type formProps={
    setShowPopUp: (value:boolean)=>void
    setComponent?:(value:JSX.Element)=> void
    showPopUp?:boolean
}

export type toggleProps={
    toggleStatus:boolean
}

export type popUpProps ={
    show:boolean
    component:JSX.Element
}


