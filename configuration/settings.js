const settings = {
  //These will be the require parts of my settings.
  "important" : {
    "specifiedPrefix" : "Insert your prefix here!",
    "specifiedOwner" : "Insert your Discord ID here!",
    "specifiedToken" : "Insert your Discord client token here!",
    "specifiedModRole" : "Insert your Mod role name here!"
  },
  //These will be unrequired but useful.
  "config" : {
    "specifiedHex": "Insert your hex colour here! In OxOOOOOO Format."
  }
};
//Exporting my settings object as a module so I can append it to my client.
module.exports = settings;
