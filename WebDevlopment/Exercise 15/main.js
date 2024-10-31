import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath = "C:\\Users\\aksha\\Desktop\\Photos\\My Doc";

let files = await fs.readdir(basePath);

for (const items of files) {
  console.log(items);
  let ext = items.split(".")[items.split(".").length - 1];

  if (ext != "js" && ext != "json" && items.split(".").length > 1) {
    if (fsn.existsSync(path.join(basePath, ext))) {
      fs.rename(path.join(basePath, items), path.join(basePath, ext, items));
    } else {
      fs.mkdir(ext);
      fs.rename(path.join(basePath, items), path.join(basePath, ext, items));
    }
  }
}
