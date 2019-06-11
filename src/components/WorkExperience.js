import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import Bve_avatar from '../images/bve_avatar.jpg';
import Careteam_avatar from '../images/careteam_avatar.jpg';
import Ip3_avatar from '../images/ip3_avatar.jpg';


class WorkExperience extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;

    return (
      <section id="work" className="col">
        <div className="content-wrap">
          <h1 className="content-title">Work Experience</h1>
          <div>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container alignItems="center">
                  <Avatar alt="Brooklyn View Enterprises avatar" src={ Bve_avatar } className="avatar-work" />
                  <h4>Brooklyn View Enterprises, LLC</h4>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p><span>Dates:</span> 2015 - Present<br/>
                <span>Technologies:</span> Shopify CMS (Liquid), Javascript/JQuery, HTML, CSS, Adobe Creative Suite<br/>
                <span>Title & Description:</span> Web Developer / Graphic Design - develop and maintain
                all aspects of the company website including photography and image editing.<br/>
                <span>Supervisor:</span> Owen<br/>
                <span>Link to website:</span> <a href="https://waxandoils.com/" target="_blank" rel="noopener noreferrer">waxandoils.com</a></p>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container alignItems="center">
                  <Avatar alt="Careteam Health avatar" src={ Careteam_avatar } className="avatar-work" />
                  <h4>Care Team Health</h4>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p><span>Dates:</span> 2017 - Present<br/>
                <span>Technologies:</span> Wordpress CMS (PHP), Avada for Wordpress, Javascript/JQuery, HTML, CSS, Adobe Creative Suite<br/>
                <span>Title & Description:</span> Web Developer - designed website from scratch and maintain/update
                all aspects of the company website including image editing.<br/>
                <span>Supervisor:</span> Heather Burchfield<br/>
                <span>Link to website:</span> <a href="http://careteamhealth.com/" target="_blank" rel="noopener noreferrer">careteamhealth.com</a></p>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container alignItems="center">
                  <Avatar alt="IP3 logo" src={ Ip3_avatar } className="avatar-work" />
                  <h4>Institute for Public-Private Partnerships</h4>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p><span>Dates:</span> 2014 - 2017<br/>
                <span>Technologies:</span> Joomla CMS (PHP), Javascript/JQuery, HTML, CSS, Adobe Creative Suite<br/>
                <span>Title & Description:</span> Web Developer - designed customised Joomla theme and maintained/updated
                all aspects of the company website including image editing and graphic design of company brochures.<br/>
                <span>Supervisors:</span> Charlie Visconage, David Baxter or Seth Gordon<br/>
                <span>Link to website:</span> <a href="http://ip3.org/" target="_blank" rel="noopener noreferrer">ip3.org</a></p>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </section>

    );
  }
}

export default WorkExperience;
