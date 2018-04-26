const settings = {
  //These will be the require parts of my settings.
  "important" : {
    "Prefix" : "Insert your prefix here!",
    "Owner" : "Insert your Discord ID here!",
    "Token" : "Insert your Discord client token here!",
    "ModRole" : "Insert your Mod role name here!"
  },
  //These will be unrequired but useful in some cases.
  "config" : {
    "Hex": "Insert your hex colour here! In OxOOOOOO Format."
  }
};
//Exporting my settings object as a module so I can append it to my client.
module.exports = settings;
