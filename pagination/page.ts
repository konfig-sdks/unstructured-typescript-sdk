/*
Unstructured Pipeline API

At Unstructured, we're on a mission to give organizations access to all of their data. We know the world runs on documents—from research reports and memos, to quarterly filings and plans of action, documents are the unit of information that companies depend on. And yet, 80% of this information is trapped in inaccessible formats, and businesses have long struggled to unlock this data, leading to information silos, inefficient decision-making, and repetitive work. Until now.

Unstructured captures this unstructured data wherever it lives and transforms it into AI-friendly JSON files for companies who are eager to fold AI into their business.

The version of the OpenAPI document: 0.0.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { Pageable, PageParametersBase, PageRequest } from "./pageable";

/**
 * The set of parameters that appear in a paginated operation (requestBody or parameters)
 */
export type PageParameterProperties = {
  [key: string]: any
};

export type PageParameters = PageParametersBase<PageParameterProperties>;

/**
 * The set of properties that appear in a paginated operation's response
 */
export interface PageInfo {
  [key: string]: any
}

export class Page<
  Data extends PageInfo,
  Parameters extends PageParameters
> extends Pageable<Data, Parameters> {
  make(parameters: {
    data: Data;
    initialParameters: Parameters;
    request: PageRequest<Data, Parameters>;
  }): Pageable<Data, Parameters> {
    throw new Error("Method not implemented.");
  }

  protected get previousParameters(): PageParameterProperties | null {
    throw Error("Stub")
  }

  protected get nextParameters(): PageParameterProperties | null {
    throw Error("Stub")
  }

  hasPrevious(): boolean {
    throw Error("Stub")
  }

  hasNext(): boolean {
    throw Error("Stub")
  }
}
