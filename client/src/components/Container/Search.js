import './Item.css';
import Item from './Item';


const Search = ({job}) => {
    function filterInput() {
        let input = document.getElementById('filter').value;
        let title = document.getElementsByClassName('title');
        for (let i = 0; i < title.length; i++) {
            let titleContent = title[i].textContent;
            if ((titleContent.substring(0, input.length)) != input) {
                document.getElementsByClassName('list-item-container')[i].style.display = 'none';
            }
        }
    }

    return (
        <form action=""
            style={
                {padding: "30px"}
        }>
            <label for="filter">Filter A Job:</label>
            <input type="text" name="filter" className="filter" placeholder="Enter A Filter Here" id="filter"
                onChange={filterInput}></input>
            <br/>
            <br/>
        </form>
    )
}

export default Search;
