import React from 'react';

class HigherOrderFunctions extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    render(){
        // filtering data by user type
        const filteredData = this.state.userData.filter((item)=>{
            if(item.user_type == "Designer"){
                return item;
            }
        })

        // filtering data starting with "J"
        const filteredData2 = this.state.userData.filter((item)=>{
            if(item.name.charAt(0) == "J"){
                return item;
            }
        })

        // filtering data based on age
        const filteredData3 = this.state.userData.filter((item)=>{
            if(item.age > 28 && item.age <= 50){
                return item;
            }
        })

        // getting total years of designer
        const filteredData4 = this.state.userData.filter((item)=>{
            if(item.user_type == "Designer"){
                return item;
            }
        })

        // filteredData4.push({id:'9', name:'jill', user_type:'Designer', age:559, years:896})
        const totalAge = filteredData4.reduce((reducedVal, initialVal)=>{
            if(reducedVal.age !== undefined){
                return reducedVal.age+initialVal.age
            }else{
                return reducedVal+initialVal.age
            }
            
        })

        return (
            <>
                {/* displaying all items */}
                <div style={{width:"50vw", textAlign:"center", fontFamily:"sans"}}>
                    <h1>Display all items</h1>
                    <div style={{border:"1px solid black", width:"40vw", marginLeft:"10%"}}>
                        {this.state.userData.map((item)=>{
                            return(
                                <div className="divContainer" key={item.id} style={{display:"flex", justifyContent:"space-between", color:"blue"}}>
                                    <div>Id: {item.id}</div>
                                    <div>Name: {item.name}</div>
                                    <div>UserType: {item.user_type}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                {/* displaying items based on user type */}
                <div style={{width:"50vw", textAlign:"center", fontFamily:"sans"}}>
                    <h1>Display based on user type</h1>
                    <div style={{border:"1px solid black", width:"40vw", marginLeft:"10%"}}>
                        {
                        filteredData.map((item)=>{
                            return(
                                <div className="divContainer" key={item.id} style={{display:"flex", justifyContent:"space-between", color:"blue"}}>
                                    <div>Id: {item.id}</div>
                                    <div>Name: {item.name}</div>
                                    <div>UserType: {item.user_type}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* displaying items where name staarts with "J" */}
                <div style={{width:"50vw", textAlign:"center", fontFamily:"sans"}}>
                    <h1>Filter all data starting with J</h1>
                    <div style={{border:"1px solid black", width:"40vw", marginLeft:"10%"}}>
                        {
                        filteredData2.map((item)=>{
                            return(
                                <div className="divContainer" key={item.id} style={{display:"flex", justifyContent:"space-between", color:"blue"}}>
                                    <div>Id: {item.id}</div>
                                    <div>Name: {item.name}</div>
                                    <div>UserType: {item.user_type}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* filter all data based on age greater than 28 and less or equals to 50 */}
                <div style={{width:"50vw", textAlign:"center", fontFamily:"sans"}}>
                    <h1>Filter all data based on age greater than 28 and less or equals to 50</h1>
                    <div style={{border:"1px solid black", width:"40vw", marginLeft:"10%"}}>
                        {
                        filteredData3.map((item)=>{
                            return(
                                <div className="divContainer" key={item.id} style={{display:"flex", justifyContent:"space-between", color:"blue"}}>
                                    <div>Id: {item.id}</div>
                                    <div>Name: {item.name}</div>
                                    <div>UserType: {item.user_type}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* total years of designer */}
                <div style={{width:"50vw", textAlign:"center", fontFamily:"sans"}}>
                    <h1>total years of designer</h1>
                    <div style={{border:"1px solid black", width:"40vw", marginLeft:"10%"}}>
                        <div className="divContainer" style={{display:"flex", justifyContent:"space-between", color:"blue"}}>
                            <div>{totalAge}</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HigherOrderFunctions;