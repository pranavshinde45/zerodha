import { useState } from "react";
import { watchlist } from "../data/data";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material"
import { Tooltip, Grow } from "@mui/material"

function WatchList() {
    return (
        <div className="watchlist-container">
            <div className="search-container border">
                <input type="text" className="watch-input" value={'Search eg:infy, bse, nifty fut weekly, gold mcx'} />
                <span className="ps-5 text-muted">9/50</span>
            </div>
            <ul className="watch-items">
                {
                    watchlist.map((stock, index) => {
                        return <WatchListItem stock={stock} key={index} />
                    })
                }
            </ul>
        </div>
    );
}
export default WatchList;

const WatchListItem = ({ stock }) => {
    const [showWatchListAction, setShowWatchListAction] = useState(false)
    const handleMouseEnter = () => {
        setShowWatchListAction(true)
    }
    const handleMouseLeave = () => {
        setShowWatchListAction(false)
    }

    return (
        <>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="p-3 ps-4 border">
                <div className="item">
                    <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                    <div>
                        <span>{stock.percent}</span>&nbsp;&nbsp;&nbsp;
                        <span>{stock.isDown ?
                            <KeyboardArrowDown className={stock.isDown ? "down" : "up"} /> :
                            <KeyboardArrowUp className={stock.isDown ? "down" : "up"} />}
                        </span>
                        <span>{stock.price}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                {showWatchListAction && <WatchListAction uid={stock.name} />}
            </li>
        </>
    )
}
const WatchListAction = ({ uid }) => {
    return (
        <span>
            <span>
                <Tooltip
                    title="Buy (B)"
                    placement="top"
                    arrow
                    slots={{ transition: Grow }}
                >
                    <button className="buy">Buy</button>
                </Tooltip>
                <Tooltip
                    title="Sell (S)"
                    placement="top"
                    arrow
                    slots={{ transition: Grow }}
                >
                    <button className="sell">Sell</button>
                </Tooltip>
                <Tooltip
                    title="Analtics (A)"
                    placement="top"
                    arrow
                    slots={{ transition: Grow }}
                >
                    <button className="action">
                        <BarChartOutlined/>
                    </button>
                </Tooltip>
                <Tooltip
                    title="More"
                    placement="top"
                    arrow
                    slots={{ transition: Grow }}
                >
                    <button className="more">
                        <MoreHoriz/>
                    </button>
                </Tooltip>
            </span>
        </span>
    )
}