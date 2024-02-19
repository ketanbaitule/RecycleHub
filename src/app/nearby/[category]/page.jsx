import demo from "./demo.json"
import Category from "./Category"
export default function CategoryCenter({params}){
    const category = params.category;
    const collection_center = demo[category]
    if(!(category in demo)){
        return (
            "Not Found"
        )
    }
    return (
        <div className=" p-5 serif max-w-6xl mx-auto my-8 flex flex-col gap-y-10 ">
            <Category name={category} collection_centers={collection_center} />
        </div>
    )
}