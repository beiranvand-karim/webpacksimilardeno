import { copySync } from "https://deno.land/std@0.81.0/fs/mod.ts";

copySync("./app", "./build");
