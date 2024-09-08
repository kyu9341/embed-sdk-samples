/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import "./style.css";

// Theme imports
import "@spectrum-web-components/theme/express/theme-light.js";
import "@spectrum-web-components/theme/express/scale-medium.js";
import "@spectrum-web-components/theme/sp-theme.js";
// Component imports
import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/divider/sp-divider.js";

// Load the Adobe SDK
await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");
console.log("CCEverywhere loaded", window.CCEverywhere);

// Host information for the Adobe SDK
const hostInfo = {
  clientId: import.meta.env.VITE_API_KEY,
  appName: "Embed SDK Sample",
};

// Optional configuration parameters (locale, login, etc.)
const configParams = {};

const { editor } = await window.CCEverywhere.initialize(hostInfo, configParams);

document.getElementById("launchExpress").onclick = async () => {
  // Optional document settings (canvas size)
  let docConfig = {};
  // Optional application settings (allowed files, template, etc.)
  let appConfig = {};
  // Optional export settings (label, action type, style, etc.)
  let exportConfig = [];

  editor.create(docConfig, appConfig, exportConfig);
};
