/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- sure sild

CREATE TABLE public.featureset
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by character varying COLLATE pg_catalog."default"  ,

    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_by character varying COLLATE pg_catalog."default" ,

    deleted_at timestamp with time zone,
    koksmat_masterdataref VARCHAR COLLATE pg_catalog."default",
    koksmat_masterdata_id VARCHAR COLLATE pg_catalog."default",
    koksmat_masterdata_etag VARCHAR COLLATE pg_catalog."default",
    koksmat_compliancetag VARCHAR COLLATE pg_catalog."default",
    koksmat_state VARCHAR COLLATE pg_catalog."default",


    koksmat_bucket JSONB 

    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,searchindex character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 


);

                -- lollipop
                CREATE TABLE public.featureset_m2m_feature (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                created_by character varying COLLATE pg_catalog."default"  ,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_by character varying COLLATE pg_catalog."default",
                deleted_at timestamp with time zone,
                koksmat_masterdataref VARCHAR COLLATE pg_catalog."default",
                koksmat_masterdata_id VARCHAR COLLATE pg_catalog."default",
                koksmat_masterdata_etag VARCHAR COLLATE pg_catalog."default",
                koksmat_compliancetag VARCHAR COLLATE pg_catalog."default",
                koksmat_state VARCHAR COLLATE pg_catalog."default",

                koksmat_bucket JSONB 
                    ,featureset_id int  
 
                    ,feature_id int  
 

                );
            

                ALTER TABLE public.featureset_m2m_feature
                ADD FOREIGN KEY (featureset_id)
                REFERENCES public.featureset (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.featureset_m2m_feature
                ADD FOREIGN KEY (feature_id)
                REFERENCES public.feature (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                -- lollipop
                CREATE TABLE public.featureset_m2m_role (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                created_by character varying COLLATE pg_catalog."default"  ,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_by character varying COLLATE pg_catalog."default",
                deleted_at timestamp with time zone,
                koksmat_masterdataref VARCHAR COLLATE pg_catalog."default",
                koksmat_masterdata_id VARCHAR COLLATE pg_catalog."default",
                koksmat_masterdata_etag VARCHAR COLLATE pg_catalog."default",
                koksmat_compliancetag VARCHAR COLLATE pg_catalog."default",
                koksmat_state VARCHAR COLLATE pg_catalog."default",

                koksmat_bucket JSONB 
                    ,featureset_id int  
 
                    ,role_id int  
 

                );
            

                ALTER TABLE public.featureset_m2m_role
                ADD FOREIGN KEY (featureset_id)
                REFERENCES public.featureset (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.featureset_m2m_role
                ADD FOREIGN KEY (role_id)
                REFERENCES public.role (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----
DROP TABLE IF EXISTS public.featureset_m2m_feature;DROP TABLE IF EXISTS public.featureset_m2m_role;
DROP TABLE public.featureset;
