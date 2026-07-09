

interface MenuItemProps{

    image:string

    title:string

    description:string

}

export const MenuItem = ({image,title,description}:MenuItemProps) => {

  return (

    <div className="menuItem">

        <img
            src={image}
            alt={title}
        />

        <h4>{title}</h4>

        <p>{description}</p>

    </div>

  )

}