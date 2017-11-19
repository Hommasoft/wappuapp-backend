var util = require('../src/util/seeds');

exports.seed = function(knex, Promise) {
  return util.insertOrUpdate(knex, 'feed_items', {
    id: 1,
    user_id: 1,
    text: "Test feed item",
    type: "TEXT"
  })
  .then(() => util.insertOrUpdate(knex, 'feed_items', {
    id: 2,
    user_id: 1,
    text: "More feed",
    type: "TEXT"
  }))
  .then(() => util.insertOrUpdate(knex, 'feed_items', {
    id: 3,
    user_id: 1,
    image_path: "https://flockler.com/thumbs/2004/chilicorn_no_text-512_s830x0_q80_noupscale.png",
    type: "IMAGE"
  }))
  .then(() => util.insertOrUpdate(knex, 'feed_items', {
    id: 4,
    user_id: 1,
    text: "EVEN more feed",
    type: "TEXT"
  }))

}
