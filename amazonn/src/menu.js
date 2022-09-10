import React from "react";
import Search from "./search";
import PanelAdd from "./PanelAdd";
import "./menu.css";

class Menu extends React.Component{
    constructor(props){
        super(props);
        
        this.state={newItemPanel:false};

        this.add = this.add.bind(this);
        this.onCancel = this.onCancel.bind(this);
         
    }
    add(){
        this.setState({newItemPanel:true});
        console.log('mensaje');
    }
    onCancel(){
        this.setState({newItemPanel:false});
    }
    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>
                    <div className="search">
                        <Search onsearch={this.props.onsearch} />
                    </div>
                    <div className="action">
                        <button onClick={this.add} className="button btn-blue" >Añadir un nuevo libro</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel)?
                    <PanelAdd onCancel={this.onCancel} onadd={this.props.onadd}/>
                    :
                    ''
                }
                
            </div>
        )
    };
 
}
export default Menu;