

interface ProductCardProps{

    image:string

    title:string

    description:string

}

export const ProductCard = ({image,title,description}:ProductCardProps) => {

  return (

    <div className="productCard">

        <img
            src={image}
            alt={title}
        />

        <h3>
            {title}
        </h3>

        <p>
            {description}
        </p>

    </div>

  )

}