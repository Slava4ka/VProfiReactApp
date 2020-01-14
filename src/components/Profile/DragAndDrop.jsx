import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list)
	const [removed] = result.splice(startIndex, 1)
	result.splice(endIndex, 0, removed)

	return result
}

const getItemStyle = (isDragging, draggableStyle) => ({
	cursor: 'default',
	userSelect: 'none',
	background: isDragging ? '' : '',
	...draggableStyle,
})

const getListStyle = isDraggingOver => ({
	background: isDraggingOver ? 'lightgreen' : '',
	width: '100%',
})

const DragAndDrop = ({ components }) => {
	const [state, setState] = useState({ quotes: components })

	const onDragEnd = result => {
		if (!result.destination) {
			return
		}

		if (result.destination.index === result.source.index) {
			return
		}

		const quotes = reorder(
			state.quotes,
			result.source.index,
			result.destination.index
		)

		setState({ quotes })
	}

	return (
		<div>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId='droppableS'>
					{(provided, snapshot) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							style={getListStyle(snapshot.isDraggingOver)}
						>
							{state.quotes.map((item, index) => (
								<Draggable key={item.id} draggableId={item.id} index={index}>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={getItemStyle(
												snapshot.isDragging,
												provided.draggableProps.style
											)}
										>
											{item.content}
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	)
}

export default DragAndDrop
