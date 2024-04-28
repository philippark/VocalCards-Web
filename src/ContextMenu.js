const ContextMenu = ({
    rightClickItem,
    positionX,
    positionY,
    isToggled,
    buttons,
    contextMenuRef
}) => {
    return ( 
        <menu 
            style={{
                top: positionY + 2 + 'px',
                left: positionX + 2 + 'px'
            }}
            className={`context-menu ${isToggled ? 'active' : ''}`}
            ref={contextMenuRef}
        >
            {buttons.map((button, index)=>{

                function handleClick(e){
                    e.stopPropagation();
                    button.onClick(e, rightClickItem)
                }

                if (button.isSpacer) {
                    return <hr></hr>
                }

                return (
                    <button onClick={handleClick}>
                        <span>{button.text}</span>
                    </button>
                )
            })}
        </menu>
     );
}
 
export default ContextMenu;