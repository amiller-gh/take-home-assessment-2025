// Model type definitions have been pulled out to their own file so they can be 
// shared by the server and client without needing to jump through hoops to
// exclude postgres / sequelize from the client side bundle. Sequelize Model 
// initialization happens currently in the `/api/registration` route.

// For simple applications, I enjoy using the JSend spec for server <> client
// REST APIs. These are types to support it. https://github.com/omniti-labs/jsend
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export interface JSendSuccessResponse<Data=any> {
  status: 'success';
  data?: Data;
}

export interface JSendErrorResponse {
  status: 'error';
  message: string;
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type JSendResponse<Data=any> = JSendSuccessResponse<Data> | JSendErrorResponse;

// Mirrors the DBT data transform. In a production application I'd like a single source
// of truth for types and transforms shared by the client side application and DBT.
export interface IRegistrationDeadline {
  state: State;
  reg_deadline_in_person: number;
  reg_deadline_mail: number;
  reg_deadline_online: number;
  same_day_reg: string | null;
  reg_url: string | null;
  description: string | null;
}

export enum SortField {
  NAME = "state-name-sort",
  IN_PERSON = "in-person-sort",
  MAIL = "by-mail-sort",
  ONLINE = "online-sort",
}

export enum State {
    AL = "AL",
    AK = "AK",
    AS = "AS",
    AZ = "AZ",
    AR = "AR",
    CA = "CA",
    CO = "CO",
    CT = "CT",
    DE = "DE",
    DC = "DC",
    FM = "FM",
    FL = "FL",
    GA = "GA",
    GU = "GU",
    HI = "HI",
    ID = "ID",
    IL = "IL",
    IN = "IN",
    IA = "IA",
    KS = "KS",
    KY = "KY",
    LA = "LA",
    ME = "ME",
    MH = "MH",
    MD = "MD",
    MA = "MA",
    MI = "MI",
    MN = "MN",
    MS = "MS",
    MO = "MO",
    MT = "MT",
    NE = "NE",
    NV = "NV",
    NH = "NH",
    NJ = "NJ",
    NM = "NM",
    NY = "NY",
    NC = "NC",
    ND = "ND",
    MP = "MP",
    OH = "OH",
    OK = "OK",
    OR = "OR",
    PW = "PW",
    PA = "PA",
    PR = "PR",
    RI = "RI",
    SC = "SC",
    SD = "SD",
    TN = "TN",
    TX = "TX",
    UM = "UM",
    UT = "UT",
    VT = "VT",
    VI = "VI",
    VA = "VA",
    WA = "WA",
    WV = "WV",
    WI = "WI",
    WY = "WY",
    AB = "AB",
    BC = "BC",
    MB = "MB",
    NB = "NB",
    NL = "NL",
    NT = "NT",
    NS = "NS",
    NU = "NU",
    ON = "ON",
    PE = "PE",
    QC = "QC",
    SK = "SK",
    YT = "YT",
    ENG = "ENG",
    NIR = "NIR",
    SCT = "SCT",
    WLS = "WLS",
    AE = "AE",
    AP = "AP",
    AA = "AA"
}
