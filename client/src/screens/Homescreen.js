import React from 'react';
import Pizza from "../components/pizza"
import pizzas from '../pizzadata'

const Homescreen = () => {
    return (
        <>


            <div className='row'>
                {pizzas.map(pizza1 => {
                    return (


                        <div className="col-md-4">
                            <div>
                                <Pizza pizza1={pizza1} />
                            </div>
                        </div>
                    )



                })}
            </div>
        </>
    )
}
export default Homescreen;