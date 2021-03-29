import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SidebarOption from './SidebarOption';
import {Button} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar(){
    return(
     <div className="sidebar">
          <TwitterIcon className="sidebar-tweeticon"/>
          <SidebarOption active Icon={HomeIcon} text="Home"/>
          <SidebarOption Icon={SearchIcon} text="Explore"/>
          <SidebarOption Icon={NotificationsNoneIcon} text="Notifictions"/>
          <SidebarOption Icon={MailOutlineIcon} text="Message"/>
          <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
          <SidebarOption Icon={ListAltIcon} text="Lists"/>
          <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
          <SidebarOption Icon={MoreHorizIcon} text="More"/>
          <Button variant='outlined' className="sidebar-tweet" fullWidth>Tweet</Button>
     </div>
    );
}

export default Sidebar;
