// src/components/ActionButton.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';
import ActionButton from './ActionButton';
import "../styles/ActionButton.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import { mdiRhombus } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiRhombusMediumOutline } from '@mdi/js';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import InfoIcon from '@mui/icons-material/Info';
import { FavoriteBorderOutlined } from '@mui/icons-material';

export default {
  title: 'Components/ActionButton',
  component: ActionButton,
};

// Default Story
export const Default = () => (
  <ActionButton label="Click Me" onClick={action('clicked')} />
);

// Master Component Story
export const MasterComponent = () => (
  <div>
    <div className='header'>
      <div>
      Global style
      </div>
      <div>
      Action button
      </div>
      <div>
      Allow users to perform an action. They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.
      </div>


    </div>
    <div className='master-component'>
      <div>
        Master component
      </div>
      <div className='action-design'>
      <div className='flex-1'>
      <div className="larger-size"  onClick={action('larger-size clicked')}><AccountCircleOutlinedIcon fontSize="large"/>Action</div>
  <div className="larger-size flex1-background"><AccountCircleOutlinedIcon fontSize="large"/>Action</div>
  <div className="larger-size opacity"><AccountCircleOutlinedIcon fontSize="large"/>Action</div>
  <div className="medium-size"><AccountCircleOutlinedIcon fontSize="medium"/>Action</div>
  <div className="medium-size flex1-background"><AccountCircleOutlinedIcon fontSize="medium"/>Action</div>
  <div className="medium-size opacity"><AccountCircleOutlinedIcon fontSize="medium"/>Action</div>
  <div className="smaller-size"><AccountCircleOutlinedIcon fontSize="small"/>Action</div>
  <div className="smaller-size flex1-background"><AccountCircleOutlinedIcon fontSize="small"/>Action</div>
  <div className="smaller-size opacity"><AccountCircleOutlinedIcon fontSize="small"/>Action</div>
  <div className="larger-size"><AccountCircleOutlinedIcon fontSize="large"/></div>
  <div className="larger-size flex1-background"><AccountCircleOutlinedIcon fontSize="large"/></div>
  <div className="larger-size opacity"><AccountCircleOutlinedIcon fontSize="large"/></div>
  <div className="medium-size"><AccountCircleOutlinedIcon fontSize="medium"/></div>
  <div className="medium-size flex1-background"><AccountCircleOutlinedIcon fontSize="medium"/></div>
  <div className="medium-size opacity"><AccountCircleOutlinedIcon fontSize="medium"/></div>
  <div className="smaller-size"><AccountCircleOutlinedIcon fontSize="small"/></div>
  <div className="smaller-size flex1-background"><AccountCircleOutlinedIcon fontSize="small"/></div>
  <div className="smaller-size opacity"><AccountCircleOutlinedIcon fontSize="small"/></div>



      </div>
      <div className='flex-2'>
      <div className="larger-size"><AccountCircleOutlinedIcon fontSize="large"/>Action</div>
  <div className="larger-size flex2-background"><AccountCircleOutlinedIcon fontSize="large"/>Action</div>
  <div className="larger-size opacity"><AccountCircleOutlinedIcon fontSize="large"/>Action</div>
  <div className="medium-size"><AccountCircleOutlinedIcon fontSize="medium"/>Action</div>
  <div className="medium-size flex2-background"><AccountCircleOutlinedIcon fontSize="medium"/>Action</div>
  <div className="medium-size opacity"><AccountCircleOutlinedIcon fontSize="medium"/>Action</div>
  <div className="smaller-size"><AccountCircleOutlinedIcon fontSize="small"/>Action</div>
  <div className="smaller-size flex2-background"><AccountCircleOutlinedIcon fontSize="small"/>Action</div>
  <div className="smaller-size opacity"><AccountCircleOutlinedIcon fontSize="small"/>Action</div>
  <div className="larger-size"><AccountCircleOutlinedIcon fontSize="large"/></div>
  <div className="larger-size flex2-background"><AccountCircleOutlinedIcon fontSize="large"/></div>
  <div className="larger-size opacity"><AccountCircleOutlinedIcon fontSize="large"/></div>
  <div className="medium-size"><AccountCircleOutlinedIcon fontSize="medium"/></div>
  <div className="medium-size flex2-background"><AccountCircleOutlinedIcon fontSize="medium"/></div>
  <div className="medium-size opacity"><AccountCircleOutlinedIcon fontSize="medium"/></div>
  <div className="smaller-size"><AccountCircleOutlinedIcon fontSize="small"/></div>
  <div className="smaller-size flex2-background"><AccountCircleOutlinedIcon fontSize="small"/></div>
  <div className="smaller-size opacity"><AccountCircleOutlinedIcon fontSize="small"/></div>
      </div>
      <div className='flex-3'>
      <div className="larger-size"><AccountCircleOutlinedIcon fontSize="large"/>Action</div>
  <div className="larger-size flex3-background"><AccountCircleOutlinedIcon fontSize="large"/>Action</div>
  <div className="larger-size opacity"><AccountCircleOutlinedIcon fontSize="large"/>Action</div>
  <div className="medium-size"><AccountCircleOutlinedIcon fontSize="medium"/>Action</div>
  <div className="medium-size flex3-background"><AccountCircleOutlinedIcon fontSize="medium"/>Action</div>
  <div className="medium-size opacity"><AccountCircleOutlinedIcon fontSize="medium"/>Action</div>
  <div className="smaller-size"><AccountCircleOutlinedIcon fontSize="small"/>Action</div>
  <div className="smaller-size flex3-background"><AccountCircleOutlinedIcon fontSize="small"/>Action</div>
  <div className="smaller-size opacity"><AccountCircleOutlinedIcon fontSize="small"/>Action</div>
  <div className="larger-size"><AccountCircleOutlinedIcon fontSize="large"/></div>
  <div className="larger-size flex3-background"><AccountCircleOutlinedIcon fontSize="large"/></div>
  <div className="larger-size opacity"><AccountCircleOutlinedIcon fontSize="large"/></div>
  <div className="medium-size"><AccountCircleOutlinedIcon fontSize="medium"/></div>
  <div className="medium-size flex3-background"><AccountCircleOutlinedIcon fontSize="medium"/></div>
  <div className="medium-size opacity"><AccountCircleOutlinedIcon fontSize="medium"/></div>
  <div className="smaller-size"><AccountCircleOutlinedIcon fontSize="small"/></div>
  <div className="smaller-size flex3-background"><AccountCircleOutlinedIcon fontSize="small"/></div>
  <div className="smaller-size opacity"><AccountCircleOutlinedIcon fontSize="small"/></div>
</div>

      </div>
    </div>
   
  </div>
);

