import { Router } from 'express'

import exercisesController from '../controllers/exercises'
import authentication from '../middleware/authentication'

const router = Router()

router.get('/exercises', authentication, exercisesController.getAll)
// router.get('/exercises/:exerciseId', exercisesController.getById)
// router.delete('/exercises/:exerciseId', exercisesController.deleteById)
router.post('/exercises', authentication, exercisesController.create)
// router.put('/exercises/:exerciseId', exercisesController.edit)

export default router
