<div align="left">

[![Visit Unstructured](./header.png)](https://unstructured.io)

# [Unstructured](https://unstructured.io)<a id="unstructured"></a>

At Unstructured, we're on a mission to give organizations access to all of their data. We know the world runs on documents—from research reports and memos, to quarterly filings and plans of action, documents are the unit of information that companies depend on. And yet, 80% of this information is trapped in inaccessible formats, and businesses have long struggled to unlock this data, leading to information silos, inefficient decision-making, and repetitive work. Until now.

Unstructured captures this unstructured data wherever it lives and transforms it into AI-friendly JSON files for companies who are eager to fold AI into their business.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`unstructured.general.createPipeline`](#unstructuredgeneralcreatepipeline)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Unstructured&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Unstructured } from "unstructured-typescript-sdk";

const unstructured = new Unstructured({
  // Defining the base path is optional and defaults to https://api.unstructured.io
  // basePath: "https://api.unstructured.io",
  apiKey: "API_KEY",
});

const createPipelineResponse = await unstructured.general.createPipeline({
  files:
    "{summary=File to be partitioned, externalValue=https://github.com/Unstructured-IO/unstructured/blob/98d3541909f64290b5efb65a226fc3ee8a7cc5ee/example-docs/layout-parser-paper.pdf}",
  strategy: "hi_res",
  gz_uncompressed_content_type: "application/pdf",
  output_format: "application/json",
  encoding: "utf-8",
  hi_res_model_name: "yolox",
  languages: ["[eng]"],
  chunking_strategy: "by_title",
  combine_under_n_chars: 500,
  new_after_n_chars: 1500,
  max_characters: 1500,
  overlap: 25,
  overlap_all: true,
  extract_image_block_types: ["image", "table"],
});

console.log(createPipelineResponse);
```

## Reference<a id="reference"></a>


### `unstructured.general.createPipeline`<a id="unstructuredgeneralcreatepipeline"></a>

Pipeline 1

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPipelineResponse = await unstructured.general.createPipeline({
  files:
    "{summary=File to be partitioned, externalValue=https://github.com/Unstructured-IO/unstructured/blob/98d3541909f64290b5efb65a226fc3ee8a7cc5ee/example-docs/layout-parser-paper.pdf}",
  strategy: "hi_res",
  gz_uncompressed_content_type: "application/pdf",
  output_format: "application/json",
  encoding: "utf-8",
  hi_res_model_name: "yolox",
  languages: ["[eng]"],
  chunking_strategy: "by_title",
  combine_under_n_chars: 500,
  new_after_n_chars: 1500,
  max_characters: 1500,
  overlap: 25,
  overlap_all: true,
  extract_image_block_types: ["image", "table"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### files: `Uint8Array | File | buffer.File`<a id="files-uint8array--file--bufferfile"></a>

The file to extract

##### strategy: `string`<a id="strategy-string"></a>

The strategy to use for partitioning PDF/image. Options are fast, hi_res, auto. Default: auto

##### gzUncompressedContentType: `string`<a id="gzuncompressedcontenttype-string"></a>

If file is gzipped, use this content type after unzipping

##### outputFormat: `string`<a id="outputformat-string"></a>

The format of the response. Supported formats are application/json and text/csv. Default: application/json.

##### coordinates: `boolean`<a id="coordinates-boolean"></a>

If true, return coordinates for each element. Default: false

##### encoding: `string`<a id="encoding-string"></a>

The encoding method used to decode the text input. Default: utf-8

##### hiResModelName: `string`<a id="hiresmodelname-string"></a>

The name of the inference model used when strategy is hi_res

##### includePageBreaks: `boolean`<a id="includepagebreaks-boolean"></a>

If True, the output will include page breaks if the filetype supports it. Default: false

##### languages: `string`[]<a id="languages-string"></a>

The languages present in the document, for use in partitioning and/or OCR

##### pdfInferTableStructure: `boolean`<a id="pdfinfertablestructure-boolean"></a>

If True and strategy=hi_res, any Table Elements extracted from a PDF will include an additional metadata field, \\\'text_as_html\\\', where the value (string) is a just a transformation of the data into an HTML <table>.

##### skipInferTableTypes: `string`[]<a id="skipinfertabletypes-string"></a>

The document types that you want to skip table extraction with. Default: [\\\'pdf\\\', \\\'jpg\\\', \\\'png\\\']

##### xmlKeepTags: `boolean`<a id="xmlkeeptags-boolean"></a>

If True, will retain the XML tags in the output. Otherwise it will simply extract the text from within the tags. Only applies to partition_xml.

##### chunkingStrategy: `string`<a id="chunkingstrategy-string"></a>

Use one of the supported strategies to chunk the returned elements. Currently supports: by_title

##### multipageSections: `boolean`<a id="multipagesections-boolean"></a>

If chunking strategy is set, determines if sections can span multiple sections. Default: true

##### combineUnderNChars: `number`<a id="combineundernchars-number"></a>

If chunking strategy is set, combine elements until a section reaches a length of n chars. Default: 500

##### newAfterNChars: `number`<a id="newafternchars-number"></a>

If chunking strategy is set, cut off new sections after reaching a length of n chars (soft max). Default: 1500

##### maxCharacters: `number`<a id="maxcharacters-number"></a>

If chunking strategy is set, cut off new sections after reaching a length of n chars (hard max). Default: 1500

##### overlap: `number`<a id="overlap-number"></a>

A prefix of this many trailing characters from prior text-split chunk is applied to second and later chunks formed from oversized elements by text-splitting. Default: None

##### overlapAll: `boolean`<a id="overlapall-boolean"></a>

When True, overlap is also applied to \\\'normal\\\' chunks formed by combining whole elements. Use with caution as this can introduce noise into otherwise clean semantic units. Default: None

##### extractImageBlockTypes: `string`[]<a id="extractimageblocktypes-string"></a>

The types of elements to extract, for use in extracting image blocks as base64 encoded data stored in metadata fields

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/general/v0/general` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
