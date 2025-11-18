/**
 * THIS IS A MOCK DATA RESPONSE FROM /api/registration TO SUPPORT THE
 * VERCEL DEPLOYED DEMO SITE WITHOUT HAVING SPINNING UP A PROD POSTGRES
 * DATABASE AND API SERVER.
 */
import { IRegistrationDeadline, State } from "src/app/models";

const MOCK_DATA: IRegistrationDeadline[] = [
  {
    state: State.AK,
    reg_deadline_in_person: 1538870400000,
    reg_deadline_mail: 1538870400000,
    reg_deadline_online: 1538870400000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://voterregistration.alaska.gov/",
    description: "Postmarked or submitted 30 days before the election."
  },
  {
    state: State.AL,
    reg_deadline_in_person: 1540166400000,
    reg_deadline_mail: 1540166400000,
    reg_deadline_online: 1540166400000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://www.alabamavotes.gov/olvr/default.aspx",
    description: "Postmarked or submitted 15 days before the election."
  },
  {
    state: State.AR,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: null,
    description: "Postmarked or submitted 30 days before Election Day.  If it falls on a Sunday, 29 days before Election Day."
  },
  {
    state: State.AZ,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://servicearizona.com/webapp/evoter/selectLanguage",
    description: "Received 29 days before Election Day."
  },
  {
    state: State.CA,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1540771200000,
    reg_deadline_online: 1540166400000,
    same_day_reg: "In-person through Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/http://registertovote.ca.gov/",
    description: "If the voter registration deadline has passed, you can still conditionally register to vote and cast a provisional ballot in person at your County Elections Office through Election Day."
  },
  {
    state: State.CO,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1540771200000,
    reg_deadline_online: 1540771200000,
    same_day_reg: "In-person through Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/https://www.sos.state.co.us/voter-classic/secuVerifyExist.do",
    description: "You can register and cast a ballot up through Election Day by appearing in-person at a Voter Service and Polling Center."
  },
  {
    state: State.CT,
    reg_deadline_in_person: 1540857600000,
    reg_deadline_mail: 1540857600000,
    reg_deadline_online: 1540857600000,
    same_day_reg: "Or in-person on Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/https://voterregistration.ct.gov/OLVR/welcome.do",
    description: "Postmarked or submitted 7 days before the election online, mail or in person. On Election Day at designated locations in each city or town."
  },
  {
    state: State.DC,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1539648000000,
    reg_deadline_online: 1539648000000,
    same_day_reg: "In-person through Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/https://www.vote4dc.com/Voter/Home/SearchMain",
    description: "Received 21 days before the election."
  },
  {
    state: State.DE,
    reg_deadline_in_person: 1539388800000,
    reg_deadline_mail: 1539388800000,
    reg_deadline_online: 1539388800000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://ivote.de.gov/voterlogin.aspx",
    description: "Postmarked or submitted by the fourth Saturday before a general or primary election."
  },
  {
    state: State.FL,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://registertovoteflorida.gov/en/Registration/Index",
    description: "Postmarked or submitted 29 days before Election Day.  If you have returned from a deployment outside the US after the deadline you can register until 5 pm, Nov. 2."
  },
  {
    state: State.GA,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://registertovote.sos.ga.gov/GAOLVR/#no-back-button",
    description: "Postmarked or submitted 29 days before Election Day."
  },
  {
    state: State.HI,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: "Or in-person on Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/https://olvr.hawaii.gov/%28S%28hj2uglexu4a4fznh5odixv5u%29%29/Default.aspx",
    description: "Received 29 days before Election Day."
  },
  {
    state: State.IA,
    reg_deadline_in_person: 1540598400000,
    reg_deadline_mail: 1540598400000,
    reg_deadline_online: 1540598400000,
    same_day_reg: "Or in-person on Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2fVoterRegistration",
    description: "Received 10 days before election. On Election Day at your polling place."
  },
  {
    state: State.ID,
    reg_deadline_in_person: 1539302400000,
    reg_deadline_mail: 1539302400000,
    reg_deadline_online: 1539302400000,
    same_day_reg: "In-person through Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/https://apps.idahovotes.gov/OnlineVoterRegistration",
    description: "Postmarked or submitted 25 days before Election Day. On Election Day with proof of residence at your polling place."
  },
  {
    state: State.IL,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1540080000000,
    same_day_reg: "In-person through Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/https://ova.elections.il.gov/RegistrationClosed.aspx",
    description: "Postmarked or submitted 28 days before the election. In person anytime after mail deadline and on Election Day at sites designated by your county election office."
  },
  {
    state: State.IN,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://indianavoters.in.gov/PublicSite/OVR/Introduction.aspx?Link=Polling",
    description: "Postmarked or submitted 29 days before the election."
  },
  {
    state: State.KS,
    reg_deadline_in_person: 1539648000000,
    reg_deadline_mail: 1539648000000,
    reg_deadline_online: 1539648000000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://www.kdor.org/voterregistration/Default.aspx",
    description: "Postmarked or submitted online or in person 21 days before the election if mailed."
  },
  {
    state: State.KY,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://vrsws.sos.ky.gov/ovrweb/",
    description: "Postmarked or submitted 29 days before the election."
  },
  {
    state: State.LA,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539648000000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://onlinevoterregistration.sos.la.gov/?Referrer=http%3A%2F%2Fwww.sos.la.gov%2FElectionsAndVoting%2FRegisterToVote%2FPages%2Fdefault.aspx",
    description: "Received 30 days before Election Day unless that falls on a Sunday, in which case it is 29 days before Election Day."
  },
  {
    state: State.MA,
    reg_deadline_in_person: 1539734400000,
    reg_deadline_mail: 1539734400000,
    reg_deadline_online: 1539734400000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://www.sec.state.ma.us/ovr/",
    description: "Postmarked or submitted 20 days before the election."
  },
  {
    state: State.MD,
    reg_deadline_in_person: 1541030400000,
    reg_deadline_mail: 1539648000000,
    reg_deadline_online: 1539648000000,
    same_day_reg: "Or in-person during early voting",
    reg_url: "https://web.archive.org/web/20190209174006/https://voterservices.elections.state.md.us/OnlineVoterRegistration/VoterType",
    description: "Postmarked or submitted 21 days before the election."
  },
  {
    state: State.ME,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1539648000000,
    reg_deadline_online: 1539648000000,
    same_day_reg: "In-person on Election Day",
    reg_url: null,
    description: "If mailed or from a registration drive, received by the 21st day before the election. Anytime in-person at your election office and on Election Day at your polling place."
  },
  {
    state: State.MI,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: null,
    description: "Postmarked or submitted 30 days before the election."
  },
  {
    state: State.MN,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1539648000000,
    reg_deadline_online: 1539648000000,
    same_day_reg: "In-person through Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationStep1.aspx",
    description: "Received 21 days before the election. On Election Day at your polling place."
  },
  {
    state: State.MO,
    reg_deadline_in_person: 1539129600000,
    reg_deadline_mail: 1539129600000,
    reg_deadline_online: 1539129600000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/http://s1.sos.mo.gov/elections/goVoteMissouri/register.aspx",
    description: "Postmarked or submitted by the 4th Wednesday before Election Day."
  },
  {
    state: State.MS,
    reg_deadline_in_person: 1538956800000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: null,
    description: "Postmarked or submitted by the 5th Saturday before Election Day."
  },
  {
    state: State.MT,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: "In-person through Election Day",
    reg_url: null,
    description: "Postmarked 30 days before the election unless it’s a Sunday in which case it’s 29 days. In person anytime after the advance deadline at your county election office including on Election Day."
  },
  {
    state: State.NC,
    reg_deadline_in_person: 1541203200000,
    reg_deadline_mail: 1539302400000,
    reg_deadline_online: 1539302400000,
    same_day_reg: null,
    reg_url: null,
    description: "Postmarked or submitted 25 days before the election."
  },
  {
    state: State.ND,
    reg_deadline_in_person: 1514764800000,
    reg_deadline_mail: 1514764800000,
    reg_deadline_online: 1514764800000,
    same_day_reg: null,
    reg_url: null,
    description: "North Dakota does not have voter registration."
  },
  {
    state: State.NE,
    reg_deadline_in_person: 1540512000000,
    reg_deadline_mail: 1539907200000,
    reg_deadline_online: 1539907200000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://www.nebraska.gov/apps-sos-voter-registration/",
    description: "Postmarked the third Friday before the election by mail. Received in person from voter at local election office the second Friday before the election."
  },
  {
    state: State.NH,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1540339200000,
    reg_deadline_online: 1540339200000,
    same_day_reg: "In-person through Election Day",
    reg_url: null,
    description: "Received 10 days before the election by mail. On Election Day at your polling place."
  },
  {
    state: State.NJ,
    reg_deadline_in_person: 1539648000000,
    reg_deadline_mail: 1539648000000,
    reg_deadline_online: 1539648000000,
    same_day_reg: null,
    reg_url: null,
    description: "Received 21 days before the election. On Election Day at your polling place."
  },
  {
    state: State.NM,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://portal.sos.state.nm.us/OVR/%28S%28dyulgu4zbqvffujw1uvhzm11%29%29/WebPages/InstructionsStep1.aspx",
    description: "Postmarked or submitted 28 days before the election. In person anytime after mail deadline and on Election Day at sites designated by your county election office."
  },
  {
    state: State.NV,
    reg_deadline_in_person: 1539648000000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539820800000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://nvsos.gov/sosvoterservices/Registration/step1.aspx",
    description: "31 days before Election Day by mail. 21 days if online or in-person."
  },
  {
    state: State.NY,
    reg_deadline_in_person: 1539302400000,
    reg_deadline_mail: 1539302400000,
    reg_deadline_online: 1539302400000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/http://dmv.ny.gov/more-info/electronic-voter-registration-application",
    description: "Postmarked 25 days and received 20 days before the election. Submitted in-person 25 days before the election."
  },
  {
    state: State.OH,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://olvr.sos.state.oh.us/",
    description: "Received 30 days before election."
  },
  {
    state: State.OK,
    reg_deadline_in_person: 1539302400000,
    reg_deadline_mail: 1539302400000,
    reg_deadline_online: 1539302400000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://www.ok.gov/elections/Online_Voter_Registration.html",
    description: "Postmarked or submitted 25 days before the election."
  },
  {
    state: State.OR,
    reg_deadline_in_person: 1539648000000,
    reg_deadline_mail: 1539648000000,
    reg_deadline_online: 1539648000000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://secure.sos.state.or.us/orestar/vr/register.do?lang=eng&source=SOS",
    description: "Received 21 days before the election"
  },
  {
    state: State.PA,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://www.pavoterservices.state.pa.us/Pages/VoterRegistrationApplication.aspx",
    description: "Received 30 days before the election. On Election Day at city or town hall in presidential year for office of president only."
  },
  {
    state: State.RI,
    reg_deadline_in_person: 1538870400000,
    reg_deadline_mail: 1538870400000,
    reg_deadline_online: 1538870400000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://vote.sos.ri.gov/ovr",
    description: "Received 30 days before the election. On Election Day at city or town hall in presidential year for office of president only."
  },
  {
    state: State.SC,
    reg_deadline_in_person: 1539734400000,
    reg_deadline_mail: 1539734400000,
    reg_deadline_online: 1539734400000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://info.scvotes.sc.gov/eng/ovr/start.aspx",
    description: "Postmarked or submitted 30 days before the election."
  },
  {
    state: State.SD,
    reg_deadline_in_person: 1540166400000,
    reg_deadline_mail: 1540166400000,
    reg_deadline_online: 1540166400000,
    same_day_reg: null,
    reg_url: null,
    description: "Received 15 days before the election."
  },
  {
    state: State.TN,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://ovr.govote.tn.gov/",
    description: "Postmarked or submitted 30 days before the election."
  },
  {
    state: State.TX,
    reg_deadline_in_person: 1539043200000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1539043200000,
    same_day_reg: null,
    reg_url: null,
    description: "Postmarked or submitted 30 days before the election."
  },
  {
    state: State.UT,
    reg_deadline_in_person: 1540857600000,
    reg_deadline_mail: 1539043200000,
    reg_deadline_online: 1540857600000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://secure.utah.gov/voterreg/index.html",
    description: "Postmarked 30 days before the election by mail. Submitted 7 days before election online or in person at county election office."
  },
  {
    state: State.VA,
    reg_deadline_in_person: 1539561600000,
    reg_deadline_mail: 1539561600000,
    reg_deadline_online: 1539561600000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://www.vote.virginia.gov/",
    description: "Postmarked or submitted 22 days before the election."
  },
  {
    state: State.VT,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1541462400000,
    reg_deadline_online: 1541462400000,
    same_day_reg: "In-person through Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/https://olvr.sec.state.vt.us/",
    description: null
  },
  {
    state: State.WA,
    reg_deadline_in_person: 1540771200000,
    reg_deadline_mail: 1538956800000,
    reg_deadline_online: 1538956800000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/http://www.sos.wa.gov/elections/myvote/olvr.html",
    description: "Postmarked or submitted the Monday four weeks before the election by mail or online. Submitted in person on the Monday one week before the election in person."
  },
  {
    state: State.WI,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1539734400000,
    reg_deadline_online: 1539734400000,
    same_day_reg: "In-person through Election Day",
    reg_url: "https://web.archive.org/web/20190209174006/https://myvote.wi.gov/en-us/RegisterToVote",
    description: "Postmarked 20 days before the election. In-person by the voter the Friday before the election. On Election Day at your polling place."
  },
  {
    state: State.WV,
    reg_deadline_in_person: 1539648000000,
    reg_deadline_mail: 1539648000000,
    reg_deadline_online: 1539648000000,
    same_day_reg: null,
    reg_url: "https://web.archive.org/web/20190209174006/https://ovr.sos.wv.gov/Register#Qualifications",
    description: "Postmarked or submitted 21 days before the election."
  },
  {
    state: State.WY,
    reg_deadline_in_person: 1541462400000,
    reg_deadline_mail: 1540166400000,
    reg_deadline_online: 1540166400000,
    same_day_reg: "In-person through Election Day",
    reg_url: null,
    description: "You may register and vote at the same time — during the absentee voting period or on Election Day."
  }
];

export default MOCK_DATA;