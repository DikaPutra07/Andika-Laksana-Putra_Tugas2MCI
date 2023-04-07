const router = require('express').Router();
const listBankController = require('../controllers/listBankController');

router.get('/', listBankController.getAllListBank);
router.get('/:id', listBankController.getListBankById);
router.post('/', listBankController.createListBank);
router.put('/:id', listBankController.updateListBank);
router.delete('/:id', listBankController.deleteListBank);

module.exports = router;