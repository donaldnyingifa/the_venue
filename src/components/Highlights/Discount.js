import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import MyButton from '../utils/MyButton'

class Discount extends React.Component {
  state = {
    discountStart:0,
    discountEnd:30
  }
  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState ({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate (){
    setTimeout(()=>{
      this.porcentage()
    },30)
  }

  render () {
      return(
          <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade
                  onReveal={()=> this.porcentage()}
                >
                    <div className="discount_porcentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                    </div>
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase tickets before 29th November </h3>
                        <p>Built in close partnership with Google, the Senior Web Developer Nanodegree program emphasizes teaching the frameworks, techniques, and tools that make the development of progressive web applications possible. Your projects will be focused on using some of the newest features available, such as Promises, Service Worker, and device-level access APIs designed to develop Progressive Web Applications. Ultimately, graduates will emerge ready not only to fill important roles, but to drive innovation and lead technology strategy.</p>

                      <MyButton
                        text="Purchase tickets"
                        bck="#ffa800"
                        color ="#ffffff"
                        link="https://joimman.com"
                        />
                    </div>



                </Slide>
            </div>
          </div>
      );
  }
}

export default Discount;
