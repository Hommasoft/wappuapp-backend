const {knex} = require('../util/database').connect();
const logger = require('../util/logger')(__filename);

function deleteFeedItem(id) {
  return knex('feed_items').delete().where({
    'id': id,
  })
  .then(deletedCount => {
    if (deletedCount > 1) {
      logger.error('Deleted feed item', id);
      throw new Error('Unexpected amount of deletes happened: ' + deletedCount);
    }

    return deletedCount;
  });
}

function shadowBanUser(id) {
  return knex('users').where('uuid', id).update({is_banned: true})
  .then(updatedCount => {
    if (updatedCount > 1) {
      logger.error('Banned user with UUID ', id);
      throw new Error('Unexpected amount of bans happened: ', updatedCount);
    }
    return updatedCount;
  })
}

function unBanUser(id) {
  return knex('users').where('uuid', id).update({is_banned: false})
  .then(updatedCount => {
    if (updatedCount > 1) {
      logger.error('Unbanned user with UUID ', id);
      throw new Error('Unexpected amount of unbans happened: ', updatedCount);
    }
    return updatedCount;
  })
}

export {
  deleteFeedItem,
  shadowBanUser,
  unBanUser
};

