import React, { Component } from 'react';
import * as firebase from 'firebase';


class QuoteBox extends Component{
    constructor(){
        super()
        
        this.state = {
        
            quoteNow:"Loading ...",
            quoteSize:0,
            quoteAuthor:""
        };
        
    }

//change quote to quote given by the id. Reference the id from firebase database
 changeQuote(id){
        const db = firebase.database();
        db.ref('travel-quotes').child('quote'+id).once('value').then((snap)=>{
        var username  = snap.val();
        console.log(username);
        this.setState ({
        quoteNow:snap.child('quote').val(),
        quoteAuthor:snap.child('author').val()
        });
    })
}  

    componentDidMount(){
       let id = 5
       this.changeQuote(id);
    

}

getRandom(number){
    return Math.ceil(Math.random()*number)
}

// quoteBtnCLicked(){
//     //e.preventDefault();
//     console.log("quote btn was clicked");
//     this.changeQuote(2);
// }

//Class methods are not bound in JSX by default. 
//Generally if you refer to amethod without (), such as onClick={this.handleClick}
//you should bind that method.
//Arrow function binds 
quoteBtnClicked () {
   // console.log('this is:', this);//this here will be the quoteBox class
    //get random id value b/w 1 to 10
    
    let newId = this.getRandom(10);
    console.log(newId);
    this.changeQuote(newId);
  }

tweetBtnClicked(){
window.open(`https://twitter.com/intent/tweet?text=${this.state.quoteNow}`,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no')
}



    render(){
        return(
        <div>
        <div className="btnBox">
        <button className="appButton" onClick={(e) =>this.quoteBtnClicked(e)}>Show me a random quote</button>
        <button className="appButton" onClick={(e)=>this.tweetBtnClicked(e)} >Tweet this!</button>
        </div>
        
        <p className="boxed bubble" >
        
        <h2 className="quotes">{this.state.quoteNow}</h2>
        </p>
        <p className="quote-subtext">
            {this.state.quoteAuthor}
        </p>
        {/*this refers to the class in the context. this.quoteBtnClicked refers to the
        function in class*/}
        
        </div>
        );
    }

    
}

export default QuoteBox;