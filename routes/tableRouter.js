const Router = require('express')
const router = new Router()
const TableController = require('../controllers/tableController')
const urlencodedParser = Router.urlencoded({extended: false});

router.post('/', urlencodedParser, TableController.post)
router.get('/', TableController.get)

module.exports = router