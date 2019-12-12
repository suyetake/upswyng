import axios from "axios";
import { THotline } from "@upswyng/upswyng-types";

axios
  .get("https://strapped.firebaseio.com/crisisline.json")
  // pull the source json back
  .then(async ({ status, statusText, data: resources }) => {
    if (status !== 200) {
      throw new Error(`Error fetching strappd data: ${statusText}`);
    }
    const entries: [string, THotline][] = Object.entries(resources) as [
      string,
      THotline
    ][];
  console.log(entries);

    return entries;
  })
  // parse the json and get all URLs back
  .then(entries => {
    const urlKeys: string[] = ["website", "chatweblink"];

    const validUrls: string[] = entries.reduce((acc, [_, hotline]) => {
      // foreach hotline, iterate through the sub-keys

      return acc.concat(
        urlKeys.reduce((innerAcc, key) => {

          // do some string validation
          let url: string;
          if (typeof hotline[key] == "string") {
            url = String(hotline[key]).trim();
          }
          if (url.length > 0) innerAcc.push(url);

          return innerAcc;

        }, new Array<string>())
      );

    }, new Array<string>());
    return validUrls;
  })
  .then(validUrls =>{
    validUrls.map(url => {
      if (!url.startsWith('http')) {
        url = `https://${url}`
      }
      axios
        .get(url)
        .then(async ({ status, statusText, data: resources }) => {
          console.log(url, status)
        })
        .catch(async (reason: any) => {
          console.log(url, 'FAILED');
        })
    })
    console.log(validUrls);
  });

