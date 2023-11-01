/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v1": {
    get: operations["AppController_getHello"];
  };
  "/api/v1/logger/level": {
    get: operations["LoggerController_getLevel"];
    post: operations["LoggerController_setLevel"];
  };
  "/api/v1/health": {
    get: operations["HealthController_check"];
  };
  "/api/v1/categories/{id}": {
    get: operations["CategoryController_read"];
    put: operations["CategoryController_update"];
    delete: operations["CategoryController_delete"];
  };
  "/api/v1/categories": {
    get: operations["CategoryController_list"];
    post: operations["CategoryController_create"];
  };
  "/api/v1/categories/search": {
    post: operations["CategoryController_search"];
  };
  "/api/v1/units": {
    get: operations["UnitController_list"];
  };
  "/api/v1/units/{id}": {
    get: operations["UnitController_read"];
  };
  "/api/v1/countries": {
    get: operations["CountryController_list"];
  };
  "/api/v1/countries/{id}": {
    get: operations["CountryController_read"];
  };
  "/api/v1/sites": {
    get: operations["SiteController_list"];
  };
  "/api/v1/sites/{id}": {
    get: operations["SiteController_read"];
    put: operations["SiteController_update"];
  };
  "/api/v1/reporting/total-emissions": {
    post: operations["ReportingController_findAll"];
  };
  "/api/v1/ccfs": {
    get: operations["CcfController_list"];
    post: operations["CcfController_create"];
  };
  "/api/v1/ccfs/{id}": {
    get: operations["CcfController_read"];
    put: operations["CcfController_update"];
    delete: operations["CcfController_delete"];
  };
  "/api/v1/ccfs/{id}/scopes": {
    get: operations["CcfController_listScopes"];
  };
  "/api/v1/ccfs/{id}/scopes/{scopeId}": {
    get: operations["CcfController_readScope"];
  };
  "/api/v1/ccfs/{id}/sites": {
    get: operations["CcfController_listSite"];
  };
  "/api/v1/ccfs/{id}/sites/{ccfSiteId}": {
    get: operations["CcfController_readSites"];
    delete: operations["CcfController_deleteSite"];
  };
  "/api/v1/suppliers": {
    get: operations["SupplierController_list"];
    post: operations["SupplierController_create"];
  };
  "/api/v1/suppliers/{id}": {
    get: operations["SupplierController_read"];
    put: operations["SupplierController_update"];
    delete: operations["SupplierController_delete"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Category: {
      id: string;
      externalId: string;
      name: string;
      created_at: string;
      updated_at: string;
      modified_by: string;
    };
    PaginatedCategory: {
      elements: components["schemas"]["Category"][];
      /** @example 1000 */
      total_elements: number;
      /** @example 1 */
      page: number;
      /** @example 100 */
      page_size: number;
    };
    CreateCategoryDto: {
      /** @description Name of the category */
      name: string;
      /** @description External ID of the category */
      externalId: string;
    };
    UpdateCategoryDto: {
      /** @description Name of the category */
      name?: string;
      /** @description External ID of the category */
      externalId?: string;
    };
    PaginationQuery: {
      /**
       * @description Page number
       * @default 1
       */
      page?: number;
      /**
       * @description Page size
       * @default 100
       */
      page_size?: number;
    };
    UpdateSiteDto: {
      /** @description Name of the site */
      name?: string;
      /** @description External ID of the site */
      external_id?: string;
      /** @description Country ID of the site */
      country_id?: string;
      /** @description Metadata of the site */
      metadata?: Record<string, never>;
      /** @description House number for site */
      house_number?: string;
      /** @description Street number for site */
      street_number?: string;
      /** @description zip for site */
      zip?: string;
      /** @description City for site */
      city?: string;
    };
    SearchRootQueryDto: Record<string, never>;
    GetReportingDto: {
      /**
       * @description Page number
       * @default 1
       */
      page?: number;
      /**
       * @description Page size
       * @default 25
       */
      page_size?: number;
      /** @description Search query */
      query?: components["schemas"]["SearchRootQueryDto"];
      /** @description Search fields to group by */
      groupBy?: string[];
    };
    CreateCCFDto: {
      /** @description Name of the category */
      name: string;
      external_id: string;
      /** Format: date-time */
      start_date: string;
      /** Format: date-time */
      end_date: string;
      progress_status: string;
    };
    CountryDTO: {
      id: string;
      name: string;
    };
    UpdateSupplierDto: {
      /** @description Name of the site */
      name?: string;
      collaboration_status?: string;
      /** @description External ID of the site */
      external_id?: string;
      notes?: string;
      street?: string;
      zip?: string;
      city?: string;
      country?: components["schemas"]["CountryDTO"];
    };
    CreateSupplierDto: {
      /** @description Name of the site */
      name: string;
      collaboration_status: string;
      /** @description External ID of the site */
      external_id: string;
      notes: string;
      street: string;
      zip: string;
      city: string;
      country: components["schemas"]["CountryDTO"];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  AppController_getHello: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  LoggerController_getLevel: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  LoggerController_setLevel: {
    responses: {
      201: {
        content: never;
      };
    };
  };
  HealthController_check: {
    responses: {
      /** @description The Health Check is successful */
      200: {
        content: {
          "application/json": {
            /** @example ok */
            status?: string;
            /**
             * @example {
             *   "database": {
             *     "status": "up"
             *   }
             * }
             */
            info?: ({
              [key: string]: {
                status?: string;
                [key: string]: string | undefined;
              };
            }) | null;
            /** @example {} */
            error?: ({
              [key: string]: {
                status?: string;
                [key: string]: string | undefined;
              };
            }) | null;
            /**
             * @example {
             *   "database": {
             *     "status": "up"
             *   }
             * }
             */
            details?: {
              [key: string]: {
                status?: string;
                [key: string]: string | undefined;
              };
            };
          };
        };
      };
      /** @description The Health Check is not successful */
      503: {
        content: {
          "application/json": {
            /** @example error */
            status?: string;
            /**
             * @example {
             *   "database": {
             *     "status": "up"
             *   }
             * }
             */
            info?: ({
              [key: string]: {
                status?: string;
                [key: string]: string | undefined;
              };
            }) | null;
            /**
             * @example {
             *   "redis": {
             *     "status": "down",
             *     "message": "Could not connect"
             *   }
             * }
             */
            error?: ({
              [key: string]: {
                status?: string;
                [key: string]: string | undefined;
              };
            }) | null;
            /**
             * @example {
             *   "database": {
             *     "status": "up"
             *   },
             *   "redis": {
             *     "status": "down",
             *     "message": "Could not connect"
             *   }
             * }
             */
            details?: {
              [key: string]: {
                status?: string;
                [key: string]: string | undefined;
              };
            };
          };
        };
      };
    };
  };
  CategoryController_read: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Category"];
        };
      };
    };
  };
  CategoryController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateCategoryDto"];
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CategoryController_delete: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CategoryController_list: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Page size */
        page_size?: number;
        /** @description Name of the category */
        name?: string;
        /** @description External ID of the category */
        externalId?: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedCategory"];
        };
      };
    };
  };
  CategoryController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateCategoryDto"];
      };
    };
    responses: {
      201: {
        content: never;
      };
    };
  };
  CategoryController_search: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Page size */
        page_size?: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PaginationQuery"];
      };
    };
    responses: {
      201: {
        content: never;
      };
    };
  };
  UnitController_list: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Page size */
        page_size?: number;
        /**
         * @description Sort field and order. Expected fields will be given in the error message.
         * @example +foo,-bar
         */
        sort?: string;
        /** @description Name of the unit */
        name?: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  UnitController_read: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CountryController_list: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Page size */
        page_size?: number;
        /**
         * @description Sort field and order. Expected fields will be given in the error message.
         * @example +foo,-bar
         */
        sort?: string;
        /** @description Name of the country */
        name?: string;
        /** @description Code of the country */
        countryCode?: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CountryController_read: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  SiteController_list: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Page size */
        page_size?: number;
        /**
         * @description Sort field and order. Expected fields will be given in the error message.
         * @example +foo,-bar
         */
        sort?: string;
        /** @description Name of the site */
        name?: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  SiteController_read: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  SiteController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateSiteDto"];
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  ReportingController_findAll: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["GetReportingDto"];
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CcfController_list: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Page size */
        page_size?: number;
        /**
         * @description Sort field and order. Expected fields will be given in the error message.
         * @example +foo,-bar
         */
        sort?: string;
        /** @description Name of the ccf */
        name?: string;
        /** @description External id of the ccf */
        external_id?: string;
        /** @description Progress status of the ccf */
        progress_status?: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CcfController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateCCFDto"];
      };
    };
    responses: {
      201: {
        content: never;
      };
    };
  };
  CcfController_read: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CcfController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateCCFDto"];
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CcfController_delete: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CcfController_listScopes: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Page size */
        page_size?: number;
        /**
         * @description Sort field and order. Expected fields will be given in the error message.
         * @example +foo,-bar
         */
        sort?: string;
        product_type?: string;
        item_scope_type?: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CcfController_readScope: {
    parameters: {
      path: {
        id: string;
        scopeId: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CcfController_listSite: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Page size */
        page_size?: number;
      };
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CcfController_readSites: {
    parameters: {
      path: {
        id: string;
        ccfSiteId: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CcfController_deleteSite: {
    parameters: {
      path: {
        id: string;
        ccfSiteId: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  SupplierController_list: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Page size */
        page_size?: number;
        /**
         * @description Sort field and order. Expected fields will be given in the error message.
         * @example +foo,-bar
         */
        sort?: string;
        /** @description Name of the site */
        name?: string;
        /** @description External id of the ccf */
        external_id?: string;
        house_number?: string;
        zip?: string;
        city?: string;
        collaboration_status?: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  SupplierController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateSupplierDto"];
      };
    };
    responses: {
      201: {
        content: never;
      };
    };
  };
  SupplierController_read: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  SupplierController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateSupplierDto"];
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  SupplierController_delete: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
}
