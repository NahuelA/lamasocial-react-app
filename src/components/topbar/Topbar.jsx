import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Topbar() {
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Lamasocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <SearchIcon className="searchIcon" />
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            ></input>
          </div>
        </div>
        <div className="topbarRight">
          {/* Links */}
          <div className="topbarLinks">
            <div className="topbarLink">Homepage</div>
            <div className="topbarLink">Timeline</div>
          </div>

          {/* Topbar icons  */}
          <div className="topbarIcons">
            {/* Person */}
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
            </div>

            {/* Chat */}
            <div className="topbarIconItem">
              <ChatIcon />
              <span className="topbarIconBadge">2</span>
            </div>

            {/* Notifications */}
            <div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="assets/person/person_6.jpg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
}
