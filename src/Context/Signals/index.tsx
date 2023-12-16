import {effect, signal} from "@preact/signals-react"


export const workSpace = signal(localStorage.getItem("workSpace")!)
effect(()=>{
    localStorage.setItem("workSpace",workSpace.value)
})


export const sideBarExpanded = signal(false)