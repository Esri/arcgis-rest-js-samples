import {
  createApiKey,
  updateApiKey,
  getApiKey,
} from "@esri/arcgis-rest-developer-credentials";
import { ArcGISIdentityManager } from "@esri/arcgis-rest-request";
import { removeItem } from "@esri/arcgis-rest-portal";

const authentication = await ArcGISIdentityManager.signIn({
  username: "patrickarlt.devext.247",
  password: "patrickarlt.devext.2471a",
  portal: "https://devext.arcgis.com/sharing/rest",
});

const created = await createApiKey({
  authentication,
  title: "xyz_title",
  description: "xyz_desc",
  tags: ["xyz_tag1", "xyz_tag2"],
  privileges: ["premium:user:geocode:temporary"],
  generateToken1: true,
  apiToken1ExpirationDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
});

console.log(created);

const updated = await updateApiKey({
  authentication,
  itemId: created.item.id,
  httpReferrers: ["https://example.com"],
  generateToken2: true,
  apiToken2ExpirationDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
});

console.log(updated);

const fetched = await getApiKey({
  authentication,
  itemId: created.item.id,
});

console.log(fetched);

const deleted = await removeItem({
  id: created.item.id,
  authentication,
});

console.log(deleted);
