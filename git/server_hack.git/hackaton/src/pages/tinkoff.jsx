import React from "react";

import Background from './tinkoff.png';
import logo1 from './Frame 1.png';
import logo2 from './Frame 3.png';



import Stories from '../stories'
import SeeMore from '../components/SeeMore'
import {Link} from "react-router-dom";

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${Background})`
};



class Tinkoff extends React.Component{
    componentWillMount() {
        var min=1;
        var max=3;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
        console.log(random);
        this.setState({random:random})

        const promise = fetch('http://localhost:49169/api/content/gettitles',
            {
                mode:'no-cors',
                headers: {
                    'content-type':'application/json'
                } })
            .then(function(response) {
                console.log(response);
               // return response.json();
            })
            .then((myJson) =>{
                this.setState({
                    id:1,
                    logo:"logo1",
                    title: "Title1"
                })
            });
    }


    onClick(){
        this.setState({show:!this.state.show})
    }
    render(){

var seeMoreStyle = {

}

var butStyle = {
    marginLeft:"108px",
    marginTop:"5px",
    left: '24px',
    'text-decoration': 'none',
    background: '#FFDD2D',
    'border-radius': '20px',
    'font-family': 'SF UI Display',
        'font-size': '18px',
        'line-height': '21px',
        'display': 'flex',
        'align-items': 'center',
        'text-align': 'center'
}
        const stories1 = [
            {   url: '/iPhone 8 1.png',
                seeMore: <Link style={seeMoreStyle} to='/test'><button style={butStyle}>Пройди тест</button></Link>,
                header: { heading: 'Не паникуй', subheading: 'Только что.' }
                },
            {   url: '/iPhone 8 1.1.png',
                seeMore: <Link style={seeMoreStyle} to='/test'><button style={butStyle}>Пройди тест</button></Link>,
                header: { heading: 'Не паникуй', subheading: 'Только что.' }
            },
            {   url: '/iPhone 8 1.2.png',
                seeMore: <Link style={seeMoreStyle} to='/test'><button style={butStyle}>Пройди тест</button></Link>,
                header: { heading: 'Не паникуй', subheading: 'Только что.' }
            }
            // { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEm' +
            //         'We7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
            //     header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } },
            // { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
            //     header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } },
            // { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 },
            ];

        const stories2 = [
            {   url: '/iPhone 8 3.png',
                seeMore: <Link style={seeMoreStyle} to='/test'><button style={butStyle}>Пройди тест</button></Link>,
                header: { heading: 'Не паникуй', subheading: 'Только что.' }
            },
            {   url: '/iPhone 8 3.1.png',
                seeMore: <Link style={seeMoreStyle} to='/test'><button style={butStyle}>Пройди тест</button></Link>,
                header: { heading: 'Не паникуй', subheading: 'Только что.' }
            },
            {   url: '/iPhone 8 3.2.png',
                seeMore: <Link style={seeMoreStyle} to='/test'><button style={butStyle}>Пройди тест</button></Link>,
                header: { heading: 'Не паникуй', subheading: 'Только что.' }
            }
            // { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEm' +
            //         'We7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
            //     header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } },
            // { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
            //     header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } },
            // { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 },
        ];
        var contentStyle = {
            width: '161px',
            height:'161px',
            position:'absolute',
            top:"180px",
            left:"1040px",
            "border-radius": "5px",
        }

        var instaStyle = {
            position:'absolute',
            top:"100px",
            left:"40%",
        }

        if(this.state.random===1)
            {contentStyle.backgroundImage = `url(${logo1})`}
        if(this.state.random===2)
            {contentStyle.backgroundImage = `url(${logo2})`}

         return <div>
             <div style={ sectionStyle }>
                <div style={ contentStyle } onClick={()=>this.onClick()}> </div>
                 {this.state.show && <div style={ instaStyle }> <Stories
                     stories={this.state.random===1 ? stories1 : stories2}
                     defaultInterval={1500}
                     width={332}
                     height={668}
                 /></div>}
            </div>

    </div>
    }
}

export default Tinkoff