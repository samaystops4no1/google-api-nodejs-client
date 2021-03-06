/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Admin Reports API
 *
 * Fetches reports for the administrators of G Suite customers about the usage,
 * collaboration, security, and risk for their users.
 *
 * @example
 * const google = require('googleapis');
 * const admin = google.admin('reports_v1');
 *
 * @namespace admin
 * @type {Function}
 * @version reports_v1
 * @variation reports_v1
 * @param {object=} options Options for Admin
 */
export class Admin {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  activities: Resource$Activities;
  channels: Resource$Channels;
  customerUsageReports: Resource$Customerusagereports;
  entityUsageReports: Resource$Entityusagereports;
  userUsageReport: Resource$Userusagereport;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.activities = new Resource$Activities(this);
    this.channels = new Resource$Channels(this);
    this.customerUsageReports = new Resource$Customerusagereports(this);
    this.entityUsageReports = new Resource$Entityusagereports(this);
    this.userUsageReport = new Resource$Userusagereport(this);
  }
}

/**
 * JSON template for a collection of activites.
 */
export interface Schema$Activities {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Each record in read response.
   */
  items: Schema$Activity[];
  /**
   * Kind of list response this is.
   */
  kind: string;
  /**
   * Token for retrieving the next page
   */
  nextPageToken: string;
}
/**
 * JSON template for the activity resource.
 */
export interface Schema$Activity {
  /**
   * User doing the action.
   */
  actor: any;
  /**
   * ETag of the entry.
   */
  etag: string;
  /**
   * Activity events.
   */
  events: any[];
  /**
   * Unique identifier for each activity record.
   */
  id: any;
  /**
   * IP Address of the user doing the action.
   */
  ipAddress: string;
  /**
   * Kind of resource this is.
   */
  kind: string;
  /**
   * Domain of source customer.
   */
  ownerDomain: string;
}
/**
 * An notification channel used to watch for resource changes.
 */
export interface Schema$Channel {
  /**
   * The address where notifications are delivered for this channel.
   */
  address: string;
  /**
   * Date and time of notification channel expiration, expressed as a Unix
   * timestamp, in milliseconds. Optional.
   */
  expiration: string;
  /**
   * A UUID or similar unique string that identifies this channel.
   */
  id: string;
  /**
   * Identifies this as a notification channel used to watch for changes to a
   * resource. Value: the fixed string &quot;api#channel&quot;.
   */
  kind: string;
  /**
   * Additional parameters controlling delivery channel behavior. Optional.
   */
  params: any;
  /**
   * A Boolean value to indicate whether payload is wanted. Optional.
   */
  payload: boolean;
  /**
   * An opaque ID that identifies the resource being watched on this channel.
   * Stable across different API versions.
   */
  resourceId: string;
  /**
   * A version-specific identifier for the watched resource.
   */
  resourceUri: string;
  /**
   * An arbitrary string delivered to the target address with each notification
   * delivered over this channel. Optional.
   */
  token: string;
  /**
   * The type of delivery mechanism used for this channel.
   */
  type: string;
}
/**
 * JSON template for a usage report.
 */
export interface Schema$UsageReport {
  /**
   * The date to which the record belongs.
   */
  date: string;
  /**
   * Information about the type of the item.
   */
  entity: any;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The kind of object.
   */
  kind: string;
  /**
   * Parameter value pairs for various applications.
   */
  parameters: any[];
}
/**
 * JSON template for a collection of usage reports.
 */
export interface Schema$UsageReports {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The kind of object.
   */
  kind: string;
  /**
   * Token for retrieving the next page
   */
  nextPageToken: string;
  /**
   * Various application parameter records.
   */
  usageReports: Schema$UsageReport[];
  /**
   * Warnings if any.
   */
  warnings: any[];
}

