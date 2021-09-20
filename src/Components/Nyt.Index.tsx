import React, { Component } from 'react';
import NytDisplay from './NytDysplay';
import {Input,Button} from 'reactstrap';

type article = {
abstract: string
byline:  any
document_type: string
headline: any
keywords: any
lead_paragraph:  string
multimedia:  any
news_desk: string 
print_page: string
print_section: string
pub_date: string
section_name: string
snippet: string
source: string
subsection_name: string
type_of_material: string
uri: string
web_url: string
word_count: number
_id: string
}

type StateType ={
  articleList: article[],
  searchTerm: string,
  startDate: string,
  endDate: string
}

export default class NytIndex extends Component<{},StateType>{
    constructor(props: any){
       super(props)
        this.state = {
            articleList: [],
            searchTerm: '',
            startDate: '',
            endDate: ''
      }
     }
    
     componentDidMount(){
        fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GTGVOqH51Jq7DnuUI9AnxgPuCW4yYHCh')
          .then(response => {
            console.log('response', response)
            if(!response.ok){
              throw Error("error articles")
            }
            return response.json()
          })
          .then(allData => {
            console.log('new', allData)
            this.setState({articleList: allData.response.docs})
          })
          .catch(err => { 
            throw Error(err.message)
        })

    }

    // NytFunction = ()=>{
    //   this.setState({searchTerm:''})
    //   this.setState.startDate
    //   this.setState.endDate
    // }

    componentDidUpdate(){

      //console.log('hello',this.state.articleList)
    }
    
    render() {
      // if(this.state.articleList.length===0){
      // return(
      //      <h1>loading</h1>
      //   )
      //  }
      console.log('term', this.state.searchTerm)
        return(
          <div className="App-body">
          <h1 >Newyork Times</h1>
          <br/>
           <form className="forms">
                <Input onChange={(e:any)=>this.setState({searchTerm: e.target.value})} placeholder='Enter a SINGLE search term(required)'/>
                <br/>
                <Input onChange={(e:any)=>this.setState({startDate: e.target.value})} placeholder='mm/dd/year'/>
                <br/>
                <Input onChange={(e:any)=>this.setState({endDate: e.target.value})} placeholder='mm/dd/year'/>
                <br/>
                <Button>Search</Button>
            </form>
              {this.state.articleList&&this.state.articleList.map((current, index)=>{
              // console.log('works', current, index)
              return(
                <div>
              <NytDisplay article={current} key={index}/>
              </div>
              )
          })}   
      
          </div>
        )
    }

}

