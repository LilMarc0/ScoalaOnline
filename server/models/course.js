const fs = require('fs');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('course', {
      nume: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 50]
      },
      subtitlu: {
          type: DataTypes.STRING
      },
      descriere: {
          type: DataTypes.STRING
      },
      linkThumbnail: {
          type: DataTypes.STRING
      },
      linkDemo: {
        type: DataTypes.STRING
      },
    },
    {
      hooks: {
        beforeDestroy(course) {
          try{
            fs.unlink('../static/' + course.linkThumbnail, err => {
              if (err) console.log(err);
            });
            fs.unlink('../static/' + course.linkDemo, err => {
              if (err) console.log(err);
            });
          } catch {

          }
        },
        beforeBulkDestroy(course) {
          try {
            fs.unlink('../static/' + course.linkThumbnail, err => {
              if (err) console.log(err);
            });
            fs.unlink('../static/' + course.linkDemo, err => {
              if (err) console.log(err);
            });
          }catch {
            
          }
        }
      }
    }
    );
  };
  