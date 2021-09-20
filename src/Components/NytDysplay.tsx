import React,  { Component, Props } from "react"


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
    web_url: any
    word_count: number
    _id: string
    }
    
    type PropsType ={
      article: article
    }
    
 export default class NytDisplay extends Component<PropsType,{}>{
   // article = this.props
    constructor(props:PropsType){
       super(props)
       this.state = {
        // searchTerm: '',
        // startDate: '',
        // endDate: ''
       }
     }

     componentDidMount(){
        //console.log('hey', this.props.article)
     }
    
    render(){
        return(
             <div className="news">
             {/* <img src={this.props.article.url} alt="web" width="200" height="200"/>  */}
             <br/>
            <p className="abstract">{this.props.article.abstract}</p>
            <br/>
            <p className="news">{this.props.article.news_desk}</p>
            </div>
      
        )
    }
}