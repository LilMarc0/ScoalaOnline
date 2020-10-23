const fs = require('fs');



module.exports = function(sequelize, DataTypes) {
    return sequelize.define('chapter', {
      nume: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 50]
      },
      descriere: {
        type: DataTypes.STRING,
        unique: true,
      },
      linkVideo: {
          type: DataTypes.STRING
      }
    }, {
      hooks: {
        beforeDestroy(chapter) {
          try{
            console.log('--------', '../static/' + chapter.linkVideo);
            fs.unlink('../static/' + chapter.linkVideo, err => {
              if (err) console.log(err);
            });
          } catch {

          }
        },
        beforeBulkDestroy(chapter) {
          try{
            console.log('--------', '../static/' + chapter.linkVideo);
            fs.unlink('../static/' + chapter.linkVideo, err => {
              if (err) console.log(err);
            });
          } catch {

          }

        }
      }
    }
    );
  };