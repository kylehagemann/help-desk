export const ERROR_OBJECT_DATA = "Error Processing Object Data";
export const MISSING_FILTERED_DATA = "No Data To Be Filtered";
export const MISSING_CHECKBOX = "Missing Checkbox Controls";
export const MISSING_SEARCH_INPUT = "Missing Search Input Controls";
export const ORGANIZATION_FIELDS = 
`
_id,
url
external_id
name
domain_names
created_at
details
shared_tickets
tags
`;
export const TICKET_FIELDS = 
`
_id,
url,
external_id,
created_at,
type,
subject,
description,
priority,
status,
submitter_id,
assignee_id,
organization_id,
tags,
has_incidents,
via,
`;
export const USER_FIELDS = 
`
_id
url,
external_id,
name,
alias,
created_at,
active,
verified,
shared,
locale,
timezone,
last_login_at,
email,
phone,
signature,
organization_id,
tags,
suspended,
role
`;
export const WELCOME_MESSAGE = 
`Instructions: Click on the filter checkboxes below to toggle by Organizations, Tickets and Users.
To toggle between a filtering search (narrowing results that are similar such as "th" resulting
in the, there, etc...) and an exact search, click on the exact match checkbox. Filtering can be 
done independently on the search key and/or value. When using exact search, a key must be entered 
first before entering a value (as indicated by the required text). Empty value matching is possible 
in exact match, just enter your key filter first and if it has an empty value, there is no need to 
enter anything in the value field (ex: filter key: "details", filter value: "").`;
