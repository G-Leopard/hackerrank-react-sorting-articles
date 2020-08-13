import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [sortedby, setSortedBy] = React.useState(0);
    let refinedArticles = function(){
        if(sortedby === 0){
            let r =   articles.sort((a,b) => (b.upvotes > a.upvotes) ? 1 : ((a.upvotes > b.upvotes) ? -1 : 0));
            return r;
        }else{
            let r =   articles.sort((a,b) => (new Date(b.date) > new Date(a.date)) ? 1 : ((new Date(a.date) > new Date(b.date)) ? -1 : 0));
            return r;
        }
    }
    articles  = refinedArticles();
    


    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={()=>setSortedBy(0)} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={()=>setSortedBy(1)} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
