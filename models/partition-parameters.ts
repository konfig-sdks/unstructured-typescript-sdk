/*
Unstructured Pipeline API

At Unstructured, we're on a mission to give organizations access to all of their data. We know the world runs on documents—from research reports and memos, to quarterly filings and plans of action, documents are the unit of information that companies depend on. And yet, 80% of this information is trapped in inaccessible formats, and businesses have long struggled to unlock this data, leading to information silos, inefficient decision-making, and repetitive work. Until now.

Unstructured captures this unstructured data wherever it lives and transforms it into AI-friendly JSON files for companies who are eager to fold AI into their business.

The version of the OpenAPI document: 0.0.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PartitionParameters
 */
export interface PartitionParameters {
    /**
     * The file to extract
     * @type {Uint8Array | File | buffer.File}
     * @memberof PartitionParameters
     */
    'files'?: Uint8Array | File | buffer.File;
    /**
     * The strategy to use for partitioning PDF/image. Options are fast, hi_res, auto. Default: auto
     * @type {string}
     * @memberof PartitionParameters
     */
    'strategy'?: string;
    /**
     * If file is gzipped, use this content type after unzipping
     * @type {string}
     * @memberof PartitionParameters
     */
    'gz_uncompressed_content_type'?: string;
    /**
     * The format of the response. Supported formats are application/json and text/csv. Default: application/json.
     * @type {string}
     * @memberof PartitionParameters
     */
    'output_format'?: string;
    /**
     * If true, return coordinates for each element. Default: false
     * @type {boolean}
     * @memberof PartitionParameters
     */
    'coordinates'?: boolean;
    /**
     * The encoding method used to decode the text input. Default: utf-8
     * @type {string}
     * @memberof PartitionParameters
     */
    'encoding'?: string;
    /**
     * The name of the inference model used when strategy is hi_res
     * @type {string}
     * @memberof PartitionParameters
     */
    'hi_res_model_name'?: string;
    /**
     * If True, the output will include page breaks if the filetype supports it. Default: false
     * @type {boolean}
     * @memberof PartitionParameters
     */
    'include_page_breaks'?: boolean;
    /**
     * The languages present in the document, for use in partitioning and/or OCR
     * @type {Array<string>}
     * @memberof PartitionParameters
     */
    'languages'?: Array<string>;
    /**
     * If True and strategy=hi_res, any Table Elements extracted from a PDF will include an additional metadata field, \'text_as_html\', where the value (string) is a just a transformation of the data into an HTML <table>.
     * @type {boolean}
     * @memberof PartitionParameters
     */
    'pdf_infer_table_structure'?: boolean;
    /**
     * The document types that you want to skip table extraction with. Default: [\'pdf\', \'jpg\', \'png\']
     * @type {Array<string>}
     * @memberof PartitionParameters
     */
    'skip_infer_table_types'?: Array<string>;
    /**
     * If True, will retain the XML tags in the output. Otherwise it will simply extract the text from within the tags. Only applies to partition_xml.
     * @type {boolean}
     * @memberof PartitionParameters
     */
    'xml_keep_tags'?: boolean;
    /**
     * Use one of the supported strategies to chunk the returned elements. Currently supports: by_title
     * @type {string}
     * @memberof PartitionParameters
     */
    'chunking_strategy'?: string;
    /**
     * If chunking strategy is set, determines if sections can span multiple sections. Default: true
     * @type {boolean}
     * @memberof PartitionParameters
     */
    'multipage_sections'?: boolean;
    /**
     * If chunking strategy is set, combine elements until a section reaches a length of n chars. Default: 500
     * @type {number}
     * @memberof PartitionParameters
     */
    'combine_under_n_chars'?: number;
    /**
     * If chunking strategy is set, cut off new sections after reaching a length of n chars (soft max). Default: 1500
     * @type {number}
     * @memberof PartitionParameters
     */
    'new_after_n_chars'?: number;
    /**
     * If chunking strategy is set, cut off new sections after reaching a length of n chars (hard max). Default: 1500
     * @type {number}
     * @memberof PartitionParameters
     */
    'max_characters'?: number;
    /**
     * A prefix of this many trailing characters from prior text-split chunk is applied to second and later chunks formed from oversized elements by text-splitting. Default: None
     * @type {number}
     * @memberof PartitionParameters
     */
    'overlap'?: number;
    /**
     * When True, overlap is also applied to \'normal\' chunks formed by combining whole elements. Use with caution as this can introduce noise into otherwise clean semantic units. Default: None
     * @type {boolean}
     * @memberof PartitionParameters
     */
    'overlap_all'?: boolean;
    /**
     * The types of elements to extract, for use in extracting image blocks as base64 encoded data stored in metadata fields
     * @type {Array<string>}
     * @memberof PartitionParameters
     */
    'extract_image_block_types'?: Array<string>;
}

