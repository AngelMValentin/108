import './styles/about.css';

function About() {
    return (
        <div className='teamCardsContainer'>
            <div className='aboutHeading'>
                <h1>Meet our Amazing team!</h1>
            </div>

            <div className='teamMemberContainer'>
                <div className='Container1'>    
                </div>

                <div className='memberInfo'>
                    <h3 className='memberName'>Name</h3>
                    <label>quote 1</label>
                    <button className='addBtn btn btn-primary btn-sm' >View bio</button>
                </div>
            </div>



            <div className='teamMemberContainer'>
                <div className='Container2'>
                </div>

                <div className='memberInfo'>
                    <h3 className='memberName'>Name</h3>
                    <label>quote 2</label>
                    <button className='addBtn btn btn-primary btn-sm' >View bio</button>
                </div>
            </div>



            <div className='teamMemberContainer'>
                <div className='Container3'>
                </div>

                <div className='memberInfo'>
                    <h3 className='memberName'>Name</h3>
                    <label>quote 3</label>
                    <button className='addBtn btn btn-primary btn-sm' >View bio</button>
                </div>
            </div>
        </div>

    )
}

export default About;