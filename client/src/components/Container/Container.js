import Item from './Item'

const Container = ({data}) => {
    return (
    <div>
        {data && data.map((job)=>{
            return <Item job={job}/>
        })}
    </div>
    )
}

export default Container;