import axios from "axios";
import { THotline } from "@upswyng/upswyng-types";

axios
    .get("https://strapped.firebaseio.com/crisisline.json")
    .then(async ({ status, statusText, data: resources }) => {
        if (status !== 200) {
            throw new Error(`Error fetching strappd data: ${statusText}`);
        }
        const entries: [string, THotline][] = Object.entries(resources) as [
            string,
            THotline
        ][];

        /* for (const [id, legacyResource] of entries) {
          console.log(legacyResource);
        }*/

        const urlKeys: [string, string] = ["website", "chatweblink"];
        entries.map(([_, hotline]) => {
            urlKeys.map(key => {
                if (typeof hotline[key] == "string") {
                    console.log(String(hotline[key]))
                }
            });
        });
    });
