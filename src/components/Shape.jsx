import React from 'react'

class Arrow extends React.Component {

  render(){

    const {width, height, color, rotate } = this.props
    let style = null
    if(rotate){
      style = {
        transform : "rotate(180deg)"
      }
    }

    return (<svg style={style} width={width || "2vw"} height={height || "2vh"} viewBox="0 0 200 264" fill="none">
    <rect x="64" y="159" width="72" height="105" rx="4" fill={color || "#A82020"}/>
    <path d="M97.353 4.96279C98.4824 2.84525 101.518 2.84525 102.647 4.96278L184.249 157.956C185.315 159.954 183.867 162.368 181.602 162.368H18.3976C16.1328 162.368 14.6848 159.954 15.7506 157.956L97.353 4.96279Z" fill={color || "#A82020"}/>
    </svg>
    )
  }
}

class Equal extends React.Component {
  render(){
    const {width, height, color } = this.props
    return (<svg width={width || "2vw"} height={height || "2vh"} viewBox="0 0 183 40" fill="none">
    <path d="M0 3.33333C0 1.49238 1.63864 0 3.66 0H179.34C181.361 0 183 1.49238 183 3.33333V36.6667C183 38.5076 181.361 40 179.34 40H3.66C1.63863 40 0 38.5076 0 36.6667V3.33333Z" fill={color || "#B6B83D"}/>
    </svg>
    );
  }
}

export {
  Arrow,
  Equal
}