export class Resource$Activities {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
  }

  /**
   * reports.activities.list
   * @desc Retrieves a list of activities for a specific customer and
   * application.
   * @alias reports.activities.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.actorIpAddress IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
   * @param {string} params.applicationName Application name for which the events are to be retrieved.
   * @param {string=} params.customerId Represents the customer for which the data is to be fetched.
   * @param {string=} params.endTime Return events which occurred at or before this time.
   * @param {string=} params.eventName Name of the event being queried.
   * @param {string=} params.filters Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
   * @param {integer=} params.maxResults Number of activity records to be shown in each page.
   * @param {string=} params.pageToken Token to specify next page.
   * @param {string=} params.startTime Return events which occurred at or after this time.
   * @param {string} params.userKey Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Activities>,
       callback?: BodyResponseCallback<Schema$Activities>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/admin/reports/v1/activity/users/{userKey}/applications/{applicationName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['userKey', 'applicationName'],
          pathParams: ['applicationName', 'userKey'],
          context: this.root
        };
        createAPIRequest<Schema$Activities>(parameters, callback!);
      };


  /**
   * reports.activities.watch
   * @desc Push changes to activities
   * @alias reports.activities.watch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.actorIpAddress IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
   * @param {string} params.applicationName Application name for which the events are to be retrieved.
   * @param {string=} params.customerId Represents the customer for which the data is to be fetched.
   * @param {string=} params.endTime Return events which occurred at or before this time.
   * @param {string=} params.eventName Name of the event being queried.
   * @param {string=} params.filters Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
   * @param {integer=} params.maxResults Number of activity records to be shown in each page.
   * @param {string=} params.pageToken Token to specify next page.
   * @param {string=} params.startTime Return events which occurred at or after this time.
   * @param {string} params.userKey Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  watch =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Channel>,
       callback?: BodyResponseCallback<Schema$Channel>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/admin/reports/v1/activity/users/{userKey}/applications/{applicationName}/watch')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['userKey', 'applicationName'],
          pathParams: ['applicationName', 'userKey'],
          context: this.root
        };
        createAPIRequest<Schema$Channel>(parameters, callback!);
      };
}

export class Resource$Channels {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
  }

  /**
   * admin.channels.stop
   * @desc Stop watching resources through this channel
   * @alias admin.channels.stop
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  stop =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/admin/reports/v1/admin/reports_v1/channels/stop')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };
}

export class Resource$Customerusagereports {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
  }

  /**
   * reports.customerUsageReports.get
   * @desc Retrieves a report which is a collection of properties / statistics
   * for a specific customer.
   * @alias reports.customerUsageReports.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.customerId Represents the customer for which the data is to be fetched.
   * @param {string} params.date Represents the date in yyyy-mm-dd format for which the data is to be fetched.
   * @param {string=} params.pageToken Token to specify next page.
   * @param {string=} params.parameters Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$UsageReports>,
       callback?: BodyResponseCallback<Schema$UsageReports>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/admin/reports/v1/usage/dates/{date}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['date'],
          pathParams: ['date'],
          context: this.root
        };
        createAPIRequest<Schema$UsageReports>(parameters, callback!);
      };
}

export class Resource$Entityusagereports {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
  }

  /**
   * reports.entityUsageReports.get
   * @desc Retrieves a report which is a collection of properties / statistics
   * for a set of objects.
   * @alias reports.entityUsageReports.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.customerId Represents the customer for which the data is to be fetched.
   * @param {string} params.date Represents the date in yyyy-mm-dd format for which the data is to be fetched.
   * @param {string} params.entityKey Represents the key of object for which the data should be filtered.
   * @param {string} params.entityType Type of object. Should be one of - gplus_communities.
   * @param {string=} params.filters Represents the set of filters including parameter operator value.
   * @param {integer=} params.maxResults Maximum number of results to return. Maximum allowed is 1000
   * @param {string=} params.pageToken Token to specify next page.
   * @param {string=} params.parameters Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$UsageReports>,
       callback?: BodyResponseCallback<Schema$UsageReports>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/admin/reports/v1/usage/{entityType}/{entityKey}/dates/{date}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['entityType', 'entityKey', 'date'],
          pathParams: ['date', 'entityKey', 'entityType'],
          context: this.root
        };
        createAPIRequest<Schema$UsageReports>(parameters, callback!);
      };
}

export class Resource$Userusagereport {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
  }

  /**
   * reports.userUsageReport.get
   * @desc Retrieves a report which is a collection of properties / statistics
   * for a set of users.
   * @alias reports.userUsageReport.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.customerId Represents the customer for which the data is to be fetched.
   * @param {string} params.date Represents the date in yyyy-mm-dd format for which the data is to be fetched.
   * @param {string=} params.filters Represents the set of filters including parameter operator value.
   * @param {integer=} params.maxResults Maximum number of results to return. Maximum allowed is 1000
   * @param {string=} params.pageToken Token to specify next page.
   * @param {string=} params.parameters Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
   * @param {string} params.userKey Represents the profile id or the user email for which the data should be filtered.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$UsageReports>,
       callback?: BodyResponseCallback<Schema$UsageReports>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/admin/reports/v1/usage/users/{userKey}/dates/{date}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['userKey', 'date'],
          pathParams: ['date', 'userKey'],
          context: this.root
        };
        createAPIRequest<Schema$UsageReports>(parameters, callback!);
      };
}
