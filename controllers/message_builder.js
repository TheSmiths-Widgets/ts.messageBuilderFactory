/** 
 * @abstract
 * @class builders.MessageBuilder
 *
 * Interface that every builder should implement.
 */

/** @method build
 * Build a message 
 *
 * @param {appcelerator: Titanium.UI.TableViewRow TableViewRow} row The parent row
 * @param {Object} message The message model object
 */
function build (row, message) { };




exports.build = build;