// Properties (Overview) Story
export const PropertiesOverview = () => (
  <div>
     <div className='header'>
      <div>
      Global style
      </div>
      <div>
      Overview
      </div>
    </div>
     <div className='properties'>
     <div>
       Properties
      </div>
      <div className='property'>
        <div className='property-details'>
        <div className='add'>
          <div style={{fontWeight:"bold"}}>Properties</div>
          <div><AddIcon  /></div>
        </div>
        <div>
          <div className='property-name'>
            <div><Icon path={mdiRhombus} size={0.8} style={{ color: '#7f7f7f', opacity: 0.5 }} />
</div>
<div>Type</div>
            

          </div>
          <div>Default, Neutral,...</div>
        </div>

        <div>
          <div className='property-name'>
            <div><Icon path={mdiRhombus} size={0.8} style={{ color: '#7f7f7f', opacity: 0.5 }} />
</div>
<div>Status</div>
            

          </div>
          <div>Default, Hover,...</div>
        </div>

        <div>
          <div className='property-name'>
            <div><Icon path={mdiRhombus} size={0.8} style={{ color: '#7f7f7f', opacity: 0.5 }} />
</div>
<div>Size</div>
            

          </div>
          <div>Default, Small, X...</div>
        </div>

        <div>
          <div className='property-name'>
            <div><Icon path={mdiRhombus} size={0.8} style={{ color: '#7f7f7f', opacity: 0.5 }} />
</div>
<div>Icon Only</div>
            

          </div>
          <div>No, Yes</div>
        </div>



        <div>
          <div className='property-name'>
            <div><RemoveRedEyeOutlinedIcon style={{ color: '#7f7f7f', opacity: 0.5 }} />

</div>
<div>Icon</div>
            

          </div>
         
        </div>
        <div>
          <div className='property-name'>
            <div><Icon path={mdiRhombusMediumOutline} size={1} style={{ color: '#7f7f7f', opacity: 0.5 }} />

            
</div>
<div>Swap icon</div>
            

          </div>
         
        </div>


        <div>
          <div className='property-name'>
            <div><RemoveRedEyeOutlinedIcon style={{ color: '#7f7f7f', opacity: 0.5 }} />

            
</div>
<div>Text</div>
            

          </div>
         
        </div>

        <div>
          <div className='property-name'>
            <div><TitleOutlinedIcon style={{ color: '#7f7f7f', opacity: 0.5 }} />

            
</div>
<div>Edit text</div>
            

          </div>
         
        </div>

        </div>
      </div>
     </div>
     <div className='display-type'>
      <div>Display type</div>
      <div className='display-box'>
        <div>
          <div>Action</div>
          <div>Text only</div>
        </div>
        <div>
          <div><AccountCircleOutlinedIcon/>Action</div>
          <div>Icon with text</div>
        </div>
        <div>
          <div><AccountCircleOutlinedIcon/></div>
          <div>Icon only</div>
        </div>

      </div>
     </div>
     <div className='anatomy'>
      <div>Anatomy</div>
      <div className='anatomy-box'>
       <div>
        <div>Icon</div>
        <div style={{borderLeft:"2px solid pink" ,marginLeft:"12px", width:"30px",height:"30px"}}></div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div>
        <div style={{borderRight:"2px solid pink" , width:"40px",height:"30px"}}></div>
        <div style={{marginLeft:"26px"}}>Text</div>
       </div>
      </div>
     </div>
     <div className='type'>
      <div> Type</div>
      <div className='type-box'>
        <div>
          <div ><div style={{display:"flex",alignItems:"center","justifyContent":"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div></div>
          <div>Default</div>
        </div>
        <div>
        <div ><div className='flex2-background' style={{display:"flex",alignItems:"center","justifyContent":"center"}}><AccountCircleOutlinedIcon/>Action</div></div>
          <div>Neutral</div>
        </div>
        <div>
        <div ><div className='flex3-background' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"white"}}><AccountCircleOutlinedIcon/>Action</div></div>          
        <div>Reverse</div>
        </div>

      </div>
     </div>
    
     <div className='status'>
      <div> Status</div>
      <div>
        <div style={{fontWeight:"bold",fontSize:"18px"}}>Default</div>
    <div className='default-box'>
        <div>
          <div ><div style={{display:"flex",alignItems:"center","justifyContent":"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div></div>
          <div>Default</div>
        </div>
        <div>
        <div ><div className='flex1-background' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div></div>
          <div>Hover</div>
        </div>
        <div>
        <div ><div className='opacity' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div></div>          
        <div>Disabled</div>
        </div>

      </div>
    </div>
    <div>
        <div style={{fontWeight:"bold",fontSize:"18px"}}>Neutral</div>
    <div className='neutral-box'>
        <div>
          <div ><div style={{display:"flex",alignItems:"center","justifyContent":"center"}}><AccountCircleOutlinedIcon/>Action</div></div>
          <div>Default</div>
        </div>
        <div>
        <div ><div className='flex2-background' style={{display:"flex",alignItems:"center","justifyContent":"center"}}><AccountCircleOutlinedIcon/>Action</div></div>
          <div>Hover</div>
        </div>
        <div>
        <div ><div className='opacity' style={{display:"flex",alignItems:"center","justifyContent":"center"}}><AccountCircleOutlinedIcon/>Action</div></div>          
        <div>Disabled</div>

        </div>

      </div>
    </div>

    <div>
        <div style={{fontWeight:"bold",fontSize:"18px"}}> Reverse</div>
        <div>Reverse version used if the action button located on dark grey background</div>
    <div className='reverse-box' style={{marginTop:"12px"}}>
        <div>
          <div style={{backgroundColor:"black"}} ><div style={{display:"flex",alignItems:"center","justifyContent":"center",color:"white"}}><AccountCircleOutlinedIcon/>Action</div></div>
          <div >Default</div>
        </div>
        <div>
        <div style={{backgroundColor:"black"}}><div className='flex3-background' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"white"}}><AccountCircleOutlinedIcon/>Action</div></div>
          <div>Hover</div>
        </div>
        <div>
        <div style={{backgroundColor:"black"}} ><div className='opacity' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"white"}}><AccountCircleOutlinedIcon/>Action</div></div>          
        <div>Disabled</div>
        </div>

      </div>
    </div>
     </div>
  
     <div className='size-type'>
      <div>Size</div>
      <div className='size-box'>
        <div>
          <div className='size-column larger-size'>
            <div>
            <div ><div style={{display:"flex",alignItems:"center","justifyContent":"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div></div>
            <div ><div style={{display:"flex",alignItems:"center","justifyContent":"center"}}><AccountCircleOutlinedIcon/>Action</div></div>

            <div style={{backgroundColor:"black"}} ><div style={{display:"flex",alignItems:"center","justifyContent":"center",color:"white"}}><AccountCircleOutlinedIcon/>Action</div></div>

            </div>
            <div>
            <div ><div className='flex1-background' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div></div>

            <div ><div className='flex2-background' style={{display:"flex",alignItems:"center","justifyContent":"center"}}><AccountCircleOutlinedIcon/>Action</div></div>

            <div style={{backgroundColor:"black"}}><div className='flex3-background' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"white"}}><AccountCircleOutlinedIcon/>Action</div></div>

            </div>
          </div>
          <div>Default {'(28 px)'}</div>

        </div>
        <div>
        <div className='size-column medium-size'>
            <div>
            <div ><div style={{display:"flex",alignItems:"center","justifyContent":"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div></div>
            <div ><div style={{display:"flex",alignItems:"center","justifyContent":"center"}}><AccountCircleOutlinedIcon/>Action</div></div>

            <div style={{backgroundColor:"black"}} ><div style={{display:"flex",alignItems:"center","justifyContent":"center",color:"white"}}><AccountCircleOutlinedIcon/>Action</div></div>

            </div>
            <div>
            <div ><div className='flex1-background' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div></div>

            <div ><div className='flex2-background' style={{display:"flex",alignItems:"center","justifyContent":"center"}}><AccountCircleOutlinedIcon/>Action</div></div>

            <div style={{backgroundColor:"black"}}><div className='flex3-background' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"white"}}><AccountCircleOutlinedIcon/>Action</div></div>

            </div>
          </div>
          <div>Small {'(24 px)'}</div>
        </div>
        <div>
        <div className='size-column smaller-size'>
            <div>
            <div ><div style={{display:"flex",alignItems:"center","justifyContent":"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div></div>
            <div ><div style={{display:"flex",alignItems:"center","justifyContent":"center"}}><AccountCircleOutlinedIcon/>Action</div></div>

            <div style={{backgroundColor:"black"}} ><div style={{display:"flex",alignItems:"center","justifyContent":"center",color:"white"}}><AccountCircleOutlinedIcon/>Action</div></div>

            </div>
            <div>
            <div ><div className='flex1-background' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"#47B647"}}><AccountCircleOutlinedIcon/>Action</div></div>

            <div ><div className='flex2-background' style={{display:"flex",alignItems:"center","justifyContent":"center"}}><AccountCircleOutlinedIcon/>Action</div></div>

            <div style={{backgroundColor:"black"}}><div className='flex3-background' style={{display:"flex",alignItems:"center","justifyContent":"center",color:"white"}}><AccountCircleOutlinedIcon/>Action</div></div>

            </div>
          </div>
          <div>X-Small {'(22 px)'}</div>
        </div>

      </div>
     </div>

  </div>
);

