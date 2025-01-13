/* Copyright 2025 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { getCategories } from "@esri/arcgis-rest-places";
import * as dotenv from "dotenv";
import fs from "fs";
import find from "unist-util-find";
import { stringify } from "csv-stringify";
import { visit } from "unist-util-visit";

dotenv.config();

// temporarily don't validate the SSL certificate while the service is still in dev
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const authentication = ApiKeyManager.fromKey(process.env.API_KEY);

const { categories } = await getCategories({
  endpoint: "https://places-api.arcgis.com/arcgis/rest/services/places-service/v1/categories",
  authentication
});

console.log("Found categories: ", categories.length);

const topLevelCategories = categories.filter((c) => !c.parents?.length);
const childCategories = categories
  .filter((c) => c.parents?.length)
  .sort((a, b) => {
    return (a.fullLabel?.length || 0) - (b.fullLabel?.length || 0);
  });

const tree = {
  type: "root",
  children: topLevelCategories.map((c) => {
    return {
      type: "category",
      id: c.categoryId,
      fullLabel: c.fullLabel || [],
      children: []
    };
  })
};

childCategories.reduce((tree, child) => {
  child.parents = child.parents || [];
  let currentParentId;
  let parentNode;
  while ((currentParentId = child.parents.shift())) {
    parentNode = find(tree, { id: currentParentId });
  }
  parentNode.children.push({
    type: "category",
    id: child.categoryId,
    fullLabel: child.fullLabel || [],
    children: []
  });
  return tree;
}, tree);

const labels = [
  ["id", "fullLabel", "depth", "direct children", "all children"]
];

visit(tree, (node) => {
  if (node.type === "category") {
    let childCount = 0;
    visit(node, () => {
      childCount++;
    });
    labels.push([
      node.id,
      node.fullLabel.join(" > "),
      node.fullLabel.length,
      node.children.length,
      childCount
    ]);
  }
});

fs.promises.writeFile("tree.json", JSON.stringify(tree, null, 2));

stringify(labels, function (err, output) {
  fs.promises.writeFile("categoryData.csv", output);
});
