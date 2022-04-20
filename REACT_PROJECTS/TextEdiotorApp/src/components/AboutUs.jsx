
export default function AboutUs(props) {
   
    
  return (
            <div  className='mx-1' style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white'}}>
                <h2 className='my-4'>About Us</h2>
                <div className="accordion" id="accordionExample" style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white'}}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>About WebSite Devoloper</b>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white'}}>
                                <strong>Vishnu Shivanand Mahindalekar.</strong> <p>The website devoloped by Vishnu Shivanand Mahindalekar On 28-March-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>About WebSite</b>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white'}}>
                                <strong>This Website Devolepd for Text Editing.</strong>
                                <p>1) UpperCase The text</p>
                                <p>2) LoverCase The text</p>
                                <p>3) Copy The text</p>
                                <p>4) Remove The Extraspese</p>
                                <p>5) Clear The text</p>
                                <p>6) You can see total words and Count and also Text Preview</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>About Website Licence</b>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white'}}>
                                <strong>Website is pattern on 29-March-2022 for Mr.Vishnu Mahindalekar.</strong>
                                <p>Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license. Icons by The Noun Project.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}
