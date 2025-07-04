import { COLORS } from "../utils/constants"

export type Vector2D = {
    x: number,
    y: number
}

export type NodeInfo = {
	position: Vector2D
	label: string 
	id: string
	dragging: boolean
	fill?: COLORS
}

export type EdgeInfo = {
	idFrom: string
	idTo: string
	weight?: string
	directed: boolean
}

export type TreeNode = {
	val: number,
	left: TreeNode
	right: TreeNode
}

export type Complexity = {
	best?: string
	worst: string
	average?: string
	space: string
}