// Usage Example Story

export const UsageExample = () => (
  <div>
     <div className='header'>
      <div>
      Global style
      </div>
      <div>
      Usage
      </div>
    </div>
   <div className='action-button-short' >
    <div style={{color:"#47B647"}}>
      <div className='do-dont'>
        <div>
          <div><CheckCircleIcon style={{color:"#47B647"}}/></div>
          <div><AccountCircleOutlinedIcon/>Change</div>
          <div><AccountCircleOutlinedIcon/>Undo</div>
          <div><AccountCircleOutlinedIcon/>Retry</div>
          <div><AccountCircleOutlinedIcon/>View</div>
          <div><AccountCircleOutlinedIcon/>Edit</div>





        </div>
        <div>
          <div><CancelRoundedIcon style={{color:"red"}}/></div>
          <div><AccountCircleOutlinedIcon/>OK</div>
          <div><AccountCircleOutlinedIcon/>Continue to collection</div>
          <div><AccountCircleOutlinedIcon/>Got it</div>
          <div><AccountCircleOutlinedIcon/>Cancel product</div>
          <div><AccountCircleOutlinedIcon/>Dismiss</div>





        </div>
      </div>
    </div>
    <div>Keep the action button short, preferably 1 verb.</div>
   </div>

   <div className='action-button-short' >
  <div>
<div>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center" }}><EditNoteOutlinedIcon/><span style={{color:"#47B647"}}>Edit</span></div>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><DeleteOutlinedIcon/><span style={{color:"#47B647"}}>Remove</span></div>
</div>
  </div>
    <div>Icon can be changed based on context to suit your needs</div>
   </div>

   <div className='action-button-short-1' >
    <div>
      <div className='do-dont-1'>
        <div>
          <div><CheckCircleIcon style={{color:"#47B647"}}/></div>
          <div className='message-box'>
            <div>Message here</div>
            <div className='action-cancel'>
              <div>
              Action
              </div>
              <div>
<CloseOutlinedIcon/>
              </div>
            </div>
          </div>
          <div className='message-box' style={{backgroundColor:"#e5ecff",color:"black"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><InfoIcon style={{color:"#4077ff"}}/>Message</div>
            <div className='action-cancel-blue'>
              <div>
              Action
              </div>
              <div>
<CloseOutlinedIcon/>
              </div>
            </div>
          </div>
          





        </div>
        <div>
          <div><CancelRoundedIcon style={{color:"red"}}/></div>
          <div className='message-box'>
            <div>Message here</div>
            <div className='action-cancel'>
              <div>
              Action
              </div>
              <div>
<CloseOutlinedIcon/>
              </div>
            </div>
          </div>
          <div className='message-box' style={{backgroundColor:"#e5ecff",color:"black"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><InfoIcon style={{color:"#4077ff"}}/>Message</div>
            <div className='action-cancel-blue'>
              <div>
              Action
              </div>
              <div>
<CloseOutlinedIcon/>
              </div>
            </div>
          </div>
         





        </div>
      </div>
    </div>
    <div>Shouldn't use icon with text when putting it in some components such as Toast, Inform,... </div>
   </div>
   <div className='anatomy example'>
      <div>Example</div>
      <div className='anatomy-box example-box' >
       <div>
        <table style={{borderCollapse: 'collapse',border:"1px solid grey",borderRadius:"12px"}}>
          <tr style={{borderBottom:"1px solid grey"}}>
          <th style={{ backgroundColor: "#f2f3f5", padding: "10px" }}>Title</th>
    <th style={{ backgroundColor: "#f2f3f5", textAlign: "left", padding: "10px" }}>Title</th>
    <th style={{ backgroundColor: "#f2f3f5", padding: "10px" }}>Number</th>
    <th style={{ backgroundColor: "#f2f3f5", padding: "10px" }}>Status</th>
    <th style={{ backgroundColor: "#f2f3f5", padding: "10px" }}>Action</th>
          </tr>
          <tr style={{borderBottom:"1px solid grey"}}>
            <td><div style={{width:"40px",height:"40px",backgroundColor:"#d9d9d9"}}></div></td>
            <td>Lorem ipsum</td>
            <td style={{textAlign:"right"}}>100</td>
            <td><div style={{padding:"5px",background:"#dbffe4",color: "#47B647",borderRadius:"5px"}}>Active</div></td>
            <td>  <div style={{display:"flex",alignItems:"center",justifyContent:"center" }}><EditNoteOutlinedIcon style={{color:"blue"}}/><span style={{color:"#47B647"}}>Edit</span></div>
</td>
          </tr>
          <tr style={{borderBottom:"1px solid grey"}}>
            <td><div style={{width:"40px",height:"40px",backgroundColor:"#d9d9d9"}}></div></td>
            <td>Lorem ipsum</td>
            <td style={{textAlign:"right"}}>1000</td>
            <td><div style={{padding:"5px",background:"#f2f3f5",borderRadius:"5px"}}>Inactive</div></td>
            <td>  <div style={{display:"flex",alignItems:"center",justifyContent:"center" }}><EditNoteOutlinedIcon style={{color:"blue"}}/><span style={{color:"#47B647"}}>Edit</span></div>
</td>
          </tr>
          <tr>
            <td><div style={{width:"40px",height:"40px",backgroundColor:"#d9d9d9"}}></div></td>
            <td>Lorem ipsum</td>
            <td style={{textAlign:"right"}}>10000</td>
            <td><div style={{padding:"5px",background:"#f2f3f5",borderRadius:"5px"}}>Inactive</div></td>
            <td>  <div style={{display:"flex",alignItems:"center",justifyContent:"center" }}><EditNoteOutlinedIcon style={{color:"blue"}}/><span style={{color:"#47B647"}}>Edit</span></div>
</td>
          </tr>
        </table>
       </div>
      </div>
     </div>

     <div className='anatomy-1-box mobile-view-end' style={{marginTop:"12px"}}>
<div className='fav'>
 <div className='fav-button'>
<div className='favicon'>
  <div><FavoriteBorderIcon/></div>
  <div>Added favourite list</div>
</div>
<div className="favbtn">Button</div>
 </div>
 <div className='btn'>
  Button
 </div>
</div>

     </div>
  </div>
);
