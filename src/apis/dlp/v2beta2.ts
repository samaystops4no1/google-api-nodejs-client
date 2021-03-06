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
 * Cloud Data Loss Prevention (DLP) API
 *
 * Provides methods for detection, risk analysis, and de-identification of
 * privacy-sensitive fragments in text, images, and Google Cloud Platform
 * storage repositories.
 *
 * @example
 * const google = require('googleapis');
 * const dlp = google.dlp('v2beta2');
 *
 * @namespace dlp
 * @type {Function}
 * @version v2beta2
 * @variation v2beta2
 * @param {object=} options Options for Dlp
 */
export class Dlp {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  infoTypes: Resource$Infotypes;
  organizations: Resource$Organizations;
  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.infoTypes = new Resource$Infotypes(this);
    this.organizations = new Resource$Organizations(this);
    this.projects = new Resource$Projects(this);
  }
}

/**
 * An auxiliary table contains statistical information on the relative frequency
 * of different quasi-identifiers values. It has one or several
 * quasi-identifiers columns, and one column that indicates the relative
 * frequency of each quasi-identifier tuple. If a tuple is present in the data
 * but not in the auxiliary table, the corresponding relative frequency is
 * assumed to be zero (and thus, the tuple is highly reidentifiable).
 */
export interface Schema$GooglePrivacyDlpV2beta1AuxiliaryTable {
  /**
   * Quasi-identifier columns. [required]
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta1QuasiIdField[];
  /**
   * The relative frequency column must contain a floating-point number between
   * 0 and 1 (inclusive). Null values are assumed to be zero. [required]
   */
  relativeFrequency: Schema$GooglePrivacyDlpV2beta1FieldId;
  /**
   * Auxiliary table location. [required]
   */
  table: Schema$GooglePrivacyDlpV2beta1BigQueryTable;
}
/**
 * Options defining BigQuery table and row identifiers.
 */
export interface Schema$GooglePrivacyDlpV2beta1BigQueryOptions {
  /**
   * References to fields uniquely identifying rows within the table. Nested
   * fields in the format, like `person.birthdate.year`, are allowed.
   */
  identifyingFields: Schema$GooglePrivacyDlpV2beta1FieldId[];
  /**
   * Complete BigQuery table reference.
   */
  tableReference: Schema$GooglePrivacyDlpV2beta1BigQueryTable;
}
/**
 * Message defining the location of a BigQuery table. A table is uniquely
 * identified  by its project_id, dataset_id, and table_name. Within a query a
 * table is often referenced with a string in the format of:
 * `&lt;project_id&gt;:&lt;dataset_id&gt;.&lt;table_id&gt;` or
 * `&lt;project_id&gt;.&lt;dataset_id&gt;.&lt;table_id&gt;`.
 */
export interface Schema$GooglePrivacyDlpV2beta1BigQueryTable {
  /**
   * Dataset ID of the table.
   */
  datasetId: string;
  /**
   * The Google Cloud Platform project ID of the project containing the table.
   * If omitted, project ID is inferred from the API call.
   */
  projectId: string;
  /**
   * Name of the table.
   */
  tableId: string;
}
/**
 * Compute numerical stats over an individual column, including number of
 * distinct values and value count distribution.
 */
export interface Schema$GooglePrivacyDlpV2beta1CategoricalStatsConfig {
  /**
   * Field to compute categorical stats on. All column types are supported
   * except for arrays and structs. However, it may be more informative to use
   * NumericalStats when the field type is supported, depending on the data.
   */
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
}
/**
 * Histogram bucket of value frequencies in the column.
 */
export interface Schema$GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket {
  /**
   * Total number of records in this bucket.
   */
  bucketSize: string;
  /**
   * Sample of value frequencies in this bucket. The total number of values
   * returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta1ValueFrequency[];
  /**
   * Lower bound on the value frequency of the values in this bucket.
   */
  valueFrequencyLowerBound: string;
  /**
   * Upper bound on the value frequency of the values in this bucket.
   */
  valueFrequencyUpperBound: string;
}
/**
 * Result of the categorical stats computation.
 */
export interface Schema$GooglePrivacyDlpV2beta1CategoricalStatsResult {
  /**
   * Histogram of value frequencies in the column.
   */
  valueFrequencyHistogramBuckets:
      Schema$GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket[];
}
/**
 * Options defining a file or a set of files (path ending with *) within a
 * Google Cloud Storage bucket.
 */
export interface Schema$GooglePrivacyDlpV2beta1CloudStorageOptions {
  fileSet: Schema$GooglePrivacyDlpV2beta1FileSet;
}
/**
 * A location in Cloud Storage.
 */
export interface Schema$GooglePrivacyDlpV2beta1CloudStoragePath {
  /**
   * The url, in the format of `gs://bucket/&lt;path&gt;`.
   */
  path: string;
}
/**
 * Custom information type provided by the user. Used to find domain-specific
 * sensitive information configurable to the data in question.
 */
export interface Schema$GooglePrivacyDlpV2beta1CustomInfoType {
  /**
   * Dictionary-based custom info type.
   */
  dictionary: Schema$GooglePrivacyDlpV2beta1Dictionary;
  /**
   * Info type configuration. All custom info types must have configurations
   * that do not conflict with built-in info types or other custom info types.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
  /**
   * Surrogate info type.
   */
  surrogateType: Schema$GooglePrivacyDlpV2beta1SurrogateType;
}
/**
 * Options defining a data set within Google Cloud Datastore.
 */
export interface Schema$GooglePrivacyDlpV2beta1DatastoreOptions {
  /**
   * The kind to process.
   */
  kind: Schema$GooglePrivacyDlpV2beta1KindExpression;
  /**
   * A partition ID identifies a grouping of entities. The grouping is always by
   * project and namespace, however the namespace ID may be empty.
   */
  partitionId: Schema$GooglePrivacyDlpV2beta1PartitionId;
  /**
   * Properties to scan. If none are specified, all properties will be scanned
   * by default.
   */
  projection: Schema$GooglePrivacyDlpV2beta1Projection[];
}
/**
 * Custom information type based on a dictionary of words or phrases. This can
 * be used to match sensitive information specific to the data, such as a list
 * of employee IDs or job titles.  Dictionary words are case-insensitive and all
 * characters other than letters and digits in the unicode [Basic Multilingual
 * Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane)
 * will be replaced with whitespace when scanning for matches, so the dictionary
 * phrase &quot;Sam Johnson&quot; will match all three phrases &quot;sam
 * johnson&quot;, &quot;Sam, Johnson&quot;, and &quot;Sam (Johnson)&quot;.
 * Additionally, the characters surrounding any match must be of a different
 * type than the adjacent characters within the word, so letters must be next to
 * non-letters and digits next to non-digits. For example, the dictionary word
 * &quot;jen&quot; will match the first three letters of the text
 * &quot;jen123&quot; but will return no matches for &quot;jennifer&quot;.
 * Dictionary words containing a large number of characters that are not letters
 * or digits may result in unexpected findings because such characters are
 * treated as whitespace.
 */
export interface Schema$GooglePrivacyDlpV2beta1Dictionary {
  /**
   * List of words or phrases to search for.
   */
  wordList: Schema$GooglePrivacyDlpV2beta1WordList;
}
/**
 * An entity in a dataset is a field or set of fields that correspond to a
 * single person. For example, in medical records the `EntityId` might be a
 * patient identifier, or for financial records it might be an account
 * identifier. This message is used when generalizations or analysis must be
 * consistent across multiple rows pertaining to the same entity.
 */
export interface Schema$GooglePrivacyDlpV2beta1EntityId {
  /**
   * Composite key indicating which field contains the entity identifier.
   */
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
}
/**
 * General identifier of a data field in a storage service.
 */
export interface Schema$GooglePrivacyDlpV2beta1FieldId {
  /**
   * Name describing the field.
   */
  columnName: string;
}
/**
 * Set of files to scan.
 */
export interface Schema$GooglePrivacyDlpV2beta1FileSet {
  /**
   * The url, in the format `gs://&lt;bucket&gt;/&lt;path&gt;`. Trailing
   * wildcard in the path is allowed.
   */
  url: string;
}
/**
 * Type of information detected by the API.
 */
export interface Schema$GooglePrivacyDlpV2beta1InfoType {
  /**
   * Name of the information type.
   */
  name: string;
}
/**
 * Max findings configuration per info type, per content item or long running
 * operation.
 */
export interface Schema$GooglePrivacyDlpV2beta1InfoTypeLimit {
  /**
   * Type of information the findings limit applies to. Only one limit per
   * info_type should be provided. If InfoTypeLimit does not have an info_type,
   * the DLP API applies the limit against all info_types that are found but not
   * specified in another InfoTypeLimit.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
  /**
   * Max findings limit for the given infoType.
   */
  maxFindings: number;
}
/**
 * Statistics regarding a specific InfoType.
 */
