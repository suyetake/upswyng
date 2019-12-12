import axios from "axios";
import { THotline } from "@upswyng/upswyng-types";

type hotlineURL = {
  name: string
  url: string
};

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
    //console.log(entries);

    return entries;
  })
  // parse the json and get all URLs back
  .then(entries => {
    const entryPrimaryKey: string = "name" 
    const urlKeys: string[] = ["website", "chatweblink"];

    const validUrls: hotlineURL[] = entries.reduce((acc, [_, hotline]) => {
      // foreach hotline, iterate through the sub-keys

      return acc.concat(
        urlKeys.reduce((innerAcc, key) => {

          // do some string validation
          let url: string;
          if (typeof hotline[key] == "string") {
            url = String(hotline[key]).trim();
          }
          if (url.length > 0) innerAcc.push({name:hotline[entryPrimaryKey], url});

          return innerAcc;

        }, new Array<hotlineURL>())
      );

    }, new Array<hotlineURL>());
    return validUrls;
  })
  .then((hlURLs: hotlineURL[]) =>{
    hlURLs.map((hlURL: hotlineURL )=> {
      if (!hlURL.url.startsWith('http')) {
        hlURL.url = `https://${hlURL.url}`
      }
      axios
        .get(hlURL.url)
        .then(async ({ status, statusText, data: resources }) => {
          console.log(hlURL.url, status)
        })
        .catch(async (reason: any) => {

          console.log(hlURL, 'FAILED');
        })
    })
  });

