import CategoryCard from "./CategoryCard"
const categories = [
    "electronics", "plastic", "metals", "oil", "wood", "glass"
]

export default function Categories(){
    return(
        <div className="flex flex-wrap flex-row gap-3 p-5">
            {
                categories.map((category, index) => {
                    return (
                        <CategoryCard key={index} category={category} />
                    )
                })
            }
        </div>
    )
}