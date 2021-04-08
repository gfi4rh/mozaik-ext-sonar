import React from 'react'

class Arrow extends React.Component {

  render(){

    const {width, height, color, upside } = this.props
    let style = null
    if(upside){
      style = {
        transform : rotate('180deg')
      }
    }

    return (<svg style={style} width={width || "50vw"} height={height || "50vh"} viewBox="0 0 200 264" fill="none">
    <rect x="64" y="159" width="72" height="105" rx="4" fill={color || "#A82020"}/>
    <path d="M97.353 4.96279C98.4824 2.84525 101.518 2.84525 102.647 4.96278L184.249 157.956C185.315 159.954 183.867 162.368 181.602 162.368H18.3976C16.1328 162.368 14.6848 159.954 15.7506 157.956L97.353 4.96279Z" fill="#A82020"/>
    </svg>
    )
  }
}

class Equal extends React.Component {
  render(){
    return 0;
  }
}

export {
  Arrow,
  Equal
}