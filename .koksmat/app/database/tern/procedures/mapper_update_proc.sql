/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- sherry sild

CREATE OR REPLACE PROCEDURE proc.update_mapper(
    p_actor_name VARCHAR,
    p_params JSONB
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_id INTEGER;
    v_tenant VARCHAR COLLATE pg_catalog."default" ;
    v_searchindex VARCHAR COLLATE pg_catalog."default" ;
    v_name VARCHAR COLLATE pg_catalog."default" ;
    v_description VARCHAR COLLATE pg_catalog."default";
    v_source_id INTEGER;
    v_transformation_id INTEGER;
    v_target_id INTEGER;
        v_audit_id integer;  -- Variable to hold the OUT parameter value
    p_auditlog_params jsonb;

    
BEGIN
    v_tenant := p_params->>'tenant';
    v_searchindex := p_params->>'searchindex';
    v_name := p_params->>'name';
    v_description := p_params->>'description';
    v_source_id := p_params->>'source_id';
    v_transformation_id := p_params->>'transformation_id';
    v_target_id := p_params->>'target_id';
         
    
        
    UPDATE public.mapper
    SET updated_by = p_actor_name,
        updated_at = CURRENT_TIMESTAMP,
        tenant = v_tenant,
        searchindex = v_searchindex,
        name = v_name,
        description = v_description,
        source_id = v_source_id,
        transformation_id = v_transformation_id,
        target_id = v_target_id
    WHERE id = v_id;


           p_auditlog_params := jsonb_build_object(
        'tenant', '',
        'searchindex', '',
        'name', 'update_mapper',
        'status', 'success',
        'description', '',
        'action', 'update_mapper',
        'entity', 'mapper',
        'entityid', -1,
        'actor', p_actor_name,
        'metadata', p_params
    );
END;
$BODY$
;