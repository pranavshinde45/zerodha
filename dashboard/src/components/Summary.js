function Summary() {
    return (
        <div className="container-summary">
            <div style={{ height: "150px", width: "1000px", borderBottom: "0.5px solid black" }}>
                <p className="text-muted ps-3" style={{ paddingTop: "100px", fontSize: "30px" }}>Hi,user!</p>
            </div>
            <div style={{ width: "1000px", borderBottom: "0.5px solid black" }}>
                <div className="text-muted mt-3" style={{ padding: "50px", fontSize: "20px" }}>Equity</div>
                <div className="text-muted p-3 d-flex border-bottom" style={{ paddingTop: "100px", fontSize: "20px" }}>
                    <div style={{ borderRight: "0.5px solid black", width: "300px", paddingBottom: "30px" }}>
                        <p className="ps-4 mt-5" style={{ fontSize: "40px" }}>3.74k</p>
                        <p style={{ fontSize: '18px' }} className="ps-4"  >Margin available</p>
                    </div>
                    <div>
                        <p style={{ fontSize: '15px' }} className="pt-5 ps-5 ms-5">Margin used &nbsp;&nbsp;&nbsp;0</p>
                        <p style={{ fontSize: '15px' }} className="pt-1 ps-5 ms-5">Opening balance &nbsp;&nbsp;&nbsp;3.74k</p>
                    </div>
                </div>
                <div>
                    <div className="text-muted mt-3" style={{ padding: "50px", fontSize: "20px" }}>Holding(13)</div>
                    <div className="text-muted p-3 d-flex" style={{ paddingTop: "100px", fontSize: "20px" }}>
                        <div style={{ borderRight: "0.5px solid black", width: "300px" }}>
                            <p className="ps-4 mt-5 up" style={{ fontSize: "40px" }}>1.55k<sub style={{fontSize:"15px",paddingLeft:"4px"}}>+5.22%</sub></p>
                            <p style={{ fontSize: '18px' }} className="ps-4"  >P&L</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '15px' }} className="pt-5 ps-5 ms-5">Current Value  &nbsp;&nbsp;&nbsp;31.43k</p>
                            <p style={{ fontSize: '15px' }} className="pt-1 ps-5 ms-5">investment &nbsp;&nbsp;&nbsp;29.88kk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;