export interface Schema$GooglePrivacyDlpV2beta1InfoTypeStatistics {
  /**
   * Number of findings for this info type.
   */
  count: string;
  /**
   * The type of finding this stat is for.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
}
/**
 * Configuration description of the scanning process. When used with
 * redactContent only info_types and min_likelihood are currently used.
 */
export interface Schema$GooglePrivacyDlpV2beta1InspectConfig {
  /**
   * Custom info types provided by the user.
   */
  customInfoTypes: Schema$GooglePrivacyDlpV2beta1CustomInfoType[];
  /**
   * When true, excludes type information of the findings.
   */
  excludeTypes: boolean;
  /**
   * When true, a contextual quote from the data that triggered a finding is
   * included in the response; see Finding.quote.
   */
  includeQuote: boolean;
  /**
   * Configuration of findings limit given for specified info types.
   */
  infoTypeLimits: Schema$GooglePrivacyDlpV2beta1InfoTypeLimit[];
  /**
   * Restricts what info_types to look for. The values must correspond to
   * InfoType values returned by ListInfoTypes or found in documentation. Empty
   * info_types runs all enabled detectors.
   */
  infoTypes: Schema$GooglePrivacyDlpV2beta1InfoType[];
  /**
   * Limits the number of findings per content item or long running operation.
   */
  maxFindings: number;
  /**
   * Only returns findings equal or above this threshold.
   */
  minLikelihood: string;
}
/**
 * Metadata returned within GetOperation for an inspect request.
 */
export interface Schema$GooglePrivacyDlpV2beta1InspectOperationMetadata {
  /**
   * The time which this request was started.
   */
  createTime: string;
  infoTypeStats: Schema$GooglePrivacyDlpV2beta1InfoTypeStatistics[];
  /**
   * Total size in bytes that were processed.
   */
  processedBytes: string;
  /**
   * The inspect config used to create the Operation.
   */
  requestInspectConfig: Schema$GooglePrivacyDlpV2beta1InspectConfig;
  /**
   * Optional location to store findings.
   */
  requestOutputConfig: Schema$GooglePrivacyDlpV2beta1OutputStorageConfig;
  /**
   * The storage config used to create the Operation.
   */
  requestStorageConfig: Schema$GooglePrivacyDlpV2beta1StorageConfig;
  /**
   * Estimate of the number of bytes to process.
   */
  totalEstimatedBytes: string;
}
/**
 * The operational data.
 */
export interface Schema$GooglePrivacyDlpV2beta1InspectOperationResult {
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the `name`
   * should have the format of `inspect/results/{id}`.
   */
  name: string;
}
/**
 * k-anonymity metric, used for analysis of reidentification risk.
 */
export interface Schema$GooglePrivacyDlpV2beta1KAnonymityConfig {
  /**
   * Optional message indicating that each distinct entity_id should not
   * contribute to the k-anonymity count more than once per equivalence class.
   * If an entity_id appears on several rows with different quasi-identifier
   * tuples, it will contribute to each count exactly once.  This can lead to
   * unexpected results. Consider a table where ID 1 is associated to
   * quasi-identifier &quot;foo&quot;, ID 2 to &quot;bar&quot;, and ID 3 to
   * *both* quasi-identifiers &quot;foo&quot; and &quot;bar&quot; (on separate
   * rows), and where this ID is used as entity_id. Then, the anonymity value
   * associated to ID 3 will be 2, even if it is the only ID to be associated to
   * both values &quot;foo&quot; and &quot;bar&quot;.
   */
  entityId: Schema$GooglePrivacyDlpV2beta1EntityId;
  /**
   * Set of fields to compute k-anonymity over. When multiple fields are
   * specified, they are considered a single composite key. Structs and repeated
   * data types are not supported; however, nested fields are supported so long
   * as they are not structs themselves or nested within a repeated field.
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta1FieldId[];
}
/**
 * The set of columns&#39; values that share the same k-anonymity value.
 */
export interface Schema$GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass {
  /**
   * Size of the equivalence class, for example number of rows with the above
   * set of values.
   */
  equivalenceClassSize: string;
  /**
   * Set of values defining the equivalence class. One value per
   * quasi-identifier column in the original KAnonymity metric message. The
   * order is always the same as the original request.
   */
  quasiIdsValues: Schema$GooglePrivacyDlpV2beta1Value[];
}
/**
 * Histogram bucket of equivalence class sizes in the table.
 */
export interface Schema$GooglePrivacyDlpV2beta1KAnonymityHistogramBucket {
  /**
   * Total number of records in this bucket.
   */
  bucketSize: string;
  /**
   * Sample of equivalence classes in this bucket. The total number of classes
   * returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass[];
  /**
   * Lower bound on the size of the equivalence classes in this bucket.
   */
  equivalenceClassSizeLowerBound: string;
  /**
   * Upper bound on the size of the equivalence classes in this bucket.
   */
  equivalenceClassSizeUpperBound: string;
}
/**
 * Result of the k-anonymity computation.
 */
export interface Schema$GooglePrivacyDlpV2beta1KAnonymityResult {
  /**
   * Histogram of k-anonymity equivalence classes.
   */
  equivalenceClassHistogramBuckets:
      Schema$GooglePrivacyDlpV2beta1KAnonymityHistogramBucket[];
}
/**
 * A representation of a Datastore kind.
 */
export interface Schema$GooglePrivacyDlpV2beta1KindExpression {
  /**
   * The name of the kind.
   */
  name: string;
}
/**
 * Reidentifiability metric. This corresponds to a risk model similar to what is
 * called &quot;journalist risk&quot; in the literature, except the attack
 * dataset is statistically modeled instead of being perfectly known. This can
 * be done using publicly available data (like the US Census), or using a custom
 * statistical model (indicated as one or several BigQuery tables), or by
 * extrapolating from the distribution of values in the input dataset.
 */
export interface Schema$GooglePrivacyDlpV2beta1KMapEstimationConfig {
  /**
   * Several auxiliary tables can be used in the analysis. Each custom_tag used
   * to tag a quasi-identifiers column must appear in exactly one column of one
   * auxiliary table.
   */
  auxiliaryTables: Schema$GooglePrivacyDlpV2beta1AuxiliaryTable[];
  /**
   * Fields considered to be quasi-identifiers. No two columns can have the same
   * tag. [required]
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta1TaggedField[];
  /**
   * ISO 3166-1 alpha-2 region code to use in the statistical modeling. Required
   * if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a
   * region code.
   */
  regionCode: string;
}
/**
 * A KMapEstimationHistogramBucket message with the following values:
 * min_anonymity: 3   max_anonymity: 5   frequency: 42 means that there are 42
 * records whose quasi-identifier values correspond to 3, 4 or 5 people in the
 * overlying population. An important particular case is when min_anonymity =
 * max_anonymity = 1: the frequency field then corresponds to the number of
 * uniquely identifiable records.
 */
export interface Schema$GooglePrivacyDlpV2beta1KMapEstimationHistogramBucket {
  /**
   * Number of records within these anonymity bounds.
   */
  bucketSize: string;
  /**
   * Sample of quasi-identifier tuple values in this bucket. The total number of
   * classes returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta1KMapEstimationQuasiIdValues[];
  /**
   * Always greater than or equal to min_anonymity.
   */
  maxAnonymity: string;
  /**
   * Always positive.
   */
  minAnonymity: string;
}
/**
 * A tuple of values for the quasi-identifier columns.
 */
export interface Schema$GooglePrivacyDlpV2beta1KMapEstimationQuasiIdValues {
  /**
   * The estimated anonymity for these quasi-identifier values.
   */
  estimatedAnonymity: string;
  /**
   * The quasi-identifier values.
   */
  quasiIdsValues: Schema$GooglePrivacyDlpV2beta1Value[];
}
/**
 * Result of the reidentifiability analysis. Note that these results are an
 * estimation, not exact values.
 */
export interface Schema$GooglePrivacyDlpV2beta1KMapEstimationResult {
  /**
   * The intervals [min_anonymity, max_anonymity] do not overlap. If a value
   * doesn&#39;t correspond to any such interval, the associated frequency is
   * zero. For example, the following records:   {min_anonymity: 1,
   * max_anonymity: 1, frequency: 17}   {min_anonymity: 2, max_anonymity: 3,
   * frequency: 42}   {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean
   * that there are no record with an estimated anonymity of 4, 5, or larger
   * than 10.
   */
  kMapEstimationHistogram:
      Schema$GooglePrivacyDlpV2beta1KMapEstimationHistogramBucket[];
}
/**
 * l-diversity metric, used for analysis of reidentification risk.
 */
export interface Schema$GooglePrivacyDlpV2beta1LDiversityConfig {
  /**
   * Set of quasi-identifiers indicating how equivalence classes are defined for
   * the l-diversity computation. When multiple fields are specified, they are
   * considered a single composite key.
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta1FieldId[];
  /**
   * Sensitive field for computing the l-value.
   */
  sensitiveAttribute: Schema$GooglePrivacyDlpV2beta1FieldId;
}
/**
 * The set of columns&#39; values that share the same l-diversity value.
 */
export interface Schema$GooglePrivacyDlpV2beta1LDiversityEquivalenceClass {
  /**
   * Size of the k-anonymity equivalence class.
   */
  equivalenceClassSize: string;
  /**
   * Number of distinct sensitive values in this equivalence class.
   */
  numDistinctSensitiveValues: string;
  /**
   * Quasi-identifier values defining the k-anonymity equivalence class. The
   * order is always the same as the original request.
   */
  quasiIdsValues: Schema$GooglePrivacyDlpV2beta1Value[];
  /**
   * Estimated frequencies of top sensitive values.
   */
  topSensitiveValues: Schema$GooglePrivacyDlpV2beta1ValueFrequency[];
}
/**
 * Histogram bucket of sensitive value frequencies in the table.
 */
export interface Schema$GooglePrivacyDlpV2beta1LDiversityHistogramBucket {
  /**
   * Total number of records in this bucket.
   */
  bucketSize: string;
  /**
   * Sample of equivalence classes in this bucket. The total number of classes
   * returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta1LDiversityEquivalenceClass[];
  /**
   * Lower bound on the sensitive value frequencies of the equivalence classes
   * in this bucket.
   */
  sensitiveValueFrequencyLowerBound: string;
  /**
   * Upper bound on the sensitive value frequencies of the equivalence classes
   * in this bucket.
   */
  sensitiveValueFrequencyUpperBound: string;
}
/**
 * Result of the l-diversity computation.
 */
export interface Schema$GooglePrivacyDlpV2beta1LDiversityResult {
  /**
   * Histogram of l-diversity equivalence class sensitive value frequencies.
   */
  sensitiveValueFrequencyHistogramBuckets:
      Schema$GooglePrivacyDlpV2beta1LDiversityHistogramBucket[];
}
/**
 * Compute numerical stats over an individual column, including min, max, and
 * quantiles.
 */
export interface Schema$GooglePrivacyDlpV2beta1NumericalStatsConfig {
  /**
   * Field to compute numerical stats on. Supported types are integer, float,
   * date, datetime, timestamp, time.
   */
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
}
/**
 * Result of the numerical stats computation.
 */
export interface Schema$GooglePrivacyDlpV2beta1NumericalStatsResult {
  /**
   * Maximum value appearing in the column.
   */
  maxValue: Schema$GooglePrivacyDlpV2beta1Value;
  /**
   * Minimum value appearing in the column.
   */
  minValue: Schema$GooglePrivacyDlpV2beta1Value;
  /**
   * List of 99 values that partition the set of field values into 100 equal
   * sized buckets.
   */
  quantileValues: Schema$GooglePrivacyDlpV2beta1Value[];
}
/**
 * Cloud repository for storing output.
 */
export interface Schema$GooglePrivacyDlpV2beta1OutputStorageConfig {
  /**
   * The path to a Google Cloud Storage location to store output. The bucket
   * must already exist and the Google APIs service account for DLP must have
   * write permission to write to the given bucket. Results are split over
   * multiple csv files with each file name matching the pattern
   * &quot;[operation_id]_[count].csv&quot;, for example
   * `3094877188788974909_1.csv`. The `operation_id` matches the identifier for
   * the Operation, and the `count` is a counter used for tracking the number of
   * files written.  The CSV file(s) contain the following columns regardless of
   * storage type scanned: - id - info_type - likelihood - byte size of finding
   * - quote - timestamp  For Cloud Storage the next columns are:  - file_path -
   * start_offset  For Cloud Datastore the next columns are:  - project_id -
   * namespace_id - path - column_name - offset  For BigQuery the next columns
   * are:  - row_number - project_id - dataset_id - table_id
   */
  storagePath: Schema$GooglePrivacyDlpV2beta1CloudStoragePath;
  /**
   * Store findings in a new table in the dataset.
   */
  table: Schema$GooglePrivacyDlpV2beta1BigQueryTable;
}
/**
 * Datastore partition ID. A partition ID identifies a grouping of entities. The
 * grouping is always by project and namespace, however the namespace ID may be
 * empty.  A partition ID contains several dimensions: project ID and namespace
 * ID.
 */
export interface Schema$GooglePrivacyDlpV2beta1PartitionId {
  /**
   * If not empty, the ID of the namespace to which the entities belong.
   */
  namespaceId: string;
  /**
   * The ID of the project to which the entities belong.
   */
  projectId: string;
}
/**
 * Privacy metric to compute for reidentification risk analysis.
 */
export interface Schema$GooglePrivacyDlpV2beta1PrivacyMetric {
  categoricalStatsConfig: Schema$GooglePrivacyDlpV2beta1CategoricalStatsConfig;
  kAnonymityConfig: Schema$GooglePrivacyDlpV2beta1KAnonymityConfig;
  kMapEstimationConfig: Schema$GooglePrivacyDlpV2beta1KMapEstimationConfig;
  lDiversityConfig: Schema$GooglePrivacyDlpV2beta1LDiversityConfig;
  numericalStatsConfig: Schema$GooglePrivacyDlpV2beta1NumericalStatsConfig;
}
/**
 * A representation of a Datastore property in a projection.
 */
export interface Schema$GooglePrivacyDlpV2beta1Projection {
  /**
   * The property to project.
   */
  property: Schema$GooglePrivacyDlpV2beta1PropertyReference;
}
/**
 * A reference to a property relative to the Datastore kind expressions.
 */
export interface Schema$GooglePrivacyDlpV2beta1PropertyReference {
  /**
   * The name of the property. If name includes &quot;.&quot;s, it may be
   * interpreted as a property name path.
   */
  name: string;
}
/**
 * A quasi-identifier column has a custom_tag, used to know which column in the
 * data corresponds to which column in the statistical model.
 */
export interface Schema$GooglePrivacyDlpV2beta1QuasiIdField {
  customTag: string;
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
}
/**
 * Metadata returned within the
 * [`riskAnalysis.operations.get`](/dlp/docs/reference/rest/v2beta1/riskAnalysis.operations/get)
 * for risk analysis.
 */
export interface Schema$GooglePrivacyDlpV2beta1RiskAnalysisOperationMetadata {
  /**
   * The time which this request was started.
   */
  createTime: string;
  /**
   * Privacy metric to compute.
   */
  requestedPrivacyMetric: Schema$GooglePrivacyDlpV2beta1PrivacyMetric;
  /**
   * Input dataset to compute metrics over.
   */
  requestedSourceTable: Schema$GooglePrivacyDlpV2beta1BigQueryTable;
}
/**
 * Result of a risk analysis
 * [`Operation`](/dlp/docs/reference/rest/v2beta1/inspect.operations) request.
 */
export interface Schema$GooglePrivacyDlpV2beta1RiskAnalysisOperationResult {
  categoricalStatsResult: Schema$GooglePrivacyDlpV2beta1CategoricalStatsResult;
  kAnonymityResult: Schema$GooglePrivacyDlpV2beta1KAnonymityResult;
  kMapEstimationResult: Schema$GooglePrivacyDlpV2beta1KMapEstimationResult;
  lDiversityResult: Schema$GooglePrivacyDlpV2beta1LDiversityResult;
  numericalStatsResult: Schema$GooglePrivacyDlpV2beta1NumericalStatsResult;
}
/**
 * Shared message indicating Cloud storage type.
 */
export interface Schema$GooglePrivacyDlpV2beta1StorageConfig {
  /**
   * BigQuery options specification.
   */
  bigQueryOptions: Schema$GooglePrivacyDlpV2beta1BigQueryOptions;
  /**
   * Google Cloud Storage options specification.
   */
  cloudStorageOptions: Schema$GooglePrivacyDlpV2beta1CloudStorageOptions;
  /**
   * Google Cloud Datastore options specification.
   */
  datastoreOptions: Schema$GooglePrivacyDlpV2beta1DatastoreOptions;
}
/**
 * Message for detecting output from deidentification transformations such as
 * [`CryptoReplaceFfxFpeConfig`](/dlp/docs/reference/rest/v2beta1/content/deidentify#CryptoReplaceFfxFpeConfig).
 * These types of transformations are those that perform pseudonymization,
 * thereby producing a &quot;surrogate&quot; as output. This should be used in
 * conjunction with a field on the transformation such as `surrogate_info_type`.
 * This custom info type does not support the use of `detection_rules`.
 */
export interface Schema$GooglePrivacyDlpV2beta1SurrogateType {}
/**
 * A column with a semantic tag attached.
 */
export interface Schema$GooglePrivacyDlpV2beta1TaggedField {
  /**
   * A column can be tagged with a custom tag. In this case, the user must
   * indicate an auxiliary table that contains statistical information on the
   * possible values of this column (below).
   */
  customTag: string;
  /**
   * Identifies the column. [required]
   */
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
  /**
   * If no semantic tag is indicated, we infer the statistical model from the
   * distribution of values in the input data
   */
  inferred: Schema$GoogleProtobufEmpty;
  /**
   * A column can be tagged with a InfoType to use the relevant public dataset
   * as a statistical model of population, if available. We currently support US
   * ZIP codes, region codes, ages and genders.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
}
/**
 * Set of primitive values supported by the system. Note that for the purposes
 * of inspection or transformation, the number of bytes considered to comprise a
 * &#39;Value&#39; is based on its representation as a UTF-8 encoded string. For
 * example, if &#39;integer_value&#39; is set to 123456789, the number of bytes
 * would be counted as 9, even though an int64 only holds up to 8 bytes of data.
 */
export interface Schema$GooglePrivacyDlpV2beta1Value {
  booleanValue: boolean;
  dateValue: Schema$GoogleTypeDate;
  floatValue: number;
  integerValue: string;
  stringValue: string;
  timestampValue: string;
  timeValue: Schema$GoogleTypeTimeOfDay;
}
/**
 * A value of a field, including its frequency.
 */
export interface Schema$GooglePrivacyDlpV2beta1ValueFrequency {
  /**
   * How many times the value is contained in the field.
   */
  count: string;
  /**
   * A value contained in the field in question.
   */
  value: Schema$GooglePrivacyDlpV2beta1Value;
}
/**
 * Message defining a list of words or phrases to search for in the data.
 */
export interface Schema$GooglePrivacyDlpV2beta1WordList {
  /**
   * Words or phrases defining the dictionary. The dictionary must contain at
   * least one phrase and every phrase must contain at least 2 characters that
   * are letters or digits. [required]
   */
  words: string[];
}
/**
 * A task to execute on the completion of a job.
 */
export interface Schema$GooglePrivacyDlpV2beta2Action {
  /**
   * Publish a notification to a pubsub topic.
   */
  pubSub: Schema$GooglePrivacyDlpV2beta2PublishToPubSub;
  /**
   * Save resulting findings in a provided location.
   */
  saveFindings: Schema$GooglePrivacyDlpV2beta2SaveFindings;
}
/**
 * Result of a risk analysis operation request.
 */
export interface Schema$GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskDetails {
  categoricalStatsResult: Schema$GooglePrivacyDlpV2beta2CategoricalStatsResult;
  kAnonymityResult: Schema$GooglePrivacyDlpV2beta2KAnonymityResult;
  kMapEstimationResult: Schema$GooglePrivacyDlpV2beta2KMapEstimationResult;
  lDiversityResult: Schema$GooglePrivacyDlpV2beta2LDiversityResult;
  numericalStatsResult: Schema$GooglePrivacyDlpV2beta2NumericalStatsResult;
  /**
   * Privacy metric to compute.
   */
  requestedPrivacyMetric: Schema$GooglePrivacyDlpV2beta2PrivacyMetric;
  /**
   * Input dataset to compute metrics over.
   */
  requestedSourceTable: Schema$GooglePrivacyDlpV2beta2BigQueryTable;
}
/**
 * Request for creating a risk analysis DlpJob.
 */
export interface Schema$GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskRequest {
  /**
   * Configuration for this risk analysis job.
   */
  jobConfig: Schema$GooglePrivacyDlpV2beta2RiskAnalysisJobConfig;
  /**
   * Optional job ID to use for the created job. If not provided, a job ID will
   * automatically be generated. Must be unique within the project. The job ID
   * can contain uppercase and lowercase letters, numbers, and hyphens; that is,
   * it must match the regular expression: `[a-zA-Z\\d-]+`. The maximum length
   * is 100 characters. Can be empty to allow the system to generate one.
   */
  jobId: string;
}
/**
 * An auxiliary table contains statistical information on the relative frequency
 * of different quasi-identifiers values. It has one or several
 * quasi-identifiers columns, and one column that indicates the relative
 * frequency of each quasi-identifier tuple. If a tuple is present in the data
 * but not in the auxiliary table, the corresponding relative frequency is
 * assumed to be zero (and thus, the tuple is highly reidentifiable).
 */
export interface Schema$GooglePrivacyDlpV2beta2AuxiliaryTable {
  /**
   * Quasi-identifier columns. [required]
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta2QuasiIdField[];
  /**
   * The relative frequency column must contain a floating-point number between
   * 0 and 1 (inclusive). Null values are assumed to be zero. [required]
   */
  relativeFrequency: Schema$GooglePrivacyDlpV2beta2FieldId;
  /**
   * Auxiliary table location. [required]
   */
  table: Schema$GooglePrivacyDlpV2beta2BigQueryTable;
}
/**
 * Row key for identifying a record in BigQuery table.
 */
export interface Schema$GooglePrivacyDlpV2beta2BigQueryKey {
  /**
   * Absolute number of the row from the beginning of the table at the time of
   * scanning.
   */
  rowNumber: string;
  /**
   * Complete BigQuery table reference.
   */
  tableReference: Schema$GooglePrivacyDlpV2beta2BigQueryTable;
}
/**
 * Options defining BigQuery table and row identifiers.
 */
export interface Schema$GooglePrivacyDlpV2beta2BigQueryOptions {
  /**
   * References to fields uniquely identifying rows within the table. Nested
   * fields in the format, like `person.birthdate.year`, are allowed.
   */
  identifyingFields: Schema$GooglePrivacyDlpV2beta2FieldId[];
  /**
   * Complete BigQuery table reference.
   */
  tableReference: Schema$GooglePrivacyDlpV2beta2BigQueryTable;
}
/**
 * Message defining the location of a BigQuery table. A table is uniquely
 * identified  by its project_id, dataset_id, and table_name. Within a query a
 * table is often referenced with a string in the format of:
 * `&lt;project_id&gt;:&lt;dataset_id&gt;.&lt;table_id&gt;` or
 * `&lt;project_id&gt;.&lt;dataset_id&gt;.&lt;table_id&gt;`.
 */
export interface Schema$GooglePrivacyDlpV2beta2BigQueryTable {
  /**
   * Dataset ID of the table.
   */
  datasetId: string;
  /**
   * The Google Cloud Platform project ID of the project containing the table.
   * If omitted, project ID is inferred from the API call.
   */
  projectId: string;
  /**
   * Name of the table.
   */
  tableId: string;
}
/**
 * Bucket is represented as a range, along with replacement values.
 */
export interface Schema$GooglePrivacyDlpV2beta2Bucket {
  /**
   * Upper bound of the range, exclusive; type must match min.
   */
  max: Schema$GooglePrivacyDlpV2beta2Value;
  /**
   * Lower bound of the range, inclusive. Type should be the same as max if
   * used.
   */
  min: Schema$GooglePrivacyDlpV2beta2Value;
  /**
   * Replacement value for this bucket. If not provided the default behavior
   * will be to hyphenate the min-max range.
   */
  replacementValue: Schema$GooglePrivacyDlpV2beta2Value;
}
/**
 * Generalization function that buckets values based on ranges. The ranges and
 * replacement values are dynamically provided by the user for custom behavior,
 * such as 1-30 -&gt; LOW 31-65 -&gt; MEDIUM 66-100 -&gt; HIGH This can be used
 * on data of type: number, long, string, timestamp. If the bound `Value` type
 * differs from the type of data being transformed, we will first attempt
 * converting the type of the data to be transformed to match the type of the
 * bound before comparing.
 */
export interface Schema$GooglePrivacyDlpV2beta2BucketingConfig {
  /**
   * Set of buckets. Ranges must be non-overlapping.
   */
  buckets: Schema$GooglePrivacyDlpV2beta2Bucket[];
}
/**
 * The request message for canceling a DLP job.
 */
export interface Schema$GooglePrivacyDlpV2beta2CancelDlpJobRequest {}
/**
 * Compute numerical stats over an individual column, including number of
 * distinct values and value count distribution.
 */
export interface Schema$GooglePrivacyDlpV2beta2CategoricalStatsConfig {
  /**
   * Field to compute categorical stats on. All column types are supported
   * except for arrays and structs. However, it may be more informative to use
   * NumericalStats when the field type is supported, depending on the data.
   */
  field: Schema$GooglePrivacyDlpV2beta2FieldId;
}
export interface Schema$GooglePrivacyDlpV2beta2CategoricalStatsHistogramBucket {
  /**
   * Total number of values in this bucket.
   */
  bucketSize: string;
  /**
   * Total number of distinct values in this bucket.
   */
  bucketValueCount: string;
  /**
   * Sample of value frequencies in this bucket. The total number of values
   * returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta2ValueFrequency[];
  /**
   * Lower bound on the value frequency of the values in this bucket.
   */
  valueFrequencyLowerBound: string;
  /**
   * Upper bound on the value frequency of the values in this bucket.
   */
  valueFrequencyUpperBound: string;
}
/**
 * Result of the categorical stats computation.
 */
export interface Schema$GooglePrivacyDlpV2beta2CategoricalStatsResult {
  /**
   * Histogram of value frequencies in the column.
   */
  valueFrequencyHistogramBuckets:
      Schema$GooglePrivacyDlpV2beta2CategoricalStatsHistogramBucket[];
}
/**
 * Partially mask a string by replacing a given number of characters with a
 * fixed character. Masking can start from the beginning or end of the string.
 * This can be used on data of any type (numbers, longs, and so on) and when
 * de-identifying structured data we&#39;ll attempt to preserve the original
 * data&#39;s type. (This allows you to take a long like 123 and modify it to a
 * string like **3.
 */
export interface Schema$GooglePrivacyDlpV2beta2CharacterMaskConfig {
  /**
   * When masking a string, items in this list will be skipped when replacing.
   * For example, if your string is 555-555-5555 and you ask us to skip `-` and
   * mask 5 chars with * we would produce ***-*55-5555.
   */
  charactersToIgnore: Schema$GooglePrivacyDlpV2beta2CharsToIgnore[];
  /**
   * Character to mask the sensitive values&amp;mdash;for example, &quot;*&quot;
   * for an alphabetic string such as name, or &quot;0&quot; for a numeric
   * string such as ZIP code or credit card number. String must have length 1.
   * If not supplied, we will default to &quot;*&quot; for strings, 0 for
   * digits.
   */
  maskingCharacter: string;
  /**
   * Number of characters to mask. If not set, all matching chars will be
   * masked. Skipped characters do not count towards this tally.
   */
  numberToMask: number;
  /**
   * Mask characters in reverse order. For example, if `masking_character` is
   * &#39;0&#39;, number_to_mask is 14, and `reverse_order` is false, then
   * 1234-5678-9012-3456 -&gt; 00000000000000-3456 If `masking_character` is
   * &#39;*&#39;, `number_to_mask` is 3, and `reverse_order` is true, then 12345
   * -&gt; 12***
   */
  reverseOrder: boolean;
}
/**
 * Characters to skip when doing deidentification of a value. These will be left
 * alone and skipped.
 */
export interface Schema$GooglePrivacyDlpV2beta2CharsToIgnore {
  charactersToSkip: string;
  commonCharactersToIgnore: string;
}
/**
 * Record key for a finding in a Cloud Storage file.
 */
export interface Schema$GooglePrivacyDlpV2beta2CloudStorageKey {
  /**
   * Path to the file.
   */
  filePath: string;
  /**
   * Byte offset of the referenced data in the file.
   */
  startOffset: string;
}
/**
 * Options defining a file or a set of files (path ending with *) within a
 * Google Cloud Storage bucket.
 */
export interface Schema$GooglePrivacyDlpV2beta2CloudStorageOptions {
  /**
   * Max number of bytes to scan from a file. If a scanned file&#39;s size is
   * bigger than this value then the rest of the bytes are omitted.
   */
  bytesLimitPerFile: string;
  fileSet: Schema$GooglePrivacyDlpV2beta2FileSet;
}
/**
 * Represents a color in the RGB color space.
 */
export interface Schema$GooglePrivacyDlpV2beta2Color {
  /**
   * The amount of blue in the color as a value in the interval [0, 1].
   */
  blue: number;
  /**
   * The amount of green in the color as a value in the interval [0, 1].
   */
  green: number;
  /**
   * The amount of red in the color as a value in the interval [0, 1].
   */
  red: number;
}
/**
 * The field type of `value` and `field` do not need to match to be considered
 * equal, but not all comparisons are possible.  A `value` of type:  - `string`
 * can be compared against all other types - `boolean` can only be compared
 * against other booleans - `integer` can be compared against doubles or a
 * string if the string value can be parsed as an integer. - `double` can be
 * compared against integers or a string if the string can be parsed as a
 * double. - `Timestamp` can be compared against strings in RFC 3339 date string
 * format. - `TimeOfDay` can be compared against timestamps and strings in the
 * format of &#39;HH:mm:ss&#39;.  If we fail to compare do to type mismatch, a
 * warning will be given and the condition will evaluate to false.
 */
export interface Schema$GooglePrivacyDlpV2beta2Condition {
  /**
   * Field within the record this condition is evaluated against. [required]
   */
  field: Schema$GooglePrivacyDlpV2beta2FieldId;
  /**
   * Operator used to compare the field or infoType to the value. [required]
   */
  operator: string;
  /**
   * Value to compare against. [Required, except for `EXISTS` tests.]
   */
  value: Schema$GooglePrivacyDlpV2beta2Value;
}
/**
 * A collection of conditions.
 */
export interface Schema$GooglePrivacyDlpV2beta2Conditions {
  conditions: Schema$GooglePrivacyDlpV2beta2Condition[];
}
/**
 * Container structure for the content to inspect.
 */
export interface Schema$GooglePrivacyDlpV2beta2ContentItem {
  /**
   * Content data to inspect or redact.
   */
  data: string;
  /**
   * Structured content for inspection.
   */
  table: Schema$GooglePrivacyDlpV2beta2Table;
  /**
   * Type of the content, as defined in Content-Type HTTP header. Supported
   * types are: all &quot;text&quot; types, octet streams, PNG images, JPEG
   * images.
   */
  type: string;
  /**
   * String data to inspect or redact.
   */
  value: string;
}
/**
 * Request message for CreateDeidentifyTemplate.
 */
export interface Schema$GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest {
  /**
   * The DeidentifyTemplate to create.
   */
  deidentifyTemplate: Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate;
  /**
   * The template id can contain uppercase and lowercase letters, numbers, and
   * hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-]+`.
   * The maximum length is 100 characters. Can be empty to allow the system to
   * generate one.
   */
  templateId: string;
}
/**
 * Request message for CreateInspectTemplate.
 */
export interface Schema$GooglePrivacyDlpV2beta2CreateInspectTemplateRequest {
  /**
   * The InspectTemplate to create.
   */
  inspectTemplate: Schema$GooglePrivacyDlpV2beta2InspectTemplate;
  /**
   * The template id can contain uppercase and lowercase letters, numbers, and
   * hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-]+`.
   * The maximum length is 100 characters. Can be empty to allow the system to
   * generate one.
   */
  templateId: string;
}
/**
 * Request message for CreateJobTrigger.
 */
export interface Schema$GooglePrivacyDlpV2beta2CreateJobTriggerRequest {
  /**
   * The JobTrigger to create.
   */
  jobTrigger: Schema$GooglePrivacyDlpV2beta2JobTrigger;
  /**
   * The trigger id can contain uppercase and lowercase letters, numbers, and
   * hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-]+`.
   * The maximum length is 100 characters. Can be empty to allow the system to
   * generate one.
   */
  triggerId: string;
}
/**
 * Pseudonymization method that generates surrogates via cryptographic hashing.
 * Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a 32 byte
 * digest as an uppercase hex string (for example,
 * 41D1567F7F99F1DC2A5FAB886DEE5BEE). Currently, only string and integer values
 * can be hashed.
 */
export interface Schema$GooglePrivacyDlpV2beta2CryptoHashConfig {
  /**
   * The key used by the hash function.
   */
  cryptoKey: Schema$GooglePrivacyDlpV2beta2CryptoKey;
}
/**
 * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK)
 * stored by KMS). When using KMS to wrap/unwrap DEKs, be sure to set an
 * appropriate IAM policy on the KMS CryptoKey (KEK) to ensure an attacker
 * cannot unwrap the data crypto key.
 */
export interface Schema$GooglePrivacyDlpV2beta2CryptoKey {
  kmsWrapped: Schema$GooglePrivacyDlpV2beta2KmsWrappedCryptoKey;
  transient: Schema$GooglePrivacyDlpV2beta2TransientCryptoKey;
  unwrapped: Schema$GooglePrivacyDlpV2beta2UnwrappedCryptoKey;
}
/**
 * Replaces an identifier with a surrogate using FPE with the FFX mode of
 * operation; however when used in the `ReidentifyContent` API method, it serves
 * the opposite function by reversing the surrogate back into the original
 * identifier. The identifier must be encoded as ASCII. For a given crypto key
 * and context, the same identifier will be replaced with the same surrogate.
 * Identifiers must be at least two characters long. In the case that the
 * identifier is the empty string, it will be skipped. See
 * [Pseudonymization](/dlp/docs/pseudonymization) for example usage.
 */
export interface Schema$GooglePrivacyDlpV2beta2CryptoReplaceFfxFpeConfig {
  commonAlphabet: string;
  /**
   * The &#39;tweak&#39;, a context may be used for higher security since the
   * same identifier in two different contexts won&#39;t be given the same
   * surrogate. If the context is not set, a default tweak will be used.  If the
   * context is set but:  1. there is no record present when transforming a
   * given value or 1. the field is not present when transforming a given value,
   * a default tweak will be used.  Note that case (1) is expected when an
   * `InfoTypeTransformation` is applied to both structured and non-structured
   * `ContentItem`s. Currently, the referenced field may be of value type
   * integer or string.  The tweak is constructed as a sequence of bytes in big
   * endian byte order such that:  - a 64 bit integer is encoded followed by a
   * single byte of value 1 - a string is encoded in UTF-8 format followed by a
   * single byte of value  å 2
   */
  context: Schema$GooglePrivacyDlpV2beta2FieldId;
  /**
   * The key used by the encryption algorithm. [required]
   */
  cryptoKey: Schema$GooglePrivacyDlpV2beta2CryptoKey;
  /**
   * This is supported by mapping these to the alphanumeric characters that the
   * FFX mode natively supports. This happens before/after
   * encryption/decryption. Each character listed must appear only once. Number
   * of characters must be in the range [2, 62]. This must be encoded as ASCII.
   * The order of characters does not matter.
   */
  customAlphabet: string;
  /**
   * The native way to select the alphabet. Must be in the range [2, 62].
   */
  radix: number;
  /**
   * The custom infoType to annotate the surrogate with. This annotation will be
   * applied to the surrogate by prefixing it with the name of the custom
   * infoType followed by the number of characters comprising the surrogate. The
   * following scheme defines the format:
   * info_type_name(surrogate_character_count):surrogate  For example, if the
   * name of custom infoType is &#39;MY_TOKEN_INFO_TYPE&#39; and the surrogate
   * is &#39;abc&#39;, the full replacement value will be:
   * &#39;MY_TOKEN_INFO_TYPE(3):abc&#39;  This annotation identifies the
   * surrogate when inspecting content using the custom infoType
   * [`SurrogateType`](/dlp/docs/reference/rest/v2beta2/InspectConfig#surrogatetype).
   * This facilitates reversal of the surrogate when it occurs in free text.  In
   * order for inspection to work properly, the name of this infoType must not
   * occur naturally anywhere in your data; otherwise, inspection may find a
   * surrogate that does not correspond to an actual identifier. Therefore,
   * choose your custom infoType name carefully after considering what your data
   * looks like. One way to select a name that has a high chance of yielding
   * reliable detection is to include one or more unicode characters that are
   * highly improbable to exist in your data. For example, assuming your data is
   * entered from a regular ASCII keyboard, the symbol with the hex code point
   * 29DD might be used like so: ⧝MY_TOKEN_TYPE
   */
  surrogateInfoType: Schema$GooglePrivacyDlpV2beta2InfoType;
}
/**
 * Custom information type provided by the user. Used to find domain-specific
 * sensitive information configurable to the data in question.
 */
export interface Schema$GooglePrivacyDlpV2beta2CustomInfoType {
  /**
   * Set of detection rules to apply to all findings of this custom info type.
   * Rules are applied in order that they are specified. Not supported for the
   * `surrogate_type` custom info type.
   */
  detectionRules: Schema$GooglePrivacyDlpV2beta2DetectionRule[];
  /**
   * Dictionary-based custom info type.
   */
  dictionary: Schema$GooglePrivacyDlpV2beta2Dictionary;
  /**
   * Info type configuration. All custom info types must have configurations
   * that do not conflict with built-in info types or other custom info types.
   */
  infoType: Schema$GooglePrivacyDlpV2beta2InfoType;
  /**
   * Likelihood to return for this custom info type. This base value can be
   * altered by a detection rule if the finding meets the criteria specified by
   * the rule. Defaults to `VERY_LIKELY` if not specified.
   */
  likelihood: string;
  /**
   * Regex-based custom info type.
   */
  regex: Schema$GooglePrivacyDlpV2beta2Regex;
  /**
   * Surrogate info type.
   */
  surrogateType: Schema$GooglePrivacyDlpV2beta2SurrogateType;
}
/**
 * Record key for a finding in Cloud Datastore.
 */
export interface Schema$GooglePrivacyDlpV2beta2DatastoreKey {
  /**
   * Datastore entity key.
   */
  entityKey: Schema$GooglePrivacyDlpV2beta2Key;
}
/**
 * Options defining a data set within Google Cloud Datastore.
 */
export interface Schema$GooglePrivacyDlpV2beta2DatastoreOptions {
  /**
   * The kind to process.
   */
  kind: Schema$GooglePrivacyDlpV2beta2KindExpression;
  /**
   * A partition ID identifies a grouping of entities. The grouping is always by
   * project and namespace, however the namespace ID may be empty.
   */
  partitionId: Schema$GooglePrivacyDlpV2beta2PartitionId;
}
/**
 * Shifts dates by random number of days, with option to be consistent for the
 * same context.
 */
export interface Schema$GooglePrivacyDlpV2beta2DateShiftConfig {
  /**
   * Points to the field that contains the context, for example, an entity id.
   * If set, must also set method. If set, shift will be consistent for the
   * given context.
   */
  context: Schema$GooglePrivacyDlpV2beta2FieldId;
  /**
   * Causes the shift to be computed based on this key and the context. This
   * results in the same shift for the same context and crypto_key.
   */
  cryptoKey: Schema$GooglePrivacyDlpV2beta2CryptoKey;
  /**
   * For example, -5 means shift date to at most 5 days back in the past.
   * [Required]
   */
  lowerBoundDays: number;
  /**
   * Range of shift in days. Actual shift will be selected at random within this
   * range (inclusive ends). Negative means shift to earlier in time. Must not
   * be more than 365250 days (1000 years) each direction.  For example, 3 means
   * shift date to at most 3 days into the future. [Required]
   */
  upperBoundDays: number;
}
/**
 * Message for a date time object.
 */
export interface Schema$GooglePrivacyDlpV2beta2DateTime {
  /**
   * One or more of the following must be set. All fields are optional, but when
   * set must be valid date or time values.
   */
  date: Schema$GoogleTypeDate;
  dayOfWeek: string;
  time: Schema$GoogleTypeTimeOfDay;
  timeZone: Schema$GooglePrivacyDlpV2beta2TimeZone;
}
/**
 * The configuration that controls how the data will change.
 */
export interface Schema$GooglePrivacyDlpV2beta2DeidentifyConfig {
  /**
   * Treat the dataset as free-form text and apply the same free text
   * transformation everywhere.
   */
  infoTypeTransformations:
      Schema$GooglePrivacyDlpV2beta2InfoTypeTransformations;
  /**
   * Treat the dataset as structured. Transformations can be applied to specific
   * locations within structured datasets, such as transforming a column within
   * a table.
   */
  recordTransformations: Schema$GooglePrivacyDlpV2beta2RecordTransformations;
}
/**
 * Request to de-identify a list of items.
 */
export interface Schema$GooglePrivacyDlpV2beta2DeidentifyContentRequest {
  /**
   * Configuration for the de-identification of the content item. Items
   * specified here will override the template referenced by the
   * deidentify_template_name argument.
   */
  deidentifyConfig: Schema$GooglePrivacyDlpV2beta2DeidentifyConfig;
  /**
   * Optional template to use. Any configuration directly specified in
   * deidentify_config will override those set in the template. Singular fields
   * that are set in this request will replace their corresponding fields in the
   * template. Repeated fields are appended. Singular sub-messages and groups
   * are recursively merged.
   */
  deidentifyTemplateName: string;
  /**
   * Configuration for the inspector. Items specified here will override the
   * template referenced by the inspect_template_name argument.
   */
  inspectConfig: Schema$GooglePrivacyDlpV2beta2InspectConfig;
  /**
   * Optional template to use. Any configuration directly specified in
   * inspect_config will override those set in the template. Singular fields
   * that are set in this request will replace their corresponding fields in the
   * template. Repeated fields are appended. Singular sub-messages and groups
   * are recursively merged.
   */
  inspectTemplateName: string;
  /**
   * The item to de-identify. Will be treated as text.
   */
  item: Schema$GooglePrivacyDlpV2beta2ContentItem;
}
/**
 * Results of de-identifying a ContentItem.
 */
export interface Schema$GooglePrivacyDlpV2beta2DeidentifyContentResponse {
  /**
   * The de-identified item.
   */
  item: Schema$GooglePrivacyDlpV2beta2ContentItem;
  /**
   * An overview of the changes that were made on the `item`.
   */
  overview: Schema$GooglePrivacyDlpV2beta2TransformationOverview;
}
/**
 * The DeidentifyTemplates contains instructions on how to deidentify content.
 */
export interface Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate {
  /**
   * The creation timestamp of a inspectTemplate, output only field.
   */
  createTime: string;
  /**
   * ///////////// // The core content of the template  // ///////////////
   */
  deidentifyConfig: Schema$GooglePrivacyDlpV2beta2DeidentifyConfig;
  /**
   * Short description (max 256 chars).
   */
  description: string;
  /**
   * Display name (max 256 chars).
   */
  displayName: string;
  /**
   * The template name. Output only.  The template will have one of the
   * following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR
   * `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`
   */
  name: string;
  /**
   * The last update timestamp of a inspectTemplate, output only field.
   */
  updateTime: string;
}
/**
 * Rule for modifying a custom info type to alter behavior under certain
 * circumstances, depending on the specific details of the rule. Not supported
 * for the `surrogate_type` custom info type.
 */
export interface Schema$GooglePrivacyDlpV2beta2DetectionRule {
  /**
   * Hotword-based detection rule.
   */
  hotwordRule: Schema$GooglePrivacyDlpV2beta2HotwordRule;
}
/**
 * Custom information type based on a dictionary of words or phrases. This can
 * be used to match sensitive information specific to the data, such as a list
 * of employee IDs or job titles.  Dictionary words are case-insensitive and all
 * characters other than letters and digits in the unicode [Basic Multilingual
 * Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane)
 * will be replaced with whitespace when scanning for matches, so the dictionary
 * phrase &quot;Sam Johnson&quot; will match all three phrases &quot;sam
 * johnson&quot;, &quot;Sam, Johnson&quot;, and &quot;Sam (Johnson)&quot;.
 * Additionally, the characters surrounding any match must be of a different
 * type than the adjacent characters within the word, so letters must be next to
 * non-letters and digits next to non-digits. For example, the dictionary word
 * &quot;jen&quot; will match the first three letters of the text
 * &quot;jen123&quot; but will return no matches for &quot;jennifer&quot;.
 * Dictionary words containing a large number of characters that are not letters
 * or digits may result in unexpected findings because such characters are
 * treated as whitespace.
 */
export interface Schema$GooglePrivacyDlpV2beta2Dictionary {
  /**
   * List of words or phrases to search for.
   */
  wordList: Schema$GooglePrivacyDlpV2beta2WordList;
}
/**
 * Combines all of the information about a DLP job.
 */
export interface Schema$GooglePrivacyDlpV2beta2DlpJob {
  /**
   * Time when the job was created.
   */
  createTime: string;
  /**
   * Time when the job finished.
   */
  endTime: string;
  /**
   * A stream of errors encountered running the job.
   */
  errorResults: Schema$GoogleRpcStatus[];
  /**
   * Results from inspecting a data source.
   */
  inspectDetails: Schema$GooglePrivacyDlpV2beta2InspectDataSourceDetails;
  /**
   * If created by a job trigger, the resource name of the trigger that
   * instantiated the job.
   */
  jobTriggerName: string;
  /**
   * The server-assigned name.
   */
  name: string;
  /**
   * Results from analyzing risk of a data source.
   */
  riskDetails: Schema$GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskDetails;
  /**
   * Time when the job started.
   */
  startTime: string;
  /**
   * State of a job.
   */
  state: string;
  /**
   * The type of job.
   */
  type: string;
}
/**
 * An entity in a dataset is a field or set of fields that correspond to a
 * single person. For example, in medical records the `EntityId` might be a
 * patient identifier, or for financial records it might be an account
 * identifier. This message is used when generalizations or analysis must be
 * consistent across multiple rows pertaining to the same entity.
 */
export interface Schema$GooglePrivacyDlpV2beta2EntityId {
  /**
   * Composite key indicating which field contains the entity identifier.
   */
  field: Schema$GooglePrivacyDlpV2beta2FieldId;
}
/**
 * The results of an unsuccessful activation of the JobTrigger.
 */
export interface Schema$GooglePrivacyDlpV2beta2Error {
  details: Schema$GoogleRpcStatus;
  /**
   * The times the error occurred.
   */
  timestamps: string[];
}
/**
 * An expression, consisting or an operator and conditions.
 */
export interface Schema$GooglePrivacyDlpV2beta2Expressions {
  conditions: Schema$GooglePrivacyDlpV2beta2Conditions;
  /**
   * The operator to apply to the result of conditions. Default and currently
   * only supported value is `AND`.
   */
  logicalOperator: string;
}
/**
 * General identifier of a data field in a storage service.
 */
export interface Schema$GooglePrivacyDlpV2beta2FieldId {
  /**
   * Name describing the field.
   */
  name: string;
}
/**
 * The transformation to apply to the field.
 */
export interface Schema$GooglePrivacyDlpV2beta2FieldTransformation {
  /**
   * Only apply the transformation if the condition evaluates to true for the
   * given `RecordCondition`. The conditions are allowed to reference fields
   * that are not used in the actual transformation. [optional]  Example Use
   * Cases:  - Apply a different bucket transformation to an age column if the
   * zip code column for the same record is within a specific range. - Redact a
   * field if the date of birth field is greater than 85.
   */
  condition: Schema$GooglePrivacyDlpV2beta2RecordCondition;
  /**
   * Input field(s) to apply the transformation to. [required]
   */
  fields: Schema$GooglePrivacyDlpV2beta2FieldId[];
  /**
   * Treat the contents of the field as free text, and selectively transform
   * content that matches an `InfoType`.
   */
  infoTypeTransformations:
      Schema$GooglePrivacyDlpV2beta2InfoTypeTransformations;
  /**
   * Apply the transformation to the entire field.
   */
  primitiveTransformation:
      Schema$GooglePrivacyDlpV2beta2PrimitiveTransformation;
}
/**
 * Set of files to scan.
 */
export interface Schema$GooglePrivacyDlpV2beta2FileSet {
  /**
   * The url, in the format `gs://&lt;bucket&gt;/&lt;path&gt;`. Trailing
   * wildcard in the path is allowed.
   */
  url: string;
}
/**
 * Represents a piece of potentially sensitive content.
 */
export interface Schema$GooglePrivacyDlpV2beta2Finding {
  /**
   * Timestamp when finding was detected.
   */
  createTime: string;
  /**
   * The type of content that might have been found. Provided if requested by
   * the `InspectConfig`.
   */
  infoType: Schema$GooglePrivacyDlpV2beta2InfoType;
  /**
   * Estimate of how likely it is that the `info_type` is correct.
   */
  likelihood: string;
  /**
   * Where the content was found.
   */
  location: Schema$GooglePrivacyDlpV2beta2Location;
  /**
   * The content that was found. Even if the content is not textual, it may be
   * converted to a textual representation here. Provided if requested by the
   * `InspectConfig` and the finding is less than or equal to 4096 bytes long.
   * If the finding exceeds 4096 bytes in length, the quote may be omitted.
   */
  quote: string;
  /**
   * Contains data parsed from quotes. Only populated if include_quote was set
   * to true and a supported infoType was requested. Currently supported
   * infoTypes: DATE, DATE_OF_BIRTH and TIME.
   */
  quoteInfo: Schema$GooglePrivacyDlpV2beta2QuoteInfo;
}
export interface Schema$GooglePrivacyDlpV2beta2FindingLimits {
  /**
   * Configuration of findings limit given for specified infoTypes.
   */
  maxFindingsPerInfoType: Schema$GooglePrivacyDlpV2beta2InfoTypeLimit[];
  /**
   * Max number of findings that will be returned for each item scanned. When
   * set within `InspectDataSourceRequest`, the maximum returned is 1000
   * regardless if this is set higher. When set within `InspectContentRequest`,
   * this field is ignored.
   */
  maxFindingsPerItem: number;
  /**
   * Max number of findings that will be returned per request/job. When set
   * within `InspectContentRequest`, the maximum returned is 1000 regardless if
   * this is set higher.
   */
  maxFindingsPerRequest: number;
}
/**
 * Buckets values based on fixed size ranges. The Bucketing transformation can
 * provide all of this functionality, but requires more configuration. This
 * message is provided as a convenience to the user for simple bucketing
 * strategies.  The transformed value will be a hyphenated string of
 * &lt;lower_bound&gt;-&lt;upper_bound&gt;, i.e if lower_bound = 10 and
 * upper_bound = 20 all values that are within this bucket will be replaced with
 * &quot;10-20&quot;.  This can be used on data of type: double, long.  If the
 * bound Value type differs from the type of data being transformed, we will
 * first attempt converting the type of the data to be transformed to match the
 * type of the bound before comparing.
 */
export interface Schema$GooglePrivacyDlpV2beta2FixedSizeBucketingConfig {
  /**
   * Size of each bucket (except for minimum and maximum buckets). So if
   * `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the
   * following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60,
   * 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. [Required].
   */
  bucketSize: number;
  /**
   * Lower bound value of buckets. All values less than `lower_bound` are
   * grouped together into a single bucket; for example if `lower_bound` = 10,
   * then all values less than 10 are replaced with the value “-10”. [Required].
   */
  lowerBound: Schema$GooglePrivacyDlpV2beta2Value;
  /**
   * Upper bound value of buckets. All values greater than upper_bound are
   * grouped together into a single bucket; for example if `upper_bound` = 89,
   * then all values greater than 89 are replaced with the value “89+”.
   * [Required].
   */
  upperBound: Schema$GooglePrivacyDlpV2beta2Value;
}
/**
 * Detection rule that adjusts the likelihood of findings within a certain
 * proximity of hotwords.
 */
export interface Schema$GooglePrivacyDlpV2beta2HotwordRule {
  /**
   * Regex pattern defining what qualifies as a hotword.
   */
  hotwordRegex: Schema$GooglePrivacyDlpV2beta2Regex;
  /**
   * Likelihood adjustment to apply to all matching findings.
   */
  likelihoodAdjustment: Schema$GooglePrivacyDlpV2beta2LikelihoodAdjustment;
  /**
   * Proximity of the finding within which the entire hotword must reside. The
   * total length of the window cannot exceed 1000 characters. Note that the
   * finding itself will be included in the window, so that hotwords may be used
   * to match substrings of the finding itself. For example, the certainty of a
   * phone number regex &quot;\(\d{3}\) \d{3}-\d{4}&quot; could be adjusted
   * upwards if the area code is known to be the local area code of a company
   * office using the hotword regex &quot;\(xxx\)&quot;, where &quot;xxx&quot;
   * is the area code in question.
   */
  proximity: Schema$GooglePrivacyDlpV2beta2Proximity;
}
/**
 * Bounding box encompassing detected text within an image.
 */
export interface Schema$GooglePrivacyDlpV2beta2ImageLocation {
  /**
   * Height of the bounding box in pixels.
   */
  height: number;
  /**
   * Left coordinate of the bounding box. (0,0) is upper left.
   */
  left: number;
  /**
   * Top coordinate of the bounding box. (0,0) is upper left.
   */
  top: number;
  /**
   * Width of the bounding box in pixels.
   */
  width: number;
}
/**
 * Configuration for determining how redaction of images should occur.
 */
export interface Schema$GooglePrivacyDlpV2beta2ImageRedactionConfig {
  /**
   * Only one per info_type should be provided per request. If not specified,
   * and redact_all_text is false, the DLP API will redact all text that it
   * matches against all info_types that are found, but not specified in another
   * ImageRedactionConfig.
   */
  infoType: Schema$GooglePrivacyDlpV2beta2InfoType;
  /**
   * If true, all text found in the image, regardless whether it matches an
   * info_type, is redacted.
   */
  redactAllText: boolean;
  /**
   * The color to use when redacting content from an image. If not specified,
   * the default is black.
   */
  redactionColor: Schema$GooglePrivacyDlpV2beta2Color;
}
/**
 * Type of information detected by the API.
 */
export interface Schema$GooglePrivacyDlpV2beta2InfoType {
  /**
   * Name of the information type.
   */
  name: string;
}
/**
 * InfoType description.
 */
export interface Schema$GooglePrivacyDlpV2beta2InfoTypeDescription {
  /**
   * Human readable form of the infoType name.
   */
  displayName: string;
  /**
   * Internal name of the infoType.
   */
  name: string;
  /**
   * Which parts of the API supports this InfoType.
   */
  supportedBy: string[];
}
/**
 * Max findings configuration per infoType, per content item or long running
 * DlpJob.
 */
export interface Schema$GooglePrivacyDlpV2beta2InfoTypeLimit {
  /**
   * Type of information the findings limit applies to. Only one limit per
   * info_type should be provided. If InfoTypeLimit does not have an info_type,
   * the DLP API applies the limit against all info_types that are found but not
   * specified in another InfoTypeLimit.
   */
  infoType: Schema$GooglePrivacyDlpV2beta2InfoType;
  /**
   * Max findings limit for the given infoType.
   */
  maxFindings: number;
}
/**
 * Statistics regarding a specific InfoType.
 */
export interface Schema$GooglePrivacyDlpV2beta2InfoTypeStatistics {
  /**
   * Number of findings for this infoType.
   */
  count: string;
  /**
   * The type of finding this stat is for.
   */
  infoType: Schema$GooglePrivacyDlpV2beta2InfoType;
}
/**
 * A transformation to apply to text that is identified as a specific info_type.
 */
export interface Schema$GooglePrivacyDlpV2beta2InfoTypeTransformation {
  /**
   * InfoTypes to apply the transformation to. Empty list will match all
   * available infoTypes for this transformation.
   */
  infoTypes: Schema$GooglePrivacyDlpV2beta2InfoType[];
  /**
   * Primitive transformation to apply to the infoType. [required]
   */
  primitiveTransformation:
      Schema$GooglePrivacyDlpV2beta2PrimitiveTransformation;
}
/**
 * A type of transformation that will scan unstructured text and apply various
 * `PrimitiveTransformation`s to each finding, where the transformation is
 * applied to only values that were identified as a specific info_type.
 */
export interface Schema$GooglePrivacyDlpV2beta2InfoTypeTransformations {
  /**
   * Transformation for each infoType. Cannot specify more than one for a given
   * infoType. [required]
   */
  transformations: Schema$GooglePrivacyDlpV2beta2InfoTypeTransformation[];
}
/**
 * Configuration description of the scanning process. When used with
 * redactContent only info_types and min_likelihood are currently used.
 */
export interface Schema$GooglePrivacyDlpV2beta2InspectConfig {
  /**
   * Custom infoTypes provided by the user.
   */
  customInfoTypes: Schema$GooglePrivacyDlpV2beta2CustomInfoType[];
  /**
   * When true, excludes type information of the findings.
   */
  excludeInfoTypes: boolean;
  /**
   * When true, a contextual quote from the data that triggered a finding is
   * included in the response; see Finding.quote.
   */
  includeQuote: boolean;
  /**
   * Restricts what info_types to look for. The values must correspond to
   * InfoType values returned by ListInfoTypes or found in documentation. Empty
   * info_types runs all enabled detectors.
   */
  infoTypes: Schema$GooglePrivacyDlpV2beta2InfoType[];
  limits: Schema$GooglePrivacyDlpV2beta2FindingLimits;
  /**
   * Only returns findings equal or above this threshold. The default is
   * POSSIBLE.
   */
  minLikelihood: string;
}
/**
 * Request to search for potentially sensitive info in a ContentItem.
 */
export interface Schema$GooglePrivacyDlpV2beta2InspectContentRequest {
  /**
   * Configuration for the inspector. What specified here will override the
   * template referenced by the inspect_template_name argument.
   */
  inspectConfig: Schema$GooglePrivacyDlpV2beta2InspectConfig;
  /**
   * Optional template to use. Any configuration directly specified in
   * inspect_config will override those set in the template. Singular fields
   * that are set in this request will replace their corresponding fields in the
   * template. Repeated fields are appended. Singular sub-messages and groups
   * are recursively merged.
   */
  inspectTemplateName: string;
  /**
   * The item to inspect.
   */
  item: Schema$GooglePrivacyDlpV2beta2ContentItem;
}
/**
 * Results of inspecting an item.
 */
export interface Schema$GooglePrivacyDlpV2beta2InspectContentResponse {
  /**
   * The findings.
   */
  result: Schema$GooglePrivacyDlpV2beta2InspectResult;
}
/**
 * The results of an inspect DataSource job.
 */
export interface Schema$GooglePrivacyDlpV2beta2InspectDataSourceDetails {
  /**
   * The configuration used for this job.
   */
  requestedOptions: Schema$GooglePrivacyDlpV2beta2RequestedOptions;
  /**
   * A summary of the outcome of this inspect job.
   */
  result: Schema$GooglePrivacyDlpV2beta2Result;
}
/**
 * Request for scheduling a scan of a data subset from a Google Platform data
 * repository.
 */
export interface Schema$GooglePrivacyDlpV2beta2InspectDataSourceRequest {
  /**
   * A configuration for the job.
   */
  jobConfig: Schema$GooglePrivacyDlpV2beta2InspectJobConfig;
  /**
   * Optional job ID to use for the created job. If not provided, a job ID will
   * automatically be generated. Must be unique within the project. The job ID
   * can contain uppercase and lowercase letters, numbers, and hyphens; that is,
   * it must match the regular expression: `[a-zA-Z\\d-]+`. The maximum length
   * is 100 characters. Can be empty to allow the system to generate one.
   */
  jobId: string;
}
export interface Schema$GooglePrivacyDlpV2beta2InspectJobConfig {
  /**
   * Actions to execute at the completion of the job. Are executed in the order
   * provided.
   */
  actions: Schema$GooglePrivacyDlpV2beta2Action[];
  /**
   * How and what to scan for.
   */
  inspectConfig: Schema$GooglePrivacyDlpV2beta2InspectConfig;
  /**
   * If provided, will be used as the default for all values in InspectConfig.
   * `inspect_config` will be merged into the values persisted as part of the
   * template.
   */
  inspectTemplateName: string;
  /**
   * Where to put the findings.
   */
  outputConfig: Schema$GooglePrivacyDlpV2beta2OutputStorageConfig;
  /**
   * The data to scan.
   */
  storageConfig: Schema$GooglePrivacyDlpV2beta2StorageConfig;
}
/**
 * All the findings for a single scanned item.
 */
export interface Schema$GooglePrivacyDlpV2beta2InspectResult {
  /**
   * List of findings for an item.
   */
  findings: Schema$GooglePrivacyDlpV2beta2Finding[];
  /**
   * If true, then this item might have more findings than were returned, and
   * the findings returned are an arbitrary subset of all findings. The findings
   * list might be truncated because the input items were too large, or because
   * the server reached the maximum amount of resources allowed for a single API
   * call. For best results, divide the input into smaller batches.
   */
  findingsTruncated: boolean;
}
/**
 * The inspectTemplate contains a configuration (set of types of sensitive data
 * to be detected) to be used anywhere you otherwise would normally specify
 * InspectConfig.
 */
export interface Schema$GooglePrivacyDlpV2beta2InspectTemplate {
  /**
   * The creation timestamp of a inspectTemplate, output only field.
   */
  createTime: string;
  /**
   * Short description (max 256 chars).
   */
  description: string;
  /**
   * Display name (max 256 chars).
   */
  displayName: string;
  /**
   * The core content of the template. Configuration of the scanning process.
   */
  inspectConfig: Schema$GooglePrivacyDlpV2beta2InspectConfig;
  /**
   * The template name. Output only.  The template will have one of the
   * following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR
   * `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`
   */
  name: string;
  /**
   * The last update timestamp of a inspectTemplate, output only field.
   */
  updateTime: string;
}
/**
 * Contains a configuration to make dlp api calls on a repeating basis.
 */
export interface Schema$GooglePrivacyDlpV2beta2JobTrigger {
  /**
   * The creation timestamp of a triggeredJob, output only field.
   */
  createTime: string;
  /**
   * User provided description (max 256 chars)
   */
  description: string;
  /**
   * Display name (max 100 chars)
   */
  displayName: string;
  /**
   * A stream of errors encountered when the trigger was activated. Repeated
   * errors may result in the JobTrigger automaticaly being paused. Will return
   * the last 100 errors. Whenever the JobTrigger is modified this list will be
   * cleared. Output only field.
   */
  errors: Schema$GooglePrivacyDlpV2beta2Error[];
  inspectJob: Schema$GooglePrivacyDlpV2beta2InspectJobConfig;
  /**
   * The timestamp of the last time this trigger executed.
   */
  lastRunTime: string;
  /**
   * Unique resource name for the triggeredJob, assigned by the service when the
   * triggeredJob is created, for example
   * `projects/dlp-test-project/triggeredJobs/53234423`.
   */
  name: string;
  /**
   * A status for this trigger. [required]
   */
  status: string;
  /**
   * A list of triggers which will be OR&#39;ed together. Only one in the list
   * needs to trigger for a job to be started. The list may contain only a
   * single Schedule trigger and must have at least one object.
   */
  triggers: Schema$GooglePrivacyDlpV2beta2Trigger[];
  /**
   * The last update timestamp of a triggeredJob, output only field.
   */
  updateTime: string;
}
/**
 * k-anonymity metric, used for analysis of reidentification risk.
 */
export interface Schema$GooglePrivacyDlpV2beta2KAnonymityConfig {
  /**
   * Optional message indicating that each distinct entity_id should not
   * contribute to the k-anonymity count more than once per equivalence class.
   * If an entity_id appears on several rows with different quasi-identifier
   * tuples, it will contribute to each count exactly once.  This can lead to
   * unexpected results. Consider a table where ID 1 is associated to
   * quasi-identifier &quot;foo&quot;, ID 2 to &quot;bar&quot;, and ID 3 to
   * *both* quasi-identifiers &quot;foo&quot; and &quot;bar&quot; (on separate
   * rows), and where this ID is used as entity_id. Then, the anonymity value
   * associated to ID 3 will be 2, even if it is the only ID to be associated to
   * both values &quot;foo&quot; and &quot;bar&quot;.
   */
  entityId: Schema$GooglePrivacyDlpV2beta2EntityId;
  /**
   * Set of fields to compute k-anonymity over. When multiple fields are
   * specified, they are considered a single composite key. Structs and repeated
   * data types are not supported; however, nested fields are supported so long
   * as they are not structs themselves or nested within a repeated field.
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta2FieldId[];
}
/**
 * The set of columns&#39; values that share the same ldiversity value
 */
export interface Schema$GooglePrivacyDlpV2beta2KAnonymityEquivalenceClass {
  /**
   * Size of the equivalence class, for example number of rows with the above
   * set of values.
   */
  equivalenceClassSize: string;
  /**
   * Set of values defining the equivalence class. One value per
   * quasi-identifier column in the original KAnonymity metric message. The
   * order is always the same as the original request.
   */
  quasiIdsValues: Schema$GooglePrivacyDlpV2beta2Value[];
}
export interface Schema$GooglePrivacyDlpV2beta2KAnonymityHistogramBucket {
  /**
   * Total number of equivalence classes in this bucket.
   */
  bucketSize: string;
  /**
   * Total number of distinct equivalence classes in this bucket.
   */
  bucketValueCount: string;
  /**
   * Sample of equivalence classes in this bucket. The total number of classes
   * returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta2KAnonymityEquivalenceClass[];
  /**
   * Lower bound on the size of the equivalence classes in this bucket.
   */
  equivalenceClassSizeLowerBound: string;
  /**
   * Upper bound on the size of the equivalence classes in this bucket.
   */
  equivalenceClassSizeUpperBound: string;
}
/**
 * Result of the k-anonymity computation.
 */
export interface Schema$GooglePrivacyDlpV2beta2KAnonymityResult {
  /**
   * Histogram of k-anonymity equivalence classes.
   */
  equivalenceClassHistogramBuckets:
      Schema$GooglePrivacyDlpV2beta2KAnonymityHistogramBucket[];
}
/**
 * A unique identifier for a Datastore entity. If a key&#39;s partition ID or
 * any of its path kinds or names are reserved/read-only, the key is
 * reserved/read-only. A reserved/read-only key is forbidden in certain
 * documented contexts.
 */
export interface Schema$GooglePrivacyDlpV2beta2Key {
  /**
   * Entities are partitioned into subsets, currently identified by a project ID
   * and namespace ID. Queries are scoped to a single partition.
   */
  partitionId: Schema$GooglePrivacyDlpV2beta2PartitionId;
  /**
   * The entity path. An entity path consists of one or more elements composed
   * of a kind and a string or numerical identifier, which identify entities.
   * The first element identifies a _root entity_, the second element identifies
   * a _child_ of the root entity, the third element identifies a child of the
   * second entity, and so forth. The entities identified by all prefixes of the
   * path are called the element&#39;s _ancestors_.  A path can never be empty,
   * and a path can have at most 100 elements.
   */
  path: Schema$GooglePrivacyDlpV2beta2PathElement[];
}
/**
 * A representation of a Datastore kind.
 */
export interface Schema$GooglePrivacyDlpV2beta2KindExpression {
  /**
   * The name of the kind.
   */
  name: string;
}
/**
 * Reidentifiability metric. This corresponds to a risk model similar to what is
 * called &quot;journalist risk&quot; in the literature, except the attack
 * dataset is statistically modeled instead of being perfectly known. This can
 * be done using publicly available data (like the US Census), or using a custom
 * statistical model (indicated as one or several BigQuery tables), or by
 * extrapolating from the distribution of values in the input dataset.
 */
export interface Schema$GooglePrivacyDlpV2beta2KMapEstimationConfig {
  /**
   * Several auxiliary tables can be used in the analysis. Each custom_tag used
   * to tag a quasi-identifiers column must appear in exactly one column of one
   * auxiliary table.
   */
  auxiliaryTables: Schema$GooglePrivacyDlpV2beta2AuxiliaryTable[];
  /**
   * Fields considered to be quasi-identifiers. No two columns can have the same
   * tag. [required]
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta2TaggedField[];
  /**
   * ISO 3166-1 alpha-2 region code to use in the statistical modeling. Required
   * if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a
   * region code.
   */
  regionCode: string;
}
/**
 * A KMapEstimationHistogramBucket message with the following values:
 * min_anonymity: 3   max_anonymity: 5   frequency: 42 means that there are 42
 * records whose quasi-identifier values correspond to 3, 4 or 5 people in the
 * overlying population. An important particular case is when min_anonymity =
 * max_anonymity = 1: the frequency field then corresponds to the number of
 * uniquely identifiable records.
 */
export interface Schema$GooglePrivacyDlpV2beta2KMapEstimationHistogramBucket {
  /**
   * Number of records within these anonymity bounds.
   */
  bucketSize: string;
  /**
   * Total number of distinct quasi-identifier tuple values in this bucket.
   */
  bucketValueCount: string;
  /**
   * Sample of quasi-identifier tuple values in this bucket. The total number of
   * classes returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta2KMapEstimationQuasiIdValues[];
  /**
   * Always greater than or equal to min_anonymity.
   */
  maxAnonymity: string;
  /**
   * Always positive.
   */
  minAnonymity: string;
}
/**
 * A tuple of values for the quasi-identifier columns.
 */
export interface Schema$GooglePrivacyDlpV2beta2KMapEstimationQuasiIdValues {
  /**
   * The estimated anonymity for these quasi-identifier values.
   */
  estimatedAnonymity: string;
  /**
   * The quasi-identifier values.
   */
  quasiIdsValues: Schema$GooglePrivacyDlpV2beta2Value[];
}
/**
 * Result of the reidentifiability analysis. Note that these results are an
 * estimation, not exact values.
 */
export interface Schema$GooglePrivacyDlpV2beta2KMapEstimationResult {
  /**
   * The intervals [min_anonymity, max_anonymity] do not overlap. If a value
   * doesn&#39;t correspond to any such interval, the associated frequency is
   * zero. For example, the following records:   {min_anonymity: 1,
   * max_anonymity: 1, frequency: 17}   {min_anonymity: 2, max_anonymity: 3,
   * frequency: 42}   {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean
   * that there are no record with an estimated anonymity of 4, 5, or larger
   * than 10.
   */
  kMapEstimationHistogram:
      Schema$GooglePrivacyDlpV2beta2KMapEstimationHistogramBucket[];
}
/**
 * Include to use an existing data crypto key wrapped by KMS. Authorization
 * requires the following IAM permissions when sending a request to perform a
 * crypto transformation using a kms-wrapped crypto key: dlp.kms.encrypt
 */
export interface Schema$GooglePrivacyDlpV2beta2KmsWrappedCryptoKey {
  /**
   * The resource name of the KMS CryptoKey to use for unwrapping. [required]
   */
  cryptoKeyName: string;
  /**
   * The wrapped data crypto key. [required]
   */
  wrappedKey: string;
}
/**
 * l-diversity metric, used for analysis of reidentification risk.
 */
export interface Schema$GooglePrivacyDlpV2beta2LDiversityConfig {
  /**
   * Set of quasi-identifiers indicating how equivalence classes are defined for
   * the l-diversity computation. When multiple fields are specified, they are
   * considered a single composite key.
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta2FieldId[];
  /**
   * Sensitive field for computing the l-value.
   */
  sensitiveAttribute: Schema$GooglePrivacyDlpV2beta2FieldId;
}
/**
 * The set of columns&#39; values that share the same ldiversity value.
 */
export interface Schema$GooglePrivacyDlpV2beta2LDiversityEquivalenceClass {
  /**
   * Size of the k-anonymity equivalence class.
   */
  equivalenceClassSize: string;
  /**
   * Number of distinct sensitive values in this equivalence class.
   */
  numDistinctSensitiveValues: string;
  /**
   * Quasi-identifier values defining the k-anonymity equivalence class. The
   * order is always the same as the original request.
   */
  quasiIdsValues: Schema$GooglePrivacyDlpV2beta2Value[];
  /**
   * Estimated frequencies of top sensitive values.
   */
  topSensitiveValues: Schema$GooglePrivacyDlpV2beta2ValueFrequency[];
}
export interface Schema$GooglePrivacyDlpV2beta2LDiversityHistogramBucket {
  /**
   * Total number of equivalence classes in this bucket.
   */
  bucketSize: string;
  /**
   * Total number of distinct equivalence classes in this bucket.
   */
  bucketValueCount: string;
  /**
   * Sample of equivalence classes in this bucket. The total number of classes
   * returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta2LDiversityEquivalenceClass[];
  /**
   * Lower bound on the sensitive value frequencies of the equivalence classes
   * in this bucket.
   */
  sensitiveValueFrequencyLowerBound: string;
  /**
   * Upper bound on the sensitive value frequencies of the equivalence classes
   * in this bucket.
   */
  sensitiveValueFrequencyUpperBound: string;
}
/**
 * Result of the l-diversity computation.
 */
export interface Schema$GooglePrivacyDlpV2beta2LDiversityResult {
  /**
   * Histogram of l-diversity equivalence class sensitive value frequencies.
   */
  sensitiveValueFrequencyHistogramBuckets:
      Schema$GooglePrivacyDlpV2beta2LDiversityHistogramBucket[];
}
/**
 * Message for specifying an adjustment to the likelihood of a finding as part
 * of a detection rule.
 */
export interface Schema$GooglePrivacyDlpV2beta2LikelihoodAdjustment {
  /**
   * Set the likelihood of a finding to a fixed value.
   */
  fixedLikelihood: string;
  /**
   * Increase or decrease the likelihood by the specified number of levels. For
   * example, if a finding would be `POSSIBLE` without the detection rule and
   * `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value
   * of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below
   * `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1
   * followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will
   * result in a final likelihood of `LIKELY`.
   */
  relativeLikelihood: number;
}
/**
 * Response message for ListDeidentifyTemplates.
 */
export interface Schema$GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse {
  /**
   * List of deidentify templates, up to page_size in
   * ListDeidentifyTemplatesRequest.
   */
  deidentifyTemplates: Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate[];
  /**
   * If the next page is available then the next page token to be used in
   * following ListDeidentifyTemplates request.
   */
  nextPageToken: string;
}
/**
 * The response message for listing DLP jobs.
 */
export interface Schema$GooglePrivacyDlpV2beta2ListDlpJobsResponse {
  /**
   * A list of DlpJobs that matches the specified filter in the request.
   */
  jobs: Schema$GooglePrivacyDlpV2beta2DlpJob[];
  /**
   * The standard List next-page token.
   */
  nextPageToken: string;
}
/**
 * Response to the ListInfoTypes request.
 */
export interface Schema$GooglePrivacyDlpV2beta2ListInfoTypesResponse {
  /**
   * Set of sensitive infoTypes.
   */
  infoTypes: Schema$GooglePrivacyDlpV2beta2InfoTypeDescription[];
}
/**
 * Response message for ListInspectTemplates.
 */
export interface Schema$GooglePrivacyDlpV2beta2ListInspectTemplatesResponse {
  /**
   * List of inspectTemplates, up to page_size in ListInspectTemplatesRequest.
   */
  inspectTemplates: Schema$GooglePrivacyDlpV2beta2InspectTemplate[];
  /**
   * If the next page is available then the next page token to be used in
   * following ListInspectTemplates request.
   */
  nextPageToken: string;
}
/**
 * Response message for ListJobTriggers.
 */
export interface Schema$GooglePrivacyDlpV2beta2ListJobTriggersResponse {
  /**
   * List of triggeredJobs, up to page_size in ListJobTriggersRequest.
   */
  jobTriggers: Schema$GooglePrivacyDlpV2beta2JobTrigger[];
  /**
   * If the next page is available then the next page token to be used in
   * following ListJobTriggers request.
   */
  nextPageToken: string;
}
/**
 * Specifies the location of the finding.
 */
export interface Schema$GooglePrivacyDlpV2beta2Location {
  /**
   * Zero-based byte offsets delimiting the finding. These are relative to the
   * finding&#39;s containing element. Note that when the content is not
   * textual, this references the UTF-8 encoded textual representation of the
   * content. Omitted if content is an image.
   */
  byteRange: Schema$GooglePrivacyDlpV2beta2Range;
  /**
   * Unicode character offsets delimiting the finding. These are relative to the
   * finding&#39;s containing element. Provided when the content is text.
   */
  codepointRange: Schema$GooglePrivacyDlpV2beta2Range;
  /**
   * The pointer to the property or cell that contained the finding. Provided
   * when the finding&#39;s containing element is a cell in a table or a
   * property of storage object.
   */
  fieldId: Schema$GooglePrivacyDlpV2beta2FieldId;
  /**
   * The area within the image that contained the finding. Provided when the
   * content is an image.
   */
  imageBoxes: Schema$GooglePrivacyDlpV2beta2ImageLocation[];
  /**
   * The pointer to the record in storage that contained the field the finding
   * was found in. Provided when the finding&#39;s containing element is a
   * property of a storage object.
   */
  recordKey: Schema$GooglePrivacyDlpV2beta2RecordKey;
  /**
   * The pointer to the row of the table that contained the finding. Provided
   * when the finding&#39;s containing element is a cell of a table.
   */
  tableLocation: Schema$GooglePrivacyDlpV2beta2TableLocation;
}
/**
 * Compute numerical stats over an individual column, including min, max, and
 * quantiles.
 */
export interface Schema$GooglePrivacyDlpV2beta2NumericalStatsConfig {
  /**
   * Field to compute numerical stats on. Supported types are integer, float,
   * date, datetime, timestamp, time.
   */
  field: Schema$GooglePrivacyDlpV2beta2FieldId;
}
/**
 * Result of the numerical stats computation.
 */
export interface Schema$GooglePrivacyDlpV2beta2NumericalStatsResult {
  /**
   * Maximum value appearing in the column.
   */
  maxValue: Schema$GooglePrivacyDlpV2beta2Value;
  /**
   * Minimum value appearing in the column.
   */
  minValue: Schema$GooglePrivacyDlpV2beta2Value;
  /**
   * List of 99 values that partition the set of field values into 100 equal
   * sized buckets.
   */
  quantileValues: Schema$GooglePrivacyDlpV2beta2Value[];
}
/**
 * Cloud repository for storing output.
 */
export interface Schema$GooglePrivacyDlpV2beta2OutputStorageConfig {
  /**
   * Schema used for writing the findings. Columns are derived from the
   * `Finding` object. If appending to an existing table, any columns from the
   * predefined schema that are missing will be added. No columns in the
   * existing table will be deleted.  If unspecified, then all available columns
   * will be used for a new table, and no changes will be made to an existing
   * table.
   */
  outputSchema: string;
  /**
   * Store findings in an existing table or a new table in an existing dataset.
   * Each column in an existing table must have the same name, type, and mode of
   * a field in the `Finding` object. If table_id is not set a new one will be
   * generated for you with the following format:
   * dlp_googleapis_yyyy_mm_dd_[dlp_job_id]. Pacific timezone will be used for
   * generating the date details.
   */
  table: Schema$GooglePrivacyDlpV2beta2BigQueryTable;
}
/**
 * Datastore partition ID. A partition ID identifies a grouping of entities. The
 * grouping is always by project and namespace, however the namespace ID may be
 * empty.  A partition ID contains several dimensions: project ID and namespace
 * ID.
 */
export interface Schema$GooglePrivacyDlpV2beta2PartitionId {
  /**
   * If not empty, the ID of the namespace to which the entities belong.
   */
  namespaceId: string;
  /**
   * The ID of the project to which the entities belong.
   */
  projectId: string;
}
/**
 * A (kind, ID/name) pair used to construct a key path.  If either name or ID is
 * set, the element is complete. If neither is set, the element is incomplete.
 */
export interface Schema$GooglePrivacyDlpV2beta2PathElement {
  /**
   * The auto-allocated ID of the entity. Never equal to zero. Values less than
   * zero are discouraged and may not be supported in the future.
   */
  id: string;
  /**
   * The kind of the entity. A kind matching regex `__.*__` is
   * reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8
   * encoded. Cannot be `&quot;&quot;`.
   */
  kind: string;
  /**
   * The name of the entity. A name matching regex `__.*__` is
   * reserved/read-only. A name must not be more than 1500 bytes when UTF-8
   * encoded. Cannot be `&quot;&quot;`.
   */
  name: string;
}
/**
 * A rule for transforming a value.
 */
export interface Schema$GooglePrivacyDlpV2beta2PrimitiveTransformation {
  bucketingConfig: Schema$GooglePrivacyDlpV2beta2BucketingConfig;
  characterMaskConfig: Schema$GooglePrivacyDlpV2beta2CharacterMaskConfig;
  cryptoHashConfig: Schema$GooglePrivacyDlpV2beta2CryptoHashConfig;
  cryptoReplaceFfxFpeConfig:
      Schema$GooglePrivacyDlpV2beta2CryptoReplaceFfxFpeConfig;
  dateShiftConfig: Schema$GooglePrivacyDlpV2beta2DateShiftConfig;
  fixedSizeBucketingConfig:
      Schema$GooglePrivacyDlpV2beta2FixedSizeBucketingConfig;
  redactConfig: Schema$GooglePrivacyDlpV2beta2RedactConfig;
  replaceConfig: Schema$GooglePrivacyDlpV2beta2ReplaceValueConfig;
  replaceWithInfoTypeConfig:
      Schema$GooglePrivacyDlpV2beta2ReplaceWithInfoTypeConfig;
  timePartConfig: Schema$GooglePrivacyDlpV2beta2TimePartConfig;
}
/**
 * Privacy metric to compute for reidentification risk analysis.
 */
export interface Schema$GooglePrivacyDlpV2beta2PrivacyMetric {
  categoricalStatsConfig: Schema$GooglePrivacyDlpV2beta2CategoricalStatsConfig;
  kAnonymityConfig: Schema$GooglePrivacyDlpV2beta2KAnonymityConfig;
  kMapEstimationConfig: Schema$GooglePrivacyDlpV2beta2KMapEstimationConfig;
  lDiversityConfig: Schema$GooglePrivacyDlpV2beta2LDiversityConfig;
  numericalStatsConfig: Schema$GooglePrivacyDlpV2beta2NumericalStatsConfig;
}
/**
 * Message for specifying a window around a finding to apply a detection rule.
 */
export interface Schema$GooglePrivacyDlpV2beta2Proximity {
  /**
   * Number of characters after the finding to consider.
   */
  windowAfter: number;
  /**
   * Number of characters before the finding to consider.
   */
  windowBefore: number;
}
/**
 * Publish the results of a DlpJob to a pub sub channel. Compatible with:
 * Inpect, Risk
 */
export interface Schema$GooglePrivacyDlpV2beta2PublishToPubSub {
  /**
   * Cloud Pub/Sub topic to send notifications to. The topic must have given
   * publishing access rights to the DLP API service account executing the long
   * running DlpJob sending the notifications. Format is
   * projects/{project}/topics/{topic}.
   */
  topic: string;
}
/**
 * A quasi-identifier column has a custom_tag, used to know which column in the
 * data corresponds to which column in the statistical model.
 */
export interface Schema$GooglePrivacyDlpV2beta2QuasiIdField {
  customTag: string;
  field: Schema$GooglePrivacyDlpV2beta2FieldId;
}
/**
 * Message for infoType-dependent details parsed from quote.
 */
export interface Schema$GooglePrivacyDlpV2beta2QuoteInfo {
  dateTime: Schema$GooglePrivacyDlpV2beta2DateTime;
}
/**
 * Generic half-open interval [start, end)
 */
export interface Schema$GooglePrivacyDlpV2beta2Range {
  /**
   * Index of the last character of the range (exclusive).
   */
  end: string;
  /**
   * Index of the first character of the range (inclusive).
   */
  start: string;
}
/**
 * A condition for determining whether a transformation should be applied to a
 * field.
 */
export interface Schema$GooglePrivacyDlpV2beta2RecordCondition {
  /**
   * An expression.
   */
  expressions: Schema$GooglePrivacyDlpV2beta2Expressions;
}
/**
 * Message for a unique key indicating a record that contains a finding.
 */
export interface Schema$GooglePrivacyDlpV2beta2RecordKey {
  bigQueryKey: Schema$GooglePrivacyDlpV2beta2BigQueryKey;
  cloudStorageKey: Schema$GooglePrivacyDlpV2beta2CloudStorageKey;
  datastoreKey: Schema$GooglePrivacyDlpV2beta2DatastoreKey;
}
/**
 * Configuration to suppress records whose suppression conditions evaluate to
 * true.
 */
export interface Schema$GooglePrivacyDlpV2beta2RecordSuppression {
  /**
   * A condition that when it evaluates to true will result in the record being
   * evaluated to be suppressed from the transformed content.
   */
  condition: Schema$GooglePrivacyDlpV2beta2RecordCondition;
}
/**
 * A type of transformation that is applied over structured data such as a
 * table.
 */
export interface Schema$GooglePrivacyDlpV2beta2RecordTransformations {
  /**
   * Transform the record by applying various field transformations.
   */
  fieldTransformations: Schema$GooglePrivacyDlpV2beta2FieldTransformation[];
  /**
   * Configuration defining which records get suppressed entirely. Records that
   * match any suppression rule are omitted from the output [optional].
   */
  recordSuppressions: Schema$GooglePrivacyDlpV2beta2RecordSuppression[];
}
/**
 * Redact a given value. For example, if used with an `InfoTypeTransformation`
 * transforming PHONE_NUMBER, and input &#39;My phone number is
 * 206-555-0123&#39;, the output would be &#39;My phone number is &#39;.
 */
export interface Schema$GooglePrivacyDlpV2beta2RedactConfig {}
/**
 * Request to search for potentially sensitive info in a list of items and
 * replace it with a default or provided content.
 */
export interface Schema$GooglePrivacyDlpV2beta2RedactImageRequest {
  /**
   * The bytes of the image to redact.
   */
  imageData: string;
  /**
   * The configuration for specifying what content to redact from images.
   */
  imageRedactionConfigs: Schema$GooglePrivacyDlpV2beta2ImageRedactionConfig[];
  /**
   * Type of the content, as defined in Content-Type HTTP header. Supported
   * types are: PNG, JPEG, SVG, &amp; BMP.
   */
  imageType: string;
  /**
   * Configuration for the inspector.
   */
  inspectConfig: Schema$GooglePrivacyDlpV2beta2InspectConfig;
}
/**
 * Results of redacting an image.
 */
export interface Schema$GooglePrivacyDlpV2beta2RedactImageResponse {
  /**
   * If an image was being inspected and the InspectConfig&#39;s include_quote
   * was set to true, then this field will include all text, if any, that was
   * found in the image.
   */
  extractedText: string;
  /**
   * The redacted image. The type will be the same as the original image.
   */
  redactedImage: string;
}
/**
 * Message defining a custom regular expression.
 */
export interface Schema$GooglePrivacyDlpV2beta2Regex {
  /**
   * Pattern defining the regular expression.
   */
  pattern: string;
}
/**
 * Request to re-identify an item.
 */
export interface Schema$GooglePrivacyDlpV2beta2ReidentifyContentRequest {
  /**
   * Configuration for the inspector.
   */
  inspectConfig: Schema$GooglePrivacyDlpV2beta2InspectConfig;
  /**
   * Optional template to use. Any configuration directly specified in
   * `inspect_config` will override those set in the template. Singular fields
   * that are set in this request will replace their corresponding fields in the
   * template. Repeated fields are appended. Singular sub-messages and groups
   * are recursively merged.
   */
  inspectTemplateName: string;
  /**
   * The item to re-identify. Will be treated as text.
   */
  item: Schema$GooglePrivacyDlpV2beta2ContentItem;
  /**
   * Configuration for the re-identification of the content item. This field
   * shares the same proto message type that is used for de-identification,
   * however its usage here is for the reversal of the previous
   * de-identification. Re-identification is performed by examining the
   * transformations used to de-identify the items and executing the reverse.
   * This requires that only reversible transformations be provided here. The
   * reversible transformations are:   - `CryptoReplaceFfxFpeConfig`
   */
  reidentifyConfig: Schema$GooglePrivacyDlpV2beta2DeidentifyConfig;
  /**
   * Optional template to use. References an instance of `DeidentifyTemplate`.
   * Any configuration directly specified in `reidentify_config` or
   * `inspect_config` will override those set in the template. Singular fields
   * that are set in this request will replace their corresponding fields in the
   * template. Repeated fields are appended. Singular sub-messages and groups
   * are recursively merged.
   */
  reidentifyTemplateName: string;
}
/**
 * Results of re-identifying a item.
 */
export interface Schema$GooglePrivacyDlpV2beta2ReidentifyContentResponse {
  /**
   * The re-identified item.
   */
  item: Schema$GooglePrivacyDlpV2beta2ContentItem;
  /**
   * An overview of the changes that were made to the `item`.
   */
  overview: Schema$GooglePrivacyDlpV2beta2TransformationOverview;
}
/**
 * Replace each input value with a given `Value`.
 */
export interface Schema$GooglePrivacyDlpV2beta2ReplaceValueConfig {
  /**
   * Value to replace it with.
   */
  newValue: Schema$GooglePrivacyDlpV2beta2Value;
}
/**
 * Replace each matching finding with the name of the info_type.
 */
export interface Schema$GooglePrivacyDlpV2beta2ReplaceWithInfoTypeConfig {}
export interface Schema$GooglePrivacyDlpV2beta2RequestedOptions {
  jobConfig: Schema$GooglePrivacyDlpV2beta2InspectJobConfig;
  /**
   * If run with an inspect template, a snapshot of it&#39;s state at the time
   * of this run.
   */
  snapshotInspectTemplate: Schema$GooglePrivacyDlpV2beta2InspectTemplate;
}
export interface Schema$GooglePrivacyDlpV2beta2Result {
  /**
   * Statistics of how many instances of each info type were found during
   * inspect job.
   */
  infoTypeStats: Schema$GooglePrivacyDlpV2beta2InfoTypeStatistics[];
  /**
   * Total size in bytes that were processed.
   */
  processedBytes: string;
  /**
   * Estimate of the number of bytes to process.
   */
  totalEstimatedBytes: string;
}
/**
 * Configuration for a risk analysis job.
 */
export interface Schema$GooglePrivacyDlpV2beta2RiskAnalysisJobConfig {
  /**
   * Actions to execute at the completion of the job. Are executed in the order
   * provided.
   */
  actions: Schema$GooglePrivacyDlpV2beta2Action[];
  /**
   * Privacy metric to compute.
   */
  privacyMetric: Schema$GooglePrivacyDlpV2beta2PrivacyMetric;
  /**
   * Input dataset to compute metrics over.
   */
  sourceTable: Schema$GooglePrivacyDlpV2beta2BigQueryTable;
}
export interface Schema$GooglePrivacyDlpV2beta2Row {
  values: Schema$GooglePrivacyDlpV2beta2Value[];
}
/**
 * If set, the detailed findings will be persisted to the specified
 * OutputStorageConfig. Compatible with: Inspect
 */
export interface Schema$GooglePrivacyDlpV2beta2SaveFindings {
  outputConfig: Schema$GooglePrivacyDlpV2beta2OutputStorageConfig;
}
/**
 * Schedule for triggeredJobs.
 */
export interface Schema$GooglePrivacyDlpV2beta2Schedule {
  /**
   * With this option a job is started a regular periodic basis. For example:
   * every 10 minutes.  A scheduled start time will be skipped if the previous
   * execution has not ended when its scheduled time occurs.  This value must be
   * set to a time duration greater than or equal to 60 minutes and can be no
   * longer than 60 days.
   */
  reccurrencePeriodDuration: string;
}
/**
 * Shared message indicating Cloud storage type.
 */
export interface Schema$GooglePrivacyDlpV2beta2StorageConfig {
  /**
   * BigQuery options specification.
   */
  bigQueryOptions: Schema$GooglePrivacyDlpV2beta2BigQueryOptions;
  /**
   * Google Cloud Storage options specification.
   */
  cloudStorageOptions: Schema$GooglePrivacyDlpV2beta2CloudStorageOptions;
  /**
   * Google Cloud Datastore options specification.
   */
  datastoreOptions: Schema$GooglePrivacyDlpV2beta2DatastoreOptions;
  timespanConfig: Schema$GooglePrivacyDlpV2beta2TimespanConfig;
}
/**
 * A collection that informs the user the number of times a particular
 * `TransformationResultCode` and error details occurred.
 */
export interface Schema$GooglePrivacyDlpV2beta2SummaryResult {
  code: string;
  count: string;
  /**
   * A place for warnings or errors to show up if a transformation didn&#39;t
   * work as expected.
   */
  details: string;
}
/**
 * Message for detecting output from deidentification transformations such as
 * [`CryptoReplaceFfxFpeConfig`](/dlp/docs/reference/rest/v2beta1/content/deidentify#CryptoReplaceFfxFpeConfig).
 * These types of transformations are those that perform pseudonymization,
 * thereby producing a &quot;surrogate&quot; as output. This should be used in
 * conjunction with a field on the transformation such as `surrogate_info_type`.
 * This custom info type does not support the use of `detection_rules`.
 */
export interface Schema$GooglePrivacyDlpV2beta2SurrogateType {}
/**
 * Structured content to inspect. Up to 50,000 `Value`s per request allowed.
 */
export interface Schema$GooglePrivacyDlpV2beta2Table {
  headers: Schema$GooglePrivacyDlpV2beta2FieldId[];
  rows: Schema$GooglePrivacyDlpV2beta2Row[];
}
/**
 * Location of a finding within a table.
 */
export interface Schema$GooglePrivacyDlpV2beta2TableLocation {
  /**
   * The zero-based index of the row where the finding is located.
   */
  rowIndex: string;
}
/**
 * A column with a semantic tag attached.
 */
export interface Schema$GooglePrivacyDlpV2beta2TaggedField {
  /**
   * A column can be tagged with a custom tag. In this case, the user must
   * indicate an auxiliary table that contains statistical information on the
   * possible values of this column (below).
   */
  customTag: string;
  /**
   * Identifies the column. [required]
   */
  field: Schema$GooglePrivacyDlpV2beta2FieldId;
  /**
   * If no semantic tag is indicated, we infer the statistical model from the
   * distribution of values in the input data
   */
  inferred: Schema$GoogleProtobufEmpty;
  /**
   * A column can be tagged with a InfoType to use the relevant public dataset
   * as a statistical model of population, if available. We currently support US
   * ZIP codes, region codes, ages and genders. To programmatically obtain the
   * list of supported InfoTypes, use ListInfoTypes with the
   * supported_by=RISK_ANALYSIS filter.
   */
  infoType: Schema$GooglePrivacyDlpV2beta2InfoType;
}
/**
 * For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a
 * portion of the value.
 */
export interface Schema$GooglePrivacyDlpV2beta2TimePartConfig {
  partToExtract: string;
}
/**
 * Configuration of the timespan of the items to include in scanning. Currently
 * only supported when inspecting Google Cloud Storage and BigQuery.
 */
export interface Schema$GooglePrivacyDlpV2beta2TimespanConfig {
  /**
   * When the job is started by a JobTrigger we will automatically figure out a
   * valid start_time to avoid scanning files that have not been modified since
   * the last time the JobTrigger executed. This will be based on the time of
   * the execution of the last run of the JobTrigger.
   */
  enableAutoPopulationOfTimespanConfig: boolean;
  /**
   * Exclude files newer than this value. If set to zero, no upper time limit is
   * applied.
   */
  endTime: string;
  /**
   * Exclude files older than this value.
   */
  startTime: string;
}
export interface Schema$GooglePrivacyDlpV2beta2TimeZone {
  /**
   * Set only if the offset can be determined. Positive for time ahead of UTC.
   * E.g. For &quot;UTC-9&quot;, this value is -540.
   */
  offsetMinutes: number;
}
/**
 * Overview of the modifications that occurred.
 */
export interface Schema$GooglePrivacyDlpV2beta2TransformationOverview {
  /**
   * Transformations applied to the dataset.
   */
  transformationSummaries:
      Schema$GooglePrivacyDlpV2beta2TransformationSummary[];
  /**
   * Total size in bytes that were transformed in some way.
   */
  transformedBytes: string;
}
/**
 * Summary of a single tranformation. Only one of &#39;transformation&#39;,
 * &#39;field_transformation&#39;, or &#39;record_suppress&#39; will be set.
 */
export interface Schema$GooglePrivacyDlpV2beta2TransformationSummary {
  /**
   * Set if the transformation was limited to a specific FieldId.
   */
  field: Schema$GooglePrivacyDlpV2beta2FieldId;
  /**
   * The field transformation that was applied. If multiple field
   * transformations are requested for a single field, this list will contain
   * all of them; otherwise, only one is supplied.
   */
  fieldTransformations: Schema$GooglePrivacyDlpV2beta2FieldTransformation[];
  /**
   * Set if the transformation was limited to a specific info_type.
   */
  infoType: Schema$GooglePrivacyDlpV2beta2InfoType;
  /**
   * The specific suppression option these stats apply to.
   */
  recordSuppress: Schema$GooglePrivacyDlpV2beta2RecordSuppression;
  results: Schema$GooglePrivacyDlpV2beta2SummaryResult[];
  /**
   * The specific transformation these stats apply to.
   */
  transformation: Schema$GooglePrivacyDlpV2beta2PrimitiveTransformation;
  /**
   * Total size in bytes that were transformed in some way.
   */
  transformedBytes: string;
}
/**
 * Use this to have a random data crypto key generated. It will be discarded
 * after the request finishes.
 */
export interface Schema$GooglePrivacyDlpV2beta2TransientCryptoKey {
  /**
   * Name of the key. [required] This is an arbitrary string used to
   * differentiate different keys. A unique key is generated per name: two
   * separate `TransientCryptoKey` protos share the same generated key if their
   * names are the same. When the data crypto key is generated, this name is not
   * used in any way (repeating the api call will result in a different key
   * being generated).
   */
  name: string;
}
/**
 * What event needs to occur for a new job to be started.
 */
export interface Schema$GooglePrivacyDlpV2beta2Trigger {
  /**
   * Create a job on a repeating basis based on the elapse of time.
   */
  schedule: Schema$GooglePrivacyDlpV2beta2Schedule;
}
/**
 * Using raw keys is prone to security risks due to accidentally leaking the
 * key. Choose another type of key if possible.
 */
export interface Schema$GooglePrivacyDlpV2beta2UnwrappedCryptoKey {
  /**
   * The AES 128/192/256 bit key. [required]
   */
  key: string;
}
/**
 * Request message for UpdateDeidentifyTemplate.
 */
export interface Schema$GooglePrivacyDlpV2beta2UpdateDeidentifyTemplateRequest {
  /**
   * New DeidentifyTemplate value.
   */
  deidentifyTemplate: Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate;
  /**
   * Mask to control which fields get updated.
   */
  updateMask: string;
}
/**
 * Request message for UpdateInspectTemplate.
 */
export interface Schema$GooglePrivacyDlpV2beta2UpdateInspectTemplateRequest {
  /**
   * New InspectTemplate value.
   */
  inspectTemplate: Schema$GooglePrivacyDlpV2beta2InspectTemplate;
  /**
   * Mask to control which fields get updated.
   */
  updateMask: string;
}
/**
 * Request message for UpdateJobTrigger.
 */
export interface Schema$GooglePrivacyDlpV2beta2UpdateJobTriggerRequest {
  /**
   * New JobTrigger value.
   */
  jobTrigger: Schema$GooglePrivacyDlpV2beta2JobTrigger;
  /**
   * Mask to control which fields get updated.
   */
  updateMask: string;
}
/**
 * Set of primitive values supported by the system. Note that for the purposes
 * of inspection or transformation, the number of bytes considered to comprise a
 * &#39;Value&#39; is based on its representation as a UTF-8 encoded string. For
 * example, if &#39;integer_value&#39; is set to 123456789, the number of bytes
 * would be counted as 9, even though an int64 only holds up to 8 bytes of data.
 */
export interface Schema$GooglePrivacyDlpV2beta2Value {
  booleanValue: boolean;
  dateValue: Schema$GoogleTypeDate;
  dayOfWeekValue: string;
  floatValue: number;
  integerValue: string;
  stringValue: string;
  timestampValue: string;
  timeValue: Schema$GoogleTypeTimeOfDay;
}
/**
 * A value of a field, including its frequency.
 */
export interface Schema$GooglePrivacyDlpV2beta2ValueFrequency {
  /**
   * How many times the value is contained in the field.
   */
  count: string;
  /**
   * A value contained in the field in question.
   */
  value: Schema$GooglePrivacyDlpV2beta2Value;
}
/**
 * Message defining a list of words or phrases to search for in the data.
 */
export interface Schema$GooglePrivacyDlpV2beta2WordList {
  /**
   * Words or phrases defining the dictionary. The dictionary must contain at
   * least one phrase and every phrase must contain at least 2 characters that
   * are letters or digits. [required]
   */
  words: string[];
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo {
 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The
 * JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$GoogleProtobufEmpty {}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may
 * have a `Status` message for error reporting.  - Batch operations. If a client
 * uses batch request and batch response, the     `Status` message should be
 * used directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation
 * results in its response, the status of those operations should be
 * represented directly using the `Status` message.  - Logging. If some API
 * errors are stored in logs, the message `Status` could     be used directly
 * after any stripping needed for security/privacy reasons.
 */
export interface Schema$GoogleRpcStatus {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * Represents a whole calendar date, e.g. date of birth. The time of day and
 * time zone are either specified elsewhere or are not significant. The date is
 * relative to the Proleptic Gregorian Calendar. The day may be 0 to represent a
 * year and month where the day is not significant, e.g. credit card expiration
 * date. The year may be 0 to represent a month and day independent of year,
 * e.g. anniversary date. Related types are google.type.TimeOfDay and
 * `google.protobuf.Timestamp`.
 */
export interface Schema$GoogleTypeDate {
  /**
   * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
   * if specifying a year/month where the day is not significant.
   */
  day: number;
  /**
   * Month of year. Must be from 1 to 12.
   */
  month: number;
  /**
   * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a
   * year.
   */
  year: number;
}
/**
 * Represents a time of day. The date and time zone are either not significant
 * or are specified elsewhere. An API may choose to allow leap seconds. Related
 * types are google.type.Date and `google.protobuf.Timestamp`.
 */
export interface Schema$GoogleTypeTimeOfDay {
  /**
   * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
   * to allow the value &quot;24:00:00&quot; for scenarios like business closing
   * time.
   */
  hours: number;
  /**
   * Minutes of hour of day. Must be from 0 to 59.
   */
  minutes: number;
  /**
   * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
   */
  nanos: number;
  /**
   * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
   * allow the value 60 if it allows leap-seconds.
   */
  seconds: number;
}

export class Resource$Infotypes {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
  }

  /**
   * dlp.infoTypes.list
   * @desc Returns sensitive information types DLP supports.
   * @alias dlp.infoTypes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter Optional filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
   * @param {string=} params.languageCode Optional BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListInfoTypesResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListInfoTypesResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/infoTypes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2ListInfoTypesResponse>(
            parameters, callback!);
      };
}

export class Resource$Organizations {
  root: Dlp;
  deidentifyTemplates: Resource$Organizations$Deidentifytemplates;
  inspectTemplates: Resource$Organizations$Inspecttemplates;
  constructor(root: Dlp) {
    this.root = root;
    this.deidentifyTemplates =
        new Resource$Organizations$Deidentifytemplates(root);
    this.inspectTemplates = new Resource$Organizations$Inspecttemplates(root);
  }
}
export class Resource$Organizations$Deidentifytemplates {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
  }

  /**
   * dlp.organizations.deidentifyTemplates.create
   * @desc Creates an Deidentify template for re-using frequently used
   * configuration for Deidentifying content, images, and storage.
   * @alias dlp.organizations.deidentifyTemplates.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
   * @param {().GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>(
            parameters, callback!);
      };


  /**
   * dlp.organizations.deidentifyTemplates.delete
   * @desc Deletes inspect templates.
   * @alias dlp.organizations.deidentifyTemplates.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dlp.organizations.deidentifyTemplates.get
   * @desc Gets an inspect template.
   * @alias dlp.organizations.deidentifyTemplates.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>(
            parameters, callback!);
      };


  /**
   * dlp.organizations.deidentifyTemplates.list
   * @desc Lists inspect templates.
   * @alias dlp.organizations.deidentifyTemplates.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
   * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListDeidentifyTemplates`.
   * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse>(
            parameters, callback!);
      };


  /**
   * dlp.organizations.deidentifyTemplates.patch
   * @desc Updates the inspect template.
   * @alias dlp.organizations.deidentifyTemplates.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
   * @param {().GooglePrivacyDlpV2beta2UpdateDeidentifyTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>(
            parameters, callback!);
      };
}

export class Resource$Organizations$Inspecttemplates {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
  }

  /**
   * dlp.organizations.inspectTemplates.create
   * @desc Creates an inspect template for re-using frequently used
   * configuration for inspecting content, images, and storage.
   * @alias dlp.organizations.inspectTemplates.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
   * @param {().GooglePrivacyDlpV2beta2CreateInspectTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2InspectTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2InspectTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2InspectTemplate>(
            parameters, callback!);
      };


  /**
   * dlp.organizations.inspectTemplates.delete
   * @desc Deletes inspect templates.
   * @alias dlp.organizations.inspectTemplates.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dlp.organizations.inspectTemplates.get
   * @desc Gets an inspect template.
   * @alias dlp.organizations.inspectTemplates.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2InspectTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2InspectTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2InspectTemplate>(
            parameters, callback!);
      };


  /**
   * dlp.organizations.inspectTemplates.list
   * @desc Lists inspect templates.
   * @alias dlp.organizations.inspectTemplates.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
   * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListInspectTemplates`.
   * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListInspectTemplatesResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListInspectTemplatesResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GooglePrivacyDlpV2beta2ListInspectTemplatesResponse>(
            parameters, callback!);
      };


  /**
   * dlp.organizations.inspectTemplates.patch
   * @desc Updates the inspect template.
   * @alias dlp.organizations.inspectTemplates.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
   * @param {().GooglePrivacyDlpV2beta2UpdateInspectTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2InspectTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2InspectTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2InspectTemplate>(
            parameters, callback!);
      };
}


export class Resource$Projects {
  root: Dlp;
  content: Resource$Projects$Content;
  dataSource: Resource$Projects$Datasource;
  deidentifyTemplates: Resource$Projects$Deidentifytemplates;
  dlpJobs: Resource$Projects$Dlpjobs;
  image: Resource$Projects$Image;
  inspectTemplates: Resource$Projects$Inspecttemplates;
  jobTriggers: Resource$Projects$Jobtriggers;
  constructor(root: Dlp) {
    this.root = root;
    this.content = new Resource$Projects$Content(root);
    this.dataSource = new Resource$Projects$Datasource(root);
    this.deidentifyTemplates = new Resource$Projects$Deidentifytemplates(root);
    this.dlpJobs = new Resource$Projects$Dlpjobs(root);
    this.image = new Resource$Projects$Image(root);
    this.inspectTemplates = new Resource$Projects$Inspecttemplates(root);
    this.jobTriggers = new Resource$Projects$Jobtriggers(root);
  }
}
export class Resource$Projects$Content {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
  }

  /**
   * dlp.projects.content.deidentify
   * @desc De-identifies potentially sensitive info from a ContentItem. This
   * method has limits on input size and output size. [How-to
   * guide](/dlp/docs/deidentify-sensitive-data)
   * @alias dlp.projects.content.deidentify
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name, for example projects/my-project-id.
   * @param {().GooglePrivacyDlpV2beta2DeidentifyContentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  deidentify =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2DeidentifyContentResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2DeidentifyContentResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/content:deidentify')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GooglePrivacyDlpV2beta2DeidentifyContentResponse>(
            parameters, callback!);
      };


  /**
   * dlp.projects.content.inspect
   * @desc Finds potentially sensitive info in content. This method has limits
   * on input size, processing time, and output size. [How-to guide for
   * text](/dlp/docs/inspecting-text), [How-to guide for
   * images](/dlp/docs/inspecting-images)
   * @alias dlp.projects.content.inspect
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name, for example projects/my-project-id.
   * @param {().GooglePrivacyDlpV2beta2InspectContentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  inspect =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2InspectContentResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2InspectContentResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/content:inspect')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2InspectContentResponse>(
            parameters, callback!);
      };


  /**
   * dlp.projects.content.reidentify
   * @desc Re-identify content that has been de-identified.
   * @alias dlp.projects.content.reidentify
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name.
   * @param {().GooglePrivacyDlpV2beta2ReidentifyContentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  reidentify =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ReidentifyContentResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ReidentifyContentResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/content:reidentify')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GooglePrivacyDlpV2beta2ReidentifyContentResponse>(
            parameters, callback!);
      };
}

export class Resource$Projects$Datasource {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
  }

  /**
   * dlp.projects.dataSource.analyze
   * @desc Schedules a job to compute risk analysis metrics over content in a
   * Google Cloud Platform repository. [How-to
   * guide](/dlp/docs/compute-risk-analysis)
   * @alias dlp.projects.dataSource.analyze
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name, for example projects/my-project-id.
   * @param {().GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  analyze =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DlpJob>,
       callback?:
           BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DlpJob>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/dataSource:analyze')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2DlpJob>(
            parameters, callback!);
      };


  /**
   * dlp.projects.dataSource.inspect
   * @desc Schedules a job scanning content in a Google Cloud Platform data
   * repository. [How-to guide](/dlp/docs/inspecting-storage)
   * @alias dlp.projects.dataSource.inspect
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name, for example projects/my-project-id.
   * @param {().GooglePrivacyDlpV2beta2InspectDataSourceRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  inspect =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DlpJob>,
       callback?:
           BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DlpJob>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/dataSource:inspect')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2DlpJob>(
            parameters, callback!);
      };
}

export class Resource$Projects$Deidentifytemplates {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
  }

  /**
   * dlp.projects.deidentifyTemplates.create
   * @desc Creates an Deidentify template for re-using frequently used
   * configuration for Deidentifying content, images, and storage.
   * @alias dlp.projects.deidentifyTemplates.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
   * @param {().GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>(
            parameters, callback!);
      };


  /**
   * dlp.projects.deidentifyTemplates.delete
   * @desc Deletes inspect templates.
   * @alias dlp.projects.deidentifyTemplates.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dlp.projects.deidentifyTemplates.get
   * @desc Gets an inspect template.
   * @alias dlp.projects.deidentifyTemplates.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>(
            parameters, callback!);
      };


  /**
   * dlp.projects.deidentifyTemplates.list
   * @desc Lists inspect templates.
   * @alias dlp.projects.deidentifyTemplates.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
   * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListDeidentifyTemplates`.
   * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse>(
            parameters, callback!);
      };


  /**
   * dlp.projects.deidentifyTemplates.patch
   * @desc Updates the inspect template.
   * @alias dlp.projects.deidentifyTemplates.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
   * @param {().GooglePrivacyDlpV2beta2UpdateDeidentifyTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2DeidentifyTemplate>(
            parameters, callback!);
      };
}

export class Resource$Projects$Dlpjobs {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
  }

  /**
   * dlp.projects.dlpJobs.cancel
   * @desc Starts asynchronous cancellation on a long-running DlpJob.  The
   * server makes a best effort to cancel the DlpJob, but success is not
   * guaranteed.
   * @alias dlp.projects.dlpJobs.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the DlpJob resource to be cancelled.
   * @param {().GooglePrivacyDlpV2beta2CancelDlpJobRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancel =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{name}:cancel')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dlp.projects.dlpJobs.delete
   * @desc Deletes a long-running DlpJob. This method indicates that the client
   * is no longer interested in the DlpJob result. The job will be cancelled if
   * possible.
   * @alias dlp.projects.dlpJobs.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the DlpJob resource to be deleted.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dlp.projects.dlpJobs.get
   * @desc Gets the latest state of a long-running DlpJob.
   * @alias dlp.projects.dlpJobs.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the DlpJob resource.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DlpJob>,
       callback?:
           BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2DlpJob>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2DlpJob>(
            parameters, callback!);
      };


  /**
   * dlp.projects.dlpJobs.list
   * @desc Lists DlpJobs that match the specified filter in the request.
   * @alias dlp.projects.dlpJobs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter Optional. Allows filtering.  Supported syntax:  * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `<field> <operator> <value>`. * Supported fields/values for inspect jobs:     - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY     - `trigger_name` - The resource name of the trigger that created job. * Supported fields for risk analysis jobs:     - `state` - RUNNING|CANCELED|FINISHED|FAILED * The operator must be `=` or `!=`.  Examples:  * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled)  The length of this field should be no more than 500 characters.
   * @param {integer=} params.pageSize The standard list page size.
   * @param {string=} params.pageToken The standard list page token.
   * @param {string} params.parent The parent resource name, for example projects/my-project-id.
   * @param {string=} params.type The type of job. Defaults to `DlpJobType.INSPECT`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2ListDlpJobsResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListDlpJobsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/dlpJobs')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2ListDlpJobsResponse>(
            parameters, callback!);
      };
}

export class Resource$Projects$Image {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
  }

  /**
   * dlp.projects.image.redact
   * @desc Redacts potentially sensitive info from an image. This method has
   * limits on input size, processing time, and output size. [How-to
   * guide](/dlp/docs/redacting-sensitive-data-images)
   * @alias dlp.projects.image.redact
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name, for example projects/my-project-id.
   * @param {().GooglePrivacyDlpV2beta2RedactImageRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  redact =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2RedactImageResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2RedactImageResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/image:redact')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2RedactImageResponse>(
            parameters, callback!);
      };
}

export class Resource$Projects$Inspecttemplates {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
  }

  /**
   * dlp.projects.inspectTemplates.create
   * @desc Creates an inspect template for re-using frequently used
   * configuration for inspecting content, images, and storage.
   * @alias dlp.projects.inspectTemplates.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
   * @param {().GooglePrivacyDlpV2beta2CreateInspectTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2InspectTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2InspectTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2InspectTemplate>(
            parameters, callback!);
      };


  /**
   * dlp.projects.inspectTemplates.delete
   * @desc Deletes inspect templates.
   * @alias dlp.projects.inspectTemplates.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dlp.projects.inspectTemplates.get
   * @desc Gets an inspect template.
   * @alias dlp.projects.inspectTemplates.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2InspectTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2InspectTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2InspectTemplate>(
            parameters, callback!);
      };


  /**
   * dlp.projects.inspectTemplates.list
   * @desc Lists inspect templates.
   * @alias dlp.projects.inspectTemplates.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
   * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListInspectTemplates`.
   * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListInspectTemplatesResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListInspectTemplatesResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<
            Schema$GooglePrivacyDlpV2beta2ListInspectTemplatesResponse>(
            parameters, callback!);
      };


  /**
   * dlp.projects.inspectTemplates.patch
   * @desc Updates the inspect template.
   * @alias dlp.projects.inspectTemplates.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
   * @param {().GooglePrivacyDlpV2beta2UpdateInspectTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2InspectTemplate>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2InspectTemplate>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2InspectTemplate>(
            parameters, callback!);
      };
}

export class Resource$Projects$Jobtriggers {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
  }

  /**
   * dlp.projects.jobTriggers.create
   * @desc Creates a job to run DLP actions such as scanning storage for
   * sensitive information on a set schedule.
   * @alias dlp.projects.jobTriggers.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent resource name, for example projects/my-project-id.
   * @param {().GooglePrivacyDlpV2beta2CreateJobTriggerRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2JobTrigger>,
       callback?:
           BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2JobTrigger>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/jobTriggers')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2JobTrigger>(
            parameters, callback!);
      };


  /**
   * dlp.projects.jobTriggers.delete
   * @desc Deletes a job trigger.
   * @alias dlp.projects.jobTriggers.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
       callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback!);
      };


  /**
   * dlp.projects.jobTriggers.get
   * @desc Gets a job trigger.
   * @alias dlp.projects.jobTriggers.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2JobTrigger>,
       callback?:
           BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2JobTrigger>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2JobTrigger>(
            parameters, callback!);
      };


  /**
   * dlp.projects.jobTriggers.list
   * @desc Lists job triggers.
   * @alias dlp.projects.jobTriggers.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.orderBy Optional comma separated list of triggeredJob fields to order by, followed by 'asc/desc' postfix, i.e. `"create_time asc,name desc,schedule_mode asc"`. This list is case-insensitive.  Example: `"name asc,schedule_mode desc, status desc"`  Supported filters keys and values are:  - `create_time`: corresponds to time the triggeredJob was created. - `update_time`: corresponds to time the triggeredJob was last updated. - `name`: corresponds to JobTrigger's display name. - `status`: corresponds to the triggeredJob status.
   * @param {integer=} params.pageSize Optional size of the page, can be limited by a server.
   * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to ListJobTriggers. `order_by` and `filter` should not change for subsequent calls, but can be omitted if token is specified.
   * @param {string} params.parent The parent resource name, for example projects/my-project-id.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListJobTriggersResponse>,
       callback?: BodyResponseCallback<
           Schema$GooglePrivacyDlpV2beta2ListJobTriggersResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/jobTriggers')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2ListJobTriggersResponse>(
            parameters, callback!);
      };


  /**
   * dlp.projects.jobTriggers.patch
   * @desc Updates a job trigger.
   * @alias dlp.projects.jobTriggers.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
   * @param {().GooglePrivacyDlpV2beta2UpdateJobTriggerRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2JobTrigger>,
       callback?:
           BodyResponseCallback<Schema$GooglePrivacyDlpV2beta2JobTrigger>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$GooglePrivacyDlpV2beta2JobTrigger>(
            parameters, callback!);
      };
}
