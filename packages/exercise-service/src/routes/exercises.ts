import { Router } from 'express'

import exercisesController from '../controllers/exercises'

const router = Router()

router.get('/exercises', exercisesController.getAll)
// router.get('/exercises/:exerciseId', exercisesController.getById)
// router.delete('/exercises/:exerciseId', exercisesController.deleteById)
router.post('/exercises', exercisesController.create)
// router.put('/exercises/:exerciseId', exercisesController.edit)

export default router
