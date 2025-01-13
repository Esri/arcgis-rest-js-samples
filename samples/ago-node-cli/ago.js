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
#!/usr/bin/env node

/**
 * This demo uses the commander module, which streamlines the creation of command-line-applications
 */
const program = require("commander");

program.version("0.0.1");

/**
 * Bring in the search command...
 */
const itemSearchCommand = require("./lib/item-search-command");

program
  .command("search <query>")
  .description("Search for items")
  .action(function (query) {
    console.log(query);
    itemSearchCommand.execute(query);
  });

const itemExportCommand = require("./lib/item-export-command");
program
  .command("export <itemId> <filename>")
  .description("Export an item to a json file")
  .action(function (id, filename) {
    itemExportCommand.execute(id, filename);
  });

program.parse(process.argv);
