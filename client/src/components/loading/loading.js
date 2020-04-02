import React, {Component} from 'react';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as loadingIcon from "../../lottiefiles/computer-display.json";
import * as doneLoading from "../../lottiefiles/doneloading.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingIcon.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
}

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneLoading.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 };

class Loading extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: undefined,
            done: undefined,
            partslist: this.props.partslist
        }
    }

    componentDidMount(){
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
               this.setState({ loading: true });
               setTimeout(() => {
                  this.setState({ done: true });
               }, 1000);
            });
         }, 1200);
    }

    render(){
        return(
        <div>
            {!this.state.done ? (
            <FadeIn>
                <div class="d-flex justify-content-center align-items-center">
                <h1>fetching pizza</h1>
                {!this.state.loading ? (
                    <Lottie options={defaultOptions} height={120} width={120} />
                ) : (
                    <Lottie options={defaultOptions2} height={120} width={120} />
                )}
                </div>
            </FadeIn>
            ) : (
            <h3>{this.state.partslist}</h3>
            )}
        </div>
        );
    }
}

export default Loading;