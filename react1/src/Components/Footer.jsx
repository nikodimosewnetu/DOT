function Footer(props){
    return(
        <div className="Footer">
            
                <ul>
                    <h3>{props.title1}</h3>
                    <li><a href="">{props.input1}</a></li>
                    <li><a href="">{props.input2}</a></li>
                    <li><a href="">{props.input3}</a></li>
                    
                </ul>
                <ul>
                    <h3>{props.title2}</h3>
                    <li><a href="">{props.input4}</a></li>
                    <li><a href="">{props.input5}</a></li>
                    
                    
                </ul>
                <ul>
                    <h3>{props.title3}</h3>
                    <li><a href="">{props.input6}</a></li>
                    <li><a href="">{props.input7}</a></li>
                   
                    
                </ul>
            
        </div>
    );
}


export default Footer