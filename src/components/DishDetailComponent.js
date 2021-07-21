import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component{

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle style={{fontWeight:'700'}}>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments){
        if (comments.length!= 0){
            const DishComment=comments.map((comment)=>{
                return<div>
                    <li>{comment.comment}<br/>--{comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    
                </div>
            })
            return<div>
                <h4>Comments</h4>
                <ul className=" list-unstyled">
                    {DishComment}
                </ul>
            </div>
        }
        else
            return(
                <div></div>
            );

    }
    
    render(){
        if(this.props.dish!=null){
            return<div className="row ">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    { this.renderComments(this.props.dish.comments)}
                </div>
                </div>
        }
        else{
            return<div>

            </div>
        }
    }
}

export default DishDetail;