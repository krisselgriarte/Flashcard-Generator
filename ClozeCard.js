const chalk = require("chalk");

function ClozeCard(text,cloze) {
  if(this instanceof ClozeCard) {
    this.checkCloze(text,cloze);
    this.full = text;
    this.cloze = cloze;
    this.partial();
  } else {
    return new ClozeCard(text,cloze);
  }

}

ClozeCard.prototype.partial = function() {
  this.partial = (this.full).replace(this.cloze, "...");
}

ClozeCard.prototype.checkCloze = function(text,cloze) {
  if (!text.includes(cloze)) {
    console.log(chalk.red.bold("Oops! This doesnt work..Sorry"));
    return false;
  }
}
module.exports = ClozeCard;
