import InsightCard from './InsightCard';
import InsightForm from './InsightForm';
import postData from './demo.json';

export default function InsightPage(){
    return (
        <section>
            <div className="max-w-5xl p-4 mx-auto">
                <div className="font-semibold text-5xl">Welcome to the <span className="bg-brand">Insight</span> Page! </div>
                <div className="my-4">Here you can see all the wonderful contributions people around the world are making towards a sustainable future.</div>
                <div className="flex flex-col gap-y-4 items-center  mt-4">
                    {
                        postData.map((post, index)=>{
                        return (
                            <div key={index}>
                                <InsightCard name={post.name} designation={post.designation} content={post.content} type={post.type} data={post.data} />
                            </div>
                        )
                        })
                    }
                </div>
                <InsightForm />
            </div>
        </section>
    )
}