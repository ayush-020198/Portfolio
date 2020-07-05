import React from 'react';

const Language = () => {
    return(
        <div style={{marginBottom: '5%'}}>
            <h1 style={{margin: '3% 0% 4% 5%'}}>Languages</h1>
            <div style={{marginLeft: '10%'}}>
            <h2>Javascript</h2>
            <div className="progress" style={{width: '90%', height: '50px', marginBottom: '1.5%'}}>
            <div className="progress-bar" role="progressbar" style={{width: '80%', backgroundColor: 'black'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2>Python</h2>
            <div className="progress" style={{width: '90%', height: '50px', marginBottom: '1.5%'}}>
            <div className="progress-bar" role="progressbar" style={{width: '60%', backgroundColor: 'black'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2>C++</h2>
            <div className="progress" style={{width: '90%', height: '50px', marginBottom: '1.5%'}}>
            <div className="progress-bar" role="progressbar" style={{width: '75%', backgroundColor: 'black'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2>Go</h2>
            <div className="progress" style={{width: '90%', height: '50px', marginBottom: '1.5%'}}>
            <div className="progress-bar" role="progressbar" style={{width: '20%', backgroundColor: 'black'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2>Java</h2>
            <div className="progress" style={{width: '90%', height: '50px', marginBottom: '1.5%'}}>
            <div className="progress-bar" role="progressbar" style={{width: '50%', backgroundColor: 'black'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2>Shell-Scripting</h2>
            <div className="progress" style={{width: '90%', height: '50px', marginBottom: '1.5%'}}>
            <div className="progress-bar" role="progressbar" style={{width: '80%', backgroundColor: 'black'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2>HTML</h2>
            <div className="progress" style={{width: '90%', height: '50px', marginBottom: '1.5%'}}>
            <div className="progress-bar" role="progressbar" style={{width: '90%', backgroundColor: 'black'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2>CSS</h2>
            <div className="progress" style={{width: '90%', height: '50px', marginBottom: '1.5%'}}>
            <div className="progress-bar" role="progressbar" style={{width: '90%', backgroundColor: 'black'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
        </div>
    )
}
 
export default Language;
