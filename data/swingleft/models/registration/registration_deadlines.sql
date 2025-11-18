{{ config(materialized='table') }}

select
states."state" as state,
cast(reg_deadlines."Registration Deadline In-Person" AS date) as reg_deadline_in_person,
cast(reg_deadlines."Registration Deadline By Mail" AS date) as reg_deadline_mail,
cast(reg_deadlines."Registration Deadline Online" AS date) as reg_deadline_online,
reg_deadlines."Election Day Registration" as same_day_reg,
reg_deadlines."Online Registration Link" as reg_url,
reg_deadlines."Description" as description
from {{ ref('registration_deadlines_seed') }} as reg_deadlines
LEFT JOIN {{ ref('us_states') }} AS states ON reg_deadlines."State" = states."name"
